import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import background from '../../Images/background6.jpg';


const Instructors = () => {
  return (
<>
      <Container fluid className=' background ' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>

        <Row >
          <Col className='mx-5 mt-5'>
            <h2 className='title'>COURSES</h2>
          </Col>
        </Row>
        </Container>

</>
  )
}

export default Instructors;