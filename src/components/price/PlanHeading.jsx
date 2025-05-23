import React from 'react';

const PlanHeading = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#1A0C25] p-6">
      {/* Header Section */}
      <div className="2xl:mt-[4vw] mb-8 mt-[6vw] flex flex-row items-center space-x-4 max-sm:mt-[15vw]">
        <span
          className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
          style={{
            background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
          }}
        ></span>
        <span className="text-[24px] font-medium text-[#F1C6FE] max-sm:text-sm">Choose A Plan</span>
        <span
          className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
          style={{
            background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
          }}
        ></span>
      </div>

      {/* Title and Description */}
      <div className="mb-10 flex flex-col items-center gap-4 px-6 text-center">
        <h1 className="font-raleway text-[40px] font-bold text-[#F6E8FB] max-sm:text-[20px]">
          Select Perfect Plan For Your Child's Needs
        </h1>
        <p className="text-md text-[#ECECEC] max-sm:text-sm">
          Find the ideal support plan tailored to your child’s unique journey. Our options are designed to provide
          targeted guidance, <br />
          whether for developmental assessments, therapy, or academic support, ensuring a comprehensive approach to
          their growth <br />
          and success.
        </p>

        <div className="h-auto w-[40vw] rounded-xl border border-[#B740A180] bg-[#9C00AD08] p-3 max-sm:w-[55vw] max-sm:text-sm">
          <p className="text-center font-raleway italic text-[#F6E8FB]">
            "Looking to support another child’s journey? You can also gift this assessment, offering meaningful support
            and valuable insights to families navigating similar paths."
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanHeading;
