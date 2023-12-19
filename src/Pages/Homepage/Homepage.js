
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
      <Container>
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

        <Row className="mt-5">
          <Col md={6}>
            <h3 ><span><strong>Blog</strong></span>Posts </h3>
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
{/* <section className="bg-light text-dark overflow-hidden mt-5 py-5">
                <div className="container px-5 py-24">
                  <div className="row g-2">
                    <div className="col-md-4 mb-4">
                      <div className="flex-shrink-0">
                        <a href="https://medium.com/@Evelyn.Taylor/how-do-web-workers-in-reactjs-transform-app-performance-31ee8e6d2d1e" target='_blank'><img src={blog1} alt="blog1" /></a>
                        <span className="mt-1 text-sm text-gray-400 d-block">5 Sep 2023</span>
                      </div>
                    </div>
                    <div className="col-md-8 blog-hover">
                      <h2 className="fs-5 font-weight-medium text-dark mb-2">How Do Web Workers in ReactJS Transform App Performance?</h2>
                      <p  >Have you ever had a situation where some code you’re running makes your app or website freeze for a bit, causing it to become unresponsive?If that’s the case, you definitely want a way to make that code run in the background so it doesn’t disrupt the user experience..</p>
                      <a href="https://medium.com/@Evelyn.Taylor/how-do-web-workers-in-reactjs-transform-app-performance-31ee8e6d2d1e" target="_blank" className='text-decoration-none text-danger  '  >Learn More</a>


                    </div>
                  </div>

                </div>
              </section>
              <section className="bg-light text-dark overflow-hidden mt-5 py-5">
                <div className="container px-5 py-24">
                  <div className="row g-2">
                    <div className="col-md-4 mb-4">
                      <div className="flex-shrink-0">
                        <a href="https://medium.com/stackademic/react-js-state-management-in-2023-is-redux-still-a-go-to-choice-50a2e83ae196" target='_blank'><img src={blog2} alt="blog1" /></a>
                        <span className="mt-1 text-sm text-gray-400 d-block">11 Sep 2023</span>
                      </div>
                    </div>
                    <div className="col-md-8 blog-hover">
                      <h2 className="fs-5 font-weight-medium text-dark mb-2">React JS State Management in 2023: Is Redux Still a Go-To Choice?</h2>
                      <p  >Front-end development has witnessed significant changes and advancements over the years. New libraries, frameworks, and tools have emerged to simplify development, enhance performance, and streamline state management.</p>
                      <a href="https://medium.com/stackademic/react-js-state-management-in-2023-is-redux-still-a-go-to-choice-50a2e83ae196" target="_blank" className='text-decoration-none text-danger  '  >Learn More</a>


                    </div>
                  </div>

                </div>
              </section>
              <section className="bg-light text-dark overflow-hidden mt-5 py-5">
                <div className="container px-5 py-24">
                  <div className="row g-2">
                    <div className="col-md-4 mb-4">
                      <div className="flex-shrink-0">
                        <a href="https://medium.com/stackademic/react-js-mastering-react-js-solid-principles-dfb48d03e565" target='_blank'><img src={blog3} alt="blog1" /></a>
                        <span className="mt-1 text-sm text-gray-400 d-block">26 June 2023</span>
                      </div>
                    </div>
                    <div className="col-md-8 blog-hover">
                      <h2 className="fs-5 font-weight-medium text-dark mb-2">Mastering React JS SOLID Principles</h2>
                      <p  >SOLID principles are five design principles that help us keep our application reusable, maintainable, scalable, and loosely coupled.</p>
                      <a href="https://medium.com/stackademic/react-js-mastering-react-js-solid-principles-dfb48d03e565" target="_blank" className='text-decoration-none text-danger  '  >Learn More</a>


                    </div>
                  </div>

                </div>
              </section> */}

