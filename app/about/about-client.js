"use client";
import CTASection from '@/components/CTASection';

export default function About() {
  return (
    <div className="reveal">
      <style jsx>{`
        .timeline-container { maxWidth: 900px; margin: 0 auto; position: relative; }
        .timeline-line { position: absolute; left: 50%; transform: translateX(-50%); width: 2px; height: 100%; background: var(--border); zIndex: 1; }
        .timeline-item { display: flex; width: 50%; padding: 1.5rem 3rem; position: relative; }
        .timeline-dot { position: absolute; top: 2.2rem; width: 16px; height: 16px; background: var(--accent); borderRadius: 50%; zIndex: 2; boxShadow: 0 0 10px var(--accent-glow); }
        
        @media (max-width: 768px) {
          .timeline-line { left: 20px; transform: none; }
          .timeline-item { width: 100% !important; margin-left: 0 !important; padding: 1rem 0 1rem 50px !important; justify-content: flex-start !important; }
          .timeline-dot { left: 12px !important; right: auto !important; }
        }
      `}</style>

      {/* Premium Hero */}
      <section style={{
        padding: '180px 0 100px',
        background: 'linear-gradient(135deg, var(--primary) 0%, #0a1b3d 100%)',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '400px', height: '400px', background: 'var(--accent-glow)', filter: 'blur(100px)', opacity: 0.2 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.75rem' }}>Our Heritage</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '1.25rem', marginBottom: '1.5rem' }}>Precision & <span className="gradient-text">Purpose</span></h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', fontFamily: 'Outfit, sans-serif' }}>
            Visanix <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '600' }}>Global</span> is more than a supplier; we are strategic industrial solution partners for the world&apos;s most critical industries.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1.5rem' }}>Built on <span style={{ color: 'var(--accent)' }}>Trust</span>.</h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-muted)', fontFamily: 'Outfit' }}>
                Founded as a premier trading house, Visanix <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '600' }}>Global</span> has evolved into a leading provider of engineered industrial solutions. Our journey is defined by a relentless commitment to quality, technical expertise, and a roadmap towards integrated manufacturing.
              </p>
              <div style={{ marginTop: '2.5rem' }}>
                <div style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Our Vision</h4>
                  <p style={{ fontSize: '0.95rem', fontFamily: 'Outfit' }}>To be the leading global integrated provider of premium engineered materials through innovation and partnership excellence.</p>
                </div>
              </div>
            </div>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {[
                { title: 'Customer Focus', desc: 'Prioritizing client needs with tailored material solutions.', icon: '👥' },
                { title: 'Integrity', desc: 'Conducting business with absolute transparency and ethics.', icon: '⚖️' },
                { title: 'Innovation', desc: 'Consistent improvement in technical support and supply lines.', icon: '💡' }
              ].map((val, i) => (
                <div key={i} className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                  <div style={{ fontSize: '1.8rem' }}>{val.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '1rem' }}>{val.title}</h4>
                    <p style={{ fontSize: '0.8rem', fontFamily: 'Outfit' }}>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Timeline */}
      <section className="section-padding bg-light">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Our <span style={{ color: 'var(--accent)' }}>Legacy</span></h2>
          </div>
          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            {[
              { year: 'Founding', title: 'Trading Excellence', desc: 'Established as a premier trading house for high-performance PTFE resins.', pos: 'left' },
              { year: 'Evolution', title: 'Global Reach', desc: 'Expansion of export divisions to serve European and Middle Eastern markets.', pos: 'right' },
              { year: '2026+', title: 'Manufacturing Integration', desc: 'Strategic plan for integrated manufacturing facilities for high-performance polymers.', pos: 'left' }
            ].map((item, i) => (
              <div key={i} className="timeline-item" style={{ 
                justifyContent: item.pos === 'left' ? 'flex-end' : 'flex-start',
                marginLeft: item.pos === 'right' ? '50%' : '0'
              }}>
                <div className="timeline-dot" style={{ 
                  right: item.pos === 'left' ? '-8px' : 'auto',
                  left: item.pos === 'right' ? '-8px' : 'auto',
                }}></div>
                <div className="glass-card" style={{ padding: '2rem', background: 'white', width: '100%' }}>
                  <div style={{ color: 'var(--accent)', fontWeight: '800', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{item.year}</div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.85rem', fontFamily: 'Outfit' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={<>Partner with Visanix <span style={{ fontFamily: "'Montserrat', sans-serif" }}>Global</span></>} subtitle="Experience the synergy of technical mastery and global logistics excellence for your next industrial project." />
    </div>
  );
}
