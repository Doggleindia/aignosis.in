import React from 'react';

const AwardCard = ({ imageSrc, altText = 'Award image' }) => {
  return (
    <div className="flex h-[150px] w-[200px] items-center justify-center rounded-xl bg-[#43284C4D] p-6 shadow-lg">
      <img src={imageSrc} className="h-full w-full scale-[1.2] object-contain" alt={altText} />
    </div>
  );
};

export default AwardCard;
