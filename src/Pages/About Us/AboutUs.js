import React from 'react'
import background from '../../Images/background6.jpg';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';
import slider1 from '../../Images/slider.jpeg';
import partner1 from '../../Images/partner1.jpg';
import partner2 from '../../Images/partner2.jpg';
import partner3 from '../../Images/partner3.jpg';
import partner4 from '../../Images/partner4.jpg';
import partner5 from '../../Images/partner5.jpg';
import partner6 from '../../Images/partner6.jpg';
import partner7 from '../../Images/partner7.jpg';
import partner8 from '../../Images/partner8.jpg';
import { TiTickOutline } from "react-icons/ti";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsBrowserSafari } from "react-icons/bs";
import { TbBulb } from "react-icons/tb";




const AboutUs = () => {
  return (

    <Container fluid className=' background d-flex justify-content-center align-items-center flex-column ' style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '2000px',
      position: 'relative',



    }}  >

      <div
        style={{
          height: "100vh",
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',



        }}>

        <Row >
          <Col>
            <img src={slider1} className="d-block w-100" alt="..." style={{ objectFit: 'cover', maxWidth: '100%', height: '100%', maxHeight: '300px' }} />
          </Col>

        </Row>
        <Row className='d-flex justify-content-evenly align-items-center mt-5 mx-5 px-4' >
          <Col>
            <h1 className='title'> Who We Are?</h1>
          </Col>
        </Row>
        <Row className='d-flex justify-content-evenly align-items-center mt-5' >
          <Col xs={12} md={5} style={{ lineHeight: '24px', textAlign: 'justify' }}>


            <p  >

              Bright Academie is an institution that provides content consultancy to Bahçeşehir University, one of the most important educational institutions in Turkey, in sectoral training programs related to information technologies. Wissen, which has adopted the slogan "more than education" as its corporate culture, continues its professionalism in this field by providing education to thousands of people every year with the academic success of Bahçeşehir University. In this way, it enables candidates to create a successful career. The training continues, aware that the consultancy it has provided so far and its ongoing programs are extremely important for the future and success of Turkey's technological investments.
              Bright Academie 's aim is to turn candidates interested in information technologies into well-trained and qualified people in this field and to take IT companies to a more efficient level. In this way, the quality of the technologies our country will produce will increase and high added value jobs will emerge. For this purpose, Wissen increased its international agreements, increased its relations with Microsoft to the Gold Partner level, and created partnerships with institutions.
            </p>


          </Col>
          <Col xs={12} md={5} style={{ lineHeight: '24px', textAlign: 'justify' }}>

            <p  >

              <strong>Qualified Information Technologies Specialist Training Program</strong> <br />

              These are 100% state-financed information technology specialization trainings, created in cooperation with Bahçeşehir University and the Ministry of Labor and Social Security. With these trainings, candidates who do not have a digital related undergraduate degree receive Java Programming and Database Training, Microsoft Software and Database Training, Microsoft System and Network Training, Cisco Network Training, Microsoft Dynamics and ERP Training, with a 100% scholarship. General health insurance of the participants throughout the training is covered by the state. Additionally, participants receive financial support during the training, and at least 60% of the participants are employed at the end of the training. With these trainings, participants become technical experts in their fields. They have the opportunity to develop projects in the field they are trained in, such as sector awareness and employment competency. In addition, participants are provided with free career counseling, job interview experience and job guidance at the end of the training.
            </p>



          </Col>

        </Row>

        <Row className='d-flex justify-content-evenly align-items-center my-5  mx-5 px-4' >
          <Col>
            <h1 className='title'> Company Values</h1>
          </Col>
        </Row>
        <Row className='mx-5 px-4 '>
          <Col md={12} lg={6} className="d-flex align-items-center " >
            <div className="me-3 values-icon">
              <TiTickOutline />
            </div>
            <div>
              <h4 className='title'>Quality</h4>
              <p >Our constant standard for customer satisfaction is that every step is planned and supervised under the management of knowledgeable and experienced experts.</p>
            </div>
          </Col>
          <Col md={12} lg={6} className="d-flex align-items-center" >
            <div className="me-3 values-icon">
              <BsBrowserSafari />
            </div>
            <div>
              <h4 className='title'>Productive</h4>
              <p >Our constant standard for customer satisfaction is that every step is planned and supervised under the management of knowledgeable and experienced experts.</p>
            </div>
          </Col>
          <Col md={12} lg={6} className="d-flex align-items-center" >
            <div className="me-3 values-icon">
              <BsGraphUpArrow />
            </div>
            <div >
              <h4 className='title'>Result oriented</h4>
              <p >Our constant standard for customer satisfaction is that every step is planned and supervised under the management of knowledgeable and experienced experts.</p>
            </div>
          </Col>
          <Col md={12} lg={6} className="d-flex align-items-center" >
            <div className="me-3 values-icon">

              <TbBulb />
            </div>
            <div>
              <h4 className='title'>Innovator</h4>
              <p >Our constant standard for customer satisfaction is that every step is planned and supervised under the management of knowledgeable and experienced experts.</p>
            </div>
          </Col>
        </Row>
        <Row className='d-flex justify-content-evenly align-items-center my-5 mx-5 px-4' >
          <Col >
            <h1 className='title'> Partners</h1>


          </Col>

        </Row>
        <Row style={{ marginLeft: '55px' }} className='d-flex flex-wrap justify-content-evenly align-items-center my-5  px-4 g-3 '>
          <Col lg={3} md={6} sm={6} xs={12}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={partner1} style={{ objectFit: 'cover', width: '100%', height: '120px' }} />
              <Card.Body>
                <Card.Title>Microsoft Gold Partner</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={6} xs={12}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={partner2} style={{ objectFit: 'cover', width: '100%', height: '120px' }} />
              <Card.Body>
                <Card.Title>Amazon</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={6} xs={12}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={partner3} style={{ objectFit: 'cover', width: '100%', height: '120px' }} />
              <Card.Body>
                <Card.Title>Samsung</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={6} xs={12}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={partner4} style={{ objectFit: 'cover', width: '100%', height: '120px' }} />
              <Card.Body>
                <Card.Title>AutoDesk</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={6} xs={12}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={partner5} style={{ objectFit: 'cover', width: '100%', height: '120px' }} />
              <Card.Body>
                <Card.Title>CompTIA</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={6} xs={12}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={partner6} style={{ objectFit: 'cover', width: '100%', height: '120px' }} />
              <Card.Body>
                <Card.Title>Certiport</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={6} xs={12}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={partner7} style={{ objectFit: 'cover', width: '100%', height: '120px' }} />
              <Card.Body>
                <Card.Title>CO-OP</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} sm={6} xs={12}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={partner8} style={{ objectFit: 'cover', width: '100%', height: '120px' }} />
              <Card.Body>
                <Card.Title>Bahçeşehir University</Card.Title>
              </Card.Body>
            </Card>
          </Col>







        </Row>



      </div>

    </Container>
  )
}

export default AboutUs