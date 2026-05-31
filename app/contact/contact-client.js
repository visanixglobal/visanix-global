"use client";
import { useState } from 'react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // WhatsApp Config
  const whatsappNumber = "919667445766";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi Visanix Global, I have an enquiry regarding industrial polymer solutions.`;
  const emailAddress = "visanixglobal@gmail.com";
  const sahilEmail = "sahil@visanixglobal.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.target);
    formData.append("access_key", "c2baa74a-20fd-4f89-99d6-06616744b632");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (response.ok) {
        setLoading(false);
        setIsSubmitted(true);
      } else {
        throw new Error(data.message || "Something went wrong.");
      }
    } catch (err) {
      setLoading(false);
      setError(true);
      console.error("Submission error:", err);
    }
  };

  return (
    <div className="reveal">
      {/* Premium Hero */}
      <section style={{
        padding: 'clamp(100px, 15vw, 160px) 0 80px',
        background: 'linear-gradient(135deg, var(--primary) 0%, #0a1b3d 100%)',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="bg-dots" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.75rem' }}>Global Support</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '1.25rem', marginBottom: '1.5rem' }}>Connect with <span className="gradient-text">Experts</span></h1>

          {/* Improved Contact Hero Typography */}
          <p style={{
            maxWidth: '700px',
            margin: '0 auto',
            fontSize: '1.25rem',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: '1.6',
            fontFamily: 'var(--font-outfit), sans-serif',
            fontWeight: '400'
          }}>
            Discuss your material requirements via our professional form or connect instantly via WhatsApp.
          </p>

          <div style={{ marginTop: '2.5rem' }}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: '#25D366', border: 'none', color: 'white' }}>
              <span style={{ marginRight: '0.75rem', fontSize: '1.2rem' }}>💬</span> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'flex-start' }}>
            {/* Form Area */}
            <div className="glass-card" style={{ padding: '3rem', background: 'var(--bg-light)', border: 'none' }}>
              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }} className="reveal">
                  <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✅</div>
                  <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    Thank you for reaching out. We have received your enquiry and will get back to you within 24 hours.
                  </p>
                  <button onClick={() => setIsSubmitted(false)} className="btn btn-outline" style={{ fontSize: '0.7rem' }}>Send Another Message</button>
                </div>
              ) : error ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }} className="reveal">
                  <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>⚠️</div>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Submission Error</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                    We encountered a temporary issue with the form. Please use direct contact methods to ensure your enquiry reaches us immediately.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <a href={`mailto:${emailAddress}`} className="btn btn-primary" style={{ width: '100%' }}>
                      📧 Email Directly
                    </a>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', background: '#25D366', color: 'white' }}>
                      💬 WhatsApp Message
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.6rem' }}>Direct Enquiry</h3>
                    <span style={{ fontSize: '0.7rem', color: 'var(--accent)', fontWeight: '800' }}>24H RESPONSE</span>
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <label style={{ fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Name</label>
                        <input name="name" required type="text" placeholder="John Doe" style={{ padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', outline: 'none', fontSize: '0.9rem' }} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <label style={{ fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Email</label>
                        <input name="email" required type="email" placeholder="john@visanix.com" style={{ padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', outline: 'none', fontSize: '0.9rem' }} />
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Subject</label>
                      <select name="subject" required style={{ padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', outline: 'none', background: 'white', fontSize: '0.9rem' }}>
                        <option>Product Quotation</option>
                        <option>Custom Engineering Drawing</option>
                        <option>Export Logistics Enquiry</option>
                        <option>General Partnership</option>
                      </select>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Detailed Message</label>
                      <textarea name="message" required rows="5" placeholder="Describe your technical requirements..." style={{ padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', outline: 'none', resize: 'none', fontSize: '0.9rem' }}></textarea>
                    </div>

                    <button type="submit" disabled={loading} className="btn btn-primary" style={{ padding: '1rem', fontSize: '0.75rem', opacity: loading ? 0.7 : 1 }}>
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Leadership Column */}
            <div>
              <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.75rem' }}>Management Team</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', marginTop: '1rem' }}>Leadership <span style={{ color: 'var(--secondary)' }}>Access</span></h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="glass-card" style={{ padding: '2rem', textAlign: 'left', border: '1px solid var(--border)', background: 'white' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>Sahil Khurana</h4>
                    <span style={{ fontSize: '1.5rem' }}>👤</span>
                  </div>
                  <p style={{ color: 'var(--accent)', fontWeight: '800', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '1.25rem', letterSpacing: '1px' }}>Head - Operations & Business Development</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <p style={{ fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ opacity: 0.5 }}>📧</span> <a href={`mailto:${sahilEmail}`} style={{ color: 'inherit', textDecoration: 'none' }}>{sahilEmail}</a>
                    </p>
                    <p style={{ fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ opacity: 0.5 }}>📞</span> +91 9667445766 (Calls & WhatsApp)
                    </p>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '2rem', textAlign: 'left', border: '1px solid var(--border)', background: 'var(--bg-light)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>General Enquiries</h4>
                    <span style={{ fontSize: '1.5rem' }}>📧</span>
                  </div>
                  <p style={{ color: 'var(--accent)', fontWeight: '800', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '1.25rem', letterSpacing: '1px' }}>Sales & Logistics Support</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <p style={{ fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ opacity: 0.5 }}>✉️</span> <a href={`mailto:${emailAddress}`} style={{ color: 'inherit', textDecoration: 'none' }}>{emailAddress}</a>
                    </p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      Strategic support for global supply chain and high-performance polymer requests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
