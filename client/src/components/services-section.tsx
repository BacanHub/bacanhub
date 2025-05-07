import { ArrowRight } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export default function ServicesSection() {
  const services: ServiceItem[] = [
    {
      title: "Transformación Digital",
      description: "Diseñamos e implementamos estrategias personalizadas para digitalizar procesos, aumentar la eficiencia y preparar su empresa para el futuro.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "Transformación digital empresarial"
    },
    {
      title: "Rediseño de Espacios",
      description: "Creamos entornos de trabajo modernos, funcionales y alineados con su identidad corporativa para potenciar la productividad y el bienestar.",
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "Espacios de trabajo modernos y funcionales"
    },
    {
      title: "Consultoría Estratégica",
      description: "Asesoramos en la implementación de tecnologías de punta y metodologías innovadoras adaptadas a la realidad del mercado argentino.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "Consultoría estratégica para empresas argentinas"
    },
    {
      title: "Automatización de Procesos",
      description: "Implementamos soluciones tecnológicas para automatizar tareas repetitivas, optimizar operaciones y liberar el potencial creativo de su equipo.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "Automatización de procesos empresariales"
    },
    {
      title: "Identidad Corporativa",
      description: "Desarrollamos y renovamos la identidad visual de su empresa con un enfoque minimalista y moderno que refleje sus valores y objetivos.",
      image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "Diseño de identidad corporativa minimalista"
    },
    {
      title: "Capacitación y Desarrollo",
      description: "Formamos a su equipo en las últimas tendencias y herramientas tecnológicas para maximizar el aprovechamiento de sus inversiones.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      alt: "Capacitación en tecnologías modernas"
    }
  ];

  return (
    <section id="servicios" className="py-16 md:py-24 bg-neutral-lightest">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">Nuestras Soluciones</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-neutral-medium max-w-3xl mx-auto text-lg">
            Ofrecemos un conjunto integral de servicios diseñados para modernizar su empresa y potenciar su competitividad en el mercado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden animate-on-scroll card-hover"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-semibold text-xl text-primary mb-3">{service.title}</h3>
                <p className="text-neutral-medium mb-4">
                  {service.description}
                </p>
                <a href="#contacto" className="inline-flex items-center text-primary font-medium hover:text-primary-light transition duration-300">
                  Saber más <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
