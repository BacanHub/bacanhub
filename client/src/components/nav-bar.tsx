import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#valores", label: "Valores" },
    { href: "#contacto", label: "Contacto" }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 bg-white ${scrolled ? 'shadow-md' : ''} transition-shadow duration-300`}>
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-primary font-bold text-2xl">
          BACAN
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="font-medium text-foreground hover:text-primary transition duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-foreground focus:outline-none"
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white shadow-lg absolute w-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 max-h-80' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="font-medium text-foreground hover:text-primary py-2 transition duration-200"
              onClick={closeMobileMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
