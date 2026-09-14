"use client";
import Link from 'next/link';

export default function EPPageClient({ product }) {
  return (
    <div className="reveal">
      {/* Hero */}
      <section style={{
        padding: 'clamp(100px, 15vw, 180px) 0 80px',
        background: 'linear-gradient(135deg, var(--primary) 0%, #0a1b3d 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="bg-dots" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <nav style={{ marginBottom: '1.5rem', fontSize: '0.85rem', opacity: 0.7 }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <Link href="/engineering-plastics" style={{ color: 'white', textDecoration: 'none' }}>Engineering Plastics</Link>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span style={{ color: 'var(--accent)' }}>{product.title}</span>
          </nav>
          <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.75rem' }}>
            Engineering Plastics Division
          </span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '1.25rem', marginBottom: '1.5rem' }}>
            {product.title} <span className="gradient-text">by Visanix Global</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '600px', fontSize: '1.1rem', lineHeight: '1.7', fontFamily: 'var(--font-outfit), sans-serif' }}>
            {product.heroDescription}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-light)' }}>
        <div className="container">

          {/* Image + Specs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            {/* Image placeholder */}
            <div className="glass-card" style={{ padding: '2rem', overflow: 'hidden', maxWidth: '500px', margin: '0 auto', width: '100%' }}>
              <div style={{
                width: '100%',
                height: '500px',
                background: '#f8fafc',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img 
                  src={product.image} 
                  alt={product.imageAlt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    padding: '2rem'
                  }}
                />
              </div>
            </div>

            {/* Specs */}
            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                Specifications & <span style={{ color: 'var(--accent)' }}>Details</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {product.specs.map((spec, i) => (
                  <div key={i} className="glass-card" style={{
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: '800',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-outfit), sans-serif'
                    }}>
                      {spec.label}
                    </span>
                    <span style={{
                      fontSize: '1rem',
                      fontWeight: '700',
                      color: 'var(--primary)',
                      fontFamily: 'var(--font-outfit), sans-serif',
                      textAlign: 'right'
                    }}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Category badge */}
              <div style={{ marginTop: '1.5rem' }}>
                <span style={{
                  background: 'var(--primary)',
                  color: 'var(--accent)',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  fontFamily: 'var(--font-outfit), sans-serif',
                  letterSpacing: '0.5px'
                }}>
                  {product.category}
                </span>
              </div>
            </div>
          </div>

          {/* Description points */}
          <div style={{ marginTop: '4rem' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>
              About <span style={{ color: 'var(--accent)' }}>{product.title}</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {product.descriptionPoints.map((point, i) => (
                <div key={i} className="glass-card" style={{ padding: '2rem' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{point.icon}</div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{point.heading}</h3>
                  <p style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.7',
                    color: 'var(--text-main)',
                    opacity: 0.8,
                    fontFamily: 'var(--font-outfit), sans-serif'
                  }}>
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          {product.applications && (
            <div style={{ marginTop: '4rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                Common <span style={{ color: 'var(--accent)' }}>Applications</span>
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {product.applications.map((app, i) => (
                  <span key={i} style={{
                    background: 'var(--primary)',
                    color: 'var(--accent)',
                    padding: '0.5rem 1.25rem',
                    borderRadius: '100px',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    fontFamily: 'var(--font-outfit), sans-serif',
                    letterSpacing: '0.5px'
                  }}>
                    {app}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          {product.faqs && product.faqs.length > 0 && (
            <div style={{ marginTop: '4rem' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                Frequently Asked <span style={{ color: 'var(--accent)' }}>Questions</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '860px' }}>
                {product.faqs.map((faq, i) => (
                  <div key={i} className="glass-card" style={{ padding: '1.75rem 2rem' }}>
                    <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{faq.q}</h3>
                    <p style={{
                      fontSize: '0.9rem',
                      lineHeight: '1.7',
                      color: 'var(--text-main)',
                      opacity: 0.85,
                      fontFamily: 'var(--font-outfit), sans-serif'
                    }}>
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back to category + CTA */}
          <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Link
              href="/engineering-plastics"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.85rem',
                fontWeight: '700',
                color: 'var(--accent)',
                textDecoration: 'none',
                fontFamily: 'var(--font-outfit), sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              ← Back to Engineering Plastics
            </Link>

            <div className="glass-card" style={{
              background: 'var(--primary)',
              color: 'white',
              textAlign: 'center',
              padding: '4rem 2rem',
              border: 'none'
            }}>
              <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>
                Need a Quote for {product.title}?
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '500px',
                margin: '0 auto 2rem',
                fontFamily: 'var(--font-outfit), sans-serif'
              }}>
                We supply standard stock and custom-cut sizes. Send us your specification or drawing and we&apos;ll respond within 24 hours.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                  Request Quote
                </Link>
                <Link href="/engineering-plastics" style={{
                  padding: '1rem 2.5rem',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderRadius: '8px',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontSize: '0.9rem'
                }}>
                  View All Materials
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
