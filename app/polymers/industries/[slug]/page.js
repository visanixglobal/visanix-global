import { notFound } from 'next/navigation'
import { industryData } from '@/app/industries/[slug]/industryData'
import IndustryPageClient from '@/app/industries/[slug]/IndustryPageClient'

export async function generateStaticParams() {
  return Object.keys(industryData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const industry = industryData[params.slug]
  if (!industry) return {}
  return { title: industry.metaTitle, description: industry.metaDescription }
}

export default function PolymersIndustrySlug({ params }) {
  const industry = industryData[params.slug]
  if (!industry) notFound()
  return <IndustryPageClient industry={industry} />
}
