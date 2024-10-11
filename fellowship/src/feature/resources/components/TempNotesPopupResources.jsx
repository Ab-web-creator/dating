import React from 'react';

const TempNotesPopupResources = ({
  isOpen,
  setTempNotesPopupOpen,
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
                  <p className='dev_notes'>Temporary development notes:
                  </p>
                  <br />
                  <p>
                    1. This section will house books, video-audio links, or links to other websites.
                  </p>
                  <br />
                  <p className=''> 2. We aim to include scriptures, articles, or publications here as well.</p>
                  <br />
                  <p className='dev_notes'>What's Currently Not Functional::</p>
                  <br />
                  <p>
                    Currently, nothing is functional in this section. The book thumbnails below are for demonstration purposes only. However, in the near future, you will be able to: (a) read, (b) share links, and (c) publish articles.
                  </p>
                  <br />
                  <p>
                    Let us know how we can serve you better in this regard. The "publish" button above can open editorial page, so that the users with the role of "writer" could publish articles or small books.
                  </p>
                </div>
        </div>
      )}
    </div>
  );
};

export default TempNotesPopupResources;
