import React from 'react';
import { useTranslation } from 'react-i18next';

const DevNotesButton = ({ isTempNotesPopupOpen, setTempNotesPopupOpen }) => {
  const { t } = useTranslation();
  return (
    <button
      className='temp_notes'
      title={t('Buttons.DevNotesTitle')}
      onClick={() => setTempNotesPopupOpen(!isTempNotesPopupOpen)}
    >
      {t('Buttons.DevNotes')}
    </button>
  );
};

export default DevNotesButton;
