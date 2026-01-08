import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { tabs } from '../../sources';
import './Navbar.css';
import Logo from '../../Commons/Logo';
import { HiMenu } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';
import SocialHandles from '../../Commons/SocialHandles';

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  
  return (
    <nav className="navbar flex">
      {openSidebar && <div className="overlay" onClick={() => setOpenSidebar(false)} />}
      <Logo />
      <div className={`box flex-center tabs-group sidebar ${openSidebar ? 'visible' : ''}`}>
        <div className="flex-center icon-wrapper cancel-btn"
             onClick={() => setOpenSidebar(false)}>
          <FaTimes />
        </div>
        {tabs.map((tab, index) => (
          <Link
            to={tab.id}
            smooth={true}
            spy={true}
            className='tab'
            activeClass='active'
            onClick={() => setOpenSidebar(false)}
            key={index}
          >
            {tab.name}
          </Link>
        ))}
      </div>
      <SocialHandles />
      <div className="box flex-center buttons">
        <Link to='contact' smooth={true} className='btn primary contact-btn'>Hire Me</Link>
        <Link to='services' smooth={true} className='btn services-btn'>Services</Link>
        <div
          className="flex-center icon-wrapper menu-btn"
          onClick={() => setOpenSidebar(!openSidebar)}>
          <HiMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
