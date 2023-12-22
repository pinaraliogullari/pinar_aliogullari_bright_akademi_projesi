// CourseDetails.js

import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import background from '../../Images/background6.jpg';
import { AppContext } from '../../Context/AppContext';

const CourseDetails = () => {
    const { selectedCourse } = useContext(AppContext);

    if (!selectedCourse) {
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

    return (
        <>
            <Container fluid className='background' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
                <Row>
                    <Col className='mx-5 mt-5'>
                        <h2 className='title'>{selectedCourse.courseTitle}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} sm={12}>
                        <img src={selectedCourse.image} alt="" />
                    </Col>
                    <Col md={4} sm={12}>
                    
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CourseDetails;