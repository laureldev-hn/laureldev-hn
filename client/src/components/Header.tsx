import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center z-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="160" height="40" viewBox="0 0 350 80">
            <g>
              <path d="M40,10 C30,15 10,20 5,30 C0,40 5,50 15,60 C25,70 45,75 60,65 C75,55 80,40 75,30 C70,20 60,15 50,20 C40,25 35,35 40,45 C45,55 55,60 65,55" 
                    fill="none" stroke="#212222" stroke-width="5" stroke-linecap="round"/>
              <path d="M20,15 L40,15 L30,30 Z" fill="#F0290C"/>
              <circle cx="50" cy="30" r="3" fill="#212222"/>
            </g>
            <text x="100" y="45" font-family="Montserrat, sans-serif" font-size="36" font-weight="700" fill={isScrolled ? "#fec53a" : "#11385b"}>LAUREL DEV</text>
          </svg>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link text-secondary font-semibold hover:text-accent transition duration-300">About</a>
          <a href="#services" className="nav-link text-secondary font-semibold hover:text-accent transition duration-300">Services</a>
          <a href="#testimonials" className="nav-link text-secondary font-semibold hover:text-accent transition duration-300">Success Stories</a>
          <a href="#technologies" className="nav-link text-secondary font-semibold hover:text-accent transition duration-300">Technologies</a>
          <a href="#contact" className="bg-accent text-white px-6 py-2 rounded-full font-bold hover:bg-secondary transition duration-300">Contact Us</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-secondary z-10" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={isOpen ? "hidden" : "block"}
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={isOpen ? "block" : "hidden"}
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white px-4 shadow-lg"
      >
        <div className="flex flex-col space-y-4 py-4">
          <a 
            href="#about" 
            className="text-secondary font-semibold hover:text-accent transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a 
            href="#services" 
            className="text-secondary font-semibold hover:text-accent transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a 
            href="#testimonials" 
            className="text-secondary font-semibold hover:text-accent transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Success Stories
          </a>
          <a 
            href="#technologies" 
            className="text-secondary font-semibold hover:text-accent transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Technologies
          </a>
          <a 
            href="#contact" 
            className="bg-accent text-white px-6 py-2 rounded-full font-bold hover:bg-secondary transition duration-300 text-center"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </header>
  );
}
