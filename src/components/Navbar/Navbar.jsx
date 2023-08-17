import { useState, useEffect } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';
import { BiSearch } from 'react-icons/bi';
import './navbar.css';

const Navbar = () => {
  const [theme, setTheme] = useState('light-theme');
  const currentTheme = localStorage.getItem('theme');
  console.log(theme);
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
        <div className="search_field">
          <input
            type="text"
            placeholder="Search Taks"
          />
          <BiSearch />
        </div>
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
      </div>
    </div>
  );
};

export default Navbar;
