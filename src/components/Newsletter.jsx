import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="newsletter section">
      <div className="newsletter-container container">
        <div className="newsletter-content">
          <h2>Before You Go, Stay In The Know</h2>

          <div className="newsletter-form-container">
            <p className="newsletter-description">
              <strong>Join the fam and subscribe to our email list!</strong>
            </p>

            <p className="newsletter-note">
              <em>* No spam traffic jams</em>
            </p>

            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="form-group">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="email-input"
                />
                <button type="submit" className="submit-btn">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

