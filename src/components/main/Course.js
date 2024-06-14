import React, { useState } from 'react';
import CourseC from './CourseC';
import CourseItem from './CourseItem';
import './Course.css'; // Import the CSS file

const Course = () => {
    const courses = [
        {
          title: "Introduction to Computer Science",
          imageUrl: "https://www.kcrconsultants.com/wp-content/uploads/2018/05/Computer-Science.jpg",
          description: "An introductory course covering fundamental concepts of computer science, including algorithms, data structures, and programming.",
          level: "Beginner",
          timeToComplete: "6 weeks",
          links: {
            youtubeLinks: [
              { title: "CS50 Lectures", url: "https://www.youtube.com/watch?v=SyBk3x7vEhI&list=PLhQjrBD2T382eX9-tF75Wa4lmlC7sxNDH" },
              { title: "MIT OpenCourseWare", url: "https://www.youtube.com/watch?v=k6U-i4gXkLM&list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp" },
              { title: "Harvard CS50", url: "https://www.youtube.com/watch?v=o4SGkB_8fFs&list=PLhQjrBD2T382eX9-tF75Wa4lmlC7sxNDH" }
            ],
            websiteLinks: [
              { title: "edX", url: "https://www.edx.org/learn/computer-science" },
              { title: "Coursera", url: "https://www.coursera.org/browse/computer-science" },
              { title: "Khan Academy", url: "https://www.khanacademy.org/computing" }
            ],
            softCopies: [
              { title: "Introduction to Computer Science", url: "https://www.infobooks.org/pdfview/8684-introduction-to-computer-science-svein-nordbotten/", description: "Written by Svein Nordbotten" },
              { title: "Computer Science Illuminated", url: "https://www.infobooks.org/pdfview/8687-computer-science-illuminated-john-moore-williams/", description: "Author: John Moore Williams" },
              { title: "Computer Science Distilled", url: "https://www.infobooks.org/pdfview/8683-computer-science-distilled-j-n-ndunagub-c-mbamj-n-ndunagu/", description: "Author: J N Ndunagu,B C Mbam,J N Ndunagu" }
            ]
          }
        },
        {
          title: "Data Structures and Algorithms",
          imageUrl: "https://media.geeksforgeeks.org/img-practice/banner/dsa-online-thumbnail-old.png?v=1594924200",
          description: "Covers advanced data structures and algorithms used in computer programming and problem-solving.",
          level: "Intermediate",
          timeToComplete: "8 weeks",
          links: {
            youtubeLinks: [
              { title: "mycodeschool", url: "https://www.youtube.com/playlist?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P" },
              { title: "GeeksforGeeks", url: "https://www.youtube.com/playlist?list=PLqM7alHXFySG6wgjVeMONnE7M2jLKp9xj" },
              { title: "freeCodeCamp.org", url: "https://www.youtube.com/watch?v=8hly31xKli0&list=PL7NYbSE8uaBCuA4vNEFr_QgNHJRBZkI9v" }
            ],
            websiteLinks: [
              { title: "HackerRank", url: "https://www.hackerrank.com/domains/tutorials/10-days-of-javascript" },
              { title: "LeetCode", url: "https://leetcode.com/" },
              { title: "Topcoder", url: "https://www.topcoder.com/" }
            ],
            softCopies: [
              { title: "Introduction to Algorithms", url: "https://www.infobooks.org/pdfview/442-introduction-to-algorithms-thomas-h-cormen/", description: "Author: Thomas H. Cormen" },
              { title: "Data Structures and Algorithms", url: "https://www.infobooks.org/pdfview/517-data-structures-and-algorithms-john-doe/", description: "Author: John Doe" },
              { title: "Algorithm Design", url: "https://www.infobooks.org/pdfview/497-algorithm-design-steven-s-skiena/", description: "Author: Steven S. Skiena" }
            ]
          }
        },
        {
          title: "Web Development Fundamentals",
          imageUrl: "https://www.danielhonrade.com/wp-content/uploads/2020/09/Web-development-1.jpg",
          description: "Provides an overview of web development technologies and tools, including HTML, CSS, and JavaScript.",
          level: "Beginner",
          timeToComplete: "4 weeks",
          links: {
            youtubeLinks: [
              { title: "Traversy Media", url: "https://www.youtube.com/watch?v=7CqJlxBYj-M&list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU" },
              { title: "The Net Ninja", url: "https://www.youtube.com/watch?v=V0dFjMa8jAM&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw" },
              { title: "Academind", url: "https://www.youtube.com/watch?v=Xm4BObh4MhI&list=PL55RiY5tL51oloSGk5XdO2MGjPqc0BxGV" }
            ],
            websiteLinks: [
              { title: "Mozilla Developer Network (MDN)", url: "https://developer.mozilla.org/en-US/docs/Learn" },
              { title: "W3Schools", url: "https://www.w3schools.com/" },
              { title: "freeCodeCamp", url: "https://www.freecodecamp.org/" }
            ],
            softCopies: [
              { title: "Eloquent JavaScript", url: "https://eloquentjavascript.net/" },
              { title: "HTML and CSS: Design and Build Websites", url: "http://www.htmlandcssbook.com/" },
              { title: "JavaScript: The Good Parts", url: "http://shop.oreilly.com/product/9780596517748.do" }
            ]
          }
        },
        {
          title: "Machine Learning Basics",
          imageUrl: "https://tse2.mm.bing.net/th?id=OIP.wNARWHbDERUTCTpLKFuroQHaFP&pid=Api&P=0&h=180",
          description: "Introduces the basic principles and techniques of machine learning, including supervised and unsupervised learning algorithms.",
          level: "Intermediate",
          timeToComplete: "10 weeks",
          links: {
            youtubeLinks: [
              { title: "sentdex", url: "https://www.youtube.com/playlist?list=PLQVvvaa0QuDfKTOs3Keq_kaG2P55YRn5v" },
              { title: "3Blue1Brown", url: "https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" },
              { title: "Stanford University", url: "https://www.youtube.com/watch?v=UzxYlbK2c7E&list=PLoROMvodv4rOABXSygHTsbvUz4G_YQhOb" }
            ],
            websiteLinks: [
              { title: "Coursera", url: "https://www.coursera.org/learn/machine-learning" },
              { title: "edX", url: "https://www.edx.org/learn/machine-learning" },
              { title: "fast.ai", url: "https://www.fast.ai/" }
            ],
            softCopies: [
              { title: "Machine Learning Yearning", url: "https://www.infobooks.org/pdfview/1586-machine-learning-yearning-andrew-ng/", description: "Author: Andrew Ng" },
              { title: "Pattern Recognition and Machine Learning", url: "https://www.infobooks.org/pdfview/1591-pattern-recognition-and-machine-learning-christopher-m-bishop/", description: "Author: Christopher M. Bishop" },
              { title: "Deep Learning", url: "https://www.infobooks.org/pdfview/1597-deep-learning-ian-goodfellow/", description: "Authors: Ian Goodfellow, Yoshua Bengio, Aaron Courville" }
            ]
          }
        },
        {
          title: "Database Management Systems",
          imageUrl: "https://cdn.educba.com/academy/wp-content/uploads/2019/04/What-is-DBMS.jpg",
          description: "Explores the concepts and principles of database management systems, including data modeling, query languages, and transaction management.",
          level: "Intermediate",
          timeToComplete: "6 weeks",
          links: {
            youtubeLinks: [
              { title: "Derek Banas", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY&list=PLEE194LJdPOd_YnGoJoH6SLd4xMO4sis5" },
              { title: "Eddie Woo", url: "https://www.youtube.com/watch?v=h_WmJns6bKk&list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb" },
              { title: "kudvenkat", url: "https://www.youtube.com/watch?v=ztHopE5Wnpc&list=PL08903FB7ACA1C2FB" }
            ],
            websiteLinks: [
              { title: "W3Schools", url: "https://www.w3schools.com/sql/" },
              { title: "SQLZoo", url: "https://sqlzoo.net/" },
              { title: "Tutorialspoint", url: "https://www.tutorialspoint.com/dbms/index.htm" }
            ],
            softCopies: [
              { title: "Database Management Systems", url: "https://www.infobooks.org/pdfview/442-database-management-systems-thomas-m-connolly/", description: "Authors: Thomas M. Connolly, Carolyn E. Begg" },
              { title: "Fundamentals of Database Systems", url: "https://www.infobooks.org/pdfview/517-fundamentals-of-database-systems-ramaz-elmasri/", description: "Authors: Ramez Elmasri, Shamkant B. Navathe" },
              { title: "Database System Concepts", url: "https://www.infobooks.org/pdfview/497-database-system-concepts-abraham-silberschatz/", description: "Authors: Abraham Silberschatz, Henry F. Korth, S. Sudarshan" }
            ]
          }
        },
        {
          title: "Cybersecurity Fundamentals",
          imageUrl: "https://firewall.firm.in/wp-content/uploads/2020/08/Cybersecurity-Best-Practices-for-Small-Businesses-2048x1158.jpg",
          description: "Covers basic concepts of cybersecurity, including network security, cryptography, and information security management.",
          level: "Beginner",
          timeToComplete: "5 weeks",
          links: {
            youtubeLinks: [
              { title: "Professor Messer", url: "https://www.youtube.com/watch?v=eN0M2V2Gg5w&list=PLG49S3nxzAnmpdmX7RoTOyuNJQAb-r-gd" },
              { title: "The Cyber Mentor", url: "https://www.youtube.com/watch?v=iN_xSdjH0uE&list=PL0oekSefhQVJ43TQZ-L35eSH8ZZHXpuJz" },
              { title: "John Hammond", url: "https://www.youtube.com/watch?v=3Kq1MIfTWCE&list=PL1H1sBF1VAKVg7NZTlMDxhon3x0fMz7Sx" }
            ],
            websiteLinks: [
              { title: "Cybrary", url: "https://www.cybrary.it/" },
              { title: "SANS Cyber Aces", url: "https://www.cyberaces.org/" },
              { title: "Coursera", url: "https://www.coursera.org/specializations/cyber-security" }
            ],
            softCopies: [
              { title: "Cybersecurity Essentials", url: "https://www.infobooks.org/pdfview/1586-cybersecurity-essentials-charles-j-brooks/", description: "Author: Charles J. Brooks" },
              { title: "Cybersecurity for Beginners", url: "https://www.infobooks.org/pdfview/1591-cybersecurity-for-beginners-rafay-baloch/", description: "Author: Rafay Baloch" },
              { title: "The Web Application Hacker's Handbook", url: "https://www.infobooks.org/pdfview/1597-the-web-application-hackers-handbook-dafydd-stuttard/", description: "Authors: Dafydd Stuttard, Marcus Pinto" }
            ]
          }
        },
        {
          title: "Operating Systems",
          imageUrl: "https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/operating-system-t.jpg",
          description: "Explores the design and implementation of operating systems, including process management, memory management, and file systems.",
          level: "Intermediate",
          timeToComplete: "8 weeks",
          links: {
            youtubeLinks: [
              { title: "Caleb Curry", url: "https://www.youtube.com/watch?v=26QPDBe-NB8&list=PL_c9BZzLwBRK0PcDBy7rB36LClpjjQ3B8" },
              { title: "Neso Academy", url: "https://www.youtube.com/watch?v=wB3bq6ybgNU&list=PLBlnK6fEyqRhX6r2uhhlubuF5QextdCSM" },
              { title: "Operating Systems Lectures", url: "https://www.youtube.com/watch?v=D1YB7w0OAtg&list=PL6gx4Cwl9DGBsvRxJJOzG4r4k_zLKrnxl" }
            ],
            websiteLinks: [
              { title: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/operating-systems/" },
              { title: "Tutorialspoint", url: "https://www.tutorialspoint.com/operating_system/index.htm" },
              { title: "Studytonight", url: "https://www.studytonight.com/operating-system/" }
            ],
            softCopies: [
              { title: "Operating System Concepts", url: "https://www.infobooks.org/pdfview/442-operating-system-concepts-abraham-silberschatz/", description: "Authors: Abraham Silberschatz, Peter Baer Galvin, Greg Gagne" },
              { title: "Modern Operating Systems", url: "https://www.infobooks.org/pdfview/517-modern-operating-systems-andrew-s-tanenbaum/", description: "Author: Andrew S. Tanenbaum" },
              { title: "Operating Systems: Internals and Design Principles", url: "https://www.infobooks.org/pdfview/497-operating-systems-internals-and-design-principles-william-stallings/", description: "Author: William Stallings" }
            ]
          }
        },
        {
          title: "Computer Networks",
          imageUrl: "http://getwallpapers.com/wallpaper/full/1/f/f/165676.jpg",
          description: "Covers the fundamentals of computer networks, including network architecture, protocols, and network security.",
          level: "Intermediate",
          timeToComplete: "7 weeks",
          links: {
            youtubeLinks: [
              { title: "freeCodeCamp.org", url: "https://www.youtube.com/watch?v=h9vySHmR9YM&list=PLWKjhJtqVAbmfoj2Th9fvxhHIeqFO7wOy" },
              { title: "The Net Ninja", url: "https://www.youtube.com/watch?v=JgkRxK8yn2I&list=PL4cUxeGkcC9gGrbtvASEZSlFEYBnPkmff" },
              { title: "Caleb Curry", url: "https://www.youtube.com/watch?v=Lvl5wD4Bqao&list=PL_c9BZzLwBRKNFOMqsBv_jiKqM5xGpT_a" }
            ],
            websiteLinks: [
              { title: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/computer-network-tutorials/" },
              { title: "Studytonight", url: "https://www.studytonight.com/computer-networks/" },
              { title: "TutorialsPoint", url: "https://www.tutorialspoint.com/computer_networking/index.htm" }
            ],
            softCopies: [
              { title: "Computer Networking: A Top-Down Approach", url: "https://www.infobooks.org/pdfview/1586-computer-networking-a-top-down-approach-james-f-kurose/", description: "Authors: James F. Kurose, Keith W. Ross" },
              { title: "Computer Networks", url: "https://www.infobooks.org/pdfview/1591-computer-networks-andrew-s-tanenbaum/", description: "Author: Andrew S. Tanenbaum" },
              { title: "Data Communications and Networking", url: "https://www.infobooks.org/pdfview/1597-data-communications-and-networking-behrouz-a-forouzan/", description: "Author: Behrouz A. Forouzan" }
            ]
          }
        },
        {
          title: "Software Engineering Principles",
          imageUrl: "https://wallpaperaccess.com/full/3632416.png",
          description: "Introduces software engineering principles and practices, including requirements engineering, software design, and testing.",
          level: "Intermediate",
          timeToComplete: "8 weeks",
          links: {
            youtubeLinks: [
              { title: "TechWorld with Nana", url: "https://www.youtube.com/watch?v=O753uuutqH8&list=PLsyeobzWxl7pQS9qwmchrgXTUvA5jwDhQ" },
              { title: "Academind", url: "https://www.youtube.com/watch?v=pCvZtjoRq1I&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q" },
              { title: "edureka!", url: "https://www.youtube.com/watch?v=QyJZzq0v7Z4&list=PL9ooVrP1hQOFrHb8g4dQDqwykOFt5ODDz" }
            ],
            websiteLinks: [
              { title: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/software-engineering/" },
              { title: "Tutorialspoint", url: "https://www.tutorialspoint.com/software_engineering/index.htm" },
              { title: "Studytonight", url: "https://www.studytonight.com/software-engineering/" }
            ],
            softCopies: [
              { title: "Software Engineering: A Practitioner's Approach", url: "https://www.infobooks.org/pdfview/1586-software-engineering-a-practitioners-approach-roger-s-pressman/", description: "Author: Roger S. Pressman" },
              { title: "Clean Code: A Handbook of Agile Software Craftsmanship", url: "https://www.infobooks.org/pdfview/1591-clean-code-a-handbook-of-agile-software-craftsmanship-robert-c-martin/", description: "Author: Robert C. Martin" },
              { title: "The Mythical Man-Month", url: "https://www.infobooks.org/pdfview/1597-the-mythical-man-month-frederick-p-brooks-jr/", description: "Author: Frederick P. Brooks Jr." }
            ]
          }
        },
        {
          title: "Artificial Intelligence",
          imageUrl: "https://www.globaltimes.cn/Portals/0/attachment/2021/2021-06-09/e8370636-1a13-4737-9ce3-a98ba8ae1a6b.jpeg",
          description: "Explores advanced concepts and techniques in artificial intelligence, including natural language processing, computer vision, and neural networks.",
          level: "Advanced",
          timeToComplete: "12 weeks",
          links: {
            youtubeLinks: [
              { title: "3Blue1Brown", url: "https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" },
              { title: "sentdex", url: "https://www.youtube.com/watch?v=V79REJmrMlA&list=PLQVvvaa0QuDfKTOs3Keq_kaG2P55YRn5v" },
              { title: "TechLead", url: "https://www.youtube.com/watch?v=AMU1Y8ATURA&list=PLFSQhjc0S7bhvhY3wlVUgvHZnBXzN_S8J" }
            ],
            websiteLinks: [
              { title: "Coursera", url: "https://www.coursera.org/browse/data-science/artificial-intelligence" },
              { title: "edX", url: "https://www.edx.org/learn/artificial-intelligence" },
              { title: "Udacity", url: "https://www.udacity.com/course/artificial-intelligence-ai--ud954" }
            ],
            softCopies: [
              { title: "Artificial Intelligence: A Modern Approach", url: "https://www.infobooks.org/pdfview/1586-artificial-intelligence-a-modern-approach-stuart-j-russell/", description: "Authors: Stuart J. Russell, Peter Norvig" },
              { title: "Deep Learning", url: "https://www.infobooks.org/pdfview/1591-deep-learning-ian-goodfellow/", description: "Authors: Ian Goodfellow, Yoshua Bengio, Aaron Courville" },
              { title: "Pattern Recognition and Machine Learning", url: "https://www.infobooks.org/pdfview/1597-pattern-recognition-and-machine-learning-christopher-m-bishop/", description: "Author: Christopher M. Bishop" }
            ]
          }
        },
        {
          title: "Mobile App Development",
          imageUrl: "https://www.softxpert.com/wp-content/uploads/2018/11/mobie-app-development.jpg",
          description: "Covers mobile app development for iOS and Android platforms, including app design, development, and deployment.",
          level: "Intermediate",
          timeToComplete: "8 weeks",
          links: {
            youtubeLinks: [
              { title: "The Net Ninja", url: "https://www.youtube.com/watch?v=bgU7FeiWKzc&list=PL4cUxeGkcC9j-HmmzX4GY68dA2BSxFkOx" },
              { title: "CodeWithChris", url: "https://www.youtube.com/watch?v=aP-SQXTtWhY&list=PLMRqhzcHGw1ZkH8RuznGMS0NZs0jWQQ5a" },
              { title: "Traversy Media", url: "https://www.youtube.com/watch?v=3qP-ia9Mt_E&list=PLillGF-RfqbaxgxkKgKk1XlJAVCX31xRI" }
            ],
            websiteLinks: [
              { title: "Android Developers", url: "https://developer.android.com/guide" },
              { title: "iOS Dev Center", url: "https://developer.apple.com/develop/" },
              { title: "React Native", url: "https://reactnative.dev/" }
            ],
            softCopies: [
              { title: "iOS Programming: The Big Nerd Ranch Guide", url: "https://www.infobooks.org/pdfview/1586-ios-programming-the-big-nerd-ranch-guide-joe-conway/", description: "Authors: Joe Conway, Aaron Hillegass" },
              { title: "Android Programming: The Big Nerd Ranch Guide", url: "https://www.infobooks.org/pdfview/1591-android-programming-the-big-nerd-ranch-guide-bill-phillips/", description: "Authors: Bill Phillips, Chris Stewart, Kristin Marsicano" },
              { title: "React Native: Building Mobile Apps with JavaScript", url: "https://www.infobooks.org/pdfview/1597-react-native-building-mobile-apps-with-javascript-bonnie-eisenman/", description: "Author: Bonnie Eisenman" }
            ]
          }
        },
        {
          title: "Cloud Computing",
          imageUrl: "https://www.unitektraining.com/wp-content/uploads/2019/12/5-Types-of-Cloud-Computing-Services.jpg",
          description: "Covers cloud computing concepts and technologies, including virtualization, cloud service models, and cloud security.",
          level: "Intermediate",
          timeToComplete: "7 weeks",
          links: {
            youtubeLinks: [
              { title: "AWS", url: "https://www.youtube.com/watch?v=3hLmDS179YE&list=PLhr1KZpdzukcRjYeiqkm5PCbNfEr9vOgL" },
              { title: "Google Cloud Platform", url: "https://www.youtube.com/watch?v=sU3FkxNb-6M&list=PLIivdWyY5sqL3xfXz5xJvwzFW_tlQB_GB" },
              { title: "Microsoft Azure", url: "https://www.youtube.com/watch?v=1xo-0gCVhTU&list=PLlrxD0HtieHhS8VzuMCfQD4uJ9yne1mE6" }
            ],
            websiteLinks: [
              { title: "AWS Training and Certification", url: "https://aws.amazon.com/training/" },
              { title: "Google Cloud Training", url: "https://cloud.google.com/training" },
              { title: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/" }
            ],
            softCopies: [
              { title: "Cloud Computing: Concepts, Technology & Architecture", url: "https://www.infobooks.org/pdfview/1586-cloud-computing-concepts-technology-architecture-thomas-erl/", description: "Author: Thomas Erl" },
              { title: "AWS Certified Solutions Architect Study Guide", url: "https://www.infobooks.org/pdfview/1591-aws-certified-solutions-architect-study-guide-associate-exam-ben-piper/", description: "Authors: Ben Piper, David Clinton" },
              { title: "Google Cloud Certified Associate Cloud Engineer Study Guide", url: "https://www.infobooks.org/pdfview/1597-google-cloud-certified-associate-cloud-engineer-study-guide-dan-sullivan/", description: "Author: Dan Sullivan" }
            ]
          }
        },
        {
          title: "DevOps",
          imageUrl: "https://wallpapercave.com/wp/wp7848331.png",
          description: "Integrates software development and IT operations to improve collaboration and automate the process of software delivery and infrastructure changes.",
          level: "Intermediate",
          timeToComplete: "6 weeks",
          links: {
            youtubeLinks: [
              { title: "edureka!", url: "https://www.youtube.com/watch?v=hQcFE0RD0cQ&list=PL9ooVrP1hQOGLNwX2GBUDMHx_7BPitNS-&index=1" },
              { title: "Simplilearn", url: "https://www.youtube.com/watch?v=c4MUrCz8kmk&list=PLEiEAq2VkUUKiIsyvIVp4FIpTU4HcWpeU" },
              { title: "DevOps Tutorial Series", url: "https://www.youtube.com/watch?v=_I94-tJlovg&list=PL6tu16kXT9PpycCFaPFxwME69Gt09GHY-" }
            ],
            websiteLinks: [
              { title: "edX", url: "https://www.edx.org/learn/devops" },
              { title: "Coursera", url: "https://www.coursera.org/courses?query=devops" },
              { title: "Udemy", url: "https://www.udemy.com/courses/search/?q=devops" }
            ],
            softCopies: [
              { title: "The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win", url: "https://www.infobooks.org/pdfview/1586-the-phoenix-project-a-novel-about-it-devops-and-helping-your-business-win-gene-kim/", description: "Authors: Gene Kim, Kevin Behr, George Spafford" },
              { title: "Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation", url: "https://www.infobooks.org/pdfview/1591-continuous-delivery-reliable-software-releases-through-build-test-and-deployment-automation-jez-humble/", description: "Authors: Jez Humble, David Farley" },
              { title: "Site Reliability Engineering: How Google Runs Production Systems", url: "https://www.infobooks.org/pdfview/1597-site-reliability-engineering-how-google-runs-production-systems-betsy-beyer/", description: "Authors: Betsy Beyer, Chris Jones, Jennifer Petoff, Niall Richard Murphy" }
            ]
          }
        },
        {
          title: "Blockchain Fundamentals",
          imageUrl: "https://imgix.bustle.com/uploads/image/2018/6/6/7fc1d2a4-8839-458b-b2c7-172d85a49f26-1528298560.jpg",
          description: "Introduces the basic concepts and principles of blockchain technology, including decentralized networks, consensus algorithms, and smart contracts.",
          level: "Intermediate",
          timeToComplete: "6 weeks",
          links: {
            youtubeLinks: [
              { title: "Simplilearn", url: "https://www.youtube.com/watch?v=qov8SVOkC0w&list=PLEiEAq2VkUUKmhU6SO2P73_9A_mTr5hyJ" },
              { title: "freeCodeCamp.org", url: "https://www.youtube.com/watch?v=_160oMzblY8&list=PLWKjhJtqVAbnqBxcdjVGgT3uVR10bzTEB" },
              { title: "Blockchain Demo", url: "https://www.youtube.com/watch?v=_160oMzblY8&list=PLWKjhJtqVAbnqBxcdjVGgT3uVR10bzTEB" }
            ],
            websiteLinks: [
              { title: "Coursera", url: "https://www.coursera.org/specializations/blockchain" },
              { title: "edX", url: "https://www.edx.org/learn/blockchain" },
              { title: "Blockchain Council", url: "https://www.blockchain-council.org/" }
            ],
            softCopies: [
              { title: "Mastering Bitcoin", url: "https://www.infobooks.org/pdfview/1586-mastering-bitcoin-andreas-m-antonopoulos/", description: "Author: Andreas M. Antonopoulos" },
              { title: "Blockchain Basics: A Non-Technical Introduction in 25 Steps", url: "https://www.infobooks.org/pdfview/1591-blockchain-basics-a-non-technical-introduction-in-25-steps-daniel-drescher/", description: "Author: Daniel Drescher" },
              { title: "Blockchain Revolution: How the Technology Behind Bitcoin and Other Cryptocurrencies is Changing the World", url: "https://www.infobooks.org/pdfview/1597-blockchain-revolution-how-the-technology-behind-bitcoin-and-other-cryptocurrencies-is-changing-the-world-don-tapscott/", description: "Authors: Don Tapscott, Alex Tapscott" }
            ]
          }
        },
        {
          title: "UI/UX Design",
          imageUrl: "https://blog.prototypr.io/content/images/2018/05/image-8.png",
          description: "Covers user interface and user experience design principles, including wireframing, prototyping, and usability testing.",
          level: "Intermediate",
          timeToComplete: "6 weeks",
          links: {
            youtubeLinks: [
              { title: "The Futur", url: "https://www.youtube.com/watch?v=0XtOJl8yXBc&list=PLdBRLfY3U2xk2mI-1dEpN1SaGcpgmKp7Q" },
              { title: "DesignCourse", url: "https://www.youtube.com/watch?v=1X2nfwEF2Uc&list=PL0eyrZgxdwhxNGMWROnaY35NLyEjTqcgB" },
              { title: "Mike Locke", url: "https://www.youtube.com/watch?v=I-ohcZ9AyuI&list=PLzjIaLJLgBekNxEyJRs7pN6b1f1gf0Yb6" }
            ],
            websiteLinks: [
              { title: "Nielsen Norman Group", url: "https://www.nngroup.com/" },
              { title: "UX Collective", url: "https://uxdesign.cc/" },
              { title: "Smashing Magazine", url: "https://www.smashingmagazine.com/" }
            ],
            softCopies: [
              { title: "Don't Make Me Think: A Common Sense Approach to Web Usability", url: "https://www.infobooks.org/pdfview/1586-dont-make-me-think-a-common-sense-approach-to-web-usability-steve-krug/", description: "Author: Steve Krug" },
              { title: "The Design of Everyday Things", url: "https://www.infobooks.org/pdfview/1591-the-design-of-everyday-things-don-norman/", description: "Author: Don Norman" },
              { title: "Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days", url: "https://www.infobooks.org/pdfview/1597-sprint-how-to-solve-big-problems-and-test-new-ideas-in-just-five-days-jake-knapp/", description: "Authors: Jake Knapp, John Zeratsky, Braden Kowitz" }
            ]
          }
        },
        {
          title: "Python Programming",
          imageUrl: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/python-1-300x187.png",
          description: "Introduces Python programming language syntax, data structures, and commonly used libraries for various applications.",
          level: "Beginner",
          timeToComplete: "4 weeks",
          links: {
            youtubeLinks: [
              { title: "Corey Schafer", url: "https://www.youtube.com/watch?v=YYXdXT2l-Gg&list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7" },
              { title: "freeCodeCamp.org", url: "https://www.youtube.com/watch?v=rfscVS0vtbw&list=PLWKjhJtqVAblfum5WiQblKPwIbqYXkDoC" },
              { title: "Programming with Mosh", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc&list=PLTjRvDozrdlwy2Ye5Y8tZvyaghYPVcp2L" }
            ],
            websiteLinks: [
              { title: "Python.org", url: "https://www.python.org/" },
              { title: "Real Python", url: "https://realpython.com/" },
              { title: "W3Schools", url: "https://www.w3schools.com/python/" }
            ],
            softCopies: [
              { title: "Python Crash Course", url: "https://www.infobooks.org/pdfview/1586-python-crash-course-a-hands-on-project-based-introduction-to-programming-eric-matthes/", description: "Author: Eric Matthes" },
              { title: "Automate the Boring Stuff with Python", url: "https://www.infobooks.org/pdfview/1591-automate-the-boring-stuff-with-python-2nd-edition-al-sweigart/", description: "Author: Al Sweigart" },
              { title: "Fluent Python", url: "https://www.infobooks.org/pdfview/1597-fluent-python-luciano-ramalho/", description: "Author: Luciano Ramalho" }
            ]
          }
        },
        {
          title: "Java Programming",
          imageUrl: "https://tse1.mm.bing.net/th?id=OIP.iIXOmGDzrtTJmdwbn7cGMwHaEJ&pid=Api&P=0&h=180",
          description: "Introduces Java programming language syntax, object-oriented programming concepts, and application development.",
          level: "Beginner",
          timeToComplete: "5 weeks",
          links: {
            youtubeLinks: [
              { title: "ProgrammingKnowledge", url: "https://www.youtube.com/watch?v=eIrMbAQSU34&list=PLS1QulWo1RIbfTjQvTdj8Y6yyq4R7g-Al" },
              { title: "Cave of Programming", url: "https://www.youtube.com/watch?v=WPvGqX-TXP0&list=PLmpc3xvYSk4wDCPtnuAAp6pxl2w3IlWSB" },
              { title: "Telusko", url: "https://www.youtube.com/watch?v=grEKMHGYyns&list=PLsyeobzWxl7oZ-fxDYkOToURHhMuWD1BK" }
            ],
            websiteLinks: [
              { title: "Oracle Java Tutorials", url: "https://docs.oracle.com/javase/tutorial/" },
              { title: "Java Programming and Software Engineering Fundamentals", url: "https://www.coursera.org/specializations/java-programming" },
              { title: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/java/" }
            ],
            softCopies: [
              { title: "Head First Java", url: "https://www.infobooks.org/pdfview/1586-head-first-java-kathy-sierra-bert-bates/", description: "Authors: Kathy Sierra, Bert Bates" },
              { title: "Effective Java", url: "https://www.infobooks.org/pdfview/1591-effective-java-joshua-bloch/", description: "Author: Joshua Bloch" },
              { title: "Java: A Beginner's Guide", url: "https://www.infobooks.org/pdfview/1597-java-a-beginners-guide-herbert-schildt/", description: "Author: Herbert Schildt" }
            ]
          }
        }
      ]
      
      
      

    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleCourseClick = (course) => {
        setSelectedCourse(course);
    };

    const handleBackToCourses = () => {
        setSelectedCourse(null);
    };

    return (
        <div>
            {selectedCourse ? (
                <div>
                    <button className='back-to-courses-button' onClick={handleBackToCourses}>Back to Courses</button>
                    <CourseItem course={selectedCourse} />
                </div>
            ) : (
                <div>
                    <h1>Courses</h1>
                    <div className="courses-list">
                        {courses.map((course, index) => (
                            <div className="course-card" key={index} onClick={() => handleCourseClick(course)}>
                                <h2>{course.title}</h2>
                                <img className='course-image' src={course.imageUrl} alt={course.title} />
                                <p>{course.description}</p>
                              <p>{course.level}</p>  
                              <p>{course.timeToComplete}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Course;
