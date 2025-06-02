import { Link } from "wouter";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    services: [
      { name: "Soluciones de Banca Móvil", href: "#services" },
      { name: "Seguridad y Cumplimiento", href: "#services" },
      { name: "Análisis de Datos", href: "#services" },
      { name: "Procesamiento de Pagos", href: "#services" },
      { name: "IA y Aprendizaje Automático", href: "#services" },
    ],
    company: [
      { name: "Sobre Nosotros", href: "#about" },
      { name: "¿Por Qué Elegirnos?", href: "#why-us" },
      { name: "Nuestros Clientes", href: "#clients" },
      { name: "Contáctanos", href: "#contact" },
    ],
  };

  return (
    <footer className="bg-dark py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <a href="#" className="inline-block mb-6">
              <img src="/assets/laureldev_logo.png" alt="LaurelDev Logo" className="h-12" />
            </a>
            <p className="text-[#11385b] mb-6 font-medium">
              Transformando instituciones financieras a través de soluciones tecnológicas innovadoras.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#11385b] hover:text-white transition-all">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-[#11385b] hover:text-white transition-all">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-[#11385b] hover:text-white transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-[#11385b] hover:text-white transition-all">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-white text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-[#11385b] hover:text-white transition-all font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-white text-lg mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-[#11385b] hover:text-white transition-all font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-[#11385b] font-medium text-center">
              Copyright 2025 LaurelDev. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;