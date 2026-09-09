import React from 'react';

interface AboutProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

const About: React.FC<AboutProps> = ({
  title = 'Sobre Nosotros',
  description = 'Somos un equipo de profesionales apasionados por lo que hacemos. Con más de 10 años de experiencia, nos dedicamos a brindar soluciones de calidad, innovadoras y adaptadas a las necesidades de cada cliente. Nuestra misión es superar expectativas a través del compromiso, la transparencia y la excelencia en cada proyecto que emprendemos.',
  imageUrl = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=80',
}) => {
  return (
    <section id="nosotros" className="relative w-full">
      <div className="relative w-full">
        <img
          src={imageUrl}
          alt="Nuestro equipo trabajando"
          className="h-[50vh] min-h-[320px] w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16 w-full pb-20">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {title}
            </h2>
            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
