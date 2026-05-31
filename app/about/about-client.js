"use client";
import CTASection from '@/components/CTASection';
import Link from 'next/link';

export default function About() {
  const pillars = [
    {
      title: "Strict Quality Standards",
      desc: "We maintain rigorous testing protocols for every engineering component to ensure peak performance in demanding industrial environments.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      )
    },
    {
      title: "Timely Delivery",
      desc: "Our global export logistics are optimized for speed and reliability, ensuring your critical supply chain remains uninterrupted.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: "Consistent Supply",
      desc: "Building long-term partnerships through a stable and scalable inventory of high-performance polymer products.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
      )
    }
  ];

  const milestones = [
    { year: "The Foundation", title: "Global Export Excellence", desc: "Established as a specialized supplier and exporter of high-quality PTFE resins and engineering materials." },
    { year: "Industry Leader", title: "Technical Solution Partner", desc: "Evolved into a strategic partner for heavy industries, focusing on custom formulations and precision-engineered parts." }
  ];

  return (
    <div className="reveal">
      <style jsx>{`
        .timeline-container { position: relative; max-width: 1000px; margin: 4rem auto; padding: 0 1rem; overflow: hidden; }
        .timeline-line { position: absolute; left: 50%; transform: translateX(-50%); width: 2px; height: 100%; background: var(--border); opacity: 0.5; }
        .timeline-card { background: white; padding: 2.5rem; border-radius: var(--radius-md); border: 1px solid var(--border); position: relative; width: calc(50% - 50px); transition: var(--transition); min-width: 0; }
        .timeline-card:hover { transform: translateY(-10px); box-shadow: 0 30px 60px rgba(0,0,0,0.1); border-color: var(--accent); }
        .timeline-card::after { content: ''; position: absolute; top: 30px; width: 20px; height: 2px; background: var(--accent); }
        .timeline-item:nth-child(odd) .timeline-card { margin-left: auto; }
        .timeline-item:nth-child(odd) .timeline-card::after { left: -20px; }
        .timeline-item:nth-child(even) .timeline-card::after { right: -20px; }
        .timeline-dot { position: absolute; left: 50%; top: 30px; transform: translateX(-50%); width: 12px; height: 12px; background: var(--accent); border-radius: 50%; z-index: 5; box-shadow: 0 0 0 6px white, 0 0 20px var(--accent-glow); }
        
        .value-card { padding: 3rem; background: white; border-radius: 24px; border: 1px solid var(--border); transition: all 0.5s ease; }
        .value-card:hover { background: var(--primary); transform: translateY(-15px); }
        .value-card:hover h3, .value-card:hover p { color: white; }
        .value-card:hover .icon-box { background: var(--accent); color: var(--primary); }

        @media (max-width: 768px) {
          .timeline-line { left: 20px; }
          .timeline-dot { left: 20px !important; transform: translateX(-50%) !important; }
          .timeline-card { width: calc(100% - 60px); margin-left: 60px !important; }
          .timeline-card::after { left: -20px !important; right: auto !important; }
        }

        @media (max-width: 480px) {
          .value-card { padding: 2rem; }
          .timeline-card { padding: 1.5rem; }
        }
      `}</style>

      {/* Hero Section */}
      <section style={{
        padding: 'clamp(120px, 20vw, 220px) 0 clamp(60px, 10vw, 120px)',
        background: 'linear-gradient(rgba(5, 15, 41, 0.9), rgba(5, 15, 41, 0.9)), url("/hd-1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, var(--accent-glow) 0%, transparent 70%)', opacity: 0.15 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <span style={{
            color: 'var(--accent)',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '5px',
            fontSize: '0.8rem',
            display: 'block',
            marginBottom: '1.5rem'
          }}>Establishing Industrial Excellence</span>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            lineHeight: '1',
            letterSpacing: '-2px',
            marginBottom: '2rem'
          }}>Precision. Quality. <br /><span className="gradient-text">Trust.</span></h1>
          <div style={{ width: '80px', height: '4px', background: 'var(--accent)', margin: '0 auto 2rem', borderRadius: '10px' }}></div>
        </div>
      </section>

      {/* Corporate Narrative */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100px', height: '100px', borderTop: '4px solid var(--accent)', borderLeft: '4px solid var(--accent)', opacity: 0.3 }}></div>
              <img src="/ptfe-rod-hd.jpg" alt="PTFE Rod – Visanix Global PTFE Supplier Gurugram India" style={{ width: '100%', borderRadius: '24px', boxShadow: '0 40px 80px rgba(0,0,0,0.15)' }} />
            </div>

            <div>
              <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Strategic Brand Narrative</span>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', margin: '1.5rem 0 2.5rem', lineHeight: '1.2' }}>A Global Pillar of <span style={{ color: 'var(--accent)' }}>Industrial Reliability.</span></h2>
              <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '1px solid var(--border)' }}>
                <p style={{
                  fontSize: '1.25rem',
                  lineHeight: '1.8',
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-outfit), sans-serif',
                  marginBottom: '2rem',
                  fontStyle: 'italic'
                }}>
                  &quot;Visanix <span style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: '600' }}>Global</span> is a trusted supplier and exporter of high-quality PTFE products and engineering materials. We specialize in providing reliable solutions for various industrial applications while maintaining strict quality standards.&quot;
                </p>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.7',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-outfit), sans-serif'
                }}>
                  Our focus is on delivering the right products, timely service, and strong customer support. At Visanix Global, we aim to build long-term partnerships through trust, quality, and consistent supply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section-padding" style={{ background: 'var(--bg-light)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Our Operational Values</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Built on a Foundation of <span style={{ color: 'var(--accent)' }}>Excellence.</span></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {pillars.map((pillar, i) => (
              <div key={i} className="value-card">
                <div className="icon-box" style={{
                  width: '70px',
                  height: '70px',
                  background: 'var(--bg-light)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  marginBottom: '2rem',
                  transition: 'all 0.4s ease'
                }}>
                  <div style={{ width: '32px' }}>{pillar.icon}</div>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem', transition: 'all 0.4s ease' }}>{pillar.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1rem', transition: 'all 0.4s ease', fontFamily: 'var(--font-outfit), sans-serif' }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Heritage & Growth</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Our Strategic <span style={{ color: 'var(--accent)' }}>Roadmap.</span></h2>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            {milestones.map((item, i) => (
              <div key={i} className="timeline-item" style={{ marginBottom: '4rem', display: 'flex', position: 'relative' }}>
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div style={{ color: 'var(--accent)', fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '1px' }}>{item.year}</div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', fontFamily: 'var(--font-outfit), sans-serif' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={<>Ready to Build a <span style={{ color: 'var(--accent)' }}>Long-Term Partnership?</span></>}
        subtitle="Consult with our material experts today for custom solutions tailored to your technical requirements."
      />
    </div>
  );
}
