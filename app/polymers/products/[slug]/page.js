import { notFound } from 'next/navigation'
import { productData } from '@/app/products/[slug]/productData'
import ProductPageClient from '@/app/products/[slug]/ProductPageClient'

export async function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const product = productData[params.slug]
  if (!product) return {}
  return { title: product.metaTitle, description: product.metaDescription }
}

export default function PolymersProductSlug({ params }) {
  const product = productData[params.slug]
  if (!product) notFound()
  return <ProductPageClient product={product} brand="Visanix Polymers" basePath="/polymers" />
}
