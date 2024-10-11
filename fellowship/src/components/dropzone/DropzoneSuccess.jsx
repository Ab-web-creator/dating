import React from 'react';
import womanSiluette from '../../images/womanSiluette.png';
import checked from '../../images/checked.png';

const DropzoneSuccess = ({ saveAmount, handleClearFiles }) => {
  return (
    <>
      <img src={womanSiluette} alt="womanSiluette" className='womanSiluette' />
      <button className='moreFilesToAdd' onClick={handleClearFiles} title='again? R u sure? 😀'>
        <p> Click to add more files</p>
      </button>

      <div className="success-message">
        <div>
          <h4> Success!</h4>
          <div>
            <img src={checked} alt="" />
            <p>You uploaded {saveAmount} {saveAmount === 1 ? 'file' : 'files'} to the server.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropzoneSuccess;

