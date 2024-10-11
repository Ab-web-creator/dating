import React, { useState, useEffect, useRef } from 'react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate'
import useAuth from '../../../hooks/useAuth';
import './postCreate.css'
import { useMutation, useQueryClient } from "react-query"

import Emojis from '../../../components/emojis/Emojis'
import emojiArray from '../../../components/emojis/emojiArray';

import media from '../../../images/media.png';
import emoji from '../../../images/emoji.png';
import CloseButton from '../../../components/buttons/CloseButton';
import { useTranslation } from 'react-i18next';

const PostCreate = ({ setPostCreateOpen }) => {
  const { t } = useTranslation();

  const { auth } = useAuth()
  const axiosPrivate = useAxiosPrivate()
  const queryClient = useQueryClient()

  const [post, setPost] = useState({
    userId: auth?.userId,
    content: '',
  });


  const [error, setError] = useState('')

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const image = new Image();
        image.src = reader.result;

        image.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          // Set the desired width and height for the resized image
          const maxWidth = 500;
          const maxHeight = 500;

          let width = image.width;
          let height = image.height;

          // Calculate the new dimensions while maintaining the aspect ratio
          if (width > maxWidth || height > maxHeight) {
            const aspectRatio = width / height;

            if (width > height) {
              width = maxWidth;
              height = width / aspectRatio;
            } else {
              height = maxHeight;
              width = height * aspectRatio;
            }
          }

          // Set the canvas dimensions
          canvas.width = width;
          canvas.height = height;

          // Draw the image on the canvas with the new dimensions
          ctx.drawImage(image, 0, 0, width, height);

          // Convert the canvas content to a data URL with reduced resolution
          const base64String = canvas.toDataURL('image/jpeg', 0.8); // Adjust the quality as needed

          // Update the state with the reduced resolution image
          setPost({ ...post, image: base64String });
        };
      };

      reader.readAsDataURL(file);
    } else {
      // If no file is selected, remove the image
      setPost({ ...post, image: '' });
    }
  };

  const [successMessage, setSuccessMessage] = useState(false)

  const handlePostRequest = async (e) => {

    try {
      const { data } = await axiosPrivate.post(`${process.env.REACT_APP_BACKEND_URL}/api/posts`, post)

      setSuccessMessage(true)
      return data
      // setPostCreateOpen(false)
    } catch (error) {
      setError(error)
    }
  }

  const postMutation = useMutation(() => handlePostRequest(),
    {
      onSuccess: (data) => {
        queryClient.setQueriesData('allPosts', (prev) => {

          return {
            ...prev,
            pages: [
              [data, ...prev.pages[0]],
              ...prev.pages.slice(1)
            ]
          }
        })
      }
    }
  )

  const handlePostSubmit = async (e) => {
    e.preventDefault()
    try {
      await postMutation.mutateAsync()
    } catch (error) {
      console.log(error)
    }
  }

  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const textareaRef = useRef(null);

  const handleOpenEmojiPicker = () => {
    setEmojiPickerVisible(true);
  };

  useEffect(() => {
    if (textareaRef.current) {
      const { selectionStart, selectionEnd } = textareaRef.current;
      textareaRef.current.selectionStart = selectionStart;
      textareaRef.current.selectionEnd = selectionEnd;
      textareaRef.current.focus();
    }
  }, [post.content]);


  const handleSelectEmoji = (selectedEmoji) => {
    const textarea = textareaRef.current;
    const { selectionStart, selectionEnd } = textarea;
    const currentContent = post.content;
    const newContent =
      currentContent.substring(0, selectionStart) +
      selectedEmoji +
      currentContent.substring(selectionEnd);
    setPost({ ...post, content: newContent });

    // Calculate the new cursor position after inserting the emoji
    const newCursorPosition = selectionStart + selectedEmoji.length;

    // Set the cursor position after inserting the emoji
    setTimeout(() => {
      textarea.setSelectionRange(newCursorPosition, newCursorPosition);
      textarea.focus();
    }, 0);
  };

  return (
    <>
      <div className='post_create_container' onClick={() => setPostCreateOpen(false)} >
        <div className='post_create'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {successMessage && (
            <div className='success-popup'
              onClick={() => setPostCreateOpen(false)}>
              <div className='with_post_create'>

                <div className='close_post_success_container'>
                  <CloseButton    
                    className=''
                    onClick={() => setPostCreateOpen(false)} />
                </div>

                <h3>{t('PostCreate.Congratulations')}</h3>
                <h4>{t('PostCreate.YourPostAccepted')}</h4>

                <h5>{t('PostCreate.ClickToContinue')} </h5>
              </div>
            </div>
          )}
          <div className="subcontainer">
            <header>
              <div className='flex_it'>
                <div className='profile_img_container_small'>
                  <img
                    src={auth?.image}
                    alt={t('PostCreate.Description')}
                    id='user_photo'
                  />
                </div>
                <div className='my_nick_and_searchName'>
                  <p className='leading-none'>{auth?.nick}</p>
                  <p className='my_searchName'>{auth?.searchName}</p>
                </div>

                <div className='create_post_add_images'>
                  <p>
                  {t('PostCreate.MainHeading')}
                  {/* Cr<span>e</span>at<span>e</span> a n<span>e</span>w Pos<span>t</span> */}
                    </p>
                </div>
              </div>
          
                <CloseButton
                  title={t('PostCreate.CloseButton')}
                  style={{backgroundColor: 'transparent'}}
                  className='close_post_create'
                  onClick={() => setPostCreateOpen(false)}
                />
           
            </header>

            <main>
              <textarea
                ref={textareaRef}
                rows='7'
                name="content"
                value={post.content}
                placeholder={t('PostCreate.placeholderText')}
                onChange={e => setPost({ ...post, [e.target.name]: e.target.value })}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    // Add a newline character to the content
                    setPost({ ...post, content: `${post.content}\n` });
                  }
                }}
              />
              {post.image && (
                <div className="image_preview">
                  <img src={post.image} alt={t('PostCreate.Selected')} />
                  <button className="remove_image"
                    onClick={() => setPost({ ...post, image: '' })}
                  >
                    &times;
                  </button>
                </div>
              )}
            </main>

            {emojiPickerVisible && (
              <Emojis
                emojis={emojiArray}
                onSelectEmoji={handleSelectEmoji}
                onClose={() => setEmojiPickerVisible(false)}
              />
            )}

            <div className='dif_flex'>
              <div className='network_icons'>
                <button title={t('PostCreate.AddMedia')} className='add_media'>
                  <img src={media} alt="" />
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={handleImageChange}
                    style={{ opacity: '0' }}
                  />
                </button>

                <button title={t('PostCreate.AddEmojis')} >
                  <img src={emoji} alt="" title={t('PostCreate.InsertEmojis')}
                    onClick={handleOpenEmojiPicker} style={{ cursor: 'pointer' }} />
                </button>
              </div>
              {error && <p>{error}</p>}
              <button onClick={handlePostSubmit} className="posting-btn">
              {t('PostCreate.PostButton')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostCreate;
