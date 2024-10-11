import React, { useState } from 'react';
import './messageCreateProfile.css';

import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import useAuth from '../../../hooks/useAuth';
import { useParams, useNavigate } from 'react-router-dom';
import CloseButton from '../../../components/buttons/CloseButton';
import { useTranslation } from 'react-i18next';

const MessageCreateProfile = ({ titleNomi, classNomi, paramsNick }) => {

  const { t } = useTranslation();
  const axiosPrivate = useAxiosPrivate()
  const { auth } = useAuth()
  const params = useParams()
  const navigate = useNavigate()

  const [isPopupWindOnPost, setPopupWindOnPost] = useState(false);
  const [messageContent, setMessageContent] = useState({
    senderId: auth.userId,
    receiverId: params.id,
    content: ''
  });

  const handleContentChange = (event) => {
    setMessageContent({
      ...messageContent,
      content: event.target.value
    });
  };

  const handleSendMessage = async () => {
    try {
      // Add the greeting message to content if paramsNick is present
      let finalMessageContent = {
        ...messageContent,
        content: paramsNick
          ? `Dear ${paramsNick},\n\n${messageContent.content}`
          : messageContent.content,
      };

      // Add the content of <div className='the_end'> if paramsNick is present
      if (paramsNick) {
        finalMessageContent.content += `\n\nWith respect,\n${auth.nick}`;
      } else {
        finalMessageContent.content += `\n\nWith respect,\n\n${auth.nick}`;
      }

      await axiosPrivate.post(`${process.env.REACT_APP_BACKEND_URL}/api/messages/initial-message`, finalMessageContent);

      setPopupWindOnPost(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        title={t('MesCreateProfile.CreateMessageButton')}
        className={classNomi}
        onClick={() => {
          setPopupWindOnPost(true);
        }}
      >
        {titleNomi}
      </button>

      {isPopupWindOnPost && (
        <div className='message-create-profile_container'
          onClick={() => {
            setPopupWindOnPost(false);
          }} >
          <div className='message-create-profile'
            onClick={(e) => {
              e.stopPropagation();
            }} >
            <header className='messageCreateHeader'>
              <CloseButton 
                style={{top: '5px', left: '5px'}}
                onClick={() => {
                  setPopupWindOnPost(false);
                }}
              />
              <div className='titul'>
                <h4> {t('MesCreateProfile.NewMessage')} </h4>
              </div>
              <button
                  className="send_message_btn"
                  onClick={handleSendMessage}
                  title={t('MesCreateProfile.PublishYourPostButton')}
                >
                  {t('MesCreateProfile.SendButton')}
                </button>

            </header>

            <main >
              <div>
                <div className='greeting_part'>
                {t('MesCreateProfile.Dear')} <span className='sender'>{paramsNick}</span>,
                </div>

                <textarea
                  name='content'
                  rows='7'
                  value={messageContent.content}
                  placeholder={t('MesCreateProfile.WriteYourMessagePlaceholder')}
                  onChange={handleContentChange}
                />
              </div>

              <div className='the_end'>
                <p>{t('MesCreateProfile.WithRespect')}</p>
                <p className='sender'>{auth.nick}</p>
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
}

export default MessageCreateProfile;
