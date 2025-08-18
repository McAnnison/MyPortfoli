import React from 'react';

const Button = ({ 
  children, 
  as = 'button',
  variant = 'primary', 
  size = 'md',
  className = '', 
  ...props 
}) => {
  const Component = as;
  const baseClasses = 'inline-flex items-center justify-center rounded transition-colors duration-300 font-medium';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-green-600 hover:bg-green-700 text-white',
    outline: 'border border-gray-300 hover:bg-gray-50 text-gray-700',
    small: 'bg-blue-600 hover:bg-blue-700 text-white text-sm'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <Component 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;