import React, { useState } from 'https://esm.sh/react@18.2.0';
import Modal from './Modal.js';
import ActionButton from './ActionButton.js';
import { TRAINING_COURSES, TUTOR_WHATSAPP_NUMBER } from '../constants.js';

const createElement = React.createElement;

const LeadCaptureModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [courseId, setCourseId] = useState(TRAINING_COURSES[0].id);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
        alert("Please fill in your name and phone number.");
        return;
    }

    const selectedCourse = TRAINING_COURSES.find(c => c.id === courseId);
    const message = encodeURIComponent(
      `Hello! I'm interested in a fashion course.\n\nName: ${name}\nPhone: ${phone}\nCourse of Interest: ${selectedCourse?.title}`
    );
    
    const whatsappUrl = `https://wa.me/${TUTOR_WHATSAPP_NUMBER}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return createElement(Modal, { isOpen: isOpen, onClose: onClose, title: "Start Your Fashion Journey!" },
    createElement('p', { className: "text-gray-600 mb-6 text-center" },
      "Get personalized information about our courses. Fill out the form below, and we'll connect with you on WhatsApp!"
    ),
    createElement('form', { onSubmit: handleSubmit, className: "space-y-4" },
      createElement('div', null,
        createElement('label', { htmlFor: "name", className: "block text-sm font-medium text-gray-700" }, "Full Name"),
        createElement('input', {
          type: "text",
          id: "name",
          value: name,
          onChange: (e) => setName(e.target.value),
          required: true,
          className: "mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-royal-pink-500 focus:border-royal-pink-500",
          placeholder: "e.g., Adaobi Eze"
        })
      ),
      createElement('div', null,
        createElement('label', { htmlFor: "phone", className: "block text-sm font-medium text-gray-700" }, "Phone Number"),
        createElement('input', {
          type: "tel",
          id: "phone",
          value: phone,
          onChange: (e) => setPhone(e.target.value),
          required: true,
          className: "mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-royal-pink-500 focus:border-royal-pink-500",
          placeholder: "e.g., 08012345678"
        })
      ),
      createElement('div', null,
        createElement('label', { htmlFor: "course-interest", className: "block text-sm font-medium text-gray-700" }, "Course of Interest"),
        createElement('select', {
            id: "course-interest",
            value: courseId,
            onChange: (e) => setCourseId(e.target.value),
            className: "mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-royal-pink-500 focus:border-royal-pink-500"
          },
          ...TRAINING_COURSES.map(course => createElement('option', { key: course.id, value: course.id }, course.title))
        )
      ),
      createElement('div', { className: "pt-4" },
        createElement(ActionButton, { type: "submit", className: "w-full" }, "Connect on WhatsApp")
      )
    )
  );
};

export default LeadCaptureModal;