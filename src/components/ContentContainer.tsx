import React from 'react';
import ContentTitle from './ContentTitle';
import ContentBody from './ContentBody';

interface ContentContainerProps {
  title: string;
  subtitle: string;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ title, subtitle }) => {
  return (
    <div className="max-w-4xl w-full">
      <ContentTitle title={title} subtitle={subtitle} />
      <ContentBody />
    </div>
  );
};

export default ContentContainer;
