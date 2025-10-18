import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="modern-header">
      <div className="header-container container">
        <div className="header-left">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <span className="logo-text">Lonisa Mari</span>
            <span className="logo-tagline">Creative Professional</span>
          </Link>
        </div>

        <nav className={`header-nav ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
          <Link to="/services" className="nav-link" onClick={closeMobileMenu}>Services</Link>
          <Link to="/portfolio" className="nav-link" onClick={closeMobileMenu}>Portfolio</Link>
          <Link to="/floral" className="nav-link" onClick={closeMobileMenu}>Floral</Link>
          <a href="https://www.lonisamari.com/collections/all" className="nav-link" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>Shop</a>
          <a href="https://lonisamari.blog/" className="nav-link" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>Blog</a>
          <a href="https://www.lonisamari.com/pages/contact" className="nav-link-cta" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>Contact</a>
        </nav>

        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
