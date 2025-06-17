import { useState } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Calibration2 = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const navigate = useNavigate();

  const handleCameraIconClick = (position) => {
    setSelectedPosition(position);
  };

  const handleNext = () => {
    console.log('Next clicked with position:', selectedPosition);
    // save camera position to calib data body

    // navigate to the next step
    navigate('/calibration/3');
  };

  const handleBack = () => {
    navigate('/calibration/1');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1A0C25] py-10 text-white">
      {/* Header with Logo */}
      <div className="absolute left-6 top-6">
        <div className="relative inline-block">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-60 blur-lg"></div>
          <h1 className="relative z-10 font-montserrat text-2xl font-semibold text-[#E3E2E5]">Aignosis</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex w-full max-w-6xl flex-col items-center px-6">
        {/* Progress Indicator */}
        <div className="mb-2 text-center">
          <h2 className="text-lg font-medium text-[#B740A1]">Quick Setup - Step 2 of 3</h2>
        </div>

        {/* Title */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#F6E8FB]">Position Camera</h1>
          <p className="text-lg text-[#CACED9]">
            Position your camera at the top or bottom center of your screen and click the corresponding camera icon
            below to confirm.
          </p>
          <p className="mt-2 text-base text-[#9CA3AF]">
            Don&apos;t worry if it&apos;s not perfectly centered as calibration will compensate for that.
          </p>
        </div>

        {/* Camera Placement Section */}
        <div className="mb-8 w-full max-w-[44rem] rounded-md bg-[#23262e] p-4">
          <div className="mb-4 text-left">
            <h3 className="text-lg text-white">Camera Placement</h3>
          </div>

          {/* Monitor with Camera Icons */}
          <div className="relative mx-auto flex h-[20rem] w-full max-w-2xl items-center justify-center rounded-md bg-[#505050]">
            {/* Monitor Frame - This represents the screen */}
            <div className="relative aspect-video h-72 rounded-lg border-4 border-[#8e8e8e] bg-[#3c3c3c]">
              {/* Top Camera Icon */}
              <button
                onClick={() => handleCameraIconClick('top')}
                className={`absolute left-1/2 top-0.5 flex h-10 w-10 -translate-x-1/2 transform items-center justify-center rounded-full transition-all duration-200 ${
                  selectedPosition === 'top'
                    ? 'bg-[#B740A1] shadow-lg shadow-[#B740A1]/50'
                    : 'bg-[#636363] hover:bg-[#B740A1]/70'
                }`}
              >
                <CameraSVG />
              </button>

              {/* Bottom Camera Icon */}
              <button
                onClick={() => handleCameraIconClick('bottom')}
                className={`absolute bottom-0.5 left-1/2 flex h-10 w-10 -translate-x-1/2 transform items-center justify-center rounded-full transition-all duration-200 ${
                  selectedPosition === 'bottom'
                    ? 'bg-[#B740A1] shadow-lg shadow-[#B740A1]/50'
                    : 'bg-[#636363] hover:bg-[#B740A1]/70'
                }`}
              >
                <CameraSVG />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex w-full max-w-md items-center justify-between">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center justify-center rounded-lg border border-[#564A59] bg-transparent px-6 py-3 text-white transition-all duration-200 hover:bg-[#564A59]"
          >
            <FaArrowLeftLong className="mr-5" />
            Back
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={!selectedPosition}
            className={`flex items-center justify-center rounded-lg px-8 py-3 text-white transition-all duration-200 ${
              selectedPosition
                ? 'bg-gradient-to-r from-[#B740A1] to-[#9C00AD] hover:from-[#9C00AD] hover:to-[#8A0096]'
                : 'cursor-not-allowed bg-[#564A59] opacity-50'
            }`}
          >
            Next
            <FaArrowRightLong className="ml-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const CameraSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
    <path
      d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 6V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V6C3 4.9 3.9 4 5 4H8.5L9.5 3H14.5L15.5 4H19C20.1 4 21 4.9 21 6ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7Z"
      fill="currentColor"
    />
  </svg>
);

export default Calibration2;
