import React, { useState, useEffect, useRef } from 'react';
import bg from '../assets/images/bg3.png';
import UnderstandingNumber from './InnerPages/UnderstandingNumber';

const Screen3 = () => {
  const Divider = ({ title }) => (
    <div className="mb-8 mt-10 flex flex-row items-center justify-center space-x-4">
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
        }}
      ></span>
      <h1 className="text-[24px] font-medium text-[#F1C6FE] max-sm:text-sm">{title}</h1>
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
        }}
      ></span>
    </div>
  );
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#1A0C25] max-sm:mt-[40vw] max-sm:h-[100vh]">
      <div className="flex h-auto w-full flex-col items-center justify-center md:w-[200vw]">
        {/* Section Heading */}
        <div className="flex h-[25vw] w-full snap-center flex-col items-center justify-center">
          <Divider title="Understanding the Numbers" />
          <div className="">
            <h1 className="2xl:text-5xl w-full text-center text-2xl font-semibold leading-[3rem] tracking-tight text-[#F6E8FB] max-sm:text-center md:text-3xl">
              Understanding the Numbers
            </h1>
            <h1 className="2xl:text-5xl 2xl:leading-[3rem] mt-5 text-center text-2xl font-semibold italic tracking-tight text-[#F6E8FB] max-sm:mr-[20px] max-sm:mt-0 md:text-4xl md:leading-[.1rem]">
              Developmental Delays & Autism
            </h1>
          </div>
          <div className="mb-3 mt-[2rem] flex flex-wrap px-[16rem] max-sm:mb-[250px] max-sm:mt-2 max-sm:px-[30px]">
            <p className="2xl:text-xl text-center text-sm text-[#ECECEC] md:text-base">
              Gain insight into the prevalence of developmental challenges and autism among children. Each data point
              highlights the urgency of early detection, supporting parents with reliable information to act quickly.
              Learn more about the numbers that drive our mission.
            </p>
          </div>
        </div>

        {/* Pass down the ref to UnderstandingNumber */}
        <UnderstandingNumber />
      </div>
    </div>
  );
};

export default Screen3;
