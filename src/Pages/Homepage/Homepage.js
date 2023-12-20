
import './Homepage.css';
import React, { useContext } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { FaArrowCircleUp } from "react-icons/fa";
import { FcAutomatic } from "react-icons/fc";
import { FcProcess } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import { FcDepartment } from "react-icons/fc";
import Blog from '../../Components/Blog';
import { AppContext } from '../../Context/AppContext';




const Homepage = () => {
  const { blogs } = useContext(AppContext);


  return (
    <>
      <Container fluid   >
        <a href='/' className='sticky-bottom fs-2 text-secondary ' style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
          <FaArrowCircleUp />
        </a>

        <Row>
          <Col className='d-flex justify-content-center align-items-center flex-column' style={{
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
      <Container   >
       
   
        <Row className="mt-5" >
          <Col md={6} >
            <h3 className='mx-5' ><span><strong>Blog</strong></span>Posts </h3>
            {blogs.map((blog, index) => (
              <Col key={index} className="mb-4 border p-5">
                <Blog blog={blog} />
              </Col>
            ))}
          </Col>

          <Col md={6}>
            <Row>
              <Col xs={12}>
                <div className="ratio ratio-4x3 mt-4">
                  <iframe src="https://www.youtube.com/embed/N3AkSS5hXMA?si=i_n90hq-eLuNcTBd" title="YouTube video" allowfullscreen></iframe>
                </div>
                <div className='mt-5 '>
                  <h3>How should I join the <strong>Bright Program?</strong> </h3>
                  <hr />
                  <p className='bright-info'>BAU Bright Education and Employment Project is supported by 5000+ business partners of Bahçeşehir University and Wissen Technology, especially in the informatics, consultancy, telecommunication and software sectors.</p>
                  <hr />

                </div>


                <Row>
                  <Col >

                    <div className="icon-container">
                      <span><FcAutomatic style={{ fontSize: '60' }} /></span>
                      <div className="text-container">
                        <span className='mx-3 fw-bold'>6 months of practical training with expert trainers</span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col >
                    <div className="icon-container">
                      <span><FcProcess style={{ fontSize: '60' }} /></span>
                      <div className="text-container">
                        <span className='mx-3 fw-bold'>end-to-end project development experience</span>
                      </div>
                    </div>
                  </Col>


                </Row>
                <Row>
                  <Col >
                    <div className="icon-container">
                      <span><FcComboChart style={{ fontSize: '60' }} /></span>
                      <div className="text-container">
                        <span className='mx-3 fw-bold'>career counseling</span>
                      </div>
                    </div>

                  </Col>

                </Row>
                <Row>
                  <Col >
                    <div className="icon-container">
                      <span><FcDepartment style={{ fontSize: '60' }} /></span>
                      <div className="text-container">
                        <span className='mx-3 fw-bold'>guidance to find a job </span>
                      </div>
                    </div>
                  </Col>


                </Row>

              </Col>
            </Row>
          </Col>
        </Row>

      </Container>
    </>
  )
}
export default Homepage;


