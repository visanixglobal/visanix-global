"use client";
import Link from 'next/link';

export default function ImpexAboutClient() {
  const pillars = [
    { title: 'Direct Sourcing', desc: 'We work directly with verified Chinese textile manufacturers, ensuring competitive pricing and consistent quality for Indian wholesale buyers.', icon: '🏭' },
    { title: 'Reliable Supply', desc: 'Stable inventory and reliable delivery timelines. Whether you need a container load or a smaller trial order, we deliver on time.', icon: '📦' },
    { title: 'Quality Assured', desc: 'Every product batch is verified for GSM weight, dimensions, stitching, and material composition before it reaches our buyers.', icon: '🛡️' },
  ];

  return (
    <div className="reveal">
      <style jsx>{`
        .value-card { padding: 3rem; background: white; border-radius: 24px; border: 1px solid var(--border); transition: all 0.5s ease; }
        .value-card:hover { background: var(--primary); transform: translateY(-15px); }
        .value-card:hover h3, .value-card:hover p { color: white; }
        @media (max-width: 480px) { .value-card { padding: 2rem; } }
      `}</style>

      {/* Hero */}
      <section style={{ padding: 'clamp(120px, 20vw, 220px) 0 clamp(60px, 10vw, 120px)', background: 'linear-gradient(rgba(12,18,34,0.92), rgba(12,18,34,0.92)), url("/hd-1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, var(--accent-glow) 0%, transparent 70%)', opacity: 0.2 }} />
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(232,160,0,0.12)', border: '1px solid rgba(232,160,0,0.3)', borderRadius: '100px', padding: '6px 18px', marginBottom: '2rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
            <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.65rem' }}>A Division of Visanix Global</span>
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: '1', letterSpacing: '-2px', marginBottom: '1.5rem' }}>
            Visanix <span className="gradient-text">Impex.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: '1.7', fontFamily: 'var(--font-outfit), sans-serif' }}>
            The textile import division of Visanix Global — supplying premium microfiber and bath towels wholesale across India.
          </p>
          <div style={{ width: '60px', height: '3px', background: 'var(--accent)', margin: '0 auto', borderRadius: '10px' }} />
        </div>
      </section>

      {/* Narrative */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100px', height: '100px', borderTop: '4px solid var(--accent)', borderLeft: '4px solid var(--accent)', opacity: 0.3 }} />
              <div style={{ width: '100%', aspectRatio: '4/3', background: 'linear-gradient(135deg, var(--primary), #0a1b3d)', borderRadius: '24px', boxShadow: '0 40px 80px rgba(0,0,0,0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', padding: '3rem', textAlign: 'center' }}>
                <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>🧴</div>
                <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '0.75rem' }}>Textile Import</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-outfit), sans-serif', lineHeight: '1.7' }}>Microfiber · Coral-Velvet · Bath · Baby · Cleaning</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(232,160,0,0.15)', border: '1px solid rgba(232,160,0,0.3)', borderRadius: '100px', padding: '5px 14px', marginTop: '1.5rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
                  <span style={{ color: 'var(--accent)', fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Visanix Impex Division</span>
                </div>
              </div>
            </div>

            <div>
              <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Our Story</span>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', margin: '1.5rem 0 2.5rem', lineHeight: '1.2' }}>
                The Textile Arm of <span style={{ color: 'var(--accent)' }}>Visanix Global.</span>
              </h2>
              <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid var(--accent)', marginBottom: '2rem' }}>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-main)', fontFamily: 'var(--font-outfit), sans-serif', fontStyle: 'italic' }}>
                  &quot;Visanix Impex is the textile import division of Visanix Global — focused on sourcing and supplying premium microfiber towels, bath towels, and textile home products to retailers, hospitality businesses, and distributors across India.&quot;
                </p>
              </div>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-muted)', fontFamily: 'var(--font-outfit), sans-serif', marginBottom: '2.5rem' }}>
                Based in Paschim Vihar, New Delhi, we combine our sourcing expertise with direct relationships with Chinese textile manufacturers. Our product range covers microfiber coral-velvet towels, polyester bath towels, baby hooded towels, car cleaning towels, kitchen towels, and custom jacquard patterned designs — all available for wholesale bulk supply.
              </p>
              <Link href="/impex/products" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>View Catalogue</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding" style={{ background: 'var(--bg-light)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Our Values</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Built on <span style={{ color: 'var(--accent)' }}>Reliability.</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {pillars.map((p, i) => (
              <div key={i} className="value-card">
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{p.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', transition: 'all 0.4s ease' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1rem', transition: 'all 0.4s ease', fontFamily: 'var(--font-outfit), sans-serif' }}>{p.desc}</p>
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
            Ready to <span style={{ color: 'var(--accent)' }}>partner with us?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: '1.7', fontFamily: 'var(--font-outfit), sans-serif' }}>
            Get in touch for wholesale pricing, product samples, and bulk order details.
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/impex/contact" className="btn btn-primary" style={{ padding: '1.2rem 3.5rem' }}>Get In Touch</Link>
            <Link href="/impex/products" className="btn btn-outline" style={{ padding: '1.2rem 3.5rem', borderColor: 'white', color: 'white' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'var(--primary)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white'; }}>
              View Catalogue
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
