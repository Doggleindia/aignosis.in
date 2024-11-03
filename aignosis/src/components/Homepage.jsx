import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import HeroSection from './InnerPages/HeroSection';

const Homepage = () => {
    return (
        // <div className='h-screen text-white w-full font-montserrat bg-[#1A0C25]'>
        //     <div className="navbar text-center w-full  flex justify-between items-center px-[8rem]">
        //         <div className="relative justify-center items-center inline-block">
        //             <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg"></div>
        //             <Link to="/" className="relative text-3xl font-semibold tracking-wide text-white z-10">Ai.gnosis</Link>
        //         </div>
        //         <div className='flex justify-center mt-7 font-medium items-center gap-[8rem]'>
        //             <Link to="/servicepage1">Services</Link>
        //             <Link to="/aboutus">About</Link>
        //             <Link to="/prices">Prices</Link> {/* Update to use 'to' prop */}
        //             <Link to="/appointment" className='w-[15rem] gap-3 rounded-full flex justify-center cursor-pointer items-center text-[#0D0C0A] h-[3.5rem] bg-white group hover:bg-[#B7407D] hover:text-white transition-colors duration-300'>
        //                 <span>Book an appointment</span>
        //                 <div className='w-[2.5rem] text-white group-hover:text-black text-xl flex justify-center items-center h-[2.5rem] rounded-full bg-[#B740A1] group-hover:bg-white'>
        //                     <GoArrowUpRight />
        //                 </div>
        //             </Link>
        //         </div>
        //     </div>
        // </div>
          <HeroSection/>
    );
}

export default Homepage;
