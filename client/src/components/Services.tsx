import { motion } from "framer-motion";

// Service data
const services = [
  {
    id: 1,
    icon: "landmark",
    title: "Core Banking Solutions",
    description: "Full-scale banking platforms designed specifically for credit unions with integrated account management.",
  },
  {
    id: 2,
    icon: "smartphone",
    title: "Mobile Banking Apps",
    description: "Customer-facing applications with intuitive interfaces for account management, transfers, and mobile deposits.",
  },
  {
    id: 3,
    icon: "shield",
    title: "Security & Compliance",
    description: "Advanced security frameworks that ensure regulatory compliance and protect sensitive financial data.",
  },
  {
    id: 4,
    icon: "bar-chart-2",
    title: "Analytics & Reporting",
    description: "Powerful data analytics tools that provide actionable insights for strategic decision-making.",
  },
  {
    id: 5,
    icon: "code",
    title: "API Integration",
    description: "Seamless integration services that connect your systems with third-party financial services.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary clip-diagonal-bottom text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading font-bold text-3xl md:text-4xl mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We provide comprehensive financial technology solutions tailored to the unique needs of credit unions and financial institutions.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.slice(0, 3).map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 h-full"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 25px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="h-2 bg-accent"></div>
              <div className="p-8">
                <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-2xl text-secondary">
                    {service.icon === "landmark" && <path d="M4 22h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H10L8 3H4a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2z"></path>}
                    {service.icon === "smartphone" && <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>}
                    {service.icon === "shield" && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>}
                    {service.icon === "bar-chart-2" && <><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></>}
                    {service.icon === "code" && <><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></>}
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-2xl text-secondary mb-4">{service.title}</h3>
                <p className="text-foreground mb-6">{service.description}</p>
                <a href="#contact" className="inline-block font-bold text-accent hover:text-secondary transition duration-300">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 inline">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.slice(3, 5).map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 h-full"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 25px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="h-2 bg-accent"></div>
              <div className="p-8">
                <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-2xl text-secondary">
                    {service.icon === "bar-chart-2" && <><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></>}
                    {service.icon === "code" && <><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></>}
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-2xl text-secondary mb-4">{service.title}</h3>
                <p className="text-foreground mb-6">{service.description}</p>
                <a href="#contact" className="inline-block font-bold text-accent hover:text-secondary transition duration-300">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 inline">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
