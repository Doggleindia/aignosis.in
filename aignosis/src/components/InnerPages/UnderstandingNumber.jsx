import React, { useEffect, useRef, useState } from 'react';

const UnderstandingNumber = ({ bg }) => {
  const [showSecondCard, setShowSecondCard] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = containerRef.current.scrollTop;
      const maxScrollTop = containerRef.current.scrollHeight - containerRef.current.clientHeight;

      // Show second card when scroll passed halfway and hide when scrolling up
      if (scrollTop >= maxScrollTop / 2) {
        setShowSecondCard(true);
      } else {
        setShowSecondCard(false);
      }
    };

    const ref = containerRef.current;
    ref.addEventListener('scroll', handleScroll);

    return () => {
      ref.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className='w-[60%] h-[20vw] flex flex-col border border-[#B874B540] overflow-hidden snap-y snap-mandatory rounded-3xl mb-10 relative'
        style={{ scrollBehavior: 'smooth', overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Hide scrollbar for WebKit browsers */}
        <style>{`
          ::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* First Card */}
        <div className="firstCard snap-start flex relative z-10">
          <div className="w-[50%] ml-[5rem] text-4xl h-full flex flex-col justify-center items-start">
            <h1 className='font-medium text-[#F6E8FB]'>
              <span className='text-[#811098] italic'>1 in 10</span> children experience developmental delays
            </h1>
            
            <h1 className='font-medium flex gap-4 items-center'>
              <span className='w-[2rem] h-[2rem] rounded-full bg-red-600 text-xs flex justify-center items-center ml-[400px]'>SOS</span>
            </h1>
            <h1 className='text-base mt-2 text-[#F6E8FB]'>Early identification is essential for better support</h1>
            <div className='w-[10rem] cursor-pointer group hover:bg-[#B740A1] transition-colors duration-300 mt-[2rem] border-2 border-[#B740A1] gap-4 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3rem] bg-transparent'>
              <a href="" className='text-white text-base'>Learn more</a>
            </div>
          </div>
          <div className="w-[50%] h-full flex justify-center items-center">
            <img className='w-[60%] h-[60%] object-cover' src={bg} alt="Developmental Delays" />
          </div>
        </div>

        {/* Second Card */}
        <div
          className={`absolute inset-0 w-full h-full flex rounded-3xl transition-all duration-700 ease-in-out ${
            showSecondCard ? 'translate-y-0 opacity-100 z-20' : 'translate-y-full opacity-0 z-10'
          }`}
          style={{
            background: 'radial-gradient(101.54% 60.98% at 50% 39.02%, #070B0E 0%, rgba(48, 8, 52, 0.6) 100%)',
          }}
        >
          <div className="secondCard flex">
            <div className="w-[50%] ml-[5rem] text-4xl h-full flex flex-col justify-center items-start">
              <h1 className='font-medium text-[#F6E8FB]'>
                <span className='text-[#811098] italic'>1 in 64</span> children are autistic in India
              </h1>
              
              <h1 className='font-medium flex gap-4 items-center'>
                <span className='w-[2rem] h-[2rem] rounded-full bg-red-600 text-xs flex justify-center items-center ml-[400px]'>SOS</span>
              </h1>
              <h1 className='text-base mt-2 text-[#F6E8FB]'>Autism awareness and early detection can make a difference.</h1>
              <div className='w-[10rem] cursor-pointer group hover:bg-[#B740A1] transition-colors duration-300 mt-[2rem] border-2 border-[#B740A1] gap-4 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3rem] bg-transparent'>
                <a href="" className='text-white text-base'>Learn more</a>
              </div>
            </div>
            <div className="w-[50%] h-full flex justify-center items-center">
              <img className='w-[60%] h-[60%] object-cover' src={bg} alt="Autism Awareness" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnderstandingNumber;
