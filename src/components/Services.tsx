import React, { useRef } from 'react';
import { ServiceItem } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Apertura de puertas',
    description: 'Aperturas rápidas y sin daños en todo tipo de puertas residenciales y comerciales.',
    icon: 'DoorOpen',
    imageUrl: '/aperturapuerta.webp',
  },
  {
    id: '2',
    title: 'Apertura de vehículos',
    description: 'Servicio de urgencia para cuando quedás afuera de tu auto o vehículo.',
    icon: 'Car',
    imageUrl: '/vehiculo.webp',
  },
  {
    id: '3',
    title: 'Cambio de cerraduras',
    description: 'Sustitución inmediata y mejora de cilindros y cerrojos de seguridad.',
    icon: 'KeyRound',
    imageUrl: '/cerradura.webp',
  },
  {
    id: '4',
    title: 'Instalación de cerraduras',
    description: 'Instalación profesional de cerraduras convencionales y digitales.',
    icon: 'Lock',
    imageUrl: '/cerradurainstalacion.webp',
  },
  {
    id: '5',
    title: 'Reparación de cerraduras',
    description: 'Mantenimiento y arreglo de mecanismos trabados o desgastados.',
    icon: 'Wrench',
    imageUrl: '/reparacioncerradura.webp',
  },
  {
    id: '6',
    title: 'Apertura de cajas fuertes',
    description: 'Apertura técnica y confidencial de sistemas de alta seguridad.',
    icon: 'ShieldAlert',
    imageUrl: '/cajafuerte.webp',
  },
];

const Services: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('div')?.clientWidth || 288;
      const scrollAmount = cardWidth + 16; 
      
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="servicios" className="pt-6 pb-4 bg-white w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full items-stretch">
        
        {/* Lado izquierdo: Texto descriptivo */}
        <div className="w-full lg:w-2/5 bg-white flex items-center justify-center p-6 sm:p-8 lg:p-12">
          <div className="max-w-md text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4 sm:mb-6">
              <h2>
  Servicios de cerrajería en Capilla del Monte
</h2>

            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
  Ofrecemos servicios de cerrajería para viviendas y vehículos
  en Capilla del Monte y localidades cercanas. Realizamos aperturas,
  cambios, reparaciones e instalación de cerraduras.            </p>
          </div>
        </div>

        {/* Lado derecho: Carrusel de servicios */}
        <div className="w-full lg:w-3/5 relative flex items-center">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="shrink-0 w-72 sm:w-80 snap-start"
                >
                  <div className="rounded-none bg-white shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:border-indigo-100 transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-[9/16] w-full overflow-hidden bg-slate-200">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botón Izquierdo: Visible también en mobile (cambiado hidden md:flex por flex) */}
          <button
            onClick={() => scroll('left')}
            className="flex absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/90 sm:bg-white/95 shadow-lg border border-slate-200 text-slate-800 hover:bg-white hover:text-indigo-600 transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Botón Derecho: Visible también en mobile */}
          <button
            onClick={() => scroll('right')}
            className="flex absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/90 sm:bg-white/95 shadow-lg border border-slate-200 text-slate-800 hover:bg-white hover:text-indigo-600 transition-all"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;