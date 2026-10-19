"use client";
import Link from 'next/link';

export default function PolymersCTASection({
  title = "Ready to elevate your industrial operations?",
  subtitle = "Consult with our engineered material experts today for custom solutions tailored to your technical requirements.",
}) {
  return (
    <section className="section-padding" style={{
      background: 'linear-gradient(rgba(12, 18, 34, 0.96), rgba(12, 18, 34, 0.96)), url("/hd-1.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Gold glow overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'var(--accent-glow)', opacity: 0.08, pointerEvents: 'none' }} />

      {/* Subdivision badge */}
      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
          <span style={{ height: '1px', width: '24px', background: 'var(--accent)' }} />
          <span style={{
            color: 'var(--accent)',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontSize: '0.7rem',
            fontFamily: 'var(--font-outfit), sans-serif',
          }}>
            Visanix Polymers · A Division of Visanix Global
          </span>
          <span style={{ height: '1px', width: '24px', background: 'var(--accent)' }} />
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
          }}>
            {title}
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: '1.15rem',
            marginBottom: '3rem',
            lineHeight: '1.7',
            fontFamily: 'var(--font-outfit), sans-serif',
          }}>
            {subtitle}
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/polymers/contact" className="btn btn-primary" style={{ padding: '1.2rem 3.5rem' }}>
              Get A Quote
            </Link>
            <Link
              href="/polymers/products"
              className="btn btn-outline"
              style={{ padding: '1.2rem 3.5rem', borderColor: 'white', color: 'white' }}
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
