"use client";
import { useState } from 'react';
import Link from 'next/link';

const ptfeGrades = [
  { id: '01', title: 'Virgin PTFE', desc: 'Pure unfilled resin. Maximum chemical resistance, FDA compliant grades available.', tag: 'Standard', color: '#3b82f6' },
  { id: '02', title: '15% Glass Filled', desc: 'Enhanced stiffness and reduced deformation under sustained load.', tag: 'Structural', color: '#f59e0b' },
  { id: '03', title: '25% Glass Filled', desc: 'High rigidity for demanding dimensional stability requirements.', tag: 'Structural', color: '#f59e0b' },
  { id: '04', title: '25% Carbon Filled', desc: 'Improved wear resistance and thermal conductivity for dynamic sealing.', tag: 'Wear', color: '#ef4444' },
  { id: '05', title: 'Carbon + Graphite', desc: 'Dual-filler blend for extreme-wear and dry running applications.', tag: 'Premium', color: '#8b5cf6' },
  { id: '06', title: '25% Graphite Filled', desc: 'Low friction coefficient; ideal for sliding and bearing surfaces.', tag: 'Wear', color: '#ef4444' },
];

const ptfeProducts = [
  { title: 'PTFE ROD', subtitle: '(Extruded and Moulded)', image: '/ptfe-rod-hd.jpg', specs: [{ label: 'Diameter Range', value: '6mm - 200mm' }, { label: 'Standard Lengths', value: '1mtr, 1ft, 905mm' }] },
  { title: 'PTFE SKIVED SHEET', image: '/ptfe-skived-sheet.webp', specs: [{ label: 'Thickness Range', value: '0.5mm - 6mm' }, { label: 'Available Widths', value: '1mtr, 1.2mtr, 1.5mtr, 2mtr' }] },
  { title: 'PTFE MOULDED SHEET', image: '/ptfe-sheets-moulded.jpg', specs: [{ label: 'Thickness Range', value: '5mm - 100mm' }, { label: 'Standard Sizes', value: '1x1m, 2x2m, 0.6x0.6m etc.' }] },
  { title: 'PTFE BUSH', image: '/ptfe bush.jfif', specs: [{ label: 'OD/ID Ranges', value: 'Custom Manufactured' }, { label: 'Max Length', value: 'Up to 500mm' }] },
  { title: 'PTFE BALL', image: '/ptfe ball.jfif', specs: [{ label: 'Size Range', value: '3mm - 50mm' }, { label: 'Precision Grade', value: 'Standard Industrial' }] },
  { title: 'PTFE GLAND', image: '/ptfe gland.jfif', specs: [{ label: 'Standard Sections', value: '3x3mm up to 12x12mm' }, { label: 'Packaging', value: 'Spools of 1kg, 5kg, 10kg' }] },
  { title: 'PTFE GASKET', image: '/ptfe gasket.jfif', specs: [{ label: 'Custom Cutting', value: 'As per drawings' }, { label: 'Thickness', value: '1mm - 5mm' }] },
  { title: 'PTFE RING', image: '/ptfe ring.jfif', specs: [{ label: 'Types', value: 'Back-up, O-Rings, V-Rings' }, { label: 'Sizing', value: 'Standard & Custom' }] },
  { title: 'PTFE CUSTOM', subtitle: 'Tailored Solutions', image: '/ptfe custom.jfif', specs: [{ label: 'Customization Options', value: 'Tailored dimensions, materials, finishes' }, { label: 'Lead Time', value: '2-6 weeks' }] },
  { title: 'PTFE TAPE', image: '/ptfe tape.jfif', specs: [{ label: 'Standard Width', value: '12mm, 19mm' }, { label: 'Roll Length', value: '7mtr, 10mtr, 12mtr' }] },
  { title: 'PTFE TUBES', subtitle: '(Extruded and Moulded)', image: '/ptfe-tubes.jfif', specs: [{ label: 'OD/ID Specs', value: 'Full Range Available' }, { label: 'Delivery', value: 'Coils or Straight lengths' }] }
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('ptfe');
  const [activeTab, setActiveTab] = useState('products');

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'ptfe') {
      setActiveTab('products');
    }
  };

  const CustomEnquiryCard = () => (
    <div className="glass-card" style={{ 
      background: 'var(--primary)', 
      color: 'white', 
      textAlign: 'center', 
      padding: '4rem 2rem',
      border: 'none',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'var(--accent-glow)', filter: 'blur(80px)', opacity: 0.2 }}></div>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🛠️</div>
        <h3 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '1rem' }}>Bespoke Custom Solutions</h3>
        <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.7', fontFamily: 'Outfit' }}>
          Don't see your specific requirement? We specialize in custom PTFE formulations, precision-machined parts, and bespoke industrial components tailored to your engineering drawings.
        </p>
        <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Request Custom Quote</Link>
      </div>
    </div>
  );

  const subheadingStyle = {
    fontSize: '1rem',
    color: 'var(--text-main)',
    fontWeight: '600',
    opacity: 0.8,
    marginTop: '0.5rem',
    fontFamily: 'Outfit, sans-serif'
  };

  return (
    <div className="reveal">
      <style jsx>{`
        .layout-container { display: flex; flex-direction: row; min-height: 80vh; background: var(--bg-light); }
        .sidebar { width: 300px; background: white; border-right: 1px solid var(--border); padding: 4rem 0; display: flex; flex-direction: column; }
        .content-area { flex: 1; padding: 4rem; }
        .product-list-container { display: flex; flex-direction: column; gap: 2.5rem; }
        .product-card-header { padding: 2.5rem; display: flex; alignItems: center; gap: 2rem; border-bottom: 1px solid var(--border); background: rgba(0,0,0,0.01); }
        .product-card-body { padding: 2.5rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2.5rem; }
        .grade-card { padding: 2.5rem; }

        .tabs-header { display: flex; gap: 3rem; border-bottom: 1px solid var(--border); margin-bottom: 3rem; }
        .tab-btn { 
          padding: 1rem 0; 
          background: transparent; 
          border: none; 
          border-bottom: 3px solid transparent; 
          font-family: 'Outfit', sans-serif; 
          font-weight: 800; 
          text-transform: uppercase; 
          letter-spacing: 2px; 
          font-size: 0.85rem; 
          color: var(--text-muted);
          cursor: pointer;
          transition: var(--transition);
        }
        .tab-btn.active { color: var(--primary); border-bottom-color: var(--accent); }

        @media (max-width: 1024px) {
          .layout-container { flex-direction: column; }
          .sidebar { width: 100%; border-right: none; border-bottom: 1px solid var(--border); padding: 2rem 0; }
          .content-area { padding: 2rem 1rem; }
          .sidebar-section { padding: 0 1.5rem !important; }
          .sidebar-btns { flex-direction: row !important; overflow-x: auto; padding-bottom: 1rem; gap: 0.75rem !important; }
          .product-card-header { padding: 1.5rem; gap: 1rem; }
          .product-card-body { padding: 1.5rem; gap: 1.5rem; }
          .product-list-container { gap: 1.5rem; }
          .grade-card { padding: 1.5rem; }
          .tabs-header { gap: 1.5rem; margin-bottom: 2rem; }
        }
      `}</style>

      {/* Premium Hero */}
      <section style={{
        padding: '180px 0 80px',
        background: 'linear-gradient(135deg, var(--primary) 0%, #0a1b3d 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="bg-dots" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.75rem' }}>Product Catalogue</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '1.25rem', marginBottom: '1.5rem' }}>Industrial <span className="gradient-text">Goods Portfolio</span></h1>
        </div>
      </section>

      <section className="layout-container">
        {/* Sidebar Tabs */}
        <aside className="sidebar">
          <div className="sidebar-section" style={{ padding: '0 2rem' }}>
            <h4 style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '2px', marginBottom: '1.5rem' }}>Main Divisions</h4>
            <div className="sidebar-btns" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <button 
                onClick={() => handleCategoryChange('ptfe')}
                style={{
                  padding: '1rem 1.5rem',
                  textAlign: 'left',
                  background: activeCategory === 'ptfe' ? 'var(--primary)' : 'transparent',
                  color: activeCategory === 'ptfe' ? 'var(--accent)' : 'var(--text-main)',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  fontSize: '0.9rem',
                  whiteSpace: 'nowrap'
                }}
              >
                PTFE Division
              </button>
              <button 
                onClick={() => handleCategoryChange('rubber')}
                style={{
                  padding: '1rem 1.5rem',
                  textAlign: 'left',
                  background: activeCategory === 'rubber' ? 'var(--primary)' : 'transparent',
                  color: activeCategory === 'rubber' ? 'var(--accent)' : 'var(--text-main)',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  fontSize: '0.9rem',
                  whiteSpace: 'nowrap'
                }}
              >
                Rubber Division
              </button>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="content-area">
          <div className="container" style={{ padding: 0 }}>
            {activeCategory === 'ptfe' ? (
              <div className="reveal">
                {/* Horizontal Tabs at Top */}
                <div className="tabs-header">
                  <button 
                    onClick={() => setActiveTab('products')}
                    className={`tab-btn ${activeTab === 'products' ? 'active' : ''}`}
                  >
                    Products List
                  </button>
                  <button 
                    onClick={() => setActiveTab('grades')}
                    className={`tab-btn ${activeTab === 'grades' ? 'active' : ''}`}
                  >
                    Material Grades
                  </button>
                </div>

                {activeTab === 'products' ? (
                  <div className="reveal">
                    <div style={{ marginBottom: '2.5rem' }}>
                      <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>Engineered <span style={{ color: 'var(--accent)' }}>Products</span></h2>
                      <p style={subheadingStyle}>Precision-machined PTFE components for critical industrial applications.</p>
                    </div>
                    <div className="product-list-container">
                      {ptfeProducts.map((product, i) => (
                        <div key={i} className="glass-card" style={{ background: 'white', padding: 0, border: '1px solid var(--border)' }}>
                          <div className="product-card-header">
                            <div style={{ 
                              width: '120px', height: '100px', 
                              background: 'white', 
                              borderRadius: '8px', 
                              overflow: 'hidden',
                              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                              flexShrink: 0
                            }}>
                              <img 
                                src={product.image} 
                                alt={product.title} 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                              />
                            </div>
                            <div>
                              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>{product.title}</h3>
                              {product.subtitle && <p style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-muted)', fontFamily: 'Outfit' }}>{product.subtitle}</p>}
                            </div>
                          </div>
                          <div className="product-card-body">
                            {product.specs.map((spec, j) => (
                              <div key={j}>
                                <div style={{ 
                                  fontSize: '0.65rem', 
                                  fontWeight: '800', 
                                  textTransform: 'uppercase', 
                                  letterSpacing: '1px', 
                                  color: 'var(--text-muted)',
                                  marginBottom: '0.5rem',
                                  fontFamily: 'Outfit'
                                }}>
                                  {spec.label}
                                </div>
                                <div style={{ 
                                  fontSize: '1rem', 
                                  fontWeight: '700', 
                                  color: 'var(--primary)',
                                  fontFamily: 'Outfit'
                                }}>
                                  {spec.value}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                      {/* Custom Solutions Card */}
                      <CustomEnquiryCard />
                    </div>
                  </div>
                ) : (
                  <div className="reveal">
                    <div style={{ marginBottom: '2.5rem' }}>
                      <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>Material <span style={{ color: 'var(--accent)' }}>Grades</span></h2>
                      <p style={subheadingStyle}>Specialized PTFE formulations for specific industrial conditions.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                      {ptfeGrades.map((grade) => (
                        <div key={grade.id} className="glass-card grade-card" style={{ borderTop: `6px solid ${grade.color}` }}>
                          <div style={{ color: grade.color, fontWeight: '800', fontSize: '0.9rem', marginBottom: '0.75rem', fontFamily: 'Outfit' }}>GRADE #{grade.id}</div>
                          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>{grade.title}</h3>
                          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-main)', opacity: 0.8, fontFamily: 'Outfit' }}>{grade.desc}</p>
                          <div style={{ 
                            marginTop: '1.5rem',
                            background: `${grade.color}10`, 
                            color: grade.color, 
                            padding: '0.4rem 1rem', 
                            borderRadius: '100px', 
                            fontSize: '0.65rem',
                            fontWeight: '800',
                            textTransform: 'uppercase',
                            display: 'inline-block',
                            border: `1px solid ${grade.color}20`,
                            fontFamily: 'Outfit'
                          }}>
                            {grade.tag}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Custom Solutions Card */}
                    <CustomEnquiryCard />
                  </div>
                )}
              </div>
            ) : (
              <div className="reveal" style={{ 
                textAlign: 'center', 
                padding: '10rem 2rem', 
                background: 'white', 
                borderRadius: 'var(--radius-md)',
                border: '2px dashed var(--border)'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🏗️</div>
                <h3 style={{ fontSize: '2.5rem' }}>Rubber Division</h3>
                <p style={{ ...subheadingStyle, maxWidth: '500px', margin: '1.5rem auto' }}>
                  Our state-of-the-art manufacturing for O-Rings, Oil Seals, and bespoke rubber components is coming online in 2026.
                </p>
                <div style={{ marginTop: '3rem' }}>
                  <span className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>GO LIVE 2026</span>
                </div>
              </div>
            )}
          </div>
        </main>
      </section>
    </div>
  );
}
