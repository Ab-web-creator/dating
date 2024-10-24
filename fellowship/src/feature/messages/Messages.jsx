import React, { useEffect, useState, useRef } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAuth from '../../hooks/useAuth';
import { useParams, useNavigate } from 'react-router-dom';
import { differenceInMinutes, differenceInHours, differenceInDays, differenceInMonths } from 'date-fns';

import './messages.css'

import logo from '../../images/small_logo2.png';
import settingIcon from '../../images/setting.png';
import newMessageIcon from '../../images/new_email.png';
import hamburger from '../../images/hamburger.png';
import bin from '../../images/bin.png';
import media from '../../images/media.png';
import emoji from '../../images/emoji.png';
import refresh from '../../images/refresh.png';
import paperPlane from '../../images/send.png';

import MessageCreate from './components/MessageCreate'
import Search from '../../components/Search'
import Emojis from '../../components/emojis/Emojis'
import emojiArray from '../../components/emojis/emojiArray';
import AdminsMessage from '../../components/AdminsMessage';
import { useTranslation } from 'react-i18next';
import CreatePostButton from '../../components/buttons/CreatePostButton';

const Messages = () => {

  const { t } = useTranslation();
  const { auth } = useAuth()

  const [search, setSearch] = useState('')
  const [isSearchResultsOn, setSearchResultsOn] = useState(false)

  const navigateToProfile = (senderId) => {
    navigate(`/profile-page/${senderId}`)
  }

  const axiosPrivate = useAxiosPrivate()
  const params = useParams()
  const navigate = useNavigate()

  const [correspondentsList, setCorrespondentsList] = useState([])

  // to select the current chosen sender from the array of objects of correspondentsList
  const [selectedCorrespondentId, setSelectedSenderId] = useState('')

  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  const [deleteOnBothSides, setDeleteOnBothSides] = useState(false)

  // chosen sender => receive all messages including our own => based on id we place on the right or on the left of the section 
  // => when I send a new message, I make a post request => and in reponse get once again 

  const fetchCorrespondents = async () => {
    try {
      const { data } = await axiosPrivate.get(`${process.env.REACT_APP_BACKEND_URL}/api/messages/${auth.userId}`)
      setCorrespondentsList(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCorrespondents()
  }, [])

  const fetchUserMessages = async () => {
    const { data } = await axiosPrivate.get(`${process.env.REACT_APP_BACKEND_URL}/api/messages/${selectedCorrespondentId}/${auth.userId}`)
    setMessages(data)
  }

  useEffect(() => {
    if (selectedCorrespondentId) {
      fetchUserMessages()
    }
  }, [selectedCorrespondentId])

  const sendMessage = async () => {
    try {
      if (newMessage.trim() !== '') {
        const trimmedMessage = newMessage.trim(); // trim extra spaces
        await axiosPrivate.post(`${process.env.REACT_APP_BACKEND_URL}/api/messages/`, JSON.stringify({
          sender: auth.userId,
          receiver: selectedCorrespondentId,
          content: trimmedMessage, // use the trimmed message
        }));
        setNewMessage('');
        await fetchUserMessages();
      }
    } catch (error) {
      console.error(t('Messages.ErrorSendingMessage'), error);
    }
  };


  const deleteCorrespondence = async (correspondentUserForDeletion) => {
    try {
      let receivedData;
      if (deleteOnBothSides) {
        const { data } = await axiosPrivate.delete(`${process.env.REACT_APP_BACKEND_URL}/api/messages/on-both-sides/${correspondentUserForDeletion}/${auth.userId}`)
        receivedData = data
      } else {
        const { data } = await axiosPrivate.delete(`${process.env.REACT_APP_BACKEND_URL}/api/messages/on-current-user-side/${correspondentUserForDeletion}/${auth.userId}`)
        receivedData = data
      }
      setSelectedSenderId('')
      setCorrespondentsList(receivedData)
      setDeleteOnBothSides(false)

    } catch (error) {
      console.log(error)
    } finally {  }
  }

  const formatDateDifference = (createdAt) => {
    const currentDate = new Date();
    const messageDate = new Date(createdAt);

    const hoursDiff = differenceInHours(currentDate, messageDate);
    const daysDiff = differenceInDays(currentDate, messageDate);
    const monthsDiff = differenceInMonths(currentDate, messageDate);

    if (hoursDiff < 24) {
      if (hoursDiff === 0) {
        const minutesDiff = differenceInMinutes(currentDate, messageDate);
        return minutesDiff < 1
          ? t('Time.Now')
          : `${minutesDiff} ${minutesDiff === 1 ? t('Time.Min') : t('Time.Mins')} ${t('Time.Ago')}`;
      }
      return `${hoursDiff} ${hoursDiff === 1 ? t('Time.H') : t('Time.Hrs')} ${t('Time.Ago')}`;
    } else if (daysDiff === 1) {
      return t('Time.OneDayAgo');
    } else if (monthsDiff === 0) {
      return `${daysDiff} ${t('Time.DaysAgo')}`;
    } else {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return messageDate.toLocaleDateString(undefined, options);
    }
  };

  // Scroll to the bottom of the container
  const readMsgContainerRef = useRef(null);
  useEffect(() => {
    if (readMsgContainerRef.current) {
      readMsgContainerRef.current.scrollTop = readMsgContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const refreshMessages = () => {
    if (selectedCorrespondentId) {
      fetchUserMessages()
    }
  }

  const [isColumn2Expanded, setColumn2Expanded] = useState(false);

  const handleReceivedMessagesClick = (elementId) => {
    setSelectedSenderId(elementId);
    setColumn2Expanded(true);
  };

  const handleCloseMailClick = () => {
    setColumn2Expanded(false);
  };

  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState('');
  // const [postContent, setPostContent] = useState('');

  // const handlePostContentChange = (event) => {
  //   setPostContent(event.target.value);
  // };

  const handleOpenEmojiPicker = () => {
    setEmojiPickerVisible(true);
  };

  const handleSelectEmoji = (emoji) => {
    const textarea = document.getElementById('post_content'); // Get the textarea element

    if (textarea) {
      const cursorPosition = textarea.selectionStart; // Get the current cursor position

      // Create a new content with the emoji at the cursor position
      const newContent = newMessage.slice(0, cursorPosition) + emoji + newMessage.slice(cursorPosition);

      setNewMessage(newContent); // Update the newMessage state
      setSelectedEmoji(emoji);

      // Move the cursor right after the inserted emoji
      const newCursorPosition = cursorPosition + emoji.length;
      textarea.setSelectionRange(newCursorPosition, newCursorPosition);
      textarea.focus(); // Ensure the textarea has focus
    }
  };

  return (

    <div className='page-root messages'>
      <div className='topbar'>
        <div className='middle_part1'>

          <div className='icon_and_h2'>
            <div className="h2_icon_container" style={{ width: '22px', height: '22px', marginTop: '-1px' }}>
              <svg fill='green' version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="m83 440c-43 0.12-76-24-76-65-0.074-11 0.07-37 0.07-111 0-71 0.058-97-0.074-109-0.17-41 44-67 73-67 21-0.19 67-0.11 177-0.11 192 0 182-0.3 199 5.8 19 7.2 36 23 44 41 6.3 15 6.2 13 6.2 130 0 63 0.61 100-0.39 115 0.28 34-34 61-78 62-21-0.35-66-0.28-165-0.19-96 0.086-176-5e-3 -179-0.2zm352-22c13-0.22 34-15 41-28 6.4-13 6.3-9.8 6.3-126 0-116 0.15-113-6.3-126-6.5-13-24-26-41-28-9.2-1.6-349-0.26-358 0-21 1.2-46 22-46 43v222c0.25 12 11 23 18 30 6.6 5.6 19 13 27 13 8.1 0.11 351 0.16 359 0.099zm-363-32c-1.9-1.1-4.1-3-4.7-4.1-2-3.5-1.4-8.8 1.3-12 1.4-1.5 27-25 57-51 30-27 54-49 55-50 0.17-0.62-25-25-57-54-31-29-58-54-58-55-2.2-5.4 1.8-12 8.6-14 3.1-0.97 4.4-0.85 7.5 0.76 2.1 1.1 42 37 89 80 47 43 85 78 86 78s39-35 86-78c47-43 87-79 89-80 7.9-4.2 19 4 17 12-0.45 1.7-22 22-58 56-32 29-57 53-57 54 0.16 0.37 25 23 56 50 30 27 56 51 57 52 3.8 5.3 1.6 12-4.8 15-4.1 2-7.6 1.9-11-0.32-1.6-1-26-23-54-48-28-25-54-48-56-50l-4.8-4.1-23 21c-28 26-29 27-35 27-5.5 0-6.6-0.85-34-27-14-13-23-21-24-20-0.82 0.3-26 23-56 50-30 27-56 50-58 51-3.8 2.4-7.6 2.3-12-0.2z" strokeWidth="1.1" />
              </svg>
            </div>
            <h1> 
            {t('Messages.MainHeading')}
              {/*<span>E</span>MAI<span>L</span>s*/}
              </h1>
          </div>
          <div className='network_icons_contain'>
            <div className='network_icons'>
              <button onClick={() => fetchCorrespondents()} className='refresh_icon' title={t('Messages.GetNewMessages')} style={{ cursor: 'pointer' }}>
                <img src={refresh} alt="" />
              </button>

              {/* <button className='settings_icon' title='settings'>
                <img src={settingIcon} alt="" />
              </button> */}

              <MessageCreate titleNomi={<img src={newMessageIcon} alt="" />} classNomi='new_message_icon' />

              {/* <button className='hamburger_icon' title='settings'>
                <img src={hamburger} alt="" />
              </button> */}
                
            </div>
          </div>

        </div>
        <div className="middle_part2 space-x-2">
          <CreatePostButton />
          <Search setSearch={setSearch} />
        </div>
      </div>

      <div className="separate_into_two_columns">
        <article className='column1'>
          <div className="message_airoport">

            <AdminsMessage />

            <div className={`search_results ${(!search) ? 'no-content' : ''}`}>
              <div className={`s_results_subcontainer ${(!search) ? 'no-content' : ''}`} >
                {search && correspondentsList.map((element, index) => {
                  return (
                    <>
                      <div className='click_to_Profile'
                        key={element._id}
                        title='click to see the profile'
                        onClick={() => {
                          setSearchResultsOn(true);
                        }}
                      >
                        <div className="search_and_result">
                          <p> {t('Messages.TheSearchResultsAppear')}</p>
                        </div>
                      </div>
                    </>
                  )
                }
                )}
              </div>
            </div>

            {correspondentsList?.length > 0 ?
              correspondentsList?.map((element, index) => {
                return (
                  <div key={element._id}
                    onClick={() => {
                      setSelectedSenderId(element._id);
                      handleReceivedMessagesClick(element._id);
                    }}

                    className={`received_messages ${element._id === selectedCorrespondentId ? 'selected-sender' : ''}`}
                  >
                    <img className='sender_image'
                      src={element.image} alt=""
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateToProfile(element._id)
                      }}
                    />

                    <div className='mt-0.5'>
                      <div className='sender_and_time'>
                        <p className='sendersname'>{element.nick}</p>
                      </div>
                      <div>
                        <p className='message_unwrap'>{element.content}</p>
                      </div>
                    </div>

                    {element.isDeleteActivated === true &&
                      (<div className='del_popup_container'
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                      >
                        <div className='del_popup'>

                          <div className='logo_contain'>
                            <div className='logo'>
                              <img src={logo} alt="" />
                            </div>
                          </div>

                          <div className='popup_msg'>
                            <h4>{t('Messages.TheWay')}</h4>
                            <div className="spacer10px"></div>
                            <p>{t('Messages.AreYouSureErase')}</p>
                          </div>

                          <div className="two_btns">
                            <button className='del_btn'
                              onClick={() => deleteCorrespondence(element._id)
                              }>
                              {t('Messages.DeleteButton')}
                            </button>

                            <button className='cancel_btn'
                              onClick={() => {
                                const tempArray = [...correspondentsList]
                                const foundIndex = tempArray.findIndex(el => el._id === element._id)
                                tempArray[foundIndex].isDeleteActivated = false
                                setCorrespondentsList(tempArray)
                              }}>
                              {t('Messages.CancelButton')}
                            </button>
                          </div>

                          <div className='the_check_box'>
                            <input id="deleteBoth" type='checkbox' value={deleteOnBothSides} onChange={() => setDeleteOnBothSides(!deleteOnBothSides)}
                              style={{ verticalAlign: 'middle' }} />
                            <label htmlFor="deleteBoth">{t('Messages.DeleteForBothLabel')}</label>
                          </div>

                        </div>
                      </div>
                      )}
                    <div className="trash_filter"></div>
                    <div className='trash_bin' onClick={(e) => {
                      e.stopPropagation()
                      const tempArray = [...correspondentsList]
                      tempArray[index].isDeleteActivated = true
                      setCorrespondentsList(tempArray)
                    }}>
                      <img src={bin} alt="" />
                    </div>
                  </div>
                )
              })
              :
              <div className='welcome_to_inbox '>
                <h2>{t('Messages.WelcomeInbox')}</h2>
                <p>{t('Messages.WelcomeInboxP1')} </p>
                <p>{t('Messages.WelcomeInboxP2')} </p>
              </div>
            }
          </div>
        </article>
        <article className={` column2 ${isColumn2Expanded ? 'expanded' : ''}`} >
          <div className="right_column_contain">
            <button className='close_the_mail'
              onClick={handleCloseMailClick}>
              &times;
            </button>
            {correspondentsList?.length > 0 && selectedCorrespondentId !== '' ? (
              <div className='div_content'>
                <div className='read_msg_container' ref={readMsgContainerRef}>
                  {messages.map((message) => (
                    <div
                      key={message._id}
                      className={`message-container ${message.sender === auth.userId ? 'message-sent' : 'message-received'
                        }`}
                      style={{ whiteSpace: 'pre-line' }}
                    >
                      <p className='top_p'>{message.content}</p>
                      <p className='bottom_p'>{formatDateDifference(message.createdAt)}</p>
                    </div>
                  ))}

                </div>

                <div className='send_message_div'>
                  {emojiPickerVisible && (
                    <Emojis
                      emojis={emojiArray}
                      onSelectEmoji={handleSelectEmoji}
                      onClose={() => setEmojiPickerVisible(false)}
                    />
                  )}
                  {/* <img src={media} alt="" title='attach an image' /> */}
                  <img src={emoji} alt="" title='insert emojis'
                    onClick={handleOpenEmojiPicker} style={{ cursor: 'pointer' }} />

                  <img onClick={() => {
                    fetchCorrespondents()
                    fetchUserMessages()
                  }} src={refresh} alt="" title={t('Messages.GetLatestMessages')} style={{ cursor: 'pointer' }} />

                  <textarea
                    id="post_content"
                    value={newMessage}
                    onChange={(e) => {
                      setNewMessage(e.target.value);
                      // handlePostContentChange(e);
                    }}

                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage();
                      } else if (e.key === 'Enter' && e.shiftKey) {
                        setNewMessage((prevMessage) => prevMessage + '\n');
                      }
                    }}
                    placeholder={t('Messages.TypeYourMessagePlaceholder')}
                  />
                  <img className='paper_plane'
                    src={paperPlane} alt=""
                    onClick={sendMessage}
                    title={t('Messages.SendMessageTitle')} />
                </div>
              </div>
            ) : (
              <div className="right_column original_announcement">
                <h2>{t('Messages.SelectAnElement')}</h2>
                <p> {t('Messages.ChooseFromExisting')}</p>
              </div>
            )}
          </div>
        </article>
      </div >
    </div >
  )
}

export default Messages