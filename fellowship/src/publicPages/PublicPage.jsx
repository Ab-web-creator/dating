import React, { useState, useEffect } from 'react';
import Header from './Header';
import './publicPage.css'
import { useTranslation } from 'react-i18next';

const PublicPage = () => {

  const { i18n } = useTranslation();

  // initialize loading state to ensure language is loaded before rendering the app
  const [loading, setLoading] = useState(true);

  // initialize language from localStorage or default to i18n.language
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem('selectedLanguage') || i18n.language
  );

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage).then(() => {
        setLoading(false); // finish loading after language is set
      });
    } else {
      setLoading(false); // no need to change language, finish loading
    }
  }, [i18n]);



  const { t } = useTranslation();
  return (
    <>
      <div className='public_page'>
        <div className='fixed_black_screen'></div>
        <Header />
        <div className='central_div'>
          <div className='border_container'>
            <div className='black_screen2'></div>
            <div className='padding_container'>
              <article className='homePage_words'>

                <div className='homepage_big_texts'>
                  <div className='firstWord_HP'>
                    <p>
                      {t('PublicPage.Word1White1')}
                      <span>{t('PublicPage.Word1Yellow')}</span>
                      {t('PublicPage.Word1White2')}
                    </p>
                  </div>

                  <div className='secondWord_HP'>
                    <p>
                      {t('PublicPage.Word2White1')}
                      <span>{t('PublicPage.Word2Yellow')}</span>
                      {t('PublicPage.Word2White2')}
                    </p>
                  </div>
                </div>

                <div className='no_greater_love'>
                  <p>
                  {t('PublicPage.MottoNoGreater')}
                  </p>
                </div>
              </article>

              <article className='kitab_lamp_HP'> </article>
              <article className='main_MB_HP'>
                <div>
                  <p>
                  {t('PublicPage.MottoNoGreater2')}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>

        <article className='plussign_and_ODP_container_HP'>
          <div className='plussign_HP'>
            <p> ❈	</p>
          </div>

          <div className='ODP_sign_HP'>
            <p> {t('PublicPage.ODPSign')}</p>
          </div>
        </article>
      </div>
    </>
  )
}

export default PublicPage