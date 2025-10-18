import React from 'react';
import './Services.css';

const Services = ({ onConsultationOpen }) => {
  const services = [
    {
      id: 1,
      title: "Virtual Consult: 1 Hour Walk & Talk",
      price: "$75.00",
      description: "One-on-one virtual consultation to discuss your creative needs, faith-based projects, or organizational goals. Let's walk through your vision together.",
      features: [
        "60-minute video call",
        "Personalized guidance",
        "Action plan & next steps",
        "Follow-up resources"
      ],
      image: "/images/lonisa-home.webp",
      shopifyUrl: "https://www.lonisamari.com/pages/services"
    },
    {
      id: 2,
      title: "Custom Floral Design",
      price: "$3,000.00",
      description: "Stunning floral arrangements for weddings, events, and special occasions. From intimate gatherings to grand celebrations, I'll bring your floral vision to life.",
      features: [
        "Custom design consultation",
        "Premium fresh flowers",
        "Event setup & delivery",
        "Perfect for weddings & events"
      ],
      image: "/images/Floral – Lonisa Mari5_files/20190216_121809.jpg",
      shopifyUrl: "https://www.lonisamari.com/pages/services",
      featured: true
    },
    {
      id: 3,
      title: "3 Day Organization Intensive",
      price: "$3,000.00",
      description: "Transform your space with a comprehensive 3-day organization intensive. Perfect for homes, offices, or creative spaces needing a complete organizational overhaul.",
      features: [
        "3 full days of service",
        "Complete space transformation",
        "Custom organizing systems",
        "Ongoing maintenance plan"
      ],
      image: "/images/lonisa-art.webp",
      shopifyUrl: "https://www.lonisamari.com/pages/services",
      featured: true
    },
    {
      id: 4,
      title: "Event Planning & Coordination",
      price: "$1,500.00",
      description: "Full-service event planning and day-of coordination. From concept to execution, I'll ensure your event runs smoothly and reflects your unique vision.",
      features: [
        "Complete event planning",
        "Vendor coordination",
        "Day-of management",
        "Timeline & budget planning"
      ],
      image: "/images/lonisa-home.webp",
      shopifyUrl: "https://www.lonisamari.com/pages/services"
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content container">
          <h1 className="services-hero-title">Services</h1>
          <p className="services-hero-subtitle">
            Professional creative services designed to bring your vision to life. From intimate consultations to grand celebrations, I'm here to serve with excellence and faith.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="services-container container">
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className={`service-card ${service.featured ? 'featured' : ''}`}>
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  {service.featured && <div className="featured-badge">Popular</div>}
                </div>
                
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <div className="service-price">{service.price} USD</div>
                  <p className="service-description">{service.description}</p>
                  
                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index}>
                        <span className="feature-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="service-actions">
                    <button 
                      className="service-btn primary"
                      onClick={onConsultationOpen}
                    >
                      Book Now
                    </button>
                    <button 
                      className="service-btn secondary"
                      onClick={() => window.open(service.shopifyUrl, '_blank')}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="services-cta-content container">
          <h2>Not Sure Which Service Is Right for You?</h2>
          <p>Book a free 15-minute discovery call to discuss your needs and find the perfect service package.</p>
          <button className="cta-btn" onClick={onConsultationOpen}>
            Schedule Discovery Call
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="services-faq">
        <div className="faq-container container">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I book a service?</h3>
              <p>Click "Book Now" on any service to start the consultation process, or visit our Shopify store to purchase directly.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you offer payment plans?</h3>
              <p>Yes! For services over $1,000, we offer flexible payment plans. Discuss options during your consultation.</p>
            </div>
            
            <div className="faq-item">
              <h3>What's your cancellation policy?</h3>
              <p>We require 48-hour notice for cancellations. Deposits are non-refundable but can be applied to future services.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you travel for services?</h3>
              <p>Yes! Travel fees may apply for locations outside the local area. Contact us to discuss your location.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;


