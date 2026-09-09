import React from 'react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  title = 'Cerrajero en Capilla del Monte',
  subtitle = 'Cerrajero en Capilla del Monte, Córdoba, con atención rápida y profesional. Apertura de puertas y vehículos, cambio, instalación y reparación de cerraduras y apertura de cajas fuertes.',
  ctaText = 'Contactanos Ahora',
  onCtaClick,
}) => {
  return (
    <section className="relative w-full overflow-hidden font-sans">
      <div className="relative w-full">
        {/* Imagen DESKTOP */}
        <img
          src="/hero.webp"
          alt="Hero"
          className="h-[70vh] min-h-[400px] w-full object-cover object-center hidden lg:block"
          fetchPriority="high"
          loading="eager"
        />

        {/* Imagen MOBILE / TABLET */}
        <img
          src="/heromobile.png"
          alt="Hero móvil"
          className="h-[420px] sm:h-[480px] w-full object-cover object-bottom block lg:hidden"
          fetchPriority="high"
          loading="eager"
        />
      </div>

      <div className="absolute inset-0 flex items-center z-10">
        <div className="w-full px-6 sm:px-12 lg:pr-12 lg:pl-20">
          
          {/* DESKTOP (lg:): Estilo tipográfico refinado estilo Apple/Google (tracking ajustado, pesos limpios) */}
          <div className="hidden lg:block max-w-xl space-y-6">
            <h1 className="text-5xl xl:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.08]">
              {title}
            </h1>
            <p className="text-lg xl:text-xl font-normal text-slate-600 leading-relaxed tracking-normal">
              {subtitle}
            </p>
            <div>
              <button
                onClick={onCtaClick}
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition-all duration-200"
              >
                {ctaText}
                <svg
                  className="ml-2 -mr-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* TABLET (hidden sm:block lg:hidden): Contenedor con efecto glassmorphism avanzado y tipografía moderna */}
          <div className="hidden sm:block lg:hidden max-w-lg space-y-4 bg-white/75 backdrop-blur-md border border-white/40 p-8 rounded-3xl shadow-xl shadow-slate-900/5">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.12]">
              {title}
            </h1>
            <p className="text-sm sm:text-base font-normal text-slate-600 leading-relaxed">
              {subtitle}
            </p>
            <div>
              <button
                onClick={onCtaClick}
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-800 active:scale-[0.98] transition-all duration-200"
              >
                {ctaText}
                <svg
                  className="ml-2 -mr-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* MOBILE (block sm:hidden): Título limpio suelto y contenedor glassmorphism sutil para el subtítulo */}
          <div className="block sm:hidden space-y-3.5">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
              {title}
            </h1>
            <div className="bg-white/75 backdrop-blur-md border border-white/40 p-5 rounded-2xl shadow-lg shadow-slate-900/5 space-y-3.5">
              <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed">
                {subtitle}
              </p>
              <div>
                <button
                  onClick={onCtaClick}
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-xs font-medium text-white shadow-sm hover:bg-slate-800 active:scale-[0.98] transition-all duration-200"
                >
                  {ctaText}
                  <svg
                    className="ml-1.5 -mr-1 h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;