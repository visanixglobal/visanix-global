"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function ImpexNavbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/impex' },
    { name: 'About Us', href: '/impex/about' },
    { name: 'Products', href: '/impex/products' },
    { name: 'Contact', href: '/impex/contact' },
  ];

  const isActive = (href) => {
    if (href === '/impex') return pathname === '/impex';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className="im-site-header">
      {/* Dark navy top bar */}
      <div className="im-topbar">
        <div className="im-topbar-inner container">
          <div className="im-topbar-tag">
            <span className="im-gold-dot" />
            MICROFIBER · BATH TOWELS · WHOLESALE IMPORT
          </div>
          <div className="im-topbar-contact">
            <a href="mailto:sahil@visanixglobal.com" className="im-topbar-link topbar-email">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              sahil@visanixglobal.com
            </a>
            <span className="topbar-divider" />
            <a href="tel:+919667445766" className="im-topbar-link">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              +91 96674 45766
            </a>
          </div>
        </div>
      </div>

      {/* Main nav row */}
      <div className="im-header-inner container">
        <Link href="/impex" className="im-logo-link">
          <img src="/visanix-impex-logo.png" alt="Visanix Impex Logo" className="im-logo" fetchPriority="high" />
        </Link>

        <div className="im-desktop-menu">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`im-nav-link ${isActive(link.href) ? 'active' : ''}`}>
              {link.name}
            </Link>
          ))}
          <Link href="/impex/contact" className="im-request-btn">
            REQUEST QUOTE
          </Link>
        </div>

        <button className="im-mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="im-mobile-menu reveal">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`im-mobile-nav-link ${isActive(link.href) ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
          <Link href="/impex/contact" className="im-request-btn" style={{ marginTop: '0.5rem', display: 'inline-flex' }} onClick={() => setIsMobileMenuOpen(false)}>
            REQUEST QUOTE
          </Link>
          <div className="im-mobile-contact">
            <a href="mailto:sahil@visanixglobal.com">sahil@visanixglobal.com</a>
            <a href="tel:+919667445766">+91 96674 45766</a>
          </div>
        </div>
      )}

      <style jsx global>{`
        .im-site-header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1100;
          background: #ffffff; box-shadow: 0 2px 16px rgba(0,0,0,0.1);
          font-family: var(--font-outfit), 'Outfit', sans-serif;
        }
        .im-topbar { background: var(--primary); height: 36px; display: flex; align-items: center; }
        .im-topbar-inner { display: flex; align-items: center; justify-content: space-between; width: 100%; height: 100%; gap: 1rem; }
        .im-topbar-tag { display: flex; align-items: center; gap: 0.6rem; color: rgba(255,255,255,0.8); font-size: 0.7rem; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; }
        .im-gold-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 8px var(--accent), 0 0 14px var(--accent-glow); flex-shrink: 0; animation: imDotPulse 2s ease-in-out infinite; }
        @keyframes imDotPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
        .im-topbar-contact { display: flex; align-items: center; gap: 1rem; }
        .im-topbar-link { display: flex; align-items: center; gap: 0.4rem; color: rgba(255,255,255,0.7); font-size: 0.7rem; font-weight: 600; text-decoration: none; transition: color 0.2s; }
        .im-topbar-link:hover { color: var(--accent); }
        .im-header-inner { display: flex; align-items: center; justify-content: space-between; height: 100px; width: 100%; position: relative; }
        .im-logo-link { display: flex; align-items: center; text-decoration: none; flex-shrink: 0; height: 100%; }
        .im-logo { height: 90px; width: auto; max-width: 280px; object-fit: contain; }
        .im-desktop-menu { display: none; align-items: center; gap: 2rem; }
        .im-nav-link { font-size: 0.8rem; font-weight: 800; color: var(--primary); text-transform: uppercase; letter-spacing: 1px; position: relative; padding: 5px 0; text-decoration: none; transition: color 0.3s ease; }
        .im-nav-link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 2px; background: var(--accent); transition: width 0.3s cubic-bezier(0.23,1,0.32,1); border-radius: 2px; }
        .im-nav-link:hover { color: var(--accent); }
        .im-nav-link:hover::after, .im-nav-link.active::after { width: 100%; }
        .im-nav-link.active { color: var(--accent); }
        .im-request-btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.65rem 1.6rem; font-weight: 800; border-radius: 100px; cursor: pointer; transition: var(--transition); border: none; font-family: var(--font-outfit), 'Outfit', sans-serif; text-transform: uppercase; letter-spacing: 1px; font-size: 0.72rem; background: var(--primary); color: #ffffff; text-decoration: none; }
        .im-request-btn:hover { background: var(--accent); color: var(--primary); transform: translateY(-3px); box-shadow: 0 10px 24px var(--accent-glow); }
        .im-mobile-toggle { display: flex; background: transparent; border: none; color: var(--primary); font-size: 1.5rem; cursor: pointer; }
        .im-mobile-menu { background: #ffffff; padding: 1rem 1.5rem 2rem; display: flex; flex-direction: column; gap: 1.25rem; border-top: 1px solid var(--border); box-shadow: 0 10px 24px rgba(0,0,0,0.08); max-height: calc(100vh - 136px); overflow-y: auto; }
        .im-mobile-nav-link { font-size: 1rem; font-weight: 800; color: var(--primary); text-transform: uppercase; letter-spacing: 1px; text-decoration: none; }
        .im-mobile-nav-link.active { color: var(--accent); }
        .im-mobile-contact { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem; padding-top: 1rem; border-top: 1px solid var(--border); }
        .im-mobile-contact a { color: var(--text-muted); font-size: 0.85rem; text-decoration: none; }
        @media (min-width: 1024px) { .im-desktop-menu { display: flex !important; } .im-mobile-toggle { display: none !important; } }
        @media (max-width: 768px) { .im-header-inner { height: 80px; } .im-logo { height: 70px; } }
        @media (max-width: 480px) { .im-header-inner { height: 64px; } .im-logo { height: 64px; max-width: 220px; } }
      `}</style>
    </header>
  );
}
