import React, { useState, useEffect } from 'react';
import { useQueryClient } from 'react-query'
import { useInfiniteScroll } from '../../hooks/usePostsInfiniteScroll'
import useAuth from '../../hooks/useAuth'
import '../../styles/navbar.css'
 
import UmightLike from '../../components/UmightLike'
import Search from '../../components/Search'
import CreatePostButton from '../../components/buttons/CreatePostButton';
import WhichCoursesToFollow from '../../components/WhichCoursesToFollow';

import PostShablon from '../posts/components/PostShablon'
import LazyPosts from '../posts/components/LazyPosts'
import ReplyPopup from '../posts/components/ReplyPopup';
import RepostPopup from '../posts/components/RepostPopup';
import ReportPostButton from '../posts/components/ReportPostButton';
import PostDetailsPopup from '../posts/PostDetailsPopup';
import { useTranslation } from 'react-i18next';
 
const Bookmarks = () => {

  const { t } = useTranslation();
  const { auth } = useAuth()
  const queryClient = useQueryClient()

  const globalPostsArrayName = "bookmarkPosts"

  const { data: posts, lastPostRef, isFetching } = useInfiniteScroll(globalPostsArrayName, `${process.env.REACT_APP_BACKEND_URL}/api/posts/my-bookmarks/${auth.userId}`)

  useEffect(() => {
    return () => queryClient.removeQueries(globalPostsArrayName)
  }, [queryClient])

  const [search, setSearch] = useState('')
  const [currentSelectedPost, setCurrentSelectedPost] = useState({})

  const [showReplyPopup, setShowReplyPopup] = useState(false)
  const handleCloseReplyPopup = () => {
    setShowReplyPopup(false)
  }

  const [showRepostPopup, setShowRepostPopup] = useState(false)
  const handleCloseRepostPopup = () => {
    setShowRepostPopup(false)
  }

  const [showPostDetailsPopup, setShowPostDetailsPopup] = useState(false)
  const handleClosePostDetailsPopup = () => {
    setShowPostDetailsPopup(false)
  }

  const [showReportPostPopup, setShowReportPostPopup] = useState(false)
  const handleCloseReportPostPopup = () => {
    setShowReportPostPopup(false)
  }

  return (
    <div className='page-root bookmarks'>
      <div className='topbar'>
        <div className='middle_part1'>
          <div className='icon_and_h2'>
            <div className='h2_icon_container'>
              <svg fill='green' version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="m98.5 499c-12.9-4.79-27.9-17.8-27.9-32v-394c0.077-28.4 28.1-53.6 56.6-53.1l131-0.289c151-0.333 145-0.574 160 6.66 10.6 5.28 23.1 18.2 28.2 29.2 7.61 16.4 7.2 3.46 6.88 220l-0.284 191c-0.122 4.7-1.34 7.51-2.94 11-6.96 13.8-19.4 21.7-34.7 21.7-13.5 8e-3 -14.6-0.853-82.6-62.7-33.3-30.3-62-55.9-63.9-57-4-2.26-8.83-2.45-13-0.511-1.6 0.744-31 26.8-65.3 58-44.4 40.3-64 57.4-68 59.3-6.91 3.26-16.9 4.23-23.6 2.29zm13.9-22.9c1.05-0.414 30.1-26.3 64.6-57.5 46.3-41.9 64.2-57.4 68.5-59.5 11.5-5.41 25.8-4.29 36 2.81 2.46 1.72 31.5 27.6 64.6 57.6 33.1 30 61.3 54.9 62.4 55.8 1.06 0.953 4.38 1.38 6.93 1.4 5.78 0.0498 11.8-4.86 13.4-11 1.53-5.65 1.56-380 0.0244-388-3.44-18.6-16.4-31.8-34.2-34.7-9.57-1.59-258-0.243-267 0-17.2 0.43-33.9 15.4-34.1 34.2-0.0329 4.68-1.2 64.3-1.2 196 0 137-0.146 178-0.102 191 0.0247 7.18 3.8 8.69 6.11 10.1 4.01 2.41 9.96 3 14.4 1.26z" strokeWidth="1.11" />
              </svg>
            </div>
            <h1>{t('Bookmarks.MainHeading')}</h1>
            {/*<h1>BOO<span>K</span>MAR<span>K</span>S</h1>*/}
          </div>

          {showReportPostPopup && (
            <ReportPostButton
              post={currentSelectedPost}
              onClose={handleCloseReportPostPopup} />
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

          <div className='network_icons_topbar'>
            <CreatePostButton />
          </div>
        </div>

        <div className="middle_part2">
          <Search setSearch={setSearch} />
        </div>
      </div>

      <div className="separate_into_two_columns">
        <main className='sep_part1'>
          {posts?.pages.map((pg, pageIndex) => {
            return pg.map((post, i) => {
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
          })}

          {isFetching && (
            <>
              <div className="lazy-post lazypost1"><LazyPosts /></div>
              <div className="lazy-post lazypost2"><LazyPosts /></div>
              <div className="lazy-post lazypost3"><LazyPosts /></div>
              <div className="lazy-post lazypost4"><LazyPosts /></div>
            </>
          )}
        </main>
        <aside>
          <div className="right_column_contain">
              <UmightLike
                h3="Want to attend?"
                titleName="Sport event: Volleyball"
                btnWord="Join" />
              <WhichCoursesToFollow />
          </div>
        </aside>
      </div >
    </div >
  )
}

export default Bookmarks