import React, { useState, useEffect } from 'react';
import './chatThumb.css';
import { useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate'
import useAuth from '../../../hooks/useAuth'
import cHatsArray from './chatsArray'

import door from '../../../images/enter.png';
import report from '../../../images/flag.png';
import erase from '../../../images/delete.png';
import share from '../../../images/share.png';

import commty0 from '../../../images/commty0.png';
import commty1 from '../../../images/commty1.jpeg';
import commty2 from '../../../images/commty2.jpeg';
import commty3 from '../../../images/commty3.jpg';
import commty4 from '../../../images/commty4.png';
import commty5 from '../../../images/commty5.png';
import commty6 from '../../../images/commty6.png';
import commty7 from '../../../images/commty7.png';
import commty8 from '../../../images/commty8.jpg';
import { useTranslation } from 'react-i18next';

const ChatThumb = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate()
  const { auth } = useAuth()
  const [chatRooms, setChatRooms] = useState([])

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const { data } = await axiosPrivate.get(`${process.env.REACT_APP_BACKEND_URL}/api/communities/${auth.userId}`)
        // console.log("chats data", data)
        setChatRooms(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchChats()
  }, [])

  const openChatWindow = (chatId, groupName) => {
    const encodedGroupName = encodeURIComponent(groupName.toLowerCase())
    const url = `/chat-room?name=${encodedGroupName}&id=${chatId}`
    // window.open(url, '_blank')
    navigate(url)
  };

  const [popupStates, setPopupStates] = useState(Array(cHatsArray.length).fill(false));

  const toggleAnnotatie = (index) => {
    const newPopupStates = [...popupStates];
    newPopupStates[index] = !newPopupStates[index];
    setPopupStates(newPopupStates);
  };

  return (
    <main className="chat_thumbnails">
      {chatRooms?.map((chat, index) => (
        <div
          className={`chat_annot_contain ${chat.createdByUserId === auth.userId ? 'my_chat_group' : ''}`}
          key={index}
        >
          <header title={t('ChatThumb.KnockToEnter')} onClick={() => openChatWindow(chat._id, chat.name)}>
            <div className='groupID' title={t('ChatThumb.ClickToCopyID')}> iD </div>

            <div className='middle_part' title={t('ChatThumb.NameOfTheGroup')}
              onClick={() => openChatWindow(chat._id, chat.name)}>
              <p className='group_name'>{chat.name}</p>
            </div>
            <button className='enter_the_chat' onClick={() => openChatWindow(chat._id, chat.name)}>
              <img src={door} alt="" />
            </button>
          </header>

          <main className="chat_group_info" >
            <div className="upper_part" onClick={() => openChatWindow(chat._id, chat.name)}>
              <div>
                <p className="common_interest">{t('ChatThumb.CommonInterest')} </p>
                <h4 style={{ color: chat.selectedColor }}>
                  {chat.commonInterest}
                </h4>
              </div>
            </div>

            <div className='pic_and_annt'>
              {popupStates[index] ? null : (
                <button
                  title={t('ChatThumb.ClickToSeeDescription')}
                  className="rasm_container"
                  onClick={() => toggleAnnotatie(index)}
                >
                  <img src={commty4} alt="" />
                </button>
              )}
              {popupStates[index] && (
                <div className="annotatie" onClick={() => toggleAnnotatie(index)}>
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
      ))}
    </main>
  )
}

export default ChatThumb