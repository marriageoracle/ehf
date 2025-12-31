import React, { useState } from 'https://esm.sh/react@18.2.0';
import Modal from './Modal.js';
import { TRAINING_COURSES } from '../constants.js';
import ActionButton from './ActionButton.js';
import PaymentModal from './PaymentModal.js';

const createElement = React.createElement;

const ModalCourseItem = ({ course }) => {
    const [paymentAction, setPaymentAction] = useState(null);
    const Icon = course.icon;

    const handlePaymentSuccess = (response) => {
        console.log(response);
        const successMessage = paymentAction === 'sponsor'
            ? "Thank you for your generosity! Your sponsorship is confirmed."
            : "Enrollment successful! Welcome to the course.";
        alert(successMessage);
    };

    return createElement(React.Fragment, null,
        createElement('div', { className: "flex flex-col sm:flex-row items-start gap-4 p-4 border rounded-lg bg-royal-pink-50/50" },
            createElement('div', { className: "flex-shrink-0 w-16 h-16 bg-royal-pink-100 rounded-lg flex items-center justify-center" },
                createElement(Icon, { className: "w-10 h-10 text-royal-pink-600" })
            ),
            createElement('div', { className: "flex-grow" },
                createElement('h4', { className: "font-bold text-royal-pink-800" }, course.title),
                createElement('p', { className: "text-sm text-gray-600" }, course.description),
                createElement('p', { className: "text-xs font-semibold text-royal-pink-700 mt-1" }, `Duration: ${course.duration}`)
            ),
            createElement('div', { className: "flex-shrink-0 flex flex-col items-end space-y-2 w-full sm:w-auto" },
                createElement('span', { className: "text-lg font-bold text-royal-pink-600" }, `₦${course.price.toLocaleString()}`),
                createElement('div', { className: "flex space-x-2" },
                    createElement(ActionButton, { onClick: () => setPaymentAction('sponsor'), className: "px-3 py-1.5 text-xs bg-royal-pink-100 text-royal-pink-700 hover:bg-royal-pink-200" }, "Sponsor"),
                    createElement(ActionButton, { onClick: () => setPaymentAction('enroll'), className: "px-3 py-1.5 text-xs" }, "Enroll")
                )
            )
        ),
        paymentAction && createElement(PaymentModal, {
            isOpen: true,
            onClose: () => setPaymentAction(null),
            onSuccess: handlePaymentSuccess,
            item: {
                ...course,
                title: paymentAction === 'sponsor' ? `Sponsor: ${course.title}` : course.title,
            }
        })
    );
}

const CoursesModal = ({ isOpen, onClose }) => {
  return createElement(Modal, { isOpen: isOpen, onClose: onClose, title: "Explore Our Fashion Courses" },
    createElement('div', { className: "space-y-4" },
      ...TRAINING_COURSES.map(course => createElement(ModalCourseItem, { key: course.id, course: course }))
    )
  );
};

export default CoursesModal;