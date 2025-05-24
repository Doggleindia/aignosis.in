import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const GiftAssessment = () => {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center gap-5 bg-[#1A0C25] text-white">
        {/* Header Section */}

        <div className="mt-8 w-[40vw] rounded-lg border border-[#B740A180] bg-[#9C00AD08] p-10 max-sm:w-[80vw]">
          <h3 className="mb-4 text-center text-xl font-semibold text-[#ECECEC]">Sender's Details</h3>
          <input type="text" placeholder="Name" className="mb-3 w-full rounded bg-[#2521276B] p-2" />
          <input type="email" placeholder="Email" className="mb-3 w-full rounded bg-[#2521276B] p-2" />
          <input type="tel" placeholder="Phone number" className="mb-3 w-full rounded bg-[#2521276B] p-2" />
          <div className="flex items-center justify-center">
            <input type="checkbox" className="mr-2 rounded-full" />
            <label>Save my details</label>
          </div>
        </div>

        <div className="w-[40vw] rounded-lg border border-[#B740A180] bg-[#9C00AD08] p-6 max-sm:w-[80vw]">
          <h3 className="mb-4 text-center text-xl font-semibold">Receiver's Details</h3>
          <input type="text" placeholder="Name" className="mb-3 w-full rounded bg-[#2521276B] p-2" />
          <input type="email" placeholder="Email" className="mb-3 w-full rounded bg-[#2521276B] p-2" />
          <input type="tel" placeholder="Phone number" className="mb-3 w-full rounded bg-[#2521276B] p-2" />
          <div className="flex space-x-2">
            <input type="text" placeholder="Area/City" className="mb-3 w-full rounded bg-[#2521276B] p-2" />
            <input type="text" placeholder="State" className="mb-3 w-full rounded bg-[#2521276B] p-2" />
          </div>
          <div className="m-2 flex items-center">
            <input type="checkbox" className="mr-2 bg-[#2521276B]" />
            <label>Add your name</label>
          </div>
          <input type="date" className="mb-3 w-full rounded bg-[#2521276B] p-2" />
          <textarea placeholder="Your Message" className="mb-3 w-full rounded bg-[#2521276B] p-2"></textarea>
          <div className="flex items-center justify-center">
            <Link
              to="/payment"
              className="flex w-auto items-center space-x-2 rounded-full border border-[#9C00AD] px-2 py-4 text-lg font-semibold text-[#F6E8FB] transition-colors hover:bg-[#B7407D] max-sm:px-1 max-sm:py-0 max-sm:text-sm md:h-[2.5rem]"
            >
              <span>Click to proceed</span>
              <div className="flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-[#B740A1] text-lg text-white group-hover:bg-white group-hover:text-black">
                <GoArrowUpRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftAssessment;
