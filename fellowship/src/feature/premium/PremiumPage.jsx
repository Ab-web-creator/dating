import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { differenceInYears } from 'date-fns';
import './premiumPage.css'

import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAuth from '../../hooks/useAuth';
import Search from '../../components/Search'

import Diary from './components/Diary';

import heart from '../../images/heart1.png';
import community from '../../images/community1.png';
import unconnected from '../../images/unconnected.png';
import h2_icon from '../../images/mystudents1.png';
import CreatePostButton from '../../components/buttons/CreatePostButton';
import { useTranslation } from 'react-i18next';
import DonateButton from '../../components/buttons/DonateButton';
 

import AdvertiseProfiles from '../../components/AdvertiseProfiles'
import AdvertiseProfiles2 from '../../components/AdvertiseProfiles2'

const PremiumPage = () => {
  const { t } = useTranslation();
  const [isDiaryPopupOpen, setDiaryPopupOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
    setDiaryPopupOpen(true);
  };

  const axiosPrivate = useAxiosPrivate()
  const { auth } = useAuth()
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const { data } = await axiosPrivate.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/relationships/relate-to-teachers/${auth.userId}`
        )
        setTeachers(data)

      } catch (error) {
        console.log(error)
      }
    }
    fetchTeachers()
  }, [auth.userId, axiosPrivate])

  const calculateAge = (birthDate) => {
    const age = differenceInYears(new Date(), new Date(birthDate));
    return age;
  };

  const navigate = useNavigate();

  const navigateToProfile = (myStudentsId) => {
    navigate(`/profile-page/${myStudentsId}`)
  }

  const [search, setSearch] = useState('')
  const [isTempNotesPopupOpen, setTempNotesPopupOpen] = useState(false);

  return (
    <div className='page-root my_relationships'>
      <div className='topbar'>
        <div className='middle_part1'>
          <div className='icon_and_h2'>
            <div
              className="h2_icon_container">
              <img src={h2_icon} alt="" />
            </div>
            <h1> 
            Pr<span>e</span>mium Ben<span>e</span>fits 
              {/* <span className='hide_sm_screen'>
              {t('MyTeachers.MainHeadingNonEssential1')}</span>
              {t('MyTeachers.MainHeadingEssential')}
              <span className='hide_sm_screen'>{t('MyTeachers.MainHeadingNonEssential2')}</span>    */}
            </h1>
          </div>
 
          <div className='network_icons_topbar'>
            <DonateButton />
          </div>
        </div>
        <div className="middle_part2">
          <Search setSearch={setSearch} />
        </div>
      </div>

      <div className="separate_into_two_columns">
      <main className='sep_part1 overflow-y-auto pt-4'>
     

          {teachers.length === 0 ? (
            <>
              <main className='list_container'>
                <div className='the_list_of_relations gave_padding_btm'>
                  <h4 className='gray'>
                  {t('MyTeachers.IfYouSeeNoTeacher')}
                  </h4>
                </div>
              </main>
            </>
          ) : (
            <main className='list_container'>
              <div className='the_list_of_relations'>
                <h4>My favourit profiles</h4>
              </div>
              <div className='which_relations'>
                {teachers.map((element, index) => (
                  <main
                    title='see his/her milestones'
                    className={`flex_it_now ${element._id === selectedUserId ? 'selected-relation' : ''}`}
                    key={element._id}
                    onClick={() => handleUserClick(element._id)}
                  >
                    <div className='profile_img_container_small'
                      onClick={() => navigateToProfile(element.teacher._id)}                       >
                      <img src={element.teacher.image}  alt='' />
                    </div>
                    <div>
                      <p>
                        <span className='relation_nick' >
                          {element.teacher.nick}
                        </span><span>{t('MyTeachers.Location')}</span>
                        <span className='occupation_specified'>{element.teacher.location}</span>
                      </p>
                      <p className='relation_work'>
                      {t('MyTeachers.Work')}
                        <span className='occupation_specified'> {element.teacher.occupation}.  </span>
                        <span className='persons_age'>{t('MyTeachers.Age')}{calculateAge(element.teacher.birthDate)}</span>
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
              users={teachers}
            />
          )}
        </main>
        <aside>
        <div className="right_column_contain">
              <AdvertiseProfiles />
              <AdvertiseProfiles2 />
            </div>
        </aside>
      </div >
    </div >
  )
}

export default PremiumPage