'use client';

import { usePathname } from 'next/navigation';
import ImpexNavbar from '@/components/impex/ImpexNavbar';
import ImpexFooter from '@/components/impex/ImpexFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactPopup from '@/components/ContactPopup';

export default function ImpexLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isCalculator = pathname?.includes('/calculator');

  return (
    <>
      <ImpexNavbar />
      <main className="page-content-wrapper">
        {children}
      </main>
      <ImpexFooter />
      <WhatsAppButton />
      {!isCalculator && <ContactPopup />}
    </>
  );
}
