import { Link } from "wouter";
import { useLanguage } from "../../hooks/useLanguage";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  const getFooterLinks = () => ({
    services: [
      { name: t('services.mobileBanking.title'), href: "#services" },
      { name: t('services.security.title'), href: "#services" },
      { name: t('services.dataAnalytics.title'), href: "#services" },
      { name: t('services.payments.title'), href: "#services" },
      { name: t('services.ai.title'), href: "#services" },
    ],
    company: [
      { name: t('footer.about'), href: "#about" },
      { name: t('footer.whyUs'), href: "#why-us" },
      { name: t('footer.stories'), href: "#success-stories" },
      { name: t('footer.careers'), href: "#" },
      { name: t('footer.blog'), href: "#" },
    ],
    legal: [
      { name: t('footer.privacy'), href: "#" },
      { name: t('footer.terms'), href: "#" },
      { name: t('footer.cookies'), href: "#" },
      { name: t('footer.security'), href: "#" },
      { name: t('footer.compliance'), href: "#" },
    ],
  });
  
  const footerLinks = getFooterLinks();

  return (
    <footer className="bg-dark py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="inline-block mb-6">
              <img src="/logo_header_350w.png" alt="LaurelDev Logo" className="h-12 brightness-0 invert" />
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
            <h4 className="font-montserrat font-semibold text-white text-lg mb-6">{t('footer.legal')}</h4>
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
              {t('footer.rights')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary hover:text-primary transition-all">{t('footer.privacy')}</a>
              <a href="#" className="text-secondary hover:text-primary transition-all">{t('footer.terms')}</a>
              <a href="#" className="text-secondary hover:text-primary transition-all">{t('footer.sitemap')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
