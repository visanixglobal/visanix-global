import Link from 'next/link';

export default function Industries() {
  const industries = [
    { title: 'Chemical & Processing', desc: 'Superior chemical resistance for pumps, valves, and fluid handling systems.', icon: '🧪' },
    { title: 'Food & Pharma', desc: 'FDA compliant PTFE components ensuring purity and hygiene standards.', icon: '💊' },
    { title: 'Electrical & Power', desc: 'High dielectric strength materials for insulation and power distribution.', icon: '⚡' },
    { title: 'Automotive & Aerospace', desc: 'Precision engineered parts for high-temperature and high-wear environments.', icon: '🚀' },
    { title: 'Textile & Paper', desc: 'Non-stick coatings and components for high-speed industrial rollers.', icon: '🧵' },
    { title: 'Renewable Energy', desc: 'Critical sealing solutions for wind turbines and solar installations.', icon: '☀️' },
  ];

  return (
    <div className="reveal">
      {/* Premium Hero */}
      <section style={{
        padding: '160px 0 80px',
        background: 'linear-gradient(135deg, var(--primary) 0%, #0a1b3d 100%)',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="bg-dots" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.75rem' }}>Global Impact</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '1.25rem', marginBottom: '1.5rem' }}>Industries we <span className="gradient-text">Empower</span></h1>
          <p style={{ 
            maxWidth: '700px', 
            margin: '0 auto', 
            fontSize: '1.25rem', 
            color: 'rgba(255,255,255,0.9)',
            lineHeight: '1.6',
            fontFamily: 'Outfit, sans-serif',
            fontWeight: '400'
          }}>
            Providing specialized industrial solutions for the most demanding sectors worldwide.
          </p>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="section-padding bg-grid">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {industries.map((ind, i) => (
              <div key={i} className="glass-card" style={{ padding: '3rem', borderBottom: '4px solid transparent', transition: 'all 0.4s ease' }}>
                <div style={{ fontSize: '3rem', marginBottom: '2rem' }}>{ind.icon}</div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.25rem' }}>{ind.title}</h3>
                <p style={{ 
                  fontSize: '1.05rem', 
                  lineHeight: '1.7', 
                  color: 'var(--text-main)', 
                  opacity: 0.8,
                  marginBottom: '2rem',
                  fontFamily: 'Outfit, sans-serif'
                }}>
                  {ind.desc}
                </p>
                <Link href="/contact" style={{ 
                  fontWeight: '800', 
                  color: 'var(--primary)', 
                  textTransform: 'uppercase', 
                  fontSize: '0.75rem', 
                  letterSpacing: '1px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  Sector Enquiry <span style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Partnership CTA */}
      <section style={{ padding: '100px 0', background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to optimize your <span style={{ color: 'var(--accent)' }}>Industrial Supply Chain?</span></h2>
          <p style={{ 
            maxWidth: '600px', 
            margin: '0 auto 3rem', 
            fontSize: '1.1rem', 
            color: 'rgba(255,255,255,0.7)',
            fontFamily: 'Outfit, sans-serif'
          }}>
            Whether you need custom PTFE components or bulk industrial goods, our technical team is ready to support your requirements.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>Partner with Visanix <span style={{ fontFamily: "'Montserrat', sans-serif", marginLeft: '4px' }}>Global</span></Link>
        </div>
      </section>
    </div>
  );
}
