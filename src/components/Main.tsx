import React from 'react';
import ContentContainer from './ContentContainer';

interface MainProps {
  title: string;
  subtitle: string;
}

const Main: React.FC<MainProps> = ({ title, subtitle }) => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center px-6 lg:px-12 py-8">
      <ContentContainer title={title} subtitle={subtitle} />
    </div>
  );
};

export default Main;
