import React, { useState} from 'react';
// import post_something from '../../images/post_new.png';
import PostCreate from '../../feature/posts/components/PostCreate';
import  './createPostButton.css';
import { useTranslation } from 'react-i18next';

const CreatePostButton = () => {

  const { t } = useTranslation();
  const [isPostCreateOpen, setPostCreateOpen] = useState(false)

  return (
    <>
      <button className="post_something"
        title= {t('Buttons.CreatePostTitle')}
        onClick={() => {
          setPostCreateOpen(true)
        }}
      >
        {/* <img src={post_something} alt="" /> */}
        {t('Buttons.CreatePost')}
      </button> 

      {isPostCreateOpen && <PostCreate setPostCreateOpen={setPostCreateOpen} />}
      </>
    );
};

export default CreatePostButton;