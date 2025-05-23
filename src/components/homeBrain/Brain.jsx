import React from 'react';
import Divider from '../aboutus/Divider';
import brain_img from '../../assets/brain_img.png';
import star from '../../assets/PopUps/star.png';

const Brain = () => {
  return (
    <div className="relative min-h-screen bg-[#1A0C25] p-[4vw] font-raleway max-sm:p-[6vw]">
      {/* Top Gradient */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-[20vw] w-full"
        style={{
          background: 'linear-gradient(180deg, #09121A 0%, rgba(9, 18, 26, 0) 10%)',
        }}
      ></div>

      <Divider title="Transformative" belowTitleImg={star} desc="" subtitle="How early interventions can help" />

      <div className="flex items-center justify-center gap-[8vw] max-sm:mx-2 max-sm:flex-col">
        <div className="absolute inset-0 -left-[20%] top-[50%] h-[20vw] w-[40vw] rounded-xl bg-[#B740A1] opacity-65 blur-[120px] sm:h-[10vw] sm:w-[40vw]"></div>

        <div className="flex flex-col gap-4 max-sm:items-center max-sm:justify-center">
          <div className="w-[350px] max-sm:w-[200px]">
            <img src={brain_img} alt="Brain illustration" />
          </div>
        </div>

        <div className="flex gap-[4vw] max-sm:flex-col max-sm:items-center max-sm:justify-center">
          {/* Card Column 1 */}
          <div className="mt-[2vw] flex flex-col gap-4">
            <div
              className="w-80 rounded-lg bg-gradient-to-b p-6 text-white shadow-lg"
              style={{
                background: 'radial-gradient(101.54% 60.98% at 50% 39.02%, #241E22 0%, #43284C 100%)',
              }}
            >
              <div className="flex">
                <div className="mr-2 h-6 w-2 rounded bg-[#1FCFF1]"></div>
                <h3 className="text-lg font-semibold">Catch Issues Early, Prevent Bigger Challenges</h3>
              </div>
              <p className="ml-4 mt-2 text-sm text-[#C4C4C4]">
                Early intervention helps identify developmental concerns before they turn into bigger problems.
              </p>
            </div>
            <div
              className="w-80 rounded-lg bg-gradient-to-b p-6 text-white shadow-lg"
              style={{
                background: 'radial-gradient(101.54% 60.98% at 50% 39.02%, #241E22 0%, #43284C 100%)',
              }}
            >
              <div className="flex">
                <div className="mr-2 h-6 w-1 rounded bg-[#9945FF]"></div>
                <h3 className="text-lg font-semibold">Maximize Your Child’s Potential</h3>
              </div>
              <p className="ml-4 mt-2 text-sm text-[#C4C4C4]">
                The sooner you start, the better the chances of your child reaching their full potential.
              </p>
            </div>
          </div>

          {/* Card Column 2 */}
          <div className="flex flex-col gap-4">
            <div
              className="w-80 rounded-lg bg-gradient-to-b p-6 text-white shadow-lg"
              style={{
                background: 'radial-gradient(101.54% 60.98% at 50% 39.02%, #241E22 0%, #43284C 100%)',
              }}
            >
              <div className="flex">
                <div className="mr-2 h-6 w-1 rounded bg-[#FFD512]"></div>
                <h3 className="text-lg font-semibold">Affordable and Accessible</h3>
              </div>
              <p className="ml-4 mt-2 text-sm text-[#C4C4C4]">
                Our experts provide home therapy plans for your kid, making parents co-therapists.
              </p>
            </div>
            <div
              className="w-80 rounded-lg bg-gradient-to-b p-6 text-white shadow-lg"
              style={{
                background: 'radial-gradient(101.54% 60.98% at 50% 39.02%, #241E22 0%, #43284C 100%)',
              }}
            >
              <div className="flex">
                <div className="mr-2 h-6 w-1 rounded bg-[#19FB9B]"></div>
                <h3 className="text-lg font-semibold">Improved Quality of Life for Families</h3>
              </div>
              <p className="mb-6 ml-4 mt-2 text-sm text-[#C4C4C4]">
                By addressing concerns early, both children and their families experience less stress and better
                communication.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[20vw] w-full"
        style={{
          background: 'linear-gradient(0deg, #09121A 0%, rgba(9, 18, 26, 0) 10%)',
        }}
      ></div>
    </div>
  );
};

export default Brain;
