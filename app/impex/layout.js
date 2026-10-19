import './impex.css'
import ImpexLayoutWrapper from '@/components/impex/ImpexLayoutWrapper'

export const metadata = {
  metadataBase: new URL('https://www.visanixglobal.com'),
  title: {
    default: 'Visanix Impex | Microfiber Towel Importer & Wholesale Supplier India',
    template: '%s | Visanix Impex',
  },
  description: 'Visanix Impex — wholesale microfiber towel importer in India. Supplying coral-velvet towels (200–400 GSM), bath towels (300–600 GSM, 70×140cm), baby hooded towels, car cleaning towels (300–500 GSM), and kitchen towels to retailers, hotels, and distributors across Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, and pan-India. A division of Visanix Global.',
  keywords: 'microfiber towel wholesale India, bath towel supplier India, microfiber towel importer Delhi, coral velvet towel supplier India, baby hooded towel wholesale India, hotel towel supplier India, bulk towel import India, cleaning towel wholesale Delhi, microfiber towel supplier Mumbai, bath towel importer Bangalore, wholesale towel supplier Chennai, hotel towel supply Hyderabad, microfiber towel distributor Pune, towel wholesale Ahmedabad, 300 GSM bath towel India, 400 GSM microfiber towel wholesale, 500 GSM bath towel supplier, high GSM towel importer India, coral velvet towel 300 GSM India',
  openGraph: {
    title: 'Visanix Impex | Microfiber Towel Wholesale Supplier India',
    description: 'Wholesale microfiber towels, bath towels, baby towels, and cleaning towels — direct import supply to retailers, hotels, and distributors across India.',
    url: 'https://www.visanixglobal.com/impex',
    siteName: 'Visanix Impex',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Visanix Impex — Microfiber Towel Wholesale India' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visanix Impex | Wholesale Microfiber Towels India',
    description: 'Microfiber, coral-velvet, bath, baby, and cleaning towels — wholesale supply India. A division of Visanix Global.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://www.visanixglobal.com/impex' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': 'https://www.visanixglobal.com/impex#organization',
      name: 'Visanix Impex',
      alternateName: ['Visanix Global Impex Division', 'Visanix Towel Importer'],
      url: 'https://www.visanixglobal.com/impex',
      logo: 'https://www.visanixglobal.com/visanix-impex-logo.png',
      image: 'https://www.visanixglobal.com/og-image.png',
      description: 'Visanix Impex is the textile import division of Visanix Global. We import and supply premium microfiber towels, coral-velvet towels, bath towels, baby hooded towels, car cleaning towels, and kitchen towels wholesale to retailers, hotels, and distributors across India.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'B-1/192, Paschim Vihar',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        postalCode: '110063',
        addressCountry: 'IN',
      },
      geo: { '@type': 'GeoCoordinates', latitude: '28.6679', longitude: '77.0993' },
      telephone: '+91-9667445766',
      email: 'sahil@visanixglobal.com',
      priceRange: '₹₹',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
      areaServed: [
        { '@type': 'City', name: 'Delhi' },
        { '@type': 'City', name: 'Gurugram' },
        { '@type': 'City', name: 'Noida' },
        { '@type': 'Country', name: 'India' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Microfiber & Textile Towel Products',
        url: 'https://www.visanixglobal.com/impex/products',
      },
      parentOrganization: {
        '@type': 'Organization',
        name: 'Visanix Global',
        url: 'https://www.visanixglobal.com',
      },
      sameAs: [
        'https://www.indiamart.com/visanix-global/',
        'https://www.linkedin.com/company/visanix-global',
      ],
      knowsAbout: [
        'Microfiber Towels', 'Coral Velvet Towels', 'Bath Towels', 'Baby Hooded Towels',
        'Car Cleaning Towels', 'Kitchen Towels', 'Jacquard Towels', 'Textile Import India',
        'Wholesale Towel Supply', 'Microfiber Fabric', 'Hotel Towel Supply',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.visanixglobal.com/impex#website',
      url: 'https://www.visanixglobal.com/impex',
      name: 'Visanix Impex',
      description: 'Wholesale microfiber and textile towel importer and supplier in India',
      publisher: { '@id': 'https://www.visanixglobal.com/impex#organization' },
      inLanguage: 'en-IN',
    },
  ],
}

export default function ImpexLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ImpexLayoutWrapper>{children}</ImpexLayoutWrapper>
    </>
  )
}
