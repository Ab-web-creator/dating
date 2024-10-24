import React from 'react'
import { useNavigate } from 'react-router-dom';
import './videoPopup.css'

import video_image1 from '../../../images/zoom1.png';
import { useTranslation } from 'react-i18next';


const VideoPopup = ({ onClose }) => {

  const { t } = useTranslation();
  const navigate = useNavigate(); // initialize useNavigate

  const handleNavigation = () => {
    navigate('/group-video-chat'); // use navigate function to navigate to '/group-video-chat'
  };
  return (
    <div className='video_popup_container'>

      <div className='video_popup'>

        <header>
          <p>{t('VideoPopup.PrivateVideo')}</p>

          <button className="close_btn" onClick={onClose}>
            &times;
          </button>

        </header>
        <main onClick={handleNavigation}>
          <img src={video_image1} alt="" />
          <div className='goToGroupVideo'>
            <p>
            {t('VideoPopup.ClickToGoGroupVideo')}</p>
          </div>
        </main>
      </div>

    </div>
  )
}

export default VideoPopup