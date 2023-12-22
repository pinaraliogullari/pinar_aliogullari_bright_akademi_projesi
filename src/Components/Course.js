import React from 'react'
import { Card, Col, Button, CardGroup } from 'react-bootstrap';
import { IoMdTime } from "react-icons/io";

const Course = ({ course }) => {
  return (
    <>

      {/* tarayıcı boyutuı değiştikçe kartların birbiri üzerine gelme sorunu */}


      <>
        <Card className="course-card mb-4">
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
              <Button  variant="primary">Details</Button>

            </div>
          </Card.Body>
        </Card>
      </>




    </>
  )
}

export default Course;