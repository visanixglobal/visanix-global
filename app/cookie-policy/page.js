export const metadata = {
  title: 'Cookie Policy | Visanix Global',
  description: 'Information about how we use cookies to improve your experience on our platform.',
  alternates: { canonical: '/cookie-policy' },
  robots: { index: false, follow: false },
}

export default function CookiePolicy() {
  return (
    <div className="reveal">
      <section style={{
        padding: '180px 0 100px',
        background: 'var(--primary)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '3.5rem' }}>Cookie <span className="gradient-text">Policy</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '1.5rem' }}>Last Updated: May 2026</p>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ lineHeight: '1.8', color: 'var(--text-main)', fontSize: '1.1rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>1. What Are Cookies</h2>
            <p style={{ marginBottom: '2rem' }}>Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.</p>

            <h2 style={{ marginBottom: '1.5rem' }}>2. How We Use Cookies</h2>
            <p style={{ marginBottom: '2rem' }}>When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes: to enable certain functions of the Service, to provide analytics, and to store your preferences.</p>

            <h2 style={{ marginBottom: '1.5rem' }}>3. Your Choices Regarding Cookies</h2>
            <p style={{ marginBottom: '2rem' }}>If you&apos;d like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
