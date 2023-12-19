import React from 'react'
import { Row, Col } from 'react-bootstrap';



const Blog = ({ blog }) => {
    return (
        <Row  >


            <Col md={4}>
                <a href={blog.link} target='_blank' className='text-decoration-none '>
                    <img src={blog.image} className="card-img-top" />
                    <span className="mt-1 text-sm  d-block ">{blog.date}</span>
                </a>

            </Col>
            <Col md={8} className='blog-hover'>
                <h2 className="fs-5 font-weight-medium text-dark mb-2">{blog.title}</h2>
                <p className="card-text">{blog.desc} <a href={blog.link} target="_blank" className='text-decoration-none text-danger blog-hover'>Learn More</a></p>


            </Col>





        </Row>




    );
};

export default Blog;



