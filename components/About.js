import React, { useState } from 'https://esm.sh/react@18.2.0';
import SectionWrapper from './SectionWrapper.js';
import ActionButton from './ActionButton.js';
import TutorModal from './TutorModal.js';

const createElement = React.createElement;

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return createElement(React.Fragment, null,
    createElement(SectionWrapper, {
        id: "about",
        title: "Learn from an Industry Expert",
        subtitle: "Our courses are led by a seasoned fashion designer with a passion for mentoring aspiring creatives."
      },
      createElement('div', { className: "max-w-3xl mx-auto text-center bg-white p-8 rounded-xl shadow-lg" },
        createElement('p', { className: "text-gray-600 mb-6" },
          "We believe that true mastery comes from learning from the best. Our lead instructor brings years of real-world experience, from the design studio to the runway, directly to you. Get personalized guidance and unlock your full creative potential."
        ),
        createElement(ActionButton, { onClick: () => setIsModalOpen(true) }, "Meet the Tutor")
      )
    ),
    createElement(TutorModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false) })
  );
};

export default About;