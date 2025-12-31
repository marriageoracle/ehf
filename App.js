import React, { useState, useEffect } from 'https://esm.sh/react@18.2.0';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import AdBanner from './components/AdBanner.js';
import About from './components/About.js';
import Services from './components/Services.js';
import Training from './components/Training.js';
import Sponsorship from './components/Sponsorship.js';
import Footer from './components/Footer.js';
import Chatbot from './components/Chatbot.js';
import LeadCaptureModal from './components/LeadCaptureModal.js';
import CoursesModal from './components/CoursesModal.js';

const App = () => {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isCoursesModalOpen, setIsCoursesModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (sessionStorage.getItem('leadModalClosed') !== 'true') {
        setIsLeadModalOpen(true);
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseLeadModal = () => {
    setIsLeadModalOpen(false);
    sessionStorage.setItem('leadModalClosed', 'true');
  };

  return React.createElement('div', { className: "min-h-screen bg-royal-pink-50 text-gray-800 font-sans" },
    React.createElement(Header, null),
    React.createElement('main', null,
      React.createElement(Hero, { onOpenCoursesModal: () => setIsCoursesModalOpen(true) }),
      React.createElement(AdBanner, { onOpenCoursesModal: () => setIsCoursesModalOpen(true) }),
      React.createElement(About, null),
      React.createElement(Services, null),
      React.createElement(Training, null),
      React.createElement(Sponsorship, null)
    ),
    React.createElement(Footer, null),
    React.createElement(Chatbot, null),
    React.createElement(LeadCaptureModal, { isOpen: isLeadModalOpen, onClose: handleCloseLeadModal }),
    React.createElement(CoursesModal, { isOpen: isCoursesModalOpen, onClose: () => setIsCoursesModalOpen(false) })
  );
};

export default App;