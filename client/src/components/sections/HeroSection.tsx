import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="hero-pattern pt-28 pb-20 md:pt-36 md:pb-24"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 text-white mb-10 md:mb-0"
          >
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl leading-tight mb-4">
              Transformamos empresas{" "}
              <span className="text-[#FFD700]">argentinas</span> con tecnología
              de punta
            </h1>
            <p className="text-lg mb-8 opacity-90">
              Impulsamos la modernización y competitividad de tu negocio con
              soluciones que integran diseño, tecnología y eficiencia con
              identidad nacional.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                asChild
                className="bg-[#FFD700] hover:bg-[#E6C200] text-black font-montserrat font-semibold py-6 text-base"
              >
                <a href="#contacto">Contáctanos</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-montserrat font-semibold py-6 text-base"
              >
                <a href="#servicios">Nuestros servicios</a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 md:pl-10"
          >
            <img
              src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Profesionales argentinos en una oficina moderna"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
