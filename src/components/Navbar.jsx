// src/components/Navbar.jsx
import { useState, useEffect, useRef } from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { GiGoldBar } from 'react-icons/gi';
import gsap from 'gsap';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null);
  const brandRef = useRef(null);
  const linksRef = useRef([]);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animations on mount
  useEffect(() => {
    // Animate brand
    gsap.fromTo(brandRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
    );

    // Animate nav links with stagger
    gsap.fromTo(linksRef.current,
      { opacity: 0, y: -20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1,
        ease: "back.out(0.7)",
        delay: 0.3
      }
    );
  }, []);

  // Animate on scroll state change
  useEffect(() => {
    if (navbarRef.current) {
      gsap.to(navbarRef.current, {
        duration: 0.4,
        backdropFilter: scrolled ? "blur(0px)" : "blur(10px)",
        boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.15)" : "0 5px 20px rgba(0,0,0,0.05)",
        ease: "power2.inOut"
      });
    }
  }, [scrolled]);

  // Animate mobile menu toggle
  const handleToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    gsap.to(toggleRef.current, {
      duration: 0.3,
      rotate: mobileMenuOpen ? 0 : 90,
      ease: "back.out(0.5)"
    });
  };

  // Hover animation for nav links
  const handleLinkHover = (index, isEnter) => {
    gsap.to(linksRef.current[index], {
      duration: 0.3,
      y: isEnter ? -2 : 0,
      color: isEnter ? "#D4AF37" : "#ffffff",
      ease: "power2.out"
    });
  };

  return (
    <>
      <BSNavbar 
        ref={navbarRef}
        expand="lg" 
        fixed="top" 
        className={`navbar-premium ${scrolled ? 'scrolled' : 'transparent'} ${mobileMenuOpen ? 'menu-open' : ''}`}
        expanded={mobileMenuOpen}
        onToggle={handleToggle}
      >
        <Container>
          <BSNavbar.Brand 
            as={Link} 
            to="/" 
            className="d-flex align-items-center brand-container"
            ref={brandRef}
            onClick={() => setMobileMenuOpen(false)}
          >
            <GiGoldBar className="gold-icon me-2" size={36} />
            <div className="brand-text">
              <span className="fw-bold playfair brand-main">AMIRSAD</span>
              <span className="gold-text fw-bold brand-energy"> ENERGY CONSULT</span>
            </div>
          </BSNavbar.Brand>
          
          <BSNavbar.Toggle 
            aria-controls="basic-navbar-nav"
            className="custom-toggler"
            ref={toggleRef}
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </BSNavbar.Toggle>
          
          <BSNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {['Home', 'About', 'Services', 'Suppliers', 'Buyers', 'Contact'].map((item, index) => (
                <Nav.Link 
                  key={item}
                  as={Link} 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className={`nav-link-premium ${location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'active' : ''}`}
                  ref={el => linksRef.current[index] = el}
                  onMouseEnter={() => handleLinkHover(index, true)}
                  onMouseLeave={() => handleLinkHover(index, false)}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="link-text">{item}</span>
                  <span className="link-underline"></span>
                </Nav.Link>
              ))}
            </Nav>
          </BSNavbar.Collapse>
        </Container>
      </BSNavbar>

      <style>{`
        .navbar-premium {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 20px 0;
          position: fixed;
          width: 100%;
          z-index: 1000;
        }
        
        .navbar-premium.transparent {
          background: rgba(10, 10, 10, 0.75);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
        }
        
        .navbar-premium.scrolled {
          background: rgba(8, 8, 8, 0.95);
          backdrop-filter: blur(0px);
          padding: 12px 0;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }
        
        .navbar-premium.menu-open {
          background: rgba(8, 8, 8, 0.98);
          backdrop-filter: blur(20px);
        }
        
        /* Brand Styles */
        .brand-container {
          text-decoration: none;
          transition: transform 0.3s ease;
        }
        
        .brand-container:hover {
          transform: scale(1.02);
        }
        
        .gold-icon {
          color: #D4AF37;
          filter: drop-shadow(0 2px 4px rgba(212, 175, 55, 0.3));
          transition: all 0.3s ease;
        }
        
        .brand-container:hover .gold-icon {
          transform: rotate(5deg);
          filter: drop-shadow(0 4px 8px rgba(212, 175, 55, 0.5));
        }
        
        .brand-main {
          font-size: 1.6rem;
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .brand-energy {
          font-size: 1.6rem;
          background: linear-gradient(135deg, #D4AF37 0%, #FFD700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Custom Toggle Button */
        .custom-toggler {
          border: none;
          background: transparent;
          padding: 10px;
          width: 44px;
          height: 44px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 6px;
        }
        
        .hamburger-line {
          width: 24px;
          height: 2px;
          background: linear-gradient(90deg, #D4AF37, #ffffff);
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        
        .custom-toggler:hover .hamburger-line {
          width: 28px;
        }
        
        /* Nav Links */
        .nav-link-premium {
          color: rgba(255, 255, 255, 0.85) !important;
          font-weight: 500;
          margin: 0 12px;
          padding: 8px 0 !important;
          position: relative;
          transition: color 0.3s ease;
          font-size: 1rem;
          letter-spacing: 0.5px;
          cursor: pointer;
        }
        
        .link-text {
          position: relative;
          z-index: 1;
        }
        
        .link-underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #D4AF37, #FFD700);
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 2px;
        }
        
        .nav-link-premium:hover .link-underline,
        .nav-link-premium.active .link-underline {
          width: 100%;
        }
        
        .nav-link-premium.active {
          color: #D4AF37 !important;
        }
        
        /* Responsive Styles */
        @media (max-width: 992px) {
          .navbar-premium {
            padding: 16px 0;
          }
          
          .navbar-premium.scrolled {
            padding: 10px 0;
          }
          
          .brand-main,
          .brand-energy {
            font-size: 1.3rem;
          }
          
          .gold-icon {
            size: 28px;
          }
          
          .nav-link-premium {
            margin: 8px 0;
            text-align: center;
            padding: 12px 0 !important;
          }
          
          .link-underline {
            bottom: 0;
          }
          
          .navbar-collapse {
            margin-top: 20px;
            padding: 20px 0;
          }
        }
        
        /* Desktop hover effects */
        @media (min-width: 993px) {
          .nav-link-premium::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: radial-gradient(circle, rgba(212, 175, 55, 0.1), transparent);
            transition: all 0.4s ease;
            border-radius: 50%;
            transform: translate(-50%, -50%);
          }
          
          .nav-link-premium:hover::before {
            width: 80px;
            height: 80px;
          }
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default Navbar;