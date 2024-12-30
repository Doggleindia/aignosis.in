import React from "react";
const Divider = ({ title,desc,subtitle }) => {
  return (
    <>
      <div className="flex flex-col items-center h-auto md:h-[auto] m-[auto] justify-center px-4 md:px-0">
        {/* DIVIDER CODE */}
        <div className="flex flex-row justify-center items-center space-x-4">
          <span
            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
            style={{
              background:
                "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
            }}
          ></span>
          <h1 className="text-[24px] text-[#F1C6FE] font-medium max-sm:text-sm">
            {title}
          </h1>
          <span
            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
            style={{
              background:
                "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
            }}
          ></span>
        </div>

        <span className="font-raleway font-bold p-2 text-3xl">
         {subtitle}
        </span>
        <span className="font-inter p-1 text-1xl">
          {" "}
          {desc}
        </span>
      </div>
    </>
  );
};
export default Divider;
