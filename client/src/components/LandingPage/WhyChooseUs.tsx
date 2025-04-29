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
        <p className="text-secondary/80">
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
      title: "Security-First Approach",
      description: "We prioritize security at every step of development, ensuring your financial data remains protected against evolving threats.",
    },
    {
      icon: <Users className="h-6 w-6 text-secondary" />,
      title: "Industry Expertise",
      description: "Our team includes former banking professionals who understand the unique challenges and regulations of the financial industry.",
    },
    {
      icon: <Cog className="h-6 w-6 text-secondary" />,
      title: "Custom Solutions",
      description: "We don't believe in one-size-fits-all. Our solutions are tailored to your specific needs, ensuring maximum value and impact.",
    },
    {
      icon: <Headphones className="h-6 w-6 text-secondary" />,
      title: "Ongoing Support",
      description: "Our relationship doesn't end at deployment. We provide continuous support, updates, and optimization to ensure long-term success.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-primary text-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-secondary mb-4">Why Choose LaurelDev</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-secondary/80">
            Our unique approach to financial technology development sets us apart from the competition.
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
