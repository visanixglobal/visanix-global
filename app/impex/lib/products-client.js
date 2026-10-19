"use client";
import { useState } from 'react';
import Link from 'next/link';

const categories = {
  microfiber: {
    label: 'Microfiber & Coral-Velvet',
    products: [
      { title: 'Microfiber Coral-Velvet Face Towel', sizes: ['30×30 cm', '40×60 cm'], gsm: '200–400 GSM', material: 'Microfiber coral-velvet', use: 'Face, hand, salon, spa', tag: 'Best Seller' },
      { title: 'Microfiber Bath Towel', sizes: ['56×112 cm', '67×137 cm', '70×140 cm'], gsm: '300–500 GSM', material: 'Microfiber / Polyester blend', use: 'Bath, hotel, hospitality', tag: 'Popular' },
      { title: 'Microfiber Small Face Towel', sizes: ['25×25 cm', '30×30 cm'], gsm: '200–350 GSM', material: 'Microfiber coral-velvet', use: 'Face, gym, travel', tag: 'Compact' },
      { title: 'Microfiber Hand Towel', sizes: ['40×60 cm'], gsm: '250–400 GSM', material: 'Microfiber', use: 'Hand drying, kitchen, gym', tag: 'Standard' },
    ],
  },
  bath: {
    label: 'Bath & Body Towels',
    products: [
      { title: 'Polyester Bath Towel', sizes: ['60×120 cm', '70×140 cm', '70×135 cm'], gsm: '300–500 GSM', material: 'Polyester / Microfiber', use: 'Bath, hotel supply', tag: 'Wholesale' },
      { title: 'Large Bath Sheet', sizes: ['67×137 cm', '70×140 cm'], gsm: '400–600 GSM', material: 'Microfiber polyester', use: 'Luxury bath, spa, resort', tag: 'Premium' },
      { title: 'Small Bath Towel', sizes: ['40×60 cm', '50×100 cm'], gsm: '280–400 GSM', material: 'Microfiber / Polyester', use: 'Gym, travel, budget retail', tag: 'Budget' },
      { title: 'Square Bath Towel', sizes: ['70×70 cm'], gsm: '300–450 GSM', material: 'Polyester', use: 'Bath, multipurpose', tag: 'Compact' },
    ],
  },
  baby: {
    label: 'Baby Towels',
    products: [
      { title: 'Baby Hooded Towel', sizes: ['75×75 cm', '80×80 cm'], gsm: '300–400 GSM', material: 'Soft microfiber / Cotton blend', use: 'Infant bath wrap, gifting', tag: 'Best Seller' },
      { title: 'Baby Bath Towel', sizes: ['60×120 cm'], gsm: '280–380 GSM', material: 'Soft microfiber', use: 'Baby bath, toddler', tag: 'Gentle' },
      { title: 'Baby Washcloth', sizes: ['25×25 cm', '30×30 cm'], gsm: '200–300 GSM', material: 'Soft microfiber coral-velvet', use: 'Baby face & body cleansing', tag: 'Pack of 6/12' },
    ],
  },
  cleaning: {
    label: 'Cleaning & Kitchen',
    products: [
      { title: 'Microfiber Car Cleaning Towel', sizes: ['30×40 cm', '40×60 cm'], gsm: '300–500 GSM', material: 'High-GSM microfiber', use: 'Car detailing, auto care', tag: 'High GSM' },
      { title: 'General Cleaning Towel', sizes: ['24×24 cm', '30×30 cm', '40×40 cm'], gsm: '200–350 GSM', material: 'Microfiber / Polyester', use: 'Kitchen, household, industrial', tag: 'Reusable' },
      { title: 'Cotton-Gauze Kitchen Towel', sizes: ['25×65 cm', '40×60 cm'], gsm: '150–250 GSM', material: 'Cotton gauze', use: 'Kitchen, foodservice, restaurant', tag: 'Food Safe' },
      { title: 'Jacquard Patterned Towel', sizes: ['40×60 cm', '70×140 cm'], gsm: '250–450 GSM', material: 'Microfiber / Polyester jacquard', use: 'Retail, gifting, branded', tag: 'Custom Available' },
    ],
  },
};

export default function ImpexProducts() {
  const [activeCategory, setActiveCategory] = useState('microfiber');
  const current = categories[activeCategory];

  return (
    <div className="reveal">
      {/* Hero */}
      <section style={{ padding: 'clamp(100px, 15vw, 180px) 0 80px', background: 'linear-gradient(135deg, var(--primary) 0%, #0a1b3d 100%)', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-dots" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(232,160,0,0.12)', border: '1px solid rgba(232,160,0,0.3)', borderRadius: '100px', padding: '5px 16px', marginBottom: '1.5rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
            <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.6rem' }}>A Division of Visanix Global</span>
          </div>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Towel <span className="gradient-text">Catalogue</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', fontSize: '1.1rem', lineHeight: '1.7', fontFamily: 'var(--font-outfit), sans-serif' }}>
            Microfiber, coral-velvet, bath, baby, and cleaning towels — wholesale supply across India. Direct factory sourcing with competitive pricing.
          </p>
        </div>
      </section>

      {/* Layout */}
      <section style={{ display: 'flex', flexDirection: 'row', minHeight: '80vh', background: 'var(--bg-light)' }}>
        <style jsx>{`
          .impex-layout { display: flex; flex-direction: row; }
          .impex-sidebar { width: 280px; min-width: 0; background: white; border-right: 1px solid var(--border); padding: 3rem 0; }
          .impex-content { flex: 1; min-width: 0; padding: 3rem; }
          @media (max-width: 1024px) {
            .impex-layout { flex-direction: column; }
            .impex-sidebar { width: 100%; border-right: none; border-bottom: 1px solid var(--border); padding: 2rem 1.5rem; }
            .impex-sidebar-btns { display: flex !important; flex-direction: row !important; overflow-x: auto; gap: 0.75rem !important; padding-bottom: 0.5rem; }
            .impex-content { padding: 2rem 1rem; }
          }
        `}</style>

        <div className="impex-layout" style={{ display: 'flex', width: '100%' }}>
          {/* Sidebar */}
          <aside className="impex-sidebar">
            <div style={{ padding: '0 2rem' }}>
              <h4 style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '2px', marginBottom: '1.5rem' }}>Categories</h4>
              <div className="impex-sidebar-btns" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {Object.entries(categories).map(([key, cat]) => (
                  <button key={key} onClick={() => setActiveCategory(key)} style={{ padding: '1rem 1.5rem', textAlign: 'left', background: activeCategory === key ? 'var(--primary)' : 'transparent', color: activeCategory === key ? 'var(--accent)' : 'var(--text-main)', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', transition: 'var(--transition)', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="impex-content">
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>{current.label} <span style={{ color: 'var(--accent)' }}>Products</span></h2>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontFamily: 'var(--font-outfit), sans-serif' }}>All products available for wholesale bulk orders. Contact us for pricing and samples.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {current.products.map((product, i) => (
                <div key={i} className="glass-card" style={{ background: 'white', padding: 0, border: '1px solid var(--border)' }}>
                  <div style={{ padding: '1.75rem', display: 'flex', alignItems: 'flex-start', gap: '1.5rem', borderBottom: '1px solid var(--border)', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                        <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{product.title}</h3>
                        <span style={{ fontSize: '0.6rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', padding: '3px 8px', borderRadius: '4px', background: 'rgba(232,160,0,0.12)', color: 'var(--accent)', fontFamily: 'var(--font-outfit), sans-serif' }}>
                          {product.tag}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, fontFamily: 'var(--font-outfit), sans-serif' }}>
                        <strong>GSM:</strong> {product.gsm} &nbsp;·&nbsp; <strong>Material:</strong> {product.material} &nbsp;·&nbsp; <strong>Use:</strong> {product.use}
                      </p>
                    </div>
                  </div>
                  <div style={{ padding: '1.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-outfit), sans-serif' }}>Available Sizes</div>
                      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {product.sizes.map((size, j) => (
                          <span key={j} style={{ background: 'var(--bg-light)', border: '1px solid var(--border)', borderRadius: '6px', padding: '4px 12px', fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary)', fontFamily: 'var(--font-outfit), sans-serif' }}>{size}</span>
                        ))}
                      </div>
                    </div>
                    <Link href="/impex/contact" className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '0.7rem' }}>
                      Request Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom order card */}
            <div className="glass-card" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center', padding: '4rem 2rem', border: 'none', marginTop: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🛠️</div>
              <h3 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '1rem' }}>Custom & OEM Orders</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.7', fontFamily: 'var(--font-outfit), sans-serif' }}>
                Custom sizes, GSM specifications, branding, and packaging available for hotel chains, retail brands, and large distributors.
              </p>
              <Link href="/impex/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Discuss Custom Order</Link>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
