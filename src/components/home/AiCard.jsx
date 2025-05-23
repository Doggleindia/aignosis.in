import React from 'react';
import flag from './redflag.png';

const AiCard = ({ imageSrc, date, title, description = '' }) => {
  const descriptionWords = description.split(' ');

  return (
    <>
      {/* Desktop view */}
      <div className="relative mx-4 my-4 mt-[4vw] hidden w-[24%] flex-col rounded-[16px] border border-[#5455694D] bg-[#43284C4D] md:flex">
        {/* Content Image */}
        <img src={imageSrc} className="h-[200px] object-contain pt-4" alt="AI related content" />

        {/* Flag Icon */}
        <div className="absolute bottom-[20px] right-[20px] top-[11.5vw] flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#545569]">
          {/* Play Icon */}
          <img src={flag} alt="Play" className="h-[20px] w-[20px]" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-1 p-4">
          <span className="font-raleway text-xs text-[#D7DAE3] underline">{date}</span>

          <p className="block pt-2 font-montserrat text-sm font-bold text-[#CACED9]">
            {descriptionWords.map((word, index) => (
              <span key={index} style={{ color: index === 1 ? '#B740A1' : 'inherit' }}>
                {word}{' '}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Mobile view */}
      <div className="relative mx-4 my-4 flex w-full flex-col overflow-hidden rounded-[16px] border border-[#5455694D] bg-[#43284C] md:hidden">
        {/* Content Image */}
        <img src={imageSrc} className="h-[200px] w-full object-cover" alt="AI related content" />

        {/* Flag Icon */}
        <div className="absolute bottom-[16px] right-[16px] top-[41vw] flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#545569]">
          {/* Play Icon */}
          <img src={flag} alt="Play" className="h-[20px] w-[20px]" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-2 p-4">
          <span className="font-raleway text-xs text-[#D7DAE3] sm:text-sm">{date}</span>
          <span className="font-raleway text-lg text-[#D7DAE3] sm:text-xl">{title}</span>
          <p className="pt-2 font-raleway text-xs text-[#CACED9] sm:text-sm">{description}</p>
        </div>
      </div>
    </>
  );
};

export default AiCard;
