import { motion } from "framer-motion";
import { 
  Smartphone, 
  Shield, 
  BarChart3, 
  Repeat, 
  Bot, 
  Code 
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden service-card transition-all"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ y: -10 }}
    >
      <div className="h-48 bg-secondary flex items-center justify-center">
        <div className="text-6xl text-primary">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-montserrat font-bold text-xl text-secondary mb-3">{title}</h3>
        <p className="text-gray-700 mb-4">
          {description}
        </p>
        <a 
          href="#contact" 
          className="inline-flex items-center font-montserrat font-semibold text-accent hover:text-secondary transition-all"
        >
          Más Información
        </a>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="h-16 w-16" />,
      title: "Soluciones de Banca Móvil",
      description: "Aplicaciones móviles personalizadas que proporcionan experiencias bancarias fluidas para sus clientes.",
    },
    {
      icon: <Shield className="h-16 w-16" />,
      title: "Seguridad y Cumplimiento",
      description: "Soluciones de seguridad robustas que protegen datos financieros sensibles y garantizan el cumplimiento.",
    },
    {
      icon: <BarChart3 className="h-16 w-16" />,
      title: "Análisis de Datos",
      description: "Herramientas de análisis avanzadas que transforman datos financieros brutos en información procesable.",
    },
    {
      icon: <Repeat className="h-16 w-16" />,
      title: "Procesamiento de Pagos",
      description: "Soluciones de pago optimizadas que admiten varios métodos de transacción.",
    },
    {
      icon: <Bot className="h-16 w-16" />,
      title: "IA y Aprendizaje Automático",
      description: "Soluciones innovadoras de IA para detección de fraudes y automatización del servicio al cliente.",
    },
    {
      icon: <Code className="h-16 w-16" />,
      title: "Desarrollo Personalizado",
      description: "Soluciones de software a medida diseñadas específicamente para las necesidades únicas de su institución.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-secondary mb-4">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Soluciones Integrales para Instituciones Financieras
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;