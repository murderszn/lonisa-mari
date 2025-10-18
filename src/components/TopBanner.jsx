import React from 'react';
import './TopBanner.css';

const TopBanner = () => {
  const marqueeText = "Tag, You're It! 🏃‍♀️ • Dazzle The Night Away! ✨ • Rooted in Christ 🙏 • Living On God's Overflow 🌊 • Team Child-like, Not Childish 🎨";
  
  return (
    <div className="top-banner">
      <div className="marquee">
        <div className="marquee-content">
          <span className="marquee-text">{marqueeText}</span>
          <span className="marquee-text">{marqueeText}</span>
          <span className="marquee-text">{marqueeText}</span>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;


