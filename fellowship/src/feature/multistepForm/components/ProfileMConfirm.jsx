import React from 'react';
import { useTranslation } from 'react-i18next';

const ProfileMConfirm = ({ nextStep, prevStep, user, handleUpdateProfile }) => {
  const { t } = useTranslation();
  const { nick, searchName, occupation, location, whatsapp, birthDate, familyStatus, childrenAmount, biography } = user;

  return (
    <div className='containing_div confirm_details'>
      <h2> {t('ProfileMConfirm.MainHeading')}</h2>
      <form>

        <div className=''>
          <h4>{t('ProfileMConfirm.Name')}</h4>
          <h5>{nick}</h5>
        </div>
        <div className=''>
          <h4>{t('ProfileMConfirm.SearchName')}</h4>
          <h5>{searchName}</h5>
        </div>

        <div className=''>
          <h4>{t('ProfileMConfirm.WhatsApp')}</h4>
          <h5>{whatsapp ? whatsapp : "no info is provided"}</h5>
        </div>


        <div className=''>
          <h4>{t('ProfileMConfirm.Birth')}</h4>
          <h5>{birthDate}</h5>
        </div>

        <div>
          <h4>{t('ProfileMConfirm.Occupation')}</h4>
          <h5>{occupation}</h5>
        </div>
        <div>
          <h4>{t('ProfileMConfirm.Location')}</h4>
          <h5>{location}</h5>
        </div>

        <div className=''>
          <h4>{t('ProfileMConfirm.FamilyStatus')}</h4>
          <h5>{familyStatus}</h5>
        </div>
        <div className=''>
          <h4>{t('ProfileMConfirm.HowManyChildren')}</h4>
          <h5>{childrenAmount}</h5>
        </div>

        <div className='bio_div'>
          <h4>{t('ProfileMConfirm.Biography')}</h4>
          <h5>{biography}</h5>
        </div>
      </form>
      <div className='two_buttons'>
        <button onClick={prevStep}>{t('Global.PreviousButton')}</button>
        <button
          onClick={() => {
            nextStep();
            handleUpdateProfile();
          }}
        >
          {t('Global.NextButton')}</button>
      </div>
    </div>
  );
};

export default ProfileMConfirm;
