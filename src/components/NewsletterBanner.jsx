import React, { useState } from 'react';
import { subscribeToNewsletter } from '../services/api';
import './NewsletterBanner.css';

const NewsletterBanner = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        const result = await subscribeToNewsletter(email, 'newsletter-banner');

        if (result.success) {
          alert(result.message || 'Thanks for joining Lo\'s Playground!');
          setEmail('');
        } else {
          alert('Something went wrong. Please try again.');
        }
      } catch (error) {
        console.error('Subscription error:', error);
        alert('Failed to subscribe. Please try again later.');
      }
    }
  };

  return (
    <section className="newsletter-banner section">
      <div className="newsletter-banner-overlay">
        <div className="newsletter-banner-content container">
          <h2 className="newsletter-banner-title">Before You Go, Stay In The Know</h2>
          <p className="newsletter-banner-subtitle">
            Join the fam and subscribe to our email list!
          </p>

          <form onSubmit={handleSubmit} className="newsletter-banner-form">
            <div className="newsletter-form-inline">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="newsletter-banner-input"
              />
              <button type="submit" className="newsletter-banner-btn">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;
