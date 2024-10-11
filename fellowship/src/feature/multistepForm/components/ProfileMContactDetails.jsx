import React from 'react';
import { useTranslation } from 'react-i18next';

const ProfileMContactDetails = ({ nextStep, prevStep, handleChange, user, error, setError }) => {

  const { t } = useTranslation();
  const { occupation = '', whatsapp = '' } = user;

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!occupation) {
      setError(t('Global.ErrorPleaseFill'))
      return
    }
    nextStep()
  }

  return (
    <div className='containing_div'>
      <h2>{t('ProfileMContact.MainHeading')}</h2>
      <form>
        <p className='keep_it_anonymous'>{t('ProfileMContact.BeCareful')}</p>
        <div>
          <label htmlFor="occupation">
          {t('ProfileMContact.OccupationLabel')}<span className='mandatory'>* </span ></label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={occupation}
            onChange={(e) => handleChange(e)}
            placeholder={t('ProfileMContact.OccupationPlaceholder')}
          />
        </div>
        <div>
          <label htmlFor="whatsapp">{t('ProfileMContact.WhatsAppLabel')}</label>
          <input
            type="whatsapp"
            id="whatsapp"
            name="whatsapp"
            value={whatsapp}
            onChange={(e) => handleChange(e)}
            placeholder={t('ProfileMContact.WhatsAppPlaceholder')}
          />
        </div>

      </form>

      <div className='two_buttons'>
        {error && <div className='searchNameAlreadyTaken'>
          <p>{error}</p>
        </div>}
        <button onClick={prevStep}>{t('Global.PreviousButton')}</button>
        <button
          onClick={handleSubmit}
        >{t('Global.NextButton')}</button>
      </div>

    </div>
  );
};

export default ProfileMContactDetails;
