import React from 'react'
import background from '../../Images/background6.jpg';
import { Container, Row, Col, Button } from 'react-bootstrap';
const AboutUs = () => {
  return (

    <Container fluid   >
      <a href='/' className='sticky-bottom fs-2 text-secondary ' style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>

      </a>

      <Row>
        <Col className='d-flex justify-content-center align-items-center flex-column' style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          position: 'relative'
        }}>
          <div className='d-flex justify-content-center align-items-center flex-column'
            style={{
              height: "100vh",
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',

            }}>
            <h1 className='display-4 text-primary-emphasis  text-center '>Bright Akademie</h1>
            <p className='display-5 text-primary-emphasis text-center'>Education and Employment Program</p>
            <Button className=" btn-apply" >Apply now!</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default AboutUs