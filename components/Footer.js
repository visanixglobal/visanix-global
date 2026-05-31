"use client";
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' },
  ];

  const productLinks = [
    { name: 'PTFE Rod', path: '/products/ptfe-rod' },
    { name: 'PTFE Skived Sheet', path: '/products/ptfe-sheet-skived' },
    { name: 'PTFE Moulded Sheet', path: '/products/ptfe-sheet-moulded' },
    { name: 'PTFE Tube', path: '/products/ptfe-tube' },
    { name: 'PTFE Gasket', path: '/products/ptfe-gasket' },
    { name: 'PTFE Grades Guide', path: '/products/ptfe-grades' },
  ];

  const locationLinks = [
    { name: 'PTFE Supplier — Gurugram', path: '/ptfe-supplier-gurugram' },
    { name: 'PTFE Supplier — Delhi', path: '/ptfe-supplier-delhi' },
    { name: 'PTFE Supplier — India', path: '/ptfe-supplier-india' },
    { name: 'Pharmaceutical Industry', path: '/industries/pharmaceutical' },
    { name: 'Chemical Processing', path: '/industries/chemical-processing' },
    { name: 'Oil & Gas Industry', path: '/industries/oil-and-gas' },
    { name: 'Food Processing', path: '/industries/food-processing' },
    { name: 'Water Treatment', path: '/industries/water-treatment' },
    { name: 'Industrial Manufacturing', path: '/industries/industrial-manufacturing' },
  ];

  const linkStyle = {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '0.9rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
  };

  const headingStyle = {
    color: 'white',
    marginBottom: '2rem',
    fontSize: '0.85rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    borderLeft: '3px solid var(--accent)',
    paddingLeft: '15px',
  };

  return (
    <footer style={{
      background: 'var(--primary)',
      color: 'white',
      padding: '6rem 0 0',
      borderTop: '1px solid rgba(252, 191, 73, 0.1)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-outfit), sans-serif'
    }}>
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '3rem', paddingBottom: '5rem' }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', textDecoration: 'none' }}>
                <img src="/Logo only.png" alt="Visanix Global Logo" style={{ height: '60px', width: 'auto', filter: 'brightness(1.2)', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '6px' }}>
                  <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.3rem', color: 'white', letterSpacing: '0.8px', textTransform: 'uppercase', lineHeight: '1', whiteSpace: 'nowrap' }} className="footer-brand-name">
                    <span style={{ fontWeight: '800' }}>VISANIX</span>{' '}
                    <span style={{ color: 'var(--accent)', fontWeight: '500', textTransform: 'none', fontFamily: "'Garet', sans-serif", letterSpacing: '0', fontSize: '1.2rem', verticalAlign: '1px' }}>Global</span>
                  </div>
                  <div style={{ fontSize: '0.22rem', color: 'var(--accent)', textTransform: 'uppercase', marginTop: '5px', fontWeight: '800', letterSpacing: '0.6px', opacity: 0.9, display: 'flex', justifyContent: 'space-between', width: '100%', whiteSpace: 'nowrap' }}>
                    {"DELIVERING INDUSTRIAL EXCELLENCE WORLDWIDE".split("").map((char, index) => (
                      <span key={index}>{char === " " ? "\u00A0" : char}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', lineHeight: '1.8', fontFamily: 'var(--font-outfit), sans-serif' }}>
              Trusted PTFE and Teflon supplier in Gurugram, India. Virgin and filled PTFE grades for chemical, pharma, and industrial manufacturers across India.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 style={headingStyle}>Explore</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} style={linkStyle}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                  >
                    <span style={{ color: 'var(--accent)', opacity: 0.5, fontSize: '0.5rem' }}>■</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 style={headingStyle}>Products</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} style={linkStyle}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                  >
                    <span style={{ color: 'var(--accent)', opacity: 0.5, fontSize: '0.5rem' }}>■</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations & Industries */}
          <div>
            <h4 style={headingStyle}>Locations & Industries</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {locationLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} style={linkStyle}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                  >
                    <span style={{ color: 'var(--accent)', opacity: 0.5, fontSize: '0.5rem' }}>■</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={headingStyle}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '18px', height: '18px', color: 'white', marginTop: '3px', flexShrink: 0 }}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '4px' }}>Email</span>
                  <a href="mailto:sahil@visanixglobal.com" style={{ color: 'white', fontSize: '0.9rem', fontWeight: '700', textDecoration: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'white'}>
                    sahil@visanixglobal.com
                  </a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '18px', height: '18px', color: 'white', marginTop: '3px', flexShrink: 0 }}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '4px' }}>Phone / WhatsApp</span>
                  <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: '700', margin: 0 }}>+91 9667445766</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '18px', height: '18px', color: 'white', marginTop: '3px', flexShrink: 0 }}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '4px' }}>Office</span>
                  <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: '700', lineHeight: '1.6', margin: 0 }}>
                    LGF-72, Sector 30<br />Gurugram, Haryana 122022
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '2.5rem 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
            © 2026 Visanix <span style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>Global</span>. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { name: 'Privacy Policy', path: '/privacy-policy' },
              { name: 'Terms of Service', path: '/terms-of-service' },
              { name: 'Cookie Policy', path: '/cookie-policy' },
            ].map(item => (
              <Link key={item.name} href={item.path} style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.25)', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div >

      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{ position: 'absolute', bottom: '100px', right: '2rem', width: '50px', height: '50px', background: 'var(--accent)', border: 'none', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'var(--primary)', boxShadow: '0 10px 25px rgba(252,191,73,0.4)', transition: 'all 0.3s ease', zIndex: 10 }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
      >
        ↑
      </button>
    </footer >
  );
}
