import React, { useState } from 'react';
import background from '../../Images/background6.jpg';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha';
import Wp from '../../Components/Wp';




const Contact = () => {
  const [capVal, setCapVal] = useState(null)
  return (
    <>
      <Container fluid className=' background ' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", paddingLeft: '40px', paddingRight: '40px' }}>
        <Wp />
        <Row className='mx-auto'>
          <Col md={6} sm={12} className='mt-5'>
            <iframe style={{ width: "100%", height: "100vh", position: 'relative' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.1382993896787!2d29.004241475559976!3d41.04410461721886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a24975fe5d%3A0xa05d7aa13cfcaf89!2sBah%C3%A7e%C5%9Fehir%20%C3%9Cniversitesi%20Wissen%20Akademie!5e0!3m2!1str!2str!4v1703669297124!5m2!1str!2str"  ></iframe>

          </Col>

          <Col md={6} sm={12}  >
            <Form className='  py-4 px-4 my-5 w-100' style={{ overflow: 'hidden', boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)', boxSizing: 'border-box' }} >
              <h3 className='text-light'>  Contact Form</h3>
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
                <textarea className='px-3 py-3' style={{ width: '100%', height: '200px' }} placeholder='Please leave a message so we can reach you as soon as possible'> </textarea>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" className='text-light my-3' label="Check me out" />
              </Form.Group>

              <ReCAPTCHA className='mt-3'
                sitekey='6Lfgsz0pAAAAANcaagsaxaRoNIr1ofZBsSxp1FfG'
                onChange={val => setCapVal(val)}

              />
              <Button className='mt-3' disabled={!capVal} variant="primary " type="button">
                Send your message
              </Button>


            </Form>
          </Col>

        </Row>
      </Container>

    </>
  )
}

export default Contact;
