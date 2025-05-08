import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <div className="text-xl font-montserrat font-bold text-white mb-4 flex items-center">
              BACAN
            </div>
            <p className="max-w-xs text-gray-400">
              Transformamos empresas argentinas con tecnología de punta y
              soluciones a medida para mejorar su competitividad.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-montserrat font-semibold text-lg mb-4">
                Enlaces rápidos
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#inicio"
                    className="hover:text-white transition duration-300"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#nosotros"
                    className="hover:text-white transition duration-300"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-white transition duration-300"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#valores"
                    className="hover:text-white transition duration-300"
                  >
                    Valores
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="hover:text-white transition duration-300"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-montserrat font-semibold text-lg mb-4">
                Servicios
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-white transition duration-300"
                  >
                    Transformación Digital
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-white transition duration-300"
                  >
                    Consultoría Estratégica
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-white transition duration-300"
                  >
                    Soluciones Tecnológicas
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-white transition duration-300"
                  >
                    Optimización de Procesos
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-montserrat font-semibold text-lg mb-4">
                Legal
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Términos y condiciones
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    Política de privacidad
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bacan. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
