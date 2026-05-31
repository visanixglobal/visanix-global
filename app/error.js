'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

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
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚠️</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', margin: '0 0 0.5rem', color: 'var(--primary)' }}>
                Something went wrong
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '400px', lineHeight: '1.7', marginBottom: '2rem' }}>
                An unexpected error occurred. Please try again or return to the homepage.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button
                    onClick={reset}
                    className="btn btn-primary"
                    style={{ padding: '0.9rem 2.5rem' }}
                >
                    Try Again
                </button>
                <Link href="/" className="btn btn-outline" style={{ padding: '0.9rem 2.5rem' }}>
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
