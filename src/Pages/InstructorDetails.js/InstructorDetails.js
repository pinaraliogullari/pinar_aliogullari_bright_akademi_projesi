import React, { useContext } from 'react';
import { Container, Row, Col, Card, Image, Accordion } from 'react-bootstrap';
import background from '../../Images/background6.jpg';
import { AppContext } from '../../Context/AppContext';


const InstructionDetails = () => {
    const { selectedInstructor } = useContext(AppContext);




    if (!selectedInstructor) {
        return (
            <Container fluid className='background' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
                <Row>
                    <Col className='mx-5 mt-5'>
                        <div style={{ height: '100vh' }} >
                            <p className='text-light fs-5 '>No instructor selected.</p>

                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
    return (
        <>
            <Container fluid className='background' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", overflow: 'hidden' }}>
                <Row>
                    <h2 className='title mt-5 px-5 mx-4'>About Instructor-{`${selectedInstructor.name.first} ${selectedInstructor.name.last}`}</h2>
                </Row>
                <Row className='mx-5 my-5' >


                    <Col lg={4} md={6} sm={12} xs={12} >
                        <Card style={{ width: '20rem', height:'25rem', boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)' }} className='mb-5'>
                            <Image style={{ width: '10rem' }} className='mx-auto my-3' src={selectedInstructor.picture.large} roundedCircle />
                            <Card.Body>
                                <Card.Title>
                                    <h4  >  {`${selectedInstructor.name.first} ${selectedInstructor.name.last}`}</h4></Card.Title>
                                <hr />
                                <Card.Text>
                                    <h6>Developer</h6>
                                    <hr />
                                    <a href={`mailto:${selectedInstructor.email}`}>{selectedInstructor.email}</a>


                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </Col>
                    <Col lg={8} md={6} sm={12} xs={12} style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)' }}>
                        <h3 className='title my-4 px-4'>Experience</h3>
                        <p className='text px-4'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

                        <Accordion className='mx-4 my-4'>

                            <Accordion.Header >Courses</Accordion.Header>
                            <Accordion.Body className='text '>
                                <ul>
                                    <li>Netwok System and Cyber Security Specialization Course</li>
                                    <li>Mobile Developer Course</li>
                                    <li>Full DataSpecialization Course</li>
                                  

                                </ul>
                            </Accordion.Body>


                        </Accordion>
                        <Accordion className='mx-4 mb-5'>

                            <Accordion.Header >Education&Certificates</Accordion.Header>
                            <Accordion.Body className='text '>
                                <ul>
                                    <li>Certified Ethical Hacker (CEH)</li>
                                    <li>Vmware Certified Associate</li>
                                    <li>Data Center Virtualization (VCA-DCV)</li>

                                </ul>
                            </Accordion.Body>







                        </Accordion>
                    </Col>
                        
                 
                </Row>



            </Container>
        </>
    );
}

export default InstructionDetails;