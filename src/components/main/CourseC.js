import React from 'react';
import './CourseC.css'; // Import the CSS file

const CourseC = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.imageUrl} alt={course.title} />
      <div className="course-details">
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <p><strong>Level:</strong> {course.level}</p>
        <p><strong>Time to Complete:</strong> {course.timeToComplete}</p>
      </div>
    </div>
  );
};

export default CourseC;
