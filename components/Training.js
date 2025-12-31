import React, { useState } from 'https://esm.sh/react@18.2.0';
import { TRAINING_COURSES } from '../constants.js';
import ActionButton from './ActionButton.js';
import SectionWrapper from './SectionWrapper.js';
import PaymentModal from './PaymentModal.js';

const createElement = React.createElement;

const CourseCard = ({ course }) => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const Icon = course.icon;

  const handlePaymentSuccess = (response) => {
    console.log(response);
    alert('Enrollment successful! Welcome to the course.');
  };

  return createElement(React.Fragment, null,
    createElement('div', { className: "bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col" },
      createElement('div', { className: "w-full h-48 bg-royal-pink-100 flex items-center justify-center" },
        createElement(Icon, { className: "w-24 h-24 text-royal-pink-500" })
      ),
      createElement('div', { className: "p-6 flex-grow flex flex-col" },
        createElement('h3', { className: "text-xl font-bold text-royal-pink-800" }, course.title),
        createElement('p', { className: "text-gray-600 mt-2 text-sm flex-grow" }, course.description),
        createElement('p', { className: "text-sm font-semibold text-royal-pink-700 mt-3" }, `Duration: ${course.duration}`),
        createElement('div', { className: "mt-4 flex justify-between items-center" },
          createElement('span', { className: "text-lg font-bold text-royal-pink-600" }, `₦${course.price.toLocaleString()}`),
          createElement(ActionButton, { onClick: () => setIsPaymentModalOpen(true), className: "px-4 py-2 text-sm" }, "Enroll Now")
        )
      )
    ),
    createElement(PaymentModal, {
      isOpen: isPaymentModalOpen,
      onClose: () => setIsPaymentModalOpen(false),
      onSuccess: handlePaymentSuccess,
      item: course
    })
  );
};

const Training = () => {
  return createElement(SectionWrapper, {
      id: "training",
      title: "Fashion Design Training",
      subtitle: "Empower yourself with our comprehensive courses, designed to turn passion into a profession."
    },
    createElement('div', { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8" },
      ...TRAINING_COURSES.map(course => createElement(CourseCard, { key: course.id, course: course }))
    )
  );
};

export default Training;