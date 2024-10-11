import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../components/Search'
import PostCreate from '../posts/components/PostCreate'

// import converter from '../../images/shared.png';
import post_something from '../../images/post_new.png';
import hamburger from '../../images/hamburger.png';
import './qisasTopbar.css';


const QisasTopbar = () => {

  const navigate = useNavigate();
  const [isPostCreateOpen, setPostCreateOpen] = useState(false)
  const [search, setSearch] = useState('')

  // const handleConverterOpen = () => {
  //   navigate('/convert-qisas-texts');
  // };

  return (
    <div className='qisas_navbar'  >
      <div className='left_corner_div'  >
        <div className='go_main_menu' title='go to the main menu'
          onClick={() => navigate('/blogPage')}>
          {/* <img src={small_logo} alt="" /> */}
          ←
        </div>
        <div className='div_with_h1'>
          <h1 title='go one step back' onClick={() => navigate(-1)} >
            <span className='tiny_small_text330'>  П<span className='green'>а</span>йғ<span className='green'>а</span>мб<span className="green">а</span>рл<span className="green">а</span>р </span> т<span>а</span>ри<span>х</span><span className='tiny_small_text330'>и</span>
          </h1>
        </div>
      </div>

      <div className='qisas_network_icons_topbar' onClick={(e) => {
        e.stopPropagation();
      }} >

        {/* <button
          className="post_something"
          title='converter'
          onClick={() => {
            handleConverterOpen()
          }}
          style={{ padding: '7px' }}
        >
          <img src={converter} alt="" />
        </button> */}

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
          title='menu only for this book. For the main menu click the left side'
          onClick={() => {
            navigate('/qisas-uzbek/home-qisas')
          }}
        >
          <img src={hamburger} alt="" />
        </button>

      </div>

      {isPostCreateOpen && <PostCreate setPostCreateOpen={setPostCreateOpen} />}
      <Search setSearch={setSearch} />
    </div>
  )
}

export default QisasTopbar