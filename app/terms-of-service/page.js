export const metadata = {
  title: 'Terms of Service | Visanix Global',
  description: 'The terms and conditions governing the use of the Visanix Global industrial portal.',
  alternates: { canonical: '/terms-of-service' },
  robots: { index: false, follow: false },
}

export default function TermsOfService() {
  return (
    <div className="reveal">
      <section style={{
        padding: '180px 0 100px',
        background: 'var(--primary)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '3.5rem' }}>Terms of <span className="gradient-text">Service</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '1.5rem' }}>Last Updated: May 2026</p>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ lineHeight: '1.8', color: 'var(--text-main)', fontSize: '1.1rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>1. Acceptance of Terms</h2>
            <p style={{ marginBottom: '2rem' }}>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

            <h2 style={{ marginBottom: '1.5rem' }}>2. Use License</h2>
            <p style={{ marginBottom: '2rem' }}>Permission is granted to temporarily download one copy of the materials on Visanix Global&apos;s website for personal, non-commercial transitory viewing only.</p>

            <h2 style={{ marginBottom: '1.5rem' }}>3. Disclaimer</h2>
            <p style={{ marginBottom: '2rem' }}>The materials on Visanix Global&apos;s website are provided on an &apos;as is&apos; basis. Visanix Global makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.</p>

            <h2 style={{ marginBottom: '1.5rem' }}>4. Limitations</h2>
            <p style={{ marginBottom: '2rem' }}>In no event shall Visanix Global or its suppliers be liable for any damages arising out of the use or inability to use the materials on Visanix Global&apos;s website.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
