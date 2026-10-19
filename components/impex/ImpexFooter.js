"use client";
import Link from 'next/link';

export default function ImpexFooter() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const footerLinks = [
    { name: 'Home', path: '/impex' },
    { name: 'About Us', path: '/impex/about' },
    { name: 'Products', path: '/impex/products' },
    { name: 'Contact', path: '/impex/contact' },
  ];

  const productLinks = [
    { name: 'Microfiber Face Towels', path: '/impex/products' },
    { name: 'Microfiber Bath Towels', path: '/impex/products' },
    { name: 'Coral-Velvet Towels', path: '/impex/products' },
    { name: 'Baby Hooded Towels', path: '/impex/products' },
    { name: 'Baby Washcloths', path: '/impex/products' },
    { name: 'Car Cleaning Towels', path: '/impex/products' },
    { name: 'Kitchen Towels', path: '/impex/products' },
    { name: 'Jacquard Towels', path: '/impex/products' },
  ];

  const headingStyle = {
    color: 'var(--primary)', marginBottom: '2rem', fontSize: '0.85rem', fontWeight: '700',
    textTransform: 'uppercase', letterSpacing: '2px',
    borderLeft: '3px solid var(--accent)', paddingLeft: '15px',
  };

  const linkStyle = {
    color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '600',
    transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none',
  };

  return (
    <footer style={{ background: '#ffffff', color: 'var(--primary)', padding: '5rem 0 0', borderTop: '1px solid rgba(0,0,0,0.07)', position: 'relative', overflow: 'hidden', fontFamily: 'var(--font-outfit), sans-serif' }}>
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '3rem', paddingBottom: '4.5rem' }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <Link href="/impex" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <img src="/visanix-impex-logo.png" alt="Visanix Impex Logo" style={{ height: '70px', width: 'auto', maxWidth: '240px', objectFit: 'contain' }} />
              </Link>
            </div>
            <div style={{ display: 'inline-block', background: 'var(--gold-shimmer)', color: 'var(--primary)', fontSize: '0.68rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', padding: '5px 14px', borderRadius: '100px', marginBottom: '1.5rem' }}>
              Visanix Impex Division
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8' }}>
              A division of Visanix Global — importing and supplying premium microfiber and textile products to retailers, hospitality, and distributors across India.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 style={headingStyle}>Explore</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} style={linkStyle}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'translateX(0)'; }}>
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
                  <Link href={link.path} style={linkStyle}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'translateX(0)'; }}>
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
              {[
                { icon: '📧', label: 'Email', content: <a href="mailto:sahil@visanixglobal.com" style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: '700', textDecoration: 'none' }}>sahil@visanixglobal.com</a> },
                { icon: '📞', label: 'Phone / WhatsApp', content: <p style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: '700', margin: 0 }}>+91 9667445766</p> },
                { icon: '📍', label: 'Office', content: <p style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: '700', lineHeight: '1.6', margin: 0 }}>B-1/192, Paschim Vihar<br />New Delhi 110063</p> },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1rem', marginTop: '2px' }}>{item.icon}</span>
                  <div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '4px' }}>{item.label}</span>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--border)', padding: '2.5rem 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
            © 2026 Visanix Global. All Rights Reserved.{' '}
            <span style={{ color: 'var(--accent)', fontWeight: '700' }}>Visanix Impex is a division of Visanix Global</span>
          </p>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {[
              { name: 'Privacy Policy', path: '/impex/privacy-policy' },
              { name: 'Terms of Service', path: '/impex/terms-of-service' },
            ].map(item => (
              <Link key={item.name} href={item.path} style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <button onClick={scrollToTop} aria-label="Scroll to top" style={{ position: 'absolute', bottom: '100px', right: '2rem', width: '50px', height: '50px', background: 'var(--primary)', border: 'none', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: '#ffffff', boxShadow: '0 10px 25px rgba(12,18,34,0.35)', transition: 'all 0.3s ease', zIndex: 10 }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-6px)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.transform = 'translateY(0)'; }}>
        ↑
      </button>
    </footer>
  );
}
