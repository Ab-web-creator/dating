import React, { useState, useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import { useInfiniteScroll } from '../../hooks/usePostsInfiniteScroll'
import { useQueryClient } from 'react-query'
import './discussionsPage.css'

import Search from '../../components/Search'

import PostShablon from '../posts/components/PostShablon'
import ReportPostButton from '../posts/components/ReportPostButton';
import ReplyPopup from '../posts/components/ReplyPopup'
import RepostPopup from '../posts/components/RepostPopup';
import LazyPosts from '../posts/components/LazyPosts'
import PostDetailsPopup from '../posts/PostDetailsPopup'
import CreatePostButton from '../../components/buttons/CreatePostButton'

import { useTranslation } from 'react-i18next';
import AdvertiseProfiles from '../../components/AdvertiseProfiles'
import AdvertiseProfiles2 from '../../components/AdvertiseProfiles2'

const DiscussionsPage = () => {

  const { t } = useTranslation();
  const { auth } = useAuth()
  const queryClient = useQueryClient()
  
  const [selectedSection, setSelectedSection] = useState('AllPosts');

  const handleSelectedSection = (item) => {
    setSelectedSection(item)
  }

  const sections = {
    Posts: selectedSection === 'AllPosts' ? 'active' : '',
    Students: selectedSection === 'StudentsPosts' ? 'active' : '',
  }

  const globalPostsArrayName = "allPosts"

  const [currentSelectedPost, setCurrentSelectedPost] = useState({})
  const [showReplyPopup, setShowReplyPopup] = useState(false)
  const handleCloseReplyPopup = () => {
    setShowReplyPopup(false)
  }

  const {
    data: posts, lastPostRef, isFetching, refetch
  } = useInfiniteScroll(globalPostsArrayName, `${process.env.REACT_APP_BACKEND_URL}/api/posts/all-posts/${auth.userId}`, selectedSection)


  useEffect(() => {
    return () => queryClient.removeQueries(globalPostsArrayName);
  }, [queryClient])

  // once the section of posts is changed, we refetch
  useEffect(() => {
    refetch()
  }, [selectedSection])

  const [search, setSearch] = useState('')
  
  const [showReportPostPopup, setShowReportPostPopup] = useState(false)
  const handleCloseReportPostPopup = () => {
    setShowReportPostPopup(false)
  }

  const [showRepostPopup, setShowRepostPopup] = useState(false)
  const handleCloseRepostPopup = () => {
    setShowRepostPopup(false)
  }

  const [showPostDetailsPopup, setShowPostDetailsPopup] = useState(false)
  const handleClosePostDetailsPopup = () => {
    setShowPostDetailsPopup(false)
  }

  return (
    <>
      <div className='page-root blog_page'>
        <div className='topbar'>
          <div className='middle_part1'>          
            <h1>
              Blo<span>g</span> Pa<span>g</span>e
              </h1>

            {showReportPostPopup && (
              <ReportPostButton post={currentSelectedPost} onClose={handleCloseReportPostPopup} />
            )}
            {showReplyPopup && (
              <ReplyPopup post={currentSelectedPost} onClose={handleCloseReplyPopup} />
            )}
            {showRepostPopup && (
              <RepostPopup post={currentSelectedPost} onClose={handleCloseRepostPopup} />
            )}
            {showPostDetailsPopup && (
              <PostDetailsPopup post={currentSelectedPost} onClose={handleClosePostDetailsPopup} />
            )}

            <div className='flex gap-1'>
             <CreatePostButton />
            </div>
          </div>

          <div className="middle_part2">
            <Search setSearch={setSearch} />
          </div>
        </div>

        <div className="separate_into_two_columns">
          <main className='sep_part1'>
            <div className="second_topbar">
              <div
                onClick={() => handleSelectedSection('AllPosts')}
                className={sections.Posts} >
                <p>
                  <span className='hide_VERY_sm_screen'>{t('Blog.AllPostsNonEssential1')}</span>
                  {t('Blog.AllPostsEssential')}
                  <span className='hide_VERY_sm_screen'>{t('Blog.AllPostsNonEssential2')}</span>
                </p>
              </div>
              <div onClick={() => handleSelectedSection('StudentsPosts')}
                className={sections.Students} >
                <p> 
                  Following
                </p>
              </div>
            </div>

            <div className='posts-general-container'>
              {posts?.pages?.map((pg, pageIndex) => {

                return pg?.map((post, i) => {
                  const key = post._id
                  // const isMiddlePost = Math.round(pg.length / 2) === i + 1
                  const isPostToTriggerFetchingNextStack = i === 0 // we want to start fetching next stack of posts, when the user is scrolling over the Nth post of the current stack

                  if (isPostToTriggerFetchingNextStack) {
                    return <PostShablon ref={lastPostRef} key={key} post={post}
                      setCurrentSelectedPost={setCurrentSelectedPost}
                      setShowReplyPopup={setShowReplyPopup}
                      setShowRepostPopup={setShowRepostPopup}
                      setShowPostDetailsPopup={setShowPostDetailsPopup}
                      setShowReportPostPopup={setShowReportPostPopup}
                      globalPostsArrayName={globalPostsArrayName} />
                  }
                  return <PostShablon key={key} post={post}
                    setCurrentSelectedPost={setCurrentSelectedPost}
                    setShowReplyPopup={setShowReplyPopup}
                    setShowRepostPopup={setShowRepostPopup}
                    setShowPostDetailsPopup={setShowPostDetailsPopup}
                    setShowReportPostPopup={setShowReportPostPopup}
                    globalPostsArrayName={globalPostsArrayName} />
                })
              })
              }
              {isFetching && (
                <>
                  <div className="lazy-post lazypost1">
                    <LazyPosts />
                  </div>
                  <div className="lazy-post lazypost2">
                    <LazyPosts />
                  </div>
                  <div className="lazy-post lazypost3">
                    <LazyPosts />
                  </div>
                  <div className="lazy-post lazypost4">
                    <LazyPosts />
                  </div>
                </>
              )}
            </div>
          </main>
          <aside>
            <div className="right_column_contain">
              <AdvertiseProfiles />
              <AdvertiseProfiles2 />
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}

export default DiscussionsPage
