import Link from 'next/link'

export const metadata = {
    title: 'PTFE Supplier in Delhi | Visanix Global',
    description: 'Visanix Global supplies PTFE sheets, rods, tubes, gaskets and filled grades in Delhi. B2B supplier for pharma, chemical and industrial manufacturers. Call +91 9667445766.',
    alternates: {
        canonical: '/ptfe-supplier-delhi',
    },
    openGraph: {
        title: 'PTFE Supplier in Delhi | Visanix Global',
        description: 'Visanix Global supplies PTFE sheets, rods, tubes, gaskets and filled grades in Delhi. B2B supplier for pharma, chemical and industrial manufacturers.',
        url: 'https://www.visanixglobal.com/ptfe-supplier-delhi',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PTFE Supplier in Delhi | Visanix Global',
        description: 'Visanix Global supplies PTFE sheets, rods, tubes, gaskets and filled grades in Delhi.',
        images: ['https://www.visanixglobal.com/og-image.png'],
    },
}

export default function PTFESupplierDelhi() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Visanix Global",
        "description": "PTFE supplier serving Delhi from Gurugram, Haryana",
        "url": "https://www.visanixglobal.com",
        "telephone": "+91-9667445766",
        "email": "sahil@visanixglobal.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "LGF-72, Sector 30",
            "addressLocality": "Gurugram",
            "addressRegion": "Haryana",
            "postalCode": "122022",
            "addressCountry": "IN"
        },
        "geo": { "@type": "GeoCoordinates", "latitude": 28.4595, "longitude": 77.0266 }
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Do you supply PTFE products in Delhi?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, Visanix Global supplies PTFE products across Delhi and all major cities across India including Delhi NCR, Mumbai, Chennai, Ahmedabad, Pune, Hyderabad and more." }
            },
            {
                "@type": "Question",
                "name": "What PTFE grades are available?",
                "acceptedAnswer": { "@type": "Answer", "text": "We supply all major PTFE grades including Virgin PTFE, 15% Glass Filled, 25% Glass Filled, 25% Carbon Filled, Carbon + Graphite Filled, and 25% Graphite Filled. Custom filled grades available on request." }
            },
            {
                "@type": "Question",
                "name": "What is the minimum order quantity?",
                "acceptedAnswer": { "@type": "Answer", "text": "MOQ is flexible and negotiable based on your requirement. We cater to both trial orders and bulk requirements. Contact us to discuss your specific needs." }
            },
            {
                "@type": "Question",
                "name": "Do you provide material test certificates?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provide Material Test Certificates (MTC) with every order. Full material traceability is maintained for all PTFE products we supply." }
            },
            {
                "@type": "Question",
                "name": "How quickly can you deliver in Delhi?",
                "acceptedAnswer": { "@type": "Answer", "text": "Delivery timelines depend on product type and quantity. Standard products are typically dispatched within 3-7 working days. Contact us for exact delivery timelines for your requirement." }
            }
        ]
    }

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.visanixglobal.com" },
            { "@type": "ListItem", "position": 2, "name": "PTFE Supplier in Delhi", "item": "https://www.visanixglobal.com/ptfe-supplier-delhi" }
        ]
    }

    const products = [
        { name: 'PTFE Virgin Rod', href: '/products/ptfe-rod' },
        { name: 'PTFE Skived Sheet', href: '/products/ptfe-sheet-skived' },
        { name: 'PTFE Moulded Sheet', href: '/products/ptfe-sheet-moulded' },
        { name: 'PTFE Tube', href: '/products/ptfe-tube' },
        { name: 'PTFE Gasket', href: '/products/ptfe-gasket' },
        { name: 'PTFE Tape', href: '/products/ptfe-tape' },
        { name: 'PTFE Bush', href: '/products/ptfe-bush' },
        { name: 'PTFE Gland Packing', href: '/products/ptfe-gland' },
        { name: 'PTFE Ring', href: '/products/ptfe-ring' },
        { name: 'Custom PTFE Components', href: '/contact' },
    ]

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="reveal">
                <section style={{ padding: '180px 0 80px', background: 'linear-gradient(135deg, var(--primary) 0%, #0a1b3d 100%)', color: 'white', position: 'relative', overflow: 'hidden' }}>
                    <div className="bg-dots" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
                    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                        <nav style={{ marginBottom: '1.5rem', fontSize: '0.85rem', opacity: 0.7 }}>
                            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                            <span style={{ margin: '0 0.5rem' }}>›</span>
                            <span style={{ color: 'var(--accent)' }}>PTFE Supplier in Delhi</span>
                        </nav>
                        <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.75rem' }}>Delhi NCR</span>
                        <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '1.25rem', marginBottom: '1.5rem' }}>
                            PTFE Supplier in <span className="gradient-text">Delhi, NCR</span>
                        </h1>
                        <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '650px', fontSize: '1.1rem', lineHeight: '1.7', fontFamily: 'var(--font-outfit), sans-serif' }}>
                            Visanix Global is a B2B specialty PTFE and engineering materials trading company headquartered in Gurugram, Haryana. We supply high-performance PTFE products to chemical plants, pharmaceutical manufacturers, and industrial OEM manufacturers across Delhi and the NCR region.
                        </p>
                    </div>
                </section>

                <section style={{ padding: '5rem 0', background: 'var(--bg-light)' }}>
                    <div className="container">

                        <div style={{ marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>About <span style={{ color: 'var(--accent)' }}>Visanix Global</span></h2>
                            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-main)', maxWidth: '800px', fontFamily: 'var(--font-outfit), sans-serif' }}>
                                Visanix Global is a trusted <strong>PTFE and Teflon supplier serving Delhi</strong>, based in Sector 30, Gurugram, Haryana — just 30 minutes from central Delhi. We supply virgin and filled PTFE products including rods, sheets, tubes, gaskets, bushes, rings, gland packing, and custom machined components to B2B customers across <strong>Delhi, New Delhi, Noida, Faridabad</strong>, and the wider NCR region. As a leading <strong>PTFE supplier in Delhi NCR</strong>, our customers include chemical processing plants, pharmaceutical manufacturers, food processing units, oil and gas companies, and industrial OEM manufacturers who require precision-grade fluoropolymer materials with full traceability.
                            </p>
                        </div>

                        <div style={{ marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>PTFE Products We Supply in <span style={{ color: 'var(--accent)' }}>Delhi</span></h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                                {products.map((p, i) => (
                                    <Link key={i} href={p.href} className="glass-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem', fontFamily: 'var(--font-outfit), sans-serif' }}>
                                        <span style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>→</span>{p.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div style={{ marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Industries Served in <span style={{ color: 'var(--accent)' }}>Delhi NCR</span></h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                                {['Pharmaceutical Manufacturers', 'Chemical Processing Plants', 'Oil and Gas Companies', 'Food Processing Units', 'Industrial OEM Manufacturers', 'Water Treatment Plants'].map((ind, i) => (
                                    <div key={i} className="glass-card" style={{ padding: '1.25rem 1.5rem' }}>
                                        <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-main)', fontFamily: 'var(--font-outfit), sans-serif' }}>{ind}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Why Choose <span style={{ color: 'var(--accent)' }}>Visanix Global</span></h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                                {[
                                    { icon: '🧪', title: 'Technical Expertise', text: 'Deep expertise in PTFE material science — virgin, glass filled, carbon filled, graphite filled grades.' },
                                    { icon: '📋', title: 'Full Traceability', text: 'Complete material traceability with test certificates and grade documentation for every order.' },
                                    { icon: '💰', title: 'Competitive Pricing', text: 'Direct sourcing model ensures competitive pricing without compromising on quality.' },
                                    { icon: '🚚', title: 'Fast Delivery to Delhi', text: 'Same-day dispatch for standard items. Fast delivery across Delhi, Noida, Faridabad, and NCR.' },
                                    { icon: '⚙️', title: 'Custom Components', text: 'Custom machined PTFE components manufactured to your drawings and specifications.' },
                                ].map((item, i) => (
                                    <div key={i} className="glass-card" style={{ padding: '2rem' }}>
                                        <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                                        <p style={{ fontSize: '0.9rem', lineHeight: '1.7', fontFamily: 'var(--font-outfit), sans-serif' }}>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Our <span style={{ color: 'var(--accent)' }}>Location</span></h2>
                            <div className="glass-card" style={{ padding: '2.5rem', maxWidth: '500px' }}>
                                <p style={{ fontWeight: '800', fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '1rem', fontFamily: 'var(--font-outfit), sans-serif' }}>Visanix Global</p>
                                <address style={{ fontStyle: 'normal', lineHeight: '2', fontSize: '0.95rem', color: 'var(--text-main)', fontFamily: 'var(--font-outfit), sans-serif' }}>
                                    LGF-72, Sector 30<br />
                                    Gurugram, Haryana 122022<br />
                                    Phone: <a href="tel:+919667445766" style={{ color: 'var(--primary)', fontWeight: '700' }}>+91 9667445766</a><br />
                                    Email: <a href="mailto:sahil@visanixglobal.com" style={{ color: 'var(--primary)', fontWeight: '700' }}>sahil@visanixglobal.com</a><br />
                                    Website: <a href="https://www.visanixglobal.com" style={{ color: 'var(--primary)', fontWeight: '700' }}>www.visanixglobal.com</a>
                                </address>
                            </div>
                        </div>

                        <div style={{ marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Frequently Asked <span style={{ color: 'var(--accent)' }}>Questions</span></h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px' }}>
                                {[
                                    { q: 'Do you supply PTFE products in Delhi?', a: 'Yes, Visanix Global supplies PTFE products across Delhi and all major cities across India including Delhi NCR, Mumbai, Chennai, Ahmedabad, Pune, Hyderabad and more.' },
                                    { q: 'What PTFE grades are available?', a: 'We supply all major PTFE grades including Virgin PTFE, 15% Glass Filled, 25% Glass Filled, 25% Carbon Filled, Carbon + Graphite Filled, and 25% Graphite Filled. Custom filled grades available on request.' },
                                    { q: 'What is the minimum order quantity?', a: 'MOQ is flexible and negotiable based on your requirement. We cater to both trial orders and bulk requirements. Contact us to discuss your specific needs.' },
                                    { q: 'Do you provide material test certificates?', a: 'Yes. We provide Material Test Certificates (MTC) with every order. Full material traceability is maintained for all PTFE products we supply.' },
                                    { q: 'How quickly can you deliver in Delhi?', a: 'Delivery timelines depend on product type and quantity. Standard products are typically dispatched within 3-7 working days. Contact us for exact delivery timelines for your requirement.' },
                                ].map((faq, i) => (
                                    <div key={i} className="glass-card" style={{ padding: '1.75rem 2rem' }}>
                                        <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{faq.q}</h3>
                                        <p style={{ fontSize: '0.9rem', lineHeight: '1.7', fontFamily: 'var(--font-outfit), sans-serif' }}>{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="glass-card" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center', padding: '4rem 2rem', border: 'none' }}>
                            <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>Request a Quote for Delhi</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2rem', fontFamily: 'var(--font-outfit), sans-serif' }}>
                                Tell us your PTFE requirement and we will respond within 24 hours with pricing and availability.
                            </p>
                            <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Request a Quote</Link>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}
