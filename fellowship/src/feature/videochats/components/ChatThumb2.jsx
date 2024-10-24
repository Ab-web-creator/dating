import React, { useState, useEffect } from 'react';
import './chatThumb.css';
import { useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate'
import useAuth from '../../../hooks/useAuth'
import cHatsArray from './chatsArray'

import door from '../../../images/enter.png';
import commty4 from '../../../images/commty4.png';
 
import { useTranslation } from 'react-i18next';

const ChatThumb = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const openChatWindow = () => {
    navigate()
  };

  const [popupStates, setPopupStates] = useState(false);

  const toggleAnnotatie = (index) => {
    const newPopupStates = [...popupStates];
    newPopupStates[index] = !newPopupStates[index];
    setPopupStates(newPopupStates);
  };

  return (
    <main className="chat_thumbnails">
        <div
          className='chat_annot_contain '
        >
          <header title={t('ChatThumb.KnockToEnter')} onClick={() => openChatWindow()}>
            <div className='groupID' title={t('ChatThumb.ClickToCopyID')}> iD </div>

            <div className='middle_part' title={t('ChatThumb.NameOfTheGroup')}
              onClick={() => openChatWindow()}>
              <p className='group_name'>Chat-name</p>
            </div>
            <button className='enter_the_chat' onClick={() => openChatWindow()}>
              <img src={door} alt="" />
            </button>
          </header>

          <main className="chat_group_info" >
            <div className="upper_part" onClick={() => openChatWindow()}>
              <div>
                <p className="common_interest">{t('ChatThumb.CommonInterest')} </p>
                <h4>
                  Common Interest
                </h4>
              </div>
            </div>

            <div className='pic_and_annt'>
              {popupStates ? null : (
                <button
                  title={t('ChatThumb.ClickToSeeDescription')}
                  className="rasm_container"
                  onClick={() => toggleAnnotatie()}
                >
                  <img src={commty4} alt="" />
                </button>
              )}
              {popupStates && (
                <div className="annotatie" onClick={() => toggleAnnotatie()}>
                  <h5>{t('ChatThumb.Description')}</h5>
                  <p>Some description</p>
                </div>
              )}
            </div>
            <div className='curr_contain  flex items-center justify-center'>
                <p className='m-auto text-sm'>Химия</p>
            </div>
          </main>
          <div className="last_piece"></div>
        </div>
    
    </main>
  )
}

export default ChatThumb