import React, { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Hamburger and close icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    //     <div>
    //       <div className="navbar text-white font-montserrat bg-[#1A0C25] w-full h-[7rem] flex justify-between items-center px-4 sm:px-8 md:px-[12rem]">
    //         <div className="relative inline-block">
    //           <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg"></div>
    //           <Link to="/" className="relative text-2xl md:text-3xl font-semibold tracking-wide text-white z-10">
    //             Ai.gnosis
    //           </Link>
    //         </div>

    //         {/* For larger screens, display full navigation */}
    //         <div className="hidden md:flex justify-center font-medium items-center gap-[8rem]">
    //           <Link to="/servicepage1" className="text-sm md:text-base font-raleway text-[#F6E8FB]">Services</Link>
    //           <Link to="/aboutus" className="text-sm md:text-base font-raleway text-[#F6E8FB]">About</Link>
    //           <Link to="/prices" className="text-sm md:text-base font-raleway text-[#F6E8FB]">Prices</Link>
    //           <Link 
    //             to="/appointment" 
    //             className="w-[15rem] gap-4 rounded-full flex justify-center cursor-pointer items-center text-[#0D0C0A] h-[3.5rem] bg-white group hover:bg-[#B7407D] hover:text-white transition-colors duration-300"
    //           >
    //             <span>Book an appointment</span>
    //             <div className="w-[2.5rem] text-white group-hover:text-black text-xl flex justify-center items-center h-[2.5rem] rounded-full bg-[#B740A1] group-hover:bg-white">
    //               <GoArrowUpRight />
    //             </div>
    //           </Link>
    //         </div>

    //         {/* For mobile screens, display hamburger menu and appointment button */}
    //         <div className="flex  items-center md:hidden">
    //           <button onClick={toggleMenu} className="text-white text-3xl mr-4">
    //             {menuOpen ? <FiX /> : <FiMenu />}
    //           </button>
    //           <Link 
    //             to="/appointment" 
    //             className="w-[10rem] gap-2 rounded-full flex justify-center cursor-pointer items-center text-[#0D0C0A] h-[2.5rem] bg-white group hover:bg-[#B7407D] hover:text-white transition-colors duration-300"
    //           >
    //             <span className="text-sm text-center">Book an appointment</span>
    //             <div className="w-[2rem] text-white group-hover:text-black text-lg flex justify-center items-center h-[2rem] rounded-full bg-[#B740A1] group-hover:bg-white mr-1 ">
    //               <GoArrowUpRight />
    //             </div>
    //           </Link>
    //         </div>
    //       </div>

    //       {/* Mobile menu */}
    //       <div 
    //   className={`flex flex-col md:hidden font-medium justify-center items-center gap-4 mt-2 transition-transform duration-300 ${menuOpen ? 'block' : 'hidden'}`}
    //   style={{ 
    //     background: 'radial-gradient(101.54% 60.98% at 50% 39.02%, #070B0E 0%, #300834 100%)', 
    //     width: '150px', // Adjust to fit smaller screen space
    //     height: '100px', // Reduce height to a smaller value
    //     marginTop: '0.5rem', // Slightly below the "Book an appointment" button
    //     position: 'absolute', // Position relative to its parent
    //     top: '5rem', // Push it down to align below the button
    //     left: '50%', // Center it horizontally on smaller screens
    //     borderRadius: '8px' // Rounded corners for a softer look
    //   }}
    // >
    //   <Link to="/servicepage1" className="text-sm  border-b border-[#952981] font-raleway text-[#F6E8FB] ">Services</Link>
    //   <Link onClick={()=>{console.log("clicked")}} to="/aboutus" className="text-sm  border-b border-[#952981] font-raleway text-[#F6E8FB]">About</Link>
    //   <Link to="/prices" className="text-sm   border-b border-[#952981] font-raleway text-[#F6E8FB]">Prices</Link>
    // </div>


    //     </div>
    <div className={`text-white w-full font-montserrat inline-block fixed top-0 z-10 transition-transform duration-300 translate-y-0 backdrop-blur-md bg-opacity-60`}>
      <div className="navbar text-center w-full flex justify-between items-center px-5 py-3">
        <div className="relative justify-center items-center inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg" ></div>
          <Link to="/" className="relative md:text-xl 2xl:text-3xl font-semibold tracking-wide text-white z-10">
            Ai.gnosis
          </Link>
        </div>
        <div className='flex justify-center font-medium items-center gap-[8rem]'>
          <Link to="/servicepage1">Services</Link>
          <Link to="/aboutus">About</Link>
          <Link to="/prices">Prices</Link> {/* Update to use 'to' prop */}
          <Link to="/test/fillup" className='w-[15rem] gap-3 rounded-full flex justify-center cursor-pointer items-center text-[#0D0C0A] h-[3.5rem] bg-white group hover:bg-[#B7407D] hover:text-white transition-colors duration-300'>
            <span>Book an appointment</span>
            <div className='w-[2.5rem] text-white group-hover:text-black text-xl flex justify-center items-center h-[2.5rem] rounded-full bg-[#B740A1] group-hover:bg-white'>
              <GoArrowUpRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
