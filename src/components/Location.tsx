import React from 'react';

interface LocationProps {
  title?: string;
  description?: string;
  mapImageUrl?: string;
  mapImageMobileUrl?: string;
}

const Location: React.FC<LocationProps> = ({
  title = 'Cobertura en Capilla del Monte y alrededores',
  description = 'Servicio integral de cerrajería a domicilio en Capilla del Monte, extendiendo nuestra cobertura a San Esteban, La Cumbre, Charbonier y otras localidades de la región',
  mapImageUrl = '/mapa.webp',
  mapImageMobileUrl = '/mapamobile.png',
}) => {
  return (
    <section
      id="ubicacion"
      className="relative w-full overflow-hidden bg-white lg:bg-transparent"
    >
      <div className="relative flex h-[280px] w-full items-center justify-center bg-[#FAF8F5] sm:h-[320px] lg:absolute lg:inset-0 lg:h-[500px]">
        
        {/* Imagen DESKTOP */}
        <img
          src="/mapa.webp"
          alt="Mapa de ubicación"
          className="absolute inset-0 hidden h-full w-full object-cover object-[center_42%] lg:block"
          loading="lazy"
        />

        {/* Imagen MOBILE */}
        <img
          src="/mapamobile.png"
          alt="Mapa de ubicación (versión móvil)"
          className="block h-full w-full object-contain p-1 sm:p-0 lg:hidden"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 mx-auto flex h-auto w-full max-w-7xl items-center justify-center px-4 py-4 sm:px-6 sm:py-6 lg:h-[500px] lg:justify-end lg:px-8 lg:py-0">
        <div className="w-full rounded-2xl bg-white/95 p-5 text-center shadow-sm sm:max-w-md sm:p-6 lg:rounded-none lg:bg-transparent lg:p-0 lg:text-left lg:shadow-none">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>

          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
