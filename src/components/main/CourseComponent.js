import React from 'react';
import './CourseComponent.css';

const CourseComponent = ({ title, imageUrl, description, priority, onClick }) => {
  return (
    <div className="course-card" onClick={onClick}>
      <img src={imageUrl} alt={title} className="course-image" />
      <div className="course-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="course-rating">Priority: {priority}</div>
      </div>
    </div>
  );
}

export default CourseComponent;
