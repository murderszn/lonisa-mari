import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="modern-footer">
      <div className="footer-links-section container">
        <div className="footer-column">
          <h4 className="footer-column-title">Quick Links</h4>
          <div className="footer-column-links">
            <a href="https://www.lonisamari.com/collections/all" className="footer-link" target="_blank" rel="noopener noreferrer">Shop</a>
            <a href="https://www.lonisamari.com/pages/services" className="footer-link" target="_blank" rel="noopener noreferrer">Services</a>
            <a href="https://www.lonisamari.com/pages/portfolio" className="footer-link" target="_blank" rel="noopener noreferrer">Portfolio</a>
            <a href="https://lonisamari.blog/" className="footer-link" target="_blank" rel="noopener noreferrer">Blog</a>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-column-title">Connect</h4>
          <div className="footer-column-links">
            <a href="https://www.lonisamari.com/pages/contact" className="footer-link" target="_blank" rel="noopener noreferrer">Contact</a>
            <a href="https://www.instagram.com/hello_mrs.lo/" className="footer-link" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.pinterest.com/hellomrslo/" className="footer-link" target="_blank" rel="noopener noreferrer">Pinterest</a>
            <a href="https://twitter.com/lonisamari" className="footer-link" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-column-title">Legal</h4>
          <div className="footer-column-links">
            <a href="https://www.lonisamari.com/policies/privacy-policy" className="footer-link" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="https://www.lonisamari.com/policies/terms-of-service" className="footer-link" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            <a href="https://www.lonisamari.com/policies/refund-policy" className="footer-link" target="_blank" rel="noopener noreferrer">Refund Policy</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p className="copyright">© {currentYear} Lonisa Mari. All rights reserved.</p>
        <p className="made-with">Made with 🎨 and ✨ in faith</p>
      </div>
    </footer>
  );
};

export default Footer;
