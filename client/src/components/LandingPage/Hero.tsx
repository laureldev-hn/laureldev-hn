import { motion } from "framer-motion";
import { Database, FileCode, Hammer, Wrench } from "lucide-react";

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
                  src="/woodpecker-logo.png" 
                  alt="Pájaro Carpintero - Logo de Laureldev" 
                  className="w-12 h-12 object-contain"
                />
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg font-semibold text-primary"
              >
                WoodPeacker DEV
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
          
          <div className="order-1 md:order-2 flex justify-center relative">
            {/* Imagen principal de ilustración */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <img 
                src="/hero-illustration.png" 
                alt="Desarrollador de software creando aplicaciones" 
                className="rounded-xl shadow-xl max-w-full md:max-w-md h-auto object-cover relative z-10" 
              />
            </motion.div>
            
            {/* Elementos de carpintería flotantes */}
            <motion.div 
              className="absolute -top-8 -right-8 z-0 text-primary opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.85, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Hammer size={32} className="drop-shadow-md" />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-16 -left-6 z-20 text-accent opacity-80"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 0.85, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Wrench size={36} className="drop-shadow-md" />
            </motion.div>
            
            {/* Elementos de código flotantes */}
            <motion.div 
              className="absolute -bottom-4 right-12 z-20 text-secondary opacity-80"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 0.85, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <FileCode size={36} className="drop-shadow-md" />
            </motion.div>
            
            <motion.div 
              className="absolute top-12 -left-10 z-0 text-primary opacity-80"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.85, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <Database size={28} className="drop-shadow-md" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;