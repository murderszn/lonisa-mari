import React from 'react';
import './SocialLinks.css';

const SocialLinks = () => {
  const socials = [
    { name: 'Instagram', icon: '📷', link: 'https://www.instagram.com/hello_mrs.lo/', color: 'pink' },
    { name: 'Pinterest', icon: '📌', link: 'https://www.pinterest.com/hellomrslo/', color: 'red' },
    { name: 'Twitter', icon: '🐦', link: 'https://twitter.com/lonisamari', color: 'blue' },
    { name: 'Blog', icon: '📝', link: 'https://lonisamari.blog/', color: 'teal' },
  ];

  return (
    <div className="social-links">
      <div className="social-container">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            className={`social-link social-${social.color}`}
            aria-label={social.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-icon">{social.icon}</span>
            <span className="social-name">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;


