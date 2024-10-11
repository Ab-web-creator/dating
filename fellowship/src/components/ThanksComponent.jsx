import React from 'react'
import { useTranslation } from 'react-i18next';

const ThanksComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="the_bottom_div">
    <article>
      <div className="bottom_logo_container">
        <img src={require('../images/small_logo2.png')} alt="" className='bottom_logo' />
      </div>

      <div className="text_div">
        <p>{t('Global.FooterFillUpSpace')}</p>
      </div>
    </article>
  </div>
  )
}

export default ThanksComponent