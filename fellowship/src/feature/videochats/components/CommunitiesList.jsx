import React, { useState, useEffect } from 'react';
import './communitiesList.css';
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

const CommunitiesList = ({ onChatRoomDeleted }) => {

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
    const url = `/community-room?name=${encodedGroupName}&id=${chatId}`
    // window.open(url, '_blank')
    navigate(url)
  };

  const [popupStates, setPopupStates] = useState(Array(cHatsArray.length).fill(false));

  const toggleAnnotatie = (index) => {
    const newPopupStates = [...popupStates];
    newPopupStates[index] = !newPopupStates[index];
    setPopupStates(newPopupStates);
  };


  const imageMap = {
    commty0,
    commty1,
    commty2,
    commty3,
    commty4,
    commty5,
    commty6,
    commty7,
    commty8,
  };

  const getImageBySelectedImage = (selectedImage) => {
    // Assuming selectedImage is "commty8.0202ed9d6eb1d2001d73.jpg"
    const selectedImageKey = selectedImage.split('.')[0];

    // Assuming you have the imageMap in the same scope
    const selectedImageSrc = imageMap[selectedImageKey];

    // If the key is not found, you can provide a default image or handle it as needed
    return selectedImageSrc; // Change defaultImageSrc to your fallback image
  };

  const deleteChatRoom = async chatRoomId => {

    const shouldDelete = window.confirm('Are you sure you want to delete this chatroom? If so, the result will be visible soon');

    if (shouldDelete) {
      try {
        await axiosPrivate.delete(`${process.env.REACT_APP_BACKEND_URL}/api/communities/${chatRoomId}`);
        onChatRoomDeleted();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <main className="chat_thumbnails">
      {chatRooms?.map((chat, index) => (
        <div
          className={`chat_annot_contain ${chat.createdByUserId === auth.userId ? 'my_chat_group' : ''}`}
          key={index}
        >
          <header title="knock to enter the chat" onClick={() => openChatWindow(chat._id, chat.name)}>
            <div className='groupID' title='click to copy the id'> iD </div>

            <div className='middle_part' title='name of the group'
              onClick={() => openChatWindow(chat._id, chat.name)}>
              <p className='group_name'>{chat.name}</p>
            </div>
            <button className='enter_the_chat' onClick={() => openChatWindow(chat._id, chat.name)}>
              <img src={door} alt="" />
            </button>
          </header>

          <main className="chat_group_info" >
            <div className="upper_part" onClick={() => openChatWindow(chat._id, chat.name)}>
              {/* <p className="additional_info"></p> */}
              <div>
                <p className="common_interest"> Common interest:</p>
                <h4 style={{ color: chat.selectedColor }}>
                  {chat.commonInterest}
                </h4>
              </div>
            </div>

            <div className='pic_and_annt'>
              {popupStates[index] ? null : (
                <button
                  title="click to see the description"
                  className="rasm_container"
                  onClick={() => toggleAnnotatie(index)}
                >
                  <img src={getImageBySelectedImage(chat.selectedImage)} alt="" />

                </button>
              )}
              {popupStates[index] && (
                <div className="annotatie" onClick={() => toggleAnnotatie(index)}>
                  <h5>Description:</h5>
                  <p>{chat.description}</p>
                </div>
              )}
            </div>
            <div className='curr_contain'>
              {chat.createdByUserNick === auth.nick ? (
                <div className='report_div'
                  onClick={() => deleteChatRoom(chat._id)}
                >
                  <img src={erase} alt="" />
                </div>
              ) : (
                <div className='report_div'>
                  <img src={report} alt="" />
                </div>
              )}
              <div style={{ margin: 'auto' }}>
                <p className='currently'> {chat.createdByUserNick}</p>
              </div>
              <div className='share_div'>
                <img src={share} alt="" />
              </div>
            </div>

          </main>
          <div className="last_piece"></div>
        </div>
      ))}
    </main>
  )
}

export default CommunitiesList