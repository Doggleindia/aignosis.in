import React from "react";


const Heading = () => {
    return (
      <div className="bg-[#1A0C25] h-screen flex items-center justify-center">
        {/* Main Container */}
        <div className="flex flex-row items-center max-sm:flex-col justify-evenly w-[80%] max-w-7xl">
          {/* Left Section: Text */}
          <div className="text-white max-w-xl max-sm:flex-row">
            <h1 className="text-4xl max-sm:text-2xl max-sm:flex-row font-[Montserrat] font-bold leading-tight mb-6">
              Join a Company Where <br /> Your Work Transforms Lives
            </h1>
            <p className="text-lg font-[Raleway] leading-relaxed mb-6">
              At Aignosis, we are dedicated to harnessing the power of AI to revolutionize autism detection and support. 
              Our mission is to provide early, accurate insights, improving the lives of countless individuals and families worldwide. 
              Be a part of a team that's driving meaningful change and making a profound impact on communities across the globe.
            </p>
            <button className="px-6 py-3 bg-transparent border border-pink-600 text-white rounded-full hover:bg-pink-500 hover:text-white transition duration-300">
              Join now
            </button>
          </div>
  
          {/* Right Section: Design */}
          <div className="flex flex-col items-center justify-center max-sm:mt-[25vw] max-sm:h-[0vw] ">
  {/* Container for boxes */}
  <div className="flex flex-wrap justify-center gap-6 w-full max-w-md">
    {/* Line 1 - 4 Boxes */}
    <div className="w-20 h-20 bg-gray-300 rounded max-sm:w-14 max-sm:h-14 shadow-md" />
    <div className="w-20 h-20 bg-gray-300 rounded max-sm:w-14 max-sm:h-14 shadow-md" />
    <div className="w-20 h-20 bg-gray-300 rounded max-sm:w-14 max-sm:h-14 shadow-md" />
    <div className="w-20 h-20 bg-gray-300 rounded max-sm:w-14 max-sm:h-14 shadow-md" />

    {/* Line 2 - 3 Boxes */}
    <div className="w-20 h-20 bg-gray-300 max-sm:w-14 max-sm:h-14 rounded shadow-md" />
    <div className="w-20 h-20 bg-gray-300 max-sm:w-14 max-sm:h-14 rounded shadow-md" />
    <div className="w-20 h-20 bg-gray-300 max-sm:w-14 max-sm:h-14 rounded shadow-md" />
  </div>
</div>



        </div>
      </div>
    );
  };
  
  export default Heading;
  