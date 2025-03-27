import React from 'react';
import './Button.css';

const Button = ({ children, onClick, disabled, fullWidth = false, variant = 'primary' }) => {
  return (
    <button 
      className={`styled-button ${fullWidth ? 'fullWidth' : ''} ${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;