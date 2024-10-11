import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './navigation/Navigation'
import '../styles/shared.css'

const Layout = () => {

  const [activeLink, setActiveLink] = useState(null);
  return (
      <div className='general_view'>
        <div className='fixed_line'> </div>  
        <Navigation activeLink={activeLink} setActiveLink={setActiveLink} />
        <Outlet context={[activeLink, setActiveLink]} />
      </div>
  )
}

export default Layout
