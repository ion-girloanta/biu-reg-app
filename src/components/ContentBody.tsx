import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContentBody: React.FC = () => {
  const navigate = useNavigate();

  const handleAlreadyRegistered = () => {
    navigate('/registration');
  };

  return (
    <div className="mb-12">
      {/* Already Registered Link */}
      <div className="flex justify-center mb-12">
        <button
          onClick={handleAlreadyRegistered}
          className="flex items-center gap-2 px-6 py-3 border border-biu-green rounded-lg bg-white hover:bg-gray-50 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.25 7.9428H4.35125L7.076 4.6728C7.3415 4.3548 7.298 3.88155 6.98 3.6168C6.66125 3.3513 6.18875 3.3948 5.924 3.7128L2.174 8.2128C2.14475 8.24805 2.12975 8.2893 2.108 8.3283C2.09 8.3598 2.06825 8.3868 2.05475 8.4213C2.021 8.50755 2.00075 8.5983 2.00075 8.6898C2.00075 8.69055 2 8.69205 2 8.6928C2 8.69355 2.00075 8.69505 2.00075 8.6958C2.00075 8.7873 2.021 8.87805 2.05475 8.9643C2.06825 8.9988 2.09 9.0258 2.108 9.0573C2.12975 9.0963 2.14475 9.13755 2.174 9.1728L5.924 13.6728C6.0725 13.8506 6.2855 13.9428 6.5 13.9428C6.6695 13.9428 6.83975 13.8858 6.98 13.7688C7.298 13.5041 7.3415 13.0308 7.076 12.7128L4.35125 9.4428H13.25C13.664 9.4428 14 9.1068 14 8.6928C14 8.2788 13.664 7.9428 13.25 7.9428Z" fill="#016937"/>
          </svg>
          <span className="text-biu-green">נרשמת בעבר? לחץ/י כאן</span>
        </button>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Card 1 - Clock */}
        <div className="bg-green-50 border border-gray-200 rounded-2xl p-8 shadow-lg">
          <div className="flex items-start gap-6 mb-6">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center">
                <svg width="53" height="54" viewBox="0 0 53 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26 5.44287C31.5695 5.44287 36.911 7.65536 40.8492 11.5936C44.7875 15.5319 47 20.8733 47 26.4429C47 32.0124 44.7875 37.3538 40.8492 41.2921C36.911 45.2304 31.5695 47.4429 26 47.4429C20.4305 47.4429 15.089 45.2304 11.1508 41.2921C7.21249 37.3538 5 32.0124 5 26.4429C5 20.8733 7.21249 15.5319 11.1508 11.5936C15.089 7.65536 20.4305 5.44287 26 5.44287ZM26 7.6534C21.0167 7.6534 16.2375 9.633 12.7138 13.1567C9.19013 16.6804 7.21053 21.4596 7.21053 26.4429C7.21053 31.4261 9.19013 36.2053 12.7138 39.729C16.2375 43.2527 21.0167 45.2323 26 45.2323C28.4675 45.2323 30.9108 44.7463 33.1904 43.8021C35.4701 42.8578 37.5414 41.4738 39.2862 39.729C41.0309 37.9843 42.4149 35.9129 43.3592 33.6333C44.3035 31.3536 44.7895 28.9103 44.7895 26.4429C44.7895 21.4596 42.8099 16.6804 39.2862 13.1567C35.7625 9.633 30.9833 7.6534 26 7.6534ZM24.8947 14.285H27.1053V26.266L37.4947 32.2566L36.3895 34.1797L24.8947 27.5481V14.285Z" fill="#016937"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-black">כדאי להכין מראש</h3>
          </div>
          <p className="text-lg text-black leading-relaxed">
            צילום של תעודת הזהות.
          </p>
        </div>

        {/* Card 2 - Check */}
        <div className="bg-green-50 border border-gray-200 rounded-2xl p-8 shadow-lg">
          <div className="flex items-start gap-6 mb-6">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center">
                <div className="w-10 h-10 border-2 border-biu-green rounded-full flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 7.06787L9.25 15.8179L4.875 11.4429" stroke="#016937" strokeWidth="2.1875" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-black">כדאי לדעת</h3>
          </div>
          <p className="text-lg text-black leading-relaxed">
            במקרה של ביטול רישום – ניתן לקבל החזר מלא של דמי הרישום, אם הביטול נעשה תוך 24 שעות.
          </p>
        </div>
      </div>

      {/* Language Selection */}
      <div className="flex flex-col items-center gap-10 mb-12">
        <div className="text-center">
          <p className="text-base text-black mb-4">באיזו שפה נוח לך?</p>
          
          <div className="flex gap-8 justify-center">
            <button className="flex items-center gap-6 bg-white px-8 py-4 rounded-3xl shadow-lg hover:shadow-xl transition-shadow min-w-80">
              <span className="text-xl text-biu-dark-green">EN</span>
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/5d9808bbeac74bade0fa6fa27baf2a337a58c4e5?width=176" 
                  alt="English flag" 
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
            
            <button className="flex items-center gap-6 bg-white px-8 py-4 rounded-3xl shadow-lg hover:shadow-xl transition-shadow min-w-80">
              <span className="text-xl text-biu-dark-green">עברית</span>
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/afaa3ed97ba8421c2fc3c71d8f3eafb4519463f9?width=176" 
                  alt="Hebrew flag" 
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/registration')}
          className="bg-biu-green text-white px-6 py-4 text-xl hover:opacity-90 transition-opacity"
        >
          שנכיר
        </button>
      </div>
    </div>
  );
};

export default ContentBody;
