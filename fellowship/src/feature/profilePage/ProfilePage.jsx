import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { useQueryClient } from 'react-query'
import { useInfiniteScroll } from '../../hooks/usePostsInfiniteScroll'
import { format, isValid } from 'date-fns';
import './ProfilePage.css';

import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAuth from '../../hooks/useAuth';

import MessageCreateProfile from './components/MessageCreateProfile';
import UmightLike from '../../components/UmightLike'
import ContactUs from './components/ContactUs'
import Search from '../../components/Search'
import AskSupport from '../../components/AskSupport';

import PostShablon from '../posts/components/PostShablon';
import LazyPosts from '../posts/components/LazyPosts'
import ReplyPopup from '../posts/components/ReplyPopup';
import RepostPopup from '../posts/components/RepostPopup';
import ReportPostButton from '../posts/components/ReportPostButton';

// import follow from '../../images/follow.png';
// import unfollow from '../../images/unfollow.png';
import connected from '../../images/connected.png';
import unconnected from '../../images/unconnected.png';
 
// import block from '../../images/block.png';
import askTheSupport from '../../images/please.png';
import backgrImage from '../../images/please_wait.png';
 
import { useTranslation } from 'react-i18next';
import h2_icon from '../../images/myProfile1.png';
// import { useInfiniteQuery } from 'react-query'
import PostDetailsPopup from '../posts/PostDetailsPopup';
import CreatePostButton from '../../components/buttons/CreatePostButton';

import AdvertiseProfiles from '../../components/AdvertiseProfiles';


const ProfilePage = () => {
  const { t } = useTranslation();
  const [currentSelectedPost, setCurrentSelectedPost] = useState({})
  const [showReplyPopup, setShowReplyPopup] = useState(false)
  const handleCloseReplyPopup = () => {
    setShowReplyPopup(false)
  }

  const axiosPrivate = useAxiosPrivate()
  const { auth } = useAuth()
  const queryClient = useQueryClient()
  const params = useParams()
  const navigate = useNavigate()
  const [activeLink, setActiveLink] = useOutletContext();

  const [isFollowed, setIsFollowed] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const isMyProfilePage = auth.userId === params.id ? true : false

  const globalPostsArrayName = "profilePosts"
  // const globalPostsArrayName = "allPosts"

  const [selectedSection, setSelectedSection] = useState('Posts')

  const {
    data: posts, lastPostRef, isFetching, refetch
  } = useInfiniteScroll(globalPostsArrayName, `${process.env.REACT_APP_BACKEND_URL}/api/posts/profile-page/${auth.userId}/${isMyProfilePage ? auth.userId : params.id}`, selectedSection)

  useEffect(() => {
    return () => queryClient.removeQueries(globalPostsArrayName)
  }, [queryClient])


  const handleSelectedSection = (section) => {
    setSelectedSection(section)
  }
  // once the section of posts is changed, we refetch
  useEffect(() => {
    refetch()
  }, [selectedSection])

  const itemClasses = {
    Posts: selectedSection === 'Posts' ? 'active' : '',
    Replies: selectedSection === 'Replies' ? 'active' : '',
    Media: selectedSection === 'Media' ? 'active' : '',
    Likes: selectedSection === 'Likes' ? 'active' : '',
  }

  // const handleClickFollowing = async () => {
  //   setIsFollowed((prevIsFollowed) => !prevIsFollowed)
  // }

  useEffect(() => {
    const getRelationShipStatus = async () => {
      try {
        const { data } = await axiosPrivate.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/relationships/${auth.userId}/${params.id}`,
        )
        if (data === null) {
          return
        }
        setIsConnected(true)
      } catch (error) {
        console.log(error)
      }
    }
    getRelationShipStatus()
  }, [isConnected])

  const handleClickConnected = async () => {
    setIsConnected((prevIsConnected) => !prevIsConnected);
    try {
      if (!isConnected) {
        await axiosPrivate.post(
          `${process.env.REACT_APP_BACKEND_URL}/api/relationships`,
          {
            teacher: auth.userId,
            learner: params.id
          }
        )
      }
      if (isConnected) {
        await axiosPrivate.delete(
          `${process.env.REACT_APP_BACKEND_URL}/api/relationships/${auth.userId}/${params.id}`,
        )
      }
    } catch (error) {
      console.log(error)
    }
  };

  const [user, setUser] = useState({
    // username: '',
    nick: '',
    searchName: '',
    familyStatus: '',
    childrenAmount: '',
    location: '',
    email: '',
    occupation: '',
    biography: '',
    birthDate: '',
    activity: '',
    securityLevel: '',
    backgroundImage: '',
    image: '',
    whatsapp: '',
  });

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const { data } = await axiosPrivate.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/${params.id}`)

        setUser(
          {
            nick: data.nick,
            searchName: data.searchName,
            birthDate: data.birthDate,
            familyStatus: data.familyStatus,
            childrenAmount: data.childrenAmount,
            location: data.location,
            email: data.email,
            occupation: data.occupation,
            biography: data.biography,
            image: data.image,
            backgroundImage: data.backgroundImage,
            createdAt: data.createdAt,
          })
      } catch (error) {
        // setError(error)
      }
    }
    getUserDetails()
  }, [activeLink])

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);

    if (isValid(date)) {
      return format(date, 'MMMM yyyy');
    } else {
      return t('ProfilePage.InvalidDate');
    }
  };

  const inputDate = user.createdAt;
  const formattedDate = formatDate(inputDate);

  const formatBirthDate = (inputDate) => {
    const date = new Date(inputDate);
  
    // Check if the date is valid before formatting
    if (isValid(date)) {
      return format(date, 'd MMM yyyy');
    } else {
      return ''; // Or any default value if the date is invalid
    }
  };

  const formattedBirthDate = formatBirthDate(user.birthDate);

  const calculateAge = (birthDate) => {
    const birth = new Date(birthDate);
    
    if (isValid(birth)) {
      const today = new Date();
      let age = today.getFullYear() - birth.getFullYear();
      const monthDiff = today.getMonth() - birth.getMonth();
  
      // Adjust age if the birth month/day hasn't been reached yet in the current year
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
      }
  
      return age;
    }
    
    return null; // Return null or any other indicator for invalid date
  };

  const age = calculateAge(user.birthDate);
  
  const allowedRoles = [1111, 4444, 5555]
  const isUserAllowed = allowedRoles.some(role => auth.role.includes(role));

  const [search, setSearch] = useState('')
  // const [isSearchResultsOn, setSearchResultsOn] = useState(false)

  const [showRepostPopup, setShowRepostPopup] = useState(false)
  const handleCloseRepostPopup = () => {
    setShowRepostPopup(false)
  }

  const [showReportPostPopup, setShowReportPostPopup] = useState(false)
  const handleCloseReportPostPopup = () => {
    setShowReportPostPopup(false)
  }

  const [showPostDetailsPopup, setShowPostDetailsPopup] = useState(false)
  const handleClosePostDetailsPopup = () => {
    setShowPostDetailsPopup(false)
  }

  const [isTempNotesPopupOpen, setTempNotesPopupOpen] = useState(false);
  
  return (
    <>
      <div className="page-root my_profile_page">
        <div className='topbar'> 
          <div className='middle_part1'>
            {auth.userId === params.id ? (
              <div className='icon_and_h2'
                style={{ marginLeft: '10px' }}>
              <div className="h2_icon_container">
                <img src={h2_icon} alt="" />
              </div>
                <h1>{auth.nick}</h1>
              </div>
            ) : (
              <>
                {user?.nick ? (
                    <h1>{user.nick}</h1>
                ) : (
                    <h1>XYZ ABCDEF</h1>
                )}
              </>
            )}

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

             <CreatePostButton />
             
          </div>

          <div className="middle_part2">
            <Search setSearch={setSearch} />
          </div>
        </div>

        <div className="separate_into_two_columns">
          <main className="sep_part1">
            <div>
              <div className="positionRelative">
                <div className="my_bgImage" >
                  {auth.userId === params.id ? (
                    <img src={auth.backgroundImage} alt="Default"   />
                  ) : (
                    <>
                      {user?.backgroundImage ? (
                        <img src={user.backgroundImage} alt="" />
                      ) : (
                        <img src={backgrImage} alt="Default" />
                      )}
                    </>
                  )}
                </div>
                <div className="round_image_container">
                  {auth.userId === params.id ? (
                    <img src={auth.image} alt=""  />
                  ) : (
                    <>
                      {user?.image ? (
                        <img src={user.image} alt="" />
                      ) : (
                        <img src={connected} alt="" />
                      )}
                    </>
                  )}
                </div>
                <div className='profile_details_outer'>
                  {isMyProfilePage ?
                    <h4 onClick={() => navigate(`/profile-page/${auth.userId}/edit`)}
                    >
                      {t('ProfilePage.ProfileEditButton')}
                    </h4>
                    :
                    <section >
                      <div className='other_user_connections'>
                        <MessageCreateProfile titleNomi={t('ProfilePage.SendMessage')} classNomi='send_email' paramsNick={user.nick} />
                        <div className='interaction_btns'>
                          {isUserAllowed && (
                            <button
                              title={isConnected ? t('ProfilePage.DisconnectFrom') : t('ProfilePage.ConnectTo')}
                              onClick={handleClickConnected}
                            >
                              <img src={isConnected ? connected : unconnected} alt={t('ProfilePage.ConnectImgAlt')} />
                            </button>
                          )}

                          <AskSupport
                            icon={<img id='ask_admins' src={askTheSupport} alt="" />}
                            className='asking_support'
                            auth={auth}
                            selectedUser={params.id}
                          />
                        </div>
                      </div>
                      <div className="absolute top-16 right-0 truncate group">
                        <button 
                          className="flex items-center">
                          <span className='inline-block '>My notes</span>
                          <span className="ml-2 w-0 h-0 inline-block overflow-hidden group-hover:w-auto group-hover:h-auto  transition-all duration-300">
                            about him / her
                          </span>    
                        </button>
                      </div>
                    </section>
                  }
                </div>
              </div>

              <div className="my_identiteit">
                <div className="spacer20px"></div>
                <div className='nick_and_searchN'>
                  {auth.userId === params.id ? (
                    <h3 className='font-bold text-lg'>{auth.nick}</h3>
                  ) : (
                    <>
                      {user?.nick ? (
                        <h3 className='font-bold'>{user.nick}</h3>
                      ) : (
                        <h3>XYZ ABCDEF</h3>
                      )}
                    </>
                  )}
                  {auth.userId === params.id ? (
                    <p className='search_name'>{auth.searchName}</p>
                  ) : (
                    <>
                      {user?.nick ? (
                        <p className='search_name'>{user.searchName}</p>
                      ) : (
                        <p className='gray'>@user_xyz</p>
                      )}
                    </>
                  )}
                </div>
                {auth.userId !== params.id && (
                <section className='mt-5'>
                    <div className='flex gap-2'>
                      <label className='w-[120px]'>
                        Age:</label> 
                      <p>{age}</p>
                    </div>
                    <div className='flex gap-2'>
                      <label className='w-[120px]'>Height:</label> 
                      <div>
                        <p>5'10" ft</p>
                        <p>178 cm</p>
                      </div>
                    </div>
                    <div className='flex gap-2'>
                      <label className='w-[120px]'>Weight:</label> 
                      <div>
                        <p>232 lb</p>
                        <p>105 kg</p>
                      </div>
                    </div>
                    <div className='flex gap-2'>
                      <label className='w-[120px]'>Character:</label> 
                      <div className='flex gap-4'>
                        <p>submissive</p>
                        <p>violent</p>
                        <p>sangvinik</p>
                      </div>
                    </div>
                    <div className='flex gap-2'>
                      <label className='w-[120px]'>City:</label> 
                      <p>Samarqand</p>
                    </div>
                    <div className='flex gap-2'>
                      <label className='w-[120px]'>Country:</label> 
                      <p>Uzbekistan</p>
                    </div>
                    <div className='flex gap-2'>
                      <label className='w-[120px]'>Seeking:</label> 
                      <div className='flex gap-4'>
                        <p>a date</p>
                        <p>a relationship</p>
                        <p>friends</p>
                      </div>
                    </div>
                    <div className=''>
                      <label className='w-[120px]'>Prefer (wo)men aged from xx to xx</label> 
                    </div>
                </section>
                )}
                
                <div className="biography_div mb-2">
                  {auth.userId === params.id ? (
                    <p>{auth?.biography}</p>
                  ) : (
                    <p>{user?.biography} </p>
                  )}
                </div>

                
                {auth.userId === params.id &&  user?.location && (
                  <p> 🌎 {user?.location}... </p>
                )}
                <p> 🗓️ {t('ProfilePage.Joined')} {formattedDate} </p>

                <p className='mt-2'>27 {t('ProfilePage.Following')} | 8 {t('ProfilePage.Followers')} | 5 {t('ProfilePage.Posts')}. 
                {auth.userId === params.id ? (
                    <p>{t('ProfilePage.DOB')}:  {formattedBirthDate}</p>
                  ) : (
                    <p></p>
                )} </p>
                <p>{user.familyStatus}, {user.childrenAmount} {t('ProfilePage.Children')}. </p>
              </div>


              <div className="posts_sorted">
                <div onClick={() => handleSelectedSection('Posts')}
                  className={itemClasses.Posts} >
                  <p>{t('ProfilePage.PostsTitle')}</p>
                </div>
                <div onClick={() => handleSelectedSection('Replies')}
                  className={itemClasses.Replies} >
                  <p>{t('ProfilePage.RepliesTitle')}</p>
                </div>

                <div
                  onClick={() => handleSelectedSection('Media')}
                  className={itemClasses.Media}
                >
                  <p>{t('ProfilePage.MediaTitle')}</p>
                </div>

                <div
                  onClick={() => handleSelectedSection('Likes')}
                  className={itemClasses.Likes}
                >
                  <p>{t('ProfilePage.LikesTitle')}</p>
                </div>
              </div>

              <div className='allposts_from_backend'>
                {isFetching ? (
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
                ) : (
                  posts?.pages.map((pg, pageIndex) => {
                    return pg?.map((post, i) => {
                      const key = post._id;
                      // const isMiddlePost = Math.round(pg.length / 2) === i + 1
                      const isPostToTriggerFetchingNextStack = i === 0; // we want to start fetching the next stack of posts when the user is scrolling over the Nth post of the current stack

                      if (isPostToTriggerFetchingNextStack) {
                        return <PostShablon ref={lastPostRef} key={key} post={post}

                          setCurrentSelectedPost={setCurrentSelectedPost}
                          setShowReplyPopup={setShowReplyPopup}
                          setShowRepostPopup={setShowRepostPopup}
                          setShowReportPostPopup={setShowReportPostPopup}
                          setShowPostDetailsPopup={setShowPostDetailsPopup}
                          globalPostsArrayName={globalPostsArrayName} />;
                      }

                      return <PostShablon key={key} post={post}

                        setCurrentSelectedPost={setCurrentSelectedPost}
                        setShowReplyPopup={setShowReplyPopup}
                        setShowRepostPopup={setShowRepostPopup}
                        setShowPostDetailsPopup={setShowPostDetailsPopup}
                        setShowReportPostPopup={setShowReportPostPopup}

                        globalPostsArrayName={globalPostsArrayName} />;
                    });
                  })
                )}
              </div>
            </div>
          </main>
          <aside>
            <div className="right_column_contain">
              {auth.userId === params.id ?
                <div className="right_column_ads">
                 <AdvertiseProfiles />
                </div>
                :
                <div className="right_column_ads">
                  <UmightLike
                    h3={`${user.nick}${t('UMight.Publications')}`}
                    titleName={t('UMight.Theology')}
                    btnWord={t('UMight.Read')}/>
                </div>
              }
              <div className="right_column_ads">
                <ContactUs />
              </div>
            </div>
          </aside>
        </div >
      </div >
    </>
  );
};

export default ProfilePage;