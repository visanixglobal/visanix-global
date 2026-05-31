import { notFound } from 'next/navigation'
import { industryData } from './industryData'
import IndustryPageClient from './IndustryPageClient'

export async function generateStaticParams() {
    return Object.keys(industryData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
    const industry = industryData[params.slug]
    if (!industry) return {}

    return {
        title: industry.metaTitle,
        description: industry.metaDescription,
        alternates: {
            canonical: `/industries/${params.slug}`,
        },
        openGraph: {
            title: industry.metaTitle,
            description: industry.metaDescription,
            url: `https://www.visanixglobal.com/industries/${params.slug}`,
            images: [{ url: '/og-image.png', width: 1200, height: 630, alt: industry.metaTitle }],
        },
        twitter: {
            card: 'summary_large_image',
            title: industry.metaTitle,
            description: industry.metaDescription,
            images: ['https://www.visanixglobal.com/og-image.png'],
        },
    }
}

export default function IndustryPage({ params }) {
    const industry = industryData[params.slug]
    if (!industry) notFound()

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.visanixglobal.com" },
            { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.visanixglobal.com/industries" },
            { "@type": "ListItem", "position": 3, "name": industry.tag, "item": `https://www.visanixglobal.com/industries/${params.slug}` }
        ]
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": industry.faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        }))
    }

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `PTFE Supply for ${industry.tag}`,
        "description": industry.metaDescription,
        "provider": {
            "@type": "Organization",
            "name": "Visanix Global",
            "url": "https://www.visanixglobal.com"
        },
        "areaServed": { "@type": "Country", "name": "India" },
        "serviceType": "Industrial Materials Supply"
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <IndustryPageClient industry={industry} slug={params.slug} />
        </>
    )
}
