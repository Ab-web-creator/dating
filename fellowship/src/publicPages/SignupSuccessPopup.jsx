import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SignupSuccessPopup = ({ setShowSuccessPopup }) => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const closeAndNavigate = () => {
    setShowSuccessPopup(false)
    navigate('/')
  };

  return (
    <div className='success-popup-contain'>
      <div className='success-popup'>
        <h3>{t('SignupSuccess.MainHeading')}</h3>
        <div className="spacer20px"></div>
        <p>{t('SignupSuccess.P1')}</p>
        <div className='with_border'>
          <p>{t('SignupSuccess.P2')}
          </p>
        </div>
        <p>{t('SignupSuccess.P3')}</p>

        <button onClick={closeAndNavigate}>{t('SignupSuccess.CloseButton')}</button>
      </div>
    </div>
  );
};

export default SignupSuccessPopup;