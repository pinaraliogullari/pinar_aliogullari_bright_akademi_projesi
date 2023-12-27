import React, { useContext } from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';


const Instructor = ({ instructor }) => {
    const { setSelectedInstructor } = useContext(AppContext);
    const handleInstructorClick = () => {
        setSelectedInstructor(instructor);
    };
   

    return (

      
            <div>
            <Card className="instructor-card mt-4  ">
                <div className="img-container">
                    <Card.Img
                        className="instructor-img"
                        variant="top"
                        src={instructor.picture.large}
                        alt={`${instructor.name.first} ${instructor.name.last}`}
                    />
                </div>
             
                    <Card.Body className="instructor-body">
                    <Card.Title><strong>{`${instructor.name.first} ${instructor.name.last}`}</strong></Card.Title>
                        <Card.Text className="limited-text mt-3">
                            <h6>Developer</h6>
                         <a href={`mailto:${instructor.email}`}>{instructor.email}</a>
                        </Card.Text>

                    </Card.Body>
                
                
                <div className='d-flex justify-content-end'>
                    <Link to='/instructor-details'>
                        <Button variant="outline-info" className="mb-3 mx-3"  onClick={handleInstructorClick}>Details</Button>
                    </Link>
                </div>
            </Card>
            </div>
           
  
        
    );
}

export default Instructor;