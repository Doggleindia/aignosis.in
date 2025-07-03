import React from 'react';
import { Link } from 'react-router-dom';

const HomePageCard = ({ imageSrc, title, description, urlredirect }) => {
  return (
    <Link
      to={urlredirect}
      className="mx-4 my-8 flex rounded-[30px] border border-[#B740A1] bg-transparent p-4 text-[#0D0C0A]"
    >
      <div className="flex h-full w-[30vw] flex-row items-center justify-center p-2 px-[2vw]">
        <img src={imageSrc} alt="icon" className="m-[auto] h-full w-[100px]" />
        <div className="ml-6 flex w-full flex-col justify-start text-left">
          <p className="block text-lg font-semibold text-[#F6E8FB]">{title}</p>
          <p className="block text-sm text-[#F6E8FB]">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default HomePageCard;
