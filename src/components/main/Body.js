import React from 'react';
import './Body.css';

const Body = ({ setShowCourses, setShowMostVisitedCourses }) => {
  const handleGetStarted = () => {
    setShowCourses(true);
    setShowMostVisitedCourses(false); // Set showCourses to true and showMostVisitedCourses to false
  };

  const handleMostVisitedCourses = () => {
    setShowMostVisitedCourses(true);
    setShowCourses(false); // Set showMostVisitedCourses to true and showCourses to false
  };

  return (
    <div className="body-container">
      <div className="header-text">
        <h2>Simplify your learning journey with <span className="highlight-text">Know Your Site</span></h2>
        <p>Discover a user-friendly e-learning platform designed to streamline the learning experience across various computer science fields. Learn MERN stack, Full stack development, web development, Java, Python, and more.</p>
      </div>
      <div className="action-buttons">
        <button onClick={handleGetStarted}>Get Started</button>
        <button onClick={handleMostVisitedCourses}>Most Visited Courses</button>
      </div>
    </div>
  );
}

export default Body;
