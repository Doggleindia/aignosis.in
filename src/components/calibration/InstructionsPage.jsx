import { FaArrowRightLong } from 'react-icons/fa6';
import { BsCameraVideoFill, BsInfoCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

const InstructionsPage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/autismtest');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1A0C25] py-10 text-white">
      <div className="absolute left-6 top-6">
        <div className="relative inline-block">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-60 blur-lg"></div>
          <h1 className="relative z-10 font-montserrat text-2xl font-semibold text-[#E3E2E5]">Aignosis</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex w-full max-w-6xl flex-col items-center px-6">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#F6E8FB]">Camera Setup Instructions</h1>
          <p className="text-lg text-[#CACED9]">
            For optimal calibration results, please position your camera as shown below.
          </p>
          <p className="mt-2 text-base text-[#9CA3AF]">
            This setup ensures the most accurate eye tracking during the assessment.
          </p>
        </div>

        {/* Camera Position Instructions */}
        <div className="mb-8 w-full max-w-[44rem] rounded-md bg-[#23262e] p-6">
          <div className="mb-6 text-center">
            <h3 className="mb-2 text-xl font-semibold text-white">Required Camera Position</h3>
            <p className="text-[#CACED9]">
              Your camera must be positioned at the <b>top center</b> of your screen
            </p>
          </div>

          {/* Monitor with Camera Position */}
          <div className="relative mx-auto mb-6 flex h-[20rem] w-full max-w-2xl items-center justify-center rounded-md bg-[#505050]">
            {/* Monitor Frame - This represents the screen */}
            <div className="relative aspect-video h-72 rounded-lg border-4 border-[#8e8e8e] bg-[#3c3c3c]">
              {/* Top Camera Icon - Highlighted as correct position */}
              <div className="absolute left-1/2 top-0.5 flex h-12 w-12 -translate-x-1/2 transform items-center justify-center rounded-full bg-[#22C55E] shadow-lg shadow-[#22C55E]/30">
                <CameraSVG />
              </div>

              {/* Checkmark to indicate correct position */}
              <div className="absolute left-[57%] top-3 transform">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22C55E]">
                  <FaCheck size={16} color="white" />
                </div>
              </div>

              {/* Bottom Camera Icon - Grayed out as incorrect */}
              <div className="absolute bottom-0.5 left-1/2 flex h-12 w-12 -translate-x-1/2 transform items-center justify-center rounded-full bg-[#6B7280] opacity-50">
                <CameraSVG />
              </div>

              {/* X mark to indicate incorrect position */}
              <div className="absolute bottom-2.5 left-[57%] transform">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EF4444]">
                  <span className="font-montserrat font-bold">X</span>
                </div>
              </div>
            </div>
          </div>

          {/* Position Labels */}
          <div className="flex justify-between text-center">
            <div className="flex-1">
              <div className="flex items-center justify-center gap-2 text-[#22C55E]">
                <FaCheck size={16} className="mt-0.5" color="#22C55E" />
                <span className="font-medium">Top Position - Correct</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-center gap-2 text-[#EF4444]">
                <span className="mt-0.5 font-montserrat font-bold">X</span>
                <span className="font-medium">Bottom Position - Incorrect</span>
              </div>
            </div>
          </div>
        </div>

        {/* Camera Tilt Instructions */}
        <div className="mb-8 w-full max-w-[44rem] rounded-md bg-[#23262e] p-6">
          <div className="mb-6 text-center">
            <h3 className="mb-2 text-xl font-semibold text-white">Required Camera Tilt</h3>
            <p className="text-[#CACED9]">Your camera should have no tilt angle</p>
          </div>

          {/* Camera Tilt Visualization */}
          <div className="flex justify-center gap-8">
            {/* Correct Tilt - No Tilt */}
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-lg bg-[#22C55E] shadow-lg shadow-[#22C55E]/30">
                <div className="flex items-center space-x-2">
                  <BsCameraVideoFill fill="white" size={32} />
                  <FaArrowRightLong fill="white" size={12} />
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#22C55E]">
                <FaCheck size={16} className="mt-0.5" color="#22C55E" />
                <span className="font-medium">No Tilt - Correct</span>
              </div>
            </div>

            {/* Incorrect Tilts */}
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-lg bg-[#6B7280]">
                <div className="flex items-center space-x-2" style={{ transform: 'rotate(-20deg)' }}>
                  <BsCameraVideoFill fill="white" size={32} />
                  <FaArrowRightLong fill="white" size={12} />
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#EF4444]">
                <span className="mt-0.5 font-montserrat font-bold">X</span>
                <span className="font-medium">Down Tilt - Incorrect</span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-lg bg-[#6B7280]">
                <div className="flex items-center space-x-2" style={{ transform: 'rotate(20deg)' }}>
                  <BsCameraVideoFill fill="white" size={32} />
                  <FaArrowRightLong fill="white" size={12} />
                </div>
              </div>
              <div className="flex items-center gap-2 text-[#EF4444]">
                <span className="mt-0.5 font-montserrat font-bold">X</span>
                <span className="font-medium">Up Tilt - Incorrect</span>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mb-8 w-full max-w-[44rem] rounded-md border border-[#374151] bg-[#1F2937] p-6">
          <div className="mb-4 flex items-center gap-3">
            <BsInfoCircleFill className="h-8 w-8" />
            <h3 className="text-lg font-semibold text-white">Important Notes</h3>
          </div>
          <ul className="list-disc space-y-2 pl-8 text-[#CACED9]">
            <li>
              Camera must be positioned at the <b>TOP center</b> of your screen
            </li>
            <li>Camera should have NO tilt (0 degrees)</li>
            <li>Ensure good lighting and clear view of the subject</li>
            <li>Position subject 18-24 inches from the camera</li>
          </ul>
        </div>

        {/* Continue Button */}
        <div className="flex w-full max-w-md justify-center">
          <button
            onClick={handleNext}
            className="flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#B740A1] to-[#9C00AD] px-8 py-3 text-white transition-colors duration-200 hover:from-[#9C00AD] hover:to-[#8A0096] focus:outline-none focus:ring-2 focus:ring-[#B740A1] focus:ring-offset-2 focus:ring-offset-[#1A0C25]"
          >
            <span>I Understand - Continue</span>
            <FaArrowRightLong className="h-4 w-4" />
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

export default InstructionsPage;
