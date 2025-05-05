import { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import CtaBanner from "./CtaBanner";
import SuccessStories from "./SuccessStories";
import Technologies from "./Technologies";
import WhyChooseUs from "./WhyChooseUs";
import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";

const LandingPage = () => {
  // Implement smooth scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const targetId = target.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId as string);
        if (targetElement) {
          // Calcular posición con offset para el navbar fijo
          const navbarHeight = 70; // Altura aproximada del navbar en píxeles
          const yOffset = -navbarHeight;
          const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden pt-16">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CtaBanner />
      <Technologies />
      <WhyChooseUs />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
