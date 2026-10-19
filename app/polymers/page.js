import HomeClient from './lib/page-client'

export const metadata = {
  title: 'Visanix Polymers | PTFE Supplier Delhi NCR — Engineering Plastics India',
  description: 'Visanix Polymers — trusted PTFE and engineering plastics supplier in Delhi NCR, India. PTFE rods, sheets, tubes, cast nylon, PEEK, POM, PVC, PP, and stainless steel for industrial manufacturers, chemical plants, and pharmaceutical companies across India.',
  keywords: 'PTFE supplier Delhi, PTFE rod India, PTFE sheet supplier, engineering plastics Delhi NCR, cast nylon supplier India, PEEK sheet India, Teflon supplier Delhi, PTFE gasket manufacturer India',
  alternates: { canonical: 'https://www.visanixglobal.com/polymers' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is Visanix Polymers located?',
      acceptedAnswer: { '@type': 'Answer', text: 'Visanix Polymers is based in Paschim Vihar, New Delhi 110063, India. We supply PTFE and engineering plastics across Delhi NCR and pan-India.' },
    },
    {
      '@type': 'Question',
      name: 'What PTFE products does Visanix Polymers supply?',
      acceptedAnswer: { '@type': 'Answer', text: 'We supply PTFE rods (6mm–200mm diameter), PTFE skived sheets (0.5mm–6mm), PTFE moulded sheets (5mm–100mm), PTFE tubes, PTFE gaskets, PTFE bushes, PTFE balls, PTFE rings, PTFE glands, and PTFE tape. All available in virgin and filled grades.' },
    },
    {
      '@type': 'Question',
      name: 'Which PTFE grades does Visanix Polymers supply?',
      acceptedAnswer: { '@type': 'Answer', text: 'We supply virgin PTFE, 15% glass filled PTFE, 25% glass filled PTFE, 25% carbon filled PTFE, carbon + graphite filled PTFE, and 25% graphite filled PTFE for various industrial applications.' },
    },
    {
      '@type': 'Question',
      name: 'What engineering plastics does Visanix Polymers supply?',
      acceptedAnswer: { '@type': 'Answer', text: 'We supply cast nylon (PA6) sheets and rods, PEEK sheets, Delrin/POM sheets and rods, PVC sheets, polypropylene (PP) sheets and rods, polyurethane (PU) sheets and rods, acrylic rods, silicone sheets and tubes, and custom machined engineering plastic components.' },
    },
    {
      '@type': 'Question',
      name: 'Does Visanix Polymers supply stainless steel?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We supply stainless steel round bars, square bars, hex bars, flat bars, sheets, plates, coils, seamless pipes, ERW pipes, flanges, and fittings in grades SS 304, SS 316, SS 316L, SS 310S, Duplex 2205, Super Duplex 2507, and more.' },
    },
    {
      '@type': 'Question',
      name: 'How can I get a quote from Visanix Polymers?',
      acceptedAnswer: { '@type': 'Answer', text: 'Contact us via email at sahil@visanixglobal.com, call or WhatsApp +91 9667445766, or use the contact form at https://www.visanixglobal.com/polymers/contact. We respond within 24 hours.' },
    },
  ],
}

export default function PolymersHome() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <HomeClient />
    </>
  )
}
