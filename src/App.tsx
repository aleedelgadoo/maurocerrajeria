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

        <section
          id="preguntas-frecuentes"
          aria-labelledby="faq-title"
          className="bg-white px-6 py-16 sm:px-8 lg:px-12 lg:py-20"
        >
          <div className="mx-auto max-w-4xl">
            <h2
              id="faq-title"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Preguntas frecuentes sobre cerrajería
            </h2>

            <div className="mt-8 space-y-6">
              <article>
                <h3 className="text-lg font-semibold text-slate-900">
                  ¿Qué servicios de cerrajería realizan?
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  Realizamos apertura de puertas y vehículos, cambio,
                  instalación y reparación de cerraduras y apertura de cajas
                  fuertes.
                </p>
              </article>

              <article>
                <h3 className="text-lg font-semibold text-slate-900">
                  ¿Atienden en Capilla del Monte?
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  Sí. El servicio está orientado principalmente a Capilla del
                  Monte y también se atienden localidades cercanas según
                  disponibilidad y distancia.
                </p>
              </article>

              <article>
                <h3 className="text-lg font-semibold text-slate-900">
                  ¿Realizan aperturas de vehículos?
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  Sí. Se realizan servicios de apertura de vehículos cuando
                  las llaves quedan dentro, se pierden o existe un problema
                  con la cerradura.
                </p>
              </article>

              <article>
                <h3 className="text-lg font-semibold text-slate-900">
                  ¿Pueden cambiar una cerradura?
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  Sí. Se realizan cambios y reemplazos de cerraduras y
                  cilindros, además de instalación de nuevas cerraduras.
                </p>
              </article>
            </div>
          </div>
        </section>

        <Contacto />
      </main>

      <WhatsAppButton />
    </div>
  );
};

export default App;
