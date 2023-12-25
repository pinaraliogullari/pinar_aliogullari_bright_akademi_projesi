import React, { useContext } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
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
            <Container fluid className='background' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
                <Row >
                    <Col className='mx-5 px-5 mt-5'>
                        <h2 className='title' >{selectedInstructor.email}</h2>
                        <h2 className='title' >  {`${selectedInstructor.name.first} ${selectedInstructor.name.last}`}</h2>

                      
                    </Col>
                </Row>
                <Row className='overflow-hidden g-0  d-flex justify-content-around'>
                    <Col className=' my-5 ' lg={6} md={9} sm={12}>
                        <img style={{ width: '50%' }} src={selectedInstructor.picture.large} alt="" />
                        <div className='d-flex justify-content-between'>
                      

                        </div>

                    </Col>
                    <Col lg={4} md={9} sm={12}>
                     
                    </Col>
                </Row>

             
            </Container>
        </>
    );
}

export default InstructionDetails;