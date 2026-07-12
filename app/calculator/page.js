import CalculatorClient from './calculator-client'

export const metadata = {
  title: 'PTFE Weight ⇄ Length Calculator | Visanix Global',
  description: 'Internal PTFE weight to length converter for rod, sheet and tube. ViFlon by Visanix Global.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function CalculatorPage() {
  return <CalculatorClient />
}
