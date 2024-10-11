import React, { useState, useEffect } from 'react';
import './servants.css'
import BoardMembers from './components/BoardMembers'
import Search from '../../components/Search'

import useAuth from '../../hooks/useAuth'
import UmightLike from '../../components/UmightLike'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import LazyBoardMembers from './components/LazyBoardMembers';
import EventThumbNail from '../../components/EventThumbNail';
 
import h2_icon from '../../images/servants1.png';
import take_me_out from '../../images/unfollow.png';
import add_me_in from '../../images/follow.png';
import CreatePostButton from '../../components/buttons/CreatePostButton';
import DevNotesButton from '../../components/buttons/DevNotesButton';
import TempNotesPopupServants from './components/TempNotesPopupServants';
import { useTranslation } from 'react-i18next';

const Servants = () => {

  const { t } = useTranslation();
  const { auth, setAuth } = useAuth()
  const axiosPrivate = useAxiosPrivate()

  const allowedRoles = [1111, 4444, 5555]
  const [boardMembers, setBoardMembers] = useState([])
  const [boardMember, setBoardMember] = useState(allowedRoles.some(role => auth.role.includes(role)) && auth.boardMember)

  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const fetchBoardMembers = async () => {
      try {
        setLoading(true)
        const { data } = await axiosPrivate.get(`${process.env.REACT_APP_BACKEND_URL}/api/users?boardMembers=true`)
        setBoardMembers(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchBoardMembers()
  }, [axiosPrivate])

  useEffect(() => {
    const updateBoardMember = async () => {
      try {
        const { data } = await axiosPrivate.put(`${process.env.REACT_APP_BACKEND_URL}/api/users/update-board-member/${auth.userId}`, { boardMember })

        setAuth({
          ...auth,
          boardMember: boardMember
        })

        setBoardMembers(data)
      } catch (error) {
        setError(error)
      }
    }
    updateBoardMember()
  }, [boardMember])

  const toggleMembership = async () => {
    setBoardMember(!boardMember)
  }

  const [error, setError] = useState('')

  const isUserAllowed = allowedRoles.some(role => auth.role.includes(role));

  const actionWrapper = (
    isUserAllowed && (
      <div className="topbar_btn_container">
        {boardMember ? (
          <button className='add_me_toBoard' title={t('Servants.RemoveMe')} onClick={toggleMembership}>
            <img src={take_me_out} alt="" />
          </button>
        ) : (
          <button className='add_me_toBoard' title={t('Servants.AddMe')} onClick={toggleMembership}>
            <img src={add_me_in} alt="" />
          </button>
        )}
      </div>
    )
  );

  const [search, setSearch] = useState('')
  const [isTempNotesPopupOpen, setTempNotesPopupOpen] = useState(false);

  return (
    <div className='minister-home servants_or_resources_board '>
      <div className='topbar'>
        <div className='middle_part1'>
          <div className='icon_and_h2'>
            <div
              className="h2_icon_container">
              <img src={h2_icon} alt="" />
            </div>
            <h1>  
            {t('Servants.MainHeading')}
              {/* Choos<span>e</span> <span className='hide_sm_screen'> a minist<span>e</span>r</span> */}
              </h1>
          </div>

          <DevNotesButton isTempNotesPopupOpen={isTempNotesPopupOpen} setTempNotesPopupOpen={setTempNotesPopupOpen} />
          <TempNotesPopupServants
              isOpen={isTempNotesPopupOpen}
              setTempNotesPopupOpen={setTempNotesPopupOpen}
            />

          <div className='network_icons_topbar'>
            {actionWrapper}
            <CreatePostButton />
          </div>
        </div>

        <div className="middle_part2">
          <Search setSearch={setSearch} />
        </div>
      </div>

      <div className="separate_into_two_columns" >
        <main className='sep_part1'>
          <div className='for_thumbnails'>
            {isLoading ?
              <>
                <LazyBoardMembers
                  userName='Otajon Rahmat'
                  className="lazy_delay1"
                  userAge='73' />
                <LazyBoardMembers
                  className="lazy_delay2"
                  userName='Otajon Rahmat'
                  userAge='73' />
                <LazyBoardMembers
                  className="lazy_delay3"
                  userName='Otajon Rahmat'
                  userAge='73' />
                <LazyBoardMembers
                  className="lazy_delay4"
                  userName='Otajon Rahmat'
                  userAge='73' />
                <LazyBoardMembers
                  className="lazy_delay5"
                  userName='Otajon Rahmat'
                  userAge='73' />
                <LazyBoardMembers
                  userName='Otajon Rahmat'
                  className="lazy_delay1"
                  userAge='73' />
                <LazyBoardMembers
                  className="lazy_delay2"
                  userName='Otajon Rahmat'
                  userAge='73' />
                <LazyBoardMembers
                  className="lazy_delay3"
                  userName='Otajon Rahmat'
                  userAge='73' />
              </>
              : <BoardMembers boardMembers={boardMembers} />}
          </div>
        </main>
        <aside>
          <div className="right_column_contain">
            <EventThumbNail />
            <div className="right_column_ads">
              <UmightLike
                h3="Want to attend?"
                titleName="Sport event: Volleyball"
                btnWord="Join" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Servants