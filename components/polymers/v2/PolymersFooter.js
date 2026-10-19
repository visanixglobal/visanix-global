"use client";
import Link from 'next/link';

export default function PolymersFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Home', path: '/polymers' },
    { name: 'About Us', path: '/polymers/about' },
    { name: 'Products', path: '/polymers/products' },
    { name: 'Industries', path: '/polymers/industries' },
    { name: 'Contact', path: '/polymers/contact' },
  ];

  const productLinks = [
    { name: 'PTFE Rod', path: '/polymers/products/ptfe-rod' },
    { name: 'PTFE Skived Sheet', path: '/polymers/products/ptfe-sheet-skived' },
    { name: 'PTFE Moulded Sheet', path: '/polymers/products/ptfe-sheet-moulded' },
    { name: 'PTFE Tube', path: '/polymers/products/ptfe-tube' },
    { name: 'PTFE Gasket', path: '/polymers/products/ptfe-gasket' },
    { name: 'PTFE Grades Guide', path: '/polymers/products/ptfe-grades' },
    { name: 'Cast Nylon Sheet', path: '/polymers/engineering-plastics/cast-nylon-sheet' },
    { name: 'Cast Nylon Rod', path: '/polymers/engineering-plastics/cast-nylon-rod' },
    { name: 'PEEK Sheet', path: '/polymers/engineering-plastics/peek-sheet' },
    { name: 'Delrin Sheet', path: '/polymers/engineering-plastics/delrin-sheet' },
  ];

  const locationLinks = [
    { name: 'PTFE Supplier — Delhi NCR', path: '/polymers/ptfe-supplier-gurugram' },
    { name: 'PTFE Supplier — Delhi', path: '/polymers/ptfe-supplier-delhi' },
    { name: 'PTFE Supplier — India', path: '/polymers/ptfe-supplier-india' },
    { name: 'Pharmaceutical Industry', path: '/polymers/industries/pharmaceutical' },
    { name: 'Chemical Processing', path: '/polymers/industries/chemical-processing' },
    { name: 'Oil & Gas Industry', path: '/polymers/industries/oil-and-gas' },
    { name: 'Food Processing', path: '/polymers/industries/food-processing' },
    { name: 'Water Treatment', path: '/polymers/industries/water-treatment' },
    { name: 'Industrial Manufacturing', path: '/polymers/industries/industrial-manufacturing' },
  ];

  const headingStyle = {
    color: 'var(--primary)',
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
      background: '#ffffff',
      color: 'var(--primary)',
      padding: '5rem 0 0',
      borderTop: '1px solid rgba(0,0,0,0.07)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-outfit), sans-serif'
    }}>
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '3rem', paddingBottom: '4.5rem' }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <Link href="/polymers" style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', textDecoration: 'none' }}>
                <img src="/visanix-polymers-logo.png" alt="Visanix Polymers Logo" style={{ height: '70px', width: 'auto', maxWidth: '240px', objectFit: 'contain', flexShrink: 0 }} />
              </Link>
            </div>
            <div style={{
              display: 'inline-block',
              background: 'var(--gold-shimmer)',
              color: 'var(--primary)',
              fontSize: '0.68rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              padding: '5px 14px',
              borderRadius: '100px',
              marginBottom: '1.5rem'
            }}>
              Visanix Polymers Division
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', fontFamily: 'var(--font-outfit), sans-serif' }}>
              A division of Visanix Global supplying PTFE products and engineering plastics to industrial manufacturers across India.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 style={headingStyle}>Explore</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'translateX(0)'; }}
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
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'translateX(0)'; }}
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
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {locationLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'translateX(0)'; }}
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
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
                <div style={{ width: '18px', height: '18px', color: 'var(--primary)', marginTop: '3px', flexShrink: 0 }}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '4px' }}>Proprietor</span>
                  <p style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: '700', margin: 0 }}>PD Narang</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '18px', height: '18px', color: 'var(--primary)', marginTop: '3px', flexShrink: 0 }}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '4px' }}>Email</span>
                  <a href="mailto:sahil@visanixglobal.com" style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: '700', textDecoration: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--primary)'}>
                    sahil@visanixglobal.com
                  </a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '18px', height: '18px', color: 'var(--primary)', marginTop: '3px', flexShrink: 0 }}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '4px' }}>Phone / WhatsApp</span>
                  <p style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: '700', margin: 0 }}>+91 9667445766</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '18px', height: '18px', color: 'var(--primary)', marginTop: '3px', flexShrink: 0 }}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '4px' }}>Office</span>
                  <p style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: '700', lineHeight: '1.6', margin: 0 }}>
                    B-1/192, Paschim Vihar<br />New Delhi 110063
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid var(--border)', padding: '2.5rem 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
            © 2026 Visanix Global. All Rights Reserved.{' '}
            <span style={{ color: 'var(--accent)', fontWeight: '700' }}>Visanix Polymers is a division of Visanix Global</span>
          </p>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { name: 'Privacy Policy', path: '/polymers/privacy-policy' },
              { name: 'Terms of Service', path: '/polymers/terms-of-service' },
              { name: 'Cookie Policy', path: '/polymers/cookie-policy' },
            ].map(item => (
              <Link key={item.name} href={item.path} style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
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
        style={{ position: 'absolute', bottom: '100px', right: '2rem', width: '50px', height: '50px', background: 'var(--primary)', border: 'none', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#ffffff', boxShadow: '0 10px 25px rgba(12,18,34,0.35)', transition: 'all 0.3s ease', zIndex: 10 }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-6px)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.transform = 'translateY(0)'; }}
      >
        ↑
      </button>
    </footer >
  );
}
