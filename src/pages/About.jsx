/* eslint-disable no-unused-vars */
// src/pages/About.jsx
import { useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGem, FaEye, FaBullseye, FaHandshake, FaShieldAlt, FaRocket, FaTrophy, FaStar, FaAward, FaUsers, FaGlobe, FaChartLine } from 'react-icons/fa';
import { GiGoldBar, GiDiamondRing, GiTeamIdea } from 'react-icons/gi';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const valuesRef = useRef([]);
  const leadersRef = useRef([]);
  const timelineRef = useRef(null);
  const statsRef = useRef(null);

  const milestones = [
    { year: '2010', title: 'Foundation', desc: 'AMIRSAD established in Dubai, UAE.', icon: FaGem, color: '#D4AF37' },
    { year: '2013', title: 'Global Expansion', desc: 'Operations expanded to 15 countries.', icon: FaGlobe, color: '#FFD700' },
    { year: '2017', title: 'Verification Hub', desc: 'Launched proprietary supplier verification system.', icon: FaShieldAlt, color: '#D4AF37' },
    { year: '2020', title: 'Digital Trade', desc: 'Introduced digital trade facilitation platform.', icon: FaChartLine, color: '#FFD700' },
    { year: '2024', title: 'Industry Leader', desc: 'Recognized as top gold trading facilitator.', icon: FaTrophy, color: '#D4AF37' }
  ];

  const leaders = [
    { name: 'Amir Sadollah', title: 'Founder & CEO', bio: '20+ years in commodity trading and finance.', expertise: 'Strategic Leadership', icon: FaStar },
    { name: 'Elena Kovalenko', title: 'Head of Compliance', bio: 'Former regulatory expert at LBMA.', expertise: 'Regulatory Affairs', icon: FaShieldAlt },
    { name: 'James O\'Connor', title: 'Director of Sourcing', bio: 'Extensive network across African and Asian gold belts.', expertise: 'Global Sourcing', icon: FaGlobe }
  ];

  const values = [
    { name: 'Integrity', icon: FaGem, description: 'Unwavering ethical standards in every transaction' },
    { name: 'Transparency', icon: FaEye, description: 'Clear and open communication at all times' },
    { name: 'Excellence', icon: FaTrophy, description: 'Commitment to superior quality and service' },
    { name: 'Partnership', icon: FaHandshake, description: 'Building lasting relationships with clients' }
  ];

  const stats = [
    { value: '98%', label: 'Client Satisfaction', icon: FaStar },
    { value: '24/7', label: 'Support Available', icon: FaRocket },
    { value: '0', label: 'Compliance Issues', icon: FaShieldAlt },
    { value: '500+', label: 'Successful Trades', icon: FaChartLine }
  ];

  useEffect(() => {
    // Hero section animations
    const heroTl = gsap.timeline();
    heroTl.fromTo(heroRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    ).fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "back.out(0.7)" },
      "-=0.6"
    ).fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.4"
    );

    // Mission & Vision cards with 3D flip effect
    gsap.fromTo([missionRef.current, visionRef.current],
      { opacity: 0, x: -50, rotationY: -30 },
      {
        opacity: 1,
        x: 0,
        rotationY: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: missionRef.current,
          start: 'top 80%',
        }
      }
    );

    // Values staggered entrance
    valuesRef.current.forEach((value, i) => {
      gsap.fromTo(value,
        { opacity: 0, scale: 0.5, rotation: -10 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: value,
            start: 'top 85%',
          }
        }
      );
    });

    // Leaders cards with 3D hover effect animation
    leadersRef.current.forEach((leader, i) => {
      gsap.fromTo(leader,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay: i * 0.15,
          ease: "back.out(0.6)",
          scrollTrigger: {
            trigger: leader,
            start: 'top 85%',
          }
        }
      );
    });

    // Timeline animation with progress bar
    const timelineItems = document.querySelectorAll('.timeline-item');
    gsap.fromTo(timelineItems,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 0.6,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          onEnter: () => {
            // Animate timeline progress
            gsap.to('.timeline-progress-fill', {
              width: '100%',
              duration: 1.5,
              ease: "power2.inOut"
            });
          }
        }
      }
    );

    // Stats counter animation
    const statNumbers = document.querySelectorAll('.stat-number-value');
    statNumbers.forEach((stat, i) => {
      gsap.fromTo(stat,
        { innerText: 0 },
        {
          innerText: parseInt(stat.getAttribute('data-target')),
          duration: 2,
          delay: i * 0.2,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
          }
        }
      );
    });

    // Parallax effect for background elements
    const handleScroll = () => {
      const scrolled = window.scrollY;
      gsap.to('.parallax-bg', {
        y: scrolled * 0.3,
        duration: 0,
        ease: "none"
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="about-hero" ref={heroRef}>
        <div className="hero-bg parallax-bg">
          <div className="hero-overlay"></div>
          <div className="hero-pattern"></div>
        </div>
        <Container className="hero-content">
          <Row>
            <Col lg={8}>
              <div className="hero-badge">Who We Are</div>
              <h1 className="display-2 fw-bold text-white playfair" ref={titleRef}>
                About <span className="gold-text">AMIRSAD</span>
              </h1>
              <p className="lead text-white-50 mt-3" ref={subtitleRef}>
                Pioneering integrity and excellence in global gold trade since 2010, 
                setting new standards in precious metals trading.
              </p>
              <div className="hero-stats mt-4">
                <div className="hero-stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years Excellence</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">35+</span>
                  <span className="stat-label">Countries</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">250+</span>
                  <span className="stat-label">Partners</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <Container>
          <Row>
            <Col md={6} className="mb-4">
              <div className="mission-card" ref={missionRef}>
                <div className="card-icon">
                  <FaBullseye />
                </div>
                <h3 className="card-title">Our Mission</h3>
                <p className="card-text">
                  To facilitate transparent, secure, and efficient gold trading through rigorous 
                  supplier verification and client-centric solutions that maximize value for all stakeholders.
                </p>
                <div className="card-decoration"></div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="vision-card" ref={visionRef}>
                <div className="card-icon">
                  <FaEye />
                </div>
                <h3 className="card-title">Our Vision</h3>
                <p className="card-text">
                  To become the world's most trusted gold trading facilitator, setting global standards 
                  for compliance, transparency, and ethical sourcing in precious metals.
                </p>
                <div className="card-decoration"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Values Section with 3D Cards */}
      <section className="values-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <div className="section-badge">Our Principles</div>
              <h2 className="section-title text-white">Core <span className="gold-text">Values</span></h2>
              <p className="section-subtitle">The foundation of everything we do at AMIRSAD Energy</p>
            </Col>
          </Row>
          <Row>
            {values.map((value, i) => (
              <Col md={3} key={i} className="mb-4">
                <div className="value-card" ref={el => valuesRef.current[i] = el}>
                  <div className="value-icon">
                    <value.icon />
                  </div>
                  <h4 className="value-title">{value.name}</h4>
                  <p className="value-description">{value.description}</p>
                  <div className="value-hover-effect"></div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Leadership Team Section */}
      <section className="leadership-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <div className="section-badge">Our Leaders</div>
              <h2 className="section-title text-white">Leadership <span className="gold-text">Team</span></h2>
              <p className="section-subtitle">Experts driving global gold excellence with decades of experience</p>
            </Col>
          </Row>
          <Row>
            {leaders.map((leader, idx) => (
              <Col md={4} key={idx} className="mb-4">
                <div className="leader-card" ref={el => leadersRef.current[idx] = el}>
                  <div className="leader-avatar">
                    <div className="avatar-initial">{leader.name.charAt(0)}</div>
                    <div className="avatar-glow"></div>
                    <div className="expertise-badge">{leader.expertise}</div>
                  </div>
                  <h3 className="leader-name">{leader.name}</h3>
                  <div className="leader-title">{leader.title}</div>
                  <p className="leader-bio">{leader.bio}</p>
                  <div className="leader-icon">
                    <leader.icon />
                  </div>
                  <div className="leader-social">
                    <div className="social-icon linkedin">in</div>
                    <div className="social-icon email">@</div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Company Milestones with Timeline */}
      <section className="milestones-section" ref={timelineRef}>
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <div className="section-badge light">Our Journey</div>
              <h2 className="section-title text-white light">Company <span className="gold-text">Milestones</span></h2>
              <p className="section-subtitle light">Key achievements in our journey to excellence</p>
            </Col>
          </Row>
          
          <div className="timeline-container">
            <div className="timeline-progress">
              <div className="timeline-progress-fill"></div>
            </div>
            {milestones.map((m, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker" style={{ background: m.color }}>
                  <m.icon />
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{m.year}</div>
                  <h4 className="timeline-title">{m.title}</h4>
                  <p className="timeline-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="about-stats-section" ref={statsRef}>
        <Container>
          <Row>
            {stats.map((stat, idx) => (
              <Col md={3} key={idx}>
                <div className="about-stat-card">
                  <stat.icon className="stat-icon" />
                  <div className="stat-number-value" data-target={stat.value.replace(/[^0-9]/g, '')}>
                    0{stat.value.includes('%') ? '%' : ''}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <style jsx>{`
        /* Hero Section */
        .about-hero {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0a0a0a;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
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

        .hero-badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 50px;
          color: #D4AF37;
          font-size: 0.9rem;
          margin-bottom: 20px;
        }

        .hero-stats {
          display: flex;
          gap: 40px;
          margin-top: 30px;
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

        /* Mission & Vision Cards */
        .mission-vision-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #121212 0%, #1a1a1a 100%);
        }

        .mission-card, .vision-card {
          position: relative;
          padding: 50px 40px;
          background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
          border-radius: 30px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          transition: all 0.4s ease;
          height: 100%;
          backdrop-filter: blur(10px);
        }

        .mission-card:hover, .vision-card:hover {
          transform: translateY(-10px);
          border-color: rgba(212, 175, 55, 0.5);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .card-icon {
          font-size: 3rem;
          color: #D4AF37;
          margin-bottom: 25px;
        }

        .card-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 20px;
        }

        .card-text {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .card-decoration {
          position: absolute;
          bottom: 20px;
          right: 20px;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.1), transparent);
          border-radius: 50%;
          pointer-events: none;
        }

        /* Values Section */
        .values-section {
          padding: 100px 0;
          background: #0a0a0a;
        }

        .value-card {
          position: relative;
          padding: 40px 20px;
          text-align: center;
          background: linear-gradient(135deg, #121212, #1a1a1a);
          border-radius: 20px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          transition: all 0.4s ease;
          overflow: hidden;
        }

        .value-card:hover {
          transform: translateY(-5px);
          border-color: #D4AF37;
        }

        .value-icon {
          font-size: 2.5rem;
          color: #D4AF37;
          margin-bottom: 20px;
        }

        .value-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 15px;
        }

        .value-description {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
        }

        .value-hover-effect {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.1), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .value-card:hover .value-hover-effect {
          opacity: 1;
        }

        /* Leadership Section */
        .leadership-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #0a0a0a, #121212);
        }

        .leader-card {
          position: relative;
          padding: 40px 30px;
          text-align: center;
          background: linear-gradient(135deg, #121212, #1a1a1a);
          border-radius: 30px;
          border: 1px solid rgba(212, 175, 55, 0.2);
          transition: all 0.4s ease;
        }

        .leader-card:hover {
          transform: translateY(-10px);
          border-color: #D4AF37;
          box-shadow: 0 20px 30px rgba(0,0,0,0.3);
        }

        .leader-avatar {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 0 auto 25px;
        }

        .avatar-initial {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #D4AF37, #FFD700);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          font-weight: 700;
          color: #0a0a0a;
          position: relative;
          z-index: 2;
        }

        .avatar-glow {
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.4), transparent);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .leader-card:hover .avatar-glow {
          opacity: 1;
        }

        .expertise-badge {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          background: #D4AF37;
          color: #0a0a0a;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .leader-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }

        .leader-title {
          color: #D4AF37;
          font-weight: 500;
          margin-bottom: 15px;
        }

        .leader-bio {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          margin-bottom: 20px;
        }

        .leader-icon {
          position: absolute;
          bottom: 20px;
          right: 20px;
          color: rgba(212, 175, 55, 0.2);
          font-size: 3rem;
        }

        /* Timeline Section */
        .milestones-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #0a0a0a, #121212);
        }

        .timeline-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline-progress {
          position: absolute;
          left: 30px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(212, 175, 55, 0.2);
        }

        .timeline-progress-fill {
          width: 100%;
          height: 0%;
          background: linear-gradient(180deg, #D4AF37, #FFD700);
          transition: height 1.5s ease;
        }

        .timeline-item {
          position: relative;
          padding-left: 80px;
          margin-bottom: 50px;
        }

        .timeline-marker {
          position: absolute;
          left: 18px;
          top: 0;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0a0a0a;
          font-size: 0.8rem;
          z-index: 2;
        }

        .timeline-content {
          background: rgba(255,255,255,0.03);
          padding: 20px;
          border-radius: 15px;
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .timeline-year {
          font-size: 0.9rem;
          color: #D4AF37;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .timeline-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }

        .timeline-desc {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
        }

        /* Stats Section */
        .about-stats-section {
          padding: 80px 0;
          background: #0a0a0a;
        }

        .about-stat-card {
          text-align: center;
          padding: 30px;
          background: linear-gradient(135deg, #121212, #1a1a1a);
          border-radius: 20px;
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .stat-icon {
          font-size: 2.5rem;
          color: #D4AF37;
          margin-bottom: 15px;
        }

        .stat-number-value {
          font-size: 2.5rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 10px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-stats {
            gap: 20px;
          }
          
          .hero-stat .stat-number {
            font-size: 1.5rem;
          }
          
          .mission-card, .vision-card {
            padding: 30px 20px;
          }
          
          .timeline-container {
            padding-left: 20px;
          }
          
          .timeline-item {
            padding-left: 60px;
          }
        }
      `}</style>
    </>
  );
};

export default About;