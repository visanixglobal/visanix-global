"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import CTASection from '@/components/CTASection';

const rotatingTexts = ["Industrial Goods", "Polymer Solutions", "Engineered Parts", "Bespoke Components"];
const slideImages = ["/hd-1.jpg", "/ptfe-rod-hd.jpg", "/ptfe-flexible-sheet.jpg"];

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const textTimer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    const slideTimer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slideImages.length);
    }, 4000);

    return () => {
      clearInterval(textTimer);
      clearInterval(slideTimer);
    };
  }, [rotatingTexts.length, slideImages.length]);

  const currentImage = slideImages[slideIndex] || slideImages[0];

  return (
    <div>
      {/* Premium Hero Section - Full Width Centered */}
      <section style={{
        minHeight: '88vh',
        background: 'var(--primary)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '30px 0 120px',
        textAlign: 'center'
      }}>
        {/* Background Industrial Image */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'url("/hd-1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.35,
          filter: 'grayscale(60%) brightness(0.3) blur(1px)',
          zIndex: 1
        }}></div>

        {/* Animated Background Glows */}
        <div style={{
          position: 'absolute',
          top: '20%', left: '10%',
          width: 'min(500px, 80vw)', height: 'min(500px, 80vw)',
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          filter: 'blur(100px)',
          opacity: 0.2,
          zIndex: 2,
          pointerEvents: 'none'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <span style={{ height: '1px', width: '30px', background: 'var(--accent)' }}></span>
              <span style={{
                color: 'var(--accent)',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '4px',
                fontSize: '0.75rem'
              }}>
                Strategic Global Sourcing
              </span>
              <span style={{ height: '1px', width: '30px', background: 'var(--accent)' }}></span>
            </div>

            <h1 style={{
              color: 'white',
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              marginBottom: '2rem',
              lineHeight: '1.1',
              letterSpacing: '-0.04em'
            }}>
              Premium Global <br />
              <div style={{ height: '1.4em', overflow: 'hidden', paddingBottom: '0.2em' }}>
                <span key={textIndex} className="gradient-text rotate-text-enter" style={{ display: 'inline-block', paddingBottom: '0.1em' }}>
                  {rotatingTexts[textIndex]}
                </span>
              </div>
            </h1>

            <p style={{
              fontSize: '1.35rem',
              color: 'rgba(255,255,255,1)',
              marginBottom: '4rem',
              lineHeight: '1.7',
              maxWidth: '820px',
              margin: '0 auto 4rem',
              fontFamily: 'var(--font-outfit), sans-serif',
              fontWeight: '500',
              letterSpacing: '0.3px'
            }}>
              Visanix <span style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: '600' }}>Global</span> is your trusted <strong style={{ color: 'var(--accent)', fontWeight: '800' }}>PTFE and Teflon supplier across India</strong> — supplying virgin and filled PTFE grades, fluoropolymer engineering materials, and integrated supply chain solutions to chemical plants, pharmaceutical manufacturers, and industrial OEM manufacturers.
            </p>

            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 11 }}>
              <Link href="/products" className="btn btn-primary" style={{ padding: '1.2rem 3.5rem' }}>Our Portfolio</Link>
              <Link href="/contact" style={{
                color: 'white',
                fontWeight: '800',
                textTransform: 'uppercase',
                fontSize: '0.85rem',
                letterSpacing: '1.5px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                borderBottom: '1px solid rgba(252, 191, 73, 0.3)',
                paddingBottom: '4px',
                paddingTop: '4px',
                minHeight: '44px' // Ensure minimum touch target height
              }}>
                Consult an Expert <span style={{ color: 'var(--accent)', fontSize: '1.2rem' }}>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stat badges */}
        <div className="container" style={{ position: 'absolute', bottom: '50px', left: '0', right: '0', zIndex: 4, pointerEvents: 'none' }}>
          <div className="stats-container" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            opacity: 0.7,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '40px',
            maxWidth: '1000px',
            margin: '0 auto',
            flexWrap: 'wrap',
            pointerEvents: 'none'
          }}>
            <style jsx>{`
              @media (min-width: 768px) {
                .stats-container { gap: 6rem !important; }
              }
              @media (max-width: 480px) {
                .hero-section { padding: 100px 0 80px !important; }
                .stats-container { display: none !important; }
              }
            `}</style>
            {[
              { val: 'Reliable', label: 'Global Network' },
              { val: '100%', label: 'Quality Assured' },
              { val: 'ISO', label: 'Certified' }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center', minWidth: '80px' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'white' }}>{stat.val}</div>
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent)', fontWeight: '700', marginTop: '4px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Goods Strategy Section with HD Rod and Custom Slideshow */}
      <section className="section-padding" style={{ background: 'white', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '30px' }}>
              <div style={{
                width: '100%',
                maxWidth: '480px',
                height: '480px',
                border: '2px solid var(--border)',
                borderRadius: '40px',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px'
              }}>
                <div className="bg-grid" style={{ position: 'absolute', inset: '40px', opacity: 0.1, zIndex: 1 }}></div>

                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '30px',
                  overflow: 'hidden',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                  position: 'relative',
                  zIndex: 2,
                  background: 'white'
                }}>
                  <img
                    key={slideIndex}
                    src={currentImage}
                    alt="Industrial Excellence Showcase"
                    className="rotate-text-enter"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      padding: currentImage?.includes('hd-1') ? '0' : '2rem',
                      background: '#f8fafc',
                      filter: 'contrast(1.02)'
                    }}
                  />

                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(10, 27, 61, 0.8)',
                    backdropFilter: 'blur(10px)',
                    padding: '0.5rem 1.25rem',
                    borderRadius: '100px',
                    color: 'var(--accent)',
                    fontSize: '0.65rem',
                    fontWeight: '800',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {currentImage?.includes('rod-hd') ? 'PTFE Rod' : currentImage?.includes('flexible-sheet') ? 'Custom PTFE' : 'Industrial'}
                  </div>

                  <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
                    {slideImages.map((_, i) => (
                      <div key={i} style={{
                        width: i === slideIndex ? '20px' : '6px',
                        height: '6px',
                        background: 'var(--primary)',
                        borderRadius: '10px',
                        transition: 'all 0.3s ease',
                        opacity: 0.6
                      }}></div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '20px',
                background: 'var(--accent)',
                padding: '1.5rem 2rem',
                borderRadius: '15px',
                boxShadow: '0 15px 30px rgba(252, 191, 73, 0.2)',
                zIndex: 5
              }}>
                <div style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--primary)' }}>#01 Choice</div>
                <div style={{ fontSize: '0.6rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--primary)', opacity: 0.8 }}>For Industrial Polymers</div>
              </div>
            </div>

            <div>
              <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '2px' }}>Strategic Solutions</span>
              <h2 style={{ fontSize: '3rem', margin: '1rem 0 2rem' }}>Comprehensive <br /><span style={{ color: 'var(--secondary)' }}>Industrial Goods.</span></h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', opacity: 0.7, lineHeight: '1.8', fontFamily: 'var(--font-outfit), sans-serif', marginBottom: '1.5rem' }}>
                As a leading <strong>engineering plastics supplier in Gurugram</strong>, we bridge the gap between complex engineering needs and global manufacturing capabilities. Our industrial goods division ensures that your operations have access to high-performance components with full material traceability.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-main)', opacity: 0.65, lineHeight: '1.8', fontFamily: 'var(--font-outfit), sans-serif', marginBottom: '2.5rem' }}>
                We supply <strong>virgin and filled PTFE grades</strong> — including glass filled, carbon filled, and graphite filled — as well as Teflon-branded equivalents, rubber seals, and custom machined fluoropolymer components to B2B customers across India and internationally.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛡️</div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Quality Audited</h4>
                  <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Meeting rigorous international standards for every part.</p>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💡</div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Tech Insights</h4>
                  <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Engineering consultation for optimal material selection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Visanix Advantage - Replacing Industrial Expertise */}
      <section className="section-padding bg-grid" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '2px' }}>Why Partner With Us</span>
            <h2 style={{ fontSize: '3rem', marginTop: '1rem' }}>The Visanix <span style={{ color: 'var(--secondary)' }}>Advantage.</span></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Material Science', desc: 'Expertise in high-performance polymers and PTFE engineering for extreme industrial environments.', icon: '🔬' },
              { title: 'Global Precision', desc: 'Strategic sourcing and integrated logistics ensuring your components arrive on time, anywhere in the world.', icon: '🌍' },
              { title: 'Certified Quality', desc: 'Rigorous ISO-compliant testing and full material traceability for every part we deliver.', icon: '🛡️' }
            ].map((feat, i) => (
              <div key={i} className="glass-card" style={{ padding: '3.5rem 2.5rem', textAlign: 'center', background: 'white' }}>
                <div style={{
                  width: '80px', height: '80px',
                  background: 'var(--bg-light)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  margin: '0 auto 2.5rem',
                  border: '1px solid var(--border)'
                }}>
                  {feat.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>{feat.title}</h3>
                <p style={{ marginBottom: '2.5rem', fontSize: '0.95rem', fontFamily: 'var(--font-outfit), sans-serif', lineHeight: '1.7', opacity: 0.7 }}>{feat.desc}</p>
                <Link href="/about" style={{
                  fontWeight: '800',
                  color: 'var(--primary)',
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  borderBottom: '2px solid var(--accent)',
                  paddingBottom: '4px'
                }}>
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span style={{
                color: 'var(--accent)',
                fontWeight: '800',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                letterSpacing: '2px'
              }}>Our Heritage</span>
              <h2 style={{ fontSize: '3.2rem', margin: '1rem 0 2.5rem' }}>Leading with <br /> <span style={{ color: 'var(--accent)' }}>Material Science.</span></h2>
              <p style={{
                fontSize: '1.2rem',
                marginBottom: '3rem',
                lineHeight: '1.8',
                color: 'var(--text-main)',
                opacity: 0.8,
                fontFamily: 'var(--font-outfit), sans-serif'
              }}>
                Visanix Global combines deep sourcing expertise with technical precision. As a trusted <strong>fluoropolymer supplier in India</strong>, we specialise in high-performance PTFE — also widely known as Teflon — across a wide range of industrial engineered goods with a focus on global supply chain excellence. From virgin PTFE rods and sheets to filled grades and custom machined components, we serve chemical plants, pharmaceutical manufacturers, and industrial OEM manufacturers across Gurugram, Delhi NCR, and pan-India.
              </p>
              <div style={{ display: 'flex', gap: '4rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
                <div>
                  <h4 style={{ color: 'var(--accent)', fontSize: '2.8rem', marginBottom: '0.5rem' }}>100%</h4>
                  <p style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', fontFamily: 'var(--font-outfit), sans-serif' }}>Traceability</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--accent)', fontSize: '2.8rem', marginBottom: '0.5rem' }}>24/7</h4>
                  <p style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', fontFamily: 'var(--font-outfit), sans-serif' }}>Support</p>
                </div>
              </div>
              <Link href="/about" className="btn btn-outline" style={{ padding: '1.2rem 4rem' }}>Our Mission</Link>
            </div>
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '30px' }}>
              <div style={{
                width: '100%', height: 'auto', minHeight: '300px',
                background: 'var(--primary)',
                borderRadius: '30px',
                boxShadow: '0 40px 80px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                padding: '3rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '5rem', marginBottom: '2rem' }}>🌍</div>
                <h3 style={{ color: 'white', fontSize: '2.2rem', marginBottom: '1rem' }}>Global Reach</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '300px', lineHeight: '1.7', fontFamily: 'var(--font-outfit), sans-serif' }}>
                  Strategic roadmap to expand our high-performance polymer distribution network worldwide.
                </p>
              </div>
              <div className="bg-dots" style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', opacity: 0.3, overflow: 'hidden' }}></div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
