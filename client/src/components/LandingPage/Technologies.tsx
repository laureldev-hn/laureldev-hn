import { motion } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaAws, 
  FaDatabase, 
  FaPython,
  FaShieldAlt
} from 'react-icons/fa';

interface TechCardProps {
  icon: React.ReactNode;
  name: string;
  delay: number;
}

const TechCard = ({ icon, name, delay }: TechCardProps) => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="text-5xl text-secondary mb-4">{icon}</div>
      <span className="font-medium text-gray-700">{name}</span>
    </motion.div>
  );
};

const Technologies = () => {
  const technologies = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaDatabase />, name: "MongoDB" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaShieldAlt />, name: "Blockchain" },
  ];

  return (
    <section className="py-20 bg-primary text-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-secondary mb-4">Technologies We Use</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-secondary/80">
            We leverage cutting-edge technologies to build robust, scalable, and secure financial solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <TechCard 
              key={index}
              icon={tech.icon}
              name={tech.name}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
