import React, { useState } from 'react';
import figmaAssets from '../utils/figmaAssets';

interface DegreeOption {
  id: string;
  title: string;
  icon: string;
  selected?: boolean;
}

const SelectDegree: React.FC = () => {
  const [selectedDegree, setSelectedDegree] = useState<string>('bachelor');

  const degreeOptions: DegreeOption[] = [
    {
      id: 'bachelor',
      title: 'תואר ראשון',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/e73a70b2b2fee4d15bf5e05bedd1140bd4163fc2?width=600',
      selected: true
    },
    {
      id: 'master',
      title: 'תואר שני',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/49e15ed351fa5d537af50b1a49d7a421f8e36705?width=600'
    },
    {
      id: 'doctorate',
      title: 'תואר שלישי',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/89d2bbed6cf8e35c5a5f43637d7a07d5bd8dac89?width=600'
    },
    {
      id: 'medicine',
      title: 'רפואה',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/cea97cc3778d4d4647bda36f2d27a488a0eeb6bb?width=176'
    },
    {
      id: 'teaching',
      title: 'תעודת הוראה',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/61291244b095542f3760335b92747a6d136be424?width=176'
    },
    {
      id: 'preparatory',
      title: 'מכינה',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/c1afa950642d319f1270c34617f78fcb0b0a8d48?width=176'
    }
  ];

  const progressSteps = [
    { name: 'בחירת לימודים', active: true },
    { name: 'פרטים אישיים', active: false },
    { name: 'פרטים נוספים', active: false },
    { name: 'תשלום מקדמה', active: false },
    { name: 'סיום', active: false }
  ];

  return (
    <div className="w-screen h-screen bg-white overflow-hidden flex flex-col" dir="rtl">
      {/* Header */}
      <header className="w-full">
        {/* Logo Section */}
        <div className="flex justify-start items-center pt-6 pr-6 pb-0 pl-6">
          <div className="w-[180px] h-[67px]">
            <img
              src={figmaAssets.ASSETS.MAIN_LOGO}
              alt="Bar Ilan University Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Actions Menu */}
        <div className="bg-white shadow-md border-b border-gray-100">
          <div className="flex justify-between items-center px-[88px] py-6 max-w-[1920px] mx-auto">
            <div className="flex items-center gap-[32px]">
              {/* Menu Items */}
              <button className="flex items-center gap-[10px] text-biu-green hover:text-biu-green/80 transition-colors">
                <span className="text-xl font-medium">יציאה</span>
                <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 17.9429L21 12.9429M16 7.94287L18 9.94287" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12.9429H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 21.9429H5C4.46957 21.9429 3.96086 21.7322 3.58579 21.3571C3.21071 20.982 3 20.4733 3 19.9429V5.94287C3 5.41244 3.21071 4.90373 3.58579 4.52866C3.96086 4.15358 4.46957 3.94287 5 3.94287H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button className="flex items-center gap-[10px] text-biu-green hover:text-biu-green/80 transition-colors">
                <span className="text-xl font-medium">התחלה מחדש</span>
                <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 23.9429L6 22.9429M7 15.9429L3 19.9429H17C18.0609 19.9429 19.0783 19.5214 19.8284 18.7713C20.5786 18.0212 21 17.0037 21 15.9429V13.9429M17 1.94287L21 5.94287H7C5.93913 5.94287 4.92172 6.3643 4.17157 7.11444C3.42143 7.86459 3 8.88201 3 9.94287V11.9429M17 9.94287L18 8.94287" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button className="flex items-center gap-[10px] text-biu-green hover:text-biu-green/80 transition-colors">
                <span className="text-xl font-medium">שמור לאחר כך</span>
                <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.58579 4.52866C3.21071 4.90373 3 5.41244 3 5.94287V19.9429C3 20.4733 3.21071 20.982 3.58579 21.3571C3.96086 21.7322 4.46957 21.9429 5 21.9429H17V13.9429H7V18.9429M20.4142 21.3571C20.7893 20.982 21 20.4733 21 19.9429V8.94287L16 3.94287H7V8.94287H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button className="flex items-center gap-[10px] text-biu-green hover:text-biu-green/80 transition-colors">
                <span className="text-xl font-medium">En</span>
              </button>
            </div>

            {/* Arrow Button */}
            <button className="p-2 rounded-full">
              <svg width="32" height="32" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.33398 16.943C5.33398 16.2067 5.93094 15.6097 6.66732 15.6097H25.334C26.0704 15.6097 26.6673 16.2067 26.6673 16.943C26.6673 17.6794 26.0704 18.2764 25.334 18.2764H6.66732C5.93094 18.2764 5.33398 17.6794 5.33398 16.943Z" fill="#00280F"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M15.0578 6.66689C15.5785 6.14619 16.4228 6.14619 16.9435 6.66689L26.2768 16.0002C26.7975 16.5209 26.7975 17.3651 26.2768 17.8858L16.9435 27.2192C16.4228 27.7399 15.5785 27.7399 15.0578 27.2192C14.5371 26.6985 14.5371 25.8543 15.0578 25.3336L23.4484 16.943L15.0578 8.55251C14.5371 8.03181 14.5371 7.18759 15.0578 6.66689Z" fill="#00280F"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-end items-start px-[88px] py-6 bg-white border-b border-[#C3CCD6]">
          <div className="flex gap-0 h-9">
            {progressSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-end gap-2 min-w-[259.6px]">
                <div className={`self-stretch text-right font-hebrew text-xl ${step.active ? 'font-bold text-black' : 'font-normal text-black'}`}>
                  {step.name}
                </div>
                <div className={`h-1 self-stretch ${step.active ? 'bg-biu-green' : 'bg-biu-light-green'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 overflow-hidden">
        {/* Content Area */}
        <div className="flex-1 flex flex-col px-[88px] py-[88px] border-t border-[#C3CCD6]">
          {/* Title */}
          <div className="flex justify-center items-center mb-20">
            <h1 className="text-[64px] font-bold text-black text-center font-hebrew">
              מה לומדים?
            </h1>
          </div>

          {/* Degree Options Grid */}
          <div className="flex justify-center items-center flex-wrap gap-8 mb-20">
            {degreeOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedDegree(option.id)}
                className={`flex flex-col items-center gap-6 min-w-[300px] px-8 py-4 rounded-3xl bg-white shadow-lg transition-all hover:shadow-xl ${
                  selectedDegree === option.id ? 'ring-4 ring-biu-green' : ''
                }`}
                style={{boxShadow: '0 8px 12px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -2px rgba(0, 0, 0, 0.06)'}}
              >
                <div className="flex items-center justify-center gap-6 w-full">
                  <div className="flex-1 text-xl text-[#00280F] text-center font-hebrew">
                    {option.title}
                  </div>
                  <img
                    src={option.icon}
                    alt={option.title}
                    className="w-[88px] h-[88px] object-contain"
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Continue Button */}
          <div className="flex justify-center">
            <button className="flex justify-center items-center gap-2 px-6 py-4 bg-biu-green text-white text-xl font-medium font-hebrew hover:bg-biu-green/90 transition-colors min-w-[120px]">
              המשך
            </button>
          </div>
        </div>

        {/* Illustration */}
        <div className="w-[641px] h-full flex items-center justify-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f77a63d996ac6305b4e2a1c93eacad3f88caeee8?width=1282"
            alt="University illustration"
            className="w-full h-auto max-h-[871px] object-contain"
          />
        </div>
      </main>
    </div>
  );
};

export default SelectDegree;
