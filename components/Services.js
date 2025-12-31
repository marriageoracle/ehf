import React, { useState } from 'https://esm.sh/react@18.2.0';
import { SERVICES } from '../constants.js';
import ActionButton from './ActionButton.js';
import SectionWrapper from './SectionWrapper.js';
import PaymentModal from './PaymentModal.js';

const createElement = React.createElement;

const ServiceCard = ({ service }) => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const Icon = service.icon;

  const handlePaymentSuccess = (response) => {
    console.log(response);
    alert('Payment successful! We will be in touch shortly.');
  };

  return createElement(React.Fragment, null,
    createElement('div', { className: "bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col" },
      createElement('div', { className: "w-full h-48 bg-royal-pink-100 flex items-center justify-center" },
        createElement(Icon, { className: "w-24 h-24 text-royal-pink-500" })
      ),
      createElement('div', { className: "p-6 flex-grow flex flex-col" },
        createElement('h3', { className: "text-xl font-bold text-royal-pink-800" }, service.title),
        createElement('p', { className: "text-gray-600 mt-2 text-sm flex-grow" }, service.description),
        createElement('div', { className: "mt-4 flex justify-between items-center" },
          createElement('span', { className: "text-lg font-bold text-royal-pink-600" }, `₦${service.price.toLocaleString()}`),
          createElement(ActionButton, { onClick: () => setIsPaymentModalOpen(true), className: "px-4 py-2 text-sm" }, "Order Now")
        )
      )
    ),
    createElement(PaymentModal, {
      isOpen: isPaymentModalOpen,
      onClose: () => setIsPaymentModalOpen(false),
      onSuccess: handlePaymentSuccess,
      item: service
    })
  );
};

const Services = () => {
  return createElement(SectionWrapper, {
      id: "services",
      title: "Our Design Services",
      subtitle: "From bespoke outfits to complete wardrobe makeovers, our expert designers are at your service.",
      bgColor: "bg-white"
    },
    createElement('div', { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8" },
      ...SERVICES.map(service => createElement(ServiceCard, { key: service.id, service: service }))
    )
  );
};

export default Services;