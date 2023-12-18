import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header.js';
import Homepage from './Pages/Homepage/Homepage.js';
import AboutUs from './Pages/About Us/AboutUs.js';
import Instructions from './Pages/Courses/Courses.js';
import Instructors from './Pages/Instructors/Instructors.js';
import Contact from './Pages/Contact/Contact.js';
import Footer from './Components/Footer.js';


import { AppContext } from './Context/AppContext.js';




function App() {

  return (
    <>

      <AppContext.Provider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path='/courses' element={<Instructions />} />
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
