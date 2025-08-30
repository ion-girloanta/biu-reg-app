import React from 'react';
import figmaStructure from '../data/figma-structure.json';
import figmaAssets, { getImageFromElement, hasImageFill } from '../utils/figmaAssets';

interface FigmaElement {
  name: string;
  type: string;
  id?: string;
  absoluteBoundingBox?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  background?: {
    type: string;
    color?: {
      r: number;
      g: number;
      b: number;
      a: number;
    };
  };
  fills?: Array<{
    type: string;
    color?: {
      r: number;
      g: number;
      b: number;
      a: number;
    };
  }>;
  style?: {
    fontFamily?: string;
    fontWeight?: number;
    fontSize?: number;
    lineHeight?: number;
    textAlign?: string;
  };
  characters?: string;
  children?: FigmaElement[];
  padding?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
  effects?: Array<{
    type: string;
    color: {
      r: number;
      g: number;
      b: number;
      a: number;
    };
    offset: {
      x: number;
      y: number;
    };
    radius: number;
    spread?: number;
  }>;
}

const FigmaPageTemplate: React.FC = () => {
  const convertColor = (color: { r: number; g: number; b: number; a: number }) => {
    return `rgba(${Math.round(color.r * 255)}, ${Math.round(color.g * 255)}, ${Math.round(color.b * 255)}, ${color.a})`;
  };

  const convertBounds = (bounds: { x: number; y: number; width: number; height: number }) => {
    // Convert Figma coordinates to CSS (Figma uses negative Y, we need positive)
    // Scale down the coordinates to fit typical screen sizes
    const scale = 0.8; // Adjust this scale factor as needed
    return {
      width: Math.round(bounds.width * scale),
      height: Math.round(bounds.height * scale),
      // Position relative to the root frame
      left: Math.round((bounds.x - 25717) * scale), // 25717 is the root frame x
      top: Math.round((bounds.y + 7523) * scale) // +7523 because Figma Y is negative
    };
  };

  const getShadowStyle = (effects: FigmaElement['effects']) => {
    if (!effects || effects.length === 0) return '';
    
    return effects
      .filter(effect => effect.type === 'DROP_SHADOW')
      .map(effect => {
        const color = convertColor(effect.color);
        return `${effect.offset.x}px ${effect.offset.y}px ${effect.radius}px ${effect.spread || 0}px ${color}`;
      })
      .join(', ');
  };

  const renderElement = (element: FigmaElement, isRoot: boolean = false): JSX.Element => {
    const bounds = element.absoluteBoundingBox;
    const style: React.CSSProperties = {};

    if (bounds && !isRoot) {
      const convertedBounds = convertBounds(bounds);
      style.position = 'absolute';
      style.left = convertedBounds.left;
      style.top = convertedBounds.top;
      style.width = convertedBounds.width;
      style.height = convertedBounds.height;
    } else if (isRoot && bounds) {
      const convertedBounds = convertBounds(bounds);
      style.width = convertedBounds.width;
      style.height = convertedBounds.height;
      style.position = 'relative';
      style.margin = '0 auto';
    }

    // Background color
    if (element.background?.color) {
      style.backgroundColor = convertColor(element.background.color);
    }

    // Text styles
    if (element.style) {
      if (element.style.fontFamily) style.fontFamily = element.style.fontFamily;
      if (element.style.fontWeight) style.fontWeight = element.style.fontWeight;
      if (element.style.fontSize) style.fontSize = `${element.style.fontSize * 0.8}px`; // Scale down font
      if (element.style.lineHeight) style.lineHeight = `${element.style.lineHeight * 0.8}px`;
      if (element.style.textAlign) style.textAlign = element.style.textAlign as any;
    }

    // Text color from fills
    if (element.fills && element.fills[0]?.color) {
      style.color = convertColor(element.fills[0].color);
    }

    // Padding
    if (element.padding) {
      const p = element.padding;
      style.padding = `${(p.top || 0) * 0.8}px ${(p.right || 0) * 0.8}px ${(p.bottom || 0) * 0.8}px ${(p.left || 0) * 0.8}px`;
    }

    // Shadow effects
    if (element.effects && element.effects.length > 0) {
      const boxShadow = getShadowStyle(element.effects);
      if (boxShadow) style.boxShadow = boxShadow;
    }

    // Special styling for specific elements
    if (element.name === 'actionsMenu') {
      style.display = 'flex';
      style.justifyContent = 'space-between';
      style.alignItems = 'center';
      style.backgroundColor = 'white';
      style.zIndex = 10;
      style.borderRadius = '0px';
    }

    if (element.name === 'menuButtons') {
      style.display = 'flex';
      style.alignItems = 'center';
      style.gap = '32px';
    }

    if (element.name.includes('Button')) {
      style.display = 'flex';
      style.alignItems = 'center';
      style.gap = '10px';
      style.cursor = 'pointer';
      style.transition = 'all 0.2s ease';
      style.border = 'none';
      style.backgroundColor = 'transparent';
    }

    if (element.name === 'header') {
      style.display = 'flex';
      style.justifyContent = 'center';
      style.alignItems = 'center';
      style.position = 'relative';
    }

    if (element.name === 'logoContainer') {
      style.display = 'flex';
      style.justifyContent = 'flex-end';
      style.alignItems = 'center';
    }

    if (element.name === 'logo') {
      style.backgroundColor = '#005136';
      style.borderRadius = '8px';
      style.display = 'flex';
      style.alignItems = 'center';
      style.justifyContent = 'center';
      style.color = 'white';
      style.fontWeight = 'bold';
      style.fontSize = '18px';
    }

    if (element.name === 'contentContainer') {
      style.display = 'flex';
      style.justifyContent = 'center';
      style.alignItems = 'center';
      style.flexDirection = 'column';
    }

    if (element.name === 'arrowRight') {
      style.backgroundColor = '#00281B';
      style.borderRadius = '50%';
      style.display = 'flex';
      style.alignItems = 'center';
      style.justifyContent = 'center';
      style.color = 'white';
    }

    if (element.name === 'CTA') {
      style.backgroundColor = '#01691B';
      style.borderRadius = '8px';
      style.display = 'flex';
      style.alignItems = 'center';
      style.justifyContent = 'center';
      style.cursor = 'pointer';
      style.transition = 'all 0.2s ease';
      style.border = 'none';
    }

    if (element.name === 'contentBody') {
      style.display = 'flex';
      style.flexDirection = 'column';
      style.alignItems = 'center';
      style.gap = '32px';
    }

    if (element.name === 'cards') {
      style.display = 'flex';
      style.flexDirection = 'row';
      style.gap = '32px';
      style.alignItems = 'center';
      style.justifyContent = 'center';
    }

    if (element.name.startsWith('card')) {
      style.backgroundColor = 'white';
      style.borderRadius = '12px';
      style.padding = '24px';
      style.display = 'flex';
      style.flexDirection = 'column';
      style.alignItems = 'center';
      style.justifyContent = 'center';
    }

    if (element.name === 'language') {
      style.display = 'flex';
      style.alignItems = 'center';
      style.justifyContent = 'center';
      style.gap = '16px';
    }

    // Determine the HTML element type and content
    let ElementType: keyof JSX.IntrinsicElements = 'div';
    let content: React.ReactNode = null;

    // Check for images first
    if (hasImageFill(element)) {
      const imageUrl = getImageFromElement(element);
      if (imageUrl) {
        content = (
          <img 
            src={imageUrl} 
            alt={element.name}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        );
      }
    } else if (element.type === 'TEXT') {
      ElementType = element.characters?.includes('הדרך שלך') ? 'h1' : 'span';
      content = element.characters;
    } else if (element.name === 'logo' && element.type === 'INSTANCE') {
      // Fallback for logo using asset manager
      const logoAsset = figmaAssets.getAssetByName('main logo');
      content = (
        <img 
          src={logoAsset || figmaAssets.ASSETS.MAIN_LOGO} 
          alt="Bar Ilan University Logo" 
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      );
    } else if (element.name === 'arrowRight') {
      content = (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
        </svg>
      );
    } else if (element.name === 'CTA') {
      ElementType = 'button';
      content = 'התחל הרשמה';
    } else if (element.name.startsWith('card')) {
      content = (
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: '#005136' }}>
            {element.name === 'card1' ? 'מילוי פרטים' : 
             element.name === 'card2' ? 'העלאת מסמכים' : 
             'אישור הרשמה'}
          </h3>
          <p style={{ fontSize: '14px', color: '#666', textAlign: 'center' }}>
            {element.name === 'card1' ? 'השלימו את הפרטים הנדרשים' : 
             element.name === 'card2' ? 'העלו את המסמכים הנדרשים' : 
             'קבלו אישור הרשמה'}
          </p>
        </div>
      );
    }

    return (
      <ElementType
        key={element.id || element.name}
        style={style}
        className={`figma-${element.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
      >
        {content}
        {element.children?.map((child) => renderElement(child))}
      </ElementType>
    );
  };

  return (
    <div className="figma-page-template">
      {renderElement(figmaStructure as FigmaElement, true)}
    </div>
  );
};

export default FigmaPageTemplate;