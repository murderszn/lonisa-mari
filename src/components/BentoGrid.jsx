import React from 'react';
import { Link } from 'react-router-dom';
import './BentoGrid.css';

const BentoGrid = ({ onConsultationOpen }) => {
  const services = [
    // Primary Services - Bookable Consultations
    {
      id: 1,
      title: "Art Commissions",
      description: "Custom illustrations & creative designs tailored to your vision",
      icon: "🎨",
      category: "primary",
      action: "Book Consultation",
      link: "#consultation",
      color: "primary",
      bgImage: "/images/lonisa-art.webp",
      features: ["Custom Portraits", "Brand Illustrations", "Faith-Based Art"],
      isConsultation: true
    },
    {
      id: 2,
      title: "Floral Design",
      description: "Beautiful arrangements for events, weddings & special occasions",
      icon: "🌸",
      category: "primary",
      action: "Book Consultation",
      link: "/floral",
      color: "secondary",
      bgImage: "/images/Floral – Lonisa Mari5_files/20190216_121809.jpg",
      isInternal: true,
      badge: "Portfolio",
      features: ["Wedding Flowers", "Event Decor", "Custom Arrangements"]
    },
    {
      id: 3,
      title: "Speaking & Events",
      description: "Inspiring talks on faith, leadership & creative living",
      icon: "🎤",
      category: "primary",
      action: "Book Speaking",
      link: "#consultation",
      color: "primary",
      bgImage: null,
      features: ["Corporate Events", "Women's Groups", "Community Talks"],
      isConsultation: true
    },

    // Secondary Services
    {
      id: 4,
      title: "Shop Art Store",
      description: "Ready-made journals, prints & faith-based merchandise",
      icon: "🛍️",
      category: "secondary",
      action: "Shop Now",
      link: "https://www.lonisamari.com/collections/all",
      color: "secondary",
      bgImage: "/images/lonisa-book.webp"
    },
    {
      id: 5,
      title: "Education Services",
      description: "Homeschool curriculum & leadership development",
      icon: "📚",
      category: "secondary",
      action: "Learn More",
      link: "https://www.lonisamari.com/pages/services",
      color: "tertiary",
      bgImage: null
    },
    {
      id: 6,
      title: "Content & Blog",
      description: "Faith & life inspiration through writing & social media",
      icon: "📝",
      category: "secondary",
      action: "Read Blog",
      link: "https://lonisamari.blog/",
      color: "primary",
      bgImage: "/images/lonisa-home.webp"
    },

    // Tertiary - Connection & About
    {
      id: 7,
      title: "Let's Collaborate",
      description: "Partnerships, collaborations & creative projects",
      icon: "🤝",
      category: "tertiary",
      action: "Get In Touch",
      link: "https://www.lonisamari.com/pages/contact",
      color: "secondary",
      bgImage: null
    },
    {
      id: 8,
      title: "About My Journey",
      description: "From IT professional to creative entrepreneur",
      icon: "💫",
      category: "tertiary",
      action: "Read Story",
      link: "https://www.lonisamari.com/pages/about",
      color: "tertiary",
      bgImage: null
    }
  ];

  return (
    <section className="bento-grid section">
      <div className="container">
        <div className="services-intro">
          <h2 className="services-title">How Can I Help You Create?</h2>
          <p className="services-subtitle">Explore my services and let's bring your vision to life</p>
        </div>

        <div className="grid-container">
          {services.map((service) => {
          const cardContent = (
            <>
              {service.badge && <div className="card-badge">{service.badge}</div>}
              <div className="card-content">
                <div className="card-icon">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>

                {service.features && (
                  <div className="card-features">
                    {service.features.map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                )}

                <div className="card-action">
                  <span className="action-text">{service.action}</span>
                  <div className="action-arrow">→</div>
                </div>
              </div>
            </>
          );

          const cardStyle = service.bgImage ? {
            '--bg-image': `url(${service.bgImage})`
          } : {};

          if (service.isConsultation) {
            return (
              <button
                key={service.id}
                onClick={onConsultationOpen}
                className={`bento-card bento-${service.color} category-${service.category}`}
                style={cardStyle}
                data-category={service.category}
              >
                {cardContent}
              </button>
            );
          } else if (service.isInternal) {
            return (
              <Link
                key={service.id}
                to={service.link}
                className={`bento-card bento-${service.color} category-${service.category}`}
                style={cardStyle}
                data-category={service.category}
              >
                {cardContent}
              </Link>
            );
          } else {
            return (
              <a
                key={service.id}
                href={service.link}
                className={`bento-card bento-${service.color} category-${service.category}`}
                style={cardStyle}
                target="_blank"
                rel="noopener noreferrer"
                data-category={service.category}
              >
                {cardContent}
              </a>
            );
          }
        })}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
