import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
        url: '/Logo%20only.png?v=4',
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
    images: ['/Logo%20only.png?v=4'],
  },
  icons: {
    icon: [
      { url: '/Logo%20only.png?v=4' },
      { url: '/Logo%20only.png?v=4', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/Logo%20only.png?v=4' },
    ],
    shortcut: ['/Logo%20only.png?v=4'],
  }
}

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Visanix Global",
    "url": "https://www.visanixglobal.com",
    "logo": "https://www.visanixglobal.com/Logo%20only.png",
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
