import React, { useState, useEffect } from 'react';
import './progressBar.css';

const ProgressBar = ({ showProgress, setShowSuccess }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (showProgress) {
      interval = setInterval(() => {
        if (progress < 100) {
          setProgress(prevProgress => prevProgress + 1);
        } else {
          clearInterval(interval);
          setShowSuccess(true);
        }
      }, 40);
    }

    return () => clearInterval(interval);
  }, [progress, showProgress, setShowSuccess]);

  return (
    <div className={`progress-bar-container ${showProgress ? 'show' : ''}`}>
      <div className="progress-bar-subcontainer">
        <h4>Progress Bar:</h4>
        <p>File(s) being uploaded</p>
        <div className="progress-bar">
          <div className="progress-indicator" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;

