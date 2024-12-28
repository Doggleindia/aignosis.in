import React from "react";

const LoginOtp = ({ goBack }) => {
  return (
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
      <div className="flex-[2] flex items-start bg-white relative z-20">
      <button
            onClick={goBack} // Call the goBack function passed as a prop
            className="absolute top-[12vw] left-[5.5vw] text-2xl text-[#811F67] font-bold"
          >
            &lt;
          </button>
        <div className="w-3/4 max-w-md ml-[6vw] mt-[16vw] relative">
          {/* Back Button */}
          

          {/* Login Button (Above the form) */}
          

          {/* OTP Section */}
          <h2 className="text-2xl font-bold mb-2">Enter your OTP</h2>
          <p className="mb-2 text-sm text-gray-500">OTP has been sent to +8976543589</p>
          <p className="mb-4 text-sm text-red-500">0:05 sec left</p>

          {/* OTP Input Boxes */}
          <div className="mb-2 flex space-x-2">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md shadow-sm focus:ring-[#811F67] focus:border-[#811F67]"
                />
              ))}
          </div>

          {/* Resend Button */}
          <button className="block text-[#811F67] font-semibold justify-center items-center ml-[4vw] mb-[.6vw] mt-4">
            Resend
          </button>
          <button className="w-[11vw] py-2 text-sm bg-[#811F67] text-white font-semibold rounded-full mb-6">
            Log In
          </button>

        </div>
      </div>
    </div>
  );
};

export default LoginOtp;
