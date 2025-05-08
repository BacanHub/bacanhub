import { Button } from "@/components/ui/button";
import { Star, ShieldX, Clock, Lightbulb, Heart } from "lucide-react";

interface ValueItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ValuesSection() {
  const values: ValueItem[] = [
    {
      title: "Talento de punta",
      description: "Contamos con los mejores profesionales y nos mantenemos en constante aprendizaje para ofrecer soluciones de vanguardia.",
      icon: <Star className="h-6 w-6 text-secondary" />
    },
    {
      title: "Honestidad",
      description: "Actuamos con transparencia y ética en todas nuestras relaciones, construyendo confianza a largo plazo con nuestros clientes.",
      icon: <ShieldX className="h-6 w-6 text-secondary" />
    },
    {
      title: "Trabajo duro",
      description: "Nos dedicamos con pasión a cada proyecto, superando obstáculos y entregando resultados que superan las expectativas.",
      icon: <Clock className="h-6 w-6 text-secondary" />
    },
    {
      title: "Claridad",
      description: "Comunicamos de manera efectiva y directa, asegurándonos de que todos los procesos sean comprensibles y transparentes.",
      icon: <Lightbulb className="h-6 w-6 text-secondary" />
    },
    {
      title: "Compromiso",
      description: "Nos involucramos profundamente con cada cliente, asumiendo sus desafíos como propios y acompañándolos en todo el proceso de transformación.",
      icon: <Heart className="h-6 w-6 text-secondary" />
    }
  ];

  return (
    <section id="valores" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Nuestros Valores</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-neutral-medium max-w-3xl mx-auto text-lg">
            Los principios que guían nuestro trabajo y nuestro compromiso con las empresas argentinas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-neutral-lightest p-8 rounded-lg shadow-sm animate-on-scroll card-hover text-center"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                {value.icon}
              </div>
              <h4 className="font-montserrat font-semibold text-xl text-primary mb-3">{value.title}</h4>
              <p className="text-neutral-medium">
                {value.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row items-center bg-primary rounded-lg overflow-hidden shadow-lg animate-on-scroll">
          <div className="md:w-1/2 p-8 md:p-12">
            <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-white mb-4">
              ¿Listo para transformar tu empresa?
            </h3>
            <p className="text-neutral-lightest mb-8">
              Contacta con nosotros hoy y descubre cómo podemos ayudarte a modernizar tu empresa, optimizar tus procesos y aumentar tu competitividad en el mercado.
            </p>
            <Button 
              variant="default" 
              className="bg-secondary hover:bg-secondary/90 text-neutral-dark font-medium"
              size="lg"
              asChild
            >
              <a href="#contacto">Comencemos ahora</a>
            </Button>
          </div>
          <div className="md:w-1/2">
            {/* Modern Argentine business professionals in a collaborative session */}
            <img 
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=750" 
              alt="Profesionales argentinos colaborando en una sesión estratégica" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
