import React from 'react';
import './TestimonialsBanner.css';

const TestimonialsBanner = ({ onConsultationOpen }) => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Wedding Client",
      image: "/images/lonisa-home.webp",
      content: "Lonisa created the most beautiful floral arrangements for our wedding. Her attention to detail and creative vision made our special day unforgettable. Every guest commented on how stunning everything looked!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Art Commission Client",
      image: "/images/lonisa-art.webp",
      content: "Working with Lonisa on custom illustrations for our brand was incredible. She captured exactly what we envisioned and delivered beyond our expectations. Highly recommend her artistic talents!",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <section className="testimonials-banner section">
      <div className="banner-background">
        <img
          src="/images/lonisa-art.webp"
          alt="Lonisa Mari's creative workspace"
          className="background-image"
        />
        <div className="banner-overlay"></div>
      </div>

      <div className="banner-content container">
        <div className="banner-header">
          <h2 className="banner-title">What Clients Say</h2>
          <p className="banner-subtitle">Real stories from creative collaborations</p>
        </div>

        <div className="testimonials-carousel">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-slide">
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  {renderStars(testimonial.rating)}
                </div>

                <blockquote className="testimonial-quote">
                  "{testimonial.content}"
                </blockquote>

                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="banner-cta">
          <button className="cta-button" onClick={onConsultationOpen}>
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsBanner;
