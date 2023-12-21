import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import background from '../../Images/background6.jpg';
import './Courses.css';

//sağdan soldan eşit boşluk sorunu
const Courses = () => {
  return (
    <Container fluid className=' background ' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
      <Row >
        <Col  className='mx-5 mt-5'>
          <h2 className='title'>COURSES</h2>
        </Col>
      </Row>

      <Row className='mx-5'>
        <Col lg={4} md={6} sm={6} xs={12} className='mb-3 mx-auto'>
          <Card style={{ width: '20rem', opacity: '1' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">More Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={6} xs={12} className='mb-3 mx-auto'>
          <Card style={{ width: '20rem', opacity: '1' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">More Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={6} xs={12} className='mb-3 mx-auto'>
          <Card style={{ width: '20rem', opacity: '1' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">More Details</Button>
            </Card.Body>
          </Card>
        </Col>
   


        <Col lg={4} md={6} sm={6} xs={12} className='mb-3 mx-auto'>
          <Card style={{ width: '20rem', opacity: '1' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">More Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={6} xs={12} className='mb-3 mx-auto'>
          <Card style={{ width: '20rem', opacity: '1' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">More Details</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={6} xs={12} className='mb-3 mx-auto'>
          <Card style={{ width: '20rem', opacity: '1' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">More Details</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;