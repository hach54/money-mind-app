import React, { useState, useEffect } from 'react';
import logo from '../images/logo512.png';
import '../styles/Header.css';

const Header = ({ user }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header>
      <div className="header-content">
        <img src={logo} alt="MoneyMind Logo" className="logo" />
        <div>
          <h1>MoneyMind</h1>
          <p>Mind your money, mind your future</p>
        </div>
        {user && (
          <div className="user-info">
            <img src={user.profileImage} alt="Profile" className="profile-image" />
            <span>Welcome, {user.name}!</span>
          </div>
        )}
        <button onClick={toggleMode} className={`mode-toggle ${isDarkMode ? 'light-mode' : 'dark-mode'}`}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
};

export default Header;
