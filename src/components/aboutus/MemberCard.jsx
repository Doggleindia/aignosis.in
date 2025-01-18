import React from "react";

const MemberCard = ({title,subtitle, desc, src}) => {
  return (
    <>
      <div className=" mx-2 h-[18vw] flex  max-sm:inline-table justify-center border border-white border-opacity-10">
        <img
          src={src}
          alt="about"
          className=" w-full scale-[.8] h-full object-cover max-sm:aspect-[1/1] "
        />
        <div className="flex flex-col bg-[#43284C4D] px-5 py-9 ">
          <div className="flex font-bold text-xl ">{title}</div>
          { <span className="font-medium text-[10px]  block pt-2">{subtitle}</span> }
          {<span className="pt-4 block text-[8px] ">{desc}</span> }
        </div>
      </div>
    </>
  );
};
export default MemberCard;
