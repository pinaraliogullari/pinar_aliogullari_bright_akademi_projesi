import React, { useContext } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import background from '../../Images/background6.jpg';
import { AppContext } from '../../Context/AppContext';
import { MdOutlineFileDownload } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";

const CourseDetails = () => {
    const { selectedCourse, selectedCourse2, setSelectedCourse2 } = useContext(AppContext);

    if (!selectedCourse && !selectedCourse2) {
        return (
            <Container fluid className='background' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
                <Row>
                    <Col className='mx-5 mt-5'>
                        <div style={{ height: '100vh' }} >
                            <p className='text-light fs-5 '>No course selected.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

    const currentCourse = selectedCourse2 || selectedCourse;

    return (
        <Container fluid className='background' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
            <Row>
                <Col className='mx-5 px-5 mt-5'>
                    <h2 className='title' >{currentCourse.courseTitle}</h2>
                </Col>
            </Row>
            <Row className='overflow-hidden g-0  d-flex justify-content-around'>
                <Col className=' my-5 ' lg={6} md={9} sm={12}>
                    <img style={{ width: '100%' }} src={currentCourse.image} alt="" />
                    <div className='d-flex justify-content-between'>
                        <Button bg='info' text='light' className='mt-3 px-3 py-2 fs-5'>Download the brochure   <MdOutlineFileDownload /> </Button>
                        <Button bg='warning' text='light' className='mt-3 px-3 py-2 fs-5'>Certificate guarantee  <TiTickOutline /> </Button>
                    </div>
                </Col>
                <Col lg={4} md={9} sm={12}>
                    <Form className='  py-4 px-4 my-5 w-100' style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)', boxSizing: 'border-box' }} >
                        <h3 className='text-light'> <strong>Apply</strong> now to benefit from advantageous prices!</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='text-light my-3 ' >Fullname</Form.Label>
                            <Form.Control type="text" placeholder="Enter your fullname" />
                            <Form.Label className='text-light my-3'>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter your phone number" />
                            <Form.Label className='text-light my-3'>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-light my-3">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='text-light my-3'>Course</Form.Label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Choose a course</option>
                                <option value="1">Full Stack Developer</option>
                                <option value="2">Mobile Developer</option>
                                <option value="3">Front-end Developer</option>
                            </select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" className='text-light my-3' label="Check me out" />
                        </Form.Group>
                        <Button variant="primary " type="button">
                            Apply
                        </Button>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <h4 className='text-light mx-5'>About the course</h4>
                    <p className='mx-5 text-light mt-3 ' style={{ textAlign: 'justify' }}>{currentCourse.courseInfo}</p>
                </Col>
                <Col md={12}>
                    <h4 className='text-light mx-5'>Course Time</h4>
                    <p className='mx-5 text-light mt-3 ' style={{ textAlign: 'justify' }}>{currentCourse.time}</p>
                </Col>
                <Col lg={4} md={12} sm={12}  >
                    <h4 className='text-light mx-5 mt-4' >Course Content</h4>
                    <ol className='text-light mx-5 mt-3  ' style={{ lineHeight: '40px' }}>
                        <li>Introduction to programming</li>
                        <li>Object Oriented Programming</li>
                        <li>Database(SQL)-Beginner Level</li>
                        <li>Database(SQL)-Beginner Level</li>
                        <li>Web Programming-Web 101-102</li>
                        <li>Using tools</li>
                        <li>ASP.Net Core WEP API</li>
                        <li>Front-end Programming with React</li>
                        <li>Back-end Programming with Node.Js</li>
                        <li>Native Programming with React</li>
                    </ol>
                </Col>
                <Col lg={8} md={12} sm={12}>
                    <h4 className='text-light mx-5 mt-4' >Who can attend to this course?</h4>
                    <ul className='text-light mx-5 mt-3 ' style={{ lineHeight: '40px' }}>
                        <li>Anyone who wants to continue their future and career in the software industry can participate </li>
                        <li>A university graduate who wants to have a career starting from senior analyst and software specialist positions in the software departments of corporate companies to the Deputy General Manager responsible for Information Technologies, which determines the company's entire technology strategy,</li>
                        <li>Those who want to make a career in the software development departments of corporate companies with titles such as programmer, analyst, test specialist</li>
                        <li>Anyone who wants to continue their future and career in the software industry can participate </li>
                        <li>A university graduate who wants to have a career starting from senior analyst and software specialist positions in the software departments of corporate companies to the Deputy General Manager responsible for Information Technologies, which determines the company's entire technology strategy,</li>

                    </ul>
                </Col>
            </Row>
        </Container>
    );
}




export default CourseDetails;

                      