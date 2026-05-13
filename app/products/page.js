import ProductsClient from './products-client'

export const metadata = {
  alternates: {
    canonical: '/products',
  },
}

export default function Page() {
  return <ProductsClient />
}
