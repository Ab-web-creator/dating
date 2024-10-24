import React, { useState, useEffect, useRef } from 'react';
import './chatShablon.css';
// import adapter from 'webrtc-adapter';
import VideoPopup from './VideoPopup';

import settingIcon from '../../../images/setting.png';

import videoCamera from '../../../images/videoCamera.png';

import useAuth from '../../../hooks/useAuth';

import io from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ChatShablon = () => {

  const { t } = useTranslation();
  const socket = useRef();
  const { auth } = useAuth()
  const navigate = useNavigate()
  const userAge = auth.birthDate

  // we get from the query the info to pass to the socket io
  const urlParams = new URLSearchParams(window.location.search);
  const communityId = urlParams.get('id')
  const communityName = urlParams.get('name')

  const [activeUsers, setActiveUsers] = useState([])

  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    socket.current = io.connect(`${process.env.REACT_APP_BACKEND_URL}`);

    socket.current.emit('enterRoom', {
      userId: auth.userId,
      communityId,
    });

    socket.current.on('userList', ({ users }) => {
      setActiveUsers(users);
    });

    socket.current.on('message', ({ userNick, userImage, text, time }) => {
      const newMessageObject = { userNick, userImage, text, time };
      setMessages(prevMessages => [...prevMessages, newMessageObject]);
    });

    const handleBeforeUnload = () => {
      socket.current.emit('leaveRoom', { communityId });
      socket.current.disconnect();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      socket.current.emit('leaveRoom', { communityId });
      socket.current.disconnect();
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [communityId, auth]);

  const handleSubmitMessage = () => {
    if (socket.current) {
      socket.current.emit('message', {
        userNick: auth.nick,
        userImage: auth.image,
        userId: auth.userId,
        userAge: userAge,
        text: newMessage,
        communityId: communityId
      });
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && newMessage.trim() !== '') {
      handleSubmitMessage();
    }
  };

  const chatContainerRef = useRef(null);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;

    const scrollToBottom = () => {
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    };
    scrollToBottom();
  }, [messages]);


  const goBackToPostShablon = () => {
    navigate(-1);
  };

  const [stream, setStream] = useState(null);

  const startVideoChat = async () => {
    try {
      const newStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      setStream(newStream);
      console.log("stream", stream)
    } catch (error) {
      console.error(t('ChatShablon.ErrorAccessingMedia'), error);
    }
  };

  const stopVideoChat = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);


  return (
    <>
      <div className='chat_contain' >
        <header>
          <div className='first_qism'>
            <div className='chat_title'>
              <div className='network_icons'>
                <button className='settingIcon' title={t('ChatShablon.Settings')}>
                  <img src={settingIcon} alt='' />
                </button>
              </div>
              <div className='group_name'>
                <h4 className='white_sp_off'>Chat Group Name: </h4>
              </div>
              <div className='name_of_group_container' onClick={goBackToPostShablon} title={t('ChatShablon.Click2Times')}>
                <p className=''> {communityName} </p>
              </div>
            </div>
          </div>

          <div className='second_qism'>


            <div className='flex_it'>
              <div className='video_cam_contain'>
                <button onClick={startVideoChat}>{t('ChatShablon.StartVideoChat')}</button>
                <button onClick={stopVideoChat}>{t('ChatShablon.StopVideoChat')}</button>
              </div>
            </div>

          </div>
        </header>

        <main className='main_part'>
          <div className='column1'>
            <div className='row1' ref={chatContainerRef}  >
              <article className='chat_map' >
                {messages?.map((message, index) => (
                  <div key={index} className='message-container'>
                    <div className='nameOfChatter' >
                      <p className={message.userId === auth.userId ? 'green' : 'black'}>
                        {message.userNick}:                         <span className={message.userId === auth.userId ? 'blue' : 'darkgrey'}>{message.text}</span>
                      </p>
                    </div>
                    <div className='time_indication'>
                      <p className=''>{message.time}</p>
                    </div>
                  </div>
                ))}
              </article>
            </div>
            <div className='row2'>

              <div className='lower_layer'>
                <input
                  type='text'
                  placeholder={t('ChatShablon.TypeYourMessagePlaceholder')}
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button onClick={handleSubmitMessage} className='send_it_up'>
                {t('ChatShablon.SendButton')}
                </button>
              </div>
            </div>
          </div>
          <div className='column2'>
            <div>
              {activeUsers?.map(element => {
                const birthDate = new Date(element.birthDate);
                const today = new Date();
                const age = today.getFullYear() - birthDate.getFullYear();
                return (
                  <article key={`${element.userNick}-${element.userId}`} className='participants'>

                    <div className='nameOfChatter2'>
                      <div className='logged_users'>
                        <div className='user_image'>
                          <img src={element.image} alt="" />
                        </div>
                        <div className='user_nick'>
                          <p className='white_sp_off '>
                            {element.nick} </p>
                        </div>
                      </div>
                    </div>
                    <div className='age'>
                      <p className='white_sp_off'>{t('ChatShablon.Age')} {age} </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </main>

      </div>
    </>
  );
};

export default ChatShablon;