import './polymers.css'
import PolymersLayoutWrapper from '@/components/PolymersLayoutWrapper'

export const metadata = {
  metadataBase: new URL('https://www.visanixglobal.com'),
  title: {
    default: 'Visanix Polymers | PTFE Supplier & Engineering Plastics — A Division of Visanix Global',
    template: '%s | Visanix Polymers',
  },
  description: 'Visanix Polymers, a division of Visanix Global — PTFE and engineering plastics supplier in Delhi NCR, India.',
}

export default function PolymersLayout({ children }) {
  return <PolymersLayoutWrapper>{children}</PolymersLayoutWrapper>
}
