"use client";
import { useState } from 'react';

export default function ImpexContactClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const whatsappLink = `https://wa.me/919667445766?text=Hi Visanix Impex, I have an enquiry regarding towel wholesale supply.`;
  const sahilEmail = "sahil@visanixglobal.com";
  const emailAddress = "visanixglobal@gmail.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData(e.target);
    formData.append("access_key", "c2baa74a-20fd-4f89-99d6-06616744b632");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (res.ok) { setLoading(false); setIsSubmitted(true); }
      else throw new Error(data.message);
    } catch (err) { setLoading(false); setError(true); }
  };

  return (
    <div className="reveal">
      {/* Hero */}
      <section style={{ padding: 'clamp(100px, 15vw, 160px) 0 80px', background: 'linear-gradient(135deg, var(--primary) 0%, #0a1b3d 100%)', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-dots" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(232,160,0,0.12)', border: '1px solid rgba(232,160,0,0.3)', borderRadius: '100px', padding: '5px 16px', marginBottom: '1.5rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
            <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.6rem' }}>A Division of Visanix Global</span>
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Connect with <span className="gradient-text">Visanix Impex</span>
          </h1>
          <p style={{ maxWidth: '620px', margin: '0 auto 2.5rem', fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', fontFamily: 'var(--font-outfit), sans-serif' }}>
            Enquire about microfiber towels, bath towels, baby towels, or custom wholesale orders. We respond within 24 hours.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: '#25D366', border: 'none', color: 'white', boxShadow: '0 10px 25px rgba(37,211,102,0.3)' }}>
            <span style={{ marginRight: '0.75rem', fontSize: '1.2rem' }}>💬</span> Chat on WhatsApp
          </a>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'flex-start' }}>

            {/* Form */}
            <div className="glass-card" style={{ padding: '3rem', background: 'var(--bg-light)', border: 'none' }}>
              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }} className="reveal">
                  <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✅</div>
                  <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Thank you for reaching out to Visanix Impex. We&apos;ll get back to you within 24 hours.</p>
                  <button onClick={() => setIsSubmitted(false)} className="btn btn-outline" style={{ fontSize: '0.7rem' }}>Send Another Message</button>
                </div>
              ) : error ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }} className="reveal">
                  <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>⚠️</div>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Submission Error</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                    <a href={`mailto:${emailAddress}`} className="btn btn-primary">📧 Email Directly</a>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: '#25D366', color: 'white' }}>💬 WhatsApp</a>
                  </div>
                </div>
              ) : (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.6rem' }}>Wholesale Enquiry</h3>
                    <span style={{ fontSize: '0.7rem', color: 'var(--accent)', fontWeight: '800' }}>24H RESPONSE</span>
                  </div>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <label style={{ fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Name</label>
                        <input name="name" required type="text" placeholder="Your Name" style={{ padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', outline: 'none', fontSize: '0.9rem', background: 'white' }} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <label style={{ fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Email</label>
                        <input name="email" required type="email" placeholder="you@company.com" style={{ padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', outline: 'none', fontSize: '0.9rem', background: 'white' }} />
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Enquiry Type</label>
                      <select name="subject" required style={{ padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', outline: 'none', background: 'white', fontSize: '0.9rem' }}>
                        <option>Microfiber / Coral-Velvet Towels</option>
                        <option>Bath Towels Wholesale</option>
                        <option>Baby Towels Enquiry</option>
                        <option>Cleaning / Car Towels</option>
                        <option>Kitchen Towels</option>
                        <option>Custom / OEM Order</option>
                        <option>General Partnership</option>
                      </select>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label style={{ fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Message</label>
                      <textarea name="message" required rows="5" placeholder="Describe your requirements — quantities, sizes, GSM, delivery location..." style={{ padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', outline: 'none', resize: 'none', fontSize: '0.9rem', background: 'white' }} />
                    </div>
                    <button type="submit" disabled={loading} className="btn btn-primary" style={{ padding: '1rem', fontSize: '0.75rem', opacity: loading ? 0.7 : 1 }}>
                      {loading ? 'Sending...' : 'Send Enquiry'}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Contact info */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(232,160,0,0.08)', border: '1px solid rgba(232,160,0,0.2)', borderRadius: '100px', padding: '5px 14px', marginBottom: '1.5rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
                <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.6rem' }}>Visanix Impex Division</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', marginTop: '0.5rem' }}>Get In <span style={{ color: 'var(--accent)' }}>Touch</span></h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { name: 'Sahil', role: 'Head — Operations & Business Development', details: [{ icon: '📧', text: <a href={`mailto:${sahilEmail}`} style={{ color: 'inherit', textDecoration: 'none' }}>{sahilEmail}</a> }, { icon: '📞', text: '+91 9667445766 (Calls & WhatsApp)' }] },
                  { name: 'Office', role: 'Visanix Global — Delhi NCR', details: [{ icon: '📍', text: 'B-1/192, Paschim Vihar, New Delhi 110063' }] },
                ].map((card, i) => (
                  <div key={i} className="glass-card" style={{ padding: '2rem', border: '1px solid var(--border)', background: 'white' }}>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>{card.name}</h4>
                    <p style={{ color: 'var(--accent)', fontWeight: '800', fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '1.25rem', letterSpacing: '1px' }}>{card.role}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {card.details.map((d, j) => (
                        <p key={j} style={{ fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ opacity: 0.5 }}>{d.icon}</span> {d.text}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
