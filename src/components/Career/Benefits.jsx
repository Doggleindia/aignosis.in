import React from 'react';
import log1 from './log1.png';
import log2 from './log2.png';
import log3 from './log3.png';
import log4 from './log4.png';
import log5 from './log5.png';

const Benefits = () => {
  return (
    <section className="h-screen bg-[#1A0C25] max-sm:h-full">
      <div className="mb-12 text-center">
        {/* Gradient Pink Lines */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-1 w-20 rounded-full bg-gradient-to-l from-pink-500 to-transparent max-sm:mt-[4vw]"></div>
          <span className="font-semibold tracking-widest text-white max-sm:mt-[4vw]">Benefits</span>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-pink-500 to-transparent max-sm:mt-[4vw]"></div>
        </div>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold text-white max-sm:mt-[1vw]">Employee Benefits</h2>
      </div>

      <div className="px-4">
        {/* First Row */}
        <div className="m mb-8 flex flex-wrap justify-center gap-8">
          {/* Benefit 1 */}
          <div className="flex h-48 w-64 flex-col items-center justify-center rounded-lg bg-[radial-gradient(circle,_#1A0C25_20%,_#43284C_100%)] shadow-lg">
            <div className="flex h-16 w-16 items-center justify-center">
              {/* Placeholder for Image */}
              <img src={log1} alt="pic" />
            </div>
            <h3 className="text-md mt-4 font-semibold text-white">Comprehensive Health Coverage</h3>
          </div>

          {/* Benefit 2 */}
          <div className="flex h-48 w-64 flex-col items-center justify-center rounded-lg bg-[radial-gradient(circle,_#1A0C25_20%,_#43284C_100%)] shadow-lg">
            <div className="flex h-16 w-16 items-center justify-center">
              {/* Placeholder for Image */}
              <img src={log2} alt="pic" />
            </div>
            <h3 className="text-md mt-4 font-semibold text-white">Flexible Work Environment</h3>
          </div>

          {/* Benefit 3 */}
          <div className="flex h-48 w-64 flex-col items-center justify-center rounded-lg bg-[radial-gradient(circle,_#1A0C25_20%,_#43284C_100%)] shadow-lg">
            <div className="flex h-16 w-16 items-center justify-center">
              {/* Placeholder for Image */}
              <img src={log3} alt="pic" />
            </div>
            <h3 className="text-md mt-4 font-semibold text-white">Professional Development</h3>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Benefit 4 */}
          <div className="flex h-48 w-64 flex-col items-center justify-center rounded-lg bg-[radial-gradient(circle,_#1A0C25_20%,_#43284C_100%)] shadow-lg">
            <div className="flex h-16 w-16 items-center justify-center">
              {/* Placeholder for Image */}
              <img src={log4} alt="pic" />
            </div>
            <h3 className="text-md mt-4 font-semibold text-white">Competitive Compensation</h3>
          </div>

          {/* Benefit 5 */}
          <div className="flex h-48 w-64 flex-col items-center justify-center rounded-lg bg-[radial-gradient(circle,_#1A0C25_20%,_#43284C_100%)] shadow-lg">
            <div className="flex h-16 w-16 items-center justify-center">
              {/* Placeholder for Image */}
              <img src={log5} alt="pic" />
            </div>
            <h3 className="text-md mt-4 font-semibold text-white">Paid Time Off</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
