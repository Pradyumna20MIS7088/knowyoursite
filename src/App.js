import React, { useState } from 'react';
import './App.css';
import Body from './components/main/Body';
import Header from './components/main/Header';
import MostVisitedCourses from './components/main/MostVisitedCourses';
import Course from './components/main/Course';
import AboutUs from './components/main/About';
import ContactUs from './components/main/ContactUs';
import CourseItem from './components/main/CourseItem';

function App() {
  const [showCourses, setShowCourses] = useState(false);
  const [showMostVisitedCourses, setShowMostVisitedCourses] = useState(false);

  return (
    <div className="App">
      <Header setShowCourses={setShowCourses} setShowMostVisitedCourses={setShowMostVisitedCourses} />
      <Body setShowCourses={setShowCourses} setShowMostVisitedCourses={setShowMostVisitedCourses} />
      {showCourses && !showMostVisitedCourses && <Course />}
      {showMostVisitedCourses && <MostVisitedCourses />}
      <AboutUs />
      <ContactUs />
      <CourseItem />
    </div>
  );
}

export default App;
