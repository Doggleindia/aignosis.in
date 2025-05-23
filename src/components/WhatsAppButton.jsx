import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+918209860578"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[15%] right-5 z-50 rounded-full bg-green-500 p-3 shadow-lg transition-transform hover:scale-110 md:bottom-[12%]"
    >
      <FaWhatsapp className="h-8 w-8 text-white" />
    </a>
  );
};

export default WhatsAppButton;
