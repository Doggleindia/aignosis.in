import React, { useState } from 'react';
import bluetick_img from '../../assets/bluetick_img.png';
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from 'react-icons/go';
import DownloadPage from './DownloadPage';
const CalibrationResult = () => {
  const [isDownloadVisible, setIsDownloadVisible] = useState(false);

  const handleNextClick = async () => {
    setIsDownloadVisible(true);
  };

  return (
    <div>
      {!isDownloadVisible ? (
        <div className="flex h-[110vh] flex-col items-center justify-center bg-[#1A0C25]">
          <div className="relative mt-[6px] flex h-auto w-[900px] flex-col items-center space-y-6 rounded-3xl border border-[#5F1B73] bg-[#FDF9FF] p-8 shadow-lg">
            {/* Aignosis Branding */}
            <div className="relative mb-2 text-4xl font-bold text-[#1A0C25]">
              <span className="z-10 font-montserrat">Aignosis</span>
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <div className="h-[100px] w-[150px] rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-70 blur-2xl"></div>
              </div>
            </div>

            {/* Webcam & Microphone Test Section */}
            <h2 className="font-manrope text-2xl font-semibold text-[#292738]">Calibration Results</h2>
            <p className="text-center font-raleway text-lg text-[#292738]">
              Here are your results below. If adjustments are needed, <br /> recalibrate; otherwise, proceed.
            </p>
            {/* Static Image Preview or Snapshot Display */}

            <div className="flex gap-5">
              <img src={bluetick_img} alt="" className="h-10 w-10" />
              <p className="font-manrope text-3xl">success</p>
            </div>

            <div className="flex gap-5">
              <Link
                to=""
                className="group mt-[5rem] flex h-[3.5rem] w-[20%] cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-[#B740A1] bg-transparent text-[#0D0C0A] transition-colors duration-300 hover:bg-[#B7407D] sm:w-[12rem]"
              >
                <span className="flex-grow text-center font-montserrat text-sm text-[#292738] sm:text-base">
                  Recalibration
                </span>
                <div className="ml-2 mr-1 flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-[#B740A1] text-xl text-white group-hover:bg-white group-hover:text-black">
                  <GoArrowUpRight />
                </div>
              </Link>

              <button
                onClick={handleNextClick}
                className="group mt-[5rem] flex h-[3.5rem] w-[20%] cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-[#B740A1] bg-transparent text-[#0D0C0A] transition-colors duration-300 hover:bg-[#B7407D] sm:w-[12rem]"
              >
                <span className="flex-grow text-center font-montserrat text-sm text-[#292738] sm:text-base">
                  Proceed
                </span>
                <div className="ml-2 mr-1 flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-[#B740A1] text-xl text-white group-hover:bg-white group-hover:text-black">
                  <GoArrowUpRight />
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <DownloadPage />
      )}
    </div>
  );
};

export default CalibrationResult;
