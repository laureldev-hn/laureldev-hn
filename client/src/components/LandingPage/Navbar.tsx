import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

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
    <header className={`sticky top-0 z-50 w-full bg-white ${scrolled ? "shadow-md" : ""} transition-shadow duration-300`}>
      <nav className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src="/assets/Recurso 1@4x.png" alt="LaurelDev Logo" className="h-10" />
            </a>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a 
              href="#about" 
              className="text-secondary hover:text-accent font-medium transition-all"
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-secondary hover:text-accent font-medium transition-all"
            >
              Services
            </a>
            <a 
              href="#success-stories" 
              className="text-secondary hover:text-accent font-medium transition-all"
            >
              Success Stories
            </a>
            <a 
              href="#why-us" 
              className="text-secondary hover:text-accent font-medium transition-all"
            >
              Why Choose Us
            </a>
            <a 
              href="#contact" 
              className="bg-primary hover:bg-secondary text-secondary hover:text-white py-2 px-6 rounded-full font-montserrat font-semibold transition-all"
            >
              Contact Us
            </a>
          </div>

          <div className="md:hidden">
            <button 
              className="text-secondary focus:outline-none" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} mt-4 pb-4`}>
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-secondary hover:text-accent font-medium py-2 transition-all"
              onClick={handleNavItemClick}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-secondary hover:text-accent font-medium py-2 transition-all"
              onClick={handleNavItemClick}
            >
              Services
            </a>
            <a 
              href="#success-stories" 
              className="text-secondary hover:text-accent font-medium py-2 transition-all"
              onClick={handleNavItemClick}
            >
              Success Stories
            </a>
            <a 
              href="#why-us" 
              className="text-secondary hover:text-accent font-medium py-2 transition-all"
              onClick={handleNavItemClick}
            >
              Why Choose Us
            </a>
            <a 
              href="#contact" 
              className="bg-primary text-secondary py-2 px-6 rounded-full font-montserrat font-semibold text-center transition-all"
              onClick={handleNavItemClick}
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
