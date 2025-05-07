import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full bg-white z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md py-2" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#inicio" className="flex items-center space-x-2">
          <div className="text-primary font-montserrat font-bold text-2xl tracking-tight">
            BACAN
          </div>
        </a>

        <nav className="hidden md:flex space-x-8">
          <a
            href="#inicio"
            className="font-montserrat text-dark hover:text-primary transition duration-300"
          >
            Inicio
          </a>
          <a
            href="#nosotros"
            className="font-montserrat text-dark hover:text-primary transition duration-300"
          >
            Nosotros
          </a>
          <a
            href="#servicios"
            className="font-montserrat text-dark hover:text-primary transition duration-300"
          >
            Servicios
          </a>
          <a
            href="#valores"
            className="font-montserrat text-dark hover:text-primary transition duration-300"
          >
            Valores
          </a>
          <a
            href="#contacto"
            className="font-montserrat text-dark hover:text-primary transition duration-300"
          >
            Contacto
          </a>
        </nav>

        <button
          className="md:hidden text-dark hover:text-primary focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white md:hidden w-full overflow-hidden"
      >
        <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
          <a
            href="#inicio"
            className="font-montserrat text-dark hover:text-primary py-2 transition duration-300"
            onClick={closeMenu}
          >
            Inicio
          </a>
          <a
            href="#nosotros"
            className="font-montserrat text-dark hover:text-primary py-2 transition duration-300"
            onClick={closeMenu}
          >
            Nosotros
          </a>
          <a
            href="#servicios"
            className="font-montserrat text-dark hover:text-primary py-2 transition duration-300"
            onClick={closeMenu}
          >
            Servicios
          </a>
          <a
            href="#valores"
            className="font-montserrat text-dark hover:text-primary py-2 transition duration-300"
            onClick={closeMenu}
          >
            Valores
          </a>
          <a
            href="#contacto"
            className="font-montserrat text-dark hover:text-primary py-2 transition duration-300"
            onClick={closeMenu}
          >
            Contacto
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
