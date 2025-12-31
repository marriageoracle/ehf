import React, { useState, useEffect } from 'https://esm.sh/react@18.2.0';
import Modal from './Modal.js';
import ActionButton from './ActionButton.js';
import { PAYSTACK_PUBLIC_KEY } from '../constants.js';

const createElement = React.createElement;

const PaymentModal = ({ isOpen, onClose, onSuccess, item }) => {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState('collectEmail');
  const containerId = `paystack-container-${item.id}-${Math.random().toString(36).substring(7)}`;

  useEffect(() => {
    if (isOpen) {
      setStep('collectEmail');
      setEmail('');
    }
  }, [isOpen]);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setStep('payment');
    }
  };

  useEffect(() => {
    if (step === 'payment' && isOpen) {
      if (!window.PaystackPop) {
        alert('Payment service is currently unavailable. Please check your internet connection and try again.');
        onClose();
        return;
      }

      const handler = window.PaystackPop.setup({
        key: PAYSTACK_PUBLIC_KEY,
        email: email,
        amount: item.price * 100,
        currency: 'NGN',
        ref: `edherald_${Date.now()}`,
        container: containerId,
        callback: (response) => {
          onSuccess(response);
          onClose();
        },
        onClose: () => {
          onClose();
        },
        metadata: { item_id: item.id, item_title: item.title },
      });
      handler.openIframe();
    }
  }, [step, isOpen, item, email, onSuccess, onClose, containerId]);

  return createElement(Modal, { isOpen: isOpen, onClose: onClose, title: `Payment for ${item.title}` },
    step === 'collectEmail' && createElement('form', { onSubmit: handleEmailSubmit, className: "space-y-4" },
      createElement('p', { className: "text-gray-600 mb-4" },
        "Please enter your email to proceed with the payment of ",
        createElement('strong', null, `₦${item.price.toLocaleString()}`),
        "."
      ),
      createElement('div', null,
        createElement('label', { htmlFor: "email-payment", className: "block text-sm font-medium text-gray-700" }, "Email Address"),
        createElement('input', {
          type: "email",
          id: "email-payment",
          value: email,
          onChange: (e) => setEmail(e.target.value),
          required: true,
          className: "mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-royal-pink-500 focus:border-royal-pink-500",
          placeholder: "you@example.com"
        })
      ),
      createElement('div', { className: "pt-2" },
        createElement(ActionButton, { type: "submit", className: "w-full" }, "Proceed to Payment")
      )
    ),

    step === 'payment' && createElement('div', null,
      createElement('p', { className: "text-center text-gray-600 mb-4" }, "Please complete your payment below. You can close this modal to cancel."),
      createElement('div', { id: containerId, style: { height: '500px', width: '100%' } },
        createElement('div', { className: "flex justify-center items-center h-full" },
          createElement('p', null, "Loading payment form...")
        )
      )
    )
  );
};

export default PaymentModal;