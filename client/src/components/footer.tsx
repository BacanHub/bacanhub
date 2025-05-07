import { Link } from 'wouter';
import { Linkedin, Instagram, Twitter, Mail, MapPin } from "lucide-react";
import logoImage from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#valores", label: "Valores" },
    { href: "#contacto", label: "Contacto" }
  ];

  return (
    <footer className="bg-foreground text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <div className="text-white font-bold text-2xl mb-2">
              BACAN
            </div>
            <p className="text-white/90 mt-2">Modernización con identidad argentina</p>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-accent" />
                <span className="text-white/90 text-sm">Rosario, Argentina</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-accent" />
                <a href="mailto:bacaningenieria@gmail.com" className="text-white/90 text-sm hover:text-accent transition-colors">
                  bacaningenieria@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-white hover:text-accent transition duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm mb-4 md:mb-0">
            &copy; {currentYear} BACAN. Todos los derechos reservados.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-accent transition duration-200">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-accent transition duration-200">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-white hover:text-accent transition duration-200">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
