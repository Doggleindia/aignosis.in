import React from 'react';
import member from "../../assets/images/aboutUs/member.png";
const HomePageCard = () => {
  console.log(import.meta.env.VITE_MAIN_BACKEND, "VITE_MAIN_BACKEND");

    return (
        <>
        <div className="border border-[#B740A1] p-4 my-8 mx-4  rounded-[30px] flex  text-[#0D0C0A]   bg-transparent ">
          <div className="flex flex-row">
            <img
              src={member}
              alt="icon are come "
              className="w-[66px] m-[auto] h-[62px] p-[10px]"
            />
            <div className="flex flex-col self-start p-[10px]">
              <p className="block text-[#F6E8FB] text-2xl">
                Getyour child tested now{" "}
              </p>
              <p className="block text-xl text-[#F6E8FB]">
                Empowering Clinics with Advanced Autism Detection Tools
              </p>
            </div>
          </div>
        </div>
        </>
    );
};

export default HomePageCard;