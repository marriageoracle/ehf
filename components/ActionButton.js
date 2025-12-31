import React from 'https://esm.sh/react@18.2.0';

const ActionButton = ({ children, className = '', ...props }) => {
  const finalClassName = `
        px-6 py-3 font-bold text-white bg-royal-pink-600 rounded-lg 
        shadow-lg hover:bg-royal-pink-700 focus:outline-none focus:ring-2 
        focus:ring-royal-pink-500 focus:ring-opacity-75 transition-all 
        duration-300 ease-in-out transform hover:scale-105
        ${className}
      `;
  
  const finalProps = { ...props, className: finalClassName };

  return React.createElement('button', finalProps, children);
};

export default ActionButton;