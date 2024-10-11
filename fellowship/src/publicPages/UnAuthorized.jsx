import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'
import { useTranslation } from 'react-i18next';

const UnAuthorized = () => {
  const { t } = useTranslation();
  return (
    <div className='notfound_container'>
      <div className='notfound'>
        <h2 style={{ color: 'red' }}> {t('UnAuthorized.Oops')} </h2>
        <div className="spacer20px"></div>

        <div className="thanks">
          <p>{t('UnAuthorized.TakeMeBack1')}
            <Link to='/'>{t('UnAuthorized.HomePageLink')}</Link>
            {t('UnAuthorized.TakeMeBack2')}</p>
        </div>
      </div>
    </div >
  )
}

export default UnAuthorized