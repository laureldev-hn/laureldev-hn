import { motion } from "framer-motion";
import { FaPython, FaDatabase, FaAws, FaDocker } from 'react-icons/fa';
import { SiKubernetes, SiJavascript, SiApachekafka } from 'react-icons/si';
import { BsFillDatabaseFill } from 'react-icons/bs';

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
    { icon: <SiJavascript />, name: "Javascript" },
    { icon: <FaPython />, name: "Python" },
    { icon: <BsFillDatabaseFill />, name: "Bases de datos" },
    { icon: <SiApachekafka />, name: "Kafka" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaDatabase />, name: "ETL" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-secondary mb-4">Tecnologías que Utilizamos</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            Aprovechamos tecnologías de vanguardia para construir soluciones financieras robustas, escalables y seguras.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
