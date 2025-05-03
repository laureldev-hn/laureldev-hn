import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to add shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle nav item click to close mobile menu
  const handleNavItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 w-full bg-primary ${scrolled ? "shadow-md" : ""} transition-shadow duration-300`}>
      <nav className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src="/logo.png" alt="LaurelDev Logo" className="h-10" />
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-1 md:space-x-2 lg:space-x-6 text-sm md:text-base">
            <a 
              href="#about" 
              className="text-secondary hover:text-accent font-medium transition-all px-2 py-1 whitespace-nowrap"
            >
              Sobre Nosotros
            </a>
            <a 
              href="#services" 
              className="text-secondary hover:text-accent font-medium transition-all px-2 py-1"
            >
              Servicios
            </a>
            <a 
              href="#success-stories" 
              className="text-secondary hover:text-accent font-medium transition-all px-2 py-1 whitespace-nowrap"
            >
              Casos de Éxito
            </a>
            <a 
              href="#why-us" 
              className="text-secondary hover:text-accent font-medium transition-all px-2 py-1 whitespace-nowrap"
            >
              ¿Por Qué Elegirnos?
            </a>
            <a 
              href="#clients" 
              className="text-secondary hover:text-accent font-medium transition-all px-2 py-1 whitespace-nowrap"
            >
              Nuestros Clientes
            </a>
            <a 
              href="#contact" 
              className="bg-secondary hover:bg-accent text-white py-2 px-4 md:px-6 rounded-full font-montserrat font-semibold transition-all ml-2 text-center whitespace-nowrap"
            >
              Contáctanos
            </a>
          </div>

          <div className="lg:hidden">
            <button 
              className="text-secondary hover:text-accent focus:outline-none" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"} mt-4 pb-4`}>
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-secondary hover:text-accent font-medium py-2 transition-all"
              onClick={handleNavItemClick}
            >
              Sobre Nosotros
            </a>
            <a 
              href="#services" 
              className="text-secondary hover:text-accent font-medium py-2 transition-all"
              onClick={handleNavItemClick}
            >
              Servicios
            </a>
            <a 
              href="#success-stories" 
              className="text-secondary hover:text-accent font-medium py-2 transition-all"
              onClick={handleNavItemClick}
            >
              Casos de Éxito
            </a>
            <a 
              href="#why-us" 
              className="text-secondary hover:text-accent font-medium py-2 transition-all"
              onClick={handleNavItemClick}
            >
              ¿Por Qué Elegirnos?
            </a>
            <a 
              href="#clients" 
              className="text-secondary hover:text-accent font-medium py-2 transition-all"
              onClick={handleNavItemClick}
            >
              Nuestros Clientes
            </a>
            <a 
              href="#contact" 
              className="bg-secondary hover:bg-accent text-white py-2 px-6 rounded-full font-montserrat font-semibold text-center transition-all mb-4"
              onClick={handleNavItemClick}
            >
              Contáctanos
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
