'use client';

import { usePathname } from 'next/navigation';

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isCalculator = pathname?.includes('/calculator');

  // Extract WhatsAppButton and ContactPopup from children
  const childArray = Array.isArray(children) ? children : [children];
  
  return (
    <>
      {childArray[0]}
      {!isCalculator && childArray[1]}
    </>
  );
}
