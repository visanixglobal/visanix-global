"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Outfit } from "next/font/google";
import { useState, useEffect } from 'react';

const outfit = Outfit({ subsets: ["latin"] });

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
            <div className={outfit.className} style={{ fontSize: '1.4rem', color: 'white', letterSpacing: '0.8px', textTransform: 'uppercase', lineHeight: '1' }}>
              <span style={{ fontWeight: '800' }}>VISANIX</span> <span style={{ color: 'var(--accent)', fontWeight: '600', textTransform: 'none', fontFamily: "'Montserrat', sans-serif" }}>Global</span>
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
          <style jsx>{`
            @media (max-width: 480px) {
              .navbar-logo { height: 45px !important; }
              .brand-text-container { transform: scale(0.85); transform-origin: left center; }
            }

            @media (min-width: 1024px) {
              .desktop-menu { display: flex !important; }
              .mobile-toggle { display: none !important; }
            }
          `}</style>
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                color: pathname === link.href ? 'var(--accent)' : 'rgba(255,255,255,0.7)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                position: 'relative'
              }}
            >
              {link.name}
              {pathname === link.href && (
                <span style={{ position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '2px', backgroundColor: 'var(--accent)', borderRadius: '2px' }}></span>
              )}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.7rem', borderRadius: '100px', marginLeft: '0.5rem' }}>
            REQUEST QUOTE
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-toggle"
          style={{
            background: 'transparent',
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
          borderTop: '1px solid rgba(255,255,255,0.05)',
          marginTop: '0.5rem'
        }}>
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              style={{
                fontSize: '1rem',
                fontWeight: '700',
                color: pathname === link.href ? 'var(--accent)' : 'white',
                textTransform: 'uppercase',
                letterSpacing: '2px'
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
