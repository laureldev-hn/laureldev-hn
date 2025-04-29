import { motion } from "framer-motion";

const CtaBanner = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="mb-8 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-secondary mb-4">
              Ready to transform your financial services?
            </h2>
            <p className="text-gray-800 max-w-xl">
              Let's discuss how our solutions can help you stay ahead in the competitive financial landscape.
            </p>
          </motion.div>
          
          <motion.a 
            href="#contact" 
            className="bg-secondary hover:bg-accent text-white font-montserrat font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            Get Started
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
