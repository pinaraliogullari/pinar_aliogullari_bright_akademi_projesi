import React from 'react'
import { Container, Navbar, Nav, NavbarBrand,NavbarToggle } from 'react-bootstrap'
import logo from '../images/brightLogo7.png';
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <>
      {/* <Navbar expand="lg" className="navbar">
        <Container>
          <NavbarBrand>
            <NavLink className="nav-link" to="/"> <img className='logo' src={logo}  /></NavLink>
          </NavbarBrand>
          <Nav className="ms-auto">
            <NavLink className="nav-link nav-item " to="/">Home</NavLink>
            <NavLink className="nav-link nav-item" to="/about-us">About Us</NavLink>
            <NavLink className="nav-link nav-item " to="/courses">Courses</NavLink>
            <NavLink className="nav-link nav-item" to="/instructors">Instructors</NavLink>
            <NavLink className="nav-link nav-item" to="/contact">Contact</NavLink>
          </Nav>

        </Container>
      </Navbar> */}
      <Navbar collapseOnSelect expand="lg" className='navbar' sticky="top">
        <Container >
        <NavbarBrand >
          <NavLink className="nav-link" to="/"> <img className='logo' src={logo} /></NavLink>
         
        </NavbarBrand>
        <NavbarToggle aria-controls="responsive-navbar-nav"  className='custom-toggle '/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link nav-item " to="/">Home</NavLink>
            <NavLink className="nav-link nav-item" to="/about-us">About Us</NavLink>
            <NavLink className="nav-link nav-item " to="/courses">Courses</NavLink>
            <NavLink className="nav-link nav-item" to="/instructors">Instructors</NavLink>
            <NavLink className="nav-link nav-item" to="/contact">Contact</NavLink>
          </Nav>
         
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header