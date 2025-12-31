import React from 'https://esm.sh/react@18.2.0';
import ActionButton from './ActionButton.js';

const createElement = React.createElement;

const AdBanner = ({ onOpenCoursesModal }) => {
  return createElement('section', { className: "bg-royal-pink-100/70" },
    createElement('div', { className: "container mx-auto px-6 py-12 text-center" },
      createElement('h2', { className: "text-2xl md:text-3xl font-bold text-royal-pink-800 mb-4" },
        "Unlock Your Potential or Empower Someone Else's"
      ),
      createElement('p', { className: "text-gray-600 max-w-2xl mx-auto mb-8" },
        "Whether you're ready to start your own journey or want to change a life by sponsoring a student, your next step is just a click away."
      ),
      createElement('div', { className: "flex flex-col sm:flex-row justify-center items-center gap-4" },
        createElement(ActionButton, {
            onClick: onOpenCoursesModal,
            className: "bg-royal-pink-200 text-royal-pink-800 hover:bg-royal-pink-300"
          },
          "Sponsor a Student"
        ),
        createElement(ActionButton, { onClick: onOpenCoursesModal }, "Enroll in a Course")
      )
    )
  );
};

export default AdBanner;