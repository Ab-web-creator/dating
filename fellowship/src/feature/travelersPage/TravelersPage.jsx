import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAuth from '../../hooks/useAuth';

import './travelersPage.css';
import ResourceShablon from './components/ResourceShablon';

import Search from '../../components/Search'
 
import heart from '../../images/heart1.png';
import community from '../../images/community1.png';
import unconnected from '../../images/unconnected.png';
import VideoLinks from '../videochats/components/VideoLinks';

 
import h2_icon from '../../images/open_book.png';
 
import AdamCalligraphy from '../../images/adam.svg';
import NuhCalligraphy from '../../images/noah.svg';
import IbrahimCalligraphy from '../../images/Ibrahim.svg';
import bookImage from '../../images/open_book.png';
import DevNotesButton from '../../components/buttons/DevNotesButton';
import TempNotesPopupResources from './components/TempNotesPopupResources';
import { useTranslation } from 'react-i18next';

const TravelersPage = () => {
  const { t } = useTranslation();
  const { auth } = useAuth()
  const axiosPrivate = useAxiosPrivate()

  const navigate = useNavigate()

  const [isPostCreateOpen, setPostCreateOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [isTempNotesPopupOpen, setTempNotesPopupOpen] = useState(false);
  const [clickedVideos, setClickedVideos] = useState([]);

  useEffect(() => {
    // Retrieve the state from localStorage on component mount
    const storedClickedVideos = localStorage.getItem('clickedVideos');
    if (storedClickedVideos) {
      // console.log('Retrieved from localStorage:', JSON.parse(storedClickedVideos));
      setClickedVideos(JSON.parse(storedClickedVideos));
    }
  }, []);

  const saveClickedVideosToLocalStorage = (videos) => {
    // Save the state to localStorage whenever it changes
    localStorage.setItem('clickedVideos', JSON.stringify(videos));
    // console.log('Saved to localStorage:', videos);
  };

  const handleVideoClick = (index) => {
    setClickedVideos((prevClickedVideos) => {
      const newClickedVideos = [...prevClickedVideos];
      newClickedVideos[index] = !newClickedVideos[index];
      saveClickedVideosToLocalStorage(newClickedVideos);
      return newClickedVideos;
    });
  };

  const videoData = [
    { src: "https://www.youtube.com/embed/cT4dowOg14k?si=jaWC8hEq2MWBDzJ4", title: t('Resources.StoryAdam') },

    { src: "https://www.youtube.com/embed/v9HaXq1fEro?si=aX1qcvbBBLdzHans", title: t('Resources.StoryNoah') },

    { src: "https://www.youtube.com/embed/JNfFG8l4Phw?si=GXeicnjnPt8HuTSZ", title: t('Resources.StoryAbrahamPart1') },

    { src: "https://www.youtube.com/embed/2bzvjm5Q1tM?si=9QlCGkjL0aLQ_B10", title: t('Resources.StoryAbrahamPart2') },

    { src: "https://www.youtube.com/embed/Yr4CPWIIhgk?si=5-2vyQXBLOdYa0Ce", title: t('Resources.StoryYunus')},

    { src: "https://www.youtube.com/embed/gP6lpez1C8Q?si=4VMCy4jdEWpzKxbD", title: t('Resources.TimeIsShort') },

    { src: "https://www.youtube.com/embed/ljBLmSK9o08?si=2UVdf_t-VfDp09Lj", title: t('Resources.ClassicUzbekSong') },

  ];

  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      const { data } = await axiosPrivate.get(`${process.env.REACT_APP_BACKEND_URL}/api/books/get-all-books/${auth.userId}`)
      // console.log("books", data)
      setBooks(data)
    }
    fetchBooks()
  }, [auth.userId, axiosPrivate])

  const handleBookDeletion = async (e, index, bookId, userId) => {
    e.stopPropagation()
    try {
      const { data } = await axiosPrivate.delete(`${process.env.REACT_APP_BACKEND_URL}/api/books/${bookId}/${userId}`)
      if (data.message === 'Success') {
        setBooks(prevBooks => {
          const updatedBooks = [...prevBooks];
          updatedBooks.splice(index, 1)
          return updatedBooks;
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='minister-home servants_or_resources_board resources'>

      <div className='topbar'>
        <div className='middle_part1'>
          <div className='icon_and_h2'>
            <div
              className="h2_icon_container">
              <img src={h2_icon} alt="" />
            </div>
            <h1>
            {t('Resources.MainHeading')}
              {/* R<span>e</span>sourc<span>e</span>s */}
              </h1>
          </div>
          <DevNotesButton isTempNotesPopupOpen={isTempNotesPopupOpen} setTempNotesPopupOpen={setTempNotesPopupOpen} />
          <TempNotesPopupResources
              isOpen={isTempNotesPopupOpen}
              setTempNotesPopupOpen={setTempNotesPopupOpen}
            />

          <div className='network_icons_topbar'>
            {auth.role.includes(1111) && (<div className="topbar_btn_container">
              <button onClick={() => navigate('/resources/book-upload')} title='publish an article' className='add-your-collection'
              >
                 {t('Resources.PlusCollection')}
              </button>
            </div>)}
          </div>
        </div>

        <div className="middle_part2">
          <Search setSearch={setSearch} />
        </div>
      </div>

      <div className="separate_into_two_columns">
        <div className='one_column_only'>
          <h1 style={{ color: 'gray', fontWeight: '500', marginLeft: '20px' }}>
            {t('Resources.AvailableCourses')} </h1>
          <div className="courses_container">
            <div
              onClick={() => navigate('/qisas-uzbek/home-qisas')}
              className='courses'>
              <div className='course_subcontain cursored'>
                <div className='name_of_course'>
                  <h2> {t('Resources.QisasUzbek')} </h2>
                  <button className='start_course'> {t('Resources.OpenButton')} </button>
                </div>

                <div className="course_chapters ">
                  <div className='round_div'>
                    <img src={AdamCalligraphy} alt="" />
                  </div>

                  <div className='chapter_names' >
                    <p> {t('Resources.AdamAs')} </p>
                    <p className='font_weight_300'>18% mastered</p>
                  </div>
                </div>

                <div className="course_chapters">
                  <div className='round_div'>
                    <img src={NuhCalligraphy} alt="" />
                  </div>

                  <div className='chapter_names'>
                    <p> {t('Resources.NuhAs')}</p>
                  </div>
                </div>

                <div className="course_chapters">
                  <div className='round_div'>
                    <img src={IbrahimCalligraphy} alt="" />
                  </div>

                  <div className='chapter_names'>
                    <p> {t('Resources.AbrahamAs')}</p>
                  </div>
                </div>

                <div className="last_child"></div>
              </div>
            </div>

            <div className='courses'
              onClick={() => navigate('/creativity-course-from-religious-heritages/home-for-art')}>
              <div className='course_subcontain cursored'>
                <div className='name_of_course'>
                  <h2>
                  {t('Resources.WisdomFromAncient')}
                  </h2>
                  <button className='start_course'>{t('Resources.StartButton')}</button>
                </div>

                <div className="course_chapters">
                  <div className='round_div'>
                    <img src={heart} alt="" />
                  </div>

                  <div className='chapter_names'>
                    <p>{t('Resources.MosesAs')}</p>
                    <p className='font_weight_300'>21% mastered</p>
                  </div>
                </div>

                <div className="course_chapters">
                  <div className='round_div'>
                    <img src={community} alt="" />
                  </div>

                  <div className='chapter_names'>
                    <p>Bhagavad Gita</p>
                  </div>
                </div>

                <div className="course_chapters">
                  <div className='round_div'>
                    <img src={unconnected} alt="" />
                  </div>

                  <div className='chapter_names'>
                    <p>Buddha</p>
                  </div>

                </div>
                <div className="last_child"></div>
              </div>
            </div>
          </div>

          <div className="courses_container">
            <div className='courses '
              onClick={() => navigate('/html-css-course/home-for-html-css')}
            >
              <div className='course_subcontain cursored'>
                <div className='name_of_course'>
                  <h2>HTML, CSS and JS</h2>
                  <button className='start_course'>{t('Resources.StartButton')}</button>
                </div>

                <div className="course_chapters">
                  <div className='round_div'>
                    <img src={heart} alt="" />
                  </div>

                  <div className='chapter_names'>
                    <p> Intro for HTML</p>
                    <p className='font_weight_300'>18% mastered</p>
                  </div>
                </div>

                <div className="course_chapters">
                  <div className='round_div'>
                    <img src={community} alt="" />
                  </div>

                  <div className='chapter_names'>
                    <p> Three ways of handling CSS</p>
                  </div>
                </div>

                <div className="course_chapters">
                  <div className='round_div'>
                    <img src={unconnected} alt="" />
                  </div>

                  <div className='chapter_names'>
                    <p> JavaScript, give life to your website</p>
                  </div>
                </div>
                <div className="last_child"></div>
              </div>
            </div>
      
            {books?.map((book, index) => {
              return (
                <div key={index}
                  onClick={() => navigate(`/resources/book/overview/${book?._id}`)}
                  className='courses dynamic_courses'
                >
                  <div className='course_subcontain cursored'>
                    <div className='course_nameAuto'>
                      <div className='headingAuto' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                        <h2>{book?.title}</h2>
                        <button className='start_course'> {t('Resources.OpenButton')} </button>
                      </div>

                      <div className='contentAuto'>
                        <div className='chaptersAuto'>

                          <div className="course_chapters ">
                            <div className='round_div'>
                              <img src={bookImage} alt="" />
                            </div>
                            <div className='chapter_names'>
                              <p>{book?.sections[0]?.title}</p>
                              <p className='font_weight_300'>33% mastered</p>
                            </div>
                          </div>

                          <div className="course_chapters ">
                            <div className='round_div'>
                              <img src={bookImage} alt="" />
                            </div>
                            <div className='chapter_names'>
                              <p>{book?.sections[1]?.title}</p>
                            </div>
                          </div>

                          <div className="course_chapters ">
                            <div className='round_div'>
                              <img src={bookImage} alt="" />
                            </div>
                            <div className='chapter_names'>
                              <p>{book?.sections[2]?.title}</p>
                            </div>
                          </div>
                        </div>
                        {auth.userId === book.uploadedBy &&
                          <>
                            <div className='btnsAuto'>
                              <button className='editBtnAuto'
                                onClick={(e) => {
                                  e.stopPropagation()
                                  navigate(`/resources/book-edit/${book?._id}`)
                                }}>{t('Resources.EditButton')}</button>

                              <button className='deleteBtnAuto'
                                onClick={(e) => handleBookDeletion(e, index, book?._id, auth?.userId)}>{t('Resources.DeleteButton')}</button>
                            </div>
                          </>}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <h3 style={{ color: 'gray', fontWeight: '500', marginLeft: '20px' }}>{t('Resources.BooksByTeyyib')}</h3>
          <div className='for_thumbnails'>
            <ResourceShablon />
          </div>
          <div className="spacer40px"></div>
          <VideoLinks />
 
        </div>
      </div>
    </div>
  );
};

export default TravelersPage;
