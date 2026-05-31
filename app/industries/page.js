import IndustriesClient from './industries-client'

export const metadata = {
  title: 'Industries Served | Visanix Global – PTFE & Rubber Solutions',
  description: 'Visanix Global supplies PTFE and rubber engineering materials to Chemical, Pharmaceutical, Aerospace, Oil & Gas, and Renewable Energy industries worldwide.',
  alternates: {
    canonical: '/industries',
  },
  openGraph: {
    title: 'Industries Served | Visanix Global – PTFE & Rubber Solutions',
    description: 'Visanix Global supplies PTFE and rubber engineering materials to Chemical, Pharmaceutical, Aerospace, Oil & Gas, and Renewable Energy industries worldwide.',
    url: 'https://www.visanixglobal.com/industries',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries Served | Visanix Global – PTFE & Rubber Solutions',
    description: 'Visanix Global supplies PTFE and rubber engineering materials to Chemical, Pharmaceutical, Aerospace, Oil & Gas, and Renewable Energy industries worldwide.',
    images: ['https://www.visanixglobal.com/og-image.png'],
  },
}

export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.visanixglobal.com/" },
      { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.visanixglobal.com/industries" }
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "PTFE & Rubber Engineering Materials Supply",
    "provider": {
      "@type": "Organization",
      "name": "Visanix Global",
      "url": "https://www.visanixglobal.com"
    },
    "description": "Supply of high-performance PTFE and rubber engineering materials to Chemical, Pharmaceutical, Aerospace, Oil & Gas, Textile, and Renewable Energy industries.",
    "areaServed": "Worldwide",
    "serviceType": "Industrial Materials Supply"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <IndustriesClient />
    </>
  )
}
