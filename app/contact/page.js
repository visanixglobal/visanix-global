import ContactClient from './contact-client'

export const metadata = {
  title: 'Contact Us | Request Quote - Visanix Global',
  description: 'Connect with our material experts for technical consultation, custom PTFE engineering requests, and global export support.',
  alternates: {
    canonical: '/contact',
  },
}

export default function Page() {
  return <ContactClient />
}
