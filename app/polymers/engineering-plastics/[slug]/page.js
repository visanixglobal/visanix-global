import { notFound } from 'next/navigation'
import { epData } from '@/app/engineering-plastics/[slug]/epData'
import EPPageClient from '@/app/engineering-plastics/[slug]/EPPageClient'

export async function generateStaticParams() {
  return Object.keys(epData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const product = epData[params.slug]
  if (!product) return {}
  return { title: product.metaTitle, description: product.metaDescription }
}

export default function PolymersEPSlug({ params }) {
  const product = epData[params.slug]
  if (!product) notFound()
  return <EPPageClient product={product} brand="Visanix Polymers" basePath="/polymers" />
}
