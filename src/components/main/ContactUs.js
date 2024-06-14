import React from 'react';
import './ContactUs.css';

const ContactUs = ({ showContactDropdown }) => {
  return (
    <div className={`contact-dropdown ${showContactDropdown ? 'active' : ''}`}>
      <a href="https://www.instagram.com/_n_a_v_e_e_n___ede/?igsh=MTFzczFwbGtycWs2bQ%3D%3D" target="_blank" rel="noopener noreferrer">
        <img src="https://tse1.mm.bing.net/th?id=OIP.MciZCqMv1NnHrSh-wrAGYwHaHa&pid=Api&P=0&h=180" alt="Instagram" />
      </a>
      <a href="mailto:naveenede4@gmail.com">
        <img src="https://tse4.mm.bing.net/th?id=OIP.tW8txOGkaznKDe9NZOouiwHaFG&pid=Api&P=0&h=180" alt="Email" />
      </a>
      <a href="https://www.linkedin.com/in/edenaveen/" target="_blank" rel="noopener noreferrer">
        <img src="https://tse3.mm.bing.net/th?id=OIP.RjMxMGje2MoZmRPgrY7SrgHaHa&pid=Api&P=0&h=180" alt="LinkedIn" />
      </a>
    </div>
  );
};

export default ContactUs;
