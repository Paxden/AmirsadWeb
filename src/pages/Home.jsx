
/* eslint-disable no-unused-vars */
// src/pages/Home.jsx
import { useEffect, useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../components/Hero";
import StatsCounter from "../components/StatsCounter";
import TestimonialsSlider from "../components/TestimonilasSlider";
import {
  FaGem,
  FaShieldAlt,
  FaHandshake,
  FaClipboardCheck,
  FaArrowRight,
  FaCheckCircle,
  FaChartLine,
  FaGlobe,
  FaTrophy,
  FaUsers,
  FaFileAlt,
  FaFileSignature,
  FaSearch,
  FaTruck,
  FaRocket,
  FaMedal,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const introRef = useRef(null);
  const whyRef = useRef(null);
  const processRef = useRef(null);
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    // Main timeline for section entrances
    const sections = [
      { ref: introRef, delay: 0 },
      { ref: whyRef, delay: 0.2 },
      { ref: processRef, delay: 0.4 },
      { ref: servicesRef, delay: 0.6 },
      { ref: ctaRef, delay: 0.8 },
    ];

    sections.forEach((section) => {
      if (section.ref.current) {
        gsap.fromTo(
          section.ref.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: section.delay,
            scrollTrigger: {
              trigger: section.ref.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    });

    // Animate why choose cards with stagger
    gsap.fromTo(
      ".why-card",
      { opacity: 0, scale: 0.9, rotationY: -15 },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(0.6)",
        scrollTrigger: {
          trigger: whyRef.current,
          start: "top 80%",
        },
      },
    );

    // Animate process steps with stagger and rotation
    gsap.fromTo(
      ".process-step",
      { opacity: 0, x: -30, rotationX: -30 },
      {
        opacity: 1,
        x: 0,
        rotationX: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 80%",
        },
      },
    );

    // Animate service cards
    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        duration: 0.7,
        ease: "back.out(0.5)",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
        },
      },
    );

    // Animate CTA section
    gsap.fromTo(
      ".cta-content",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
      },
    );

    // Floating elements animation
    floatingElementsRef.current.forEach((element, i) => {
      gsap.to(element, {
        y: "random(-20, 20)",
        x: "random(-15, 15)",
        rotation: "random(0, 360)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      });
    });

    // Parallax effect for sections
    const parallaxSections = document.querySelectorAll(".parallax-bg");
    const handleScroll = () => {
      const scrolled = window.scrollY;
      parallaxSections.forEach((section, i) => {
        gsap.to(section, {
          y: scrolled * (0.1 + i * 0.05),
          duration: 0,
          ease: "none",
        });
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whyChoose = [
    {
      icon: FaGem,
      title: "Premium Sourcing",
      desc: "Direct access to vetted gold suppliers across 35+ countries.",
      color: "#D4AF37",
      gradient: "linear-gradient(135deg, #D4AF37, #FFD700)",
    },
    {
      icon: FaShieldAlt,
      title: "Rigorous Verification",
      desc: "Multi-stage KYC and compliance with international standards.",
      color: "#D4AF37",
      gradient: "linear-gradient(135deg, #D4AF37, #FFD700)",
    },
    {
      icon: FaHandshake,
      title: "Trade Facilitation",
      desc: "End-to-end support from LOI to final settlement.",
      color: "#D4AF37",
      gradient: "linear-gradient(135deg, #D4AF37, #FFD700)",
    },
    {
      icon: FaClipboardCheck,
      title: "Due Diligence",
      desc: "Comprehensive background checks on all counterparties.",
      color: "#D4AF37",
      gradient: "linear-gradient(135deg, #D4AF37, #FFD700)",
    },
  ];

  const services = [
    "Gold Sourcing",
    "Supplier Verification",
    "Trading Facilitation",
    "Inspection Coordination",
    "Trade Advisory",
    "Documentation Support",
  ];

  const processSteps = [
    "Inquiry & LOI",
    "KYC & Verification",
    "Contract Signing",
    "Inspection & Escrow",
    "Logistics & Payment",
    "Settlement",
  ];

  return (
    <>
      <Hero />

      {/* Floating Elements */}
      <div className="floating-elements">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (floatingElementsRef.current[i] = el)}
            className={`floating-el floating-el-${i}`}
          >
            {i % 2 === 0 ? <FaGem /> : <FaChartLine />}
          </div>
        ))}
      </div>

      {/* Introduction Section */}
      <section ref={introRef} className="intro-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="intro-badge">
                <span className="badge-gold">Who We Are</span>
              </div>
              <h2 className="intro-title">
                Global Leaders in <span className="gold-text">Gold Trade</span>
              </h2>
              <p className="intro-lead">
                AMIRSAD ENERGY CONSULT bridges the gap between premium gold
                suppliers and qualified institutional buyers worldwide.
              </p>
              <div className="intro-features">
                <div className="feature-item">
                  <FaCheckCircle className="feature-icon" />
                  <span>5+ Countries Served</span>
                </div>
                <div className="feature-item">
                  <FaCheckCircle className="feature-icon" />
                  <span>150+ Global Partners</span>
                </div>
                <div className="feature-item">
                  <FaCheckCircle className="feature-icon" />
                  <span>#2.5B+ Transaction Value</span>
                </div>
              </div>
              <p className="intro-text">
                With deep roots in commodity markets and a rigorous verification
                framework, we ensure every transaction meets the highest
                standards of compliance, transparency, and efficiency.
              </p>
              <Button as={Link} to="/about" className="btn-gold-outline mt-3">
                Learn More <FaArrowRight className="ms-2" />
              </Button>
            </Col>
            <Col lg={6}>
              <div className="intro-image-wrapper">
                <div className="intro-image-glow"></div>
                <img
                  src="https://plus.unsplash.com/premium_photo-1683122039723-f2d9f46cf0db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZCUyMHBuZ3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="Gold bars"
                  className="intro-image"
                  loading="lazy"
                />
                <div className="image-stats">
                  <div className="stat">
                    <span className="stat-value">99.9%</span>
                    <span className="stat-label">Pure Gold</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Section */}
      <section ref={whyRef} className="why-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <div className="section-badge">Why Choose Us</div>
              <h2 className="section-title-dark">
                Why Choose <span className="gold-text">AMIRSAD</span>
              </h2>
              <p className="section-subtitle-dark">
                Setting the benchmark for integrity and excellence in gold
                trading
              </p>
            </Col>
          </Row>
          <Row>
            {whyChoose.map((item, idx) => (
              <Col md={6} lg={3} key={idx} className="mb-4">
                <div className="why-card">
                  <div className="why-card-icon">
                    <item.icon />
                  </div>
                  <h3 className="why-card-title">{item.title}</h3>
                  <p className="why-card-desc">{item.desc}</p>
                  <div className="why-card-hover"></div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Process Timeline Section */}
      <section ref={processRef} className="process-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <div className="section-badge light">How It Works</div>
              <h2 className="section-title-light">
                Gold Trading <span className="gold-text">Process</span>
              </h2>
              <p className="section-subtitle-light">
                Seamless, transparent, and efficient workflow
              </p>
            </Col>
          </Row>
          <Row className="process-timeline">
            {processSteps.map((step, i) => (
              <Col md={12} lg={8} xl={4} key={i} className="mb-4">
                <div className="process-step">
                  {/* Animated Step Number */}
                  <div className="step-number-wrapper">
                    <div className="step-number-glow"></div>
                    <div className="step-number">{i + 1}</div>
                    {i < processSteps.length - 1 && (
                      <div className="step-connector">
                        <div className="connector-line"></div>
                        <FaArrowRight className="connector-icon" />
                      </div>
                    )}
                  </div>

                  {/* Step Icon */}
                  <div className="step-icon">
                    {i === 0 && <FaFileAlt />}
                    {i === 1 && <FaShieldAlt />}
                    {i === 2 && <FaFileSignature />}
                    {i === 3 && <FaSearch />}
                    {i === 4 && <FaTruck />}
                    {i === 5 && <FaHandshake />}
                  </div>

                  {/* Step Content */}
                  <div className="step-content">
                    <h6 className="step-title">{step}</h6>
                    <p className="step-description">
                      {i === 0 &&
                        "Submit your Letter of Intent and initial requirements"}
                      {i === 1 &&
                        "Complete KYC and compliance verification process"}
                      {i === 2 && "Sign binding agreements and confirm terms"}
                      {i === 3 &&
                        "Arrange third-party inspection and escrow setup"}
                      {i === 4 && "Coordinate logistics and secure payment"}
                      {i === 5 &&
                        "Finalize documentation and complete settlement"}
                    </p>

                    {/* Step Metrics */}
                    <div className="step-metrics">
                      <div className="metric">
                        <span className="metric-value">
                          {i === 0 && "24h"}
                          {i === 1 && "48h"}
                          {i === 2 && "1-3d"}
                          {i === 3 && "2-5d"}
                          {i === 4 && "3-7d"}
                          {i === 5 && "24h"}
                        </span>
                        <span className="metric-label">Typical Duration</span>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="step-status">
                      <div className="status-dot"></div>
                      <span className="status-text">
                        {i === 0 && "Ready to Start"}
                        {i === 1 && "Secure"}
                        {i === 2 && "Binding"}
                        {i === 3 && "Verified"}
                        {i === 4 && "Tracked"}
                        {i === 5 && "Completed"}
                      </span>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="step-hover-overlay">
                    <div className="hover-content">
                     
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <StatsCounter />

      {/* Featured Services Section */}
      <section ref={servicesRef} className="services-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <div className="section-badge">Our Offerings</div>
              <h2 className="section-title-dark">
                Premium <span className="gold-text">Services</span>
              </h2>
              <p className="section-subtitle-dark">
                Comprehensive solutions for gold sourcing and trading
              </p>
            </Col>
          </Row>
          <Row>
            {services.map((service, idx) => (
              <Col md={6} lg={4} key={idx} className="mb-4">
                <div className="service-card">
                  <div className="service-icon">
                    <FaTrophy />
                  </div>
                  <h4 className="service-title">{service}</h4>
                  <p className="service-description">
                    Professional {service.toLowerCase()} with global standards
                    and expertise.
                  </p>
                  <div className="service-link">
                    Learn More <FaArrowRight />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button as={Link} to="/services" className="btn-gold-primary">
              View All Services <FaArrowRight className="ms-2" />
            </Button>
          </div>
        </Container>
      </section>

      <TestimonialsSlider />

      {/* CTA Banner */}
      <section ref={ctaRef} className="cta-section">
        <div className="cta-pattern"></div>
        <Container>
          <div className="cta-content">
            <div className="cta-badge">Get Started Today</div>
            <h2 className="cta-title">
              Ready to Partner with{" "}
              <span className="gold-text">Global Gold Experts?</span>
            </h2>
            <p className="cta-text">
              Join the network of leading suppliers and buyers worldwide.
              Experience seamless gold trading with AMIRSAD ENERGY.
            </p>
            <div className="cta-buttons">
              <Button
                as={Link}
                to="/contact"
                className="btn-gold-primary btn-large"
              >
                Get Started <FaArrowRight className="ms-2" />
              </Button>
              <Button
                as={Link}
                to="/about"
                className="btn-gold-outline btn-large"
              >
                Learn More
              </Button>
            </div>
            <div className="cta-stats">
              <div className="cta-stat">
                <FaUsers className="stat-icon" />
                <span>250+ Happy Clients</span>
              </div>
              <div className="cta-stat">
                <FaMedal className="stat-icon" />
                <span>Industry Leaders</span>
              </div>
              <div className="cta-stat">
                <FaRocket className="stat-icon" />
                <span>Fast & Secure</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <style>{`
        /* Intro Section */
        .intro-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #0a0a0a 0%, #121212 100%);
          position: relative;
          overflow: hidden;
        }

        .intro-badge {
          margin-bottom: 20px;
        }

        .badge-gold {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 50px;
          color: #d4af37;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .intro-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #fff;
        }

        .intro-lead {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 25px;
        }

        .intro-features {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 25px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
        }

        .feature-icon {
          color: #d4af37;
          font-size: 1rem;
        }

        .intro-text {
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .intro-image-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .intro-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.4s ease;
        }

        .intro-image-wrapper:hover .intro-image {
          transform: scale(1.05);
        }

        .intro-image-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(212, 175, 55, 0.2),
            transparent
          );
          pointer-events: none;
        }

        .image-stats {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          padding: 10px 20px;
          border-radius: 10px;
          border-left: 3px solid #d4af37;
        }

        .stat-value {
          display: block;
          font-size: 1.2rem;
          font-weight: 700;
          color: #d4af37;
        }

        .stat-label {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.7);
        }

        /* Why Choose Section */
        .why-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
        }

        .why-card {
          position: relative;
          padding: 40px 25px;
          background: linear-gradient(135deg, #121212, #1a1a1a);
          border-radius: 20px;
          text-align: center;
          transition: all 0.4s ease;
          border: 1px solid rgba(212, 175, 55, 0.2);
          overflow: hidden;
          height: 100%;
        }

        .why-card:hover {
          transform: translateY(-10px);
          border-color: #d4af37;
          box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
        }

        .why-card-icon {
          font-size: 3rem;
          color: #d4af37;
          margin-bottom: 20px;
        }

        .why-card-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 15px;
        }

        .why-card-desc {
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
        }

        .why-card-hover {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle,
            rgba(212, 175, 55, 0.1),
            transparent
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .why-card:hover .why-card-hover {
          opacity: 1;
        }

        /* Process Section */
        .process-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #0a0a0a 0%, #121212 100%);
        }

        .process-step {
          text-align: center;
          position: relative;
        }

        .step-number {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #d4af37, #ffd700);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 700;
          color: #0a0a0a;
          margin: 0 auto 20px;
          transition: all 0.3s ease;
        }

        .process-step:hover .step-number {
          transform: scale(1.1);
          box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
        }

        .step-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: #fff;
          margin: 0;
        }

        /* Services Section */
        .services-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
        }

        .service-card {
          padding: 30px;
          background: linear-gradient(135deg, #121212, #1a1a1a);
          border-radius: 20px;
          text-align: center;
          transition: all 0.4s ease;
          border: 1px solid rgba(212, 175, 55, 0.2);
          height: 100%;
          cursor: pointer;
        }

        .service-card:hover {
          transform: translateY(-5px);
          border-color: #d4af37;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .service-icon {
          font-size: 2.5rem;
          color: #d4af37;
          margin-bottom: 20px;
        }

        .service-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 15px;
        }

        .service-description {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          margin-bottom: 20px;
        }

        .service-link {
          color: #d4af37;
          font-size: 0.85rem;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
        }

        .service-card:hover .service-link {
          opacity: 1;
          transform: translateY(0);
        }

        /* CTA Section */
        .cta-section {
          position: relative;
          padding: 100px 0;
          background: linear-gradient(135deg, #0a0a0a 0%, #121212 100%);
          overflow: hidden;
        }

        .cta-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
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
          color: #d4af37;
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

        .btn-large {
          padding: 14px 32px;
          font-size: 1.1rem;
        }

        .cta-stats {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .cta-stat {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255, 255, 255, 0.7);
        }

        .cta-stat .stat-icon {
          color: #d4af37;
          font-size: 1.2rem;
        }

        /* Floating Elements */
        .floating-elements {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-el {
          position: absolute;
          color: rgba(212, 175, 55, 0.05);
          font-size: 3rem;
        }

        .floating-el-0 {
          top: 20%;
          left: 5%;
        }
        .floating-el-1 {
          top: 60%;
          right: 8%;
        }
        .floating-el-2 {
          bottom: 30%;
          left: 10%;
        }
        .floating-el-3 {
          top: 40%;
          right: 15%;
        }
        .floating-el-4 {
          bottom: 10%;
          right: 20%;
        }
        .floating-el-5 {
          top: 70%;
          left: 15%;
        }

        /* Section Styles */
        .section-badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 50px;
          color: #d4af37;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .section-badge.light {
          background: rgba(212, 175, 55, 0.15);
        }

        .section-title-dark {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .section-title-light {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .section-subtitle-dark,
        .section-subtitle-light {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.6);
          max-width: 600px;
          margin: 0 auto;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .intro-title {
            font-size: 2rem;
          }

          .intro-lead {
            font-size: 1rem;
          }

          .intro-features {
            gap: 15px;
          }

          .why-card {
            padding: 30px 20px;
          }

          .process-step {
            margin-bottom: 30px;
          }

          .cta-title {
            font-size: 1.8rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-large {
            width: 100%;
            max-width: 250px;
          }

          .floating-el {
            display: none;
          }
        }
        .process-timeline {
          position: relative;
        }

        .process-step {
          position: relative;
          background: linear-gradient(
            135deg,
            rgba(18, 18, 18, 0.9),
            rgba(26, 26, 26, 0.95)
          );
          border-radius: 20px;
          padding: 30px 20px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(212, 175, 55, 0.2);
          backdrop-filter: blur(10px);
          height: 100%;
          cursor: pointer;
          overflow: hidden;
        }

        .process-step:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: #d4af37;
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.2);
        }

        /* Step Number Wrapper */
        .step-number-wrapper {
          position: relative;
          display: inline-block;
          margin-bottom: 25px;
        }

        .step-number {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #d4af37, #ffd700);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          font-weight: 800;
          color: #0a0a0a;
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
          margin: 0 auto;
        }

        .process-step:hover .step-number {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
        }

        .step-number-glow {
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          background: radial-gradient(
            circle,
            rgba(212, 175, 55, 0.3),
            transparent
          );
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .process-step:hover .step-number-glow {
          opacity: 1;
        }

        /* Connector Line */
        .step-connector {
          position: absolute;
          top: 50%;
          left: 100%;
          width: 80px;
          transform: translateY(-50%);
          z-index: 3;
        }

        .connector-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, #d4af37, transparent);
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }

        .connector-icon {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          color: #d4af37;
          font-size: 0.8rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .process-step:hover .connector-icon {
          opacity: 1;
        }

        /* Step Icon */
        .step-icon {
          font-size: 2rem;
          color: #d4af37;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .process-step:hover .step-icon {
          transform: scale(1.1) rotate(5deg);
          color: #ffd700;
        }

        /* Step Content */
        .step-content {
          position: relative;
          z-index: 2;
        }

        .step-title {
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
          letter-spacing: 0.5px;
        }

        .step-description {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
          margin-bottom: 15px;
          min-height: 60px;
        }

        /* Step Metrics */
        .step-metrics {
          background: rgba(212, 175, 55, 0.1);
          border-radius: 10px;
          padding: 8px;
          margin-bottom: 12px;
        }

        .metric {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .metric-value {
          font-size: 0.9rem;
          font-weight: 700;
          color: #d4af37;
        }

        .metric-label {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.5);
        }

        /* Status Badge */
        .step-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          background: rgba(212, 175, 55, 0.1);
          border-radius: 20px;
          font-size: 0.7rem;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          background: #d4af37;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .status-text {
          color: #d4af37;
          font-weight: 500;
        }

        /* Hover Overlay */
        .step-hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(212, 175, 55, 0.95),
            rgba(255, 215, 0, 0.95)
          );
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.4s ease;
          border-radius: 20px;
          backdrop-filter: blur(5px);
        }

        .process-step:hover .step-hover-overlay {
          opacity: 0.1;
        }

        .hover-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          transform: translateY(20px);
          transition: transform 0.3s ease;
        }

        .process-step:hover .hover-content {
          transform: translateY(0);
        }

        .hover-icon {
          font-size: 2rem;
          color: #0a0a0a;
        }

        .hover-content span {
          color: #0a0a0a;
          font-weight: 600;
          font-size: 0.9rem;
        }

        /* Animations */
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .step-connector {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .process-step {
            padding: 20px 15px;
          }

          .step-number {
            width: 50px;
            height: 50px;
            font-size: 1.4rem;
          }

          .step-icon {
            font-size: 1.5rem;
          }

          .step-title {
            font-size: 0.9rem;
          }

          .step-description {
            font-size: 0.75rem;
            min-height: auto;
          }

          .step-metrics {
            padding: 6px;
          }

          .metric-value {
            font-size: 0.8rem;
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .process-step {
            background: linear-gradient(
              135deg,
              rgba(10, 10, 10, 0.95),
              rgba(18, 18, 18, 0.98)
            );
          }
        }
      `}</style>
    </>
  );
};

export default Home;
