import React, { useState, useEffect, useRef } from 'react';
import bg from '../assets/images/bg3.png';

const Screen3 = () => {
  const [showSecondCard, setShowSecondCard] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = containerRef.current.scrollLeft;
      const maxScrollLeft = containerRef.current.scrollWidth - containerRef.current.clientWidth;

      // Trigger animation when horizontal scroll reaches halfway
      if (scrollLeft >= maxScrollLeft / 2) {
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
    <div
      ref={containerRef}
      className='h-screen w-full overflow-x-scroll  snap-x snap-mandatory flex justify-center items-center bg-[#1A0C25]'
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="w-[200vw] flex justify-center items-center flex-col border-t rounded-3xl border-[#B874B580]">
        
        {/* Section Heading */}
        <div className='w-full flex-col h-[25vw] justify-center flex items-center snap-center'>
          <div className="flex justify-center gap-5 items-center">
            <div className='w-[8rem] h-[1rem] rounded-3xl bg-[#FFCADF21]'></div>
            <h1 className='text-[#F1C6FE]'>Understanding the Numbers</h1>
            <div className='w-[8rem] h-[1rem] rounded-3xl bg-[#FFCADF21]'></div>
          </div>
          <div className="mt-[2rem]">
            <h1 className='text-center text-6xl tracking-tight font-semibold leading-[3rem] text-[#F6E8FB]'>Understanding the Numbers</h1>
            <h1 className='text-center text-6xl italic tracking-tight font-semibold mt-5 leading-[3rem]  text-[#F6E8FB]  '>Developmental Delays & Autism</h1>
          </div>
          <div className='px-[25rem] mt-[2rem]'>
            <p className='text-center text-[#ECECEC]'>
              Gain insight into the prevalence of developmental challenges and autism among children.
              Each data point highlights the urgency of early detection, supporting parents with reliable information to act quickly. 
              Learn more about the numbers that drive our mission.
            </p>
          </div>
        </div>

        {/* First Card */}
        <div className='w-[60%] h-[20vw] flex border border-[#B874B540] rounded-3xl mb-10 relative overflow-hidden snap-center '>
          <div className="w-[50%] ml-[5rem] text-4xl h-full flex flex-col justify-center items-start">
            <h1 className='font-medium text-[#F6E8FB]'>
              <span className='text-[#811098] italic'>1 in 10</span> hildren experience developmental delays
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
            <img className='w-[60%] h-[60%] object-cover' src={bg} alt="" />
          </div>

          {/* Second Card */}
          <div
            className={`absolute inset-0 w-full h-full flex rounded-3xl transition-transform duration-700 ease-out ${
              showSecondCard ? 'translate-y-0 opacity-800' : 'translate-y-full opacity-0'
            }`}
            style={{
              background: 'radial-gradient(101.54% 60.98% at 50% 39.02%, #070B0E 0%, rgba(48, 8, 52, 0.6) 100%)',
              zIndex: 10,
            }}
          >
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
              <img className='w-[60%] h-[60%] object-cover' src={bg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen3;
