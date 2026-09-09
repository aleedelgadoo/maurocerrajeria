import React, { useState } from 'react';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 overflow-visible">
      {/* Contenedor sin padding lateral y con posición relativa estricta */}
      <div className="relative w-full px-0">
        
        {/* LOGO POSICIONADO CON CSS PURO FUERA DE LAS RESTRICCIONES DE CONTENEDOR */}
        <div className="absolute left-[-8px] sm:left-0 top-1/2 -translate-y-1/2 z-30 overflow-visible pointer-events-none">
          <a href="#" className="flex items-center pointer-events-auto">
            <img 
              src="/icon.webp" 
              alt="Logo" 
              style={{ width: '180px', height: '180px', maxWidth: 'none' }}
              className="sm:w-[210px] sm:h-[210px] lg:w-[240px] lg:h-[240px] object-contain drop-shadow-2xl" 
            />
          </a>
        </div>

        {/* Barra de navegación con espacio izquierdo masivo reservado para que el logo gigante no tape los links */}
        <div className="flex h-32 items-center justify-between pl-44 sm:pl-56 lg:pl-64 pr-4 sm:pr-8 max-w-7xl mx-auto">
          <div className="hidden md:flex items-center gap-8 ml-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-auto inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100"
            aria-label="Abrir menú"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-slate-100 px-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;