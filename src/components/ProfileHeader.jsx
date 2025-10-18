import React from 'react';
import './ProfileHeader.css';

const ProfileHeader = ({ onConsultationOpen }) => {
  return (
    <div className="profile-header">
      <div className="profile-container">
        <div className="profile-left">
          <div className="profile-avatar">
            <img
              src="/images/lonisa-home.webp"
              alt="Lonisa Mari - Artist, Entertainer, and Creative Professional"
              className="avatar-image"
            />
            <div className="avatar-glow"></div>
          </div>
        </div>
        <div className="profile-right">
          <h1 className="profile-name">Lonisa Mari</h1>
          <p className="profile-tagline">Creative Professional & Faith-Based Artist</p>
          <div className="profile-bio-section">
            <p className="profile-bio">
              <strong className="bio-highlight">Rooted in Christ, the True Vine (John 15:1)</strong>
              <span className="bio-text">
                <strong className="bio-name">Lonisa Mari</strong>'s life is a vibrant tapestry of creativity and faith. In 2022, she transitioned from
                the structured world of IT to fully embrace her calling in creative service.
              </span>
            </p>
            <p className="profile-bio-extended">
              Through her artistic talents, Lonisa transforms ideas into stunning visual art, delivers captivating
              performances, and applies her keen eye for beauty to floral design, fashion styling, and organizational
              expertise. Her passion lies in sharing Christ's love while helping others discover their God-dependent identity.
              <strong className="signature-phrase">Team child-like, not childish.</strong>
            </p>
          </div>
          <div className="profile-cta">
            <button className="cta-button primary" onClick={onConsultationOpen}>
              Book a Consultation
            </button>
            <button className="cta-button secondary" onClick={() => window.open('https://www.lonisamari.com/pages/portfolio', '_blank')}>
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
