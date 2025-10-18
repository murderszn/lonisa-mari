import React, { useState, useEffect } from 'react';
import { subscribeToNewsletter } from '../services/api';
import './EmailModal.css';

const EmailModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show modal after a brief delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // 2 second delay

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        const result = await subscribeToNewsletter(email, 'modal-popup');

        if (result.success) {
          alert(result.message || 'Thanks for joining Lo\'s Playground! 🎨');
          // Store in localStorage to not show again
          localStorage.setItem('emailCaptured', 'true');
          setEmail('');
          handleClose();
        } else {
          alert('Something went wrong. Please try again.');
        }
      } catch (error) {
        console.error('Subscription error:', error);
        alert('Failed to subscribe. Please try again later.');
      }
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300); // Wait for animation to complete
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="email-modal-overlay" onClick={handleOverlayClick}>
      <div className="email-modal">
        <button className="modal-close" onClick={handleClose}>×</button>

        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">Welcome to Lo's Playground! 🎨</h2>
            <p className="modal-subtitle">Join the fam and stay in the know</p>
          </div>

          <div className="modal-body">
            <p className="modal-description">
              Get exclusive updates, behind-the-scenes content, and be the first to know about new artwork, events, and faith-inspired creations!
            </p>

            <form onSubmit={handleSubmit} className="modal-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="modal-email-input"
              />
              <button type="submit" className="modal-submit-btn">
                Join the Fam! ✨
              </button>
            </form>

            <p className="modal-disclaimer">
              No spam, just inspiration. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;
