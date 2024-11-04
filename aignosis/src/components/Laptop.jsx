import React from 'react';
import frameImg from '../assets/images/pcvideo.svg'; // Update the path as per your project structure
import aivideo from '../assets/images/aivideo.mp4'; // Update the path as per your project structure

const Laptop = () => {
    return (
        <div className="landing_sec mb-8">
        <div className="lan_sec_bottom mt-[-96] relative text-center">
          {/* Main video */}
          <video
            loop
            autoPlay
            muted
            className="border-[26px] border-black rounded-[22px] w-3/5 mx-auto"
          >
            <source src="https://graphterstudio.com/graphter/assets/media/rec.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
  
          {/* Decorative circles */}
          <div className="absolute top-[8px] left-1/2 w-[10px] h-[10px] rounded-full bg-[#252525] transform -translate-x-1/2 z-10"></div>
          <div className="absolute top-[11px] left-1/2 w-[6px] h-[6px] rounded-full bg-[#252525] transform translate-x-[30%] z-10"></div>
        </div>
      </div>
    );
};

export default Laptop;
