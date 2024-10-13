import React, { useState, useEffect } from 'react';
import { format, differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns';
import { enGB } from 'date-fns/locale';
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import delete_btn from '../../images/delete.png';
import flag from '../../images/flag.png';
import './postDetails.css'
import { useTranslation } from 'react-i18next';

const PostDetailsPopup = ({ post, onClose }) => {
  const { t } = useTranslation();
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const [replies, setReplies] = useState([]);
  const [newReply, setNewReply] = useState('');

  const formattedDate = post.updatedAt ? format(new Date(post.updatedAt), 'd MMM yyyy', { locale: enGB }) : '';
  const formattedTime = post.updatedAt ? format(new Date(post.updatedAt), 'HH:mm', { locale: enGB }) : '';

  const calculateTimeAgo = (date) => {
    const now = new Date();
    const timeDifferenceInMinutes = differenceInMinutes(now, new Date(date));

    if (timeDifferenceInMinutes < 1) {
      return t('Time.Now');
    } else if (timeDifferenceInMinutes < 60) {
      return `${timeDifferenceInMinutes} ${t('Time.Min')}`;
    } else {
      const timeDifferenceInHours = differenceInHours(now, new Date(date));

      if (timeDifferenceInHours < 24) {
        return `${timeDifferenceInHours} ${t('Time.H')}`;
      } else {
        const timeDifferenceInDays = differenceInDays(now, new Date(date));
        return `${timeDifferenceInDays} ${t('Time.DaysAgo')}`;
      }
    }
  };

  const fetchReplies = async (postId) => {
    try {
      const { data } = await axiosPrivate.get(`${process.env.REACT_APP_BACKEND_URL}/api/replies/${postId}`);
      setReplies(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (post._id) {
      fetchReplies(post._id);
    }
  }, [post._id]);

  const handleNewReply = (e) => {
    setNewReply(e.target.value);
  };

  const handleSubmitNewReply = async () => {
    if (newReply.trim() === '') {
      return;
    }
    try {
      await axiosPrivate.post(`${process.env.REACT_APP_BACKEND_URL}/api/replies/`, {
        targetedPost: post._id,
        replier: auth.userId,
        content: newReply,
      });
      setNewReply('');
      fetchReplies(post._id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteReply = async (replyId) => {
    const confirmDelete = window.confirm(t('PostDetailsPopup.SureToDeleteReply'));

    if (!confirmDelete) {
      return;
    }

    try {
      await axiosPrivate.delete(`${process.env.REACT_APP_BACKEND_URL}/api/replies/${replyId}`);
      fetchReplies(post._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
  <div className='fixed-container' >
      <div className="page-root post-details" >
      <header className='topbar' style={{background: 'white',}}  onClick={onClose}>
        <div className='middle_part1'>
          <div className='arrow_and_post' onClick={onClose}>
            <div className='left_arrow_container'>
              &#8592;
            </div>
            <div style={{ margin: 'auto' }}> <h1>
            {t('PostDetailsPopup.MainHeading')}
              {/* P<span>O</span>ST */} 
              </h1></div>
          </div>

          <div className='network_icons_topbar'>
            <button
              title={t('PostDetailsPopup.TryEsc')}
              className='closePostDetails'
              onClick={onClose}
            >
              &times;
            </button>
          </div>
        </div>
      </header>

      <div className="separate_into_two_columns">
        <main className="sep_part1">
          <div className="post-popup-container">
            <main className='stretch_vertically'>
              <div>
                <div className="the_person">
                  <div className='author_image'>
                    <img src={post.author.image} alt="" />
                  </div>
                  <div className='authours_names'>
                    <p className='authorNick'>{post.author.nick}</p>
                    <p className='authorSearchN'>{post.author.searchName}</p>
                  </div>
                </div>
                <div>
                  {post.content && (
                    <p className='content'>{post.content.trim().split('\n').map((line, index) => (
                      <React.Fragment key={index}>{line}<br /></React.Fragment>
                    ))}</p>
                  )}
                </div>
                <div className='post-image'>
                  <img src={post.image} alt="" />
                </div>

                <div className='created_when'>
                  {formattedDate} &bull; {formattedTime}
                </div>

                <div className='reply_chain'>
                  <div className='reply_input'>
                    <div className="profile_img_container_small">
                      <img src={auth.image} alt="" />
                    </div>

                    <textarea
                      name="newReply"
                      cols="60"
                      rows="2"
                      placeholder={t('PostDetailsPopup.PostYourReplyPlaceholder')}
                      value={newReply}
                      onChange={handleNewReply}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSubmitNewReply();
                        }
                      }}
                    ></textarea>

                    <button onClick={handleSubmitNewReply} className='reply_to_post'>
                    {t('PostDetailsPopup.ReplyButton')}
                    </button>
                  </div>

                  {replies.map((element) => {
                    const isItMyPostOrRepost = auth.userId === element.replier._id;

                    return (
                      <div key={element._id} className='mapping_replies'>
                        <div className='repliers_image'>
                          <img src={element.replier?.image} alt="" />
                        </div>

                        <article>
                          <div className='authours_names'>
                            <p className='authorNick'>{element.replier?.nick} <span className='authorSearchN'>{element.replier?.searchName}</span> &bull; <span className='calc_time'>{calculateTimeAgo(element.createdAt)}</span>
                            </p>

                            {isItMyPostOrRepost ? (
                              <button
                                title={t('PostDetailsPopup.DeleteThisPost')}
                                className='erase_this_post'
                                onClick={() => handleDeleteReply(element._id)}
                              >
                                <img src={delete_btn} alt="" />
                              </button>
                            ) : (
                              <button
                                title={t('PostDetailsPopup.ReportThisPost')}
                                className='flag_this_post'
                                onClick={(e) => {
                                  e.stopPropagation();
                                }}
                              >
                                <img src={flag} alt="" />
                              </button>
                            )}
                          </div>
                          <p className='p_for_contenTs'>{element.content}</p>
                        </article>
                      </div>
                    );
                  })}
                </div>
              </div>
            </main>
          </div>
        </main>
      </div>
    </div>
  </div>
  );
};

export default PostDetailsPopup;
