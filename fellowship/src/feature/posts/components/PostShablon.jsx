import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';
import './PostShablon.css';
import { useMutation, useQueryClient } from "react-query"

import useAxiosPrivate from '../../../hooks/useAxiosPrivate'
import useAuth from '../../../hooks/useAuth';

import LikeButton from './LikeButton';

import BookmarkingButton from './BookmarkingButton';

import reply from '../../../images/reply.png';
import lock from '../../../images/lock.png';
import flag from '../../../images/flag.png';
import views from '../../../images/views.png';
import share from '../../../images/share.png';
import delete_btn from '../../../images/delete.png';
import repost_btn from '../../../images/shared.png';
import { useTranslation } from 'react-i18next';

const PostShablon = React.forwardRef(({
  post,
  globalPostsArrayName,
  setCurrentSelectedPost,
  setShowReportPostPopup,
  setShowPostDetailsPopup,
  setShowReplyPopup,
  setShowRepostPopup }, ref) => {

  const { t } = useTranslation();
  const axiosPrivate = useAxiosPrivate()
  const params = useParams()
  const navigate = useNavigate()
  const { auth } = useAuth()
  const queryClient = useQueryClient()

  const navigateToProfile = (postAuthorId) => {
    navigate(`/profile-page/${postAuthorId}`)
  }

  // const navigateToPostDetails = () => {
  //   navigate(`/post/${post._id}`, {
  //     state: {
  //       content: post.content,
  //       authorNick: post.author.nick,
  //       authorSearchName: post.author.searchName,
  //       updatedAt: post.updatedAt,
  //       authorImage: post.author.image,
  //       postImage: post.image
  //     },
  //   });
  // };

  const isItMyPostOrRepost = auth.userId === post.author._id ? true : false

  const additional_class = post?.content ? 'additional_class' : '';
  const additional_class2 = !post?.content ? 'additional_class2' : '';

  const referencedPostDate = post?.referencedPost?.createdAt;

  const formattedDate = referencedPostDate
    ? format(new Date(referencedPostDate), 'd MMM yyyy', { locale: enGB })
    : 'Invalid Date';

  const handlePopupOpen = () => {
    setCurrentSelectedPost(post)
    setShowReplyPopup(true)
  };

  const handleRepostOpen = () => {
    setCurrentSelectedPost(post)
    setShowRepostPopup(true)
  };


  const handlePostDetailsOpen = () => {
    setCurrentSelectedPost(post)
    setShowPostDetailsPopup(true)
  };

  const handleReportPostOpen = () => {
    setCurrentSelectedPost(post)
    setShowReportPostPopup(true)
  };

  const handleDeletePostRequest = async (postId) => {
    try {
      await axiosPrivate.delete(`${process.env.REACT_APP_BACKEND_URL}/api/posts/${postId}`);
    } catch (error) {
      console.log(error);
    }
  }

  const deletePostMutation = useMutation((postId) => handleDeletePostRequest(postId),
    {
      onSuccess: () => {
        queryClient.setQueriesData('allPosts', (prev) => {
          return {
            ...prev,
            pages: prev.pages.map((pageArray) =>
              pageArray.filter((element) => element._id !== post._id)
            )
          }
        })
      },
    }
  )

  const handleDeletePost = async (postId) => {
    try {
      const shouldDelete = window.confirm(t('PostShablon.AreYouSureDelete'))
      if (!shouldDelete) return
      await deletePostMutation.mutateAsync(postId)
    } catch (error) {
      console.log(error)
    }
  }



  const content =
    <div>
      {post?.content || !post?.reposted ? null : (
        <div className='when_reposting_without_comment'
        >
          <header >
            <div className='repost_icon' >
              <img src={repost_btn} alt="" />
            </div>
            <p> by {post.author.nick} </p>

            {isItMyPostOrRepost ? (
              // Render the customized button
              <button
                title={t('PostShablon.DeleteThisPost')}
                className='erase_this_post'
                onClick={() => handleDeletePost(post._id)}
              >
                <img src={delete_btn} alt="" />
              </button>
            ) : (
              // Render the default button
              <button
                title={t('PostShablon.ReportThisPost')}
                className='flag_this_post'
                onClick={(e) => {
                  e.stopPropagation();
                  handleReportPostOpen();
                }}
              >
                <img src={flag} alt="" />
              </button>
            )}
          </header>
        </div>
      )}

      <div className="both_contents">
        {!post?.content && post?.reposted ? null : (
          <div className="profile_img_container_small"
            onClick={() => navigateToProfile(post.author._id)}>
            <img src={post.author.image} alt="" />
          </div>
        )}

        <div className='inside_post'>
          { !post?.content &&
              post?.reposted ? null : (
              <header >
                <div className='my_user_ism'>
                  <div className='bold'>{post.author.nick} </div>
                  <div className='searchName'>{post.author.searchName} </div>
                  <div className='time_date'>{format(new Date(post.createdAt), 'd MMM yyyy', { locale: enGB })} </div>
                </div>

                {isItMyPostOrRepost ? (
                  // Render the customized button
                  <button
                    title={t('PostShablon.DeleteThisPost')}
                    className='erase_this_post'
                    onClick={() => handleDeletePost(post._id)}
                  >
                    <img src={delete_btn} alt="" />
                  </button>
                ) : (
                  // Render the default button
                  <button
                    title={t('PostShablon.ReportThisPost')}
                    className='flag_this_post'
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReportPostOpen();
                    }}
                  >
                    <img src={flag} alt="" />
                  </button>
                )}
              </header>
            )}

          <div className='reposters_content post_content'
            style={{ marginBottom: '7px' }}
            // onClick={navigateToPostDetails}
            onClick={handlePostDetailsOpen}
            
          >
            {post?.content?.split('\n').map((paragraph, index) => (
              <p key={`${post._id}-${index}`}
              // style={{ paddingRight: '7px' }}
              >{paragraph}</p>
            ))}
          </div>

          {post.image && <div className='attach_img'>
            <img src={post?.image} alt='' />
          </div>
          }

          <main className={`my_user_ism ${additional_class}`}>
            {!post?.referencedPost?._id ? null : (
              <div className="profile_img_container_small"
                onClick={() => navigateToProfile(post?.referencedPost?.author._id)}>
                <img src={post?.referencedPost?.author?.image} alt="" />
              </div>
            )}

            <div className='right_part'>
              {post?.referencedPost?._id ?
                <>
                  <div className='flex_it'>
                    <div className='bold'>{post?.referencedPost?.author?.nick} </div>
                    <div className='searchName'>{post?.referencedPost?.author?.searchName} </div>
                    <div className='time_date'> {formattedDate} </div>
                  </div>

                  <div className='remove_nowrap' 
                  onClick={handlePostDetailsOpen} 
                  >
                    <p>{post.referencedPost?.content}</p>
                  </div>

                  {post.referencedPost?.image && <div className='attach_img'>
                    <img src={post?.referencedPost.image} alt='' />
                  </div>
                  }
                </>
                : <></>}

              {!post?.referencedPost?._id && post?.reposted ? (
                <div className='flex_it'

                >
                  <div className='original_post_removed'
                  // style={{ margin: '10px' }}
                  >
                    <div className="image_container">
                      <img src={lock} alt="" />
                    </div>
                    <p> <span>This content isn't available<span className='hide_VERY_sm_screen'> right now</span>.</span>
                      <br /> When this happens, it's usually because the owner deleted it.
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </main>

          <div className={`network_icons ${additional_class2}`}>

            <button className='reply' title={t('PostShablon.ReplyButton')}
              onClick={e => {
                e.stopPropagation()
                handlePopupOpen()
              }}
            >
              <div className='img_contain'>
                <img src={reply} alt="" />
              </div>
              <div>
                <p>{post.replyCount ? post.replyCount : "0"}</p>
              </div>
            </button>

            <button title={t('PostShablon.RepostButton')} className='repost_button'
              onClick={(e) => {
                e.stopPropagation();
                handleRepostOpen();
              }}
            >
              <div className='img_contain'>
                <img src={repost_btn} alt="" />
              </div>
              <div>
                <p>{post.repostCount ? post.repostCount : "0"}</p>
              </div>
            </button>

            <LikeButton post={post} globalPostsArrayName={globalPostsArrayName} />

            <button title={t('PostShablon.ViewButton')} >
              <div className='img_contain'>
                <img src={views} alt="" />
              </div>
              <div><p>{post.viewCount ? post.viewCount : '0'}</p></div>
            </button>

            <div className='last_two_btns'>
              <BookmarkingButton post={post} globalPostsArrayName={globalPostsArrayName} />

              <button title={t('PostShablon.ShareButton')}>
                <div className='img_contain'>
                  <img src={share} alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  return ref ? <div ref={ref} className='actual-posts' >{content}</div> : <div className='actual-posts'>{content}</div>
})


export default PostShablon
