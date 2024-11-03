import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import DownloadPage from './DownloadPage';
// import calibration_vdo from '../../assets/calibration_vdo.mp4';  

const CalibrationPage = () => {
  
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isDownloadPageVisible, setIsDownloadPageVisible] = useState(false);

  const handleNextClick = () => {
    
    setIsVideoPlaying(true); // will  Start video playback
  };

  // When the  video wil ends, then  navigate to DownloadPage
  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
    setIsDownloadPageVisible(true); 
  };

  return (
    <>
      {!isVideoPlaying && !isDownloadPageVisible ? (
        <div className="bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center">
          <div className="w-[900px] h-[550px] bg-[#FDF9FF] rounded-3xl flex flex-col items-center p-8 space-y-8">
            {/* Ai.gnosis text with blurred background */}
            <div className="relative text-4xl font-bold text-[#1A0C25] mb-4">
              <span className="relative z-10 font-montserrat">Ai.gnosis</span>
              <div className="absolute inset-0 flex justify-center items-center z-0">
                <div className="w-[150px] h-[100px] bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-2xl opacity-70"></div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold font-manrope">Calibration</h2>
            <p className="text-center text-[#292738] font-raleway font-normal mb-6">
              Please complete the task in sequence before proceeding to the next step
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-[#292738] font-medium font-raleway">Ensure the webcam is connected properly</span>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-[#292738] font-medium font-raleway">Adjust lighting to avoid glare</span>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-[#292738] font-medium font-raleway">Position yourself comfortably in front of the camera</span>
              </div>
            </div>

            <div className="flex space-x-8 mt-[40px]">
              <Link 
                onClick={handleNextClick} 
                className="flex items-center justify-center w-[200px] h-[50px] border border-[#9C00AD] text-[#292738] font-montserrat rounded-full font-semibold hover:bg-[#F0A1FF] hover:text-white transition-colors"
              >
                Start calibration
              </Link>
              <button 
                className="flex items-center justify-center w-[200px] h-[50px] bg-[#FDF9FF] border border-[#9C00AD] text-[#292738] font-montserrat rounded-full font-semibold hover:bg-[#F0A1FF] hover:text-white transition-colors"
              >
                Stop calibration
              </button>
            </div>
          </div>
        </div>
      ) : isVideoPlaying ? (
        // Video playback section
<div className="bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center">
  <video
    src={""}
    autoPlay
    onEnded={handleVideoEnd} // Transition to DownloadPage after video ends
    className="w-full h-full object-cover"
    style={{ position: "fixed", top: 0, left: 0, zIndex: 10 }}
    controls={false} // Hides video controls for a seamless experience
  />
</div>

      ) : (
        <DownloadPage />
      )}
    </>
  );
};

export default CalibrationPage;
