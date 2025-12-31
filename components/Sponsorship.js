import React, { useState } from 'https://esm.sh/react@18.2.0';
import { TRAINING_COURSES } from '../constants.js';
import ActionButton from './ActionButton.js';
import SectionWrapper from './SectionWrapper.js';
import PaymentModal from './PaymentModal.js';

const createElement = React.createElement;

const Sponsorship = () => {
  const [selectedCourse, setSelectedCourse] = useState(TRAINING_COURSES[0]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handlePaymentSuccess = (response) => {
    console.log(response);
    alert('Thank you for your generosity! Your sponsorship is confirmed.');
  };

  return createElement(React.Fragment, null,
    createElement(SectionWrapper, {
        id: "sponsorship",
        title: "Sponsor a Student",
        subtitle: "Change a life by sponsoring a promising student's journey into the world of fashion.",
        bgColor: "bg-white"
      },
      createElement('div', { className: "max-w-2xl mx-auto bg-royal-pink-100/50 p-8 rounded-xl shadow-inner" },
        createElement('div', { className: "flex flex-col md:flex-row gap-8" },
          createElement('div', { className: "flex-1" },
            createElement('label', { htmlFor: "course-select", className: "block text-sm font-medium text-gray-700 mb-2" }, "Choose a course to sponsor:"),
            createElement('select', {
                id: "course-select",
                className: "w-full p-3 border border-royal-pink-200 rounded-lg focus:ring-royal-pink-500 focus:border-royal-pink-500",
                onChange: (e) => {
                  const course = TRAINING_COURSES.find(c => c.id === e.target.value);
                  if (course) setSelectedCourse(course);
                },
                value: selectedCourse.id
              },
              ...TRAINING_COURSES.map(course => createElement('option', { key: course.id, value: course.id }, course.title))
            )
          ),
          createElement('div', { className: "flex-shrink-0 md:text-right" },
            createElement('p', { className: "text-sm text-gray-600" }, "Sponsorship Amount"),
            createElement('p', { className: "text-3xl font-bold text-royal-pink-700" }, `₦${selectedCourse.price.toLocaleString()}`)
          )
        ),
        createElement('div', { className: "text-center mt-8" },
          createElement(ActionButton, { onClick: () => setIsPaymentModalOpen(true) }, "Sponsor Now")
        )
      )
    ),
    selectedCourse && createElement(PaymentModal, {
      isOpen: isPaymentModalOpen,
      onClose: () => setIsPaymentModalOpen(false),
      onSuccess: handlePaymentSuccess,
      item: {
        ...selectedCourse,
        title: `Sponsor: ${selectedCourse.title}`
      }
    })
  );
};

export default Sponsorship;