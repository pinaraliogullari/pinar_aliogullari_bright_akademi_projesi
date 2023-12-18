import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowCircleUp } from "react-icons/fa";
import { AppContext } from '../../Context/AppContext';

const Homepage = () => {
 


  return (
    <>
      <Container>
        <a href='/' className='sticky-bottom fs-2 text-secondary ' style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
          <FaArrowCircleUp />
        </a>

        <Row>
          <Col xs={12} className='d-flex justify-content-center align-items-center flex-column' style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100vh', 
            position: 'relative',
       
         
          }}>
            <div className='d-flex justify-content-center align-items-center flex-column'   
            style={{
              height: "100vh",
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height:'100%',
              backgroundColor: 'rgba(255, 255, 255, 0.5)', 
            
            }}>
              <h1 className='display-4 text-primary-emphasis  text-center '>Welcome!</h1>
              <p className='display-5 text-primary-emphasis text-center'>Education and Employment Program</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className='d-flex justify-content-center align-items-center'>
            hello
          </Col>
          <Col xs={12} md={6} className='d-flex justify-content-center align-items-center'>
            whats up
          </Col>
        </Row>
      
      </Container>
    </>
  )
}
export default Homepage;