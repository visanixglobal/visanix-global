import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Visanix Global | Premium Industrial Goods & Polymer Solutions',
  description: 'Global provider of high-performance industrial solutions, specialized PTFE engineering materials, and strategic supply chain services.',
  keywords: 'PTFE, Industrial Goods, Polymer Solutions, Engineering Materials, Manufacturing, Global Export',
  icons: {
    icon: [
      { url: '/Logo%20only.png?v=4' },
      { url: '/Logo%20only.png?v=4', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/Logo%20only.png?v=4' },
    ],
    shortcut: ['/Logo%20only.png?v=4'],
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
