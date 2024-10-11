import React from 'react';
import { useTranslation } from 'react-i18next';

const ProfileMSuccess = ({ navigateOnClose }) => {
  const { t } = useTranslation();
  return (
    <div className='containing_div success'>
      <h2>{t('ProfileMSuccess.MainHeading')}</h2>
      <form>
        <div className='success_message'>
          <div>
            <h4>
            {t('ProfileMSuccess.P1')}
            </h4>

            <h4>{t('ProfileMSuccess.P2')}</h4>

            <h4>{t('ProfileMSuccess.P3')} </h4>

            <h4>{t('ProfileMSuccess.P4')}
            </h4>
          </div>
        </div>
      </form>
      <button onClick={navigateOnClose}>
      {t('ProfileMSuccess.CloseButton')}
      </button>
    </div>
  );
};

export default ProfileMSuccess;
