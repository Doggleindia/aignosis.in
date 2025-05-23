import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
// import frameImg from '../assets/images/pcvideo.svg'; // Update the path as per your project structure
// import aivideo from '../assets/video/Aignosis_Product_intro.mp4'; // Update the path as per your project structure

const Laptop = () => {
  return (
    <div className="landing_sec 2xl:mb-24 mb-4">
      <div className="lan_sec_bottom 2xl:mt-[130px] relative text-center md:mt-[100px]">
        {/* Main video */}
        <video loop autoPlay controls muted className="mx-auto w-[80%] rounded-[22px] border-[26px] border-[#a19e9e6e]">
          <source
            src="https://firebasestorage.googleapis.com/v0/b/wedmonkey-d6e0e.appspot.com/o/Aignosis_Product_intro%20(1).mp4?alt=media&token=d9c52a79-1717-4cab-906b-4f475dfe0a4b"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Decorative circles */}
        <div className="absolute left-1/2 top-[8px] z-10 h-[10px] w-[10px] -translate-x-1/2 transform rounded-full bg-[#252525]"></div>
        <div className="absolute left-1/2 top-[11px] z-10 h-[6px] w-[6px] translate-x-[calc(100%_+_5px)] transform rounded-full bg-[#252525]"></div>

        {/* Blur effect */}
        <div className="absolute inset-0 bottom-0 left-0 top-[90%] h-[15vw] w-[15vw] rounded-xl bg-[#B740A1] opacity-65 blur-[120px] sm:h-[10vw] sm:w-[10vw]"></div>
      </div>
    </div>
  );
};

export default Laptop;
