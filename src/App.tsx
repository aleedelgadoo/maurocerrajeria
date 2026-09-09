import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CoverageSection from './components/Location';
import TrustBanner from './components/TrustBanner';
import Contacto from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <CoverageSection />
      <TrustBanner />
      <Contacto />
      <WhatsAppButton />
    </div>
  );
};

export default App;