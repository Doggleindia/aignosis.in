import React from 'react';

const HomePageCard = ({ imageSrc, title, description }) => {
  return (
    <div className="border border-[#B740A1] p-4 my-8 mx-4 rounded-[30px] flex text-[#0D0C0A] bg-transparent">
      <div className="flex w-[30vw] items-center justify-center flex-row">
        <img
          src={imageSrc}
          alt="icon"
          className="w-[100px] m-[auto] h-[75px]"
        />
        <div className="flex flex-col self-start p-[10px]">
          <p className="block text-[#F6E8FB] font-semibold text-lg">{title}</p>
          <p className="block text-sm text-[#F6E8FB]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageCard;
