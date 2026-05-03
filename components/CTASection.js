"use client";
import Link from 'next/link';

export default function CTASection({ title = "Ready to elevate your industrial operations?", subtitle = "Consult with our engineered material experts today for custom solutions tailored to your technical requirements." }) {
  return (
    <section className="section-padding" style={{ 
      background: 'linear-gradient(rgba(5, 15, 33, 0.95), rgba(5, 15, 33, 0.95)), url("/hd-1.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: 'white',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--accent-glow)', opacity: 0.1, pointerEvents: 'none' }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            {title}
          </h2>
          <p style={{ 
            color: 'rgba(255,255,255,0.7)', 
            fontSize: '1.15rem', 
            marginBottom: '3rem', 
            lineHeight: '1.7',
            fontFamily: 'Outfit, sans-serif'
          }}>
            {subtitle}
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3.5rem' }}>Get A Quote</Link>
            <Link href="/products" className="btn btn-outline" style={{ padding: '1.2rem 3.5rem', borderColor: 'white', color: 'white' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'var(--primary)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white'; }}
            >
              Our Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
