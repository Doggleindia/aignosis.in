import React from "react";

const MemberCard = ({ title, subtitle, desc, src, logos = [] }) => {
  return (
    <div className="mx-2 h-[18vw] flex max-sm:inline-table justify-center border border-white border-opacity-10 lg:overflow-hidden">
      <img
        src={src}
        alt="about"
        className="w-full lg:max-w-[150px] scale-[.7] h-full object-contain max-sm:aspect-[1/1]"
      />
      <div className="flex flex-col bg-[#43284C4D] px-5 py-9">
        <div className="flex font-bold text-xl">{title}</div>
        <span className="font-medium text-[14px] block pt-2">{subtitle}</span>
        <span className="pt-4 block text-[11px]">{desc}</span>
        <div className="flex gap-2 mt-4 max-sm:justify-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="logo"
              className="w-16 h-16 max-sm:w-8 max-sm:h-8 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
