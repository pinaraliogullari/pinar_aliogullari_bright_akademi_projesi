import React from 'react'
import { Row, Col } from 'react-bootstrap';



const Blog = ({ blog }) => {
    return (
        <Row  >


            <Col md={4}>
                <a href={blog.link} target='_blank' className='text-decoration-none '>
                    <img src={blog.image} className="card-img-top" />
                    <span className="mt-1 text-sm  d-block text ">{blog.date}</span>
                </a>

            </Col>
            <Col md={8} className='blog-hover'>
                <h2 className=" mb-2 title">{blog.title}</h2>
                <p className="card-text text">{blog.desc}</p> 
                <a href={blog.link} target="_blank" className='text-decoration-none text blog-hover'>Learn More</a>


            </Col>

        </Row>




    );
};

export default Blog;



