import React from 'react';
import { useTranslation } from 'react-i18next';

const TempNotesPopupBlog = ({
  isOpen,
  setTempNotesPopupOpen,
}) => {

  const { t } = useTranslation();

  return (
    <div className={`dev_notes_div temp-notes-popup ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <div className='position_relative'>
               <div className='arrow'>
                    ⬇
                  </div>
          <button
            onClick={() => setTempNotesPopupOpen(!isOpen)}
            className='close_temp_dev_notes'
          >
            &times;
          </button>
          <div className='dev_notes2'>
                    <p className='dev_notes'>
                    {t('Blog.DevNotesHead1')}
                    </p>
                    <br />
                    <p>
                    {t('Blog.DevNotesP1')}
                      <br />   
                      <br />
                      {t('Blog.DevNotesP1second')}
                    </p>
                    <br />
                    <p className=''>{t('Blog.DevNotesP2')}
                    </p>
                    <br />
                    <p className=''>{t('Blog.DevNotesP3')} 
                    </p>
                    <br />
                    <p className=''>{t('Blog.DevNotesP4')}
                    </p>
                    <br />
                    <p className='dev_notes'>{t('Blog.DevNotesHead2')}</p>
                    <br />
                    <p>{t('Blog.DevNotesP5')} 
                    </p>
                    <br />
                    <p>{t('Blog.DevNotesP7')}
                    </p>
                  </div>
        </div>
      )}
    </div>
  );
};

export default TempNotesPopupBlog;
