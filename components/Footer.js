import React from 'https://esm.sh/react@18.2.0';

const Footer = () => {
  return React.createElement('footer', { className: "bg-royal-pink-900 text-royal-pink-200 py-6" },
    React.createElement('div', { className: "container mx-auto px-6 text-center" },
      React.createElement('p', { className: "font-semibold" }, "Powered by Leading Giant Media"),
      React.createElement('p', { className: "text-sm mt-1" }, `© ${new Date().getFullYear()} Education Herald. All Rights Reserved.`)
    )
  );
};

export default Footer;