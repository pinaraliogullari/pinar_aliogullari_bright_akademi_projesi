import React, { useContext } from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import background from '../../Images/background6.jpg';
import './Courses.css';
import Search from '../../Components/Search';
import { AppContext } from '../../Context/AppContext';
import Course from '../../Components/Course';



const Courses = () => {

  const { courses, noResults } = useContext(AppContext);

  return (
    <Container fluid className=' background' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
      <Row >
        <Col className='mt-5 ' xs={12}>
          <Search />

        </Col>
      </Row>

      <Row >
        <Col style={{ marginLeft: '80px' }} className='my-4'>
          <h2 className='title '>COURSES</h2>
        </Col>
      </Row>


      <Row >
        {
          courses.map((course, index) => (
            <Col lg={4} md={6} sm={6} xs={12} className='mb-3 ' key={index}  >
              <Course course={course} />
            </Col>
          ))}

      </Row>



    </Container>
  );
};

export default Courses;