import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    id: 1,
    title: "Transformación Digital",
    description:
      "Diseñamos e implementamos estrategias de digitalización adaptadas a las necesidades específicas de tu empresa para optimizar procesos y aumentar la eficiencia operativa.",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    imageAlt: "Implementación de tecnología empresarial",
  },
  {
    id: 2,
    title: "Consultoría Estratégica",
    description:
      "Analizamos tu negocio para identificar oportunidades de mejora y desarrollar planes estratégicos que potencien la competitividad en el mercado local e internacional.",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    imageAlt: "Equipo trabajando en optimización de procesos",
  },
  {
    id: 3,
    title: "Soluciones Tecnológicas",
    description:
      "Desarrollamos e implementamos soluciones tecnológicas personalizadas que modernizan la infraestructura de tu empresa y optimizan sus operaciones diarias.",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    imageAlt: "Integración de tecnología innovadora",
  },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Soluciones integrales para optimizar y modernizar tu empresa con
            tecnología de vanguardia e identidad argentina.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-montserrat font-semibold text-xl mb-3">
                  {service.title}
                </h3>
                <p className="mb-4">{service.description}</p>
                <a
                  href="#contacto"
                  className="inline-flex items-center text-primary font-montserrat font-semibold hover:text-accent transition duration-300"
                >
                  Conocer más <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
