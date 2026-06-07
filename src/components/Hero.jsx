/* eslint-disable react-hooks/purity */
/* eslint-disable no-unused-vars */
// src/components/Hero.jsx
import { useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { FaArrowRight, FaPlay, FaGem } from 'react-icons/fa';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnRef = useRef(null);
  const goldParticlesRef = useRef([]);
  const floatingElementsRef = useRef([]);
  const statsRef = useRef(null);

  useEffect(() => {
    // Main timeline with advanced animations
    const tl = gsap.timeline();
    
    // Animate title with split text effect
    const titleChars = titleRef.current?.querySelectorAll('.char');
    if (titleChars) {
      tl.fromTo(titleChars,
        { opacity: 0, y: 100, rotateX: -90 },
        { 
          opacity: 1, 
          y: 0, 
          rotateX: 0, 
          duration: 0.8, 
          stagger: 0.05,
          ease: "back.out(1.2)"
        }
      );
    } else {
      tl.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }

    // Animate subtitle with fade and slide
    tl.fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );

    // Animate buttons with bounce effect
    tl.fromTo(btnRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" },
      "-=0.3"
    );

    // Animate stats section
    tl.fromTo(statsRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "+=0.3"
    );

    // Create floating particles animation
    goldParticlesRef.current.forEach((particle, i) => {
      gsap.to(particle, {
        y: "random(-30, 30)",
        x: "random(-20, 20)",
        rotation: "random(0, 360)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2
      });
    });

    // Floating elements animation
    floatingElementsRef.current.forEach((element, i) => {
      gsap.to(element, {
        y: "random(-20, 20)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3
      });
    });

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (heroRef.current) {
        gsap.to(heroRef.current, {
          y: scrolled * 0.5,
          duration: 0,
          ease: "none"
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split text into characters for animation
  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char" style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
      <>
    <section style={{paddingTop: "110px"}} ref={heroRef} className="hero-section d-flex align-items-center">
      {/* Animated Background Gradient */}
      <div className="hero-gradient"></div>
      
      {/* Video Background (Optional - replace with your video) */}
      <div className="hero-video-bg">
        <video autoPlay muted loop playsInline>
          <source src="https://www.pexels.com/video/luxurious-gold-jewelry-showcase-display-36338911/" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Animated Gold Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          ref={el => goldParticlesRef.current[i] = el}
          className="gold-particle"
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            background: '#D4AF37',
            borderRadius: '50%',
            opacity: Math.random() * 0.5 + 0.2,
            filter: 'blur(1px)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
      ))}

      {/* Floating Gold Elements */}
      <div ref={el => floatingElementsRef.current[0] = el} className="floating-element floating-1">
        <FaGem />
      </div>
      <div ref={el => floatingElementsRef.current[1] = el} className="floating-element floating-2">
        <FaGem />
      </div>
      <div ref={el => floatingElementsRef.current[2] = el} className="floating-element floating-3">
        <div className="gold-circle"></div>
      </div>

      <Container className="position-relative" style={{ zIndex: 10 }}>
        <Row className="justify-content-center text-center">
          <Col lg={10} xl={8}>
            <div className="hero-badge mb-4">
              <span className="badge-gold">
                <FaPlay className="me-2" /> Premier Gold Trading Platform
              </span>
            </div>
            
            <h1 ref={titleRef} className="display-2 fw-bold text-white mb-4 playfair hero-title">
              Global Gold <span className="gold-text gradient-text">Excellence</span>
            </h1>
            
            <p ref={subtitleRef} className="lead text-white-50 mb-5 hero-subtitle">
              Premier sourcing, verification, and trading facilitation for institutional 
              investors and gold suppliers worldwide.
            </p>
            
            <div ref={btnRef} className="hero-buttons">
              <Button as={Link} to="/contact" className="btn-gold-primary me-3">
                Start Trading <FaArrowRight className="ms-2 icon-animate" />
              </Button>
              <Button as={Link} to="/about" className="btn-gold-outline">
                Discover More
              </Button>
            </div>

          </Col>
        </Row>
      </Container>

      <style >{`
        .hero-section {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background: #0a0a0a;
        }

        /* Animated Gradient Background */
        .hero-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0d0d0d 100%);
          opacity: 0.9;
        }

        /* Video Background */
        .hero-video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .hero-video-bg video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(10,10,10,0.8) 0%, rgba(26,26,26,0.9) 100%);
        }

        /* Hero Badge */
        .hero-badge {
          animation: fadeInUp 0.6s ease-out;
        }

        .badge-gold {
          display: inline-flex;
          align-items: center;
          padding: 8px 20px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 50px;
          color: #D4AF37;
          font-size: 0.9rem;
          font-weight: 500;
          backdrop-filter: blur(10px);
          letter-spacing: 0.5px;
        }

        /* Hero Title */
        .hero-title {
          font-size: 4rem;
          line-height: 1.2;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }

        .gradient-text {
          background: linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #D4AF37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        /* Hero Subtitle */
        .hero-subtitle {
          font-size: 1.2rem;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Buttons */
        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-gold-primary {
          background: linear-gradient(135deg, #D4AF37 0%, #FFD700 100%);
          border: none;
          padding: 14px 32px;
          font-weight: 600;
          color: #0a0a0a;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-gold-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(212, 175, 55, 0.3);
          color: #0a0a0a;
        }

        .btn-gold-primary .icon-animate {
          transition: transform 0.3s ease;
        }

        .btn-gold-primary:hover .icon-animate {
          transform: translateX(5px);
        }

        .btn-gold-outline {
          background: transparent;
          border: 2px solid #D4AF37;
          padding: 14px 32px;
          font-weight: 600;
          color: #D4AF37;
          transition: all 0.3s ease;
        }

        .btn-gold-outline:hover {
          background: rgba(212, 175, 55, 0.1);
          transform: translateY(-2px);
          color: #D4AF37;
        }

        /* Stats Section */
        .hero-stats {
          border-top: 1px solid rgba(212, 175, 55, 0.2);
        }

        .stat-item {
          text-align: center;
          padding: 20px;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 8px;
          letter-spacing: 1px;
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Floating Elements */
        .floating-element {
          position: absolute;
          color: rgba(212, 175, 55, 0.15);
          font-size: 4rem;
          pointer-events: none;
          z-index: 2;
        }

        .floating-1 {
          top: 15%;
          left: 5%;
        }

        .floating-2 {
          bottom: 20%;
          right: 8%;
        }

        .floating-3 {
          top: 50%;
          right: 15%;
        }

        .gold-circle {
          width: 100px;
          height: 100px;
          border: 2px solid rgba(212, 175, 55, 0.2);
          border-radius: 50%;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
          
          .btn-gold-primary,
          .btn-gold-outline {
            padding: 10px 24px;
            font-size: 0.9rem;
          }
          
          .stat-number {
            font-size: 1.5rem;
          }
          
          .floating-element {
            display: none;
          }
        }

        @media (max-width: 576px) {
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .btn-gold-primary,
          .btn-gold-outline {
            width: 100%;
            max-width: 250px;
          }
        }
      `}</style>
    </section>
    </>
  );
};

export default Hero;