import React, { useContext } from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';
import { IoMdTime } from "react-icons/io";
import { AppContext } from '../Context/AppContext';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
  const { setSelectedCourse } = useContext(AppContext);


  const handleCourseClick = () => {
    setSelectedCourse(course);
  };

  return (
    <>
      <Card className="course-card mb-4 mx-auto" style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)', boxSizing: 'border-box' }} >
        <div className="img-container">
          <Card.Img
            className="course-img"
            variant="top"
            src={course.image}
          />
        </div>
        <Card.Body className="course-body">
          <Card.Title>{course.courseTitle}</Card.Title>
          <span>
            <IoMdTime /> {course.time}
          </span>
          <Card.Text className="limited-text mt-3">
            {course.courseInfo}
            <hr />
          </Card.Text>
          <div className='d-flex justify-content-end'>
            <Link to={`/course-details/${course.id}`}>
              <Button variant="primary" onClick={handleCourseClick}>Details</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Course;