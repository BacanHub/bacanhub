import { motion } from "framer-motion";
import { Star, HeartHandshake, Clock, Lightbulb, Heart, Flag } from "lucide-react";

const values = [
  {
    id: 1,
    title: "Talento de Punta",
    description: "Contamos con profesionales altamente capacitados y en constante actualización para ofrecer las mejores soluciones tecnológicas del mercado.",
    icon: Star,
  },
  {
    id: 2,
    title: "Honestidad",
    description: "Basamos nuestras relaciones en la transparencia y la sinceridad, construyendo vínculos de confianza con nuestros clientes y colaboradores.",
    icon: HeartHandshake,
  },
  {
    id: 3,
    title: "Trabajo Duro",
    description: "Nos dedicamos con pasión y esfuerzo para superar las expectativas y lograr resultados excepcionales en cada proyecto que emprendemos.",
    icon: Clock,
  },
  {
    id: 4,
    title: "Claridad",
    description: "Comunicamos de manera simple y efectiva, asegurándonos que nuestros clientes comprendan cada etapa del proceso y las soluciones implementadas.",
    icon: Lightbulb,
  },
  {
    id: 5,
    title: "Compromiso",
    description: "Nos involucramos plenamente con cada proyecto, asumiendo la responsabilidad de contribuir al éxito y crecimiento de nuestros clientes.",
    icon: Heart,
  },
  {
    id: 6,
    title: "Identidad Argentina",
    description: "Honramos nuestras raíces integrando la esencia argentina en cada solución, adaptando las tecnologías globales a la realidad local.",
    icon: Flag,
  },
];

const ValuesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="valores" className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            Nuestros Valores
          </h2>
          <div className="w-20 h-1 bg-[#FFD700] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Principios que guían nuestro trabajo y compromiso con el crecimiento
            de las empresas argentinas.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value) => (
            <motion.div
              key={value.id}
              variants={itemVariants}
              className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm hover:bg-opacity-20 transition duration-300"
            >
              <div className="bg-[#FFD700] text-primary rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3 text-center">
                {value.title}
              </h3>
              <p className="text-center">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
