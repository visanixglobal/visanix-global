'use client';

import React, { useState, useEffect } from 'react';

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenContactPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenContactPopup', 'true');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const payload = new FormData();
    payload.append('access_key', 'c2baa74a-20fd-4f89-99d6-06616744b632');
    payload.append('name', `${formData.firstName} ${formData.lastName}`);
    payload.append('email', formData.email);
    payload.append('phone', formData.phone);
    payload.append('subject', formData.subject);
    payload.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload
      });
      const data = await response.json();

      if (response.ok) {
        setLoading(false);
        setIsSubmitted(true);
        sessionStorage.setItem('hasSeenContactPopup', 'true');
      } else {
        throw new Error(data.message || 'Something went wrong.');
      }
    } catch (err) {
      setLoading(false);
      setError(true);
      console.error('Popup form error:', err);
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={(e) => {
      if (e.target.classList.contains('modal-overlay')) handleClose();
    }}>
      <div className="modal-content">
        <button className="close-modal" onClick={handleClose} aria-label="Close modal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="popup-form">
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>✅</div>
              <h2 style={{ marginBottom: '0.75rem' }}>Message Sent!</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Thank you for reaching out. We will get back to you within 24 hours.
              </p>
              <button onClick={handleClose} className="submit-btn">Close</button>
            </div>
          ) : error ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>⚠️</div>
              <h2 style={{ marginBottom: '0.75rem' }}>Submission Error</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Please try again or reach us directly at{' '}
                <a href="mailto:sahil@visanixglobal.com" style={{ color: 'var(--accent)' }}>sahil@visanixglobal.com</a>.
              </p>
              <button onClick={() => setError(false)} className="submit-btn">Try Again</button>
            </div>
          ) : (
            <>
              <h2>Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <input type="text" name="firstName" placeholder="First Name" required value={formData.firstName} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <input type="text" name="lastName" placeholder="Last Name" required value={formData.lastName} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Your Message" rows="4" required value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="submit-btn" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Sending...' : 'Submit Form'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
