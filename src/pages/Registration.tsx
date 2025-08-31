import React from 'react';
import LogoOnly from '../components/LogoOnly';
import ActionMenu from '../components/ActionMenu';
import Main from '../components/Main';
import PlaceholderImage from '../components/PlaceholderImage';

const Registration: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-hebrew" dir="rtl">
      {/* Header */}
      <header className="w-full">
        <LogoOnly />
        <ActionMenu />
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">
        <Main 
          title="הדרך שלך לאוניברסיטה מתחילה כאן"
          subtitle="ברוכים הבאים להרשמה!&#10;לפני שמתחילים, הנה כמה דברים שרצינו לספר לך"
        />
        <PlaceholderImage />
      </div>
    </div>
  );
};

export default Registration;
