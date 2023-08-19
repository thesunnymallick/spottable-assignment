import { useState, useEffect } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';
import { BiMenu } from 'react-icons/bi';

import './navbar.css';
import PropTypes from 'prop-types';

const Navbar = ({ toggleNavBar }) => {
  const [theme, setTheme] = useState('light-theme');
  const currentTheme = localStorage.getItem('theme');

  // toggele dark and light theme
  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      localStorage.setItem('theme', theme);
    } else {
      setTheme('light-theme');
      localStorage.setItem('theme', theme);
    }
  };

  useEffect(() => {
    document.body.className = currentTheme;
  }, [currentTheme]);

  return (
    <div className="navabar">
      <div className="left_nav">
        <h1>Logo</h1>
      </div>
      <div className="right_nav">
        {currentTheme === 'light-theme' ? (
          <span className="theme_icon">
            {' '}
            <CiDark onClick={toggleTheme} />
          </span>
        ) : (
          <span className="theme_icon">
            <CiLight onClick={toggleTheme} />
          </span>
        )}

        <div className="user_info">
          <span>jhon Doe</span>
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="userImg"
          />
        </div>

        <div className="mobile-menu">
          <button
            id="mobile-menu-threeDot"
            onClick={toggleNavBar}>
            <BiMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  toggleNavBar: PropTypes.func.isRequired,
};

export default Navbar;
