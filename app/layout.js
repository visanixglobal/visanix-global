import './globals.css'
import { Outfit, Montserrat, Nunito } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ContactPopup from '@/components/ContactPopup'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'block',
  variable: '--font-outfit',
  fallback: ['system-ui', 'sans-serif'],
  preload: true,
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'block',
  variable: '--font-montserrat',
  fallback: ['system-ui', 'sans-serif'],
  preload: true,
})

const nunito = Nunito({
  subsets: ['latin'],
  display: 'block',
  variable: '--font-nunito',
  weight: ['400', '600', '700', '800'],
  fallback: ['system-ui', 'sans-serif'],
  preload: false,
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
        <style dangerouslySetInnerHTML={{
          __html: `
          .navbar-logo { height: 90px !important; width: auto !important; max-height: 90px !important; }
          .site-header { background: #0A1128; }
          body { background: #ffffff; }
          #page-loader {
            position: fixed;
            inset: 0;
            background: #0A1128;
            z-index: 99999;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 2rem;
            transition: opacity 0.4s ease;
          }
          #page-loader.fade-out {
            opacity: 0;
            pointer-events: none;
          }
          #page-loader .loader-inner {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          #page-loader img {
            height: 72px;
            width: auto;
            filter: brightness(1.2) drop-shadow(0 0 0 #0A1128);
            background: #0A1128;
          }
          #page-loader .loader-brand {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 6px;
          }
          #page-loader .loader-name {
            font-family: system-ui, sans-serif;
            font-size: 1.7rem;
            color: white;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            line-height: 1;
            font-weight: 800;
          }
          #page-loader .loader-name span {
            color: #FCBF49;
            font-weight: 500;
            text-transform: none;
            font-size: 1.55rem;
          }
          #page-loader .loader-tagline {
            font-family: system-ui, sans-serif;
            font-size: 0.38rem;
            color: #FCBF49;
            text-transform: uppercase;
            letter-spacing: 0.18em;
            margin-top: 5px;
            font-weight: 800;
            opacity: 0.9;
          }
          #page-loader .loader-spinner {
            width: 36px;
            height: 36px;
            border: 3px solid rgba(252,191,73,0.2);
            border-top-color: #FCBF49;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          #page-loader .loader-bar {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 3px;
            background: #FCBF49;
            animation: loaderBar 1.5s ease-in-out infinite;
          }
          @keyframes loaderBar {
            0% { width: 0%; left: 0; }
            50% { width: 60%; left: 20%; }
            100% { width: 0%; left: 100%; }
          }
        `}} />
        <script dangerouslySetInnerHTML={{
          __html: `
          window.addEventListener('load', function() {
            var loader = document.getElementById('page-loader');
            if (loader) {
              loader.classList.add('fade-out');
              setTimeout(function() { loader.style.display = 'none'; }, 450);
            }
          });
        `}} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div id="page-loader">
          <div class="loader-inner">
            <img src="/Logo only.png" alt="Visanix Global" />
            <div class="loader-brand">
              <div class="loader-name">VISANIX <span>Global</span></div>
              <div class="loader-tagline">DELIVERING INDUSTRIAL EXCELLENCE WORLDWIDE</div>
            </div>
          </div>
          <div class="loader-spinner"></div>
          <div class="loader-bar"></div>
        </div>
        <Navbar />
        <div className="page-content-wrapper">
          {children}
        </div>
        <WhatsAppButton />
        <ContactPopup />
        <Footer />
      </body>
    </html>
  )
}