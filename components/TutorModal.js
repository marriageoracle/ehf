import React from 'https://esm.sh/react@18.2.0';
import Modal from './Modal.js';
import { UserCircleIcon } from './icons.js';

const createElement = React.createElement;

const TutorModal = ({ isOpen, onClose }) => {
  return createElement(Modal, { isOpen: isOpen, onClose: onClose, title: "Meet Your Tutor" },
    createElement('div', { className: "flex flex-col sm:flex-row items-center sm:items-start gap-6" },
      createElement('div', { className: "flex-shrink-0" },
        createElement(UserCircleIcon, { className: "w-24 h-24 text-royal-pink-300" })
      ),
      createElement('div', null,
        createElement('h3', { className: "text-2xl font-bold text-royal-pink-800" }, "Saudat Jegede"),
        createElement('p', { className: "text-md font-semibold text-royal-pink-600" }, "Lead Fashion Instructor"),
        createElement('div', { className: "mt-4 space-y-3 text-gray-600" },
          createElement('p', null, "With over 15 years of experience in the Nigerian and international fashion scenes, Saudat Jegede is a celebrated designer known for her innovative fusion of traditional African textiles with contemporary silhouettes."),
          createElement('p', null, "After graduating from the prestigious Yaba College of Technology and honing her skills in Lagos and London, Saudat launched her own successful label. Her passion has now shifted towards nurturing the next generation of Nigerian fashion talent."),
          createElement('p', null, "Her teaching philosophy is centered on creativity, technical excellence, and building a sustainable business. She is dedicated to providing students with the real-world skills they need to thrive in the competitive fashion industry.")
        )
      )
    )
  );
};

export default TutorModal;