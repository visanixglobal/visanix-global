import Link from 'next/link'

export const metadata = {
    title: 'PTFE Grades & Specifications | Virgin, Glass Filled, Carbon Filled | Visanix Global',
    description: 'Complete guide to PTFE material grades — Virgin PTFE, 15% & 25% Glass Filled, 25% Carbon Filled, Carbon+Graphite Filled, 25% Graphite Filled. Supplier in Gurugram, India.',
    alternates: {
        canonical: '/products/ptfe-grades',
    },
    openGraph: {
        title: 'PTFE Grades & Specifications | Visanix Global',
        description: 'Complete guide to PTFE material grades — Virgin PTFE, Glass Filled, Carbon Filled, Graphite Filled. Supplier in Gurugram, India.',
        url: 'https://www.visanixglobal.com/products/ptfe-grades',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PTFE Grades & Specifications | Visanix Global',
        description: 'Complete guide to PTFE material grades — Virgin, Glass Filled, Carbon Filled, Graphite Filled. Supplier in Gurugram, India.',
        images: ['https://www.visanixglobal.com/og-image.png'],
    },
}

const grades = [
    {
        id: '01',
        name: 'Virgin PTFE',
        teflonName: 'Virgin Teflon',
        color: '#3b82f6',
        tag: 'Standard Grade',
        tagline: 'Maximum chemical resistance. FDA compliant.',
        what: 'Virgin PTFE is pure, unfilled polytetrafluoroethylene — also widely known as Teflon. It contains no fillers or additives, giving it the highest level of chemical resistance and electrical insulation of all PTFE grades. Virgin PTFE is white in colour and is the baseline grade against which all filled grades are compared.',
        properties: [
            { label: 'Chemical Resistance', value: 'Resistant to virtually all chemicals' },
            { label: 'Temperature Range', value: '-200°C to +260°C' },
            { label: 'Colour', value: 'White' },
            { label: 'FDA Compliance', value: 'FDA 21 CFR compliant' },
            { label: 'Dielectric Strength', value: 'Excellent — highest of all grades' },
            { label: 'Coefficient of Friction', value: 'Very low (0.05–0.10)' },
        ],
        applications: ['Pharmaceutical seals and gaskets', 'Food contact components', 'Chemical lining and gaskets', 'Electrical insulation', 'Laboratory equipment', 'Semiconductor manufacturing'],
        industries: ['Pharmaceutical', 'Food Processing', 'Chemical Processing', 'Electrical & Electronics'],
        keywords: 'virgin PTFE supplier India, virgin Teflon supplier, pure PTFE supplier Gurugram',
    },
    {
        id: '02',
        name: '15% Glass Filled PTFE',
        teflonName: '15% Glass Filled Teflon',
        color: '#f59e0b',
        tag: 'Structural Grade',
        tagline: 'Improved stiffness and creep resistance.',
        what: '15% Glass Filled PTFE contains 15% by weight of glass fibre reinforcement blended into the PTFE matrix. This grade offers improved stiffness, reduced creep (cold flow) under sustained load, and better dimensional stability compared to virgin PTFE, while retaining good chemical resistance. It is white to off-white in colour.',
        properties: [
            { label: 'Glass Content', value: '15% by weight' },
            { label: 'Colour', value: 'White / Off-white' },
            { label: 'Creep Resistance', value: 'Improved vs Virgin PTFE' },
            { label: 'Stiffness', value: 'Higher than Virgin PTFE' },
            { label: 'Chemical Resistance', value: 'Good — slightly reduced vs Virgin' },
            { label: 'Temperature Range', value: '-200°C to +260°C' },
        ],
        applications: ['Slide bearings and pads', 'Valve seats', 'Piston rings', 'Structural gaskets', 'Guide rings'],
        industries: ['Chemical Processing', 'Oil & Gas', 'Industrial Manufacturing', 'Automotive'],
        keywords: 'glass filled PTFE supplier India, 15% glass filled PTFE, glass filled Teflon supplier',
    },
    {
        id: '03',
        name: '25% Glass Filled PTFE',
        teflonName: '25% Glass Filled Teflon',
        color: '#f59e0b',
        tag: 'High Rigidity Grade',
        tagline: 'Maximum dimensional stability under load.',
        what: '25% Glass Filled PTFE contains 25% by weight of glass fibre, providing the highest rigidity and dimensional stability of the glass-filled range. This grade is used where sustained compressive loads would cause unacceptable deformation in virgin or 15% glass filled PTFE. It offers excellent performance in structural bearing and slide plate applications.',
        properties: [
            { label: 'Glass Content', value: '25% by weight' },
            { label: 'Colour', value: 'White / Off-white' },
            { label: 'Compressive Strength', value: 'Significantly higher than Virgin' },
            { label: 'Dimensional Stability', value: 'Excellent under sustained load' },
            { label: 'Chemical Resistance', value: 'Good — reduced vs Virgin in some acids' },
            { label: 'Temperature Range', value: '-200°C to +260°C' },
        ],
        applications: ['Bridge bearings', 'Expansion joint slide plates', 'Heavy-duty valve seats', 'Structural components', 'High-load bushes'],
        industries: ['Civil Engineering', 'Oil & Gas', 'Chemical Processing', 'Industrial Manufacturing'],
        keywords: '25% glass filled PTFE supplier India, high rigidity PTFE, glass filled Teflon India',
    },
    {
        id: '04',
        name: '25% Carbon Filled PTFE',
        teflonName: '25% Carbon Filled Teflon',
        color: '#ef4444',
        tag: 'Wear Grade',
        tagline: 'Superior wear resistance for dynamic sealing.',
        what: '25% Carbon Filled PTFE contains 25% by weight of carbon powder, which dramatically improves wear resistance, hardness, and thermal conductivity compared to virgin PTFE. This grade is black in colour and is the preferred choice for dynamic sealing applications where the seal or component is in continuous motion against a mating surface.',
        properties: [
            { label: 'Carbon Content', value: '25% by weight' },
            { label: 'Colour', value: 'Black' },
            { label: 'Wear Resistance', value: 'Excellent — significantly better than Virgin' },
            { label: 'Thermal Conductivity', value: 'Improved — better heat dissipation' },
            { label: 'Hardness', value: 'Higher than Virgin PTFE' },
            { label: 'Chemical Resistance', value: 'Good — avoid strong oxidising acids' },
        ],
        applications: ['Piston rings and rider rings', 'Dynamic seals', 'Pump bushes', 'Compressor components', 'Rotary shaft seals'],
        industries: ['Oil & Gas', 'Chemical Processing', 'Industrial Manufacturing', 'Compressor Industry'],
        keywords: 'carbon filled PTFE India, 25% carbon filled PTFE supplier, carbon filled Teflon supplier India',
    },
    {
        id: '05',
        name: 'Carbon + Graphite Filled PTFE',
        teflonName: 'Carbon + Graphite Teflon',
        color: '#8b5cf6',
        tag: 'Premium Wear Grade',
        tagline: 'Dual-filler for extreme wear and dry running.',
        what: 'Carbon + Graphite Filled PTFE combines carbon powder and graphite in the PTFE matrix, creating a dual-filler grade that delivers the best combination of wear resistance, low friction, and dry-running capability. This is the premium choice for applications where components must run dry without any lubrication, or where maximum wear life is required.',
        properties: [
            { label: 'Fillers', value: 'Carbon + Graphite (combined)' },
            { label: 'Colour', value: 'Dark grey / Black' },
            { label: 'Wear Resistance', value: 'Highest of all standard grades' },
            { label: 'Dry Running', value: 'Excellent — self-lubricating' },
            { label: 'Coefficient of Friction', value: 'Very low — lowest of filled grades' },
            { label: 'Chemical Resistance', value: 'Good — avoid strong oxidising acids' },
        ],
        applications: ['Dry-running piston rings', 'Compressor seals', 'Bearing pads', 'Slide plates in aggressive environments', 'High-speed rotary seals'],
        industries: ['Compressor Industry', 'Oil & Gas', 'Chemical Processing', 'Industrial Manufacturing'],
        keywords: 'carbon graphite filled PTFE supplier India, dual filled PTFE, premium wear PTFE India',
    },
    {
        id: '06',
        name: '25% Graphite Filled PTFE',
        teflonName: '25% Graphite Teflon',
        color: '#64748b',
        tag: 'Low Friction Grade',
        tagline: 'Lowest friction for sliding and bearing surfaces.',
        what: '25% Graphite Filled PTFE contains 25% by weight of graphite powder, which provides an exceptionally low coefficient of friction — lower than carbon-filled grades — making it the preferred choice for sliding and bearing surface applications. Graphite also improves thermal conductivity and provides good wear resistance in moderate-load applications.',
        properties: [
            { label: 'Graphite Content', value: '25% by weight' },
            { label: 'Colour', value: 'Dark grey' },
            { label: 'Coefficient of Friction', value: 'Very low — excellent for sliding' },
            { label: 'Thermal Conductivity', value: 'Improved vs Virgin PTFE' },
            { label: 'Wear Resistance', value: 'Good for moderate-load applications' },
            { label: 'Chemical Resistance', value: 'Good — avoid strong oxidising acids' },
        ],
        applications: ['Slide bearings', 'Guide strips', 'Bearing pads', 'Conveyor components', 'Low-friction seals'],
        industries: ['Industrial Manufacturing', 'Chemical Processing', 'Food Processing', 'Textile Industry'],
        keywords: 'graphite filled PTFE supplier India, 25% graphite PTFE, graphite Teflon supplier India',
    },
]

export default function PTFEGradesPage() {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.visanixglobal.com" },
            { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.visanixglobal.com/products" },
            { "@type": "ListItem", "position": 3, "name": "PTFE Grades", "item": "https://www.visanixglobal.com/products/ptfe-grades" },
        ]
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What PTFE grades do you supply in India?",
                "acceptedAnswer": { "@type": "Answer", "text": "Visanix Global supplies all major PTFE grades including Virgin PTFE, 15% Glass Filled, 25% Glass Filled, 25% Carbon Filled, Carbon + Graphite Filled, and 25% Graphite Filled from our Gurugram facility across India." }
            },
            {
                "@type": "Question",
                "name": "What is the difference between virgin PTFE and filled PTFE?",
                "acceptedAnswer": { "@type": "Answer", "text": "Virgin PTFE is pure PTFE with maximum chemical resistance and electrical insulation. Filled PTFE grades contain additives (glass, carbon, graphite) that improve specific mechanical properties like wear resistance, stiffness, or thermal conductivity, at a slight reduction in chemical resistance." }
            },
            {
                "@type": "Question",
                "name": "Which PTFE grade is best for chemical applications?",
                "acceptedAnswer": { "@type": "Answer", "text": "Virgin PTFE offers the highest chemical resistance and is recommended for most chemical processing applications. For applications requiring improved mechanical strength, 15% or 25% glass filled PTFE is recommended." }
            },
            {
                "@type": "Question",
                "name": "Which PTFE grade is best for wear applications?",
                "acceptedAnswer": { "@type": "Answer", "text": "25% Carbon Filled PTFE or Carbon + Graphite Filled PTFE are recommended for dynamic wear applications such as piston rings, seals, and bushes where the component is in continuous motion." }
            },
            {
                "@type": "Question",
                "name": "Do you provide material test certificates for all PTFE grades?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Visanix Global provides Material Test Certificates (MTC) with every order for all PTFE grades. Full material traceability is maintained." }
            },
        ]
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="reveal">
                {/* Hero */}
                <section style={{ padding: '180px 0 80px', background: 'linear-gradient(135deg, var(--primary) 0%, #0a1b3d 100%)', color: 'white', position: 'relative', overflow: 'hidden' }}>
                    <div className="bg-dots" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
                    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                        <nav style={{ marginBottom: '1.5rem', fontSize: '0.85rem', opacity: 0.7 }}>
                            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                            <span style={{ margin: '0 0.5rem' }}>›</span>
                            <Link href="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link>
                            <span style={{ margin: '0 0.5rem' }}>›</span>
                            <span style={{ color: 'var(--accent)' }}>PTFE Grades</span>
                        </nav>
                        <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.75rem' }}>Material Science</span>
                        <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '1.25rem', marginBottom: '1.5rem' }}>
                            PTFE Material <span className="gradient-text">Grades Available</span>
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '700px', fontSize: '1.1rem', lineHeight: '1.7', fontFamily: 'var(--font-outfit), sans-serif' }}>
                            Visanix Global supplies all 6 major PTFE grades — also known as Teflon grades — from our Gurugram facility across India. Virgin PTFE, glass filled, carbon filled, graphite filled, and dual-filler grades for every industrial application.
                        </p>
                    </div>
                </section>

                <section style={{ padding: '5rem 0', background: 'var(--bg-light)' }}>
                    <div className="container">

                        {/* Intro */}
                        <div style={{ marginBottom: '4rem', maxWidth: '850px' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                                Understanding <span style={{ color: 'var(--accent)' }}>PTFE Grades</span>
                            </h2>
                            <p style={{ fontSize: '1rem', lineHeight: '1.9', color: 'var(--text-main)', fontFamily: 'var(--font-outfit), sans-serif', marginBottom: '1rem' }}>
                                PTFE (polytetrafluoroethylene) — commercially known as Teflon — is available in multiple grades, each engineered for specific performance requirements. Virgin PTFE offers the highest chemical resistance and electrical insulation. Filled grades incorporate additives such as glass fibre, carbon powder, or graphite to enhance mechanical properties like wear resistance, stiffness, and thermal conductivity.
                            </p>
                            <p style={{ fontSize: '1rem', lineHeight: '1.9', color: 'var(--text-main)', fontFamily: 'var(--font-outfit), sans-serif' }}>
                                Choosing the right PTFE grade is critical to component performance and service life. Visanix Global supplies all standard PTFE grades as rods, sheets, tubes, and custom machined components. Contact us to discuss grade selection for your specific application.
                            </p>
                        </div>

                        {/* Grade Cards */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '4rem' }}>
                            {grades.map((grade) => (
                                <div key={grade.id} className="glass-card" style={{ padding: 0, overflow: 'hidden', borderTop: `6px solid ${grade.color}` }}>
                                    {/* Grade Header */}
                                    <div style={{ padding: '2.5rem', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
                                        <div style={{ background: `${grade.color}15`, border: `2px solid ${grade.color}30`, borderRadius: '12px', padding: '1rem 1.5rem', flexShrink: 0 }}>
                                            <div style={{ color: grade.color, fontWeight: '900', fontSize: '1.4rem', fontFamily: 'var(--font-outfit), sans-serif' }}>#{grade.id}</div>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                                                <h2 style={{ fontSize: '1.6rem', margin: 0 }}>{grade.name}</h2>
                                                <span style={{ background: `${grade.color}15`, color: grade.color, padding: '0.3rem 1rem', borderRadius: '100px', fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'var(--font-outfit), sans-serif' }}>{grade.tag}</span>
                                            </div>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontFamily: 'var(--font-outfit), sans-serif', margin: 0 }}>Also known as: <strong>{grade.teflonName}</strong></p>
                                        </div>
                                    </div>

                                    <div style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                                        {/* What it is */}
                                        <div>
                                            <h3 style={{ fontSize: '1rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-outfit), sans-serif' }}>What It Is</h3>
                                            <p style={{ fontSize: '0.9rem', lineHeight: '1.8', color: 'var(--text-main)', fontFamily: 'var(--font-outfit), sans-serif' }}>{grade.what}</p>
                                        </div>

                                        {/* Properties */}
                                        <div>
                                            <h3 style={{ fontSize: '0.75rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', fontFamily: 'var(--font-outfit), sans-serif' }}>Key Properties</h3>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                                {grade.properties.map((prop, i) => (
                                                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', padding: '0.6rem 0', borderBottom: '1px solid var(--border)' }}>
                                                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-outfit), sans-serif' }}>{prop.label}</span>
                                                        <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--primary)', fontFamily: 'var(--font-outfit), sans-serif', textAlign: 'right' }}>{prop.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Applications + Industries */}
                                        <div>
                                            <h3 style={{ fontSize: '0.75rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', fontFamily: 'var(--font-outfit), sans-serif' }}>Best Applications</h3>
                                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                                {grade.applications.map((app, i) => (
                                                    <li key={i} style={{ fontSize: '0.85rem', color: 'var(--text-main)', fontFamily: 'var(--font-outfit), sans-serif', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                        <span style={{ color: grade.color, fontWeight: '800' }}>→</span> {app}
                                                    </li>
                                                ))}
                                            </ul>
                                            <h3 style={{ fontSize: '0.75rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)', fontFamily: 'var(--font-outfit), sans-serif' }}>Industries</h3>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                                {grade.industries.map((ind, i) => (
                                                    <span key={i} style={{ background: 'var(--primary)', color: 'var(--accent)', padding: '0.3rem 0.9rem', borderRadius: '100px', fontSize: '0.7rem', fontWeight: '700', fontFamily: 'var(--font-outfit), sans-serif' }}>{ind}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Grade Comparison Table */}
                        <div style={{ marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                                Grade <span style={{ color: 'var(--accent)' }}>Comparison</span>
                            </h2>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-outfit), sans-serif', fontSize: '0.85rem' }}>
                                    <thead>
                                        <tr style={{ background: 'var(--primary)', color: 'white' }}>
                                            {['Grade', 'Chemical Resistance', 'Wear Resistance', 'Stiffness', 'Best For'].map((h, i) => (
                                                <th key={i} style={{ padding: '1rem 1.25rem', textAlign: 'left', fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ['Virgin PTFE', '★★★★★', '★★☆☆☆', '★★☆☆☆', 'Chemical & pharma sealing'],
                                            ['15% Glass Filled', '★★★★☆', '★★★☆☆', '★★★☆☆', 'Structural gaskets, slide pads'],
                                            ['25% Glass Filled', '★★★★☆', '★★★☆☆', '★★★★★', 'Bridge bearings, heavy load'],
                                            ['25% Carbon Filled', '★★★☆☆', '★★★★★', '★★★☆☆', 'Dynamic seals, piston rings'],
                                            ['Carbon + Graphite', '★★★☆☆', '★★★★★', '★★★☆☆', 'Dry running, compressors'],
                                            ['25% Graphite Filled', '★★★☆☆', '★★★★☆', '★★★☆☆', 'Slide bearings, low friction'],
                                        ].map((row, i) => (
                                            <tr key={i} style={{ background: i % 2 === 0 ? 'white' : 'var(--bg-light)', borderBottom: '1px solid var(--border)' }}>
                                                {row.map((cell, j) => (
                                                    <td key={j} style={{ padding: '1rem 1.25rem', color: j === 0 ? 'var(--primary)' : 'var(--text-main)', fontWeight: j === 0 ? '700' : '400' }}>{cell}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div style={{ marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                                Frequently Asked <span style={{ color: 'var(--accent)' }}>Questions</span>
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px' }}>
                                {[
                                    { q: 'What PTFE grades do you supply in India?', a: 'Visanix Global supplies all major PTFE grades including Virgin PTFE, 15% Glass Filled, 25% Glass Filled, 25% Carbon Filled, Carbon + Graphite Filled, and 25% Graphite Filled from our Gurugram facility across India.' },
                                    { q: 'What is the difference between virgin PTFE and filled PTFE?', a: 'Virgin PTFE is pure PTFE with maximum chemical resistance and electrical insulation. Filled PTFE grades contain additives (glass, carbon, graphite) that improve specific mechanical properties like wear resistance, stiffness, or thermal conductivity, at a slight reduction in chemical resistance.' },
                                    { q: 'Which PTFE grade is best for chemical applications?', a: 'Virgin PTFE offers the highest chemical resistance and is recommended for most chemical processing applications. For applications requiring improved mechanical strength, 15% or 25% glass filled PTFE is recommended.' },
                                    { q: 'Which PTFE grade is best for wear applications?', a: '25% Carbon Filled PTFE or Carbon + Graphite Filled PTFE are recommended for dynamic wear applications such as piston rings, seals, and bushes where the component is in continuous motion.' },
                                    { q: 'Do you provide material test certificates for all PTFE grades?', a: 'Yes. Visanix Global provides Material Test Certificates (MTC) with every order for all PTFE grades. Full material traceability is maintained.' },
                                ].map((faq, i) => (
                                    <div key={i} className="glass-card" style={{ padding: '1.75rem 2rem' }}>
                                        <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{faq.q}</h3>
                                        <p style={{ fontSize: '0.9rem', lineHeight: '1.7', fontFamily: 'var(--font-outfit), sans-serif' }}>{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="glass-card" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center', padding: '4rem 2rem', border: 'none' }}>
                            <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>Not Sure Which Grade You Need?</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2rem', fontFamily: 'var(--font-outfit), sans-serif' }}>
                                Tell us your application, operating temperature, chemical environment, and load conditions. We will recommend the right PTFE grade and supply it from Gurugram across India.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>Request Grade Advice</Link>
                                <Link href="/products" style={{ padding: '1rem 2.5rem', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: '700', fontFamily: 'var(--font-outfit), sans-serif', fontSize: '0.9rem' }}>
                                    View All Products
                                </Link>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}
