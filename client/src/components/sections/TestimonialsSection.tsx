import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    text: "Bacan revolucionó nuestros procesos internos con soluciones tecnológicas que realmente entienden la realidad de las empresas argentinas. Nuestra productividad aumentó un 40% desde la implementación.",
    name: "María López",
    position: "Directora de Operaciones, Textil Argentina",
    initials: "ML",
  },
  {
    id: 2,
    text: "La consultoría estratégica de Bacan nos ayudó a identificar oportunidades de crecimiento que no habíamos visto. Su enfoque con identidad argentina hizo que las soluciones fueran perfectamente adaptadas a nuestro contexto.",
    name: "Juan Rodríguez",
    position: "CEO, Innovación Córdoba",
    initials: "JR",
  },
  {
    id: 3,
    text: "La transformación digital que implementó Bacan en nuestra empresa fue clave para sobrevivir en tiempos difíciles. Su equipo demostró un compromiso y profesionalismo excepcionales.",
    name: "Laura Gómez",
    position: "Gerente General, Distribuidora Patagonia",
    initials: "LG",
  },
];

const TestimonialsSection = () => {
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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Empresas argentinas que confiaron en nosotros para su transformación
            digital.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-secondary rounded-lg p-6 relative shadow-md"
            >
              <div className="absolute -top-4 left-6 text-primary text-5xl">
                "
              </div>
              <p className="mt-4 mb-6 text-dark">{testimonial.text}</p>
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarFallback className="bg-primary text-white font-montserrat font-bold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-montserrat font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
