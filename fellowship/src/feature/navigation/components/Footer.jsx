import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logout from '../../../images/enter.png';
 
const Footer = ({ auth, handleLogout }) => {
  const { t } = useTranslation();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <footer
      className='my_user_ism'
      title='logging out?'
      onClick={(e) => {
        e.stopPropagation();
        handlePopupToggle();
      }}
    >
      {isPopupVisible && (
        <div
          className='popup_logout'
          title='Log out'
        >
          <p id='logoutID'>{t('Nav.WantToLogOut')}</p>
          <div style={{display: 'flex', gap: '5px', justifyContent: 'space-evenly'}}>
            <button title='logout' onClick={handleLogout}>{t('Nav.LogOutYes')}</button>
            <button
              title='cancel'
              onClick={(event) => {
                event.stopPropagation();
                handlePopupToggle();
              }}
            >
              {t('Nav.LogOutNo')}
            </button>
          </div>
          <img src={logout} alt='' onClick={handleLogout} />
        </div>
      )}
      <div className='flex_horizontally'>
        <div className='profile_img_container_small'>
          <img src={auth.image} alt='' />
        </div>
        <div className='my_user_name_id'>
          <p className='ism_familiya'>{auth.nick}</p>
          <p>{auth.searchName}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
