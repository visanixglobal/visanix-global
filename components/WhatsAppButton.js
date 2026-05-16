'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '919667445766';
  const message =
    'Hello! I would like to know more about your industrial solutions.';

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="whatsapp-button"
    >
      <FaWhatsapp size={30} color="white" />
    </a>
  );
};

export default WhatsAppButton;
