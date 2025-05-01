import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient text-secondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mr-3"
              >
                <img 
                  src="/logo.png" 
                  alt="Logo de Laureldev" 
                  className="w-14 h-14 object-contain"
                />
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg font-semibold text-primary"
              >
                LaurelDev
              </motion.h2>
            </div>
            
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Transformando Instituciones Financieras
            </h1>
            <p className="text-lg md:text-xl mb-8 text-secondary/80 max-w-lg">
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
          
          <div className="order-1 md:order-2 flex justify-center">
            {/* Imagen principal del logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <img 
                src="/logo-header.png" 
                alt="Logo de Laureldev" 
                className="max-w-full md:max-w-md h-auto object-contain" 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;