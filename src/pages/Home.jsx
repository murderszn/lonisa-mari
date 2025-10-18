import React from 'react';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';

const Home = ({ onConsultationOpen }) => {
  return (
    <div className="home-page">
      <Hero onConsultationOpen={onConsultationOpen} />
      <BentoGrid onConsultationOpen={onConsultationOpen} />
    </div>
  );
};

export default Home;
