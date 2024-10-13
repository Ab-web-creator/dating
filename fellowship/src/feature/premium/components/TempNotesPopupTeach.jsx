import React from 'react';
import { useTranslation } from 'react-i18next';

const TempNotesPopupTeach = ({
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
                    <p className='dev_notes'>{t('MyStudentsDevNotes.Head1')}
                    </p>
                    <br />
                    <p>
                    {t('MyStudents.DevNotesP1')}
                    </p>
                    <br />
                    <p className=''> {t('MyStudents.DevNotesP1second')}
                    </p>
                    <br />
                    <p>{t('MyStudents.DevNotesP2')} </p>
                    <br />
                    <p>{t('MyStudents.DevNotesP3')}
                    </p>
                    <br />
                    <p>{t('MyStudents.DevNotesP4')}
                    </p>
                    <br />
                    <p className='dev_notes'>{t('MyStudents.DevNotesHead2')} </p>
                    <br />
                    <p>
                    {t('MyStudents.DevNotesP5')}
                    </p>
                    <br />
                    <p>
                    {t('MyStudents.DevNotesP6')}
                    </p>
                    <br />
                    <p>
                    {t('MyStudents.DevNotesP7')}
                    </p>
                  </div>
        </div>
      )}
    </div>
  );
};

export default TempNotesPopupTeach;
