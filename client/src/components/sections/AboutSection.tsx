import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="nosotros" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-14"
          {...fadeIn}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            Quiénes Somos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Una empresa con identidad argentina dedicada a la modernización y
            optimización de negocios a través de soluciones tecnológicas
            avanzadas.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0">
          <motion.div 
            className="md:w-1/2 md:pr-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Oficina minimalista con elementos tecnológicos"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>

          <motion.div 
            className="md:w-1/2 md:pl-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="p-8">
                <div className="mb-8">
                  <h3 className="font-montserrat font-semibold text-2xl mb-3 text-primary">
                    Misión
                  </h3>
                  <p>
                    Impulsar la transformación de empresas argentinas, brindando
                    soluciones que integren diseño, tecnología y eficiencia con
                    una mirada moderna y nacional.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="font-montserrat font-semibold text-2xl mb-3 text-primary">
                    Visión
                  </h3>
                  <p>
                    Ser la marca referente en modernización empresarial en
                    Argentina, combinando identidad local, innovación y estilo
                    minimalista.
                  </p>
                </div>

                <div>
                  <h3 className="font-montserrat font-semibold text-2xl mb-3 text-primary">
                    Propósito
                  </h3>
                  <p>
                    Crear una marca con fuerte identidad argentina que
                    contribuya a modernizar empresas, optimizar procesos,
                    aumentar su competitividad en el mercado y aplicar
                    tecnologías de punta en los procesos productivos.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
