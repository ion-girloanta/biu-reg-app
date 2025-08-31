import React, { useState, useEffect } from 'react';
import figmaAssets from '../utils/figmaAssets';

const FigmaPageTemplate: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<'hebrew' | 'english'>('hebrew');
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      const designWidth = 1920;
      const designHeight = 1418; // Increased from 1080 to account for full content height including CTA

      // Account for potential scrollbars and browser chrome
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Add some padding to prevent edge cutoff
      const paddingX = 20;
      const paddingY = 20;

      const availableWidth = viewportWidth - paddingX;
      const availableHeight = viewportHeight - paddingY;

      // Calculate scale to fit both dimensions
      const scaleX = availableWidth / designWidth;
      const scaleY = availableHeight / designHeight;

      // Use the smaller scale to ensure content fits completely, allow slight upscaling for small screens
      const newScale = Math.min(scaleX, scaleY, 1.0);

      // Ensure minimum readable scale but prioritize showing all content
      const finalScale = Math.max(newScale, 0.25);

      console.log('Zoom calculation:', { viewportWidth, viewportHeight, designHeight, scaleX, scaleY, finalScale });
      setScale(finalScale);
    };

    // Initial calculation
    calculateScale();

    // Debounced resize handler
    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(calculateScale, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-white overflow-hidden flex items-center justify-center" dir="rtl">
      <div
        className="w-[1920px] h-[1418px] origin-center relative"
        style={{
          transform: `scale(${scale})`,
          transition: 'transform 0.2s ease-out'
        }}
      >
      {/* Header */}
      <header className="w-full">
        {/* Logo Section */}
        <div className="flex justify-start items-center pt-6 pr-6 pb-0 pl-6 max-w-[1920px] mx-auto">
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
      </header>

      {/* Main Content */}
      <main className="flex flex-row max-w-[1920px] mx-auto min-h-[1080px]">
        {/* Right Side - Content (RTL first) */}
        <div className="w-[1131px] flex flex-col justify-center items-center px-8 py-24">
          <div className="w-full max-w-[955px]">
            {/* Content Container */}
            <div className="flex flex-col items-center gap-[48px] pt-[88px] min-h-[938px]">
              {/* Title Section */}
              <div className="flex flex-col justify-center items-center gap-[10px] text-center">
                <h1 className="text-[64px] font-bold text-black leading-normal font-hebrew">
                  הדרך שלך לאוניברסיטה מתחילה כאן
                </h1>
                <div className="max-w-[1099px]">
                  <p className="text-[36px] font-light text-[#00280F] leading-normal font-hebrew">
                    ברוכים הבאים להרשמה!<br />
                    לפני שמתחילים, הנה כמה דברים שרצינו לספר לך
                  </p>
                </div>
              </div>

              {/* Previous Registration CTA */}
              <div className="flex justify-center">
                <button className="flex items-center gap-2 px-6 py-3 border border-biu-green bg-white rounded-lg hover:bg-gray-50 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.25 7.9428H4.35125L7.076 4.6728C7.3415 4.3548 7.298 3.88155 6.98 3.6168C6.66125 3.3513 6.18875 3.3948 5.924 3.7128L2.174 8.2128C2.14475 8.24805 2.12975 8.2893 2.108 8.3283C2.09 8.3598 2.06825 8.3868 2.05475 8.4213C2.021 8.50755 2.00075 8.5983 2.00075 8.6898C2.00075 8.69055 2 8.69205 2 8.6928C2 8.69355 2.00075 8.69505 2.00075 8.6958C2.00075 8.7873 2.021 8.87805 2.05475 8.9643C2.06825 8.9988 2.09 9.0258 2.108 9.0573C2.12975 9.0963 2.14475 9.13755 2.174 9.1728L5.924 13.6728C6.0725 13.8506 6.2855 13.9428 6.5 13.9428C6.6695 13.9428 6.83975 13.8858 6.98 13.7688C7.298 13.5041 7.3415 13.0308 7.076 12.7128L4.35125 9.4428H13.25C13.664 9.4428 14 9.1068 14 8.6928C14 8.2788 13.664 7.9428 13.25 7.9428Z" fill="#016937"/>
                  </svg>
                  <span className="text-biu-green font-medium">נרשמת בעבר? לחץ/י כאן</span>
                </button>
              </div>

              {/* Info Cards */}
              <div className="flex flex-row gap-[32px] w-full max-w-[955px]">
                {/* Card 1 - Clock */}
                <div className="w-[484px] h-[217px] bg-[#F5FAF0] border border-[#DFE3F3] rounded-[16px] p-8" style={{boxShadow: '0 8px 12px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -2px rgba(0, 0, 0, 0.06)'}}>
                  <div className="flex items-start gap-[41px]">
                    <div className="flex-1">
                      <h3 className="text-[20px] font-bold text-black mb-6 leading-6 font-hebrew">כדאי להכין מראש</h3>
                      <p className="text-[20px] text-black leading-6 font-hebrew">צילום של תעודת הזהות.</p>
                    </div>
                    <div className="w-[68px] h-[68px] relative flex-shrink-0">
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center" style={{filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.08)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.04))'}}>
                        <svg width="53" height="53" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M26 5.44287C31.5695 5.44287 36.911 7.65536 40.8492 11.5936C44.7875 15.5319 47 20.8733 47 26.4429C47 32.0124 44.7875 37.3538 40.8492 41.2921C36.911 45.2304 31.5695 47.4429 26 47.4429C20.4305 47.4429 15.089 45.2304 11.1508 41.2921C7.21249 37.3538 5 32.0124 5 26.4429C5 20.8733 7.21249 15.5319 11.1508 11.5936C15.089 7.65536 20.4305 5.44287 26 5.44287ZM26 7.6534C21.0167 7.6534 16.2375 9.633 12.7138 13.1567C9.19013 16.6804 7.21053 21.4596 7.21053 26.4429C7.21053 31.4261 9.19013 36.2053 12.7138 39.729C16.2375 43.2527 21.0167 45.2323 26 45.2323C28.4675 45.2323 30.9108 44.7463 33.1904 43.8021C35.4701 42.8578 37.5414 41.4738 39.2862 39.729C41.0309 37.9843 42.4149 35.9129 43.3592 33.6333C44.3035 31.3536 44.7895 28.9103 44.7895 26.4429C44.7895 21.4596 42.8099 16.6804 39.2862 13.1567C35.7625 9.633 30.9833 7.6534 26 7.6534ZM24.8947 14.285H27.1053V26.266L37.4947 32.2566L36.3895 34.1797L24.8947 27.5481V14.285Z" fill="#016937"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Check */}
                <div className="w-[484px] h-[217px] bg-[#F5FAF0] border border-[#DFE3F3] rounded-[16px] p-8" style={{boxShadow: '0 8px 12px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -2px rgba(0, 0, 0, 0.06)'}}>
                  <div className="flex items-start gap-[41px]">
                    <div className="flex-1">
                      <h3 className="text-[20px] font-bold text-black mb-6 leading-6 font-hebrew">כדאי לדעת</h3>
                      <p className="text-[20px] text-black leading-6 font-hebrew">במקרה של ביטול רישום – ניתן לקבל החזר מלא של דמי הרישום, אם הביטול נעשה תוך 24 שעות.</p>
                    </div>
                    <div className="w-[68px] h-[68px] relative flex-shrink-0">
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center" style={{filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.08)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.04))'}}>
                        <div className="w-[42px] h-[42px] rounded-full border-2 border-biu-green flex items-center justify-center">
                          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 7.06787L9.25 15.8179L4.875 11.4429" stroke="#016937" strokeWidth="2.1875" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Language Selection */}
              <div className="flex flex-col items-center gap-[40px]">
                <div className="flex flex-col items-center gap-4">
                  <h3 className="text-[16px] text-black text-center font-hebrew w-[669px] leading-[19.2px]">באיזו שפה נוח לך?</h3>

                  <div className="flex flex-row gap-[32px] justify-center items-center w-[669px]">
                    {/* English Option */}
                    <button
                      onClick={() => setSelectedLanguage('english')}
                      className={`flex items-center gap-6 min-w-[300px] px-8 py-4 rounded-3xl bg-white shadow-lg transition-all ${
                        selectedLanguage === 'english' ? 'ring-2 ring-biu-green' : ''
                      }`}
                    >
                      <span className="flex-1 text-[20px] text-[#00280F] text-center font-hebrew leading-6">EN</span>
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/5d9808bbeac74bade0fa6fa27baf2a337a58c4e5?width=176"
                        alt="English flag"
                        className="w-[88px] h-[88px] rounded-full object-cover"
                      />
                    </button>

                    {/* Hebrew Option */}
                    <button
                      onClick={() => setSelectedLanguage('hebrew')}
                      className={`flex items-center gap-6 min-w-[300px] px-8 py-4 rounded-3xl bg-white shadow-lg transition-all ${
                        selectedLanguage === 'hebrew' ? 'ring-2 ring-biu-green' : ''
                      }`}
                    >
                      <span className="flex-1 text-[20px] text-[#00280F] text-center font-hebrew leading-6">עברית</span>
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/afaa3ed97ba8421c2fc3c71d8f3eafb4519463f9?width=176"
                        alt="Hebrew flag"
                        className="w-[88px] h-[88px] rounded-full object-cover"
                      />
                    </button>
                  </div>
                </div>

                {/* Primary CTA */}
                <button className="w-[120px] px-6 py-4 bg-biu-green text-white text-[20px] font-medium font-hebrew hover:bg-biu-green/90 transition-colors">
                  שנכיר
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Left Side - Illustration */}
        <div className="w-[703px] h-[1034px] flex-shrink-0 relative">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e6016cbf2a1db8a8e50cfa8c6dc4586b9829632e?width=1406"
            alt="Registration illustration"
            className="w-full h-full object-cover absolute left-1 top-[174px]"
          />
        </div>
      </main>
      </div>
    </div>
  );
};

export default FigmaPageTemplate;
