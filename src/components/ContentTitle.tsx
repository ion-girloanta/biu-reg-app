import React from 'react';

interface ContentTitleProps {
  title: string;
  subtitle: string;
}

const ContentTitle: React.FC<ContentTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl lg:text-6xl font-bold text-black mb-4 leading-tight">
        {title}
      </h1>
      <p className="text-xl lg:text-3xl text-biu-dark-green font-light max-w-4xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};

export default ContentTitle;
