import React from 'react';

const TempNotesPopupServants = ({
  isOpen,
  setTempNotesPopupOpen,
}) => {
  return (
    <div className={`dev_notes_div temp-notes-popup ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <div className='position_relative'>
          <button
            onClick={() => setTempNotesPopupOpen(!isOpen)}
            className='close_temp_dev_notes'
          >
            &times;
          </button>
          <div className='dev_notes2'>
                  <p className='dev_notes'>Temporary development notes:
                  </p>
                  <br />
                  <p>
                    1. Discover your potential coaches and mentors here.
                  </p>
                  <br />
                  <p className=''> 2. If you hold the role of a teacher, you'll find the button above. Click it to include yourself among these board members. This provides you with an opportunity to coach others.</p>
                  <br />
                  <p className='dev_notes'>How It Works:</p>
                  <br />
                  <p>
                    If you want to learn from someone, select the right candidate by clicking on them. This will take you to their profile page. Follow the instructions provided there inside dev-notes, for further guidance.
                  </p>

                </div>
        </div>
      )}
    </div>
  );
};

export default TempNotesPopupServants;
