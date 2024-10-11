import React from 'react';
import './likeButton.css';
import { usePostLike } from '../../../hooks/usePostLike';
import heart1 from '../../../images/heart1.png';
import heart2 from '../../../images/heart_red.png';
import { useTranslation } from 'react-i18next';

const LikeButton = ({ post, globalPostsArrayName }) => {
  const { handleLike, isLiked } = usePostLike(globalPostsArrayName, post);

  const { t } = useTranslation();
  const handleMouseEnter = (event) => {
    event.currentTarget.querySelector('img').src = heart2;
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.querySelector('img').src = isLiked ? heart2 : heart1;
  };

  return (
    <button
      title={isLiked ? t('LikeButton.RemoveLike') : t('LikeButton.AddLike')} 
      className='like_button_count'
      onClick={handleLike}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='relative'>
        <div className='img_contain'>
          <img src={isLiked ? heart2 : heart1} alt="" />
        </div>
        <div className='like-count'>
          <p className={isLiked ? 'red' : ''}>{post.likeCount}</p>
        </div>
      </div>
    </button>
  );
};

export default LikeButton;
