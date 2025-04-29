import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-gradient text-secondary">
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Transforming Financial Technology
            </h1>
            <p className="text-lg md:text-xl mb-8 text-secondary/80 max-w-lg">
              We build innovative solutions that empower credit unions and banks to thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="bg-secondary hover:bg-accent text-white font-montserrat font-semibold py-3 px-8 rounded-full text-center transition-all transform hover:scale-105"
              >
                Our Services
              </a>
              <a 
                href="#contact" 
                className="bg-transparent hover:bg-secondary/10 border-2 border-secondary text-secondary font-montserrat font-semibold py-3 px-8 rounded-full text-center transition-all"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
              alt="Financial Technology Dashboard" 
              className="rounded-xl shadow-2xl max-w-full md:max-w-md h-auto object-cover" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
