// src/components/TestimonialsSlider.jsx
import  { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import gsap from 'gsap';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  { name: 'Michael Chen', position: 'CEO, Asian Precious Metals', text: 'AMIRSAD\'s verification process gave us complete confidence. Their diligence in supplier verification is unmatched in the industry.', rating: 5 },
  { name: 'Sarah Williams', position: 'Director, London Bullion Exchange', text: 'Exceptional service and deep market knowledge. They facilitated our largest gold transaction seamlessly.', rating: 5 },
  { name: 'Ahmed Al-Rashid', position: 'Head of Trading, Gulf Gold Group', text: 'The transparency and professionalism of AMIRSAD sets a new standard in gold trading facilitation.', rating: 5 },
];

const TestimonialsSlider = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo('.testimonial-title', 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="testimonials-section section-padding" style={{ background: '#F5F5F5' }}>
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={7}>
            <h2 className="section-title">Trusted by Industry Leaders</h2>
            <p className="section-subtitle">What our global partners say about working with AMIRSAD</p>
          </Col>
        </Row>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{ 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial-card p-4 bg-white rounded-4 shadow-sm">
                <FaQuoteLeft className="gold-text mb-3" size={32} />
                <p className="mb-4 text-secondary">{t.text}</p>
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="mb-0 fw-bold">{t.name}</h6>
                    <small className="gold-text">{t.position}</small>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default TestimonialsSlider;