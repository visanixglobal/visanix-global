import ImpexHome from './lib/page-client'

export const metadata = {
  title: 'Visanix Impex | Microfiber Towel Wholesale Importer India — Bath, Baby & Cleaning Towels',
  description: 'Visanix Impex — wholesale microfiber towel importer and supplier in India. Supplying coral-velvet face towels, bath towels, baby hooded towels, car cleaning towels, and kitchen towels to retailers, hotels, and distributors. A division of Visanix Global, New Delhi.',
  keywords: 'microfiber towel wholesale India, bath towel importer India, coral velvet towel supplier, baby hooded towel wholesale, hotel towel supplier India, cleaning towel importer Delhi, bulk towel supply India, 300 GSM microfiber towel India, 400 GSM bath towel wholesale, 500 GSM bath towel supplier India, microfiber towel wholesale Mumbai, towel importer Bangalore, bath towel supplier Chennai, towel wholesale Hyderabad, microfiber towel distributor Pune',
  alternates: { canonical: 'https://www.visanixglobal.com/impex' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What towel products does Visanix Impex supply?',
      acceptedAnswer: { '@type': 'Answer', text: 'Visanix Impex supplies microfiber coral-velvet face towels, microfiber bath towels, polyester bath towels, baby hooded towels, baby washcloths, car cleaning microfiber towels, cotton-gauze kitchen towels, and jacquard patterned towels. All available for wholesale bulk orders.' },
    },
    {
      '@type': 'Question',
      name: 'What GSM options are available for microfiber towels?',
      acceptedAnswer: { '@type': 'Answer', text: 'We supply microfiber towels across a full GSM range: face and coral-velvet towels 200–400 GSM, bath towels 300–600 GSM, baby towels 280–400 GSM, car cleaning towels 300–500 GSM, and kitchen towels 150–350 GSM. Custom GSM specifications are available for bulk OEM orders.' },
    },
    {
      '@type': 'Question',
      name: 'What sizes are available for microfiber towels?',
      acceptedAnswer: { '@type': 'Answer', text: 'We supply towels in sizes 24×24cm, 25×25cm, 30×30cm, 30×40cm, 40×60cm, 56×112cm, 60×120cm, 67×137cm, 70×70cm, 70×135cm, and 70×140cm. Custom sizes are available for OEM orders.' },
    },
    {
      '@type': 'Question',
      name: 'Does Visanix Impex accept custom or OEM towel orders?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We accept custom size, GSM specification, branding, and packaging orders for hotel chains, retail brands, and distributors. Contact us at sahil@visanixglobal.com or WhatsApp +91 9667445766.' },
    },
    {
      '@type': 'Question',
      name: 'Where does Visanix Impex source its towels?',
      acceptedAnswer: { '@type': 'Answer', text: 'Visanix Impex sources directly from verified textile manufacturers. We supply wholesale to retailers, distributors, hotel chains, and hospitality businesses across India.' },
    },
    {
      '@type': 'Question',
      name: 'How do I place a wholesale towel order with Visanix Impex?',
      acceptedAnswer: { '@type': 'Answer', text: 'Contact us via email at sahil@visanixglobal.com, WhatsApp +91 9667445766, or use our enquiry form at https://www.visanixglobal.com/impex/contact. We respond within 24 hours with pricing and availability.' },
    },
  ],
}

export default function ImpexHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <ImpexHome />
    </>
  )
}
