import React from 'react';
import { useNavigate } from 'react-router-dom';

const ActionMenu: React.FC = () => {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/');
  };

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <div className="flex justify-between items-center px-6 lg:px-22 py-6 bg-white shadow-md">
      <div className="flex items-center gap-8">
        <button
          onClick={handleExit}
          className="flex items-center gap-2 text-biu-green hover:opacity-80 transition-opacity"
        >
          <span className="text-lg">יציאה</span>
          <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 17.9429L21 12.9429M16 7.94287L18 9.94287" stroke="#016937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 12.9429H9" stroke="#016937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 21.9429H5C4.46957 21.9429 3.96086 21.7322 3.58579 21.3571C3.21071 20.982 3 20.4733 3 19.9429V5.94287C3 5.41244 3.21071 4.90373 3.58579 4.52866C3.96086 4.15358 4.46957 3.94287 5 3.94287H9" stroke="#016937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button
          onClick={handleRestart}
          className="flex items-center gap-2 text-biu-green hover:opacity-80 transition-opacity"
        >
          <span className="text-lg">התחלה מחדש</span>
          <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 23.9429L6 22.9429M7 15.9429L3 19.9429H17C18.0609 19.9429 19.0783 19.5214 19.8284 18.7713C20.5786 18.0212 21 17.0037 21 15.9429V13.9429M17 1.94287L21 5.94287H7C5.93913 5.94287 4.92172 6.3643 4.17157 7.11444C3.42143 7.86459 3 8.88201 3 9.94287V11.9429M17 9.94287L18 8.94287" stroke="#016937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button className="flex items-center gap-2 text-biu-green hover:opacity-80 transition-opacity">
          <span className="text-lg">שמור לאחר כך</span>
          <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.58579 4.52866C3.21071 4.90373 3 5.41244 3 5.94287V19.9429C3 20.4733 3.21071 20.982 3.58579 21.3571C3.96086 21.7322 4.46957 21.9429 5 21.9429H17V13.9429H7V18.9429M20.4142 21.3571C20.7893 20.982 21 20.4733 21 19.9429V8.94287L16 3.94287H7V8.94287H15" stroke="#016937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button className="text-biu-green text-lg hover:opacity-80 transition-opacity">
          En
        </button>
      </div>

      <div className="w-8 h-8 bg-biu-dark-green rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
        <svg width="16" height="16" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.33398 16.943C5.33398 16.2067 5.93094 15.6097 6.66732 15.6097H25.334C26.0704 15.6097 26.6673 16.2067 26.6673 16.943C26.6673 17.6794 26.0704 18.2764 25.334 18.2764H6.66732C5.93094 18.2764 5.33398 17.6794 5.33398 16.943Z" fill="#00280F"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M15.0578 6.66689C15.5785 6.14619 16.4228 6.14619 16.9435 6.66689L26.2768 16.0002C26.7975 16.5209 26.7975 17.3651 26.2768 17.8858L16.9435 27.2192C16.4228 27.7399 15.5785 27.7399 15.0578 27.2192C14.5371 26.6985 14.5371 25.8543 15.0578 25.3336L23.4484 16.943L15.0578 8.55251C14.5371 8.03181 14.5371 7.18759 15.0578 6.66689Z" fill="#00280F"/>
        </svg>
      </div>
    </div>
  );
};

export default ActionMenu;
