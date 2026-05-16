export const metadata = {
  title: 'Privacy Policy | Visanix Global',
  description: 'Our commitment to protecting your personal data and ensuring transparency in our industrial operations.',
  alternates: { canonical: '/privacy-policy' },
}

export default function PrivacyPolicy() {
  return (
    <div className="reveal">
      <section style={{
        padding: '180px 0 100px',
        background: 'var(--primary)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '3.5rem' }}>Privacy <span className="gradient-text">Policy</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '1.5rem' }}>Last Updated: May 2026</p>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ lineHeight: '1.8', color: 'var(--text-main)', fontSize: '1.1rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>1. Information We Collect</h2>
            <p style={{ marginBottom: '2rem' }}>We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us via WhatsApp. This may include your name, email address, phone number, and company details.</p>

            <h2 style={{ marginBottom: '1.5rem' }}>2. How We Use Information</h2>
            <p style={{ marginBottom: '2rem' }}>We use the information we collect to provide, maintain, and improve our services, to respond to your enquiries, and to send you technical notices and support messages.</p>

            <h2 style={{ marginBottom: '1.5rem' }}>3. Data Security</h2>
            <p style={{ marginBottom: '2rem' }}>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>

            <h2 style={{ marginBottom: '1.5rem' }}>4. Contact Us</h2>
            <p style={{ marginBottom: '2rem' }}>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:sahil@visanixglobal.com" style={{ color: 'var(--accent)', fontWeight: '700' }}>sahil@visanixglobal.com</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
