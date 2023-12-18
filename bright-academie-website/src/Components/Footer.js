import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";



const Footer = () => {
  return (
    <>
      <div className="Footer ">
        <Container >
          <Row >
            <Col md={4} lg={6} xs={12} className="ft-1">
              <a  className='text-decoration-none'  href="/"><h3 className='text-white'>BRIGHT ACADEMIE</h3></a>
              <p className='mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
              <p > Barbaros Bulvarı Yıldız İş Hanı No: 9 Kat: 3 Beşiktaş - İstanbul</p>
            </Col>
            <Col md={3} lg={3} xs={12} className="ft-1 ">
              <h5>Company</h5>
              <ul className='px-0 lh-lg'>
                <li className="nav-item-a">
                  <a className="" href="/">About</a>
                </li>
                <li className="nav-item-a">
                  <a className="" href="/">Blog</a>
                </li>
                <li className="nav-item-a">
                  <a className="" href="/">Jobs</a>
                </li>
                <li className="nav-item-a">
                  <a className="" href="/">Partners</a>
                </li>
                <li className="nav-item-a">
                  <a className="" href="/">Documentation</a>
                </li>
              </ul>
            </Col>
            <Col md={5} lg={3} xs={12} className="ft-3">
              <h5>Contact Us</h5>
              <p> <BsTelephone /> 0212 381 50 00</p>
              <p> <CiMail/> wissenakademie@gmail.com</p>
              <p> 2023 &copy; All Rights Deserved- Designed By Pınar Alioğulları Kaya </p>
              <div style={{ fontSize: '30px', cursor: 'pointer' }} >
                <CiFacebook className='me-2' />
                <FaInstagram className='me-2' />
                <CiYoutube className='me-2' />
                <CiLinkedin />
              </div>
        
            </Col>
          </Row>
          
        </Container>
      </div>
     
    </>
  )
}

export default Footer