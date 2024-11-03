import React from 'react';
import frameImg from '../assets/images/pcvideo.svg'; // Update the path as per your project structure
import aivideo from '../assets/images/aivideo.mp4'; // Update the path as per your project structure

const Laptop = () => {
    return (
        <div className="w-full mb-2 text-white flex relative justify-center items-center h-screen font-montserrat bg-[#1A0C25]">
            {/* Gradient Blur Background with Lines */}
            <div className="absolute inset-0 z-0 flex justify-center items-center">
                {/* Background Gradient */}
                <div className="absolute w-[70%] h-[90%] bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl rounded-full"></div>
            </div>

            {/* Laptop Image */}
            <img className="w-[70%] object-fill h-[90%] z-10" src={frameImg} alt="Laptop Frame" />

            {/* Video to be embedded within the frame */}
            <div className="absolute w-[50%] h-[68%] top-[14%] left-[25%] z-20">
                <video 
                    src={aivideo}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            </div>
        </div>
    );
};

export default Laptop;
