import React from 'react';

const Card = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;