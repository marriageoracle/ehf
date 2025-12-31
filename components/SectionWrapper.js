import React from 'https://esm.sh/react@18.2.0';

const SectionWrapper = ({ id, title, subtitle, children, bgColor = 'bg-royal-pink-50' }) => {
  return React.createElement('section', { id: id, className: `py-16 md:py-24 ${bgColor}` },
    React.createElement('div', { className: "container mx-auto px-6" },
      React.createElement('div', { className: "text-center mb-12" },
        React.createElement('h2', { className: "text-3xl md:text-4xl font-bold text-royal-pink-800" }, title),
        React.createElement('p', { className: "text-md text-gray-600 mt-2 max-w-2xl mx-auto" }, subtitle)
      ),
      children
    )
  );
};

export default SectionWrapper;