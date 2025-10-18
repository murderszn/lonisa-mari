import React from 'react';
import './ProductShowcase.css';

const ProductShowcase = () => {
  return (
    <section className="product-showcase section">
      <div className="product-container container">
        <div className="limited-edition">
          <h2>Limited Edition: Sweet Dream Journal</h2>
          <p className="limited-text">Snag it quick!</p>
        </div>

        <div className="illustration-spotlight">
          <h3>Illustration Spotlight</h3>
          <div className="product-content">
            <div className="product-image">
              {/* Placeholder for product image */}
              <div className="image-placeholder">
                <span>Sweet Dream Journal Image</span>
              </div>
            </div>

            <div className="product-description">
              <p>
                The "Sweet Dream Journal" features a daughter of the King. Jesus is the vine
                (John 15: 1-8) that anchors her flourishing branch. She sleeps soundly under a
                blanket dripping with sweet honey. Fully covered with the stickiness of God's
                presence. She knows whose she is and doesn't bow to fear. Her 7 bows and crown
                remain completely in tact despite the peeps outside who don't know how to act.
                The darkness of the fallen world is no match for her nightlight - The Father Of
                Lights (James 1:17-18).
              </p>

              <a href="#buy" className="buy-button">
                Buy Sweet Dream Journal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

