import React, { useState, useEffect, useRef } from 'react';
import './messageCreate.css';

import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import useAuth from '../../../hooks/useAuth';
import { useParams, useNavigate } from 'react-router-dom';
import SearchContainer from '../../../components/Search';
import { useTranslation } from 'react-i18next';

import CloseButton from '../../../components/buttons/CloseButton';
// import CreatePostButton from '../../../components/buttons/CreatePostButton';

const MessageCreate = ({ titleNomi, classNomi, paramsNick }) => {

  const { t } = useTranslation();
  const axiosPrivate = useAxiosPrivate()
  const { auth } = useAuth()
  const params = useParams()
  const navigate = useNavigate()

  const [isPopupWindOnPost, setPopupWindOnPost] = useState(false);


  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [selectedReceiver, setSelecterReceiver] = useState({})
  const [content, setContent] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [goodNews, setGoodNews] = useState('')
  const [error, setError] = useState('')

  const handleSelectedFoundUser = (user) => {
    setSelecterReceiver(user)
    setSearch('')
    setSearchResults([])
  }

  const isSendDisabled = !selectedReceiver.nick || !content;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const { data } = await axiosPrivate.get(`${process.env.REACT_APP_BACKEND_URL}/api/search/new-message/${search}`)
        setSearchResults(data)

      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    if (search) {
      fetchUsers()
    }
  }, [search])

  const handleSendMessage = async () => {
    try {
      const greeting = selectedReceiver.nick
        ?  `${t('MessageCreate.Dear')} ${selectedReceiver.nick},\n\n`
        : '';

      const signature = `\n\nWith respect,\n${auth.nick}`;

      const fullContent = `${greeting}${content}${signature}`;

      const payload = {
        senderId: auth.userId,
        receiverId: selectedReceiver._id,
        content: fullContent
      };

      await axiosPrivate.post(`${process.env.REACT_APP_BACKEND_URL}/api/messages/initial-message`, payload);
      setGoodNews(t('MessageCreate.YourMessageSent'))
      setTimeout(() => {
        setGoodNews('');
      }, 2000);


      setTimeout(() => {
        setPopupWindOnPost(false);
      }, 3000);

    } catch (error) {
      setError(t('MessageCreate.ServerSideError'))
      setTimeout(() => {
        setError('');
      }, 6000);
      console.log(t('MessageCreate.ErrorSendingMessage'), error)
    }
  }

  const [isSearchResultsOn, setSearchResultsOn] = useState(false)


  const handleSearchInputClick = () => {
    // Clear the selectedReceiver when the search input is clicked
    setSelecterReceiver({});
  };

  return (
    <>
      <button
        title={t('MessageCreate.CreateAMessageButton')}
        className={classNomi}

        style={{ cursor: 'pointer' }}

        onClick={() => {
          setPopupWindOnPost(true);
        }}

      >
        {titleNomi}
      </button>

      {isPopupWindOnPost && (
        <div className='message_create_container'
          onClick={() => {
            setPopupWindOnPost(false);
          }} >
          <div className='message_create'
            onClick={(e) => {
              e.stopPropagation();
            }} >
            <header className='my_user_ism'>

              <CloseButton className='top-2 right-2'  
              onClick={() => {setPopupWindOnPost(false);}}
              />

              <div className='titul'>
                <h4>{t('MessageCreate.MainHeading')}</h4>
              </div>
            </header>

            <main >
              <div className="sub_main">
                <div>
                  <div className="addresant">
                    <div className='sidebar_search'>
                      <form>
                        <input
                          type='search'
                          value={search}
                          onClick={handleSearchInputClick}
                          onChange={(e) => {
                            const trimmedMessage = e.target.value.trim()
                            setSearch(trimmedMessage)
                          }}
                          placeholder={`${selectedReceiver.nick || ""}  ${selectedReceiver.searchName || ""}`}
                        />
                        <div className='search_unicode'>&#9906;</div>
                      </form>
                    </div>

                    <div className={`search_results ${(!search) ? 'no-content' : ''}`}>
                      <div className={`s_results_subcontainer ${(!search) ? 'no-content' : ''}`}>
                        <div
                          className='click_to_Profile'
                          title={t('MessageCreate.ClickToSee')}
                          onClick={() => {
                            setSearchResultsOn(true);
                          }}
                        >
                          {search &&
                            <div className="search_and_result">
                              {isLoading ? (
                                <p>{t('MessageCreate.Loading')}</p>
                              ) : (
                                <>
                                  {searchResults?.map((user) => (
                                    <div key={user._id} className='found_user' title= {t('MessageCreate.ClickToChoose')}>

                                      <img style={{ width: "25px", height: "25px" }} src={user.image} alt={t('MessageCreate.UseAvatar')} />

                                      <div>
                                        <p onClick={() => handleSelectedFoundUser(user)}>
                                          {user?.nick} <span>{user?.searchName}</span>
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                  {searchResults && searchResults.length === 0 && <p>{t('MessageCreate.NoResults')} </p>}
                                </>
                              )}
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  </div>

                  {selectedReceiver.nick && (
                    <div className='greeting_part'>
                      {t('MessageCreate.Dear')} <span className='sender'>{selectedReceiver.nick}</span>,
                    </div>
                  )}

                  <textarea
                    name='content'
                    rows='7'
                    value={content}
                    placeholder={t('MessageCreate.WriteYourPlaceholder')}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className='the_end'>
                  <p>{t('MessageCreate.WithRespect')}</p>
                  <p className='sender'>{auth.nick}</p>
                </div>
              </div>

              <div className='dif_flex'>
                <div>
                  {error &&
                    <div className='error'>
                      <div>
                        <p style={{ color: 'red' }}>{error}</p>
                      </div>
                    </div>
                  }
                  {goodNews &&
                    <div className='goodNews'>
                      <div>
                        <p style={{ color: 'green' }} >{goodNews}</p>
                      </div>
                    </div>
                  }
                </div>

                <button
                  className="send_message_btn"
                  onClick={handleSendMessage}
                  title={t('MessageCreate.SendYourMessage')}
                  disabled={isSendDisabled}
                >
                  {t('MessageCreate.SendButton')}
                </button>

              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
}

export default MessageCreate;
