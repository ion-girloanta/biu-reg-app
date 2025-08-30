import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

export const Header: React.FC = () => {
  const { t, isRTL, changeLanguage, language } = useTranslation();
  
  return (
    <header className="biu-header py-6 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
          <div className="flex items-center">
            {/* Bar-Ilan Logo Placeholder */}
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center ml-4">
              <div className="w-12 h-12 bg-biu-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">BIU</span>
              </div>
            </div>
            <div className={isRTL ? 'mr-4' : 'ml-4'}>
              <h1 className="text-2xl font-bold">{t('siteTitle')}</h1>
              <span className="text-biu-gold text-sm">{t('siteSubtitle')}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <nav className={`flex ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
            {/* Navigation items from Figma */}
            <button className="hover:text-biu-gold transition-colors font-medium">
              שמור לאחר כך
            </button>
            <button className="hover:text-biu-gold transition-colors font-medium">
              התחלה מחדש
            </button>
            <button className="hover:text-biu-gold transition-colors font-medium">
              יציאה
            </button>
          </nav>
          
          {/* Language Toggle */}
          <button
            onClick={() => changeLanguage(language === 'he' ? 'en' : 'he')}
            className="px-3 py-1 bg-white bg-opacity-20 rounded-md text-sm font-medium hover:bg-opacity-30 transition-colors"
          >
            {language === 'he' ? 'EN' : 'עב'}
          </button>
        </div>
      </div>
    </header>
  );
};