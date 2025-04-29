import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Our Team" 
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-secondary mb-6 relative pl-4">
              <span className="absolute left-0 top-0 h-full w-1 bg-primary"></span>
              About LaurelDev
            </h2>
            <p className="text-foreground text-lg mb-6">
              Founded with a vision to transform the financial technology landscape, LaurelDev specializes in developing innovative software solutions for credit unions and banks.
            </p>
            <p className="text-foreground text-lg mb-8">
              Our team combines deep expertise in financial systems with cutting-edge software development to deliver products that drive operational efficiency and enhance user experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="flex items-start"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-primary p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                    <path d="M12 2L19 8.5V21H5V8.5L12 2Z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-secondary mb-2">Our Mission</h3>
                  <p className="text-foreground">To empower financial institutions with technology that matters.</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-primary p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-secondary mb-2">Our Vision</h3>
                  <p className="text-foreground">A world where banking is seamless, secure, and user-friendly.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
