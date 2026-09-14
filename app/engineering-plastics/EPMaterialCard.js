"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

function ProductLink({ slug, name, color }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={`/engineering-plastics/${slug}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        padding: '0.55rem 1.1rem',
        background: hovered ? color : 'white',
        border: `1.5px solid ${hovered ? color : `${color}40`}`,
        borderRadius: '100px',
        fontSize: '0.8rem',
        fontWeight: '700',
        color: hovered ? 'white' : 'var(--primary)',
        textDecoration: 'none',
        fontFamily: 'var(--font-outfit), sans-serif',
        transition: 'all 0.2s ease',
        letterSpacing: '0.2px'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {name}
      <span style={{ fontSize: '0.7rem', opacity: 0.6 }}>→</span>
    </Link>
  );
}

// Image carousel for products
function ProductCarousel({ products }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [products.length]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      minWidth: '180px'
    }}>
      {/* Image carousel */}
      <div style={{
        width: '160px',
        height: '160px',
        background: '#f8fafc',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        border: '1px solid var(--border)',
        position: 'relative'
      }}>
        {products.map((product, idx) => (
          <img
            key={idx}
            src={product.image}
            alt={product.name}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              padding: '0.75rem',
              opacity: idx === activeIndex ? 1 : 0,
              transition: 'opacity 0.6s ease-in-out'
            }}
          />
        ))}
      </div>

      {/* Indicators */}
      {products.length > 1 && (
        <div style={{
          display: 'flex',
          gap: '0.4rem',
          justifyContent: 'center'
        }}>
          {products.map((_, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                width: i === activeIndex ? '16px' : '6px',
                height: '6px',
                background: i === activeIndex ? 'var(--accent)' : 'var(--border)',
                borderRadius: '3px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function EPMaterialCard({ mat, index }) {
  // Get images for products in this category
  const productImages = mat.products.map(p => ({
    name: p.name,
    image: p.image || '/ptfe-sheets-moulded.jpg' // fallback image
  }));

  return (
    <div className="glass-card" style={{ padding: 0, overflow: 'hidden', borderTop: `5px solid ${mat.color}` }}>
      {/* Card header + carousel */}
      <div style={{
        padding: '2rem 2.5rem',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '2rem',
        justifyContent: 'space-between',
        background: 'white'
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1.5rem'
          }}>
            <div style={{
              background: `${mat.color}15`,
              border: `2px solid ${mat.color}30`,
              borderRadius: '10px',
              padding: '0.6rem 1.1rem',
              flexShrink: 0,
              alignSelf: 'flex-start'
            }}>
              <div style={{
                color: mat.color,
                fontWeight: '900',
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontFamily: 'var(--font-outfit), sans-serif',
                whiteSpace: 'nowrap'
              }}>
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '1.4rem', margin: '0 0 0.5rem' }}>{mat.category}</h2>
              <p style={{
                fontSize: '0.9rem',
                lineHeight: '1.65',
                color: 'var(--text-main)',
                opacity: 0.75,
                fontFamily: 'var(--font-outfit), sans-serif',
                margin: 0,
                maxWidth: '480px'
              }}>
                {mat.description}
              </p>
            </div>
          </div>
        </div>

        {/* Carousel on right */}
        <div style={{ flexShrink: 0 }}>
          <ProductCarousel products={productImages} />
        </div>
      </div>

      {/* Product links */}
      <div style={{
        padding: '1.5rem 2.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.75rem',
        background: `${mat.color}05`
      }}>
        {mat.products.map((p, j) => (
          <ProductLink key={j} slug={p.slug} name={p.name} color={mat.color} />
        ))}
      </div>
    </div>
  );
}
