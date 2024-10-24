import React, { useState, useEffect } from 'react';
import './lastProfilesPage.css'
import BoardMembers from './components/BoardMembers'
import Search from '../../components/Search'
import UmightLike from '../../components/UmightLike'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import LazyBoardMembers from './components/LazyBoardMembers';

import h2_icon from '../../images/servants1.png';
import CreatePostButton from '../../components/buttons/CreatePostButton';
 
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../components/LanguageSwitcher';

const LastProfilesPage = () => {

  const { t } = useTranslation();
  const axiosPrivate = useAxiosPrivate()
  const [boardMembers, setBoardMembers] = useState([])

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

  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
 
  return (
    <div className='page-root servants_or_resources_board '>
      <div className='topbar'>
        <div className='middle_part1'>
          <div className='icon_and_h2'>
            <div
              className="h2_icon_container">
              <img src={h2_icon} alt="" />
            </div>
            <h1>  
              L<span>a</span>st Profil<span>e</span>s
              {/* Choos<span>e</span> <span className='hide_sm_screen'> a minist<span>e</span>r</span> */}
              </h1>
          </div>

          <div className='network_icons_topbar'>
            <LanguageSwitcher />
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
            <UmightLike
              h3="Want to attend meeting?"
              titleName="Up to 50 year old"
              btnWord="Join" />
          </div>
        </aside>
      </div>
    </div>
  )
}

export default LastProfilesPage