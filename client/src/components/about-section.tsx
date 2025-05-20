import { ArrowRight, User } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Nuestra Misión</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-foreground max-w-3xl mx-auto text-lg">
            Impulsar la transformación de empresas argentinas, brindando soluciones que integren diseño, tecnología y eficiencia con una mirada moderna y nacional.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center mb-20">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 order-2 md:order-1 animate-on-scroll">
            <h3 className="font-montserrat font-semibold text-2xl md:text-3xl text-primary mb-4">Nuestra Visión</h3>
            <p className="text-foreground mb-6">
              Ser la marca referente en modernización empresarial en Argentina, combinando identidad local, innovación y estilo minimalista.
            </p>
            <p className="text-foreground mb-8">
              Nos enorgullecemos de nuestro talento argentino y nuestra capacidad para entender las necesidades únicas del mercado local mientras aplicamos estándares internacionales de excelencia.
            </p>
            <a href="#servicios" aria-label="Descubre nuestras soluciones" className="inline-flex items-center text-primary border-b-2 border-primary font-medium hover:text-accent hover:border-accent transition duration-300">
              Descubre nuestras soluciones <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 animate-on-scroll">
            {/* Modern Argentine business setting with national identity elements */}
            <img 
              src="https://images.unsplash.com/photo-1573164574001-518958d9baa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
              alt="Equipo de trabajo en un entorno empresarial argentino moderno" 
              className="rounded-lg shadow-lg object-cover w-full h-auto"
              width="1200"
              height="800"
              loading="lazy"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 card-container">
          <div className="bg-card p-8 rounded-lg shadow-sm animate-on-scroll card-hover">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-primary w-7 h-7" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
            </div>
            <h4 className="font-montserrat font-semibold text-xl text-primary mb-3">Innovación constante</h4>
            <p className="text-foreground">
              Nos mantenemos a la vanguardia de las últimas tecnologías y metodologías para ofrecer soluciones que realmente marcan la diferencia.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-sm animate-on-scroll card-hover">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-primary w-7 h-7" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h4 className="font-montserrat font-semibold text-xl text-primary mb-3">Identidad argentina</h4>
            <p className="text-foreground">
              Nuestra perspectiva local nos permite entender profundamente las necesidades y desafíos específicos del mercado argentino.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-sm animate-on-scroll card-hover">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-primary w-7 h-7" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="m13 13 6 6"/></svg>
            </div>
            <h4 className="font-montserrat font-semibold text-xl text-primary mb-3">Resultados medibles</h4>
            <p className="text-foreground">
              Nos enfocamos en brindar soluciones que generen un impacto real y cuantificable en la competitividad de su empresa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
