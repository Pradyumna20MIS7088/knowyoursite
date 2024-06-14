import React from 'react';
import './CourseItem.css';

const CourseItem = ({ course }) => {
  // Check if the course object and its links property exist
  if (!course || !course.links) {
    return null; // If not, return null or any other default content
  }

  return (
    <div className="course-item">
      <div className="section">
        <h2>YouTube Channels</h2>
        <ul>
          {course.links.youtubeLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <img src={`https://logos-world.net/wp-content/uploads/2020/04/YouTube-Symbol.png`} alt={link.title} />
              </a>
              <span>{link.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h2>Websites</h2>
        <ul>
          {course.links.websiteLinks.map((link, index) => (
            <li key={index}>
              <span>{link.title}</span>
              <p>{link.description}</p>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <button className="button">Visit Website</button>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h2>Soft Copies</h2>
        <ul>
          {course.links.softCopies.map((link, index) => (
            <li key={index}>
              <span>{link.title}</span>
              <p>{link.description}</p>
              <a href={link.url} download>
                <button className="button">Download</button>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseItem;
