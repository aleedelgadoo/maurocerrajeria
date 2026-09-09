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
    <section id="ubicacion" className="relative w-full overflow-hidden bg-white lg:bg-transparent">
      {/* Contenedor del Mapa: Reducimos la altura en mobile (h-[280px] sm:h-[320px]) para eliminar los espacios de sobra */}
      <div className="relative w-full h-[280px] sm:h-[320px] lg:absolute lg:inset-0 lg:h-[500px] flex items-center justify-center bg-[#FAF8F5]">
        {/* Imagen DESKTOP */}
        <img
          src={mapImageUrl}
          alt="Mapa de ubicación"
          className="absolute inset-0 w-full h-full object-cover object-[center_42%] hidden lg:block"
          loading="lazy"
        />
        
        {/* Imagen MOBILE */}
        <img
          src={mapImageMobileUrl}
          alt="Mapa de ubicación (versión móvil)"
          className="w-full h-full object-contain p-1 sm:p-0 block lg:hidden"
          loading="lazy"
        />
      </div>

      {/* Contenedor del Texto: Reducimos el padding vertical a py-4 sm:py-6 en mobile para acercarlo al mapa */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-0 lg:h-[500px] flex items-center justify-center lg:justify-end">
        <div className="w-full sm:max-w-md bg-white/95 lg:bg-transparent p-5 sm:p-6 lg:p-0 rounded-2xl lg:rounded-none shadow-sm lg:shadow-none text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;