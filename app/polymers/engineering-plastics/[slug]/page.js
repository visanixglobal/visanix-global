import { notFound } from 'next/navigation'
import { epData } from '@/app/engineering-plastics/[slug]/epData'
import EPPageClient from '@/app/engineering-plastics/[slug]/EPPageClient'

export async function generateStaticParams() {
  return Object.keys(epData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const product = epData[params.slug]
  if (!product) return {}
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: `${product.title} supplier India, ${product.title} price Delhi, buy ${product.title} India, engineering plastics supplier Delhi NCR`,
    alternates: { canonical: `https://www.visanixglobal.com/polymers/engineering-plastics/${params.slug}` },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: `https://www.visanixglobal.com/polymers/engineering-plastics/${params.slug}`,
    },
  }
}

export default function PolymersEPSlug({ params }) {
  const product = epData[params.slug]
  if (!product) notFound()

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.visanixglobal.com/polymers' },
      { '@type': 'ListItem', position: 2, name: 'Engineering Plastics', item: 'https://www.visanixglobal.com/polymers/engineering-plastics' },
      { '@type': 'ListItem', position: 3, name: product.title, item: `https://www.visanixglobal.com/polymers/engineering-plastics/${params.slug}` },
    ],
  }

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.metaDescription,
    brand: { '@type': 'Brand', name: 'Visanix Polymers' },
    manufacturer: { '@type': 'Organization', name: 'Visanix Polymers', url: 'https://www.visanixglobal.com/polymers' },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      seller: { '@type': 'Organization', name: 'Visanix Polymers' },
      areaServed: { '@type': 'Country', name: 'India' },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <EPPageClient product={product} brand="Visanix Polymers" basePath="/polymers" />
    </>
  )
}
