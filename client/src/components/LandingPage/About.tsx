import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-secondary mb-4">{t('about.title')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            {t('about.description')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="LaurelDev Team" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-secondary mb-6">{t('about.subtitle')}</h3>
            <p className="text-gray-700 mb-6">
              {t('about.mission')}
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary p-2 rounded-full mr-4 mt-1">
                  <Check className="h-4 w-4 text-secondary" />
                </div>
                <p className="text-gray-700">Developing secure, reliable financial technology solutions</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary p-2 rounded-full mr-4 mt-1">
                  <Check className="h-4 w-4 text-secondary" />
                </div>
                <p className="text-gray-700">Creating intuitive user experiences for financial applications</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary p-2 rounded-full mr-4 mt-1">
                  <Check className="h-4 w-4 text-secondary" />
                </div>
                <p className="text-gray-700">Supporting institutions through digital transformation</p>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="#services" 
                className="inline-flex items-center font-montserrat font-semibold text-secondary hover:text-accent transition-all"
              >
                Explore Our Services 
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
