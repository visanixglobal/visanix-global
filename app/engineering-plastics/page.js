import Link from 'next/link'
import EPMaterialCard from './EPMaterialCard'

export const metadata = {
  title: 'Engineering Plastics Supplier India | POM, Nylon, PEEK, UHMWPE, PU | Visanix Global',
  description: 'Buy engineering plastics from Visanix Global, Delhi NCR — POM/Delrin, Cast Nylon, UHMWPE, PEEK, Polyurethane, PP, HDPE, PC, PVC, ABS and more. Sheet, rod, tube, bush and custom machined components.',
  alternates: {
    canonical: '/engineering-plastics',
  },
  openGraph: {
    title: 'Engineering Plastics Supplier India | Visanix Global',
    description: 'POM, Cast Nylon, UHMWPE, PEEK, PU, PP, HDPE, PC, PVC, ABS — sheet, rod, and custom machined components from Visanix Global, Delhi NCR.',
    url: 'https://www.visanixglobal.com/engineering-plastics',
    images: [{ url: 'https://www.visanixglobal.com/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Plastics Supplier India | Visanix Global',
    description: 'POM, Cast Nylon, UHMWPE, PEEK, PU, PP, HDPE, PC, PVC, ABS — sheet, rod, and custom machined components.',
    images: ['https://www.visanixglobal.com/og-image.png'],
  },
}

// All materials grouped by category, with their subpage slugs
const materials = [
  {
    category: 'Cast Nylon (PA6)',
    color: '#3b82f6',
    description: 'High wear resistance, self-lubrication, and superior mechanical properties from direct polymerisation. The standard engineering plastic for gears, bushes, and bearing components.',
    products: [
      { name: 'Cast Nylon Sheet', slug: 'cast-nylon-sheet', image: '/cast_nylon_sheet.png' },
      { name: 'Cast Nylon Rod', slug: 'cast-nylon-rod', image: '/cast_nylon_rod.png' },
      { name: 'Nylon Square Rod', slug: 'nylon-rod', image: '/NYLON_Square_Rod.png' },
    ],
  },
  {
    category: 'Polyurethane (PU)',
    color: '#f59e0b',
    description: 'Outstanding abrasion resistance and elasticity. Used for wear liners, cushioning pads, and dynamic components across industrial applications.',
    products: [
      { name: 'PU Sheet', slug: 'pu-sheet', image: '/PU_Sheet.png' },
      { name: 'PU Rod', slug: 'pu-rod', image: '/PU_Rod.png' },
    ],
  },
  {
    category: 'PVC (Rigid)',
    color: '#78716c',
    description: 'Cost-effective chemical resistance with easy weldability. Long-established for chemical tanks, acid baths, and industrial ductwork.',
    products: [
      { name: 'PVC Sheet', slug: 'pvc-sheet', image: '/PVC_Rigid_sheet.png' },
    ],
  },
  {
    category: 'Polypropylene (PP)',
    color: '#06b6d4',
    description: 'Broad chemical resistance with lightweight construction. Standard material for chemical tanks, plating tanks, semiconductor equipment, and food processing.',
    products: [
      { name: 'PP Sheet', slug: 'pp-sheet', image: '/ptfe-sheets-moulded.jpg' },
      { name: 'PP Rod', slug: 'pp-rod', image: '/ptfe-rod-hd.jpg' },
    ],
  },
  {
    category: 'Delrin / POM (Acetal)',
    color: '#ef4444',
    description: 'High stiffness, low friction, and exceptional dimensional stability in wet environments. Ideal for gears, cams, bearings, rollers, and valve components.',
    products: [
      { name: 'Delrin Sheet', slug: 'delrin-sheet', image: '/Derlin_Sheet.png' },
      { name: 'Delrin Rod', slug: 'delrin-rod', image: '/Derlin_Rod.png' },
    ],
  },
  {
    category: 'PEEK',
    color: '#c9a84c',
    description: 'Continuous service to 250°C with near-universal chemical resistance. Used for bearings, pumps, compressor valves, and vacuum applications.',
    products: [
      { name: 'PEEK Sheet', slug: 'peek-sheet', image: '/PEEK_Sheet.png' },
    ],
  },
  {
    category: 'Acrylic (PMMA)',
    color: '#8b5cf6',
    description: 'Optical clarity, UV stability, and easy fabrication. Used for sign holders, chandeliers, skylights, glazing, and display applications.',
    products: [
      { name: 'Acrylic Rod', slug: 'acrylic-rod', image: '/Acrylic_Rod.png' },
    ],
  },
  {
    category: 'Epoxy Laminated',
    color: '#16a34a',
    description: 'FR4/G10 glass fibre reinforced epoxy sheets with high electrical insulation and mechanical strength. Standard for switchgear, transformers, and PCB substrates.',
    products: [
      { name: 'Epoxy Laminated Sheet', slug: 'epoxy-laminated-sheet', image: '/ptfe-sheets-moulded.jpg' },
    ],
  },
  {
    category: 'Silicone',
    color: '#f43f5e',
    description: 'Food-grade and industrial silicone with service range -60°C to +230°C. Used for gaskets, seals, peristaltic pump lines, and food processing fluid transfer.',
    products: [
      { name: 'Silicone Sheet', slug: 'silicone-sheet', image: '/Silicon_Sheet.png' },
      { name: 'Silicone Tube', slug: 'silicone-tube', image: '/Silicon_Rubber_Tube.png' },
    ],
  },
  {
    category: 'Insulation Materials',
    color: '#7c3aed',
    description: 'Bakelite, epoxy, and phenolic insulation rods for switchgear supports, busbar insulators, and electrical equipment structural components.',
    products: [
      { name: 'Insulation Rod', slug: 'insulation-rod', image: '/ptfe-rod-hd.jpg' },
    ],
  },
]

export default function EngineeringPlasticsPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Engineering Plastics by Visanix Global",
    "url": "https://www.visanixglobal.com/engineering-plastics",
    "itemListElement": materials.flatMap((mat, mi) =>
      mat.products.map((p, pi) => ({
        "@type": "ListItem",
        "position": mi * 10 + pi + 1,
        "name": p.name,
        "url": `https://www.visanixglobal.com/engineering-plastics/${p.slug}`
      }))
    )
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.visanixglobal.com" },
      { "@type": "ListItem", "position": 2, "name": "Engineering Plastics", "item": "https://www.visanixglobal.com/engineering-plastics" },
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What engineering plastics does Visanix Global supply in India?",
        "acceptedAnswer": { "@type": "Answer", "text": "Visanix Global supplies a full range of engineering plastics including POM/Delrin, Cast Nylon (PA6), UHMWPE, PEEK, Polyurethane (PU), Polypropylene (PP), HDPE, Polycarbonate (PC), Rigid PVC, ABS, PET, PPS, PPSU, and PBT in sheet, rod, tube, and custom machined forms." }
      },
      {
        "@type": "Question",
        "name": "Which engineering plastic has the best abrasion resistance?",
        "acceptedAnswer": { "@type": "Answer", "text": "UHMWPE (Ultra-High Molecular Weight Polyethylene) has the highest abrasion resistance of common engineering plastics — typically 6–10x better than carbon steel in sliding bulk material applications. For dynamic sealing and wear components, Polyurethane (PU) offers outstanding abrasion resistance with high elasticity." }
      },
      {
        "@type": "Question",
        "name": "Which engineering plastic is best for high-temperature applications?",
        "acceptedAnswer": { "@type": "Answer", "text": "PEEK handles continuous service to 250°C and is the premium choice for extreme temperature applications. PPS handles to 220°C with exceptional chemical resistance. PPSU handles to 220°C with hydrolysis resistance. For moderate temperatures (up to 130°C), POM/Delrin and Cast Nylon are cost-effective options." }
      },
      {
        "@type": "Question",
        "name": "Do you supply custom-machined engineering plastic components?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Visanix Global machines custom engineering plastic components to your drawings from any material in our range — from prototype single parts to production batches. Supply DXF, STEP, or PDF drawings for a quote." }
      },
      {
        "@type": "Question",
        "name": "Where is Visanix Global located and what areas do you supply?",
        "acceptedAnswer": { "@type": "Answer", "text": "Visanix Global is based in Delhi NCR, Haryana and supplies engineering plastics to customers across India including Delhi NCR, Mumbai, Pune, Chennai, Hyderabad, and Bangalore." }
      },
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
              <span style={{ color: 'var(--accent)' }}>Engineering Plastics</span>
            </nav>
            <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.75rem' }}>
              Speciality Materials Division
            </span>
            <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '1.25rem', marginBottom: '1.5rem' }}>
              Engineering <span className="gradient-text">Plastics</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '700px', fontSize: '1.1rem', lineHeight: '1.7', fontFamily: 'var(--font-outfit), sans-serif' }}>
              A comprehensive range of high-performance engineering plastics — sheet, rod, tube, and custom machined components — supplied from Delhi NCR across India. From general-purpose ABS and nylon to advanced PEEK and PPS for the most demanding environments.
            </p>
            {/* Quick stat bar */}
            <div style={{ display: 'flex', gap: '2.5rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              {[
                { value: '10+', label: 'Materials' },
                { value: '16+', label: 'Product Forms' },
                { value: 'Custom', label: 'Machined Parts' },
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--accent)', fontFamily: 'var(--font-outfit), sans-serif' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'var(--font-outfit), sans-serif' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro */}
        <section style={{ padding: '4rem 0 0', background: 'var(--bg-light)' }}>
          <div className="container">
            <div style={{ maxWidth: '860px', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '1.25rem' }}>
                Speciality Plastics for <span style={{ color: 'var(--accent)' }}>Every Application</span>
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.9', color: 'var(--text-main)', fontFamily: 'var(--font-outfit), sans-serif', marginBottom: '1rem' }}>
                Engineering plastics extend far beyond general-purpose materials. Each polymer in our range is selected for a specific combination of mechanical, thermal, chemical, and tribological properties. Whether you need the abrasion resistance of UHMWPE for a chute liner, the dimensional precision of POM for a gear, the high-temperature stability of PEEK for a downhole tool, or the autoclave compatibility of PPSU for a surgical instrument tray — we supply the right material in the right form.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.9', color: 'var(--text-main)', fontFamily: 'var(--font-outfit), sans-serif' }}>
                All materials are available as standard stock sheet, rod, and tube sections, and as precision-machined custom components manufactured to your engineering drawings.
              </p>
            </div>
          </div>
        </section>

        {/* Material cards */}
        <section style={{ padding: '2rem 0 5rem', background: 'var(--bg-light)' }}>
          <div className="container">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {materials.map((mat, i) => (
                <EPMaterialCard key={i} mat={mat} index={i} />
              ))}

              {/* Custom components card */}
              <div className="glass-card" style={{
                background: 'var(--primary)',
                color: 'white',
                textAlign: 'center',
                padding: '4rem 2rem',
                border: 'none',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'var(--accent-glow)', filter: 'blur(100px)', opacity: 0.15 }}></div>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🛠️</div>
                  <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>Custom Machined Components</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '620px', margin: '0 auto 2rem', lineHeight: '1.7', fontFamily: 'var(--font-outfit), sans-serif' }}>
                    Need a precision component in any of these materials? We machine custom engineering plastic parts to your exact drawings — from a single prototype to a production batch.
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/engineering-plastics/ep-custom-components" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                      View Custom Components
                    </Link>
                    <Link href="/contact" style={{
                      padding: '1rem 2.5rem',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderRadius: '8px',
                      color: 'white',
                      textDecoration: 'none',
                      fontWeight: '700',
                      fontFamily: 'var(--font-outfit), sans-serif',
                      fontSize: '0.9rem'
                    }}>
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '5rem 0', background: 'white' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '2.5rem' }}>
              Frequently Asked <span style={{ color: 'var(--accent)' }}>Questions</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '860px' }}>
              {[
                {
                  q: 'What engineering plastics does Visanix Global supply in India?',
                  a: 'Visanix Global supplies a full range of engineering plastics including POM/Delrin, Cast Nylon (PA6), UHMWPE, PEEK, Polyurethane (PU), Polypropylene (PP), HDPE, Polycarbonate (PC), Rigid PVC, ABS, PET, PPS, PPSU, and PBT in sheet, rod, tube, and custom machined forms.'
                },
                {
                  q: 'Which engineering plastic has the best abrasion resistance?',
                  a: 'UHMWPE has the highest abrasion resistance of common engineering plastics — typically 6–10x better than carbon steel in sliding bulk material applications. For dynamic sealing and wear components, Polyurethane (PU) offers outstanding abrasion resistance with high elasticity.'
                },
                {
                  q: 'Which engineering plastic is best for high-temperature applications?',
                  a: 'PEEK handles continuous service to 250°C and is the premium choice for extreme temperature applications. PPS handles to 220°C with exceptional chemical resistance. For moderate temperatures up to 130°C, POM/Delrin and Cast Nylon are cost-effective options.'
                },
                {
                  q: 'Do you supply custom-machined engineering plastic components?',
                  a: 'Yes. Visanix Global machines custom engineering plastic components to your drawings from any material in our range — from prototype single parts to production batches. Supply DXF, STEP, or PDF drawings for a quote.'
                },
                {
                  q: 'Where is Visanix Global located and what areas do you supply?',
                  a: 'Visanix Global is based in Delhi NCR, Haryana and supplies engineering plastics to customers across India including Delhi NCR, Mumbai, Pune, Chennai, Hyderabad, and Bangalore.'
                },
              ].map((faq, i) => (
                <div key={i} className="glass-card" style={{ padding: '1.75rem 2rem' }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{faq.q}</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.7', fontFamily: 'var(--font-outfit), sans-serif', margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ padding: '5rem 0', background: 'var(--bg-light)' }}>
          <div className="container">
            <div className="glass-card" style={{
              background: 'var(--primary)',
              color: 'white',
              textAlign: 'center',
              padding: '4rem 2rem',
              border: 'none'
            }}>
              <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>
                Need Help Selecting the Right Material?
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '560px', margin: '0 auto 2rem', fontFamily: 'var(--font-outfit), sans-serif', lineHeight: '1.7' }}>
                Tell us your application, operating temperature, chemical environment, and load conditions — we will recommend the right engineering plastic and supply it from Delhi NCR across India.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                  Get Material Advice
                </Link>
                <Link href="/products" style={{
                  padding: '1rem 2.5rem',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderRadius: '8px',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontSize: '0.9rem'
                }}>
                  View PTFE Products
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
