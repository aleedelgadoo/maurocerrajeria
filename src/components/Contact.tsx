import React from 'react';
import { MessageCircle, Instagram, Mail } from 'lucide-react';

const Contacto: React.FC = () => {
  const whatsappNumber = '5491139202220';
  const whatsappMessage = encodeURIComponent('Hola, me gustaría obtener más información.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contacto" className="pt-12 pb-14 bg-blue-600 w-full text-white">
      <div className="flex flex-col lg:flex-row w-full items-stretch">
        
        {/* Lado izquierdo: Texto descriptivo */}
        <div className="w-full lg:w-2/5 flex items-center justify-center p-8 lg:p-12">
          <div className="max-w-md">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Contactanos de forma directa
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              Estamos disponibles para responder tus consultas y brindar asistencia inmediata. Elegí el canal de comunicación que prefieras.
            </p>
          </div>
        </div>

        {/* Lado derecho: Tarjetas blancas con iconos en sus colores habituales */}
        <div className="w-full lg:w-3/5 flex items-center">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 shadow-sm border border-slate-100 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">WhatsApp</h3>
                <p className="text-slate-500 text-sm mb-4">Atención inmediata 24/7</p>
                <span className="mt-auto text-sm font-medium text-emerald-600 group-hover:underline">
                  Escribinos &rarr;
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/cerrajeromauro?stkn=MWVveW91aXE3ZGFp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-900 shadow-sm border border-slate-100 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Instagram className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Instagram</h3>
                <p className="text-slate-500 text-sm mb-4">Seguinos en redes</p>
                <span className="mt-auto text-sm font-medium text-pink-600 group-hover:underline">
                  Visitar perfil &rarr;
                </span>
              </a>

              {/* Mail */}
              <a
                href="mailto:maupopov@gmail.com"
                className="bg-white text-slate-900 shadow-sm border border-slate-100 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">Correo</h3>
                <p className="text-slate-500 text-xs sm:text-sm mb-4 break-all">maupopov@gmail.com</p>
                <span className="mt-auto text-sm font-medium text-indigo-600 group-hover:underline">
                  Enviar mail &rarr;
                </span>
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contacto;