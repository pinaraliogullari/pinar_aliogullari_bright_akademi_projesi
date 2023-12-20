import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../Images/brightLogo7.png';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleOffcanvasClose = () => {
    setShowOffcanvas(false);
  };

  return (
    <>
      <div>
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
                <Offcanvas.Header closeButton style={{ backgroundColor: '#0b123f', color: 'white' }}>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ backgroundColor: '#0b123f' }}>
                  <Nav className="justify-content-end flex-grow-1 pe-3 ">
                    <NavLink onClick={handleOffcanvasClose} aria-current="page" className="nav-link nav-item" to="/">Home</NavLink>
                    <NavLink onClick={handleOffcanvasClose} className="nav-link nav-item" to="/about-us">About Us</NavLink>
                    <NavLink onClick={handleOffcanvasClose} className="nav-link nav-item" to="/courses">Courses</NavLink>
                    <NavLink onClick={handleOffcanvasClose} className="nav-link nav-item" to="/instructors">Instructors</NavLink>
                    <NavLink onClick={handleOffcanvasClose} className="nav-link nav-item" to="/contact">Contact</NavLink>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
};

export default Header;