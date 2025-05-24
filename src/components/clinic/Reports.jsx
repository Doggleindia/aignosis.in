import React from 'react';
import img10 from '../../assets/r1.png';
import img11 from '../../assets/r2.png';
import img12 from '../../assets/r3.png';
import { GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Reports = () => {
  return (
    <div className="h-full items-center justify-center gap-[10vw] bg-gradient-to-b from-[#241E22] to-[#43284C] p-[5vw] max-sm:flex-col md:flex md:h-[60vh]">
      <div className="flex flex-col space-y-4">
        <div className="mr-2 flex flex-row items-center justify-center space-x-2 md:justify-start">
          <span
            className="h-[4px] w-[50px] rounded-full"
            style={{
              background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
            }}
          ></span>
          <span className="text-center text-sm font-medium text-[#F1C6FE]">Sample reports</span>
          <span
            className="h-[4px] w-[50px] rounded-full"
            style={{
              background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
            }}
          ></span>
        </div>
        <span className="text-center font-manrope text-2xl font-bold text-white md:text-left md:text-4xl">
          View Our <br /> Comprehensive Reports
        </span>
        <p className="text-center text-sm text-white md:text-left">
          Download in-depth reports on autism research, strategies, and resources. <br /> Gain valuable insights to
          better understand the condition and explore effective <br /> approaches for support and development.
        </p>
        <div className="flex w-full items-center justify-center md:justify-start">
          <div className="group mt-[2rem] flex h-[3.5rem] w-[60vw] cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-[#B740A1] bg-transparent text-[#0D0C0A] transition-colors duration-300 hover:bg-pink-500 max-sm:m-auto max-sm:mt-[11px] md:w-[15rem]">
            <a
              href="https://storage.googleapis.com/aignosis_static_assets/Screening-Report/sample_ai_report.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white"
            >
              Download sample report
            </a>

            <div className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-[#B740A1] text-xl text-white group-hover:bg-white group-hover:text-black">
              <GoArrowUpRight />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-[26vw] md:w-[40vw] md:px-10">
        <div className="relative flex h-[300px] items-center justify-center">
          {/* Left Image */}
          <img
            src={img12}
            alt="Left Image"
            className="h-[300px] object-cover shadow-lg max-sm:h-[250px] max-sm:w-[300px]"
          />

          {/* Right Image */}
          <img
            src={img11}
            alt="Right Image"
            className="ml-[40px] h-[300px] object-cover shadow-lg max-sm:h-[250px] max-sm:w-[300px]"
          />

          {/* Middle Image */}
          <div className="absolute top-[50%] z-10 -translate-y-1/2 transform">
            <img
              src={img10}
              alt="Middle Image"
              className="mt-[4vw] h-[300px] w-full object-cover shadow-lg max-sm:mt-[8vw] max-sm:h-[250px] max-sm:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
