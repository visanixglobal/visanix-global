import ProductsClient from './products-client'

export const metadata = {
  title: 'Industrial Products Portfolio | PTFE & Polymer Engineering',
  description: 'Explore our comprehensive range of high-performance PTFE rods, sheets, bushes, and custom engineering materials for industrial applications.',
  alternates: {
    canonical: '/products',
  },
}

export default function Page() {
  return <ProductsClient />
}
