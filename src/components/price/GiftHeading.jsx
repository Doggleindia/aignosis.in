import React from 'react';

const GiftHeading = () => {
  return (
    <div>
      <div className="mb-[2vw] flex flex-col items-center gap-5 bg-[#1A0C25] text-white max-sm:mt-[14vw]">
        {/* Header Section */}
        <div className="mt-[7vw] flex flex-row items-center space-x-4">
          <span
            className="h-[10px] w-[118px] rounded-full"
            style={{
              background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
            }}
          ></span>
          <span className="font-raleway text-[24px] text-lg font-medium text-[#F1C6FE] max-sm:text-sm">
            Share as a gift
          </span>
          <span
            className="h-[10px] w-[118px] rounded-full"
            style={{
              background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
            }}
          ></span>
        </div>
        <h2 className="text-center font-raleway text-5xl font-semibold text-[#F6E8FB] max-sm:text-[20px]">
          Gift an Assessment
        </h2>
        <p className="max-w-auto text-md mt-4 text-center text-[#ECECEC] max-sm:p-3 max-sm:text-sm">
          Share the gift of support and insight by sending this assessment to a family in need. <br />
          Fill in the details below to personalize your gift and help make a difference in a child's journey.
        </p>
      </div>
    </div>
  );
};

export default GiftHeading;
