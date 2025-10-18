import React, { useState } from 'react';
import './NewsletterSignup.css';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    // Add newsletter signup logic here
    setEmail('');
    alert('Thanks for joining Lo\'s Playground!');
  };

  return (
    <div className="newsletter-signup">
      <div className="newsletter-content">
        <h3 className="newsletter-title">Before You Go, Stay In The Know</h3>
        <p className="newsletter-description">
          Join the fam and subscribe to our email list!
        </p>
        <p className="newsletter-note">* No spam traffic jams *</p>
        
        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="form-wrapper">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
