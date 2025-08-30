import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import figmaAssets from '../utils/figmaAssets';

interface HeaderProps {
  onSaveLater?: () => void;
  onRestart?: () => void;
  onExit?: () => void;
}

export const FigmaHeader: React.FC<HeaderProps> = () => {

  const headerStyle: React.CSSProperties = {
    width: '100%',
    height: '72px',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '19px 19px',
    position: 'relative'
  };

  const logoContainerStyle: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    alignItems: 'center'
  };

  const logoStyle: React.CSSProperties = {
    width: '144px',
    height: '54px',
    backgroundColor: '#005136',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px'
  };

  return (
    <header style={headerStyle}>
      {/* Centered Logo */}
      <div style={logoContainerStyle}>
        <div style={logoStyle}>
          <img 
            src={figmaAssets.ASSETS.MAIN_LOGO} 
            alt="Bar Ilan University"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      </div>
    </header>
  );
};

export const FigmaActionsMenu: React.FC<HeaderProps> = ({ 
  onSaveLater, 
  onRestart, 
  onExit 
}) => {
  const { changeLanguage, language } = useTranslation();

  const actionsMenuStyle: React.CSSProperties = {
    width: '100%',
    height: '64px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '19px 70px',
    boxShadow: '0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 4px 6px -1px rgba(0, 0, 0, 0.08)',
    position: 'relative',
    zIndex: 10
  };

  const menuButtonsStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '26px'
  };

  const buttonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '6px',
    transition: 'all 0.2s ease',
    fontFamily: 'inherit',
    fontSize: '16px',
    fontWeight: 500,
    color: '#01691B',
  };

  const arrowStyle: React.CSSProperties = {
    width: '26px',
    height: '26px',
    backgroundColor: '#00281B',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '14px'
  };

  const iconStyle: React.CSSProperties = {
    width: '19px',
    height: '19px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div style={actionsMenuStyle}>
      <div style={menuButtonsStyle}>
        <button 
          style={buttonStyle}
          onClick={onExit}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f9ff'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <span>יציאה</span>
          <div style={iconStyle}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16,17 21,12 16,7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
          </div>
        </button>

        <button 
          style={buttonStyle}
          onClick={onRestart}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f9ff'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <span>התחלה מחדש</span>
          <div style={iconStyle}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="1,4 1,10 7,10"/>
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
            </svg>
          </div>
        </button>

        <button 
          style={buttonStyle}
          onClick={onSaveLater}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f9ff'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <span>שמור לאחר כך</span>
          <div style={iconStyle}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
              <polyline points="17,21 17,13 7,13 7,21"/>
              <polyline points="7,3 7,8 15,8"/>
            </svg>
          </div>
        </button>

        <button 
          style={buttonStyle}
          onClick={() => changeLanguage(language === 'he' ? 'en' : 'he')}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f9ff'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <span>{language === 'he' ? 'En' : 'עב'}</span>
        </button>
      </div>

      <div style={arrowStyle}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
        </svg>
      </div>
    </div>
  );
};