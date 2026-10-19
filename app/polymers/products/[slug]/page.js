import { notFound } from 'next/navigation'
import { productData } from '@/app/products/[slug]/productData'
import ProductPageClient from '@/app/products/[slug]/ProductPageClient'

export async function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const product = productData[params.slug]
  if (!product) return {}
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: `${product.title} supplier India, ${product.title} price India, buy ${product.title} Delhi, PTFE products supplier Delhi NCR`,
    alternates: { canonical: `https://www.visanixglobal.com/polymers/products/${params.slug}` },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: `https://www.visanixglobal.com/polymers/products/${params.slug}`,
    },
  }
}

export default function PolymersProductSlug({ params }) {
  const product = productData[params.slug]
  if (!product) notFound()

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.visanixglobal.com/polymers' },
      { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.visanixglobal.com/polymers/products' },
      { '@type': 'ListItem', position: 3, name: product.title, item: `https://www.visanixglobal.com/polymers/products/${params.slug}` },
    ],
  }

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.metaDescription,
    image: product.image ? `https://www.visanixglobal.com${product.image}` : 'https://www.visanixglobal.com/og-image.png',
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
      <ProductPageClient product={product} brand="Visanix Polymers" basePath="/polymers" />
    </>
  )
}
