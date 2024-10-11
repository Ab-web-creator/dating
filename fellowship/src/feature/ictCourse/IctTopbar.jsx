
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './ictTopbar.css';


import Search from '../../components/Search'
import PostCreate from '../posts/components/PostCreate'

import converter from '../../images/shared.png';
import post_something from '../../images/post_new.png';
import hamburger from '../../images/hamburger.png';


const IctTopbar = () => {

  const navigate = useNavigate();
  const { auth, setAuth } = useAuth()

  const [isPostCreateOpen, setPostCreateOpen] = useState(false)
  const [qisasOpen, setQisasOpen] = useState(false)
  const [search, setSearch] = useState('')


  return (
    <div className='ict_topbar'  >
      <div className='left_corner_div'  >
        <div className='go_main_menu' title='go to the main menu'
          onClick={() => navigate('/Home')}>
          ←
        </div>
        <div className='div_with_h1'>
          <h1 title='go one step back' onClick={() => navigate(-1)} >

            html / <span className='gold'>c</span>ss / JS <span className='gold'>c</span>ourse
            {/* <span className='green'>ativity</span> */}
            {/* <span className='tiny_small_text330'>    */}

            {/* </span> */}
          </h1>
        </div>
      </div>

      <div className='qisas_network_icons_topbar' onClick={(e) => {
        e.stopPropagation();
      }} >



        <button
          className="post_button_with_img"
          title='create and publish a post'
          onClick={() => {
            setPostCreateOpen(true)
          }}
        >
          <img src={post_something} alt="" />
        </button>

        <button className='post_button_with_img'
          style={{ padding: '7px' }}
          title='menu only for this course. For the main menu click the left side'
          onClick={() => {
            navigate('/html-css-course/home-for-html-css')
          }}
        >
          <img src={hamburger} alt="" />
        </button>
        <Search setSearch={setSearch} />
      </div>

      {isPostCreateOpen && <PostCreate setPostCreateOpen={setPostCreateOpen} />}

    </div>
  )
}

export default IctTopbar





