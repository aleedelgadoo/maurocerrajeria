import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  href?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '5491139202220',
  message = 'Hola, me gustaría obtener más información.',
  href,
}) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = href || `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg hover:bg-emerald-600 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 transition-all duration-300"
      aria-label="Chatea por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;