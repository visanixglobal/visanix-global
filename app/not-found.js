import Link from 'next/link';

export const metadata = {
    title: '404 — Page Not Found | Visanix Global',
};

export default function NotFound() {
    return (
        <div style={{
            minHeight: '70vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
            fontFamily: 'var(--font-outfit), sans-serif',
        }}>
            <div style={{ fontSize: '6rem', fontWeight: '900', color: 'var(--accent)', lineHeight: 1 }}>404</div>
            <h1 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', margin: '1rem 0 0.5rem', color: 'var(--primary)' }}>
                Page Not Found
            </h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: '400px', lineHeight: '1.7', marginBottom: '2rem' }}>
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Link href="/" className="btn btn-primary" style={{ padding: '0.9rem 2.5rem' }}>
                Back to Home
            </Link>
        </div>
    );
}
