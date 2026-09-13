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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="relative mx-auto w-full max-w-7xl">

        {/* LOGO */}
        <div
          className={`
            absolute left-2 top-1/2 -translate-y-1/2
            z-10
            transition-opacity duration-200
            ${isOpen ? 'pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100' : ''}
          `}
        >
          <a href="#" onClick={handleLinkClick}>
            <img
              src="/icon.webp"
              alt="Mauro Cerrajería"
              className="
                h-20 w-20 object-contain
                sm:h-28 sm:w-28
                md:h-36 md:w-36
                lg:h-44 lg:w-44
                drop-shadow-xl
              "
            />
          </a>
        </div>

        {/* BARRA */}
        <div
          className="
            flex h-24 items-center justify-between
            pl-24 pr-4
            sm:h-28 sm:pl-36 sm:pr-8
            md:h-32 md:pl-48
            lg:pl-56
          "
        >
          {/* NAV DESKTOP */}
          <nav className="ml-auto hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  text-sm font-medium text-slate-600
                  transition-colors hover:text-slate-900
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* BOTÓN MOBILE */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              relative z-50 ml-auto inline-flex
              items-center justify-center
              rounded-md p-3
              text-slate-600
              hover:bg-slate-100
              md:hidden
            "
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* MENÚ MOBILE */}
        {isOpen && (
          <div
            className="
              relative z-40
              border-t border-slate-200
              bg-white
              px-4 pb-5 pt-3
              shadow-lg
              md:hidden
            "
          >
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="
                    rounded-lg px-4 py-3
                    text-base font-medium
                    text-slate-700
                    transition-colors
                    hover:bg-slate-100
                    hover:text-slate-900
                  "
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
