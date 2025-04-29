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
      { name: "Casos de Éxito", href: "#success-stories" },
      { name: "Carreras", href: "#" },
      { name: "Blog", href: "#" },
    ],
    legal: [
      { name: "Política de Privacidad", href: "#" },
      { name: "Términos de Servicio", href: "#" },
      { name: "Política de Cookies", href: "#" },
      { name: "Seguridad", href: "#" },
      { name: "Cumplimiento", href: "#" },
    ],
  };

  return (
    <footer className="bg-dark py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="inline-block mb-6">
              <img src="/assets/laureldev_logo.png" alt="LaurelDev Logo" className="h-12" />
            </a>
            <p className="text-gray-400 mb-6">
              Transformando instituciones financieras a través de soluciones tecnológicas innovadoras.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-all">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-all">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-all">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-white text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-all">
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
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-all">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-white text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-all">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              Copyright 2025 LaurelDev. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary hover:text-primary transition-all">Política de Privacidad</a>
              <a href="#" className="text-secondary hover:text-primary transition-all">Términos de Servicio</a>
              <a href="#" className="text-secondary hover:text-primary transition-all">Mapa del Sitio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;