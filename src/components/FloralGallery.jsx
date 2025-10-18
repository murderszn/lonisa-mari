import React, { useState } from 'react';
import './FloralGallery.css';

const FloralGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const floralImages = [
    { id: 1, src: '/images/Floral – Lonisa Mari5_files/20190216_121809.jpg', alt: 'Floral arrangement 1' },
    { id: 2, src: '/images/Floral – Lonisa Mari5_files/20221113_151037.jpg', alt: 'Floral arrangement 2' },
    { id: 3, src: '/images/Floral – Lonisa Mari5_files/20210724_114528_3.jpg', alt: 'Floral arrangement 3' },
    { id: 4, src: '/images/Floral – Lonisa Mari5_files/20180825_162107.jpg', alt: 'Floral arrangement 4' },
    { id: 5, src: '/images/Floral – Lonisa Mari5_files/20181123_125346.jpg', alt: 'Floral arrangement 5' },
    { id: 6, src: '/images/Floral – Lonisa Mari5_files/20190322_103713-1-.jpg', alt: 'Floral arrangement 6' },
    { id: 7, src: '/images/Floral – Lonisa Mari5_files/20190609_165826.jpg', alt: 'Floral arrangement 7' },
    { id: 8, src: '/images/Floral – Lonisa Mari5_files/20200815_180518.jpg', alt: 'Floral arrangement 8' },
    { id: 9, src: '/images/Floral – Lonisa Mari5_files/20201223_080000.jpg', alt: 'Floral arrangement 9' },
    { id: 10, src: '/images/Floral – Lonisa Mari5_files/20210307_162717-1-.jpg', alt: 'Floral arrangement 10' },
    { id: 11, src: '/images/Floral – Lonisa Mari5_files/20210331_163743_2.jpg', alt: 'Floral arrangement 11' },
    { id: 12, src: '/images/Floral – Lonisa Mari5_files/20210628_152109.jpg', alt: 'Floral arrangement 12' },
    { id: 13, src: '/images/Floral – Lonisa Mari5_files/20210722_213540-2-.jpg', alt: 'Floral arrangement 13' },
    { id: 14, src: '/images/Floral – Lonisa Mari5_files/20211008_112602-1-.jpg', alt: 'Floral arrangement 14' },
    { id: 15, src: '/images/Floral – Lonisa Mari5_files/20220207_163352.jpg', alt: 'Floral arrangement 15' },
    { id: 16, src: '/images/Floral – Lonisa Mari5_files/20220218_154046-1-.jpg', alt: 'Floral arrangement 16' },
    { id: 17, src: '/images/Floral – Lonisa Mari5_files/20220313_082652.jpg', alt: 'Floral arrangement 17' },
    { id: 18, src: '/images/Floral – Lonisa Mari5_files/20221113_150915.jpg', alt: 'Floral arrangement 18' },
    { id: 19, src: '/images/Floral – Lonisa Mari5_files/Water-Jug_2022.jpg', alt: 'Water jug with florals' },
  ];

  return (
    <>
      <div className="floral-gallery">
        <div className="gallery-header">
          <h1 className="gallery-title">Floral</h1>
          <p className="gallery-subtitle">Beautiful floral arrangements and designs</p>
        </div>

        <div className="gallery-grid">
          {floralImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span className="view-text">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              ✕
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </>
  );
};

export default FloralGallery;
