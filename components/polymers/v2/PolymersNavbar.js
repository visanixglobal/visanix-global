"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function PolymersNavbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/polymers' },
    { name: 'About Us', href: '/polymers/about' },
    { name: 'Products', href: '/polymers/products' },
    { name: 'Industries', href: '/polymers/industries' },
    { name: 'Contact', href: '/polymers/contact' },
  ];

  const isActive = (href) => {
    if (href === '/polymers') return pathname === '/polymers';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className="pm-site-header">
      {/* Dark navy top bar */}
      <div className="pm-topbar">
        <div className="pm-topbar-inner container">
          <div className="pm-topbar-tag">
            <span className="pm-gold-dot" />
            PTFE · Engineering Plastics · Industrial Materials
          </div>
          <div className="pm-topbar-contact">
            <a href="mailto:sahil@visanixglobal.com" className="pm-topbar-link topbar-email">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              sahil@visanixglobal.com
            </a>
            <span className="topbar-divider" />
            <a href="tel:+919667445766" className="pm-topbar-link">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              +91 96674 45766
            </a>
          </div>
        </div>
      </div>

      {/* Main nav row */}
      <div className="pm-header-inner container">
        <Link href="/polymers" className="pm-logo-link">
          <img src="/visanix-polymers-logo.png" alt="Visanix Polymers Logo" className="pm-logo" fetchPriority="high" />
        </Link>

        <div className="pm-desktop-menu">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`pm-nav-link ${isActive(link.href) ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/polymers/contact" className="pm-request-btn">
            REQUEST QUOTE
          </Link>
        </div>

        <button
          className="pm-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="pm-mobile-menu reveal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`pm-mobile-nav-link ${isActive(link.href) ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/polymers/contact" className="pm-request-btn" style={{ marginTop: '0.5rem', display: 'inline-flex' }} onClick={() => setIsMobileMenuOpen(false)}>
            REQUEST QUOTE
          </Link>
          <div className="pm-mobile-contact">
            <a href="mailto:sahil@visanixglobal.com">sahil@visanixglobal.com</a>
            <a href="tel:+919667445766">+91 96674 45766</a>
          </div>
        </div>
      )}

      <style jsx global>{`
        /* ── Polymers Header ── */
        .pm-site-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1100;
          background: #ffffff;
          box-shadow: 0 2px 16px rgba(0,0,0,0.1);
          font-family: var(--font-outfit), 'Outfit', sans-serif;
        }

        /* ── Top bar (dark navy) ── */
        .pm-topbar {
          background: var(--primary);
          height: 36px;
          display: flex;
          align-items: center;
        }
        .pm-topbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 100%;
          gap: 1rem;
        }
        .pm-topbar-tag {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: rgba(255,255,255,0.8);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .pm-gold-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 8px var(--accent), 0 0 14px var(--accent-glow);
          flex-shrink: 0;
          animation: pmDotPulse 2s ease-in-out infinite;
        }
        @keyframes pmDotPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px var(--accent), 0 0 14px var(--accent-glow); }
          50% { opacity: 0.6; box-shadow: 0 0 5px var(--accent), 0 0 10px var(--accent-glow); }
        }
        .pm-topbar-contact {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .pm-topbar-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: rgba(255,255,255,0.7);
          font-size: 0.7rem;
          font-weight: 600;
          text-decoration: none;
          letter-spacing: 0.2px;
          transition: color 0.2s;
        }
        .pm-topbar-link:hover { color: var(--accent); }
        .topbar-divider {
          width: 1px;
          height: 14px;
          background: rgba(255,255,255,0.18);
          display: inline-block;
          flex-shrink: 0;
        }

        /* ── Main nav row ── */
        .pm-header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 90px;
          width: 100%;
          position: relative;
        }

        /* ── Logo ── */
        .pm-logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
          height: 100%;
        }
        .pm-logo {
          height: 90px;
          width: auto;
          max-width: 280px;
          object-fit: contain;
        }

        /* ── Desktop nav links ── */
        .pm-desktop-menu {
          display: none;
          align-items: center;
          gap: 2rem;
        }
        .pm-nav-link {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          padding: 5px 0;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .pm-nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 2px;
          background: var(--accent);
          transition: width 0.3s cubic-bezier(0.23,1,0.32,1);
          border-radius: 2px;
        }
        .pm-nav-link:hover { color: var(--accent); }
        .pm-nav-link:hover::after,
        .pm-nav-link.active::after { width: 100%; }
        .pm-nav-link.active { color: var(--accent); }

        .pm-request-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.65rem 1.6rem;
          font-weight: 800;
          border-radius: 100px;
          cursor: pointer;
          transition: var(--transition);
          border: none;
          font-family: var(--font-outfit), 'Outfit', sans-serif;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.72rem;
          background: var(--primary);
          color: #ffffff;
          text-decoration: none;
        }
        .pm-request-btn:hover {
          background: var(--accent);
          color: var(--primary);
          transform: translateY(-3px);
          box-shadow: 0 10px 24px var(--accent-glow);
        }

        /* ── Mobile toggle ── */
        .pm-mobile-toggle {
          display: flex;
          background: transparent;
          border: none;
          color: var(--primary);
          font-size: 1.5rem;
          cursor: pointer;
        }

        /* ── Mobile menu ── */
        .pm-mobile-menu {
          background: #ffffff;
          padding: 1rem 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          border-top: 1px solid var(--border);
          box-shadow: 0 10px 24px rgba(0,0,0,0.08);
          max-height: calc(100vh - 116px);
          overflow-y: auto;
        }
        .pm-mobile-nav-link {
          font-size: 1rem;
          font-weight: 800;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: none;
        }
        .pm-mobile-nav-link.active { color: var(--accent); }
        .pm-mobile-contact {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 0.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }
        .pm-mobile-contact a {
          color: var(--text-muted);
          font-size: 0.85rem;
          text-decoration: none;
          font-family: var(--font-outfit), 'Outfit', sans-serif;
        }

        /* ── Breakpoints ── */
        @media (min-width: 1024px) {
          .pm-desktop-menu { display: flex !important; }
          .pm-mobile-toggle { display: none !important; }
        }
        @media (max-width: 768px) {
          .pm-header-inner { height: 80px; }
          .pm-logo { height: 70px; }
        }
        @media (max-width: 480px) {
          .pm-header-inner { height: 64px; }
          .pm-logo { height: 64px; max-width: 220px; }
        }
      `}</style>
    </header>
  );
}
