import './globals.css'
import { Outfit, Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ContactPopup from '@/components/ContactPopup'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata = {
  metadataBase: new URL('https://www.visanixglobal.com'),
  title: 'Visanix Global | Premium Industrial Goods & Polymer Solutions',
  description: 'Global provider of high-performance industrial solutions, specialized PTFE engineering materials, and strategic supply chain services.',
  keywords: 'PTFE, Industrial Goods, Polymer Solutions, Engineering Materials, Manufacturing, Global Export',
  openGraph: {
    title: 'Visanix Global | Premium Industrial Goods & Polymer Solutions',
    description: 'Global provider of high-performance industrial solutions and specialized PTFE engineering materials.',
    url: 'https://www.visanixglobal.com',
    siteName: 'Visanix Global',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Visanix Global - Industrial Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visanix Global | Industrial Excellence',
    description: 'Specialized PTFE & polymer engineering solutions worldwide.',
    images: ['/android-chrome-512x512.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Visanix Global",
    "url": "https://www.visanixglobal.com",
    "logo": "https://www.visanixglobal.com/logo.png",
    "description": "Global provider of high-performance industrial solutions, specialized PTFE engineering materials, and strategic supply chain services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "LGF-72/ Sector 30",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122022",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 9667445766",
      "contactType": "customer service",
      "email": "sahil@visanixglobal.com"
    }
  };

  return (
    <html lang="en" className={`${outfit.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <WhatsAppButton />
        <ContactPopup />
        <Footer />
      </body>
    </html>
  )
}