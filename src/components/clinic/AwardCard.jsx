import React from "react";

const AwardCard = ({ imageSrc, altText = "Award image" }) => {
  return (
    <div className="w-[15vw] justify-center items-center flex h-[12vw] p-4 bg-[#43284C4D] rounded-xl shadow-lg text-white">
      <img src={imageSrc} className="object-contain w-full h-full" alt={altText} />
    </div>
  );
};

export default AwardCard;
