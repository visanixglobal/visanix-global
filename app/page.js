import HomeClient from './page-client'

export const metadata = {
  title: 'PTFE Supplier India | Industrial Polymer Solutions | Visanix Global',
  description: 'Visanix Global — trusted PTFE and engineering plastics supplier in Delhi NCR, India. PTFE rods, sheets, tubes, and precision engineering plastic materials. Global export.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PTFE Supplier India | Industrial Polymer Solutions | Visanix Global',
    description: 'Trusted PTFE and engineering plastics supplier in Delhi NCR, India. PTFE rods, sheets, tubes, and precision engineering plastic materials.',
    url: 'https://www.visanixglobal.com/',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Visanix Global – PTFE Supplier India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PTFE Supplier India | Visanix Global',
    description: 'Trusted PTFE supplier and exporter in Delhi NCR, India.',
    images: ['/og-image.png'],
  },
}

export default function Page() {
  return <HomeClient />
}
