import React from 'react';
import './Button.scss'; // Assuming you have a separate SCSS file for button styles

const Button = ({ children, backgroundColor = 'blue', onClick }) => {
  const buttonStyle = {
    backgroundColor,
  };

  return (
    <button className="shine-button" style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
