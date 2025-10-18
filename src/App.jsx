import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBanner from './components/TopBanner';
import Header from './components/Header';
import Home from './pages/Home';
import Floral from './pages/Floral';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import TestimonialsBanner from './components/TestimonialsBanner';
import NewsletterBanner from './components/NewsletterBanner';
import Footer from './components/Footer';
import EmailModal from './components/EmailModal';
import ConsultationForm from './components/ConsultationForm';
import './App.css';

function App() {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  useEffect(() => {
    // Check if user has already submitted email
    const hasSubmittedEmail = localStorage.getItem('emailCaptured');

    if (!hasSubmittedEmail) {
      // Show modal after page load and initial animations
      const timer = setTimeout(() => {
        setShowEmailModal(true);
      }, 3000); // 3 second delay

      return () => clearTimeout(timer);
    }
  }, []);

  const handleEmailModalClose = () => {
    setShowEmailModal(false);
  };

  const handleConsultationFormOpen = () => {
    setShowConsultationForm(true);
  };

  const handleConsultationFormClose = () => {
    setShowConsultationForm(false);
  };

  return (
    <Router>
      <div className="app">
        <TopBanner />
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home onConsultationOpen={handleConsultationFormOpen} />} />
            <Route path="/floral" element={<Floral />} />
            <Route path="/portfolio" element={<Portfolio onConsultationOpen={handleConsultationFormOpen} />} />
            <Route path="/services" element={<Services onConsultationOpen={handleConsultationFormOpen} />} />
          </Routes>
        </main>
        <TestimonialsBanner onConsultationOpen={handleConsultationFormOpen} />
        <NewsletterBanner />
        <Footer />
        {showEmailModal && <EmailModal onClose={handleEmailModalClose} />}
        {showConsultationForm && <ConsultationForm onClose={handleConsultationFormClose} />}
      </div>
    </Router>
  );
}

export default App;
