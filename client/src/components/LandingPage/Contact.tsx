import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Por favor, ingrese una dirección de correo electrónico válida" }),
  company: z.string().min(2, { message: "El nombre de la empresa debe tener al menos 2 caracteres" }),
  subject: z.string().min(3, { message: "El asunto debe tener al menos 3 caracteres" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Initialize form with default values
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    },
    mode: "onChange",
  });

  // Form submission handler
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "¡Tu mensaje ha sido enviado con éxito!",
        description: "¡Tu mensaje ha sido enviado con éxito!",
        duration: 5000,
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.",
        description: "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact information items
  const contactItems = [
    {
      icon: <MapPin className="text-secondary" />,
      title: "Nuestra Ubicación",
      content: "Goascorán, Valle",
    },
    {
      icon: <Mail className="text-secondary" />,
      title: "Correo Electrónico",
      content: "contact@laureldev.hn",
    },
    {
      icon: <Phone className="text-secondary" />,
      title: "Llámanos",
      content: "+504 3160-3102",
    },
  ];

  // Social media links
  const socialLinks = [
    { icon: <Linkedin className="text-xl text-white" />, url: "#" },
    { icon: <Twitter className="text-xl text-white" />, url: "#" },
    { icon: <Facebook className="text-xl text-white" />, url: "#" },
    { icon: <Instagram className="text-xl text-white" />, url: "#" },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-4">Ponte en Contacto</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Nos Encantaría Saber de Ti
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Nombre Completo</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Correo Electrónico</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Empresa</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-gray-700 font-medium block">Asunto</label>
                  <input 
                    type="text"
                    id="subject"
                    placeholder="Ingresa el asunto de tu mensaje"
                    value={form.getValues().subject}
                    onChange={(e) => form.setValue("subject", e.target.value, { shouldValidate: true })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {form.formState.errors.subject && (
                    <p className="text-sm font-medium text-destructive">{form.formState.errors.subject.message}</p>
                  )}
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Mensaje</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={4} 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-secondary text-secondary hover:text-white font-montserrat font-semibold py-6 rounded-lg transition-all"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-montserrat font-bold text-2xl mb-6">Ponte en Contacto</h3>
            
            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-montserrat font-semibold text-lg">{item.title}</h4>
                    <p className="text-gray-300 mt-1">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="font-montserrat font-bold text-2xl mb-6">Síguenos</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    className="flex items-center justify-center w-12 h-12 bg-[#f0290c] hover:bg-[#d32409] rounded-full transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;