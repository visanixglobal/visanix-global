import ContactClient from './contact-client'

export const metadata = {
  alternates: {
    canonical: '/contact',
  },
}

export default function Page() {
  return <ContactClient />
}
