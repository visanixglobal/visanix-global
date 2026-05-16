"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className="floating-nav" 
      style={{ 
        boxShadow: isScrolled ? '0 20px 50px rgba(0,0,0,0.5)' : '0 20px 50px rgba(0,0,0,0.4)',
        padding: isMobileMenuOpen ? '0.5rem 0 2rem' : '0'
      }}
    >
      <div className="container" style={{ 
        height: 'var(--nav-height)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '0 1rem'
      }}>
        {/* Logo Lockup */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', textDecoration: 'none', zIndex: 1100 }}>
          <img src="/Logo only.png" alt="Visanix Global Logo" className="navbar-logo" style={{ height: '70px', width: 'auto', filter: 'brightness(1.2)', marginTop: '-4px' }} />
          <div className="brand-text-container" style={{ display: 'flex', flexDirection: 'column', marginTop: '6px' }}>
            <div style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.4rem', color: 'white', letterSpacing: '0.8px', textTransform: 'uppercase', lineHeight: '1' }}>
              <span style={{ fontWeight: '800' }}>VISANIX</span> <span style={{ color: 'var(--accent)', fontWeight: '600', textTransform: 'none', fontFamily: "var(--font-montserrat), sans-serif" }}>Global</span>
            </div>
            <div style={{
              fontSize: '0.32rem',
              color: 'var(--accent)',
              textTransform: 'uppercase',
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: '5px',
              fontWeight: '800',
              letterSpacing: '0.6px',
              opacity: 0.9
            }}>
              {"DELIVERING INDUSTRIAL EXCELLENCE WORLDWIDE".split("").map((char, index) => (
                <span key={index}>{char === " " ? "\u00A0" : char}</span>
              ))}
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              style={{
                fontSize: '0.8rem',
                fontWeight: '800',
                color: pathname === link.href ? 'var(--accent)' : 'rgba(255,255,255,0.85)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                position: 'relative',
                padding: '5px 0'
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.7rem', borderRadius: '100px', marginLeft: '0.5rem' }}>
            REQUEST QUOTE
          </Link>
        </div>

        <style jsx global>{`
          .nav-link {
            position: relative;
            transition: all 0.3s ease;
          }
          
          .nav-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--accent);
            transition: width 0.3s cubic-bezier(0.23, 1, 0.32, 1);
            border-radius: 2px;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .nav-link.active::after {
            width: 100%;
          }

          .nav-link:hover {
            color: var(--accent) !important;
          }

          @media (max-width: 480px) {
            .navbar-logo { height: 45px !important; }
            .brand-text-container { transform: scale(0.85); transform-origin: left center; }
          }

          @media (min-width: 1024px) {
            .desktop-menu { display: flex !important; }
            .mobile-toggle { display: none !important; }
          }
        `}</style>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-toggle"
          style={{
            background: 'var(--primary)', 
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            zIndex: 1100
          }}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="reveal" style={{ 
          padding: '1rem 2rem', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.5rem',
          borderBottom: '1px solid var(--border)',
          marginTop: '0.5rem'
        }}>
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className=""
              style={{
                fontSize: '1.1rem',
                fontWeight: '800',
                color: pathname === link.href ? 'var(--accent)' : 'white',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            REQUEST QUOTE
          </Link>
        </div>
      )}
    </nav>
  );
}
