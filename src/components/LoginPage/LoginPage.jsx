import React, { useState } from "react";
import LoginOtp from "./LoginOtp";

const LoginPage = () => {
  const [showOtpPage, setShowOtpPage] = useState(false);

  return (
    <>
      {!showOtpPage ? (
        <div className="flex min-h-screen bg-[#1A0C25] overflow-hidden relative">
          {/* Pink Gradient Radiant Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-20"></div>

          {/* Left Section */}
          <div className="flex-[3] flex justify-start items-start text-white relative pl-56 pt-72 z-10">
            <div className="text-left relative">
              <h1 className="text-5xl font-bold relative inline-block">
                Ai.gnosis
              </h1>
              <h2 className="mt-4 text-3xl">
                Early Autism Detection Made<br /> Easy & Accurate
              </h2>

              {/* Round Gradient behind the text */}
              <div className="absolute left-[.8rem] right-[14.5rem] bottom-[60px] bg-gradient-to-r from-purple-500 to-pink-500 blur-lg opacity-30 h-[100px] w-[150px] rounded-full"></div>

              {/* Intersecting Lines */}
              <div className="absolute w-full h-full">
                <div className="absolute top-[27vh] left-[-120%] w-[700px] h-[700px] border-t-[2px] border-[#811F67] rounded-full"></div>
                <div className="absolute top-[22vh] left-[-130%] w-[600px] h-[600px] border-t-[2px] border-[#811F67] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Section (Form Section) with White Background */}
          <div className="flex-[2] flex justify-center items-center bg-white relative z-20">
            <div className="w-3/4 max-w-md">
              <h2 className="text-2xl font-bold mb-2">Welcome</h2>
              <p className="mb-4 text-xl">Please enter your details</p>

              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    id="phone"
                    className="block w-[17vw] pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-full shadow-sm focus:ring-[#811F67] focus:border-[#811F67]"
                    placeholder="📞 Phone number"
                  />
                </div>
              </div>

              <button
                className="w-[17vw] py-2 text-sm bg-[#811F67] hover:cursor text-white font-semibold rounded-full"
                onClick={() => setShowOtpPage(true)} // Navigate to OTP page
              >
                Send OTP
              </button>
            </div>
          </div>
        </div>
      ) : (
        <LoginOtp goBack={() => setShowOtpPage(false)} /> // Navigate back
      )}
    </>
  );
};

export default LoginPage;
