import React, { useState } from "react";
import StepProgress from "./StepProgress";
import { Link } from "react-router-dom";
import CalibrationPage from "./CalibrationPage";

export const FillupPage = () => {
  const [isCalibrationVisible, setCalibrationVisible] = useState(false);

  const handleNextClick = () => {
    setCalibrationVisible(true);
  };

  return (
    <>
      <div className="bg-[#1A0C25] flex flex-col justify-center items-center min-h-screen">
        <StepProgress />
        {!isCalibrationVisible ? (
          <div className="flex flex-row mt-[10px]">
            {/* Left side content */}
            <div className="flex flex-col items-start space-y-[80px] px-8 mt-[200px]">
              {/* Logo with Gradient Background */}
              <div className="relative inline-block ml-[60px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg"></div>
                <span className="relative text-4xl font-semibold tracking-wide text-white z-10">
                  Ai.gnosis
                </span>
              </div>

              {/* Assessment Text */}
              <div className="flex flex-col space-y-4 max-w-sm mr-[100px]">
                <p className="text-white font-manrope text-2xl">
                  Please take the assessment to <span className="text-left ml-[50px]">begin with diagnosis</span>
                </p>
                <p className="text-[#FFFFFF] font-raleway text-sm px-4 py-2 text-left ml-[35px]">
                  Assessment duration: 5 mins
                </p>
              </div>
            </div>

            {/* Right side form */}
            <div className="bg-[#564A5957] p-10 rounded-2xl shadow-lg w-[800px] ml-[100px] mx-8">
              <h2 className="text-white text-2xl font-semibold mb-4 font-manrope text-center">
                Welcome to Ai.gnosis early detection screener
              </h2>
              <p className="text-gray-400 text-sm mb-8 font-raleway text-center">
                Ai.gnosis is an online platform that helps you detect early signs of <br /> developmental disorder in children.
              </p>

              <form className="space-y-4">
                <select className="bg-[#1A0C25] text-white px-4 py-3 rounded-lg w-full border border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500">
                  <option className="bg-[#1A0C25]">Choose Language</option>
                  {/* Add more languages here */}
                </select>

                <input
                  type="text"
                  placeholder="Patient Name"
                  className="bg-[#1A0C25] text-white px-4 py-3 rounded-lg w-full placeholder-gray-500 border border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500"
                />

                <input
                  type="text"
                  placeholder="Patient ID"
                  className="bg-[#1A0C25] text-white px-4 py-3 rounded-lg w-full placeholder-gray-500 border border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500"
                />

                <input
                  type="text"
                  placeholder="Patient DOB"
                  className="bg-[#1A0C25] text-white px-4 py-3 rounded-lg w-full placeholder-gray-500 border border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500"
                />

                <input
                  type="text"
                  placeholder="Patient Age (Years)"
                  className="bg-[#1A0C25] text-white px-4 py-3 rounded-lg w-full placeholder-gray-500 border border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500"
                />

                <input
                  type="text"
                  placeholder="Patient Age (Months)"
                  className="bg-[#1A0C25] text-white px-4 py-3 rounded-lg w-full placeholder-gray-500 border border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500"
                />

                <textarea
                  placeholder="Your Query"
                  className="bg-[#1A0C25] text-white px-4 py-3 rounded-lg w-full placeholder-gray-500 border border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500"
                ></textarea>

                <div className="flex justify-center items-center">
                  <button
                    type="button" // Change to type="button" to prevent form submission
                    onClick={handleNextClick}
                    className="hover:bg-pink-700 text-white border border-[#9C00AD] px-6 py-3 rounded-full font-semibold mt-4 w-[150px] flex justify-center items-center"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <CalibrationPage />
        )}
      </div>
    </>
  );
};

export default FillupPage;