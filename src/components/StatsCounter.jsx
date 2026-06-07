// src/components/StatsCounter.jsx
import { useEffect, useRef, useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaTrophy,
  FaHandshake,
  FaGlobe,
  FaChartLine,
  FaGem,
  FaFire,
  FaRocket,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

// ─── Counter ────────────────────────────────────────────────────────────────
// Waits for the element to enter the viewport before starting the animation.
// startDelay is in milliseconds (e.g. 200, 400).
const Counter = ({ end, duration = 2, suffix = "", startDelay = 0 }) => {
  const [count, setCount] = useState(0);
  const hasAnimatedRef = useRef(false);
  const counterRef = useRef(null);

  const runAnimation = useCallback(() => {
    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        // Ease-out: fast start, slows toward end
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(end * eased));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    const timeoutId = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, startDelay]);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          runAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [runAnimation]);

  return (
    <span ref={counterRef} className="counter-value">
      {count}
      {suffix}
    </span>
  );
};

// ─── Stable particle data — generated once, not on every render ─────────────
const PARTICLES = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: `${(i * 13.7 + 5) % 100}%`, // deterministic spread
  top: `${(i * 17.3 + 8) % 100}%`,
  width: `${(i % 4) + 1}px`,
  height: `${(i % 4) + 1}px`,
  opacity: ((i % 3) + 1) * 0.1,
}));

// ─── Stats data ──────────────────────────────────────────────────────────────
const STATS = [
  {
    icon: FaTrophy,
    value: 15,
    suffix: "+",
    label: "Years Excellence",
    description: "Industry Leadership",
    color: "#D4AF37",
  },
  {
    icon: FaHandshake,
    value: 250,
    suffix: "+",
    label: "Global Partners",
    description: "Trusted Worldwide",
    color: "#FFD700",
  },
  {
    icon: FaGlobe,
    value: 35,
    suffix: "",
    label: "Countries Served",
    description: "Global Presence",
    color: "#D4AF37",
  },
  {
    icon: FaChartLine,
    value: 500,
    suffix: "M+",
    label: "Transaction Value",
    description: "USD Total Volume",
    color: "#FFD700",
  },
];

// ─── StatsCounter ────────────────────────────────────────────────────────────
const StatsCounter = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const backgroundRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section entrance timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 40%",
          toggleActions: "play none none reverse",
        },
      });

      // Fade in background
      tl.fromTo(
        backgroundRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        0,
      );

      // Slide-in title
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0.2,
      );

      // Staggered card entrance — final y is 0 (not 20)
      tl.fromTo(
        ".stat-card",
        { opacity: 0, y: 40, scale: 0.9, rotationX: -15 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "back.out(0.8)",
          clearProps: "all",
        },
        0.4,
      );

      // Floating particles — independent of scroll timeline
      particlesRef.current.forEach((particle, i) => {
        if (!particle) return;
        gsap.to(particle, {
          y: `random(-20, 20)`,
          x: `random(-15, 15)`,
          rotation: `random(0, 360)`,
          duration: 3 + (i % 4),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="stats-section">
      {/* Animated Background */}
      <div ref={backgroundRef} className="stats-background">
        <div className="gradient-overlay" />
        <div className="pattern-overlay" />
      </div>

      {/* Floating Particles — stable data, no Math.random() in JSX */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          ref={(el) => {
            particlesRef.current[p.id] = el;
          }}
          className="stats-particle"
          style={{
            position: "absolute",
            left: p.left,
            top: p.top,
            width: p.width,
            height: p.height,
            background: `rgba(212, 175, 55, ${p.opacity})`,
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      ))}

      <Container className="position-relative" style={{ zIndex: 10 }}>
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-5">
          <span className="stats-badge">Our Achievements</span>
          <h2 className="stats-title">
            Numbers That <span className="gold-text">Speak</span>
          </h2>
          <p className="stats-subtitle">
            Driving excellence in global gold trading with measurable results
          </p>
        </div>

        <Row className="g-4">
          {STATS.map((stat, idx) => (
            <Col lg={3} md={6} key={stat.label} className="mb-4">
              <div className="stat-card">
                <div className="stat-icon-wrapper">
                  <stat.icon className="stat-icon" size={48} />
                  <div className="icon-glow" />
                </div>

                <div className="stat-content">
                  <h2 className="stat-number">
                    {/* startDelay in ms: 0, 200, 400, 600 */}
                    <Counter
                      end={stat.value}
                      suffix={stat.suffix}
                      startDelay={idx * 200}
                    />
                  </h2>
                  <h3 className="stat-label">{stat.label}</h3>
                  <p className="stat-description">{stat.description}</p>
                </div>

                <div className="stat-progress">
                  <div className="progress-bar" />
                </div>

                <div className="stat-hover-effect" />
              </div>
            </Col>
          ))}
        </Row>

        {/* Trust Indicators */}
        <div className="trust-indicators mt-5 pt-4">
          <Row className="align-items-center">
            <Col md={6}>
              <div className="trust-badge">
                <FaGem className="me-2" />
                <span>Certified Gold Trading Platform</span>
              </div>
            </Col>
            <Col md={6}>
              <div className="trust-stats">
                <div className="trust-item">
                  <FaFire className="trust-icon" />
                  <span>100% Verified Suppliers</span>
                </div>
                <div className="trust-item">
                  <FaRocket className="trust-icon" />
                  <span>24/7 Trading Support</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Plain <style> tag — works in any React app, not just Next.js */}
      <style>{`
        .stats-section {
          position: relative;
          padding: 100px 0;
          overflow: hidden;
          background: linear-gradient(135deg, #0a0a0a 0%, #121212 100%);
        }

        /* Background */
        .stats-background {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          opacity: 0;
        }

        .gradient-overlay {
          position: absolute;
          width: 100%; height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
          animation: pulse 4s ease-in-out infinite;
        }

        .pattern-overlay {
          position: absolute;
          width: 100%; height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.5;
        }

        /* Badge */
        .stats-badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 50px;
          color: #D4AF37;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 1px;
          margin-bottom: 20px;
          backdrop-filter: blur(10px);
        }

        /* Title */
        .stats-title {
          font-size: 2.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .gold-text {
          background: linear-gradient(135deg, #D4AF37, #FFD700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stats-subtitle {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Card */
        .stat-card {
          position: relative;
          background: linear-gradient(135deg, rgba(18,18,18,0.8), rgba(26,26,26,0.9));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 20px;
          padding: 40px 20px;
          text-align: center;
          transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
          overflow: hidden;
          height: 100%;
          cursor: pointer;
        }

        .stat-card:hover {
          transform: translateY(-10px);
          border-color: rgba(212, 175, 55, 0.5);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        /* Icon */
        .stat-icon-wrapper {
          position: relative;
          display: inline-block;
          margin-bottom: 25px;
        }

        .stat-icon {
          color: #D4AF37;
          filter: drop-shadow(0 2px 4px rgba(212, 175, 55, 0.3));
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .stat-card:hover .stat-icon {
          transform: scale(1.1) rotate(5deg);
          filter: drop-shadow(0 4px 8px rgba(212, 175, 55, 0.5));
        }

        .icon-glow {
          position: absolute;
          top: 50%; left: 50%;
          width: 80px; height: 80px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.2), transparent);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .stat-card:hover .icon-glow {
          opacity: 1;
        }

        /* Number */
        .stat-number {
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #D4AF37, #FFD700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
          letter-spacing: 2px;
        }

        .counter-value {
          display: inline-block;
        }

        /* Label */
        .stat-label {
          font-size: 1.2rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .stat-description {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }

        /* Progress bar */
        .stat-progress {
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 3px;
          background: rgba(212, 175, 55, 0.1);
        }

        .progress-bar {
          width: 0%;
          height: 100%;
          background: linear-gradient(90deg, #D4AF37, #FFD700);
          transition: width 1s ease;
        }

        .stat-card:hover .progress-bar {
          width: 100%;
        }

        /* Hover overlay */
        .stat-hover-effect {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .stat-card:hover .stat-hover-effect {
          opacity: 1;
        }

        /* Trust indicators */
        .trust-indicators {
          border-top: 1px solid rgba(212, 175, 55, 0.2);
          padding-top: 40px;
        }

        .trust-badge {
          display: inline-flex;
          align-items: center;
          padding: 12px 24px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 50px;
          color: #D4AF37;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .trust-stats {
          display: flex;
          gap: 30px;
          justify-content: flex-end;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
        }

        .trust-icon {
          color: #D4AF37;
          font-size: 1rem;
        }

        /* Keyframes */
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.05); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .stats-section  { padding: 60px 0; }
          .stats-title    { font-size: 2rem; }
          .stats-subtitle { font-size: 0.9rem; }
          .stat-number    { font-size: 2.5rem; }
          .stat-label     { font-size: 1rem; }
          .trust-stats    { justify-content: center; margin-top: 20px; flex-wrap: wrap; }
          .trust-badge    { display: flex; justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default StatsCounter;
