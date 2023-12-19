import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header.js';
import Homepage from './Pages/Homepage/Homepage.js';
import AboutUs from './Pages/About Us/AboutUs.js';
import Courses from './Pages/Courses/Courses.js';
import Instructors from './Pages/Instructors/Instructors.js';
import Contact from './Pages/Contact/Contact.js';
import Footer from './Components/Footer.js';
import { AppContext } from './Context/AppContext.js';
import { useState } from 'react';
import blog1 from './Images/blog1.jpg';
import blog2 from './Images/blog2.jpg';
import blog3 from './Images/blog3.jpg';





function App() {
  const [blogs, setBlogs] = useState([
    { title: "How Do Web Workers in ReactJS Transform App Performance?", desc: "Have you ever had a situation where some code you’re running makes your app or website freeze for a bit, causing it to become unresponsive?If that’s the case, you definitely want a way to make that code run in the background so it doesn’t disrupt the user experience..", date: "5 Sep 2023", link: "https://medium.com/@Evelyn.Taylor/how-do-web-workers-in-reactjs-transform-app-performance-31ee8e6d2d1e", image: blog1 },
     { title: "React JS State Management in 2023: Is Redux Still a Go-To Choice?", desc: "Front-end development has witnessed significant changes and advancements over the years. New libraries, frameworks, and tools have emerged to simplify development, enhance performance, and streamline state management.", date: "11 Sep 2023", link: "https://medium.com/stackademic/react-js-state-management-in-2023-is-redux-still-a-go-to-choice-50a2e83ae196", image:  blog2  },
     { title: "Mastering React JS SOLID Principles", desc: "SOLID principles are five design principles that help us keep our application reusable, maintainable, scalable, and loosely coupled.", date: "26 June 2023", link: "https://medium.com/stackademic/react-js-mastering-react-js-solid-principles-dfb48d03e565", image:  blog3  },
  ]);

  return (
    <>

      <AppContext.Provider value={{ blogs, setBlogs }} >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/instructors' element={<Instructors />} />
            <Route path='/contact' element={<Contact />} />
         
          </Routes>
           <Footer /> 
        </BrowserRouter>
      </AppContext.Provider>



    </>
  );
}

export default App;
