// src/pages/Contact.jsx
import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Form, Button, Accordion, Alert } from 'react-bootstrap';
import { 
   FaPhoneAlt, FaEnvelope, FaCheckCircle, FaWhatsapp, FaTelegram,
  FaLinkedin, FaTwitter, FaPaperPlane, FaUser, FaComment,
  FaBuilding, FaGlobe, FaShieldAlt
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', subject: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '', subject: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const faqs = [
    { q: 'What documentation is required for trading?', a: 'Buyers need valid KYC documents including proof of funds, corporate registration, and identification. Suppliers require mining licenses, export permits, and corporate documentation. All documents must be certified and translated to English.' },
    { q: 'How long does verification take?', a: 'Standard verification takes 3-5 business days. Expedited options available for pre-qualified entities. Our team works efficiently to ensure minimal delays while maintaining thorough compliance checks.' },
    { q: 'What payment methods are accepted?', a: 'We facilitate wire transfers, escrow services, and LC arrangements based on transaction structure. Payment terms are negotiated based on the specific transaction and counterparty relationship.' },
    { q: 'Do you offer inspection services?', a: 'Yes, we coordinate with globally recognized inspection agencies like SGS, Bureau Veritas, and Alex Stewart. Inspection includes weight verification, assay testing, and packaging confirmation.' },
    { q: 'What is your minimum order quantity?', a: 'Minimum order quantities vary by supplier and gold grade. Typically, we handle transactions starting from 50kg for institutional buyers.' },
    { q: 'Do you provide logistics support?', a: 'Yes, we offer comprehensive logistics coordination including shipping, insurance, and customs clearance through our global network of partners.' }
  ];

  const officeInfo = [
    { icon: FaBuilding, title: 'Headquarters', detail: 'Dubai Multi Commodities Centre, UAE', description: 'JLT, Dubai, United Arab Emirates' },
    { icon: FaGlobe, title: 'Representative Offices', detail: 'London | Singapore | Johannesburg', description: 'Global presence across key markets' },
    { icon: FaPhoneAlt, title: 'Phone', detail: '+971 4 123 4567', description: 'Available 9:00 - 18:00 GMT+4' },
    { icon: FaWhatsapp, title: 'WhatsApp', detail: '+971 50 123 4567', description: 'For urgent inquiries' }
  ];

  useEffect(() => {
    // Hero section animations
    const heroTl = gsap.timeline();
    heroTl.fromTo(heroRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    ).fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "back.out(0.7)" },
      "-=0.6"
    );

    // Office info cards animation
    gsap.fromTo('.info-card',
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: infoRef.current,
          start: 'top 85%',
        }
      }
    );

    // Form animation
    gsap.fromTo(formRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "back.out(0.6)",
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 85%',
        }
      }
    );

    // Map animation
    gsap.fromTo(mapRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: 'top 85%',
        }
      }
    );

    // FAQ section animation
    gsap.fromTo(faqRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: {
          trigger: faqRef.current,
          start: 'top 85%',
        }
      }
    );

    // CTA section animation
    gsap.fromTo(ctaRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 85%',
        }
      }
    );

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (heroRef.current) {
        gsap.to(heroRef.current, {
          y: scrolled * 0.3,
          duration: 0,
          ease: "none"
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero" ref={heroRef}>
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="hero-pattern"></div>
          <div className="hero-glow"></div>
        </div>
        <Container>
          <Row>
            <Col lg={8}>
              <div className="hero-badge">Get In Touch</div>
              <h1 className="hero-title" ref={titleRef}>
                Contact <span className="gold-text">Us</span>
              </h1>
              <p className="hero-subtitle">
                Reach out to our global trade team for inquiries, partnerships, 
                and support. We're here to assist you 24/7.
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support Available</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">24h</span>
                  <span className="stat-label">Response Time</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">35+</span>
                  <span className="stat-label">Countries</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0a0a0a" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <Container>
          <Row>
            <Col lg={5} className="mb-5 mb-lg-0">
              <div ref={infoRef}>
                <div className="section-badge">Connect With Us</div> <br />
                <h2 className="info-title">Office <span className="gold-text">Information</span></h2>
                <p className="info-subtitle">
                  Visit our headquarters or connect through our global network
                </p>
                
                {officeInfo.map((info, idx) => (
                  <div key={idx} className="info-card">
                    <div className="info-icon">
                      <info.icon />
                    </div>
                    <div className="info-content">
                      <h4>{info.title}</h4>
                      <p className="info-detail">{info.detail}</p>
                      <span className="info-desc">{info.description}</span>
                    </div>
                  </div>
                ))}

                <div className="social-links">
                  <h4>Follow Us</h4>
                  <div className="social-icons">
                    <a href="#" className="social-icon linkedin"><FaLinkedin /></a>
                    <a href="#" className="social-icon twitter"><FaTwitter /></a>
                    <a href="#" className="social-icon whatsapp"><FaWhatsapp /></a>
                    <a href="#" className="social-icon telegram"><FaTelegram /></a>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={7}>
              <div ref={formRef} className="form-card">
                <div className="form-header">
                  <HiOutlineMail className="form-icon" />
                  <h3>Send a Message</h3>
                  <p>Fill out the form below and our team will respond within 24 hours</p>
                </div>

                {submitted && (
                  <Alert variant="success" className="success-alert">
                    <FaCheckCircle className="me-2" />
                    Thank you for your message! Our team will respond within 24 hours.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label><FaUser className="me-2" />Full Name *</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label><FaEnvelope className="me-2" />Email Address *</Form.Label>
                        <Form.Control 
                          type="email" 
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label><FaComment className="me-2" />Subject</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={5} 
                      placeholder="Please provide details about your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </Form.Group>

                  <Button 
                    type="submit" 
                    className="btn-gold-primary w-100"
                    disabled={loading}
                  >
                    {loading ? (
                      <>Sending <span className="spinner-border spinner-border-sm ms-2"></span></>
                    ) : (
                      <>Submit Inquiry <FaPaperPlane className="ms-2" /></>
                    )}
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>

          {/* Map Section */}
          <Row className="mt-5">
            <Col>
              <div ref={mapRef} className="map-container">
                <div className="map-header">
                  <FaGlobe className="map-icon" />
                  <h3>Our Location</h3>
                  <p>DMCC, Dubai - The Heart of Global Gold Trade</p>
                </div>
                <div className="map-wrapper">
                  <iframe 
                    src="https://maps.google.com/maps?q=DMCC%2C%20Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="400" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Office Location Map"
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>

          {/* FAQ Section */}
          <Row className="mt-5">
            <Col>
              <div ref={faqRef} className="faq-section">
                <div className="faq-header">
                  <div className="section-badge light">Common Questions</div>
                  <h2 className="faq-title">Frequently Asked <span className="gold-text">Questions</span></h2>
                  <p className="faq-subtitle">
                    Find answers to common questions about our services and processes
                  </p>
                </div>

                <Accordion className="custom-accordion">
                  {faqs.map((faq, idx) => (
                    <Accordion.Item eventKey={idx.toString()} key={idx}>
                      <Accordion.Header>
                        <FaShieldAlt className="me-2" /> {faq.q}
                      </Accordion.Header>
                      <Accordion.Body>
                        {faq.a}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </Col>
          </Row>

          {/* CTA Section */}
          <Row className="mt-5">
            <Col>
              <div ref={ctaRef} className="contact-cta">
                <div className="cta-content">
                  <FaWhatsapp className="cta-icon" />
                  <h3>Need Immediate Assistance?</h3>
                  <p>Connect with our support team directly on WhatsApp for urgent inquiries</p>
                  <Button href="https://wa.me/971501234567" className="btn-whatsapp">
                    <FaWhatsapp className="me-2" /> Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx>{`
        /* Hero Section */
        .contact-hero {
          position: relative;
          min-height: 60vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          padding: 180px 0 100px;
          z-index:-10;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.1), transparent);
        }

        .hero-pattern {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .hero-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.15), transparent);
          transform: translate(-50%, -50%);
          filter: blur(50px);
        }

        .hero-badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 50px;
          color: #D4AF37;
          font-size: 0.9rem;
          margin-bottom: 25px;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 20px;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .hero-stats {
          display: flex;
          gap: 40px;
          margin-top: 20px;
        }

        .hero-stat {
          display: flex;
          flex-direction: column;
        }

        .hero-stat .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #D4AF37;
        }

        .hero-stat .stat-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .hero-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          line-height: 0;
          opacity: 0.3;
        }

        /* Contact Section */
        .contact-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #0a0a0a 0%, #121212 100%);
        }

        .section-badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 50px;
          color: #D4AF37;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .info-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 15px;
        }

        .info-subtitle {
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 30px;
        }

        .info-card {
          display: flex;
          gap: 20px;
          padding: 20px;
          background: linear-gradient(135deg, #121212, #1a1a1a);
          border-radius: 15px;
          margin-bottom: 20px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateX(10px);
          border-color: #D4AF37;
        }

        .info-icon {
          font-size: 2rem;
          color: #D4AF37;
        }

        .info-content h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 5px;
        }

        .info-detail {
          color: #D4AF37;
          font-weight: 500;
          margin-bottom: 5px;
        }

        .info-desc {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.85rem;
        }

        .social-links {
          margin-top: 30px;
          padding: 20px;
          background: linear-gradient(135deg, #121212, #1a1a1a);
          border-radius: 15px;
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .social-links h4 {
          color: #fff;
          margin-bottom: 15px;
        }

        .social-icons {
          display: flex;
          gap: 15px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(212, 175, 55, 0.1);
          border-radius: 50%;
          color: #D4AF37;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: #D4AF37;
          color: #0a0a0a;
          transform: translateY(-3px);
        }

        /* Form Card */
        .form-card {
          padding: 40px;
          background: linear-gradient(135deg, #121212, #1a1a1a);
          border-radius: 20px;
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .form-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .form-icon {
          font-size: 3rem;
          color: #D4AF37;
          margin-bottom: 15px;
        }

        .form-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
        }

        .form-header p {
          color: rgba(255, 255, 255, 0.6);
        }

        .form-card :global(.form-label) {
          color: #fff;
          font-weight: 500;
        }

        .form-card :global(.form-control) {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.2);
          color: #fff;
          padding: 12px;
        }

        .form-card :global(.form-control:focus) {
          background: rgba(255, 255, 255, 0.08);
          border-color: #D4AF37;
          box-shadow: 0 0 0 0.2rem rgba(212, 175, 55, 0.25);
        }

        .form-card :global(.form-control::placeholder) {
          color: rgba(255, 255, 255, 0.3);
        }

        .success-alert {
          background: rgba(40, 167, 69, 0.1);
          border: 1px solid #28a745;
          color: #28a745;
        }

        /* Map Container */
        .map-container {
          background: linear-gradient(135deg, #121212, #1a1a1a);
          border-radius: 20px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          overflow: hidden;
        }

        .map-header {
          padding: 30px;
          text-align: center;
        }

        .map-icon {
          font-size: 2.5rem;
          color: #D4AF37;
          margin-bottom: 10px;
        }

        .map-header h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 5px;
        }

        .map-header p {
          color: rgba(255, 255, 255, 0.6);
        }

        .map-wrapper iframe {
          display: block;
        }

        /* FAQ Section */
        .faq-section {
          padding: 60px 0;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-badge.light {
          background: rgba(212, 175, 55, 0.15);
        }

        .faq-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 15px;
        }

        .faq-subtitle {
          color: rgba(255, 255, 255, 0.6);
          max-width: 600px;
          margin: 0 auto;
        }

        .custom-accordion :global(.accordion-item) {
          background: rgba(212, 175, 55, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.2);
          margin-bottom: 15px;
          border-radius: 10px !important;
          overflow: hidden;
        }

        .custom-accordion :global(.accordion-header) {
          background: transparent;
        }

        .custom-accordion :global(.accordion-button) {
          background: transparent;
          color: #fff;
          padding: 15px 20px;
          font-weight: 500;
        }

        .custom-accordion :global(.accordion-button:not(.collapsed)) {
          background: rgba(212, 175, 55, 0.1);
          color: #D4AF37;
        }

        .custom-accordion :global(.accordion-button:focus) {
          box-shadow: none;
          border-color: rgba(212, 175, 55, 0.3);
        }

        .custom-accordion :global(.accordion-body) {
          color: rgba(255, 255, 255, 0.7);
          background: rgba(0, 0, 0, 0.2);
          padding: 20px;
        }

        /* CTA Section */
        .contact-cta {
          background: linear-gradient(135deg, #121212, #1a1a1a);
          border-radius: 20px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          padding: 50px;
          text-align: center;
        }

        .cta-icon {
          font-size: 3rem;
          color: #D4AF37;
          margin-bottom: 15px;
        }

        .contact-cta h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
        }

        .contact-cta p {
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 20px;
        }

        .btn-whatsapp {
          background: linear-gradient(135deg, #25D366, #128C7E);
          border: none;
          padding: 12px 30px;
          font-weight: 600;
          color: #fff;
        }

        .btn-whatsapp:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(37, 211, 102, 0.3);
        }

        .btn-gold-primary {
          background: linear-gradient(135deg, #D4AF37, #FFD700);
          border: none;
          padding: 12px;
          font-weight: 600;
          color: #0a0a0a;
        }

        .btn-gold-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
        }

        .btn-gold-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .contact-hero {
            padding: 150px 0 80px;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .hero-stats {
            gap: 20px;
          }

          .hero-stat .stat-number {
            font-size: 1.5rem;
          }

          .info-title {
            font-size: 2rem;
          }

          .faq-title {
            font-size: 1.8rem;
          }

          .form-card {
            padding: 20px;
          }

          .contact-cta {
            padding: 30px 20px;
          }

          .info-card {
            padding: 15px;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;