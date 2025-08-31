import React from 'react';

const PlaceholderImage: React.FC = () => {
  return (
    <div className="lg:w-1/2 flex justify-center items-center p-6">
      <div className="w-full max-w-lg">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/e6016cbf2a1db8a8e50cfa8c6dc4586b9829632e?width=1406" 
          alt="Registration illustration" 
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default PlaceholderImage;
