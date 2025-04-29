import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext);
