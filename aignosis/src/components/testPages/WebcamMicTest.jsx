import React, { useState } from 'react';
import CalibrationPage from './CalibrationPage';
import video_img from '../../assets/video_img.png'
import mic_img from '../../assets/mic_img.png'
import CalibrationValidation from './CalibrationValidation';
const WebcamMicTest = () => {
  const [snapshotTaken, setSnapshotTaken] = useState(false); // Track if snapshot is taken
  const [snapshot, setSnapshot] = useState(null); // Store snapshot image data
  const [isCalVisible, setIsCalVisible] = useState(false);

  const handleNextClick = async () => {
    setIsCalVisible(true);
  };

  const handleSnapshot = () => {
    // Simulate taking a snapshot by setting an example image URL
    const exampleImageUrl = 'https://via.placeholder.com/500x300'; // Replace with your image URL
    setSnapshot(exampleImageUrl);
    setSnapshotTaken(true); // Mark that the snapshot is taken
  };

  return (
    <>
      {!isCalVisible ? (
        <div className='bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center'>
          <div className="w-[900px] h-auto mt-[6px] bg-[#FDF9FF] rounded-3xl shadow-lg flex flex-col items-center p-8 space-y-6 relative border border-[#5F1B73]">
            {/* Ai.gnosis Branding */}
            <div className="text-4xl font-bold text-[#1A0C25] relative mb-2">
              <span className="z-10 font-montserrat">Ai.gnosis</span>
              <div className="absolute inset-0 flex justify-center items-center z-0">
                <div className="w-[150px] h-[100px] bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-2xl opacity-70"></div>
              </div>
            </div>

            {/* Webcam & Microphone Test Section */}
            <h2 className="text-2xl font-semibold text-[#292738] font-manrope">Webcam & Microphone test</h2>

            {/* Static Image Preview or Snapshot Display */}
            <div className="w-[500px] h-[300px] bg-[#D9D9D9] rounded-lg flex items-center justify-center overflow-hidden">
              {snapshotTaken ? (
                <img src={video_img} alt="Snapshot" className="w-full h-full object-cover" />
              ) : (
                <img src={video_img} alt="Dummy Preview" className="w-full h-full object-cover" />
              )}
            </div>

            {/* Buttons */}
            {!snapshotTaken ? (
              <button
                onClick={handleSnapshot}
                className="mt-4 px-6 py-2 border-2 border-[#9C00AD] text-[#292738] rounded-full font-semibold hover:bg-[#F0A1FF] hover:text-white transition-colors font-montserrat"
              >
                Take snapshot
              </button>
            ) : (
              <button
                onClick={handleNextClick}
                className="mt-4 px-6 py-2 border-2 border-[#9C00AD] text-[#292738] rounded-full font-semibold hover:bg-[#F0A1FF] hover:text-white transition-colors font-montserrat"
              >
                Next
              </button>
            )}

            {/* Microphone Test Section */}
            <div className="text-center mt-4">
              <h3 className="text-lg font-medium text-[#292738] font-montserrat">Microphone test</h3>
              <p className="text-[#292738] font-raleway">Speak into the microphone and volume level will be displayed below:</p>
             <img src={mic_img} alt="" />
              {/* Volume Level Indicator */}
              {/* <div className="w-full h-4 bg-gray-300 rounded-full mt-2">
                <div
                  className="h-full bg-[#952981] rounded-full transition-all"
                  style={{ width: `50%` }} // Example static value for demo purposes
                ></div>
              </div> */}
              <p className='text-[#D0161F] font-raleway'>Error:  please allow access to your webcam and microphone</p>
              <div className='flex flex-col justify-center items-center gap-8'>

              
              <button
                onClick={handleSnapshot}
                className="mt-2 px-6 w-[20%] py-2 border-2 border-[#9C00AD] text-black rounded-full font-semibold hover:bg-[#F0A1FF] hover:text-white transition-colors font-montserrat"
              >
                Test
              </button>
              <button
                onClick={handleNextClick}
                className="mt-2 w-[30%] px-6 py-2 border-2 border-[#9C00AD] text-[#292738] rounded-full font-semibold hover:bg-[#F0A1FF] hover:text-white transition-colors font-montserrat"
              >
                Continue
              </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <CalibrationValidation />
      )}
    </>
  );
};

export default WebcamMicTest;
