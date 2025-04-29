import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define supported languages
export type Language = 'en' | 'es';

// Define the context structure
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

// Define translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.successStories': 'Success Stories',
    'nav.whyChooseUs': 'Why Choose Us',
    'nav.contactUs': 'Contact Us',
    
    // Hero
    'hero.title': 'Transforming Financial Institutions',
    'hero.subtitle': 'We build innovative software solutions for credit unions and cooperative organizations.',
    'hero.cta': 'Discover Our Solutions',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'Building the Future of Financial Technology',
    'about.description': 'LaurelDev is a leading technology company specializing in creating custom software solutions for financial institutions. With over 10 years of industry experience, we have helped credit unions and cooperative organizations modernize their systems, improve member experiences, and stay ahead in the digital age.',
    'about.mission': 'Our mission is to empower financial institutions with innovative technology that enhances their operations and provides exceptional value to their members.',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive Solutions for Financial Institutions',
    'services.mobileBanking.title': 'Mobile Banking Solutions',
    'services.mobileBanking.description': 'Custom mobile applications that provide seamless banking experiences for your customers, with features like mobile check deposit, account management, and secure transactions.',
    'services.security.title': 'Security & Compliance',
    'services.security.description': 'Robust security solutions that protect sensitive financial data while ensuring compliance with industry regulations and standards like PCI DSS and GDPR.',
    'services.dataAnalytics.title': 'Data Analytics',
    'services.dataAnalytics.description': 'Advanced analytics tools that transform raw financial data into actionable insights, helping you make data-driven decisions and identify growth opportunities.',
    'services.payments.title': 'Payment Processing',
    'services.payments.description': 'Streamlined payment solutions that support various transaction methods, from traditional credit and debit cards to emerging payment technologies.',
    'services.ai.title': 'AI & Machine Learning',
    'services.ai.description': 'Innovative AI solutions for fraud detection, customer service automation, personalized banking experiences, and intelligent financial insights.',
    'services.customDev.title': 'Custom Development',
    'services.customDev.description': 'Tailored software solutions designed specifically for your institution\'s unique needs, ensuring perfect alignment with your business objectives.',
    'services.learnMore': 'Learn More',
    
    // Success Stories
    'success.title': 'Success Stories',
    'success.subtitle': 'Trusted by Leading Financial Institutions',
    
    // Technologies
    'tech.title': 'Technologies We Use',
    'tech.subtitle': 'Cutting-edge Tools & Frameworks',
    
    // Why Choose Us
    'why.title': 'Why Choose Us',
    'why.subtitle': 'What Sets Us Apart',
    'why.expertise.title': 'Industry Expertise',
    'why.expertise.description': 'Specialized knowledge in financial technology and credit union operations.',
    'why.custom.title': 'Custom Solutions',
    'why.custom.description': 'Tailored software development to meet your specific needs and goals.',
    'why.security.title': 'Security First',
    'why.security.description': 'Robust security practices and compliance with financial regulations.',
    'why.support.title': '24/7 Support',
    'why.support.description': 'Dedicated team providing continuous support and maintenance.',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'We Would Love to Hear from You',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.company': 'Company',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',
    'contact.success': 'Your message has been sent successfully!',
    'contact.error': 'There was an error sending your message. Please try again.',
    
    // Footer
    'footer.rights': 'Copyright 2025 LaurelDev. All rights reserved.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.about': 'About Us',
    'footer.whyUs': 'Why Choose Us',
    'footer.stories': 'Success Stories',
    'footer.careers': 'Careers',
    'footer.blog': 'Blog',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    'footer.security': 'Security',
    'footer.compliance': 'Compliance',
    'footer.sitemap': 'Sitemap',
    'footer.tagline': 'Transforming financial institutions through innovative technology solutions.',
  },
  es: {
    // Navbar
    'nav.about': 'Sobre Nosotros',
    'nav.services': 'Servicios',
    'nav.successStories': 'Casos de Exito',
    'nav.whyChooseUs': 'Por Que Elegirnos?',
    'nav.contactUs': 'Contactanos',
    
    // Hero
    'hero.title': 'Transformando Instituciones Financieras',
    'hero.subtitle': 'Desarrollamos soluciones innovadoras para cooperativas y organizaciones financieras.',
    'hero.cta': 'Descubre Nuestras Soluciones',
    
    // About
    'about.title': 'Sobre Nosotros',
    'about.subtitle': 'Construyendo el Futuro de la Tecnología Financiera',
    'about.description': 'LaurelDev es una empresa líder en tecnología especializada en crear soluciones de software personalizadas para instituciones financieras. Con más de 10 años de experiencia en la industria, hemos ayudado a cooperativas y organizaciones financieras a modernizar sus sistemas, mejorar la experiencia de sus miembros y mantenerse a la vanguardia en la era digital.',
    'about.mission': 'Nuestra misión es potenciar a las instituciones financieras con tecnología innovadora que mejore sus operaciones y proporcione un valor excepcional a sus miembros.',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones Integrales para Instituciones Financieras',
    'services.mobileBanking.title': 'Soluciones de Banca Móvil',
    'services.mobileBanking.description': 'Aplicaciones móviles personalizadas que proporcionan experiencias bancarias fluidas para sus clientes, con funciones como depósito de cheques móviles, gestión de cuentas y transacciones seguras.',
    'services.security.title': 'Seguridad y Cumplimiento',
    'services.security.description': 'Soluciones de seguridad robustas que protegen datos financieros sensibles y garantizan el cumplimiento de las regulaciones y estándares de la industria como PCI DSS y GDPR.',
    'services.dataAnalytics.title': 'Análisis de Datos',
    'services.dataAnalytics.description': 'Herramientas de análisis avanzadas que transforman datos financieros brutos en información procesable, ayudándole a tomar decisiones basadas en datos e identificar oportunidades de crecimiento.',
    'services.payments.title': 'Procesamiento de Pagos',
    'services.payments.description': 'Soluciones de pago optimizadas que admiten varios métodos de transacción, desde tarjetas de crédito y débito tradicionales hasta tecnologías de pago emergentes.',
    'services.ai.title': 'IA y Aprendizaje Automático',
    'services.ai.description': 'Soluciones innovadoras de IA para detección de fraudes, automatización del servicio al cliente, experiencias bancarias personalizadas e información financiera inteligente.',
    'services.customDev.title': 'Desarrollo Personalizado',
    'services.customDev.description': 'Soluciones de software a medida diseñadas específicamente para las necesidades únicas de su institución, asegurando una alineación perfecta con sus objetivos comerciales.',
    'services.learnMore': 'Más Información',
    
    // Success Stories
    'success.title': 'Casos de Éxito',
    'success.subtitle': 'Confiado por Instituciones Financieras Líderes',
    
    // Technologies
    'tech.title': 'Tecnologías que Utilizamos',
    'tech.subtitle': 'Herramientas y Frameworks de Vanguardia',
    
    // Why Choose Us
    'why.title': '¿Por Qué Elegirnos?',
    'why.subtitle': 'Qué Nos Distingue',
    'why.expertise.title': 'Experiencia en la Industria',
    'why.expertise.description': 'Conocimiento especializado en tecnología financiera y operaciones de cooperativas.',
    'why.custom.title': 'Soluciones Personalizadas',
    'why.custom.description': 'Desarrollo de software a medida para satisfacer sus necesidades y objetivos específicos.',
    'why.security.title': 'Seguridad Primero',
    'why.security.description': 'Prácticas de seguridad robustas y cumplimiento de las regulaciones financieras.',
    'why.support.title': 'Soporte 24/7',
    'why.support.description': 'Equipo dedicado que proporciona soporte y mantenimiento continuos.',
    
    // Contact
    'contact.title': 'Ponte en Contacto',
    'contact.subtitle': 'Nos Encantaría Saber de Ti',
    'contact.name': 'Nombre Completo',
    'contact.email': 'Correo Electrónico',
    'contact.phone': 'Número de Teléfono',
    'contact.company': 'Empresa',
    'contact.message': 'Mensaje',
    'contact.submit': 'Enviar Mensaje',
    'contact.success': '¡Tu mensaje ha sido enviado con éxito!',
    'contact.error': 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.',
    
    // Footer
    'footer.rights': 'Copyright 2025 LaurelDev. Todos los derechos reservados.',
    'footer.services': 'Servicios',
    'footer.company': 'Empresa',
    'footer.legal': 'Legal',
    'footer.about': 'Sobre Nosotros',
    'footer.whyUs': '¿Por Qué Elegirnos?',
    'footer.stories': 'Casos de Éxito',
    'footer.careers': 'Carreras',
    'footer.blog': 'Blog',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.cookies': 'Política de Cookies',
    'footer.security': 'Seguridad',
    'footer.compliance': 'Cumplimiento',
    'footer.sitemap': 'Mapa del Sitio',
    'footer.tagline': 'Transformando instituciones financieras a través de soluciones tecnológicas innovadoras.',
  },
};

// Provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Get saved language from localStorage or use browser language or default to 'en'
  const getInitialLanguage = (): Language => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'es'].includes(savedLanguage)) {
      return savedLanguage;
    }
    
    const browserLang = navigator.language.substring(0, 2);
    return browserLang === 'es' ? 'es' : 'en';
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext);
