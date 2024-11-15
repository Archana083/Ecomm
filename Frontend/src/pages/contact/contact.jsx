import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <Container className="my-5">
      {/* Map Section */}
      <Row className="mb-5">
        <Col>
          <div style={{ width: '100%', height: '400px', border: '1px solid #ddd' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093714!2d144.95373531550493!3d-37.81627974202165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43dcb95c1d%3A0x0!2z0JrQsNC30LDQvNCw!5e0!3m2!1sen!2s!4v1614231334515!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </Col>
      </Row>

      {/* Contact Information and Form Section */}
      <Row>
        {/* Contact Information */}
        <Col md={6} className="mb-4">
          <h3>Contact Details</h3>
          <p><FaMapMarkerAlt /> <strong>Address:</strong> 123 Street Name, City, Country</p>
          <p><FaPhoneAlt /> <strong>Phone:</strong> +123 456 7890</p>
          <p><FaEnvelope /> <strong>Email:</strong> info@example.com</p>
          <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>

          {/* Social Media Icons */}
          <h4>Follow Us:</h4>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
          </div>
        </Col>

        {/* Contact Form */}
        <Col md={6}>
          <h3>Get in Touch</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter the subject" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Type your message here" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
