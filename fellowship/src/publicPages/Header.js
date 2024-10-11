
import './header.css'
// import './aside_HP.css'
import React from 'react'
import Login from './Login'
import LanguageSwitcher from '../components/LanguageSwitcher'


const Header = () => {
  return (
    <div className='nav_container_homepage'>
      <nav className="navbar_HP">
        <div className="logo_topleft_corner">
          <div className='logo_bg_div'></div>
        </div>
        <div className="navLink_container_HP">
          <li className="navLink_HP" to="#ishimiz_haqida">Online</li>
          <li className="navLink_HP" to="#biz_kimmiz">Discipleship</li>
          <li className="navLink_HP" to="#ishimiz_haqida">Platform</li>
        </div>
        <div className='topBar_center_HP'> </div>
        <div className='flex gap-2 items-center relative'>
          <LanguageSwitcher />
          <Login />
        </div>
      </nav>
    </div>
  )
}


export default Header
