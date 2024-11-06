import React, { useRef, useState } from "react";
import img1 from "../assets/prescription_img.png";
import img2 from "../assets/prescription2_img.png";

const Comparison = () => {
  const containerRef = useRef(null);
  const [dragPosition, setDragPosition] = useState(50); // Initial divider position (percentage)

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const newPosition = Math.max(0, Math.min(100, (x / width) * 100));
    setDragPosition(newPosition);
  };

  return (
    <div
      ref={containerRef}
      className="flex items-center flex-col justify-center min-h-screen"
      style={{ background: "rgba(26, 12, 37, 1)" }}
      onMouseMove={handleMouseMove} // Track mouse movement across the container
    >
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-[0vw] 2xl:gap-[4vw]">
        {/* Left Side - Sliding Images */}
        <div className="flex justify-center items-center relative md:w-[310px] md:h-[410px] 2xl:w-[410px] 2xl:h-[510px]">
          <div
            className="p-9 rounded-xl w-full h-full relative overflow-hidden flex justify-center items-center"
            style={{ background: "rgba(245, 215, 255, 0.34)" }}
          >
            <img
              src={img1}
              alt="First Image"
              className="rounded-lg p-8 w-full h-full absolute"
              style={{ clipPath: `inset(0 ${100 - dragPosition}% 0 0)` }}
            />
            <img
              src={img2}
              alt="Second Image"
              className="rounded-lg p-8 w-full h-full absolute"
              style={{ clipPath: `inset(0 0 0 ${dragPosition}%)` }}
            />
            {/* Draggable Divider */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-pink-400 cursor-pointer"
              style={{ left: `${dragPosition}%` }}
            >
              <div
                className="w-4 h-4 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2"
                style={{ left: "50%" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="hidden md:block text-white space-y-8 w-[520px] relative">
  {/* Comparison header */}
  <div className="flex items-center space-x-2 text-pink-400">
    <span
      className="h-[10px] w-[118px] rounded-full"
      style={{
        background:
          "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
      }}
    ></span>
    <span className="text-[#F1C6FE]">Comparison</span>
    <span
      className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
      style={{
        background:
          "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
      }}
    ></span>
  </div>

  <h2 className="2xl:text-3xl md:text-xl font-semibold leading-snug">
    Ai.gnosis vs. Traditional Screening <br />
    <span className="font-light italic font-manrope text-[#F6E8FB]">
      A Better Way Forward
    </span>
  </h2>

  {/* Table Container with relative positioning */}
  <div
    className="p-10 rounded-lg space-y-6 shadow-xl relative overflow-hidden"
    style={{ background: "rgba(26, 10, 38, 1)" }}
  >
    {/* Vertical Lines within the table */}
    <div
      className="absolute  top-[4vw] left-[33.3%] w-[5px] "
      style={{
        background:
          "radial-gradient(130.08% 35.6% at 100% 48.48%, #B740A1 0%, #150A1C 100%)",
        height: "100%",
      }}
    ></div>
    <div
      className="absolute top-[4vw]  left-[66.6%] w-[5px]"
      style={{
        background:
          "radial-gradient(130.08% 35.6% at 100% 48.48%, #B740A1 0%, #150A1C 100%)",
        height: "100%",
      }}
    ></div>

    {/* Table Headers */}
    <div className="flex justify-between items-center text-gray-200 mb-4 font-bold w-full">
      <div className="w-1/4 text-left"></div>
      <div className="w-1/4 text-center uppercase">Traditional</div>
      <div className="w-1/4 text-center uppercase">AI.gnosis</div>
    </div>

    {/* Comparison Rows */}
    <div className="flex justify-between items-center text-gray-100 mb-4 w-full">
      <div className="w-1/4 text-left text-gray-200 font-bold uppercase">
        Cost
      </div>
      <div className="w-1/4 text-center">Expensive</div>
      <div className="w-1/4 text-center">Affordable</div>
    </div>

    <div className="flex justify-between items-center text-gray-100 mb-4 w-full">
      <div className="w-1/4 text-left text-gray-200 font-bold uppercase">
        Time
      </div>
      <div className="w-1/4 text-center">Weeks</div>
      <div className="w-1/4 text-center">5 Minutes</div>
    </div>

    <div className="flex justify-between items-center text-gray-100 mb-4 w-full">
      <div className="w-1/4 text-left text-gray-200 font-bold uppercase">
        Accessibility
      </div>
      <div className="w-1/4 text-center">Limited Location</div>
      <div className="w-1/4 text-center">Remote Friendly</div>
    </div>
  </div>
</div>


        
      </div>
    </div>
  );
};

export default Comparison;
