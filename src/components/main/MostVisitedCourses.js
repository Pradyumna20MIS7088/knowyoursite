import React, { useState } from 'react';
import './most-visitede-courses.css';
import CourseComponent from './CourseComponent';
import CourseItem from './CourseItem'; 

const MostVisitedCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null); 

  
  const coursesData = [
    {
      title: 'Web Development Bootcamp',
      imageUrl: 'https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg',
      description: 'Master the latest web technologies - HTML, CSS, JavaScript, Node.js, and more!',
      priority: 5,
      links: {
        youtubeLinks: [
          { title: 'Apna College', url: 'https://www.youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n' },
          { title: 'Free Code Camp', url: 'https://www.youtube.com/watch?v=dX8396ZmSPk&ab_channel=freeCodeCamp.org' },
          { title: 'Codedamm', url: 'https://www.youtube.com/watch?v=ZxKM3DCV2kE&t=10s&ab_channel=Mehul-Codedamn' }
        ],
        websiteLinks: [
          { title: 'Free Code Camp', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/', description: 'In this Responsive Web Design Certification, you will learn the languages that developers use to build webpages' },
          { title: 'Geek for geeks', url: 'https://www.geeksforgeeks.org/web-development/', description: 'Web development refers to the creating, building, and maintaining of websites' },
          { title: 'W3 Schools', url: 'https://www.w3schools.com/whatis/', description: 'W3 schools is a platform where we can find total web development course' }
        ],
        softCopies: [
          { title: 'Introduction to Development of Dynamic Web Applications', url: 'https://www.infobooks.org/pdfview/8684-introduction-to-development-of-dynamic-web-applications-svein-nordbotten/', description: 'Written by Svein Nordbotten' },
          { title: 'The Modern Web Design Process', url: 'https://www.infobooks.org/pdfview/8687-the-modern-web-design-process-john-moore-williams/', description: 'Author: John Moore Williams' },
          { title: 'Website Design and Programming', url: 'https://www.infobooks.org/pdfview/8683-website-design-and-programming-j-n-ndunagub-c-mbamj-n-ndunagu/', description: 'Author: J N Ndunagu,B C Mbam,J N Ndunagu' }
        ]
      }
    },
    {
      title: 'React.js Essentials',
      imageUrl: 'https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png',
      description: 'Learn React.js from scratch and build modern web applications with ease.',
      priority: 4,
      links: {
        youtubeLinks: [
          { title: 'Traversy Media', url: 'https://www.youtube.com/watch?v=sBws8MSXN7A&ab_channel=TraversyMedia' },
          { title: 'The Net Ninja', url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG' },
          { title: 'Academind', url: 'https://www.youtube.com/playlist?list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS' }
        ],
        websiteLinks: [
          { title: 'ReactJS.org', url: 'https://reactjs.org/', description: 'The official website for React.js, containing documentation, tutorials, and resources.' },
          { title: 'Scotch.io', url: 'https://scotch.io/tutorials/getting-started-with-react', description: 'A beginner-friendly guide to getting started with React.js on Scotch.io.' },
          { title: 'React for Beginners', url: 'https://reactforbeginners.com/', description: 'An interactive course to learn React.js from the ground up.' }
        ],
        softCopies: [
          { title: 'React Design Patterns and Best Practices', url: 'https://www.infobooks.org/pdfview/442-react-design-patterns-and-best-practices-carlo-pincirola/', description: 'Author: Carlo Pincirola' },
          { title: 'Mastering React Test-Driven Development', url: 'https://www.infobooks.org/pdfview/517-mastering-react-test-driven-development-daniel-mahal-m-lik/', description: 'Author: Daniel Mahal' },
          { title: 'React and React Native', url: 'https://www.infobooks.org/pdfview/497-react-and-react-native-adam-boduch/', description: 'Author: Adam Boduch' }
        ]
      }
    },
    {
      title: 'Python Programming Masterclass',
      imageUrl: 'https://getwallpapers.com/wallpaper/full/8/9/a/145400.jpg',
      description: 'Become a Python expert and dive into data science, machine learning, and automation.',
      priority: 4,
      links: {
        youtubeLinks: [
          { title: 'Programming with Mosh', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc&ab_channel=ProgrammingwithMosh' },
          { title: 'Corey Schafer', url: 'https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU' },
          { title: 'sentdex', url: 'https://www.youtube.com/playlist?list=PLQVvvaa0QuDeAams7fkdcwOGBpGdHpXln' }
        ],
        websiteLinks: [
          { title: 'Python.org', url: 'https://www.python.org/', description: 'The official website for Python programming language.' },
          { title: 'Real Python', url: 'https://realpython.com/', description: 'A comprehensive resource for learning Python programming.' },
          { title: 'DataCamp', url: 'https://www.datacamp.com/', description: 'Learn Python for data science interactively.' }
        ],
        softCopies: [
          { title: 'Automate the Boring Stuff with Python', url: 'https://automatetheboringstuff.com/', description: 'Written by Al Sweigart' },
          { title: 'Fluent Python', url: 'https://www.oreilly.com/library/view/fluent-python/9781491946237/', description: 'Written by Luciano Ramalho' },
          { title: 'Python Crash Course', url: 'https://nostarch.com/pythoncrashcourse2e', description: 'Written by Eric Matthes' }
        ]
      }
    },
    {
      title: 'Java Fundamentals',
      imageUrl: 'https://1.bp.blogspot.com/-avaxN5Q-8_A/YDpwMElhG0I/AAAAAAAAL-U/07u6s-6n3esWb_2HPQv44jmtGaNI-UtQgCLcBGAsYHQ/s16000/javas.png',
      description: 'Start your journey into Java programming and develop powerful applications.',
      priority: 3,
      links: {
        youtubeLinks: [
          { title: 'ProgrammingKnowledge', url: 'https://www.youtube.com/playlist?list=PLS1QulWo1RIbfTjQvTdj8Y6yyq4R7g-Al' },
          { title: 'The New Boston', url: 'https://www.youtube.com/playlist?list=PLFE2CE09D83EE3E28' },
          { title: 'Java Brains', url: 'https://www.youtube.com/user/koushks' }
        ],
        websiteLinks: [
          { title: 'Oracle Java Tutorials', url: 'https://docs.oracle.com/javase/tutorial/', description: 'Official Java Tutorials provided by Oracle Corporation.' },
          { title: 'Baeldung', url: 'https://www.baeldung.com/java-tutorial', description: 'Free Java tutorials and articles.' },
          { title: 'GeeksforGeeks - Java', url: 'https://www.geeksforgeeks.org/java/', description: 'Java programming tutorials on GeeksforGeeks.' }
        ],
        softCopies: [
          { title: 'Effective Java', url: 'https://www.oreilly.com/library/view/effective-java/9780134686097/', description: 'Written by Joshua Bloch' },
          { title: 'Head First Java', url: 'https://www.oreilly.com/library/view/head-first-java/0596009208/', description: 'Written by Kathy Sierra and Bert Bates' },
          { title: 'Java: A Beginner’s Guide', url: 'https://www.oreilly.com/library/view/java-a-beginners/9781260440213/', description: 'Written by Herbert Schildt' }
        ]
      }
    },
    {
      title: 'Full Stack Web Development',
      imageUrl: 'https://cdn.educba.com/academy/wp-content/uploads/2019/11/full-stack-web-developer-768x431.png',
      description: 'Build and deploy full-stack web applications using MERN stack - MongoDB, Express, React, Node.js.',
      priority: 5,
      links: {
        youtubeLinks: [
          { title: 'The Net Ninja', url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO' },
          { title: 'Traversy Media', url: 'https://www.youtube.com/watch?v=7CqJlxBYj-M&ab_channel=TraversyMedia' },
          { title: 'freeCodeCamp.org', url: 'https://www.youtube.com/watch?v=Jwssn1sGZVw&ab_channel=freeCodeCamp.org' }
        ],
        websiteLinks: [
          { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web', description: 'A comprehensive resource for web development, maintained by Mozilla.' },
          { title: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', description: 'Learn to code and help nonprofits.' },
          { title: 'The Odin Project', url: 'https://www.theodinproject.com/', description: 'A free and open-source curriculum for learning web development.' }
        ],
        softCopies: [
          { title: 'Learning React: A Hands-On Guide to Building Web Applications Using React and Redux', url: 'https://www.oreilly.com/library/view/learning-react-a/9780134843551/', description: 'Written by Kirupa Chinnathambi' },
          { title: 'Node.js Design Patterns - Second Edition', url: 'https://www.oreilly.com/library/view/nodejs-design-patterns-second/9781785885587/', description: 'Written by Mario Casciaro' },
          { title: 'MongoDB in Action, Second Edition', url: 'https://www.oreilly.com/library/view/mongodb-in-action/9781617291609/', description: 'Written by Kyle Banker and Peter Bakkum' }
        ]
      }
    },
    {
      title: 'Data Science and Machine Learning',
      imageUrl: 'https://i.ytimg.com/vi/yh2pLdDb87c/maxresdefault.jpg',
      description: 'Unlock the power of data with Python, TensorFlow, and advanced machine learning techniques.',
      priority: 4,
      links: {
        youtubeLinks: [
          { title: 'sentdex', url: 'https://www.youtube.com/playlist?list=PLQVvvaa0QuDfhTox0AjmQ6tvTgMBZBEXN' },
          { title: 'Codebasics', url: 'https://www.youtube.com/playlist?list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw' },
          { title: 'Krish Naik', url: 'https://www.youtube.com/playlist?list=PLZoTAELRMXVPkl7oRvzyNnyj1HS4wt2K-' }
        ],
        websiteLinks: [
          { title: 'Kaggle', url: 'https://www.kaggle.com/', description: 'A platform for data science competitions, datasets, and tutorials.' },
          { title: 'Towards Data Science', url: 'https://towardsdatascience.com/', description: 'A medium publication about data science and machine learning.' },
          { title: 'Machine Learning Mastery', url: 'https://machinelearningmastery.com/', description: 'A blog and community for developers interested in applied machine learning.' }
        ],
        softCopies: [
          { title: 'Introduction to Machine Learning with Python', url: 'https://www.infobooks.org/pdfview/111-introduction-to-machine-learning-with-python-andreas-c-m-ller-sarah-guido/', description: 'Authors: Andreas C. Müller, Sarah Guido' },
          { title: 'Deep Learning', url: 'https://www.infobooks.org/pdfview/110-deep-learning-ian-goodfellow-yoshua-bengio-and-aaron-courville/', description: 'Authors: Ian Goodfellow, Yoshua Bengio, Aaron Courville' },
          { title: 'Python for Data Analysis', url: 'https://www.infobooks.org/pdfview/20-python-for-data-analysis-wes-mckinney/', description: 'Author: Wes McKinney' }
        ]
      }
    }
  ];
  

  
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };


  const handleBackToCourses = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="courses-container">
      {selectedCourse ? ( 
        <>
          <button className="back-to-courses-button" onClick={handleBackToCourses}>Back to Courses</button>
          <CourseItem course={selectedCourse} />
        </>
      ) : (
     
        coursesData.map((course, index) => (
          <CourseComponent
            key={index}
            title={course.title}
            imageUrl={course.imageUrl}
            description={course.description}
            priority={course.priority}
            onClick={() => handleCourseClick(course)} 
          />
        ))
      )}
    </div>
  );
}

export default MostVisitedCourses;
