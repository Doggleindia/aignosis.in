import React from "react";

const Divider = ({ title, desc, subtitle }) => {
  return (
    <>
      <div className="md:flex hidden flex-col items-center h-auto md:h-[auto] m-[auto] justify-center px-4 md:px-0">
        {/* DIVIDER CODE */}
        <div className="flex flex-row justify-center items-center space-x-4">
          <span
            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
            style={{
              background:
                "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
            }}
          ></span>
          <h3 className="text-[24px] text-[#F1C6FE] font-medium max-sm:text-sm">
            {title}
          </h3>
          
          <span
            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
            style={{
              background:
                "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
            }}
          ></span>
        </div>
        
        <span className="font-raleway text-[#F6E8FB] font-bold p-2 max-sm:text-xl text-3xl">
          {subtitle}
        </span>
        <span className="font-inter text-white p-1 text-1xl">
          {" "}
          {desc}
        </span>
      </div>
      <div className="flex md:hidden mt-[10vw] flex-col items-center h-auto md:h-[auto] m-[auto] justify-center px-4 md:px-0">
        {/* DIVIDER CODE */}
        <div className="flex flex-row justify-center items-center space-x-4">
          <span
            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
            style={{
              background:
                "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
            }}
          ></span>
          <h3 className="text-[24px] text-[#F1C6FE] text-center font-medium max-sm:text-sm">
            {title}
          </h3>
          <span
            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
            style={{
              background:
                "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
            }}
          ></span>
        </div>

        <span className="font-raleway text-center text-[#F6E8FB] font-bold p-2 max-sm:text-xl text-3xl">
          {subtitle}
        </span>
        <span className="font-inter text-center text-white p-1 text-1xl">
          {" "}
          {desc}
        </span>
      </div>
    </>
  );
};
export default Divider;
