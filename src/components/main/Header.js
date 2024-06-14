import React, { useState } from 'react';
import './Header.css';
import ContactUs from './ContactUs';

const Header = ({ setShowCourses, setShowMostVisitedCourses }) => {
  const [activeLink, setActiveLink] = useState('');
  const [showContactDropdown, setShowContactDropdown] = useState(false);

  const handleNavigation = (link, event) => {
    event.preventDefault();
    setActiveLink(link);
    if (link === '/courses') {
      setShowCourses(true);
      setShowMostVisitedCourses(false);
    } else if (link === '/most-visited-courses') {
      setShowCourses(false);
      setShowMostVisitedCourses(true);
    } else {
      window.location.href = link;
    }
  };

  const handleContactDropdown = () => {
    setShowContactDropdown(!showContactDropdown);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="https://www.clipartmax.com/png/middle/119-1198191_question-mark-icons-confusion-icon.png"
          alt="Logo"
          className="logo"
        />
        <h1 className="title">KnowYourSite</h1>
      </div>
      <nav className="nav-links">
        <a
          href="/courses"
          className={`nav-item ${activeLink === '/courses' ? 'active' : ''}`}
          onClick={(e) => handleNavigation('/courses', e)}
        >
          Courses
        </a>
        <a
          href="/about"
          className={`nav-item ${activeLink === '/about' ? 'active' : ''}`}
          onClick={(e) => handleNavigation('/about', e)}
        >
          About Us
        </a>
        <div className="nav-item" onClick={handleContactDropdown}>
          Contact Us
          {showContactDropdown && <ContactUs showContactDropdown={showContactDropdown} />} 
        </div>
      </nav>
    </header>
  );
};

export default Header;
