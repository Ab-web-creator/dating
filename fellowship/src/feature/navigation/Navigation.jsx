import React, { useState, useEffect } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAuth from '../../hooks/useAuth';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { NavImages, getNavLinks } from './components/NavImagesLinks';
import Footer from './components/Footer';
import './navigation.css';


const Navigation = ({ activeLink, setActiveLink }) => {
  const { t } = useTranslation();
  const [isSideMenuExpanded, setSideMenuExpanded] = useState(false);

  const handleOpenSideMenu = () => {
    setSideMenuExpanded(true);
  };

  const handleCloseSideMenu = () => {
    setSideMenuExpanded(false);
  };

  const axiosPrivate = useAxiosPrivate();
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location, setActiveLink]);

  const handleNavLinkClick = (path) => {
    setActiveLink(path);
  };

  const handleLogout = async () => {
    navigate('/');
    setAuth({});
    try {
      await axiosPrivate(`${process.env.REACT_APP_BACKEND_URL}/logout`, {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const navLinks = getNavLinks(auth);

  const filteredNavLinks = navLinks.filter(link => {
    if (![1111, 4444, 5555].some(role => auth.role.includes(role))) {
      return link.path !== '/my-students';
    }
    return true;
  });

  const CustomNavLink = ({ path, image1, image2, textKey, active, handleNavLinkClick }) => {
    const handleClick = () => {
      handleNavLinkClick(path);
    };

    return (
      <NavLink to={path} className={`nav-link ${active ? 'active' : ''}`} onClick={handleClick}>
        <img src={active ? image2 : image1} alt={t('Nav.NavigationLinkAlt')} />
        <p>{t(textKey)}</p>
      </NavLink>
    );
  };

  return (
    <div className={`side_navigation ${isSideMenuExpanded ? 'expanded_side_menu' : ''}`}>
      <div
        className='handleSideMenu'
        title={t('Nav.OpenSideMenu')}
        onClick={handleOpenSideMenu}
      >
        {/* Handle the side menu */}
      </div>
      <header className='application_logo' title={t('Nav.OurLogo')}>
        <img src={NavImages.smallLogo} alt={t('Nav.OurLogoAlt')} />
        <p>
        {t('Nav.MainHeading')}
        {/* WA<span>Y</span> OF LO<span>V</span>E */}
          
        </p>
      </header>
      <div className='subnav' onClick={handleCloseSideMenu}>
        <div className='nav-icons'>
          {filteredNavLinks.map((link, index) => (
            <CustomNavLink
              key={index}
              {...link}
              active={activeLink === link.path}
              handleNavLinkClick={handleNavLinkClick}
            />
          ))}
        </div>
        <Footer auth={auth} handleLogout={handleLogout} />
      </div>
    </div>
  );
};

export default Navigation;
