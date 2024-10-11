import React from 'react';
import './closeButton.css'

const CloseButton = ({ onClick, className, style, title }) => {
  const CloseButtonClassNames = 'close-button';  

  return (
    <button 
      title={title}
      style={style}
      className={`${CloseButtonClassNames} ${className || ''}`.trim()} 
      onClick={onClick}
    >
      &times;
    </button>
  );
}

export default CloseButton;
