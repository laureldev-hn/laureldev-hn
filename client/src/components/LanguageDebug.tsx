import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const LanguageDebug: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50">
      <h3 className="font-bold mb-2">Language Debug</h3>
      <p>Current language: {language}</p>
      <p>Test translation: {t('nav.about')}</p>
      <div className="flex space-x-2 mt-2">
        <button 
          onClick={() => setLanguage('en')} 
          className={`px-2 py-1 rounded ${language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          English
        </button>
        <button 
          onClick={() => setLanguage('es')} 
          className={`px-2 py-1 rounded ${language === 'es' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Spanish
        </button>
      </div>
    </div>
  );
};

export default LanguageDebug;
