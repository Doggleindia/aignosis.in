import React, { useState, useEffect, useRef } from 'react';
import bg from '../assets/images/bg3.png';
import UnderstandingNumber from './InnerPages/UnderstandingNumber';

const Screen3 = () => {
 
  return (
    <div
     
      className='h-screen w-full  flex justify-center items-center bg-[#1A0C25]'
      
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
            <h1 className='text-center text-6xl italic tracking-tight font-semibold mt-5 leading-[3rem] text-[#F6E8FB]'>Developmental Delays & Autism</h1>
          </div>
          <div className='px-[25rem] mt-[2rem]'>
            <p className='text-center text-[#ECECEC]'>
              Gain insight into the prevalence of developmental challenges and autism among children.
              Each data point highlights the urgency of early detection, supporting parents with reliable information to act quickly. 
              Learn more about the numbers that drive our mission.
            </p>
          </div>
        </div>

        {/* Pass down the ref to UnderstandingNumber */}
        <UnderstandingNumber bg={bg}  />
      </div>
    </div>
  );
};

export default Screen3;
