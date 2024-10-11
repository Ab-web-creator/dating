import React, { useState, useEffect } from 'react';
import './ToggleButton.css'; // Import your CSS file for styling


function ToggleButton({ switchId, switchName, isDefaultOn, action }) {
  const [isOn, setIsOn] = useState(true);
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  const toggle = () => {
    setIsOn(prevIsOn => !prevIsOn);
    action();
  };

  useEffect(() => {
    setIsOn(isDefaultOn);
  }, [isDefaultOn]);

  return (
    <div className={`toggle-button ${isOn ? 'off' : 'on'}`}
      onClick={toggle}>
      <div className="switch">
        <p>{isOn ? 'on' : 'off'}</p>
      </div>
    </div>
  );
}

export default ToggleButton;
