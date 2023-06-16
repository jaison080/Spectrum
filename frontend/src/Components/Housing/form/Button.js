import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import './Button.css';

const Button = () => {
  const handleClick = () => {
    // Handle the button click event
    // For example, you can execute a specific action or display a modal
  };

  return (
    <button className="floating-button" onClick={handleClick}>
      <AiOutlinePlus className="plus-icon" />
    </button>
  );
};

export default Button;
