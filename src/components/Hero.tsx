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
          alt="Cerrajero en Capilla del Monte"
          className="hidden h-[70vh] min-h-[400px] w-full object-cover object-center lg:block"
          fetchPriority="high"
          loading="eager"
        />

        {/* Imagen MOBILE / TABLET */}
        <img
          src="/heromobile.png"
          alt="Cerrajero en Capilla del Monte"
          className="block h-[420px] w-full object-cover object-bottom sm:h-[480px] lg:hidden"
          fetchPriority="high"
          loading="eager"
        />
      </div>

      <div className="absolute inset-0 z-10 flex items-center">
        <div className="w-full px-6 sm:px-12 lg:pl-20 lg:pr-12">

          {/* DESKTOP */}
          <div className="hidden max-w-xl space-y-6 lg:block">
            <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight text-slate-900 xl:text-6xl">
              {title}
            </h1>

            <p className="text-lg font-normal leading-relaxed tracking-normal text-slate-600 xl:text-xl">
              {subtitle}
            </p>

            <div>
              <button
                onClick={onCtaClick}
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-slate-800 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              >
                {ctaText}

                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* TABLET */}
          <div className="hidden max-w-lg space-y-4 rounded-3xl border border-white/40 bg-white/75 p-8 shadow-xl shadow-slate-900/5 backdrop-blur-md sm:block lg:hidden">
            <h1 className="text-3xl font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl">
              {title}
            </h1>

            <p className="text-sm font-normal leading-relaxed text-slate-600 sm:text-base">
              {subtitle}
            </p>

            <button
              onClick={onCtaClick}
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-slate-800 active:scale-[0.98]"
            >
              {ctaText}

              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>

          {/* MOBILE */}
          <div className="block space-y-3.5 sm:hidden">
            <h1 className="text-2xl font-semibold leading-[1.15] tracking-tight text-slate-900">
              {title}
            </h1>

            <div className="space-y-3.5 rounded-2xl border border-white/40 bg-white/75 p-5 shadow-lg shadow-slate-900/5 backdrop-blur-md">
              <p className="text-xs font-normal leading-relaxed text-slate-600 sm:text-sm">
                {subtitle}
              </p>

              <button
                onClick={onCtaClick}
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-xs font-medium text-white shadow-sm transition-all duration-200 hover:bg-slate-800 active:scale-[0.98]"
              >
                {ctaText}

                <svg
                  className="ml-1.5 h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
