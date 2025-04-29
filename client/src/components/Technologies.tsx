import { motion } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaCloud,
  FaLock,
  FaCodeBranch,
  FaMobileAlt,
  FaChartPie
} from "react-icons/fa";

// Technologies data
const technologies = [
  {
    id: 1,
    icon: <FaReact className="text-5xl text-accent mb-4" />,
    name: "React",
    category: "Frontend Development",
  },
  {
    id: 2,
    icon: <FaNodeJs className="text-5xl text-accent mb-4" />,
    name: "Node.js",
    category: "Backend Development",
  },
  {
    id: 3,
    icon: <FaDatabase className="text-5xl text-accent mb-4" />,
    name: "MongoDB",
    category: "Database Solutions",
  },
  {
    id: 4,
    icon: <FaCloud className="text-5xl text-accent mb-4" />,
    name: "AWS",
    category: "Cloud Infrastructure",
  },
  {
    id: 5,
    icon: <FaLock className="text-5xl text-accent mb-4" />,
    name: "OAuth 2.0",
    category: "Security & Authentication",
  },
  {
    id: 6,
    icon: <FaCodeBranch className="text-5xl text-accent mb-4" />,
    name: "GraphQL",
    category: "API Development",
  },
  {
    id: 7,
    icon: <FaMobileAlt className="text-5xl text-accent mb-4" />,
    name: "React Native",
    category: "Mobile Development",
  },
  {
    id: 8,
    icon: <FaChartPie className="text-5xl text-accent mb-4" />,
    name: "D3.js",
    category: "Data Visualization",
  },
];

// Benefits data
const benefits = [
  {
    id: 1,
    title: "Scalable Architecture",
    description: "Our solutions are built to scale with your business, ensuring performance as transaction volumes grow.",
  },
  {
    id: 2,
    title: "Security-First Approach",
    description: "We implement multiple layers of security to protect sensitive financial data and transactions.",
  },
  {
    id: 3,
    title: "Cloud-Native Solutions",
    description: "Our cloud-based architecture ensures reliability, availability, and disaster recovery.",
  },
  {
    id: 4,
    title: "Modern User Experience",
    description: "Intuitive interfaces built with the latest frontend technologies for seamless user experience.",
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-16 md:py-24 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading font-bold text-3xl md:text-4xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technologies We Use
          </motion.h2>
          <motion.p 
            className="text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We leverage the latest technologies to deliver robust, scalable, and secure financial solutions.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              className="bg-white p-6 rounded-lg text-center h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              {tech.icon}
              <h3 className="font-heading font-bold text-lg text-secondary">{tech.name}</h3>
              <p className="text-foreground text-sm">{tech.category}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="bg-white text-foreground p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-heading font-bold text-2xl text-secondary mb-6 text-center">Why Choose Our Technology Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.id}
                className="flex items-start"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-accent mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-2xl">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-secondary mb-2">{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
