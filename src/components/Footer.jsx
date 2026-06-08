// src/components/Footer.jsx
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import { GiGoldBar } from 'react-icons/gi';

const Footer = () => {
  return (
    <footer style={{ background: '#0a0a0a', color: '#fff', padding: '60px 0 30px' }}>
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <div className="d-flex align-items-center mb-3">
              <GiGoldBar className="gold-text me-2" size={32} />
              <span className="fw-bold playfair fs-4">AMIRSAD ENERGY</span>
            </div>
            <p className="text-white-50">Premium gold sourcing, supplier verification, and trading facilitation for global institutional partners.</p>
          </Col>
          <Col lg={2} md={6} className="mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white-50 text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-white-50 text-decoration-none">About</Link></li>
              <li><Link to="/services" className="text-white-50 text-decoration-none">Services</Link></li>
              <li><Link to="/suppliers" className="text-white-50 text-decoration-none">Suppliers</Link></li>
              <li><Link to="/buyers" className="text-white-50 text-decoration-none">Buyers</Link></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <h6 className="fw-bold mb-3">Contact</h6>
            <p className="text-white-50 mb-1"><FaPhone className="me-2 gold-text" /> +234-806-0671-508</p>
            <p className="text-white-50"><FaEnvelope className="me-2 gold-text" /> info@amirsadenergy.com</p>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <h6 className="fw-bold mb-3">Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-white-50"><FaLinkedin size={24} /></a>
              <a href="#" className="text-white-50"><FaTwitter size={24} /></a>
            </div>
          </Col>
        </Row>
        <hr className="bg-white-50" />
        <Row>
          <Col className="text-center text-white-50 small">
            &copy; {new Date().getFullYear()} AMIRSAD ENERGY CONSULT. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;