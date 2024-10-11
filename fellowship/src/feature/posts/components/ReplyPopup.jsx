import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';
import './replyPopup.css'

import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import useAuth from '../../../hooks/useAuth';
import { useTranslation } from 'react-i18next';
import CloseButton from '../../../components/buttons/CloseButton';

const ReplyPopup = ({ post, onClose }) => {

  const { t } = useTranslation();
  const { auth } = useAuth();
  const params = useParams()
  const axiosPrivate = useAxiosPrivate()

  const [replyText, setReplyText] = useState('');
  const [newReply, setNewReply] = useState('')

  const [goodNews, setGoodNews] = useState('')
  const [error, setError] = useState('')


  const calculateRows = (text) => {
    // You can adjust these values based on your design and font size
    const lineHeight = 20;
    const minRows = 5;

    const lineCount = text.split('\n').length;
    const rows = Math.max(minRows, lineCount);

    return rows;
  };

  const handlenewReply = (e) => {
    setNewReply(e.target.value)
  }

  const handleSubmitNewReply = async () => {

    if (newReply.trim() === '') {
      return;
    }

    try {
      await axiosPrivate.post(`${process.env.REACT_APP_BACKEND_URL}/api/replies/`, {
        targetedPost: post._id,
        replier: auth.userId,
        content: newReply
      })
      setNewReply('')

      setGoodNews(t('ReplyPopup.YourReplyAccepted'))
      setTimeout(() => {
        setGoodNews('');
      }, 3000);

      setTimeout(() => {
        onClose();
      }, 4000);

    } catch (error) {

      setError(t('ReplyPopup.ServerError'))
      setTimeout(() => {
        setError('');
      }, 6000);

      console.log(error)
    }
  }

  return (
    <div className='reply_container'
      onClick={onClose} >
      <div className='reply_button' onClick={(e) => {
        e.stopPropagation();
      }} >
        {/* <div className='onClose' onClick={onClose}>
          <div>&times;</div>
        </div> */}
        <CloseButton className='top-2 right-2' onClick={onClose} />

        <main className='second_main'>
          <div className='flex_inside_reply'>
            <div className="profile_img_container_small">
              <img src={post.author.image} alt="" />
            </div>
            <div className='user_details'>
              <p><span className='bold'>{post.author.nick} </span>
                <span className='datum'>{format(new Date(post.updatedAt), 'd MMM yyyy', { locale: enGB })}</span></p>
              <p> <span className='searchN'>{post.author.searchName} </span></p>
            </div>
          </div>
          <div>
            <div className='content_div' style={{ marginBottom: '17px' }}>
              {post.content.split('\n').map((paragraph, index) => (
                <p key={`${post._id}-${index}`} style={{ marginBottom: '7px' }}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className='flex_inside_reply flex_inside_reply2'>
            <div className="profile_img_container_small">
              <img src={auth.image} alt="" />
            </div>

            <div className=''>
              <textarea
                name="newReply"
                id=""
                cols="60"
                value={newReply}
                rows={calculateRows(replyText)}
                placeholder= {t('ReplyPopup.NewReplyPlaceholder')}

                onChange={(e) => handlenewReply(e)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmitNewReply();
                  }
                }}

              ></textarea>
            </div>
          </div>
        </main>

        <footer>
          {error &&
            <div className='error'>
              <div>
                <p>{error}</p>
              </div>
            </div>
          }
          {goodNews &&
            <div className='goodNews'>
              <div> <p >{goodNews}</p></div>
            </div>
          }

          <button onClick={handleSubmitNewReply}
            className='post_reply'>
            {t('ReplyPopup.ReplyButton')}
          </button>

        </footer>
      </div>
    </div>
  );
};

export default ReplyPopup;