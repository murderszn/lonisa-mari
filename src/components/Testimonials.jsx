import React from 'react';
import './Testimonials.css';

const Testimonials = ({ onConsultationOpen }) => {
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
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Corporate Client",
      image: "/images/lonisa-art.webp",
      content: "We hired Lonisa for custom artwork for our office space. The pieces perfectly capture our company culture and values. Her professionalism and creativity made the entire process enjoyable.",
      rating: 5
    }
  ];

  const stats = [
    { number: "50+", label: "Happy Clients" },
    { number: "100+", label: "Projects Completed" },
    { number: "5", label: "Years Experience" },
    { number: "25+", label: "Speaking Events" }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">What Clients Say</h2>
          <p className="testimonials-subtitle">
            Don't just take my word for it - hear from the clients who've experienced my creative services
          </p>
        </div>

        {/* Stats Section */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-meta">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>

              <div className="testimonial-content">
                <blockquote className="testimonial-quote">
                  "{testimonial.content}"
                </blockquote>
              </div>

              <div className="testimonial-footer">
                <div className="quote-mark">"</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="testimonials-cta">
          <h3>Ready to Join Our Happy Clients?</h3>
          <p>Let's discuss how I can help bring your creative vision to life</p>
          <button className="cta-button primary" onClick={onConsultationOpen}>Start Your Project</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
