import IndustriesClient from './industries-client'

export const metadata = {
  title: 'Industries We Serve | Specialized Material Solutions',
  description: 'Visanix Global provides specialized engineering solutions for Chemical, Pharma, Aerospace, and Renewable Energy sectors worldwide.',
  alternates: {
    canonical: '/industries',
  },
}

export default function Page() {
  return <IndustriesClient />
}
