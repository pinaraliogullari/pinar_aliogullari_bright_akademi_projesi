import React, { useContext, useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../Images/brightLogo.png';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleOffcanvasClose = () => {
    setShowOffcanvas(false);
  };

  const { searchCourse } = useContext(AppContext);
  const handleCoursesClick = () => {
    handleOffcanvasClose();
    searchCourse("");
  };




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
                  <NavLink onClick={handleCoursesClick} aria-current="page" className="nav-link nav-item" to="/courses">
                    Courses
                  </NavLink>

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