import AboutClient from './about-client'

export const metadata = {
  title: 'About Us | Visanix Global – PTFE Supplier India',
  description: 'Visanix Global is a trusted PTFE supplier and exporter based in Gurugram, India. Learn about our mission, quality standards, and global reach.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | Visanix Global – PTFE Supplier India',
    description: 'Visanix Global is a trusted PTFE supplier and exporter based in Gurugram, India.',
    url: 'https://www.visanixglobal.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Visanix Global – PTFE Supplier India',
    description: 'Visanix Global is a trusted PTFE supplier and exporter based in Gurugram, India. Learn about our mission, quality standards, and global reach.',
    images: ['https://www.visanixglobal.com/og-image.png'],
  },
}

export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.visanixglobal.com/" },
      { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.visanixglobal.com/about" }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutClient />
    </>
  )
}
