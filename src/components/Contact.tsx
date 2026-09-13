import React from 'react';
import { MessageCircle, Instagram, Mail } from 'lucide-react';

const Contacto: React.FC = () => {
  const whatsappNumber = '5491139202220';
  const displayPhone = '+54 9 11 3920-2220';

  const whatsappMessage = encodeURIComponent(
    'Hola, necesito información sobre un servicio de cerrajería.'
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="w-full bg-blue-600 pt-12 pb-14 text-white"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-stretch lg:flex-row">

        {/* Información de contacto */}
        <div className="flex w-full items-center justify-center p-8 lg:w-2/5 lg:p-12">
          <div className="max-w-md">
            <h2
              id="contacto-title"
              className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Contactá a tu cerrajero en Capilla del Monte
            </h2>

            <p className="text-lg leading-relaxed text-blue-100">
              ¿Necesitás abrir una puerta, solucionar un problema con una
              cerradura o consultar por la apertura de un vehículo?
              Comunicate con Mauro Cerrajería para consultar disponibilidad
              y coordinar el servicio.
            </p>

            {/* Teléfono visible */}
            <div className="mt-6">
              <p className="text-sm font-medium uppercase tracking-wide text-blue-200">
                WhatsApp
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-xl font-semibold text-white underline-offset-4 hover:underline"
                aria-label={`Contactar por WhatsApp al ${displayPhone}`}
              >
                {displayPhone}
              </a>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-blue-100">
              Consultas sobre apertura de puertas y vehículos, cambio,
              reparación e instalación de cerraduras y apertura de cajas
              fuertes.
            </p>
          </div>
        </div>

        {/* Canales de contacto */}
        <div className="flex w-full items-center lg:w-3/5">
          <div className="w-full px-4 py-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chatear por WhatsApp con Mauro Cerrajería al ${displayPhone}`}
                className="group flex flex-col items-center rounded-xl border border-slate-100 bg-white p-6 text-center text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-transform group-hover:scale-110">
                  <MessageCircle
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mb-1 text-lg font-semibold text-slate-900">
                  WhatsApp
                </h3>

                <p className="mb-2 text-sm text-slate-500">
                  Atención directa
                </p>

                <span className="text-sm font-medium text-emerald-600">
                  {displayPhone}
                </span>

                <span className="mt-3 text-sm font-medium text-emerald-600 group-hover:underline">
                  Chatear ahora →
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/cerrajeromauro?stkn=MWVveW91aXE3ZGFp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar Instagram de Mauro Cerrajería"
                className="group flex flex-col items-center rounded-xl border border-slate-100 bg-white p-6 text-center text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-50 text-pink-600 transition-transform group-hover:scale-110">
                  <Instagram
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mb-1 text-lg font-semibold text-slate-900">
                  Instagram
                </h3>

                <p className="mb-4 text-sm text-slate-500">
                  Conocé nuestros trabajos
                </p>

                <span className="mt-auto text-sm font-medium text-pink-600 group-hover:underline">
                  Visitar perfil →
                </span>
              </a>

              {/* Correo */}
              <a
                href="mailto:maupopov@gmail.com"
                aria-label="Enviar correo electrónico a Mauro Cerrajería"
                className="group flex flex-col items-center rounded-xl border border-slate-100 bg-white p-6 text-center text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition-transform group-hover:scale-110">
                  <Mail
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mb-1 text-lg font-semibold text-slate-900">
                  Correo electrónico
                </h3>

                <p className="mb-4 break-all text-xs text-slate-500 sm:text-sm">
                  maupopov@gmail.com
                </p>

                <span className="mt-auto text-sm font-medium text-indigo-600 group-hover:underline">
                  Enviar correo →
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