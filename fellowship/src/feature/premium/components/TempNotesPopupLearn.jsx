import React from 'react';
import { useTranslation } from 'react-i18next';

const TempNotesPopupLearn = ({
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
                  <p className='dev_notes'>{t('MyTeachers.DevNotesHead1')}
                  </p>
                  <br />
                  <p>
                  {t('MyTeachers.DevNotesP1')}
                  </p>
                  <br />
                  <p className=''> {t('MyTeachers.DevNotesP3')} 
                  </p>
                  <br />
                  <p className='dev_notes'>
                  {t('MyTeachers.DevNotesHead2')}
                  </p>
                  <br />
                  <p>
                  {t('MyTeachers.DevNotesP4')}
                  </p>
                  <br />
                  <p className='dev_notes'>
                  {t('MyTeachers.DevNotesHead3')}
                  </p>
                  <br />
                  <p>
                  {t('MyTeachers.DevNotesP5')}
                  </p>
                </div>
        </div>
      )}
    </div>
  );
};

export default TempNotesPopupLearn;
