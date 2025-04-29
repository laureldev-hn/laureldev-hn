import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import LanguageSwitcher from "../LanguageSwitcher";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

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
              <img src="/logo-updated.png" alt="LaurelDev Logo" className="h-12" />
            </a>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a 
              href="#about" 
              className="text-secondary hover:text-accent font-medium transition-all"
            >
              {t('nav.about')}
            </a>
            <a 
              href="#services" 
              className="text-secondary hover:text-accent font-medium transition-all"
            >
              {t('nav.services')}
            </a>
            <a 
              href="#success-stories" 
              className="text-secondary hover:text-accent font-medium transition-all"
            >
              {t('nav.successStories')}
            </a>
            <a 
              href="#why-us" 
              className="text-secondary hover:text-accent font-medium transition-all"
            >
              {t('nav.whyChooseUs')}
            </a>
            <a 
              href="#contact" 
              className="bg-secondary hover:bg-accent text-white py-2 px-6 rounded-full font-montserrat font-semibold transition-all mr-4"
            >
              {t('nav.contactUs')}
            </a>
            <LanguageSwitcher />
          </div>

          <div className="md:hidden">
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
        <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} mt-4 pb-4`}>
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-secondary hover:text-accent font-medium py-2 transition-all"
              onClick={handleNavItemClick}
            >
              {t('nav.about')}
            </a>
            <a 
              href="#services" 
              className="text-secondary hover:text-accent font-medium py-2 transition-all"
              onClick={handleNavItemClick}
            >
              {t('nav.services')}
            </a>
            <a 
              href="#success-stories" 
              className="text-secondary hover:text-accent font-medium py-2 transition-all"
              onClick={handleNavItemClick}
            >
              {t('nav.successStories')}
            </a>
            <a 
              href="#why-us" 
              className="text-secondary hover:text-accent font-medium py-2 transition-all"
              onClick={handleNavItemClick}
            >
              {t('nav.whyChooseUs')}
            </a>
            <a 
              href="#contact" 
              className="bg-secondary hover:bg-accent text-white py-2 px-6 rounded-full font-montserrat font-semibold text-center transition-all mb-4"
              onClick={handleNavItemClick}
            >
              {t('nav.contactUs')}
            </a>
            <div className="flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
