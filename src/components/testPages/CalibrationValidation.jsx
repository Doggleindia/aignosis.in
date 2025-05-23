import React, { useState } from 'react';
import CalibrationResult from './CalibrationResult';

const CalibrationValidation = () => {
  const [isResultVisible, setIsResultVisible] = useState(false);

  const handleNextClick = async () => {
    setIsResultVisible(true);
  };

  return (
    <div>
      {!isResultVisible ? (
        <div className="flex h-[120vh] flex-col items-center justify-center bg-[rgb(26,12,37)]">
          <div className="relative mt-[6px] flex h-auto w-[900px] flex-col items-center space-y-6 rounded-3xl border border-[#5F1B73] bg-[#FDF9FF] p-8 shadow-lg">
            {/* Ai.gnosis Branding */}
            <div className="relative mb-2 text-4xl font-bold text-[#1A0C25]">
              <span className="z-10 font-montserrat">Ai.gnosis</span>
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <div className="h-[100px] w-[150px] rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-70 blur-2xl"></div>
              </div>
            </div>

            {/* Webcam & Microphone Test Section */}
            <h2 className="font-manrope text-2xl font-semibold text-[#292738]">Calibration validation</h2>
            <p className="text-center font-raleway text-lg text-[#292738]">
              Watch the validation video to confirm proper calibration. This step ensures that the system is prepared
              for data collection.
            </p>
            {/* Static Image Preview or Snapshot Display */}
            <div className="flex h-[300px] w-[500px] items-center justify-center overflow-hidden rounded-lg bg-[#D9D9D9]">
              <video src="https://drive.google.com/file/d/1dqAIy4Ok5cK1F8iNdLUoM5T4-iObpB-H/view" autoPlay muted />
            </div>

            <button
              onClick={handleNextClick}
              className="mt-4 rounded-full border-2 border-[#9C00AD] px-6 py-2 font-montserrat font-semibold text-[#292738] transition-colors hover:bg-[#F0A1FF] hover:text-white"
            >
              Continue
            </button>
          </div>
        </div>
      ) : (
        <CalibrationResult />
      )}
    </div>
  );
};

export default CalibrationValidation;
