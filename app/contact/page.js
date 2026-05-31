import ContactClient from './contact-client'

export const metadata = {
  title: 'Contact Visanix Global | PTFE Supplier Gurugram India',
  description: 'Get in touch with Visanix Global for PTFE product enquiries, custom orders, and export quotes. Located in Gurugram, Haryana. Call or WhatsApp us today.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Visanix Global | PTFE Supplier Gurugram India',
    description: 'Get in touch with Visanix Global for PTFE product enquiries, custom orders, and export quotes.',
    url: 'https://www.visanixglobal.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Visanix Global | PTFE Supplier Gurugram India',
    description: 'Contact Visanix Global for PTFE product enquiries. Call +91 9667445766 or email sahil@visanixglobal.com. Office in Sector 30, Gurugram, Haryana.',
    images: ['https://www.visanixglobal.com/og-image.png'],
  },
}

export default function Page() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Visanix Global",
    "url": "https://www.visanixglobal.com/contact",
    "description": "Contact Visanix Global for PTFE product enquiries, custom orders, and export quotes.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Visanix Global",
      "telephone": "+91-9667445766",
      "email": "sahil@visanixglobal.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "LGF-72/ Sector 30",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "postalCode": "122022",
        "addressCountry": "IN"
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactClient />
    </>
  )
}
