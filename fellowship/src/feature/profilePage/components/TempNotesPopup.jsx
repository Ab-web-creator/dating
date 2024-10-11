import React from 'react';

const TempNotesPopup = ({
  isOpen,
  setTempNotesPopupOpen,
  isMyProfilePage,
}) => {
  return (
    <div className={`dev_notes_div temp-notes-popup ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <div className='position_relative'>
          <div className='arrow'>⬇</div>
          <button
            onClick={() => setTempNotesPopupOpen(!isOpen)}
            className='close_temp_dev_notes'
          >
            &times;
          </button>
          <div className='dev_notes2'>
            {isMyProfilePage ? (
              <div className="dev_notes_div">
                <p className='dev_notes'>Temporary development notes:</p>
                <br />
                <p>
                  Welcome aboard! We're currently in our beta version, and, much like any ongoing development, there's always room for refinement. Your patience is truly appreciated. Should you have any suggestions for enhancements, we welcome and value your input. Your feedback is instrumental in helping us make meaningful improvements.
                  <br /> <br />
                  By the way, please note that these guidance notes will be <span>removed</span> shortly. We're offering them solely to assist you initially in navigating and utilizing the platform effectively.
                </p>
                <br />
                <p>This is your profile page. Here, you can edit your personal data, view your posts (if any), and remove them if needed.</p>
                <br />
                <p>If you are behind a laptop or desktop computer, you can see our 'Contact Us' form. It is already functional and ready for your feedbacks.</p>
                <br />
                <p className='dev_notes'>What's Currently Not Functional:</p>
                <br />
                <p>
                  1. One or two social media buttons are not operational yet. We plan to make them functional during Stage 2, but even now you can reply posts and bookmark them. Views are being counted.
                </p>
                <br />
                <p>
                  2. Publications: Soon, you'll be able to create publications if you have the role of a "writer." They will be visible on the third column on the right.
                </p>
                <br />
                <p>
                  3. In small screen you can't see the 3d column. We are working on to add an additional button to bring it to the screen.
                </p>
                <br />
                <p>
                  4. Events, etc., in the third column: We are working on these features as well.
                </p>
              </div>
            ) : (
              <div className="dev_notes_div">
                <p className='dev_notes'>Development notes: </p>
                <br />
                <p>This is somebody's profile page where you can find his/her personal information, such as marital status, amount of children, biography, posts, replies, and likes. This gives you some idea about this person.</p>
                <br />
                <p>If you're here to request a connection with this person, click the button behind these words with the words "send message". It is on the left of two icons.</p>
                <br />
                <p>If you are a teacher looking to mentor this individual, click the "Connect" button. It is the middle icon. Once you do, he/she becomes your student. Please use this feature with caution and only if they have explicitly expressed interest.</p>
                <br />
                <p>If you want to request the admin to change the status of this user, click the right icon.</p>
                <br />
                <p className='dev_notes'>What's Currently Not Functional:</p>
                <br />
                <p>We are planning to add two more buttons here, one to follow (and unfollow) the posts of this user and another one to block him/her. What do you think, do we need the button to block some users?</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TempNotesPopup;
