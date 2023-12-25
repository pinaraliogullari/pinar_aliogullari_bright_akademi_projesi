import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import background from '../../Images/background6.jpg';
import Instructor from '../../Components/Instructor';
import { AppContext } from '../../Context/AppContext';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//instructor kartları responsive olmadı

const Instructors = () => {
  const { instructorDatas } = useContext(AppContext);
  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 1024 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 800, min: 576 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1
    }
  };
  return (
    <Container fluid className='background' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

      <Row className='mx-5 '>
        <h2 className='title mt-5'>INSTRUCTORS</h2>
        <Carousel responsive={responsive} >
          {instructorDatas.map((instructor, index) => (
            <Col className='mb-5' key={index}>
              <Instructor instructor={instructor} />
            </Col>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
}

export default Instructors;