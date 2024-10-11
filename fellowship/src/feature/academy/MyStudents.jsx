import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { differenceInYears } from 'date-fns';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAuth from '../../hooks/useAuth';
import './myStudents.css'

import Search from '../../components/Search'

import InviteUser from './components/InviteUserMin'
import Diary from './components/Diary';

import heart from '../../images/heart1.png';
import community from '../../images/community1.png';
import unconnected from '../../images/unconnected.png';
import h2_icon from '../../images/teachers1.png';
import CreatePostButton from '../../components/buttons/CreatePostButton';
import { useTranslation } from 'react-i18next';
import DevNotesButton from '../../components/buttons/DevNotesButton';
import TempNotesPopupTeach from './components/TempNotesPopupTeach';

const MyStudents = () => {

  const { t } = useTranslation();
  const axiosPrivate = useAxiosPrivate()
  const { auth } = useAuth()

  const [learners, setLearners] = useState([])
  const navigate = useNavigate()

  const [isDiaryPopupOpen, setDiaryPopupOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
 
  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
    setDiaryPopupOpen(true);
  };

  useEffect(() => {
    const fetchLearners = async () => {
      try {
        const { data } = await axiosPrivate.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/relationships/relate-to-learners/${auth.userId}`
        )
        setLearners(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchLearners()
  }, [])

  const calculateAge = (birthDate) => {
    const age = differenceInYears(new Date(), new Date(birthDate));
    return age;
  };


  const navigateToProfile = (myStudentsId) => {
    navigate(`/profile-page/${myStudentsId}`)
  }


  const [search, setSearch] = useState('')

  const [isTempNotesPopupOpen, setTempNotesPopupOpen] = useState(false);

  return (
    <>
      <div className='minister-home my_relationships resources'>
        <div className='topbar'>
          <div className='middle_part1'>
 
            <div className='icon_and_h2'>
              <div
                className="h2_icon_container">
                <img src={h2_icon} alt="" />
              </div>
              {/*<h1> <span className='hide_sm_screen'>I <span>a</span>m </span>*/}
              <h1> <span className='hide_sm_screen'>{t('MyStudents.MainHeadingNonEssential1')}</span>
              {/*te<span>a</span>ching*/}
              {t('MyStudents.MainHeadingEssential')}
              <span className='hide_sm_screen'>{t('MyStudents.MainHeadingNonEssential2')}</span>   
                 </h1>
            </div>

            <DevNotesButton isTempNotesPopupOpen={isTempNotesPopupOpen} setTempNotesPopupOpen={setTempNotesPopupOpen} />
            <TempNotesPopupTeach 
              isOpen={isTempNotesPopupOpen}
              setTempNotesPopupOpen={setTempNotesPopupOpen}
            />

            <div className='network_icons_topbar'>
              <InviteUser />
             <CreatePostButton />
            </div>
          </div>
          <div className="middle_part2">
            <Search setSearch={setSearch} />
          </div>
        </div>
        <div className="separate_into_two_columns">
          <div className='one_column_only'>
            <h1 style={{ color: 'gray', fontWeight: '500', marginLeft: '20px' }}>{t('MyStudents.CoursesForMyStudentsHeading')}</h1>
            <div className="courses_container">
              <div className='courses'>
                <div className='course_subcontain'>
                  <div className='name_of_course'>
                    <h2>Rennovation of Heart</h2>
                    <button className='start_course'>Start</button>
                  </div>

                  <div className="course_chapters">
                    <div className='round_div'>
                      <img src={heart} alt="" />
                    </div>

                    <div className='chapter_names'>
                      <p>Chapter 1: Anatomy of Human Soul</p>
                    </div>
                  </div>

                  <div className="course_chapters">
                    <div className='round_div'>
                      <img src={community} alt="" />
                    </div>

                    <div className='chapter_names'>
                      <p>Chapter 2: Relationships as property of Soul</p>
                    </div>
                  </div>

                  <div className="course_chapters">
                    <div className='round_div'>
                      <img src={unconnected} alt="" />
                    </div>

                    <div className='chapter_names'>
                      <p>Chapter 3: Important aspects of Relationships</p>
                    </div>
                  </div>
                  <div className="last_child"></div>
                </div>
              </div>

              <div className='courses'>
                <div className='course_subcontain'>

                  <div className='name_of_course'>
                    <h2>Digital Art</h2>
                    <button className='start_course'>Start</button>
                  </div>

                  <div className="course_chapters">
                    <div className='round_div'>
                      <img src={heart} alt="" />
                    </div>

                    <div className='chapter_names'>
                      <p>Begin with Paint</p>
                    </div>
                  </div>

                  <div className="course_chapters">
                    <div className='round_div'>
                      <img src={community} alt="" />
                    </div>

                    <div className='chapter_names'>
                      <p>The difference between Vector and Raster</p>
                    </div>
                  </div>

                  <div className="course_chapters">
                    <div className='round_div'>
                      <img src={unconnected} alt="" />
                    </div>

                    <div className='chapter_names'>
                      <p>Photoshop, Light version</p>
                    </div>

                  </div>
                  <div className="last_child"></div>
                </div>
              </div>
            </div>

            {learners.length === 0 ? (
              <>
                <main className='list_container'>
                  <div className='the_list_of_relations gave_padding_btm'>
                    <h4 className='gray'>
                    {t('MyStudents.IfYouSeeNoStudent')}
                    </h4>
                  </div>
                </main>
              </>
            ) : (
              <main className='list_container'>
                <div className='the_list_of_relations'>
                  <h4>{t('MyStudents.TheListOfMyStudents')}</h4>
                </div>
                <div className='which_relations'>
                  {learners?.map((element, index) => (
                    <main title='see his/her milestones'
                      className={`flex_it_now ${element._id === selectedUserId ? 'selected-relation' : ''}`}
                      key={element._id}

                      onClick={() => handleUserClick(element._id)}
                    >
                      <div className='profile_img_container_small'
                        onClick={() => navigateToProfile(element.learner._id)}>
                        <img src={element.learner?.image} alt='' />
                      </div>
                      <div >
                        <p>
                          <span className='relation_nick'>
                            {element.learner?.nick}
                          </span>
                          <span>🌎 </span>
                          <span className='occupation_specified'>{element.learner?.location}</span>
                        </p>
                        <p className='relation_work'>
                        {t('MyStudents.Work')}
                          <span className='occupation_specified'> {element.learner?.occupation}.  </span>
                          <span className='persons_age'>{t('MyStudents.Age')}{calculateAge(element.learner?.birthDate)}</span>
                        </p>
                      </div>
                    </main>
                  ))}
                </div>
              </main>
            )}
            {isDiaryPopupOpen && (
              <Diary
                onClose={() => setDiaryPopupOpen(false)}
                selectedUserId={selectedUserId}
                users={learners}
              />
            )}

          </div>
        </div>
      </div >
    </>
  )
}

export default MyStudents