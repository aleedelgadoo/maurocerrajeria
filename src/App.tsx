import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Location from './components/Location';
import TrustBanner from './components/TrustBanner';
import Contacto from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900">
      <Navbar />

      <main>
        <Hero />

        <Services />

        <section
          id="cerrajero-domicilio"
          aria-labelledby="cerrajero-domicilio-title"
          className="bg-slate-50 px-6 py-16 sm:px-8 lg:px-12 lg:py-20"
        >
          <div className="mx-auto max-w-5xl">
            <h2
              id="cerrajero-domicilio-title"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Cerrajero a domicilio en Capilla del Monte
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              <p>
                Mauro Cerrajería ofrece servicio de cerrajería a domicilio
                en Capilla del Monte para viviendas, comercios y vehículos.
                Atendemos aperturas, cambios y reparaciones de cerraduras
                y diferentes situaciones de urgencia.
              </p>

              <p>
                Si perdiste las llaves, dejaste las llaves dentro del vehículo,
                una cerradura se trabó o necesitás reemplazar una cerradura,
                podés comunicarte para consultar disponibilidad y coordinar
                la atención.
              </p>

              <p>
                También realizamos instalación de cerraduras y trabajos
                relacionados con sistemas de seguridad y apertura de cajas
                fuertes.
              </p>
            </div>
          </div>
        </section>

        <Location />

        <TrustBanner />

        <Contacto />
      </main>

      <WhatsAppButton />
    </div>
  );
};

export default App;
