// src/pages/Suppliers.jsx
import { useEffect, useRef } from 'react';
import { Container, Row, Col, Button,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaCheckCircle, FaClipboardList, FaUserCheck, FaFileSignature, FaGlobe, FaHandshake, FaShieldAlt, FaArrowRight, 
  FaTrophy, FaChartLine, FaUsers, FaStar 
} from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Suppliers = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const benefitsRef = useRef([]);
  const processRef = useRef(null);
  const requirementsRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);

  const benefits = [
    { icon: FaGlobe, title: 'Global Reach', desc: 'Access to qualified international buyers across 35+ countries', color: '#D4AF37' },
    { icon: FaChartLine, title: 'Competitive Terms', desc: 'Best market terms & premiums with transparent pricing', color: '#FFD700' },
    { icon: FaUserCheck, title: 'Streamlined Process', desc: 'Fast and efficient verification process', color: '#D4AF37' },
    { icon: FaHandshake, title: 'Secure Payments', desc: 'Safe and timely payment facilitation', color: '#FFD700' },
    { icon: FaClipboardList, title: 'Full Support', desc: 'Complete logistics & documentation assistance', color: '#D4AF37' },
    { icon: FaTrophy, title: 'Brand Positioning', desc: 'Premium brand positioning in global market', color: '#FFD700' }
  ];

  const stats = [
    { value: '150+', label: 'Active Buyers', icon: FaUsers },
    { value: '35+', label: 'Countries', icon: FaGlobe },
    { value: '#2.5B+', label: 'Trade Volume', icon: FaChartLine },
    { value: '100%', label: 'Verification Rate', icon: FaShieldAlt }
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

    // Benefits cards with 3D rotation
    benefitsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        { 
          opacity: 0, 
          x: -50,
          rotationY: -30,
          scale: 0.9
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
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

    // Process section animation
    gsap.fromTo(processRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: {
          trigger: processRef.current,
          start: 'top 80%',
        }
      }
    );

    // Requirements section animation
    gsap.fromTo(requirementsRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: {
          trigger: requirementsRef.current,
          start: 'top 80%',
        }
      }
    );

    // Stats animation
    gsap.fromTo('.supplier-stat-card',
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
      <section className="suppliers-hero" ref={heroRef}>
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="hero-pattern"></div>
          <div className="hero-glow"></div>
        </div>
        <Container>
          <Row>
            <Col lg={8}>
              <div className="hero-badge">For Gold Suppliers</div>
              <h1 className="hero-title" ref={titleRef}>
                Partner with <span className="gold-text">AMIRSAD</span>
              </h1>
              <p className="hero-subtitle">
                Join a network of premium gold suppliers recognized globally for excellence 
                and reliability. Access qualified buyers and maximize your trading potential.
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="stat-number">250+</span>
                  <span className="stat-label">Qualified Buyers</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Countries</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Compliance</span>
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

      {/* Benefits Section */}
      <section className="benefits-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <div className="section-badge">Why Partner With Us</div> <br />
              <h2 className="section-title">Benefits of <span className="gold-text">Partnership</span></h2>
              <p className="section-subtitle">
                Discover the advantages of joining AMIRSAD's exclusive supplier network
              </p>
            </Col>
          </Row>
          <Row>
            {benefits.map((benefit, idx) => (
              <Col lg={4} md={6} key={idx} className="mb-4">
                <div 
                  className="benefit-card"
                  ref={el => benefitsRef.current[idx] = el}
                >
                  <div className="benefit-card-inner">
                    <div className="benefit-icon-wrapper">
                      <benefit.icon className="benefit-icon" />
                      <div className="icon-glow"></div>
                    </div>
                    <h3 className="benefit-title">{benefit.title}</h3>
                    <p className="benefit-description">{benefit.desc}</p>
                    <div className="benefit-hover-effect"></div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="supplier-stats-section" ref={statsRef}>
        <Container>
          <Row>
            {stats.map((stat, idx) => (
              <Col md={3} key={idx}>
                <div className="supplier-stat-card">
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

      {/* Onboarding Process & Requirements */}
      <section className="onboarding-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div ref={processRef}>
                <div className="section-badge light">Simple Process</div>
                <h2 className="process-title">Supplier Onboarding <span className="gold-text">Process</span></h2>
                <p className="process-subtitle">
                  Our streamlined onboarding process ensures quick and efficient integration
                  into our global trading network.
                </p>
                <div className="process-timeline">
                  <div className="process-step-item">
                    <div className="step-number">1</div>
                    <div className="step-details">
                      <div className="step-icon"><FaClipboardList /></div>
                      <div className="step-info">
                        <h4>Initial Application & NDA</h4>
                        <p>Submit your application and sign confidentiality agreement</p>
                      </div>
                    </div>
                  </div>
                  <div className="process-step-item">
                    <div className="step-number">2</div>
                    <div className="step-details">
                      <div className="step-icon"><FaUserCheck /></div>
                      <div className="step-info">
                        <h4>KYC & Document Verification</h4>
                        <p>Complete verification of all corporate documents</p>
                      </div>
                    </div>
                  </div>
                  <div className="process-step-item">
                    <div className="step-number">3</div>
                    <div className="step-details">
                      <div className="step-icon"><FaFileSignature /></div>
                      <div className="step-info">
                        <h4>Site Inspection & Due Diligence</h4>
                        <p>On-site verification and compliance check</p>
                      </div>
                    </div>
                  </div>
                  <div className="process-step-item">
                    <div className="step-number">4</div>
                    <div className="step-details">
                      <div className="step-icon"><FaCheckCircle /></div>
                      <div className="step-info">
                        <h4>Contract & Trading Agreement</h4>
                        <p>Finalize partnership terms and start trading</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Button as={Link} to="/contact" className="btn-gold-primary mt-4">
                  Register Interest <FaArrowRight className="ms-2" />
                </Button>
              </div>
            </Col>

            <Col lg={6}>
              <div ref={requirementsRef} className="requirements-card">
                <div className="requirements-header">
                  <FaShieldAlt className="requirements-icon" />
                  <h3>KYC Requirements</h3>
                  <p>Required documentation for supplier verification</p>
                </div>
                <div className="requirements-list">
                  <div className="requirement-item">
                    <FaCheckCircle className="requirement-check" />
                    <div>
                      <strong>Corporate Registration</strong>
                      <span>Valid business license and registration certificate</span>
                    </div>
                  </div>
                  <div className="requirement-item">
                    <FaCheckCircle className="requirement-check" />
                    <div>
                      <strong>Tax Identification</strong>
                      <span>Tax registration number and compliance certificates</span>
                    </div>
                  </div>
                  <div className="requirement-item">
                    <FaCheckCircle className="requirement-check" />
                    <div>
                      <strong>Director Identification</strong>
                      <span>Passport copies and proof of address for directors</span>
                    </div>
                  </div>
                  <div className="requirement-item">
                    <FaCheckCircle className="requirement-check" />
                    <div>
                      <strong>Operational License</strong>
                      <span>Valid mining or trading license documentation</span>
                    </div>
                  </div>
                  <div className="requirement-item">
                    <FaCheckCircle className="requirement-check" />
                    <div>
                      <strong>Bank References</strong>
                      <span>Bank reference letters and financial statements</span>
                    </div>
                  </div>
                  <div className="requirement-item">
                    <FaCheckCircle className="requirement-check" />
                    <div>
                      <strong>Mine Documentation</strong>
                      <span>Concession rights and mining permits</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="suppliers-cta-section" ref={ctaRef}>
        <div className="cta-background">
          <div className="cta-pattern"></div>
        </div>
        <Container>
          <div className="cta-content">
            <div className="cta-badge">Start Your Journey</div>
            <h2 className="cta-title">
              Ready to Join the <span className="gold-text">Elite Network?</span>
            </h2>
            <p className="cta-text">
              Become a trusted supplier in AMIRSAD's global network and access 
              premium buyers, competitive terms, and secure trading environment.
            </p>
            <div className="cta-buttons">
              <Button as={Link} to="/contact" className="btn-gold-primary">
                Apply Now <FaArrowRight className="ms-2" />
              </Button>
              <Button as={Link} to="/contact" className="btn-gold-outline">
                Contact Us
              </Button>
            </div>
            <div className="cta-features">
              <div className="cta-feature">
                <FaStar className="feature-icon" />
                <span>Free Consultation</span>
              </div>
              <div className="cta-feature">
                <FaStar className="feature-icon" />
                <span>Fast Verification</span>
              </div>
              <div className="cta-feature">
                <FaStar className="feature-icon" />
                <span>Global Exposure</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <style jsx>{`
        /* Hero Section */
        .suppliers-hero {
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

        /* Benefits Section */
        .benefits-section {
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

        .benefit-card {
          height: 100%;
          perspective: 1000px;
        }

        .benefit-card-inner {
          position: relative;
          padding: 40px 30px;
          background: linear-gradient(135deg, #121212, #1a1a1a);
          border-radius: 20px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          transition: all 0.4s ease;
          height: 100%;
          overflow: hidden;
          text-align: center;
        }

        .benefit-card-inner:hover {
          transform: translateY(-10px);
          border-color: #D4AF37;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .benefit-icon-wrapper {
          position: relative;
          display: inline-block;
          margin-bottom: 25px;
        }

        .benefit-icon {
          font-size: 3rem;
          color: #D4AF37;
          transition: all 0.3s ease;
        }

        .benefit-card-inner:hover .benefit-icon {
          transform: scale(1.1);
        }

        .icon-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 70px;
          height: 70px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.2), transparent);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .benefit-card-inner:hover .icon-glow {
          opacity: 1;
        }

        .benefit-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 15px;
        }

        .benefit-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin: 0;
        }

        .benefit-hover-effect {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.05), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .benefit-card-inner:hover .benefit-hover-effect {
          opacity: 1;
        }

        /* Stats Section */
        .supplier-stats-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
        }

        .supplier-stat-card {
          text-align: center;
          padding: 30px;
          background: linear-gradient(135deg, #121212, #1a1a1a);
          border-radius: 20px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          transition: all 0.3s ease;
        }

        .supplier-stat-card:hover {
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

        .supplier-stat-card:hover .progress-fill {
          width: 100%;
        }

        /* Onboarding Section */
        .onboarding-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #0a0a0a 0%, #121212 100%);
        }

        .section-badge.light {
          background: rgba(212, 175, 55, 0.15);
        }

        .process-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 15px;
        }

        .process-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 40px;
        }

        .process-timeline {
          margin-bottom: 30px;
        }

        .process-step-item {
          position: relative;
          margin-bottom: 30px;
          padding-left: 50px;
        }

        .step-number {
          position: absolute;
          left: 0;
          top: 0;
          width: 35px;
          height: 35px;
          background: linear-gradient(135deg, #D4AF37, #FFD700);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #0a0a0a;
        }

        .step-details {
          display: flex;
          gap: 15px;
        }

        .step-icon {
          font-size: 1.5rem;
          color: #D4AF37;
        }

        .step-info h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 5px;
        }

        .step-info p {
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          font-size: 0.9rem;
        }

        /* Requirements Card */
        .requirements-card {
          background: linear-gradient(135deg, #121212, #1a1a1a);
          border-radius: 20px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .requirements-card:hover {
          transform: translateY(-5px);
          border-color: #D4AF37;
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
        }

        .requirements-header {
          padding: 30px;
          text-align: center;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }

        .requirements-icon {
          font-size: 3rem;
          color: #D4AF37;
          margin-bottom: 15px;
        }

        .requirements-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
        }

        .requirements-header p {
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        .requirements-list {
          padding: 30px;
        }

        .requirement-item {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
        }

        .requirement-check {
          color: #D4AF37;
          font-size: 1.2rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .requirement-item strong {
          display: block;
          color: #fff;
          margin-bottom: 5px;
        }

        .requirement-item span {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
        }

        /* CTA Section */
        .suppliers-cta-section {
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
          .suppliers-hero {
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

          .process-title {
            font-size: 1.8rem;
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

          .requirements-list {
            padding: 20px;
          }

          .process-step-item {
            padding-left: 40px;
          }

          .step-details {
            flex-direction: column;
            gap: 5px;
          }
        }
      `}</style>
    </>
  );
};

export default Suppliers;