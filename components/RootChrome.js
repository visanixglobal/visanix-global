'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactPopup from '@/components/ContactPopup';

export default function RootChrome({ children }) {
  const pathname = usePathname();
  // Polymers routes have their own layout (navbar/footer/wrapper)
  const isPolymers = pathname?.startsWith('/polymers');
  const isImpex = pathname?.startsWith('/impex');

  if (isPolymers || isImpex) {
    // Let the polymers layout handle everything — no extra chrome
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <div className="page-content-wrapper">
        {children}
      </div>
      <WhatsAppButton />
      <ContactPopup />
      <Footer />
    </>
  );
}
