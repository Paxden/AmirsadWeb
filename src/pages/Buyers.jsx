// src/pages/Buyers.jsx
import { useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaChartLine, FaShieldAlt, FaHandshake, FaCalendarAlt, 
  FaGem, FaTrophy, FaRocket, FaArrowRight, FaCheckCircle,
  FaClock, FaFileInvoice, FaGlobe, FaLock, FaBell, FaUserCheck
} from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Buyers = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const processRef = useRef([]);
  const workflowRef = useRef(null);
  const rfqRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);

  const processSteps = [
    { icon: FaChartLine, title: 'Financial Assessment', desc: 'Proof of funds and banking credentials verification.', time: '24 hours', color: '#D4AF37' },
    { icon: FaShieldAlt, title: 'Compliance Review', desc: 'KYC/AML documentation verification process.', time: '48 hours', color: '#FFD700' },
    { icon: FaHandshake, title: 'Agreement Signing', desc: 'NDA and framework agreement execution.', time: '24 hours', color: '#D4AF37' },
    { icon: FaCalendarAlt, title: 'Access Granted', desc: 'Full inventory and trade access.', time: 'Immediate', color: '#FFD700' }
  ];

  const advantages = [
    { icon: FaGem, title: 'Premium Sources', desc: 'Access to verified gold suppliers with competitive premiums' },
    { icon: FaShieldAlt, title: 'Full Compliance', desc: 'All suppliers meet international compliance standards' },
    { icon: FaGlobe, title: 'Global Network', desc: 'Connect with suppliers across 35+ countries' },
    { icon: FaRocket, title: 'Fast Execution', desc: 'Streamlined process from RFQ to settlement' }
  ];

  const stats = [
    { value: '500+', label: 'Active Listings', icon: FaGem },
    { value: '48h', label: 'Avg Response Time', icon: FaClock },
    { value: '100%', label: 'Compliance Rate', icon: FaShieldAlt },
    { value: '250+', label: 'Happy Buyers', icon: FaTrophy }
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

    // Process cards with 3D rotation
    processRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        { 
          opacity: 0, 
          y: 50,
          rotationX: -20,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "back.out(0.6)",
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Advantages animation
    gsap.fromTo('.advantage-card',
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.advantages-section',
          start: 'top 80%',
        }
      }
    );

    // Stats animation
    gsap.fromTo('.buyer-stat-card',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 85%',
        }
      }
    );

    // Workflow and RFQ animations
    gsap.fromTo(workflowRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: {
          trigger: workflowRef.current,
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo(rfqRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: {
          trigger: rfqRef.current,
          start: 'top 80%',
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
      <section className="buyers-hero" ref={heroRef}>
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="hero-pattern"></div>
          <div className="hero-glow"></div>
        </div>
        <Container>
          <Row>
            <Col lg={8}>
              <div className="hero-badge">For Qualified Buyers</div>
              <h1 className="hero-title" ref={titleRef}>
                Access Premium <span className="gold-text">Gold Inventories</span>
              </h1>
              <p className="hero-subtitle">
                Source verified gold with full transparency, competitive premiums, 
                and complete compliance. Join a network of trusted institutional buyers.
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Active Listings</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">35+</span>
                  <span className="stat-label">Source Countries</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">48h</span>
                  <span className="stat-label">RFQ Response</span>
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

      {/* Advantages Section */}
      <section className="advantages-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <div className="section-badge">Why Choose Us</div> <br />
              <h2 className="section-title">Advantages for <span className="gold-text">Buyers</span></h2>
              <p className="section-subtitle">
                Experience seamless gold procurement with our premium services
              </p>
            </Col>
          </Row>
          <Row>
            {advantages.map((advantage, idx) => (
              <Col lg={3} md={6} key={idx} className="mb-4">
                <div className="advantage-card">
                  <div className="advantage-icon-wrapper">
                    <advantage.icon className="advantage-icon" />
                    <div className="icon-glow"></div>
                  </div>
                  <h3 className="advantage-title">{advantage.title}</h3>
                  <p className="advantage-description">{advantage.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="buyer-stats-section" ref={statsRef}>
        <Container>
          <Row>
            {stats.map((stat, idx) => (
              <Col md={3} key={idx}>
                <div className="buyer-stat-card">
                  <stat.icon className="stat-icon" />
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-progress">
                    <div className="progress-fill"></div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Buyer Qualification Process */}
      <section className="process-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <div className="section-badge light">How to Qualify</div> <br />
              <h2 className="section-title light">Buyer Qualification <span className="gold-text">Process</span></h2>
              <p className="section-subtitle light">
                Simple, transparent, and efficient qualification process
              </p>
            </Col>
          </Row>
          <Row>
            {processSteps.map((step, idx) => (
              <Col lg={3} md={6} key={idx} className="mb-4">
                <div 
                  className="process-card"
                  ref={el => processRef.current[idx] = el}
                >
                  <div className="process-card-inner">
                    <div className="process-icon-wrapper">
                      <step.icon className="process-icon" />
                      <div className="process-time">{step.time}</div>
                    </div>
                    <h3 className="process-title">{step.title}</h3>
                    <p className="process-description">{step.desc}</p>
                    <div className="process-check">
                      <FaCheckCircle />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* RFQ & Workflow Section */}
      <section className="workflow-section">
        <Container>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <div ref={rfqRef} className="rfq-card">
                <div className="rfq-header">
                  <FaFileInvoice className="rfq-icon" />
                  <h3>Request for Quotation (RFQ)</h3>
                  <p>Submit your requirements and get matched with verified suppliers</p>
                </div>
                <div className="rfq-steps">
                  <div className="rfq-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <strong>Submit RFQ</strong>
                      <span>Specify grade, quantity, and delivery terms</span>
                    </div>
                  </div>
                  <div className="rfq-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <strong>Supplier Matching</strong>
                      <span>We match you with suitable vetted suppliers</span>
                    </div>
                  </div>
                  <div className="rfq-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <strong>Quotes Received</strong>
                      <span>Receive competitive quotes within 48 hours</span>
                    </div>
                  </div>
                </div>
                <Button as={Link} to="/contact" className="btn-gold-primary w-100 mt-3">
                  Submit RFQ Now <FaArrowRight className="ms-2" />
                </Button>
              </div>
            </Col>

            <Col lg={6}>
              <div ref={workflowRef} className="workflow-card">
                <div className="workflow-header">
                  <FaLock className="workflow-icon" />
                  <h3>Inventory Access Workflow</h3>
                  <p>Secure access to premium gold inventories</p>
                </div>
                <Accordion defaultActiveKey="0" className="custom-accordion">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <FaUserCheck className="me-2" /> Step 1: Registration
                    </Accordion.Header>
                    <Accordion.Body>
                      Complete online buyer registration and submit initial KYC documentation. 
                      Our team reviews your application within 24 hours.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <FaShieldAlt className="me-2" /> Step 2: Verification
                    </Accordion.Header>
                    <Accordion.Body>
                      24-48 hour comprehensive compliance review including financial 
                      assessment and background verification.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <FaGem className="me-2" /> Step 3: Platform Access
                    </Accordion.Header>
                    <Accordion.Body>
                      Secure access to our buyer portal with real-time inventory updates, 
                      pricing, and trade execution capabilities.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <FaBell className="me-2" /> Step 4: Notifications
                    </Accordion.Header>
                    <Accordion.Body>
                      Receive automated alerts for new inventory matching your criteria 
                      and price updates.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="buyers-cta-section" ref={ctaRef}>
        <div className="cta-background">
          <div className="cta-pattern"></div>
        </div>
        <Container>
          <div className="cta-content">
            <div className="cta-badge">Start Sourcing Today</div>
            <h2 className="cta-title">
              Ready to Access <span className="gold-text">Premium Gold?</span>
            </h2>
            <p className="cta-text">
              Join AMIRSAD's exclusive buyer network and gain access to verified 
              gold suppliers, competitive pricing, and seamless trading experience.
            </p>
            <div className="cta-buttons">
              <Button as={Link} to="/contact" className="btn-gold-primary">
                Get Started <FaArrowRight className="ms-2" />
              </Button>
              <Button as={Link} to="/contact" className="btn-gold-outline">
                Contact Sales
              </Button>
            </div>
            <div className="cta-features">
              <div className="cta-feature">
                <FaCheckCircle className="feature-icon" />
                <span>Free Consultation</span>
              </div>
              <div className="cta-feature">
                <FaCheckCircle className="feature-icon" />
                <span>No Obligation</span>
              </div>
              <div className="cta-feature">
                <FaCheckCircle className="feature-icon" />
                <span>Fast Approval</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <style jsx>{`
        /* Hero Section */
        .buyers-hero {
          position: relative;
          min-height: 70vh;
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

        /* Advantages Section */
        .advantages-section {
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

        .section-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.6);
          max-width: 600px;
          margin: 0 auto;
        }

        .advantage-card {
          text-align: center;
          padding: 30px;
          background: linear-gradient(135deg, #121212, #1a1a1a);
          border-radius: 20px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          transition: all 0.3s ease;
          height: 100%;
        }

        .advantage-card:hover {
          transform: translateY(-5px);
          border-color: #D4AF37;
        }

        .advantage-icon-wrapper {
          position: relative;
          display: inline-block;
          margin-bottom: 20px;
        }

        .advantage-icon {
          font-size: 2.5rem;
          color: #D4AF37;
        }

        .advantage-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
        }

        .advantage-description {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* Stats Section */
        .buyer-stats-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
        }

        .buyer-stat-card {
          text-align: center;
          padding: 30px;
          background: linear-gradient(135deg, #121212, #1a1a1a);
          border-radius: 20px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          transition: all 0.3s ease;
        }

        .buyer-stat-card:hover {
          transform: translateY(-5px);
          border-color: #D4AF37;
        }

        .stat-icon {
          font-size: 2.5rem;
          color: #D4AF37;
          margin-bottom: 15px;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 10px;
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
        }

        .stat-progress {
          width: 100%;
          height: 2px;
          background: rgba(212, 175, 55, 0.1);
          margin-top: 15px;
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-fill {
          width: 0%;
          height: 100%;
          background: linear-gradient(90deg, #D4AF37, #FFD700);
          transition: width 1s ease;
        }

        .buyer-stat-card:hover .progress-fill {
          width: 100%;
        }

        /* Process Section */
        .process-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #0a0a0a 0%, #121212 100%);
        }

        .section-badge.light {
          background: rgba(212, 175, 55, 0.15);
        }

        .section-title.light,
        .section-subtitle.light {
          color: #fff;
        }

        .process-card {
          height: 100%;
          perspective: 1000px;
        }

        .process-card-inner {
          position: relative;
          padding: 30px;
          background: linear-gradient(135deg, #121212, #1a1a1a);
          border-radius: 20px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          transition: all 0.4s ease;
          height: 100%;
          text-align: center;
        }

        .process-card-inner:hover {
          transform: translateY(-10px);
          border-color: #D4AF37;
        }

        .process-icon-wrapper {
          position: relative;
          display: inline-block;
          margin-bottom: 20px;
        }

        .process-icon {
          font-size: 3rem;
          color: #D4AF37;
        }

        .process-time {
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: #D4AF37;
          color: #0a0a0a;
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 0.7rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .process-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
        }

        .process-description {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          margin-bottom: 15px;
        }

        .process-check {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #D4AF37;
          font-size: 0.8rem;
        }

        /* Workflow Section */
        .workflow-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
        }

        .rfq-card, .workflow-card {
          background: linear-gradient(135deg, #121212, #1a1a1a);
          border-radius: 20px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          padding: 30px;
          height: 100%;
          transition: all 0.3s ease;
        }

        .rfq-card:hover, .workflow-card:hover {
          transform: translateY(-5px);
          border-color: #D4AF37;
        }

        .rfq-header, .workflow-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .rfq-icon, .workflow-icon {
          font-size: 3rem;
          color: #D4AF37;
          margin-bottom: 15px;
        }

        .rfq-header h3, .workflow-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
        }

        .rfq-header p, .workflow-header p {
          color: rgba(255, 255, 255, 0.6);
        }

        .rfq-steps {
          margin: 30px 0;
        }

        .rfq-step {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
          padding: 15px;
          background: rgba(212, 175, 55, 0.05);
          border-radius: 10px;
        }

        .rfq-step .step-number {
          width: 30px;
          height: 30px;
          background: linear-gradient(135deg, #D4AF37, #FFD700);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #0a0a0a;
          flex-shrink: 0;
        }

        .step-content {
          flex: 1;
        }

        .step-content strong {
          display: block;
          color: #fff;
          margin-bottom: 5px;
        }

        .step-content span {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
        }

        /* Custom Accordion */
        .custom-accordion :global(.accordion-item) {
          background: rgba(212, 175, 55, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.2);
          margin-bottom: 10px;
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
        }

        /* CTA Section */
        .buyers-cta-section {
          position: relative;
          padding: 100px 0;
          background: linear-gradient(135deg, #0a0a0a 0%, #121212 100%);
          overflow: hidden;
        }

        .cta-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .cta-pattern {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .cta-content {
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .cta-badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 50px;
          color: #D4AF37;
          font-size: 0.9rem;
          margin-bottom: 20px;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 20px;
        }

        .cta-text {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto 30px;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-bottom: 40px;
        }

        .btn-gold-primary, .btn-gold-outline {
          padding: 12px 30px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-gold-primary {
          background: linear-gradient(135deg, #D4AF37, #FFD700);
          border: none;
          color: #0a0a0a;
        }

        .btn-gold-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
        }

        .btn-gold-outline {
          background: transparent;
          border: 2px solid #D4AF37;
          color: #D4AF37;
        }

        .btn-gold-outline:hover {
          background: rgba(212, 175, 55, 0.1);
          transform: translateY(-2px);
        }

        .cta-features {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .cta-feature {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
        }

        .cta-feature .feature-icon {
          color: #D4AF37;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .buyers-hero {
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

          .section-title {
            font-size: 2rem;
          }

          .cta-title {
            font-size: 1.8rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-gold-primary, .btn-gold-outline {
            width: 100%;
            max-width: 250px;
          }

          .rfq-card, .workflow-card {
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Buyers;