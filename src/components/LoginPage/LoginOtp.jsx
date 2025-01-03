import React from "react";

const LoginOtp = ({ goBack, phoneNumber }) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#1A0C25] overflow-hidden relative">
      {/* Pink Gradient Radiant Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-20"></div>

      {/* Left Section */}
      <div className="lg:flex-[2] flex flex-col justify-start items-center lg:items-start text-white relative px-4 sm:pl-8 lg:pl-56 xl:pl-38 pt-8 sm:pt-16 lg:pt-42 xl:pt-[10vw] 2xl:ml-[10vw] 2xl: z-10 max-sm:pt-4 max-sm:pb-4 max-sm:px-2 text-center lg:text-left md:px-60">
        <div className="relative">
          <h1 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold max-sm:text-2xl md:text-3xl">
            Ai.gnosis
          </h1>
          <h2 className="mt-4 text-lg sm:text-xl lg:text-2xl xl:text-3xl max-sm:text-base md:text-2xl">
            Early Autism Detection Made<br /> Easy & Accurate
          </h2>

          {/* Round Gradient */}
          <div className="absolute left-[50%] transform translate-x-[-50%] lg:left-[.1rem] lg:translate-x-0 xl:left-[1rem]  bottom-[60px] bg-gradient-to-r from-purple-500 to-pink-500 blur-lg opacity-30 h-[60px] sm:h-[80px] lg:h-[90px] xl:h-[100px] w-[90px] sm:w-[120px] lg:w-[110px] xl:w-[100px] rounded-full max-sm:h-[40px] max-sm:w-[70px]"></div>

          {/* Intersecting Lines */}
          <div className="absolute w-full h-full hidden lg:block">
            <div className="absolute top-[34vh] 2xl:border-t-[2px] left-[-120%] xl:top-[32vh] xl:left-[-148%] 2xl:left-[-160%] w-[700px] xl:w-[800px] h-[700px] xl:h-[800px] border-t-[2px] border-[#811F67] rounded-full"></div>
            <div className="absolute top-[29vh] 2xl:border-t-[2px] left-[-130%] xl:top-[26vh] xl:left-[-160%] 2xl:left-[-170%] w-[600px] xl:w-[700px] h-[600px] xl:h-[700px] border-t-[2px] border-[#811F67] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:flex-[2] flex justify-center items-center bg-white relative z-20 p-4 lg:p-0 xl:pr-[10vw] max-sm:w-[70vw] max-sm:h-[100vw]  max-sm:ml-[15vw]  max-sm:rounded-[4vw] md:ml-0 md:mt-0 md:pr-8">
        <button
          onClick={goBack}
          className="absolute top-[12vw] left-[5.5vw] text-2xl max-sm:ml-[8vw] max-sm:top-[8vw] text-[#811F67] font-bold"
        >
          &lt;
        </button>
        <div className="w-3/4 max-w-md ml-[6vw]  mt-[4vw] relative">
          <h2 className="text-2xl font-bold mb-2 max-sm:text-lg">Enter your OTP</h2>
          <p className="mb-2 text-sm text-gray-500">
            OTP has been sent to {phoneNumber}
          </p>
          <p className="mb-4 text-sm text-red-500 max-sm:sm">0:05 sec left</p>

          <div className="mb-2 flex space-x-2 max-sm:space-x-1">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center max-sm:w-[8vw] max-sm:h-[8vw] text-lg border border-gray-300 rounded-md shadow-sm focus:ring-[#811F67] focus:border-[#811F67]"
                />
              ))}
          </div>

          <button className="block text-[#811F67] font-semibold mb-4 max-sm:ml-[9vw] mt-4">
            Resend
          </button>
          <button className="w-[11vw] py-2 text-sm bg-[#811F67] max-sm:w-[35vw] text-white font-semibold rounded-full">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginOtp;