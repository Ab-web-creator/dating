import React, { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';
import './repostPopup.css';

import useAuth from '../../../hooks/useAuth';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';

import repost_btn from '../../../images/shared.png';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useTranslation } from 'react-i18next';
import CloseButton from '../../../components/buttons/CloseButton';

const RepostPopup = ({ post, onClose }) => {
  const { t } = useTranslation();
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const queryClient = useQueryClient();

  const [repostText, setRepostText] = useState('');
  const [goodNews, setGoodNews] = useState('');
  const [error, setError] = useState('');

  const textareaRef = useRef(null); // Create a ref for the textarea element

  useEffect(() => {
    // Focus on the textarea when the component mounts
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

  const handleRepostRequest = async () => {
    try {
      const { data } = await axiosPrivate.post(`${process.env.REACT_APP_BACKEND_URL}/api/posts`, {
        userId: auth.userId,
        content: repostText,
        referencedPost: post._id,
        repost: true,
      });

      setGoodNews(t('RepostPopup.Accepted'));

      setTimeout(() => {
        setGoodNews('');
      }, 3000);

      setTimeout(() => {
        onClose();
      }, 4000);

      return data;
    } catch (error) {
      setError(t('RepostPopup.ServerError'));
      setTimeout(() => {
        setError('');
      }, 3000);

      console.log(error);
    }
  };

  const postMutation = useMutation(
    () => handleRepostRequest(),
    {
      onSuccess: (data) => {
        queryClient.setQueriesData('allPosts', (prev) => {
          return {
            ...prev,
            pages: [[data, ...prev.pages[0]], ...prev.pages.slice(1)],
          };
        });
      },
    }
  );

  const handleRepostSubmit = async (e) => {
    e.preventDefault();
    try {
      await postMutation.mutateAsync();
      setRepostText('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleRepostChange = (event) => {
    setRepostText(event.target.value);
  };

  const calculateRows = (text) => {
    const lineHeight = 20;
    const minRows = 1;

    const lineCount = text.split('\n').length;
    const rows = Math.max(minRows, lineCount);

    return rows;
  };

  return (
    <>
      <div className="repost_container" onClick={onClose}>
        <div className="repost" onClick={(e) => { e.stopPropagation(); }}>
          <main className="scrolling_part">
            <div className="my_comment">
              <div className="profile_img_container_small">
                <img src={auth.image} alt="" />
              </div>

              <div className="textarea_div">
                <textarea
                  ref={textareaRef} // Attach ref to the textarea element
                  name="reposting"
                  id=""
                  cols="60"
                  rows={calculateRows(repostText)}
                  placeholder={t('RepostPopup.PostYourPlaceholder')}
                  value={repostText}
                  onChange={handleRepostChange}
                ></textarea>
              </div>
            </div>

            <div className="post_copy">
              <article>
                <div className="very_small_img_container">
                  <img src={post.author.image} alt="" />
                </div>
                <div className="poster_credentials">
                  <p className="bold">{post.author.nick} </p>
                  <p className="searchN">{post.author.searchName} </p>
                  <p className="datum">{format(new Date(post.updatedAt), 'd MMM yyyy', { locale: enGB })}</p>
                </div>
              </article>
              <div>
                <div className="content_div">
                  {post.content.split('\n').map((paragraph, index) => (
                    <p key={`${post._id}-${index}`} style={{ marginBottom: '7px' }}>{paragraph}</p>
                  ))}
                </div>
                <div className="postImage">
                  <img src={post.image} alt="" />
                </div>
              </div>
            </div>
          </main>
          <footer>
            {error && (
              <div className="error">
                <div>
                  <p>{error}</p>
                </div>
              </div>
            )}
            {goodNews && (
              <div className="goodNews">
                <div> <p >{goodNews}</p></div>
              </div>
            )}

            <button
              onClick={handleRepostSubmit}
              className="post_repost"
            >
              {t('RepostPopup.RepostButton')}
            </button>
          </footer>
          {/* <div className="close_repost" onClick={onClose}>
            <div>
              &times;
            </div>
          </div> */}
          <CloseButton className='top-2 right-2' onClick={onClose}/>


        </div>
      </div>
    </>
  );
};

export default RepostPopup;
