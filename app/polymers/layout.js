import './polymers.css'
import PolymersLayoutWrapper from '@/components/PolymersLayoutWrapper'

export const metadata = {
  metadataBase: new URL('https://www.visanixglobal.com'),
  title: {
    default: 'Visanix Polymers | PTFE Supplier Delhi NCR — Engineering Plastics India',
    template: '%s | Visanix Polymers',
  },
  description: 'Visanix Polymers — PTFE supplier in Delhi NCR, India. Supplying PTFE rods, sheets, tubes, gaskets, cast nylon, PEEK, POM, PU, PVC, and engineering plastics to chemical plants, pharma, and industrial OEMs across India.',
  keywords: 'PTFE supplier Delhi, PTFE supplier India, engineering plastics supplier Delhi NCR, PTFE rod supplier India, PTFE sheet supplier Delhi, cast nylon supplier India, PEEK sheet India, Teflon supplier Delhi, fluoropolymer supplier India, industrial plastics Delhi, PTFE supplier Mumbai, PTFE supplier Bangalore, engineering plastics supplier Chennai, PTFE supplier Hyderabad, PTFE supplier Pune, PTFE rod supplier Ahmedabad, PTFE sheet supplier Surat, Teflon supplier India, PTFE gasket manufacturer India, cast nylon rod supplier India, PEEK supplier India, POM Delrin supplier India',
  openGraph: {
    title: 'Visanix Polymers | PTFE Supplier Delhi NCR — Engineering Plastics India',
    description: 'PTFE and engineering plastics supplier in Delhi NCR — rods, sheets, tubes, gaskets, cast nylon, PEEK, POM, and custom machined parts for industrial manufacturers across India.',
    url: 'https://www.visanixglobal.com/polymers',
    siteName: 'Visanix Polymers',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Visanix Polymers — PTFE Supplier India' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visanix Polymers | PTFE Supplier Delhi NCR India',
    description: 'PTFE rods, sheets, tubes, engineering plastics — wholesale supply Delhi NCR. A division of Visanix Global.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://www.visanixglobal.com/polymers' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': 'https://www.visanixglobal.com/polymers#organization',
      name: 'Visanix Polymers',
      alternateName: ['Visanix Global Polymers Division', 'Visanix PTFE Supplier'],
      url: 'https://www.visanixglobal.com/polymers',
      logo: 'https://www.visanixglobal.com/visanix-polymers-logo.png',
      image: 'https://www.visanixglobal.com/og-image.png',
      description: 'Visanix Polymers is the engineering plastics and PTFE supply division of Visanix Global. We supply PTFE rods, sheets, tubes, gaskets, filled grades, cast nylon, PEEK, POM, PVC, PP, PU, silicone, and stainless steel to industrial manufacturers across India.',
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
        name: 'PTFE & Engineering Plastics Products',
        url: 'https://www.visanixglobal.com/polymers/products',
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
        'PTFE', 'Polytetrafluoroethylene', 'Teflon', 'Engineering Plastics',
        'Cast Nylon', 'PEEK', 'Delrin', 'POM', 'PVC', 'Polypropylene',
        'Polyurethane', 'Silicone', 'Stainless Steel', 'Industrial Polymers',
        'Fluoropolymers', 'PTFE Rod', 'PTFE Sheet', 'PTFE Tube', 'PTFE Gasket',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.visanixglobal.com/polymers#website',
      url: 'https://www.visanixglobal.com/polymers',
      name: 'Visanix Polymers',
      description: 'PTFE and engineering plastics supplier in Delhi NCR, India',
      publisher: { '@id': 'https://www.visanixglobal.com/polymers#organization' },
      inLanguage: 'en-IN',
    },
  ],
}

export default function PolymersLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PolymersLayoutWrapper>{children}</PolymersLayoutWrapper>
    </>
  )
}
