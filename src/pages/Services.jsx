// src/pages/Services.jsx
import { useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaSearchLocation,
  FaShieldAlt,
  FaHandshake,
  FaClipboardList,
  FaChartLine,
  FaFileInvoice,
  FaArrowRight,
  FaCheck,
  FaGem,
  FaMedal,
  FaClock,
  FaGlobe,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const servicesRef = useRef([]);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);

  const servicesList = [
    {
      icon: FaSearchLocation,
      title: "Gold Sourcing",
      desc: "Direct access to verified gold suppliers across Africa, Asia, and South America. We identify premium sources with competitive premiums.",
      features: [
        "Mine-direct procurement",
        "Competitive premiums",
        "CIF & FOB options",
      ],
      color: "#D4AF37",
      gradient: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
    },
    {
      icon: FaShieldAlt,
      title: "Supplier Verification",
      desc: "Rigorous multi-stage verification including legal, financial, and operational due diligence to ensure complete compliance.",
      features: ["KYC & AML compliance", "Site visits", "Background checks"],
      color: "#D4AF37",
      gradient: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
    },
    {
      icon: FaHandshake,
      title: "Buyer Facilitation",
      desc: "End-to-end support connecting qualified buyers with vetted suppliers for seamless and secure transactions.",
      features: [
        "LOI & contract support",
        "Price negotiation",
        "Secure payment coordination",
      ],
      color: "#D4AF37",
      gradient: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
    },
    {
      icon: FaClipboardList,
      title: "Inspection Coordination",
      desc: "Professional inspection services at loading and discharge ports with international standards compliance.",
      features: [
        "SGS/Bureau Veritas",
        "Assay verification",
        "Weight certification",
      ],
      color: "#D4AF37",
      gradient: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
    },
    {
      icon: FaChartLine,
      title: "Trade Advisory",
      desc: "Market intelligence and strategic guidance for optimal trading decisions in volatile gold markets.",
      features: ["Price forecasting", "Risk management", "Regulatory updates"],
      color: "#D4AF37",
      gradient: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
    },
    {
      icon: FaFileInvoice,
      title: "Documentation Support",
      desc: "Complete handling of all trade documentation and compliance paperwork for seamless transactions.",
      features: [
        "Bill of lading",
        "Certificate of origin",
        "Insurance coordination",
      ],
      color: "#D4AF37",
      gradient: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
    },
  ];

  const stats = [
    { value: "500+", label: "Successful Trades", icon: FaGem },
    { value: "35+", label: "Countries Served", icon: FaGlobe },
    { value: "99.9%", label: "Success Rate", icon: FaMedal },
    { value: "24/7", label: "Support Available", icon: FaClock },
  ];

  useEffect(() => {
    // Hero section animations
    const heroTl = gsap.timeline();
    heroTl
      .fromTo(
        heroRef.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
      )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "back.out(0.7)" },
        "-=0.6",
      );

    // Animate service cards with 3D rotation effect
    servicesRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          rotationX: -15,
          scale: 0.9,
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
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    // Animate stats
    gsap.fromTo(
      ".service-stat-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
      },
    );

    // Animate CTA section
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.95 },
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

    // Parallax effect for background
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (heroRef.current) {
        gsap.to(heroRef.current, {
          y: scrolled * 0.3,
          duration: 0,
          ease: "none",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="services-hero" ref={heroRef}>
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="hero-pattern"></div>
          <div className="hero-glow"></div>
        </div>
        <Container>
          <Row>
            <Col lg={8}>
              <div className="hero-badge">What We Offer</div>
              <h1 className="hero-title" ref={titleRef}>
                Our Premium <span className="gold-text">Services</span>
              </h1>
              <p className="hero-subtitle">
                Comprehensive gold trade solutions tailored for institutional
                success. We provide end-to-end support for all your gold trading
                needs.
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">250+</span>
                  <span className="stat-label">Global Partners</span>
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
            <path
              fill="#0a0a0a"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <div className="section-badge">Our Expertise</div> <br />
              <h2 className="section-title">
                Comprehensive <span className="gold-text">Solutions</span>
              </h2>
              <p className="section-subtitle">
                From sourcing to settlement, we provide complete gold trading
                services
              </p>
            </Col>
          </Row>
          <Row>
            {servicesList.map((service, idx) => (
              <Col lg={4} md={6} key={idx} className="mb-4">
                <div
                  className="service-card"
                  ref={(el) => (servicesRef.current[idx] = el)}
                >
                  <div className="service-card-inner">
                    <div className="service-icon-wrapper">
                      <service.icon className="service-icon" />
                      <div className="icon-glow"></div>
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.desc}</p>
                    <div className="service-features">
                      {service.features.map((feature, i) => (
                        <div key={i} className="feature-item">
                          <FaCheck className="feature-check" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="service-hover-effect"></div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="services-stats-section" ref={statsRef}>
        <Container>
          <Row>
            {stats.map((stat, idx) => (
              <Col md={3} key={idx}>
                <div className="service-stat-card">
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

      {/* Process Section */}
      <section className="process-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <div className="section-badge light">How We Work</div> <br />
              <h2 className="section-title light">
                Our Service <span className="gold-text">Process</span>
              </h2>
              <p className="section-subtitle light">
                A streamlined approach to ensure your success
              </p>
            </Col>
          </Row>
          <Row className="process-timeline">
            {[
              "Initial Consultation",
              "Requirements Analysis",
              "Solution Design",
              "Implementation",
              "Monitoring & Support",
            ].map((step, i) => (
              <Col md={2.4} key={i} className="mb-4">
                <div className="process-step">
                  <div className="step-number">{i + 1}</div>
                  <div className="step-title">{step}</div>
                  <div className="step-line"></div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section" ref={ctaRef}>
        <div className="cta-background">
          <div className="cta-pattern"></div>
        </div>
        <Container>
          <div className="cta-content">
            <div className="cta-badge">Ready to Get Started?</div>
            <h2 className="cta-title">
              Elevate Your <span className="gold-text">Gold Trade</span>
            </h2>
            <p className="cta-text">
              Contact our team to discuss how we can support your specific
              requirements and help you achieve success in the global gold
              market.
            </p>
            <div className="cta-buttons">
              <Button as={Link} to="/contact" className="btn-gold-primary">
                Contact Us <FaArrowRight className="ms-2" />
              </Button>
              <Button as={Link} to="/about" className="btn-gold-outline">
                Learn More
              </Button>
            </div>
            <div className="cta-features">
              <div className="cta-feature">
                <FaCheck className="feature-icon" />
                <span>Free Consultation</span>
              </div>
              <div className="cta-feature">
                <FaCheck className="feature-icon" />
                <span>Custom Solutions</span>
              </div>
              <div className="cta-feature">
                <FaCheck className="feature-icon" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <style jsx>{`
        /* Hero Section */
        .services-hero {
          position: relative;
          min-height: 70vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          z-index: -10;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          padding: 180px 0 100px;
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
          background: radial-gradient(
            circle at 30% 50%,
            rgba(212, 175, 55, 0.1),
            transparent
          );
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
          background: radial-gradient(
            circle,
            rgba(212, 175, 55, 0.15),
            transparent
          );
          transform: translate(-50%, -50%);
          filter: blur(50px);
        }

        .hero-badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 50px;
          color: #d4af37;
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
          color: #d4af37;
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

        /* Services Grid Section */
        .services-grid-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #0a0a0a 0%, #121212 100%);
        }

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

        /* Service Cards */
        .service-card {
          height: 100%;
          perspective: 1000px;
        }

        .service-card-inner {
          position: relative;
          padding: 40px 30px;
          background: linear-gradient(135deg, #121212, #1a1a1a);
          border-radius: 20px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          transition: all 0.4s ease;
          height: 100%;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .service-card-inner:hover {
          transform: translateY(-10px);
          border-color: #d4af37;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .service-icon-wrapper {
          position: relative;
          display: inline-block;
          margin-bottom: 25px;
        }

        .service-icon {
          font-size: 3rem;
          color: #d4af37;
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .service-card-inner:hover .service-icon {
          transform: scale(1.1);
        }

        .icon-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 70px;
          height: 70px;
          background: radial-gradient(
            circle,
            rgba(212, 175, 55, 0.2),
            transparent
          );
          border-radius: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card-inner:hover .icon-glow {
          opacity: 1;
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 15px;
        }

        .service-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .service-features {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .feature-check {
          color: #d4af37;
          font-size: 0.8rem;
        }

        .service-hover-effect {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle,
            rgba(212, 175, 55, 0.05),
            transparent
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .service-card-inner:hover .service-hover-effect {
          opacity: 1;
        }

        /* Stats Section */
        .services-stats-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
        }

        .service-stat-card {
          text-align: center;
          padding: 30px;
          background: linear-gradient(135deg, #121212, #1a1a1a);
          border-radius: 20px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          transition: all 0.3s ease;
        }

        .service-stat-card:hover {
          transform: translateY(-5px);
          border-color: #d4af37;
        }

        .stat-icon {
          font-size: 2.5rem;
          color: #d4af37;
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
          background: linear-gradient(90deg, #d4af37, #ffd700);
          transition: width 1s ease;
        }

        .service-stat-card:hover .progress-fill {
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

        .process-timeline {
          margin-top: 50px;
        }

        .process-step {
          text-align: center;
        }

        .step-number {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #d4af37, #ffd700);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: #0a0a0a;
          margin: 0 auto 15px;
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
        }

        /* CTA Section */
        .services-cta-section {
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

        .btn-gold-primary,
        .btn-gold-outline {
          padding: 12px 30px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-gold-primary {
          background: linear-gradient(135deg, #d4af37, #ffd700);
          border: none;
          color: #0a0a0a;
        }

        .btn-gold-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
        }

        .btn-gold-outline {
          background: transparent;
          border: 2px solid #d4af37;
          color: #d4af37;
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
          color: #d4af37;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .services-hero {
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

          .service-card-inner {
            padding: 30px 20px;
          }

          .service-title {
            font-size: 1.3rem;
          }

          .cta-title {
            font-size: 1.8rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-gold-primary,
          .btn-gold-outline {
            width: 100%;
            max-width: 250px;
          }

          .process-step {
            margin-bottom: 30px;
          }
        }
      `}</style>
    </>
  );
};

export default Services;
