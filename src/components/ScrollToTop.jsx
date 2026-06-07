// src/components/ScrollToTop.jsx
import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FaArrowUp } from "react-icons/fa";

gsap.registerPlugin(ScrollToPlugin);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const scrollToTop = useCallback(() => {
    gsap.to(window, {
      duration: 1,
      scrollTo: 0,
      ease: "power3.inOut",
    });

    const button = document.querySelector(".scroll-top-button");
    if (button) {
      gsap.fromTo(
        button,
        { scale: 1 },
        {
          scale: 0.9,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
          ease: "power2.out",
        },
      );
    }
  }, []);

  // Show/hide button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldBeVisible = scrollPosition > 300;
      setIsVisible(shouldBeVisible);
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  // Route change animation
  useEffect(() => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      gsap.fromTo(
        mainContent,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      );
    }

    if (window.scrollY > 0) {
      gsap.to(window, {
        duration: Math.min(window.scrollY / 1000, 0.8),
        scrollTo: 0,
        ease: "power3.inOut",
      });
    }
  }, [pathname]);

  // Update scroll progress
  useEffect(() => {
    const updateProgress = () => {
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      const progressCircle = document.querySelector(".scroll-progress-circle");
      if (progressCircle) {
        const circumference = 2 * Math.PI * 45;
        const offset = circumference - scrollPercent * circumference;
        progressCircle.style.strokeDashoffset = offset;
      }

      const progressFill = document.querySelector(".progress-fill");
      if (progressFill) {
        progressFill.style.width = `${scrollPercent * 100}%`;
      }
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div>
      {/* Scroll to Top Button with Progress Indicator */}
      <button
        className={`scroll-top-button ${isVisible ? "visible" : "hidden"}`}
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Scroll to top"
      >
        <svg
          className="scroll-progress"
          width="100"
          height="100"
          viewBox="0 0 100 100"
        >
          <circle
            className="scroll-progress-bg"
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(212, 175, 55, 0.1)"
            strokeWidth="4"
          />
          <circle
            className="scroll-progress-circle"
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="282.743"
            strokeDashoffset="282.743"
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="scroll-top-icon">
          <FaArrowUp className={`arrow-icon ${isHovered ? "hovered" : ""}`} />
        </div>
      </button>

      {/* Animated Scroll Progress Bar (Alternative Style) */}
      <div className="scroll-progress-bar">
        <div className="progress-fill"></div>
      </div>

      <style>
        {`
        .scroll-top-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(18, 18, 18, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(212, 175, 55, 0.3);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          transition: all 0.3s ease;
          opacity: 0;
          transform: scale(0);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }

        .scroll-top-button.visible {
          opacity: 1;
          transform: scale(1);
        }

        .scroll-top-button:hover {
          background: rgba(212, 175, 55, 0.15);
          border-color: #D4AF37;
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.2);
        }

        .scroll-progress {
          position: absolute;
          top: -5px;
          left: -5px;
          width: 70px;
          height: 70px;
          pointer-events: none;
        }

        .scroll-progress-bg {
          stroke: rgba(212, 175, 55, 0.1);
        }

        .scroll-progress-circle {
          transition: stroke-dashoffset 0.1s linear;
        }

        .scroll-top-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .arrow-icon {
          color: #D4AF37;
          font-size: 24px;
          transition: all 0.3s ease;
        }

        .arrow-icon.hovered {
          transform: translateY(-3px);
        }

        /* Progress Bar Alternative */
        .scroll-progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: rgba(212, 175, 55, 0.1);
          z-index: 1000;
          pointer-events: none;
        }

        .progress-fill {
          width: 0%;
          height: 100%;
          background: linear-gradient(90deg, #D4AF37, #FFD700);
          transition: width 0.1s linear;
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
        }

        /* Animated Ripple Effect on Click */
        .scroll-top-button::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.4), transparent);
          opacity: 0;
          pointer-events: none;
        }

        .scroll-top-button:active::after {
          animation: ripple 0.6s ease-out;
        }

        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 0.5;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .scroll-top-button {
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
          }

          .scroll-progress {
            width: 60px;
            height: 60px;
          }

          .arrow-icon {
            font-size: 20px;
          }

          .scroll-progress-bar {
            height: 2px;
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .scroll-top-button {
            background: rgba(10, 10, 10, 0.95);
          }
        }

        /* Reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .scroll-top-button,
          .arrow-icon,
          .scroll-progress-circle {
            transition: none;
          }
          
          .scroll-top-button::after {
            animation: none;
          }
        `}
      </style>
    </div>
  );
};

export default ScrollToTop;
