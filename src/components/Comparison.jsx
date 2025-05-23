import React, { useRef, useState } from 'react';
import img1 from '../assets/prescription_img.png';
import img2 from '../assets/prescription2_img.png';
const Comparison = () => {
  const containerRef = useRef(null);
  const [dragPosition, setDragPosition] = useState(50); // Initial divider position (percentage)

  const handleMove = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const newPosition = Math.max(0, Math.min(100, (x / width) * 100));
    setDragPosition(newPosition);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-8"
      style={{ background: 'rgba(26, 12, 37, 1)' }}
      // Track mouse movement across the container
    >
      <div className="2xl:gap-[4vw] relative mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-[0vw]">
        <div ref={containerRef} onMouseMove={handleMouseMove}>
          {/* Blur effect */}
          <div className="absolute inset-0 -top-[10%] left-[15%] h-[15vw] w-[55vw] rounded-xl bg-[#B740A1] opacity-65 blur-[120px] sm:h-[10vw] sm:w-[40vw]"></div>
          {/* Left Side - Sliding Images */}
          <div className="2xl:w-[410px] 2xl:h-[510px] relative flex h-auto w-full items-center justify-center max-sm:hidden md:h-[410px] md:w-[310px]">
            <div
              className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl p-4 sm:p-9"
              style={{ background: 'rgba(245, 215, 255, 0.34)' }}
            >
              <img
                src={img1}
                alt="First Image"
                className="absolute h-full w-full rounded-lg p-4 sm:p-8"
                style={{ clipPath: `inset(0 ${100 - dragPosition}% 0 0)` }}
                loading="lazy"
              />
              <img
                src={img2}
                alt="Second Image"
                className="absolute h-full w-full rounded-lg p-4 sm:p-8"
                style={{ clipPath: `inset(0 0 0 ${dragPosition}%)` }}
                loading="lazy"
              />
              {/* Draggable Divider */}
              <div
                className="absolute bottom-0 top-0 w-1 cursor-pointer bg-pink-400"
                style={{ left: `${dragPosition}%` }}
              >
                <div
                  className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white"
                  style={{ left: '50%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* Text Content */}
        <div className="relative mt-8 w-full space-y-4 text-white sm:mt-0 sm:w-[520px] sm:space-y-8">
          {/* Comparison Header */}
          <div className="flex items-center space-x-2 text-pink-400 max-sm:justify-center">
            <span
              className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
              style={{
                background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
              }}
            ></span>
            <span className="text-[#F1C6FE]">Comparison</span>
            <span
              className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
              style={{
                background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
              }}
            ></span>
          </div>

          <h2 className="2xl:text-3xl font-semibold leading-snug max-sm:text-center md:text-xl">
            Ai.gnosis vs. Traditional Screening <br />
            <span className="font-manrope font-light italic text-[#F6E8FB]">A Better Way Forward</span>
          </h2>

          {/* Table Container with relative positioning */}
          <div className="relative space-y-4 overflow-hidden rounded-lg bg-[#43284C4D] p-6 shadow-xl sm:space-y-6 sm:p-10">
            {/* Vertical Lines within the table */}
            <div
              className="absolute left-[33.3%] top-[4vw] w-[3px] sm:w-[5px]"
              style={{
                background: 'radial-gradient(130.08% 35.6% at 100% 48.48%, #B740A1 0%, #150A1C 100%)',
                height: '100%',
              }}
            ></div>
            <div
              className="absolute left-[66.6%] top-[3vw] w-[3px] sm:w-[5px]"
              style={{
                background: 'radial-gradient(130.08% 35.6% at 100% 48.48%, #B740A1 0%, #150A1C 100%)',
                height: '100%',
              }}
            ></div>

            {/* Table Headers */}
            <div className="mb-2 flex w-full items-center justify-between text-sm font-bold text-gray-200 sm:mb-4 sm:text-base">
              <div className="w-1/4 text-left"></div>
              <div className="w-1/4 text-center md:uppercase">Traditional</div>
              <div className="w-1/4 text-center md:uppercase">AI.gnosis</div>
            </div>

            {/* Comparison Rows */}
            <div className="mb-2 flex w-full items-center justify-between text-sm text-gray-100 sm:mb-4 sm:text-base">
              <div className="w-1/4 text-left font-bold text-gray-200 md:uppercase">Cost</div>
              <div className="w-1/4 text-center">Expensive</div>
              <div className="w-1/4 text-center">Affordable</div>
            </div>

            <div className="mb-2 flex w-full items-center justify-between text-sm text-gray-100 sm:mb-4 sm:text-base">
              <div className="w-1/4 text-left font-bold text-gray-200 md:uppercase">Time</div>
              <div className="w-1/4 text-center">Weeks</div>
              <div className="w-1/4 text-center">5 Minutes</div>
            </div>

            <div className="mb-2 flex w-full items-center justify-between text-sm text-gray-100 sm:mb-4 sm:text-base">
              <div className="w-1/4 pr-12 text-left font-bold text-gray-200 md:uppercase">Accessibility</div>
              <div className="w-1/4 text-center">Limited Location</div>
              <div className="w-1/4 text-center">Remote Friendly</div>
            </div>
          </div>
        </div>

        {/* Left Side - Sliding Images */}
        <div
          ref={containerRef}
          className="mt-[40px] flex justify-center max-sm:h-[90vw]"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove} // Track mouse movement across the container
        >
          <div className="relative mx-auto flex h-[80vw] w-[75vw] items-center justify-center md:hidden">
            <div
              className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl p-4 sm:p-9"
              style={{ background: 'rgba(245, 215, 255, 0.34)' }}
            >
              <img
                src={img1}
                alt="First Image"
                className="absolute h-full w-full rounded-lg p-4 sm:p-8"
                style={{ clipPath: `inset(0 ${100 - dragPosition}% 0 0)` }}
                loading="lazy"
              />
              <img
                src={img2}
                alt="Second Image"
                className="absolute h-full w-full rounded-lg p-4 sm:p-8"
                style={{ clipPath: `inset(0 0 0 ${dragPosition}%)` }}
                loading="lazy"
              />
              {/* Draggable Divider */}
              <div
                className="absolute bottom-0 top-0 w-1 cursor-pointer bg-pink-400"
                style={{ left: `${dragPosition}%` }}
              >
                <div
                  className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white"
                  style={{ left: '50%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
