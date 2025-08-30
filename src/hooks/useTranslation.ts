import { useState } from 'react';
import { translations } from '../utils/translations';

type Language = 'he' | 'en';
// type TranslationKey = keyof typeof translations.he;

export const useTranslation = (defaultLang: Language = 'he') => {
  const [language, setLanguage] = useState<Language>(defaultLang);
  
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if Hebrew translation missing
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if translation missing
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
  
  const changeLanguage = (newLang: Language) => {
    setLanguage(newLang);
    document.documentElement.dir = newLang === 'he' ? 'rtl' : 'ltr';
  };
  
  return {
    t,
    language,
    changeLanguage,
    isRTL: language === 'he'
  };
};