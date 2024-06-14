// Import React and any necessary components
import React from 'react';
import './AboutUs.css'; // Import CSS file for styling

// Functional component for About Us page
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>Welcome to Know Your Site, where we help you find the best way to learn your courses!</p>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>Our mission is to empower individuals with knowledge about online websites, including their technologies, performance, and educational content.</p>
      </section>

      <section className="team-section">
       
        <div className="team-member">
          <img src="https://media.licdn.com/dms/image/D5603AQHTaBN325JdMA/profile-displayphoto-shrink_800_800/0/1701153557521?e=2147483647&v=beta&t=t4aR233eQfcpH3HfSyQlFMVfnmWsgyPtFLLgHp9PZ-4" alt="Team Member 1" />
          <h3>Ede Naveen</h3>
          <p>Developer</p>
        </div>
        {/* Add more team members as needed */}
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <ul>
          <p>Value 1: We believe in transparency and accuracy in our data.</p>
          <p>Value 2: We strive for continuous improvement and innovation.</p>
          {/* Add more values */}
        </ul>
      </section>


    </div>
  );
};

export default AboutUs;
