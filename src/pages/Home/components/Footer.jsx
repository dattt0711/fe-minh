import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import { Telephone, Envelope, GeoAlt, Facebook, Twitter, Instagram, Youtube } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  const navigate = useNavigate()
  return (
    <div className='footer mt-5'>
      <Container>
        <Row className="border-bottom pb-3">
          <Col sm={4}>
            <h3 className="mb-2">COSMETICS</h3>
            <p>OAT ENOUGH</p>
            <p>EASY SUNLIFE</p>
            <p>MORE DEEP AMPOULE</p>
          </Col>
          <Col sm={4}>
            <h3 className="mb-2">HELP</h3>
            <p>TRACK AN ORDER</p>
            <p>SHIPPING INFORMATION</p>
            <p>RETURN & EXPLAIN</p>
            <p>MY ACCOUNT</p>
          </Col>
          <Col sm={4}>
            <div className="mb-2">
              <h3 className="mb-2">CONTACT US</h3>
              <p>Customerservice@uptownliiz.com</p>
              <p>+84-981234798</p>
              <p>Hanoi University, Thanh Xuan District, Hanoi </p>
            </div>
            <div>
              <h3>SOCIAL MEDIA</h3>
              <div>
                <a className="social-link">
                  <FacebookIcon className="me-2" />
                </a>
                <a className="social-link">
                  <InstagramIcon className="me-2" />
                </a>
                <a className="social-link">
                  <TwitterIcon className="me-2" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-2">
          FINAL INTERNET AND WEB SERVICES _ GROUP 21
        </Row>
      </Container>
    </div>
  )
}

export default Footer