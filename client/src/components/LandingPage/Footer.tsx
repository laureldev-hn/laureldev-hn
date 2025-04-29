import { Link } from "wouter";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  const footerLinks = {
    services: [
      { name: "Mobile Banking", href: "#services" },
      { name: "Security & Compliance", href: "#services" },
      { name: "Data Analytics", href: "#services" },
      { name: "Payment Processing", href: "#services" },
      { name: "AI & Machine Learning", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Why Choose Us", href: "#why-us" },
      { name: "Success Stories", href: "#success-stories" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Security", href: "#" },
      { name: "Compliance", href: "#" },
    ],
  };

  return (
    <footer className="bg-dark py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="inline-block mb-6">
              <img src="/logo-updated.png" alt="LaurelDev Logo" className="h-12 brightness-0 invert" />
            </a>
            <p className="text-gray-400 mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-all">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-all">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-all">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-white text-lg mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-all">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-white text-lg mb-6">{t('footer.company')}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-all">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-montserrat font-semibold text-white text-lg mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-all">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; 2025 LaurelDev. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary hover:text-primary transition-all">Privacy Policy</a>
              <a href="#" className="text-secondary hover:text-primary transition-all">Terms of Service</a>
              <a href="#" className="text-secondary hover:text-primary transition-all">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
