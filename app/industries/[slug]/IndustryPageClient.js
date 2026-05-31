"use client";
import Link from 'next/link';

export default function IndustryPageClient({ industry, slug }) {
    return (
        <div className="reveal">
            {/* Hero */}
            <section style={{ padding: 'clamp(100px, 15vw, 180px) 0 80px', background: 'linear-gradient(135deg, var(--primary) 0%, #0a1b3d 100%)', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div className="bg-dots" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <nav style={{ marginBottom: '1.5rem', fontSize: '0.85rem', opacity: 0.7 }}>
                        <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                        <span style={{ margin: '0 0.5rem' }}>›</span>
                        <Link href="/industries" style={{ color: 'white', textDecoration: 'none' }}>Industries</Link>
                        <span style={{ margin: '0 0.5rem' }}>›</span>
                        <span style={{ color: 'var(--accent)' }}>{industry.tag}</span>
                    </nav>
                    <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.75rem' }}>{industry.tag}</span>
                    <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginTop: '1.25rem', marginBottom: '1.5rem', lineHeight: '1.15' }}>
                        {industry.h1}
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '650px', fontSize: '1.1rem', lineHeight: '1.7', fontFamily: 'var(--font-outfit), sans-serif' }}>
                        {industry.heroDescription}
                    </p>
                </div>
            </section>

            <section style={{ padding: '5rem 0', background: 'var(--bg-light)' }}>
                <div className="container">

                    {/* Key Benefit Banner */}
                    <div style={{ background: 'var(--accent)', borderRadius: '12px', padding: '1.5rem 2rem', marginBottom: '4rem', display: 'flex', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '1.5rem' }}>✅</span>
                        <p style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '1rem', fontFamily: 'var(--font-outfit), sans-serif', margin: 0 }}>
                            {industry.keyBenefit}
                        </p>
                    </div>

                    {/* Why PTFE */}
                    <div style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                            Why PTFE for <span style={{ color: 'var(--accent)' }}>{industry.tag}</span>
                        </h2>
                        <p style={{ fontSize: '1rem', lineHeight: '1.9', color: 'var(--text-main)', fontFamily: 'var(--font-outfit), sans-serif' }}
                            dangerouslySetInnerHTML={{ __html: industry.whyPTFE }}
                        />
                    </div>

                    {/* Recommended Products */}
                    <div style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                            Recommended <span style={{ color: 'var(--accent)' }}>Products</span>
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                            {industry.recommendedProducts.map((p, i) => (
                                <Link key={i} href={p.href} className="glass-card" style={{ padding: '1.75rem 2rem', textDecoration: 'none', color: 'var(--primary)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                        <span style={{ color: 'var(--accent)', fontSize: '1.2rem' }}>→</span>
                                        <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{p.name}</h3>
                                    </div>
                                    <p style={{ fontSize: '0.85rem', lineHeight: '1.6', fontFamily: 'var(--font-outfit), sans-serif', margin: 0 }}>{p.use}</p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Compliance */}
                    <div style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                            Standards & <span style={{ color: 'var(--accent)' }}>Compliance</span>
                        </h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {industry.compliance.map((c, i) => (
                                <span key={i} style={{ background: 'var(--primary)', color: 'var(--accent)', padding: '0.6rem 1.5rem', borderRadius: '100px', fontSize: '0.85rem', fontWeight: '700', fontFamily: 'var(--font-outfit), sans-serif' }}>
                                    {c}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* FAQ */}
                    <div style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                            Frequently Asked <span style={{ color: 'var(--accent)' }}>Questions</span>
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {industry.faqs.map((faq, i) => (
                                <div key={i} className="glass-card" style={{ padding: '1.75rem 2rem' }}>
                                    <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{faq.q}</h3>
                                    <p style={{ fontSize: '0.9rem', lineHeight: '1.7', fontFamily: 'var(--font-outfit), sans-serif' }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="glass-card" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center', padding: '4rem 2rem', border: 'none' }}>
                        <h3 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>
                            Request an Industry Quote
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2rem', fontFamily: 'var(--font-outfit), sans-serif' }}>
                            Tell us your application and we will recommend the right PTFE grade and product for your industry requirement.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>Request Industry Quote</Link>
                            <Link href="/products" style={{ padding: '1rem 2.5rem', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: '700', fontFamily: 'var(--font-outfit), sans-serif', fontSize: '0.9rem' }}>
                                View All Products
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
