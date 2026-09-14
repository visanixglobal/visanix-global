import { notFound } from 'next/navigation'
import { epData } from './epData'
import EPPageClient from './EPPageClient'

export async function generateStaticParams() {
  return Object.keys(epData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const product = epData[params.slug]
  if (!product) return {}

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: {
      canonical: `/engineering-plastics/${params.slug}`,
    },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: `https://www.visanixglobal.com/engineering-plastics/${params.slug}`,
      images: [{ url: 'https://www.visanixglobal.com/og-image.png', alt: product.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.metaTitle,
      description: product.metaDescription,
      images: ['https://www.visanixglobal.com/og-image.png'],
    },
  }
}

export default function EPProductPage({ params }) {
  const product = epData[params.slug]
  if (!product) notFound()

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "description": product.metaDescription,
    "sku": product.sku,
    "mpn": product.mpn,
    "image": `https://www.visanixglobal.com${product.image}`,
    "brand": {
      "@type": "Brand",
      "name": "Visanix Global"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Visanix Global",
      "url": "https://www.visanixglobal.com"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://www.visanixglobal.com/engineering-plastics/${params.slug}`,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Visanix Global"
      }
    }
  }

  const faqSchema = product.faqs && product.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": product.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  } : null

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.visanixglobal.com" },
      { "@type": "ListItem", "position": 2, "name": "Engineering Plastics", "item": "https://www.visanixglobal.com/engineering-plastics" },
      { "@type": "ListItem", "position": 3, "name": product.title, "item": `https://www.visanixglobal.com/engineering-plastics/${params.slug}` }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <EPPageClient product={product} />
    </>
  )
}
