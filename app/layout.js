import './globals.css'
import { Outfit, Montserrat, Nunito } from 'next/font/google'
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

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
  weight: ['400', '600', '700', '800'],
})


export const metadata = {
  metadataBase: new URL('https://www.visanixglobal.com'),
  title: {
    default: 'Visanix Global | PTFE Supplier & Industrial Polymer Solutions',
    template: '%s',
  },
  description: 'Visanix Global — PTFE supplier and exporter in Gurugram, India. High-performance PTFE rods, sheets, tubes, gaskets, rubber seals and custom engineered parts.',
  keywords: 'PTFE supplier India, PTFE rod, PTFE sheet, PTFE tube, PTFE gasket, industrial polymer, engineering materials, Gurugram, export',
  openGraph: {
    title: 'Visanix Global | PTFE Supplier & Industrial Polymer Solutions',
    description: 'PTFE supplier and exporter in Gurugram, India. High-performance PTFE rods, sheets, tubes, gaskets, rubber seals and custom engineered parts.',
    url: 'https://www.visanixglobal.com',
    siteName: 'Visanix Global',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Visanix Global - PTFE Supplier India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visanix Global | PTFE Supplier India',
    description: 'PTFE supplier and exporter in Gurugram, India. Rods, sheets, tubes, gaskets and custom parts.',
    images: ['/og-image.png'],
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
    "@type": ["Organization", "LocalBusiness"],
    "name": "Visanix Global",
    "url": "https://www.visanixglobal.com",
    "logo": "https://www.visanixglobal.com/logo.png",
    "image": "https://www.visanixglobal.com/og-image.png",
    "description": "Visanix Global is a trusted PTFE supplier and exporter based in Gurugram, India. We supply PTFE rods, sheets, tubes, gaskets, rubber seals and custom engineered parts globally.",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "LGF-72/ Sector 30",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122022",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.4595",
      "longitude": "77.0266"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9667445766",
      "contactType": "customer service",
      "email": "sahil@visanixglobal.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "PTFE & Rubber Products",
      "url": "https://www.visanixglobal.com/products"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "foundingDate": "2024",
    "sameAs": [
      "https://www.indiamart.com/visanix-global/",
      "https://www.linkedin.com/company/visanix-global",
      "https://www.facebook.com/visanixglobal",
      "https://www.justdial.com/visanix-global"
    ]
  };

  return (
    <html lang="en" className={`${outfit.variable} ${montserrat.variable} ${nunito.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <div style={{ paddingTop: '114px' }}>
          {children}
        </div>
        <WhatsAppButton />
        <ContactPopup />
        <Footer />
      </body>
    </html>
  )
}