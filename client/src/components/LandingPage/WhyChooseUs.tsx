import { motion } from "framer-motion";
import { Shield, Users, Cog, Headphones } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => {
  const { t } = useLanguage();
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
  const { t } = useLanguage();
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-secondary" />,
      title: t('why.security.title'),
      description: t('why.security.description'),
    },
    {
      icon: <Users className="h-6 w-6 text-secondary" />,
      title: t('why.expertise.title'),
      description: t('why.expertise.description'),
    },
    {
      icon: <Cog className="h-6 w-6 text-secondary" />,
      title: t('why.custom.title'),
      description: t('why.custom.description'),
    },
    {
      icon: <Headphones className="h-6 w-6 text-secondary" />,
      title: t('why.support.title'),
      description: t('why.support.description'),
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
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-secondary mb-4">{t('why.title')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            {t('why.subtitle')}
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
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Banking Technology" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
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
