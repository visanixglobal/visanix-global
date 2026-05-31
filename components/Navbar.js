"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="site-header">
      <div className="header-inner container">

        {/* Logo — absolutely centered vertically across full header */}
        <Link href="/" className="logo-link">
          <img src="/Logo only.png" alt="Visanix Global Logo" className="navbar-logo" fetchPriority="high" />
          <div className="brand-text-container">
            <div className="brand-name-wrap">
              <div className="brand-name">
                <span className="brand-visanix">VISANIX</span>
                {' '}
                <span className="brand-global">Global</span>
              </div>
              <div className="brand-tagline">
                {"DELIVERING INDUSTRIAL EXCELLENCE WORLDWIDE".split("").map((char, i) => (
                  <span key={i}>{char === " " ? "\u00A0" : char}</span>
                ))}
              </div>
            </div>
          </div>
        </Link>

        {/* Right side: contact strip on top, nav links below */}
        <div className="right-col">
          {/* Contact strip */}
          <div className="contact-strip">
            <a href="mailto:sahil@visanixglobal.com" className="contact-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              sahil@visanixglobal.com
            </a>
            <span className="contact-divider" />
            <a href="tel:+919667445766" className="contact-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              +91 96674 45766
            </a>
          </div>

          {/* Nav links */}
          <div className="desktop-menu">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary request-btn">
              REQUEST QUOTE
            </Link>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu reveal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-nav-link ${pathname === link.href ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary" style={{ marginTop: '0.5rem' }} onClick={() => setIsMobileMenuOpen(false)}>
            REQUEST QUOTE
          </Link>
          <div className="mobile-contact">
            <a href="mailto:sahil@visanixglobal.com">sahil@visanixglobal.com</a>
            <a href="tel:+919667445766">+91 96674 45766</a>
          </div>
        </div>
      )}

      <style jsx global>{`
        /* ── Header ── */
        .site-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1100;
          background: var(--primary);
          box-shadow: 0 4px 24px rgba(0,0,0,0.35);
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 114px;
          padding: 0 1.5rem !important;
          position: relative;
        }

        /* ── Logo — vertically centered in full 114px height ── */
        .logo-link {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          text-decoration: none;
          flex-shrink: 1;
          min-width: 0;
          height: 100%;
        }
        .navbar-logo {
          height: 90px;
          width: auto;
          filter: brightness(1.2);
        }
        .brand-text-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-top: 6px;
          min-width: 0;
          max-width: 100%;
        }
        /* Wrapper sizes to brand name — tagline clips to same width */
        .brand-name-wrap {
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .brand-name {
          font-family: var(--font-outfit);
          font-size: 1.7rem;
          color: white;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          line-height: 1;
          white-space: nowrap;
        }
        .brand-visanix { font-weight: 800; }
        .brand-global {
          color: var(--accent);
          font-weight: 500;
          text-transform: none;
          font-family: 'Garet', sans-serif;
          letter-spacing: 0;
          font-size: 1.55rem;
          vertical-align: 1px;
        }
        .brand-tagline {
          color: var(--accent);
          text-transform: uppercase;
          margin-top: 4px;
          font-weight: 800;
          opacity: 0.9;
          /* Stretch tagline to fill exactly the brand name width */
          width: 100%;
          font-size: clamp(0.22rem, 0.9vw, 0.42rem);
          display: flex;
          justify-content: space-between;
          letter-spacing: 0;
        }

        /* ── Right column ── */
        .right-col {
          display: none;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
          height: 100%;
          gap: 0;
          padding-top: 10px;
        }

        /* ── Contact strip ── */
        .contact-strip {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          margin-bottom: 8px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          color: rgba(255,255,255,0.65);
          font-size: 0.72rem;
          font-weight: 600;
          text-decoration: none;
          font-family: var(--font-outfit), sans-serif;
          letter-spacing: 0.2px;
          transition: color 0.2s;
        }
        .contact-item:hover { color: var(--accent); }
        .contact-divider {
          width: 1px;
          height: 14px;
          background: rgba(255,255,255,0.15);
          display: inline-block;
          flex-shrink: 0;
        }

        /* ── Desktop nav links ── */
        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .nav-link {
          font-size: 0.8rem;
          font-weight: 800;
          color: rgba(255,255,255,0.85);
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          padding: 5px 0;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 2px;
          background: var(--accent);
          transition: width 0.3s cubic-bezier(0.23,1,0.32,1);
          border-radius: 2px;
        }
        .nav-link:hover { color: var(--accent); }
        .nav-link:hover::after,
        .nav-link.active::after { width: 100%; }
        .nav-link.active { color: var(--accent); }
        .request-btn {
          padding: 0.6rem 1.4rem !important;
          font-size: 0.7rem !important;
          border-radius: 100px !important;
        }

        /* ── Mobile toggle ── */
        .mobile-toggle {
          display: flex;
          background: transparent;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }

        /* ── Mobile menu ── */
        .mobile-menu {
          background: var(--primary);
          padding: 1rem 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          border-top: 1px solid rgba(255,255,255,0.07);
          max-height: calc(100vh - 70px);
          overflow-y: auto;
        }
        .mobile-nav-link {
          font-size: 1rem;
          font-weight: 800;
          color: rgba(255,255,255,0.85);
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none;
        }
        .mobile-nav-link.active { color: var(--accent); }
        .mobile-contact {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 0.5rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255,255,255,0.07);
        }
        .mobile-contact a {
          color: rgba(255,255,255,0.55);
          font-size: 0.8rem;
          text-decoration: none;
          font-family: var(--font-outfit), sans-serif;
        }

        /* ── Breakpoints ── */
        @media (min-width: 1024px) {
          .right-col { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 768px) {
          .header-inner { height: 80px; }
          .navbar-logo { height: 60px !important; }
          .brand-name { font-size: 1.3rem; }
          .brand-global { font-size: 1.2rem; }
        }
        @media (max-width: 480px) {
          .navbar-logo { height: 42px !important; }
          .header-inner { height: 70px; }
          .brand-name { font-size: 1.05rem; }
          .brand-global { font-size: 0.95rem; }
        }
      `}</style>
    </header>
  );
}
