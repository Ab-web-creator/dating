import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className='notfound_container'>
      <div className='notfound'>
        <h2>{t('NotFound.OopsP1')}</h2>
        <div className="spacer20px"></div>
        <h4>{t('NotFound.OopsP2')}</h4>
        <div className="spacer20px"></div>
        <div className="thanks">
          <p>{t('NotFound.OopsP3')} <Link to='/'>{t('NotFound.HomePage')}</Link>{t('NotFound.OopsP4')}.</p>
        </div>
      </div>
    </div >
  )
}

export default NotFound