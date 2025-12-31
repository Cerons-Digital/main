import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const MobileStickyCTA: React.FC = () => {
  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-30 md:hidden bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform animate-bounce-subtle"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
};

export default MobileStickyCTA;