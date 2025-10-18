import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = ({ onConsultationOpen }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const portfolioItems = [
    // Art & Illustrations
    {
      id: 1,
      title: "Faith-Based Illustrations",
      category: "art",
      description: "Custom illustrations inspired by biblical themes and Christian values",
      image: "/images/lonisa-art.webp",
      tags: ["Digital Art", "Faith-Based", "Custom Illustrations"],
      featured: true
    },
    {
      id: 2,
      title: "Portrait Commissions",
      category: "art",
      description: "Personalized portrait artwork capturing unique personalities and stories",
      image: "/images/lonisa-home.webp",
      tags: ["Portraits", "Commission Work", "Custom Art"]
    },

    // Floral Design
    {
      id: 3,
      title: "Wedding Arrangements",
      category: "floral",
      description: "Elegant floral designs for memorable wedding celebrations",
      image: "/images/Floral – Lonisa Mari5_files/20190216_121809.jpg",
      tags: ["Weddings", "Event Florals", "Bridal Bouquets"],
      featured: true
    },
    {
      id: 4,
      title: "Event Decor",
      category: "floral",
      description: "Stunning floral installations for corporate and social events",
      image: "/images/Floral – Lonisa Mari6_files/20190216_121809.jpg",
      tags: ["Corporate Events", "Centerpieces", "Venue Styling"]
    },
    {
      id: 5,
      title: "Seasonal Arrangements",
      category: "floral",
      description: "Beautiful seasonal and holiday floral displays",
      image: "/images/Floral – Lonisa Mari7_files/20190216_121809.jpg",
      tags: ["Seasonal", "Holiday Decor", "Home Styling"]
    },

    // Speaking & Events
    {
      id: 6,
      title: "Women's Leadership Workshops",
      category: "speaking",
      description: "Empowering workshops on faith, leadership, and personal growth",
      image: "/images/lonisa-home.webp",
      tags: ["Leadership", "Workshops", "Women's Ministry"],
      featured: true
    },
    {
      id: 7,
      title: "Corporate Speaking",
      category: "speaking",
      description: "Inspiring talks for corporate audiences on creativity and faith",
      image: "/images/lonisa-art.webp",
      tags: ["Corporate", "Motivational Speaking", "Professional Development"]
    },

    // Journals & Products
    {
      id: 8,
      title: "Faith-Based Journals",
      category: "products",
      description: "Beautiful journals designed to inspire spiritual growth and reflection",
      image: "/images/lonisa-book.webp",
      tags: ["Journals", "Devotional", "Christian Living"],
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Work', count: portfolioItems.length },
    { id: 'art', name: 'Art & Illustrations', count: portfolioItems.filter(item => item.category === 'art').length },
    { id: 'floral', name: 'Floral Design', count: portfolioItems.filter(item => item.category === 'floral').length },
    { id: 'speaking', name: 'Speaking & Events', count: portfolioItems.filter(item => item.category === 'speaking').length },
    { id: 'products', name: 'Products', count: portfolioItems.filter(item => item.category === 'products').length }
  ];

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const featuredItems = portfolioItems.filter(item => item.featured);

  return (
    <div className="portfolio-page">
      <div className="portfolio-header">
        <h1 className="portfolio-title">Portfolio & Work</h1>
        <p className="portfolio-subtitle">
          Explore my creative journey through art, floral design, speaking engagements, and faith-inspired products
        </p>
        <button className="portfolio-cta" onClick={onConsultationOpen}>
          Start Your Project
        </button>
      </div>

      {/* Featured Work Section */}
      <section className="featured-work">
        <h2 className="section-title">Featured Work</h2>
        <div className="featured-grid">
          {featuredItems.map(item => (
            <div key={item.id} className="featured-card">
              <div className="featured-image">
                <img src={item.image} alt={item.title} />
                <div className="featured-overlay">
                  <div className="featured-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="featured-tags">
                      {item.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section className="portfolio-filter">
        <div className="filter-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
              <span className="count">({category.count})</span>
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="portfolio-item">
            <div className="portfolio-image">
              <img src={item.image} alt={item.title} />
              <div className="portfolio-overlay">
                <div className="portfolio-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="portfolio-tags">
                    {item.tags.map(tag => (
                      <span key={tag} className="portfolio-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="portfolio-cta-section">
        <div className="cta-content">
          <h2>Ready to Bring Your Vision to Life?</h2>
          <p>Let's collaborate on your next creative project</p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={onConsultationOpen}>
              Book a Consultation
            </button>
            <button className="btn-secondary" onClick={() => window.open('https://www.lonisamari.com/collections/all', '_blank')}>
              Shop Art Store
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
