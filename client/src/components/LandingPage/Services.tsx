import { motion } from "framer-motion";
import { 
  Smartphone, 
  Shield, 
  BarChart3, 
  Repeat, 
  Bot, 
  Code 
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  const { t } = useLanguage();
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
          {t('services.learnMore')} <i className="fas fa-chevron-right ml-2 text-sm"></i>
        </a>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const { t } = useLanguage();
  const services = [
    {
      icon: <Smartphone className="h-16 w-16" />,
      title: t('services.mobileBanking.title'),
      description: t('services.mobileBanking.description'),
    },
    {
      icon: <Shield className="h-16 w-16" />,
      title: t('services.security.title'),
      description: t('services.security.description'),
    },
    {
      icon: <BarChart3 className="h-16 w-16" />,
      title: t('services.dataAnalytics.title'),
      description: t('services.dataAnalytics.description'),
    },
    {
      icon: <Repeat className="h-16 w-16" />,
      title: t('services.payments.title'),
      description: t('services.payments.description'),
    },
    {
      icon: <Bot className="h-16 w-16" />,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
    },
    {
      icon: <Code className="h-16 w-16" />,
      title: t('services.customDev.title'),
      description: t('services.customDev.description'),
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
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-secondary mb-4">{t('services.title')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            {t('services.subtitle')}
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
