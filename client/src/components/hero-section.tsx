import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import logoImage from '../assets/logo.png';

export default function HeroSection() {
  return (
    <section id="inicio" className="pt-20 bg-primary hero-pattern">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary-foreground font-bold text-3xl md:text-4xl mb-4">
            BACAN
          </h2>
          <h1 className="hero-text font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4">
            Transformamos empresas argentinas
          </h1>
          <p className="text-primary-foreground text-lg md:text-xl mb-4">
            Integramos diseño, tecnología y eficiencia con una mirada moderna y nacional para impulsar tu competitividad.
          </p>
          <p className="text-primary-foreground text-lg md:text-xl italic mb-8">
            "Nos encantan los desafíos. Cada problema es una oportunidad para demostrar el talento y la resiliencia argentina."
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="default" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
              size="lg"
              asChild
            >
              <a href="#servicios" aria-label="Ver nuestras soluciones">Nuestras Soluciones</a>
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-medium"
              size="lg"
              asChild
            >
              <a href="#contacto" aria-label="Contáctanos">Contáctanos</a>
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Modern office with Argentine business professionals */}
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900" 
            alt="Profesionales argentinos en una reunión de negocios" 
            className="rounded-lg shadow-2xl object-cover w-full h-auto"
            width="1200"
            height="900"
            loading="eager"
          />
          <div className="absolute -bottom-6 -left-6 bg-accent rounded-lg py-4 px-6 shadow-lg hidden md:block">
            <p className="font-montserrat font-medium text-accent-foreground">Más de <span className="font-bold">50 empresas</span> transformadas</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
