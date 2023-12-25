import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header.js';
import Homepage from './Pages/Homepage/Homepage.js';
import AboutUs from './Pages/About Us/AboutUs.js';
import Courses from './Pages/Courses/Courses.js';
import Instructors from './Pages/Instructors/Instructors.js';
import Contact from './Pages/Contact/Contact.js';
import CourseDetails from './Pages/CourseDetails/CourseDetails.js';
import InstructorDetails from './Pages/InstructorDetails.js/InstructorDetails.js';
import Footer from './Components/Footer.js';
import { AppContext } from './Context/AppContext.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import blog1 from './Images/blog1.jpg';
import blog2 from './Images/blog2.jpg';
import blog3 from './Images/blog3.jpg';
import course1 from './Images/course1.jpg';
import course2 from './Images/course2.jpg';
import course3 from './Images/course3.jpg';
import course4 from './Images/course4.jpg';
import course5 from './Images/course5.jpg';
import course6 from './Images/course6.jpg';




const allBlogs = [
  { title: "How Do Web Workers in ReactJS Transform App Performance?", desc: "Have you ever had a situation where some code you’re running makes your app or website freeze for a bit, causing it to become unresponsive?If that’s the case, you definitely want a way to make that code run in the background so it doesn’t disrupt the user experience..", date: "5 Sep 2023", link: "https://medium.com/@Evelyn.Taylor/how-do-web-workers-in-reactjs-transform-app-performance-31ee8e6d2d1e", image: blog1 },
  { title: "React JS State Management in 2023: Is Redux Still a Go-To Choice?", desc: "Front-end development has witnessed significant changes and advancements over the years. New libraries, frameworks, and tools have emerged to simplify development, enhance performance, and streamline state management.", date: "11 Sep 2023", link: "https://medium.com/stackademic/react-js-state-management-in-2023-is-redux-still-a-go-to-choice-50a2e83ae196", image: blog2 },
  { title: "Mastering React JS SOLID Principles", desc: "SOLID principles are five design principles that help us keep our application reusable, maintainable, scalable, and loosely coupled.", date: "26 June 2023", link: "https://medium.com/stackademic/react-js-mastering-react-js-solid-principles-dfb48d03e565", image: blog3 },
];

const allCourses = [
  {
    image: course1, courseTitle: "Full Stack Programming Course", courseInfo: "This course covers the details of the C# programming language, one of the most popular programming languages ​​in the world, the world's most popular client-based web software development frameworks, and Asp.Net and Asp.Net Core MVC, which are server-based web technologies developed by Microsoft.", time: "500 hours"
  },
  {
    image: course2, courseTitle: "Network System and Cyber Security Specialization  Course", courseInfo: "This course covers the details of the C# programming language, one of the most popular programming languages ​​in the world, the world's most popular client-based web software development frameworks, and Asp.Net and Asp.Net Core MVC, which are server-based web technologies developed by Microsoft.", time: "320 hours"
  },
  {
    image: course3, courseTitle: "Front-end Development with React.Js", courseInfo: "This course covers the details of the C# programming language, one of the most popular programming languages ​​in the world, the world's most popular client-based web software development frameworks, and Asp.Net and Asp.Net Core MVC, which are server-based web technologies developed by Microsoft.", time: "120 hours"
  },
  {
    image: course4, courseTitle: "Full Data Specialization Course", courseInfo: "This course covers the details of the C# programming language, one of the most popular programming languages ​​in the world, the world's most popular client-based web software development frameworks, and Asp.Net and Asp.Net Core MVC, which are server-based web technologies developed by Microsoft.", time: "400 hours"
  },
  {
    image: course5, courseTitle: "Mobile Developer Course", courseInfo: "This course covers the details of the C# programming language, one of the most popular programming languages ​​in the world, the world's most popular client-based web software development frameworks, and Asp.Net and Asp.Net Core MVC, which are server-based web technologies developed by Microsoft.", time: "250 hours"
  },
  {
    image: course6, courseTitle: "Game Development with Unity Course", courseInfo: "This course covers the details of the C# programming language, one of the most popular programming languages ​​in the world, the world's most popular client-based web software development frameworks, and Asp.Net and Asp.Net Core MVC, which are server-based web technologies developed by Microsoft.", time: "120 hours"
  },


]



function App() {
  const [blogs, setBlogs] = useState(allBlogs);
  const [courses, setCourses] = useState(allCourses);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [instructorDatas, setInstructorDatas] = useState([]); 

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=8')
      .then(response => {
        setInstructorDatas(response.data.results);
      })
      .catch(error => {
        console.error('API isteği başarısız', error);
      });
  }, []);

  const searchCourse = (keyword) => {
    const filteredCourses = allCourses.filter((course) =>
      course.courseTitle.toLowerCase().includes(keyword.toLowerCase())
    );
    setCourses(filteredCourses);
    if (filteredCourses.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }

    setCourses(filteredCourses);
  }

  const clearSearchBox = () => {
    setKeyword("");
  }

  return (
    <>
      <AppContext.Provider value={{ blogs, setBlogs, courses, setCourses, keyword, setKeyword, searchCourse, clearSearchBox, noResults, setNoResults, selectedCourse, setSelectedCourse, instructorDatas, setInstructorDatas, selectedInstructor, setSelectedInstructor }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/instructors' element={<Instructors />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/course-details/' element={<CourseDetails />} />
            <Route path='/instructor-details/' element={<InstructorDetails />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;