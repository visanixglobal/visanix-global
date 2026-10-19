'use client';

import { usePathname } from 'next/navigation';
import PolymersNavbar from '@/components/polymers/v2/PolymersNavbar';
import PolymersFooter from '@/components/polymers/v2/PolymersFooter';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactPopup from '@/components/ContactPopup';

export default function PolymersLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isCalculator = pathname?.includes('/calculator');

  return (
    <>
      <PolymersNavbar />
      <main className="page-content-wrapper">
        {children}
      </main>
      <PolymersFooter />
      <WhatsAppButton />
      {!isCalculator && <ContactPopup />}
    </>
  );
}
