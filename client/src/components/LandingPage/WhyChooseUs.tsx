import { motion } from "framer-motion";
import { Shield, Users, Cog, Headphones } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => {
  return (
    <motion.div 
      className="flex"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex-shrink-0 mr-6">
        <div className="flex items-center justify-center w-14 h-14 bg-primary rounded-full">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="font-montserrat font-bold text-xl text-secondary mb-2">{title}</h3>
        <p className="text-gray-700">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-secondary" />,
      title: "Seguridad Primero",
      description: "Prácticas de seguridad robustas y cumplimiento de las regulaciones financieras.",
    },
    {
      icon: <Users className="h-6 w-6 text-secondary" />,
      title: "Experiencia en la Industria",
      description: "Conocimiento especializado en tecnología financiera y operaciones de cooperativas.",
    },
    {
      icon: <Cog className="h-6 w-6 text-secondary" />,
      title: "Soluciones Personalizadas",
      description: "Desarrollo de software a medida para satisfacer sus necesidades y objetivos específicos.",
    },
    {
      icon: <Headphones className="h-6 w-6 text-secondary" />,
      title: "Soporte 24/7",
      description: "Equipo dedicado que proporciona soporte y mantenimiento continuos.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-secondary mb-4">¿Por Qué Elegirnos?</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Qué Nos Distingue
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
              src="/distingue.png" 
              alt="Lo que nos distingue - Desarrollador con tecnología de vanguardia" 
              className="w-full h-auto object-contain"
            />
          </motion.div>
          
          <div className="space-y-8">
            {features.map((feature, index) => (
              <Feature 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;