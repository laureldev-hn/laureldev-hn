import { motion } from "framer-motion";
import { Check } from "lucide-react";

const About = () => {
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
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-secondary mb-4">Sobre Nosotros</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            LaurelDev es una empresa líder en tecnología especializada en crear soluciones de software personalizadas para instituciones financieras. Con más de 10 años de experiencia en la industria, hemos ayudado a cooperativas y organizaciones financieras a modernizar sus sistemas, mejorar la experiencia de sus miembros y mantenerse a la vanguardia en la era digital.
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
              src="/construyendo.png" 
              alt="Construyendo soluciones financieras con tecnología moderna" 
              className="rounded-xl shadow-lg w-full h-auto object-contain bg-white"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-secondary mb-6">Construyendo el Futuro de la Tecnología Financiera</h3>
            <p className="text-gray-700 mb-6">
              Nuestra misión es potenciar a las instituciones financieras con tecnología innovadora que mejore sus operaciones y proporcione un valor excepcional a sus miembros.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary p-2 rounded-full mr-4 mt-1">
                  <Check className="h-4 w-4 text-secondary" />
                </div>
                <p className="text-gray-700">Desarrollando soluciones financieras seguras y confiables</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary p-2 rounded-full mr-4 mt-1">
                  <Check className="h-4 w-4 text-secondary" />
                </div>
                <p className="text-gray-700">Creando experiencias de usuario intuitivas para aplicaciones financieras</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary p-2 rounded-full mr-4 mt-1">
                  <Check className="h-4 w-4 text-secondary" />
                </div>
                <p className="text-gray-700">Apoyando a instituciones en su transformación digital</p>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="#services" 
                className="inline-flex items-center font-montserrat font-semibold text-secondary hover:text-accent transition-all"
              >
                Explorar Nuestros Servicios 
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;