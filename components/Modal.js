import React from 'https://esm.sh/react@18.2.0';
import { CloseIcon } from './icons.js';

const createElement = React.createElement;

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  const style = `
    @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes slide-up {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
    .animate-slide-up { animation: slide-up 0.3s ease-out forwards; }
  `;

  return createElement('div', {
      className: "fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 animate-fade-in",
      onClick: onClose,
      role: "dialog",
      "aria-modal": "true"
    },
    createElement('div', {
        className: "bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col animate-slide-up",
        onClick: (e) => e.stopPropagation()
      },
      createElement('header', { className: "flex justify-between items-center p-4 border-b border-gray-200" },
        createElement('h2', { className: "text-xl font-bold text-royal-pink-800" }, title),
        createElement('button', { onClick: onClose, className: "text-gray-500 hover:text-gray-800", "aria-label": "Close modal" },
          createElement(CloseIcon, { className: "w-6 h-6" })
        )
      ),
      createElement('div', { className: "overflow-y-auto p-6" },
        children
      )
    ),
    createElement('style', null, style)
  );
};

export default Modal;