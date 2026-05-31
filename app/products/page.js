import ProductsClient from './products-client'

export const metadata = {
  title: 'PTFE Products & Engineering Materials | Visanix Global',
  description: 'Buy PTFE rods, sheets, tubes, gaskets, bushes and rubber seals from Visanix Global — trusted PTFE supplier in Gurugram, India. Custom sizes available.',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'PTFE Products & Engineering Materials | Visanix Global',
    description: 'Buy PTFE rods, sheets, tubes, gaskets, bushes and rubber seals from Visanix Global — trusted PTFE supplier in Gurugram, India.',
    url: 'https://www.visanixglobal.com/products',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PTFE Products & Engineering Materials | Visanix Global',
    description: 'Buy PTFE rods, sheets, tubes, gaskets, bushes and rubber seals from Visanix Global — trusted PTFE supplier in Gurugram, India.',
    images: ['https://www.visanixglobal.com/og-image.png'],
  },
}

export default function Page() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "PTFE Products by Visanix Global",
    "url": "https://www.visanixglobal.com/products",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "PTFE Rod", "url": "https://www.visanixglobal.com/products/ptfe-rod" },
      { "@type": "ListItem", "position": 2, "name": "PTFE Skived Sheet", "url": "https://www.visanixglobal.com/products/ptfe-sheet-skived" },
      { "@type": "ListItem", "position": 3, "name": "PTFE Moulded Sheet", "url": "https://www.visanixglobal.com/products/ptfe-sheet-moulded" },
      { "@type": "ListItem", "position": 4, "name": "PTFE Tubes", "url": "https://www.visanixglobal.com/products/ptfe-tube" },
      { "@type": "ListItem", "position": 5, "name": "PTFE Bush", "url": "https://www.visanixglobal.com/products/ptfe-bush" },
      { "@type": "ListItem", "position": 6, "name": "PTFE Ball", "url": "https://www.visanixglobal.com/products/ptfe-ball" },
      { "@type": "ListItem", "position": 7, "name": "PTFE Gland Packing", "url": "https://www.visanixglobal.com/products/ptfe-gland" },
      { "@type": "ListItem", "position": 8, "name": "PTFE Gasket", "url": "https://www.visanixglobal.com/products/ptfe-gasket" },
      { "@type": "ListItem", "position": 9, "name": "PTFE Ring", "url": "https://www.visanixglobal.com/products/ptfe-ring" },
      { "@type": "ListItem", "position": 10, "name": "PTFE Tape", "url": "https://www.visanixglobal.com/products/ptfe-tape" },
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <ProductsClient />
    </>
  )
}
