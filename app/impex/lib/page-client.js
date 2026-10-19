"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ImpexHome() {
  const rotatingTexts = ["Microfiber Towels", "Bath Towels", "Baby Towels", "Coral-Velvet Towels"];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTextIndex(p => (p + 1) % rotatingTexts.length), 3000);
    return () => clearInterval(t);
  }, []);

  const categories = [
    { icon: '🛁', title: 'Bath Towels', desc: 'Premium microfiber and polyester bath towels in standard sizes 56×112cm, 67×137cm, 70×140cm. Bulk wholesale supply.' },
    { icon: '🧴', title: 'Face & Hand Towels', desc: 'Microfiber coral-velvet face towels in 30×30, 40×60cm. Soft, absorbent, and fast-drying for hospitality and retail.' },
    { icon: '👶', title: 'Baby Towels', desc: 'Hooded baby towels, baby bath towels, and baby washcloths. Gentle microfiber for sensitive skin.' },
    { icon: '🚗', title: 'Cleaning Towels', desc: 'Microfiber car-cleaning and general-purpose cleaning towels. High GSM, lint-free, and reusable.' },
    { icon: '🍃', title: 'Kitchen Towels', desc: 'Cotton-gauze and microfiber kitchen towels for foodservice and retail. Jacquard and patterned options available.' },
    { icon: '🎨', title: 'Custom & Jacquard', desc: 'Patterned, jacquard, and custom-branding towels. OEM orders accepted for hotel, hospitality, and branded retail.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section style={{ minHeight: '88vh', background: 'var(--primary)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '0 0 120px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: 'min(500px,80vw)', height: 'min(500px,80vw)', background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)', filter: 'blur(100px)', opacity: 0.2, zIndex: 2, pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(232,160,0,0.12)', border: '1px solid rgba(232,160,0,0.3)', borderRadius: '100px', padding: '6px 18px', marginBottom: '2rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
              <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.65rem' }}>A Division of Visanix Global</span>
            </div>

            <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 7vw, 5rem)', marginBottom: '2rem', lineHeight: '1.1', letterSpacing: '-0.04em' }}>
              Premium Wholesale<br />
              <div style={{ height: '1.4em', overflow: 'hidden', paddingBottom: '0.2em' }}>
                <span key={textIndex} className="gradient-text rotate-text-enter" style={{ display: 'inline-block', paddingBottom: '0.1em' }}>
                  {rotatingTexts[textIndex]}
                </span>
              </div>
            </h1>

            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.7', maxWidth: '780px', margin: '0 auto 4rem', fontFamily: 'var(--font-outfit), sans-serif', fontWeight: '500' }}>
              Visanix <span style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: '600' }}>Impex</span> imports and supplies{' '}
              <strong style={{ color: 'var(--accent)', fontWeight: '800' }}>microfiber towels, coral-velvet towels, bath towels, baby towels, and cleaning towels</strong>{' '}
              to retailers, distributors, hotels, and hospitality businesses across India. Direct sourcing from verified manufacturers with competitive wholesale pricing.
            </p>

            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link href="/impex/products" className="btn btn-primary" style={{ padding: '1.2rem 3.5rem' }}>View Catalogue</Link>
              <Link href="/impex/contact" style={{ color: 'white', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1.5px', display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid rgba(232,160,0,0.3)', paddingBottom: '4px', paddingTop: '4px', minHeight: '44px' }}>
                Request Wholesale Quote <span style={{ color: 'var(--accent)', fontSize: '1.2rem' }}>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="container" style={{ position: 'absolute', bottom: '50px', left: 0, right: 0, zIndex: 4, pointerEvents: 'none' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6rem', opacity: 0.7, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '40px', maxWidth: '800px', margin: '0 auto', flexWrap: 'wrap' }}>
            {[{ val: 'Direct', label: 'Factory Sourcing' }, { val: 'Bulk', label: 'Wholesale Supply' }, { val: 'Pan-India', label: 'Distribution' }].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'white' }}>{s.val}</div>
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)', fontWeight: '700', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '2px' }}>Our Range</span>
            <h2 style={{ fontSize: '3rem', marginTop: '1rem' }}>Towel <span style={{ color: 'var(--secondary)' }}>Categories.</span></h2>
            <p style={{ maxWidth: '600px', margin: '1.5rem auto 0', fontSize: '1.1rem', lineHeight: '1.7', fontFamily: 'var(--font-outfit), sans-serif' }}>
              Microfiber, coral-velvet, polyester, and cotton-gauze towels sourced from verified manufacturers — supplied wholesale across India.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {categories.map((cat, i) => (
              <div key={i} className="glass-card" style={{ padding: '3rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{cat.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{cat.title}</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '2rem', fontFamily: 'var(--font-outfit), sans-serif' }}>{cat.desc}</p>
                <Link href="/impex/products" style={{ fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  View Products <span style={{ color: 'var(--accent)' }}>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Visanix Impex */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '2px' }}>Why Partner With Us</span>
            <h2 style={{ fontSize: '3rem', marginTop: '1rem' }}>The Visanix Impex <span style={{ color: 'var(--secondary)' }}>Advantage.</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { icon: '🏭', title: 'Direct Factory Sourcing', desc: 'We source directly from verified Chinese textile manufacturers — cutting out middlemen to deliver competitive wholesale pricing to Indian buyers.' },
              { icon: '📦', title: 'Bulk Order Capability', desc: 'Supplying large-volume orders to retailers, distributors, hotel chains, and hospitality businesses. Consistent quality across batches.' },
              { icon: '🛡️', title: 'Quality Verified', desc: 'Every shipment is checked for GSM, dimensions, stitching quality, and material composition before dispatch to Indian buyers.' },
            ].map((feat, i) => (
              <div key={i} className="glass-card" style={{ padding: '3.5rem 2.5rem', textAlign: 'center', background: 'var(--bg-light)' }}>
                <div style={{ width: '80px', height: '80px', background: 'white', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 2.5rem', border: '1px solid var(--border)' }}>{feat.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>{feat.title}</h3>
                <p style={{ fontSize: '0.95rem', fontFamily: 'var(--font-outfit), sans-serif', lineHeight: '1.7', opacity: 0.8 }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--accent-glow)', opacity: 0.08, pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 5, maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
            <span style={{ height: '1px', width: '24px', background: 'var(--accent)' }} />
            <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.7rem' }}>Visanix Impex · A Division of Visanix Global</span>
            <span style={{ height: '1px', width: '24px', background: 'var(--accent)' }} />
          </div>
          <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>
            Ready to place a <span style={{ color: 'var(--accent)' }}>wholesale order?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: '1.7', fontFamily: 'var(--font-outfit), sans-serif' }}>
            Get in touch with our team for bulk pricing, samples, and product specifications.
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/impex/contact" className="btn btn-primary" style={{ padding: '1.2rem 3.5rem' }}>Get A Quote</Link>
            <Link href="/impex/products" className="btn btn-outline" style={{ padding: '1.2rem 3.5rem', borderColor: 'white', color: 'white' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'var(--primary)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white'; }}>
              Our Catalogue
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
