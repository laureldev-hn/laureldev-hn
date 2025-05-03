import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient text-secondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-28">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Eliminado el logo pequeño */}
            
            <h1 className="font-montserrat font-bold text-3xl md:text-5xl lg:text-6xl leading-tight mb-3 md:mb-6">
              Transformando Instituciones Financieras
            </h1>
            <p className="text-lg md:text-xl mb-4 md:mb-8 text-secondary/80 max-w-lg">
              Desarrollamos soluciones innovadoras para cooperativas y organizaciones financieras, con la precisión de un carpintero y la innovación de un desarrollador.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="bg-secondary hover:bg-accent text-white font-montserrat font-semibold py-3 px-8 rounded-full text-center transition-all transform hover:scale-105"
              >
                Servicios
              </a>
              <a 
                href="#contact" 
                className="bg-transparent hover:bg-secondary/10 border-2 border-secondary text-secondary font-montserrat font-semibold py-3 px-8 rounded-full text-center transition-all"
              >
                Contáctanos
              </a>
            </div>
          </motion.div>
          
          <div className="order-1 md:order-2 flex justify-center mb-2 md:mb-0">
            {/* Imagen principal que ilustra el desarrollo de software */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <img 
                src="/hero.png" 
                alt="Desarrollador trabajando en una plataforma financiera" 
                className="w-4/5 md:w-full mx-auto max-w-xs md:max-w-md lg:max-w-lg h-auto object-contain" 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;