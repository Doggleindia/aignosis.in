import { useState } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { BsCameraVideoFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Calibration3 = () => {
  const [selectedTilt, setSelectedTilt] = useState(null);
  const navigate = useNavigate();

  const handleTiltSelect = (tilt) => {
    setSelectedTilt(tilt);
  };

  const handleNext = () => {
    console.log('Next clicked with tilt:', selectedTilt);
    // save camera tilt to calib data body
  };

  const handleBack = () => {
    navigate('/calibration/2');
  };

  const tiltOptions = [
    {
      id: 'down',
      label: 'Down tilt',
      degrees: '-20 degrees',
      icon: (
        <div className="flex items-center space-x-2" style={{ transform: 'rotate(-20deg)' }}>
          <BsCameraVideoFill fill="gray" size={40} />
          <FaArrowRightLong fill="gray" size={15} />
        </div>
      ),
    },
    {
      id: 'none',
      label: 'No tilt',
      degrees: '0 degrees',
      icon: (
        <div className="flex items-center space-x-2">
          <BsCameraVideoFill fill="gray" size={40} />
          <FaArrowRightLong fill="gray" size={15} />
        </div>
      ),
    },
    {
      id: 'up',
      label: 'Up tilt',
      degrees: '20 degrees',
      icon: (
        <div className="flex items-center space-x-2" style={{ transform: 'rotate(20deg)' }}>
          <BsCameraVideoFill fill="gray" size={40} />
          <FaArrowRightLong fill="gray" size={15} />
        </div>
      ),
    },
  ];

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
          <h2 className="text-lg font-medium text-[#B740A1]">Quick Setup - Step 3 of 3</h2>
        </div>

        {/* Title */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#F6E8FB]">Adjust Camera Tilt</h1>
          <p className="text-lg text-[#CACED9]">
            Choose the option that best matches your camera&apos;s tilt angle. For integrated webcams, select &quot;No
            tilt.&quot;
          </p>
        </div>

        {/* Tilt Options */}
        <div className="mb-16 flex w-full max-w-4xl items-center justify-center gap-8">
          {tiltOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleTiltSelect(option.id)}
              className={`flex flex-col items-center justify-center rounded-lg p-8 transition-all duration-200 ${
                selectedTilt === option.id
                  ? 'bg-[#B740A1] shadow-lg shadow-[#B740A1]/30'
                  : 'bg-[#2A2A3A] hover:bg-[#3A3A4A]'
              } min-h-[200px] min-w-[200px]`}
            >
              <h3 className="mb-2 text-lg font-semibold text-white">{option.label}</h3>
              <div className="mb-4 flex h-16 w-16 items-center justify-center">{option.icon}</div>
              <p className="text-sm text-[#CACED9]">{option.degrees}</p>
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex w-full max-w-lg items-center justify-between">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center justify-center rounded-lg border border-[#564A59] bg-transparent px-6 py-3 text-white transition-all duration-200 hover:bg-[#564A59]"
          >
            <FaArrowLeftLong className="mr-3" />
            Back
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={!selectedTilt}
            className={`flex items-center justify-center rounded-lg px-8 py-3 text-white transition-all duration-200 ${
              selectedTilt
                ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5855F0] hover:to-[#7C3AED]'
                : 'cursor-not-allowed bg-[#564A59] opacity-50'
            }`}
          >
            Next
            <FaArrowRightLong className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calibration3;
