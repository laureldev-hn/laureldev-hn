import { motion } from "framer-motion";

// Testimonial data
const testimonials = [
  {
    id: 1,
    text: "LaurelDev's mobile banking solution increased our customer engagement by 45% within just three months of deployment. Their attention to user experience and security is unmatched.",
    name: "Michael Chen",
    title: "CTO, Pacific Northwest Credit Union",
    initials: "MC",
  },
  {
    id: 2,
    text: "The security framework implemented by LaurelDev has given us peace of mind. Their team's expertise in regulatory compliance saved us countless hours and resources.",
    name: "Sarah Johnson",
    title: "CISO, Heartland Financial",
    initials: "SJ",
  },
  {
    id: 3,
    text: "Implementing LaurelDev's core banking solution was the best decision we made. Their team ensured a smooth transition from our legacy system with zero downtime.",
    name: "David Peterson",
    title: "CEO, Community First Bank",
    initials: "DP",
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white bg-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading font-bold text-3xl md:text-4xl text-secondary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Success Stories
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hear from our clients about how LaurelDev has transformed their financial technology infrastructure.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-8 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="absolute -top-4 left-8 text-6xl text-primary opacity-20">"</div>
              <div className="mb-6">
                <p className="text-foreground italic relative z-10">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-secondary font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-secondary">{testimonial.name}</h4>
                  <p className="text-sm text-foreground">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.a 
            href="#contact" 
            className="inline-block bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-secondary transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Become Our Next Success Story
          </motion.a>
        </div>
      </div>
    </section>
  );
}
