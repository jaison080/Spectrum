import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = () => {
  const handleClick = () => {
    // Handle the button click event
    // For example, you can execute a specific action or display a modal
  };

  return (
    <Link to="/housing/add" className="floating-link" onClick={handleClick}>
     <button className="floating-button" onClick={handleClick}>
      <AiOutlinePlus className="plus-icon" />
     </button>
    </Link>
  );
};

export default Button;
