import React, { useContext, useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../Images/brightLogo.png';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink ,Link} from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const { courses, setSelectedCourse2 } = useContext(AppContext);

  const handleCourseSelection = (selectedCourse) => {
  
    setSelectedCourse2(selectedCourse);
  };

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleOffcanvasClose = () => {
    setShowOffcanvas(false);
  };

  // const { searchCourse } = useContext(AppContext);
  // const handleCoursesClick = () => {
  //   handleOffcanvasClose();
  //   searchCourse("");
  // };


  return (
    <>



      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar">
          <Container fluid className='mx-5'>
            <Navbar.Brand><NavLink className="nav-link" to="/"> <img className='logo' src={logo} alt="Logo" /></NavLink></Navbar.Brand>
            <Navbar.Toggle style={{ backgroundColor: 'white' }} aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleToggleOffcanvas} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={showOffcanvas}
              onHide={handleOffcanvasClose}
            >
              <Offcanvas.Header closeButton style={{ backgroundColor: '#001221', color: 'white' }}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img className='logo ' src={logo} alt="Logo" />


                  <hr />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{ backgroundColor: '#001221' }}>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  <NavLink onClick={handleOffcanvasClose} aria-current="page" className="nav-link nav-item " to="/">Home</NavLink>
                  <NavLink onClick={handleOffcanvasClose} aria-current="page" className="nav-link nav-item" to="/about-us">About Us</NavLink>
                  <NavDropdown className="custom-dropdown" title="Courses" id="basic-nav-dropdown">
                    <NavDropdown.Item  href={`/courses`}>Courses</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => handleCourseSelection(courses[0])} href={`/course-details/${courses[0].id}`}>Full Stack Programming Course</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => handleCourseSelection(courses[1])} href={`/course-details/${courses[1].id}`}>Network System and Security Course</NavDropdown.Item>
                    <NavDropdown.Divider />
                    
                    <NavDropdown.Item onClick={() => handleCourseSelection(courses[2])} href={`/course-details/${courses[2].id}`}>Front-end Development with React Js. Course</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => handleCourseSelection(courses[3])} href={`/course-details/${courses[3].id}`}>Full Data Specialization Course</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => handleCourseSelection(courses[4])} href={`/course-details/${courses[4].id}`}>Mobile Developer Course</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => handleCourseSelection(courses[5])} href={`/course-details/${courses[5].id}`}>Game Development with Unity Course</NavDropdown.Item>
               

                  </NavDropdown>
                  <NavLink onClick={handleOffcanvasClose} aria-current="page" className="nav-link nav-item" to="/instructors">Instructors</NavLink>
                  <NavLink onClick={handleOffcanvasClose} aria-current="page" className="nav-link nav-item" to="/contact">Contact</NavLink>


                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    </>
  );
};

export default Header;