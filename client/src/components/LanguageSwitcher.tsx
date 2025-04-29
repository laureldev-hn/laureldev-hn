import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from './ui/button';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <Button 
      variant="outline" 
      size="sm"
      onClick={toggleLanguage}
      className="rounded-full bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-white"
    >
      {language === 'en' ? 'ES' : 'EN'}
    </Button>
  );
};

export default LanguageSwitcher;
