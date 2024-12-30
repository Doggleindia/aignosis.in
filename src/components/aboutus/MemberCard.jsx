import React from "react";

const MemberCard = ({title,subtitle, desc, src}) => {
  return (
    <>
      <div className=" mx-2 flex justify-center border border-white border-opacity-10">
        <img
          src={src}
          alt="about"
          className=" w-[full] h-[full] object-cover"
        />
        <div className="flex flex-col bg-[#43284C4D]  p-9">
          <div className="flex  font-bold text-2xl">{title}</div>
          <span className="font-medium block pt-2">{subtitle}</span>
          <span className="pt-4 block text-sm">{desc}</span>
        </div>
      </div>
    </>
  );
};
export default MemberCard;
