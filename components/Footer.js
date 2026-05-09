"use client";
import Link from 'next/link';
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer style={{ 
      backgroundColor: 'var(--primary)', 
      color: 'white', 
      padding: '8rem 0 0', 
      borderTop: '1px solid rgba(252, 191, 73, 0.1)', 
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-outfit), "Outfit", sans-serif'
    }}>
      {/* Background Decorative Elements */}
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none' }}></div>
      <div style={{ 
        position: 'absolute', 
        top: '-100px', 
        left: '-50px', 
        width: '500px', 
        height: '500px', 
        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
        opacity: 0.05,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '5rem', paddingBottom: '6rem' }}>
          {/* Brand Info */}
          <div style={{ maxWidth: '400px' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', textDecoration: 'none' }}>
                <img src="/Logo only.png" alt="Visanix Global Logo" style={{ height: '80px', width: 'auto' }} />
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                  <div style={{ fontSize: '1.6rem', color: 'white', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '800', lineHeight: '1' }}>
                    VISANIX <span style={{ color: 'var(--accent)', fontWeight: '600', textTransform: 'none', fontFamily: "'Montserrat', sans-serif" }}>Global</span>
                  </div>
                  <div style={{
                    fontSize: '0.31rem',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    marginTop: '6px',
                    fontWeight: '800',
                    letterSpacing: '0.4px',
                    opacity: 0.9,
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%'
                  }}>
                    {"DELIVERING INDUSTRIAL EXCELLENCE WORLDWIDE".split("").map((char, index) => (
                      <span key={index}>{char === " " ? "\u00A0" : char}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
            <p style={{ 
              color: 'rgba(255,255,255,0.45)', 
              fontSize: '1rem', 
              lineHeight: '1.8',
              fontFamily: 'Outfit, sans-serif',
              marginBottom: '2.5rem'
            }}>
              Strategically providing high-performance polymer solutions and engineered materials to global infrastructure and heavy industries.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ paddingLeft: '20px' }}>
            <h4 style={{ color: 'white', marginBottom: '2.5rem', fontSize: '1.25rem', fontWeight: '800', position: 'relative', display: 'inline-block' }}>
              Explore
              <span style={{ position: 'absolute', bottom: '-10px', left: 0, width: '40px', height: '3px', background: 'var(--accent)', borderRadius: '10px' }}></span>
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} style={{ 
                    color: 'rgba(255,255,255,0.5)', 
                    fontSize: '1rem',
                    fontWeight: '500',
                    transition: 'var(--transition)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateX(8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                  >
                    <span style={{ fontSize: '0.6rem', color: 'var(--accent)', opacity: 0.6 }}>■</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ 
              color: 'white', 
              marginBottom: '3rem', 
              fontSize: '1.1rem', 
              fontWeight: '700', 
              textTransform: 'uppercase', 
              letterSpacing: '2px',
              borderLeft: '3px solid var(--accent)',
              paddingLeft: '15px'
            }}>
              Contact Center
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {/* Email */}
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ width: '20px', height: '20px', color: 'var(--accent)', marginTop: '4px' }}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Head of Operations & Business Development</span>
                  <a href="mailto:sahil@visanixglobal.com" style={{ color: 'white', fontSize: '1rem', fontWeight: '500', textDecoration: 'none', transition: 'var(--transition)' }}
                     onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                     onMouseLeave={e => e.currentTarget.style.color = 'white'}>
                    sahil@visanixglobal.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ width: '20px', height: '20px', color: 'var(--accent)', marginTop: '4px' }}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Calls & WhatsApp Support</span>
                  <p style={{ color: 'var(--accent)', fontSize: '1.1rem', fontWeight: '800', margin: 0 }}>+91 9667445766</p>
                </div>
              </div>

              {/* Address */}
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                <div style={{ width: '20px', height: '20px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Corporate Office</span>
                  <p style={{ color: 'white', fontSize: '1rem', fontWeight: '500', lineHeight: '1.6', margin: 0 }}>
                    LGF-72/ Sector 30, Gurugram,<br />
                    Haryana, 122022, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.08)', 
          padding: '3rem 0', 
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
              © 2026 Visanix <span style={{ fontFamily: "'Montserrat', sans-serif" }}>Global</span>. All Rights Reserved. 
              <span style={{ margin: '0 1rem', opacity: 0.2 }}>|</span>
              Designed for Industrial Excellence
            </p>
          </div>
          <div style={{ display: 'flex', gap: '3rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <span key={item} style={{ 
                fontSize: '0.85rem', 
                color: 'rgba(255,255,255,0.25)', 
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Scroll Top (Moved to side instead of middle) */}
      <button 
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{
          position: 'absolute',
          bottom: '100px',
          right: '50px',
          width: '55px',
          height: '55px',
          background: 'var(--accent)',
          border: 'none',
          borderRadius: '15px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.4rem',
          color: 'var(--primary)',
          boxShadow: '0 15px 35px rgba(252, 191, 73, 0.4)',
          transition: 'var(--transition)',
          zIndex: 10
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 20px 45px rgba(252, 191, 73, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 15px 35px rgba(252, 191, 73, 0.4)';
        }}
      >
        ↑
      </button>
    </footer>
  );
}
