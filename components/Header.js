import React, { useState } from 'https://esm.sh/react@18.2.0';
import { MenuIcon, CloseIcon, SparklesIcon } from './icons.js';

const createElement = React.createElement;

const NavLink = ({ href, children }) => (
  createElement('a', { href: href, className: "block md:inline-block mt-4 md:mt-0 text-royal-pink-700 hover:text-royal-pink-900 transition-colors duration-300 mr-8" },
    children
  )
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    createElement(NavLink, { key: 'services', href: "#services" }, "Services"),
    createElement(NavLink, { key: 'training', href: "#training" }, "Training"),
    createElement(NavLink, { key: 'sponsorship', href: "#sponsorship" }, "Sponsor")
  ];

  return createElement('header', { className: "bg-white/80 backdrop-blur-lg shadow-md sticky top-0 z-40" },
    createElement('div', { className: "container mx-auto px-6 py-4 flex justify-between items-center" },
      createElement('a', { href: "#", className: "flex items-center space-x-2 text-xl font-bold text-royal-pink-800" },
        createElement(SparklesIcon, { className: "w-7 h-7 text-royal-pink-600" }),
        createElement('span', null, "Education Herald")
      ),
      createElement('nav', { className: "hidden md:flex items-center" }, ...navLinks),
      createElement('div', { className: "md:hidden" },
        createElement('button', { onClick: () => setIsOpen(!isOpen), className: "text-royal-pink-700 focus:outline-none" },
          isOpen ? createElement(CloseIcon, null) : createElement(MenuIcon, null)
        )
      )
    ),
    isOpen && createElement('div', { className: "md:hidden px-6 pb-4" }, ...navLinks)
  );
};

export default Header;