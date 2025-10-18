import React, { useState } from 'react';
import './ConsultationForm.css';

const ConsultationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: '',
    newsletter: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    { id: 'art-commission', name: 'Art Commission', category: 'primary' },
    { id: 'floral-design', name: 'Floral Design', category: 'primary' },
    { id: 'speaking-event', name: 'Speaking Event', category: 'primary' },
    { id: 'consultation', name: 'General Consultation', category: 'secondary' }
  ];

  const projectTypes = {
    'art-commission': ['Portrait', 'Brand Illustration', 'Faith-Based Art', 'Custom Design'],
    'floral-design': ['Wedding', 'Event', 'Home Decor', 'Gift Arrangement'],
    'speaking-event': ['Corporate', 'Women\'s Group', 'Community', 'Workshop'],
    'consultation': ['Creative Direction', 'Business Strategy', 'Brand Development', 'Other']
  };

  const timelines = ['ASAP', '1-2 weeks', '1 month', '2-3 months', '3+ months', 'Flexible'];
  const budgets = ['Under $500', '$500-$1,000', '$1,000-$2,500', '$2,500-$5,000', '$5,000+', 'Let\'s Discuss'];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleServiceSelect = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      service: serviceId,
      projectType: '' // Reset project type when service changes
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Here you would integrate with your backend/email service
      console.log('Form submitted:', formData);

      // Show success message and close
      alert('Thank you! I\'ll be in touch within 24 hours to schedule your consultation.');
      onClose();
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="consultation-modal-overlay" onClick={onClose}>
      <div className="consultation-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>

        <div className="modal-header">
          <h2 className="modal-title">Book Your Consultation</h2>
          <p className="modal-subtitle">Let's discuss bringing your creative vision to life</p>
        </div>

        <div className="modal-progress">
          <div className="progress-steps">
            <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`}>
              <span className="step-number">1</span>
              <span className="step-label">Service</span>
            </div>
            <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>
              <span className="step-number">2</span>
              <span className="step-label">Details</span>
            </div>
            <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}>
              <span className="step-number">3</span>
              <span className="step-label">Contact</span>
            </div>
          </div>
        </div>

        <form className="consultation-form" onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div className="form-step">
              <h3>What service are you interested in?</h3>
              <div className="service-selection">
                {services.map(service => (
                  <button
                    key={service.id}
                    type="button"
                    className={`service-option ${formData.service === service.id ? 'selected' : ''} category-${service.category}`}
                    onClick={() => handleServiceSelect(service.id)}
                  >
                    <span className="service-name">{service.name}</span>
                    <span className="service-check">✓</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="form-step">
              <h3>Tell me about your project</h3>

              {formData.service && projectTypes[formData.service] && (
                <div className="form-group">
                  <label>Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select project type</option>
                    {projectTypes[formData.service].map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label>Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select timeline</option>
                    {timelines.map(timeline => (
                      <option key={timeline} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select budget</option>
                    {budgets.map(budget => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your vision, inspiration, or any specific requirements..."
                  rows={4}
                  required
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="form-step">
              <h3>Your Contact Information</h3>

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                  />
                  <span className="checkmark"></span>
                  Subscribe to my newsletter for creative inspiration and updates
                </label>
              </div>
            </div>
          )}

          <div className="form-actions">
            {currentStep > 1 && (
              <button type="button" className="btn-secondary" onClick={prevStep}>
                Back
              </button>
            )}

            {currentStep < 3 ? (
              <button
                type="button"
                className="btn-primary"
                onClick={nextStep}
                disabled={!formData.service}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Book Consultation'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
