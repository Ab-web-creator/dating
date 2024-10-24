import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import video_image1 from '../../../images/zoom1.png';
import video_image2 from '../../../images/zoom2.jpg';
import video_image3 from '../../../images/zoom3.png';
import video_image4 from '../../../images/zoom4.png';
import mic from '../../../images/mic.png';
import video from '../../../images/video_record.png';
import participants from '../../../images/community1.png';
import apps from '../../../images/shared.png';
import reactions from '../../../images/emoji.png';
import chat from '../../../images/reply.png';
import emoji from '../../../images/emoji.png';
import media from '../../../images/media.png';
import { useTranslation } from 'react-i18next';

import './videoGroupChat.css'

const VideoChat = () => {

  const { t } = useTranslation();
  const { auth } = useAuth()
  const navigate = useNavigate()
  const urlParams = new URLSearchParams(window.location.search);
  const chatRoomName = urlParams.get('name')

  // const handleVideoToggle = () => {
  //   navigate('/video-chat');
  // };

  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);

  const openChatBox = () => {
    setIsChatBoxOpen(!isChatBoxOpen);
  };

  return (
    <div className='chat_contain video_chat' >

      <main className='main_part'>
        <header>
          <div>{t('VidGroupChat.MainHeading')}</div>
        </header>
        <div className='column1'>
          <div className='row1'>
            <div>

              <div className="image_container">
                <img src={video_image1} alt="" />
              </div>

              <div className="image_container">
                <img src={video_image2} alt="" />
              </div>

              <div className="image_container">
                <img src={video_image3} alt="" />
              </div>

              <div className="image_container">
                <img src={video_image4} alt="" />
              </div>

            </div>
          </div>
          <div className='row2'>

            <div className='item_container mic'>
              <div className='items '>
                <img src={mic} alt="" />
              </div>
              <p>{t('VidGroupChat.Mute')}</p>
            </div>

            <div className='item_container  '>
              <div className='items '>
                <img src={participants} alt="" />
              </div>
              <p>{t('VidGroupChat.Participants')}</p>
            </div>

            <div className='item_container' onClick={openChatBox}>
              <div className='items '>
                <img src={chat} alt="" />
              </div>
              <p>{t('VidGroupChat.Chat')}</p>
            </div>

            <div className='item_container  '>
              <div className='items '>
                <img src={apps} alt="" />
              </div>
              <p>{t('VidGroupChat.Apps')}</p>
            </div>

            <div className='item_container  '>
              <div className='items '>
                <img src={reactions} alt="" />
              </div>
              <p>{t('VidGroupChat.Reactions')}</p>
            </div>

            <div className='item_container '>
              <div className='items camera'>
                <img src={video} alt="" />
              </div>
              <p>{t('VidGroupChat.StopCam')}</p>
            </div>

            <div className='item_container  '>
              <div className='items '>
                <div style={{ margin: 'auto' }}> <p style={{ textAlign: 'center', paddingBottom: '7px' }}>. . .</p></div>
              </div>
              <p>{t('VidGroupChat.More')}</p>
            </div>

            <div className='item_container red' onClick={() => navigate(-1)} title='go back'>
              <p>{t('VidGroupChat.End')}</p>
            </div>

          </div>
        </div>

      </main>
      <div className={`chat_box ${isChatBoxOpen ? 'chat_box-open' : ''}`}>
        <div className='chatbox_header'>
          <p>{t('VidGroupChat.MeetingChat')}</p>
          <button className='close_btn' onClick={openChatBox}>
            &times;
          </button>
        </div>

        <div className="chatbox_main">
          <div className='credentials'>
            <div className='user_image'>
              <img src={auth.image} alt="" />
            </div>
            <div className='message'>
              <p>{t('VidGroupChat.Message')}</p>
            </div>
          </div>


        </div>

        <div className="chatbox_footer">
          <div className='who_can_see'>
            <p>{t('VidGroupChat.WhoCanSee')}</p>
          </div>
          <div className='div_with_select'>
            <select name="who_can_see" id="">
              <option value="everyone">To: everyone</option>
              <option value="direct">To: direct message</option>
            </select>
          </div>
          <div>
            <input type="text" placeholder='Type your message' />
          </div>
          <div className='network_icons'>
            <button className='emoji' title='emojis'
            // onClick={e => {
            //   e.stopPropagation()
            //   handlePopupOpen()
            // }}
            >
              <img src={emoji} alt="" />
            </button>

            <button className='emoji' title='media'>
              <img src={media} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoChat