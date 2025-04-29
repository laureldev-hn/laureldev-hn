import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  service: string;
  image: string;
  text: string;
}

// Testimonials data
const testimonials: Testimonial[] = [
  {
    name: "First Community Credit Union",
    service: "Mobile Banking Solution",
    image: "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    text: "\"LaurelDev transformed our outdated mobile banking experience into a modern, intuitive platform. Our customer satisfaction scores have increased by 47% and mobile engagement is up by 78% since implementation.\"",
  },
  {
    name: "Horizon Bank",
    service: "Security & Compliance",
    image: "https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    text: "\"Working with LaurelDev on our security infrastructure has given us peace of mind. Their comprehensive approach ensured we not only met all regulatory requirements but exceeded them.\"",
  },
  {
    name: "Pacific Trust Financial",
    service: "Data Analytics Platform",
    image: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80",
    text: "\"The data analytics solution provided by LaurelDev has been revolutionary for our business intelligence capabilities. We can now make data-driven decisions faster and with greater confidence.\"",
  },
];

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  // Stats data
  const stats = [
    { value: "25+", label: "Financial Institutions" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "5M+", label: "End Users Served" },
    { value: "68%", label: "Avg. Efficiency Increase" },
  ];

  return (
    <section id="success-stories" className="py-20 bg-primary text-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-secondary mb-4">Success Stories</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-secondary/80">
            See how we've helped financial institutions transform their digital presence and improve customer experiences.
          </p>
        </motion.div>
        
        {/* Testimonial Carousel */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="overflow-hidden">
            <motion.div 
              className="testimonial-card min-w-full px-4"
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-50 rounded-xl p-8 md:p-10 shadow-lg">
                <div className="flex items-center mb-6">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-montserrat font-bold text-lg text-secondary">{currentTestimonial.name}</h4>
                    <p className="text-gray-600">{currentTestimonial.service}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  {currentTestimonial.text}
                </p>
                <div className="flex text-primary">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-secondary hover:text-accent focus:outline-none -ml-4 hidden md:block" 
            onClick={handlePrevious}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-secondary hover:text-accent focus:outline-none -mr-4 hidden md:block" 
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full mx-1 transition-colors ${index === currentIndex ? 'bg-secondary' : 'bg-secondary/30'}`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 bg-gray-50 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-4xl font-montserrat font-bold text-accent mb-2">{stat.value}</div>
              <p className="text-gray-700">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
