import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="bg-primary clip-diagonal-top pt-28 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight text-secondary mb-6">
            Revolutionizing <span className="text-accent">Financial Technology</span> Solutions
          </h1>
          <p className="text-secondary text-lg md:text-xl font-semibold mb-8 max-w-lg">
            We deliver cutting-edge software solutions designed specifically for credit unions and financial institutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              href="#contact" 
              className="bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-secondary transition duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.a>
            <motion.a 
              href="#services" 
              className="bg-white text-secondary px-8 py-4 rounded-full font-bold hover:bg-secondary hover:text-white transition duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Services
            </motion.a>
          </div>
        </motion.div>
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          animate-custom={{ y: [0, -20, 0] }}
          transition-custom={{ repeat: Infinity, duration: 6 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Financial Technology Platform" 
            className="rounded-lg shadow-2xl w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
