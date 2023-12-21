import React from 'react';
import background from '../../Images/background6.jpg';
import { Container, Row, Col } from 'react-bootstrap';


const Contact = () => {
  return (
    <>
      <Container fluid className=' background ' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>

        <Row >
          <Col className='mx-5 mt-5'>
            <h2 className='title'>CONTACT</h2>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Contact