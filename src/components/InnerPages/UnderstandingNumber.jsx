import React, { useEffect, useRef, useState } from 'react';
import bg1 from '../../assets/images/img2.png';
import bg2 from '../../assets/images/img1.png';

const UnderstandingNumber = () => {
  const [showSecondCard, setShowSecondCard] = useState(false);
  const containerRef = useRef(null);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        // Scroll down - show the second card
        setShowSecondCard(true);
      } else {
        // Scroll up - hide the second card
        setShowSecondCard(false);
      }
    };

    const handleTouchStart = (event) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      touchEndY.current = event.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (touchStartY.current - touchEndY.current > 50) {
        // Swipe up - show the second card
        setShowSecondCard(true);
      } else if (touchEndY.current - touchStartY.current > 50) {
        // Swipe down - hide the second card
        setShowSecondCard(false);
      }
    };

    const container = containerRef.current;
    container.addEventListener('wheel', handleWheel);
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="2xl:w-[100%] relative mb-10 flex h-[35vw] flex-col items-center justify-center overflow-hidden max-sm:h-[85vw] max-sm:w-[90vw] md:w-[50%]"
      style={{
        scrollBehavior: 'smooth',
        overflowY: 'hidden',
        position: 'relative',
      }}
    >
      <div className="2xl:w-[60%] relative mb-10 flex h-[25vw] flex-col overflow-hidden rounded-3xl border border-[#B874B540] max-sm:h-[78vw] max-sm:w-[90vw] md:w-[100%]">
        {/* First Card */}
        <div
          className={`firstCard absolute inset-0 flex transition-all duration-700 ease-in-out ${
            showSecondCard ? 'z-10 -translate-y-full' : 'z-10 translate-y-0'
          }`}
          style={{
            background: 'radial-gradient(101.54% 60.98% at 50% 39.02%, #070B0E 0%, rgba(48, 8, 52, 0.6) 100%)',
          }}
        >
          <div className="2xl:text-4xl ml-[5rem] flex h-full w-[50%] flex-col items-start justify-center font-bold max-sm:ml-[2rem] max-sm:text-lg md:text-3xl">
            <h1 className="font-raleway italic text-[#F6E8FB]">
              <span className="font-raleway text-5xl font-semibold italic text-[#F6E8FB] max-sm:text-2xl">
                1 in 10{' '}
              </span>{' '}
              children experience developmental delays
            </h1>
            <h1 className="flex items-center gap-4 font-medium">
              <span className="ml-[26vw] flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-red-600 text-xs max-sm:ml-[30vw] max-sm:h-[1.5rem] max-sm:w-[1.5rem]">
                SOS
              </span>
            </h1>
            <h1 className="mt-2 text-base text-[#F6E8FB] max-sm:text-sm">
              Early identification is essential for better support
            </h1>
            <div className="group mt-[2rem] flex h-[3rem] w-[10rem] cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-[#B740A1] bg-transparent text-[#0D0C0A] transition-colors duration-300 hover:bg-[#B740A1] max-sm:w-[7rem]">
              <a href="" className="text-base text-white max-sm:text-sm">
                Learn more
              </a>
            </div>
          </div>
          <div className="flex h-full w-[50%] items-center justify-center">
            <img className="h-[60%] w-[60%] object-cover max-sm:w-auto" src={bg1} alt="Developmental Delays" />
          </div>
        </div>

        {/* Second Card */}
        <div
          className={`secondCard absolute inset-0 flex transition-all duration-700 ease-in-out ${
            showSecondCard ? 'z-10 translate-y-0' : 'z-10 translate-y-full'
          }`}
          style={{
            background: 'radial-gradient(101.54% 60.98% at 50% 39.02%, #070B0E 0%, rgba(48, 8, 52, 0.6) 100%)',
          }}
        >
          <div className="ml-[5rem] flex h-full w-[50%] flex-col items-start justify-center text-4xl font-bold italic max-sm:ml-[2rem] max-sm:text-lg">
            <h1 className="font-raleway italic text-[#F6E8FB]">
              <span className="font-raleway text-4xl font-semibold italic text-[#F6E8FB] max-sm:text-2xl">
                1 in 36{' '}
              </span>{' '}
              children are autistic in India
            </h1>
            <h1 className="flex items-center gap-4 font-medium">
              <span className="ml-[19vw] flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-red-600 text-xs max-sm:ml-[33vw] max-sm:h-[1.5rem] max-sm:w-[1.5rem]">
                SOS
              </span>
            </h1>
            <h1 className="mt-2 text-base text-[#F6E8FB] max-sm:text-sm">
              Autism awareness and early detection can make a difference.
            </h1>
            <div className="group mt-[2rem] flex h-[3rem] w-[10rem] cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-[#B740A1] bg-transparent text-[#0D0C0A] transition-colors duration-300 hover:bg-[#B740A1] max-sm:w-[7rem]">
              <a href="" className="text-base text-white max-sm:text-sm">
                Learn more
              </a>
            </div>
          </div>
          <div className="flex h-full w-[50%] items-center justify-center">
            <img className="h-[60%] w-[60%] object-cover max-sm:w-auto" src={bg2} alt="Autism Awareness" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderstandingNumber;
