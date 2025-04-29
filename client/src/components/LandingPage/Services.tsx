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
          Learn More <i className="fas fa-chevron-right ml-2 text-sm"></i>
        </a>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="h-16 w-16" />,
      title: "Mobile Banking Solutions",
      description: "Custom mobile applications that provide seamless banking experiences for your customers, with features like mobile check deposit, account management, and secure transactions.",
    },
    {
      icon: <Shield className="h-16 w-16" />,
      title: "Security & Compliance",
      description: "Robust security solutions that protect sensitive financial data while ensuring compliance with industry regulations and standards like PCI DSS and GDPR.",
    },
    {
      icon: <BarChart3 className="h-16 w-16" />,
      title: "Data Analytics",
      description: "Advanced analytics tools that transform raw financial data into actionable insights, helping you make data-driven decisions and identify growth opportunities.",
    },
    {
      icon: <Repeat className="h-16 w-16" />,
      title: "Payment Processing",
      description: "Streamlined payment solutions that support various transaction methods, from traditional credit and debit cards to emerging payment technologies.",
    },
    {
      icon: <Bot className="h-16 w-16" />,
      title: "AI & Machine Learning",
      description: "Innovative AI solutions for fraud detection, customer service automation, personalized banking experiences, and intelligent financial insights.",
    },
    {
      icon: <Code className="h-16 w-16" />,
      title: "Custom Development",
      description: "Tailored software solutions designed specifically for your institution's unique needs, ensuring perfect alignment with your business objectives.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-primary text-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-secondary mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-secondary/80">
            We offer a comprehensive suite of financial technology solutions tailored to the needs of modern banking institutions.
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
