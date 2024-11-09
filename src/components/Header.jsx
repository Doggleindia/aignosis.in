import React, { useEffect, useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false); // Close dropdown if main menu is toggled
  };
  
 const location=useLocation()

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

   // Update activeLink when the location changes
   useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="text-white w-full bg-[#1A0C25] 2xl:h-[4vw] md:h-[6vw] font-montserrat fixed top-0 z-10 transition-transform duration-300 translate-y-0 backdrop-blur-md bg-opacity-60">
      <div className="navbar text-center w-full flex justify-between items-center px-[5vw] md:py-[14px] 2xl:py-[10px]">
        
        {/* Logo Section */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg"></div>
          <Link to="/" onClick={() => handleLinkClick('/')} className="relative md:text-xl 2xl:text-3xl font-semibold tracking-wide text-white z-10">
            Ai.gnosis
          </Link>
        </div>
        
        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex justify-center font-medium items-center gap-[8rem]">
          <Link 
            to="/servicepage1" 
            onClick={() => handleLinkClick('/servicepage1')}
            className={`text-sm md:text-base font-raleway text-[#F6E8FB] ${activeLink === '/servicepage1' ? 'border-b-2 border-white' : ''}`}
          >
            Services
          </Link>
          <Link 
            to="/aboutus" 
            onClick={() => handleLinkClick('/aboutus')}
            className={`text-sm md:text-base font-raleway text-[#F6E8FB] ${activeLink === '/aboutus' ? 'border-b-2 border-white' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/prices" 
            onClick={() => handleLinkClick('/prices')}
            className={`text-sm md:text-base font-raleway text-[#F6E8FB] ${activeLink === '/prices' ? 'border-b-2 border-white' : ''}`}
          >
            Prices
          </Link>
          <Link 
            to="/test/fillup" 
            onClick={() => handleLinkClick('/appointment')}
            className="2xl:w-[17rem] md:w-[14rem] gap-3 rounded-full flex justify-center cursor-pointer items-center text-[#0D0C0A] md:h-[3rem] 2xl:h-[3.5rem] bg-white group hover:bg-[#B7407D] hover:text-white transition-colors duration-300"
          >
            <span className="2xl:text-base md:text-sm">Book an appointment</span>
            <div className="2xl:w-[2.5rem] md:w-[2rem] md:h-[2rem] text-white group-hover:text-black text-xl flex justify-center items-center 2xl:h-[2.5rem] rounded-full bg-[#B740A1] group-hover:bg-white">
              <GoArrowUpRight />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden items-center">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div 
          className="md:hidden flex flex-col items-center mt-2 pb-4"
          style={{ 
            background: 'radial-gradient(101.54% 60.98% at 50% 39.02%, #070B0E 0%, #300834 100%)', 
            width: '100%', 
            padding: '1rem 0',
            borderTop: '1px solid #952981',
            borderBottom: '1px solid #952981',
            borderRadius: '8px'
          }}
        >
          {/* Dropdown Links */}
          <Link 
            to="/servicepage1" 
            onClick={() => handleLinkClick('/servicepage1')}
            className={`text-sm font-raleway text-[#F6E8FB] border-b border-[#952981] ${activeLink === '/servicepage1' ? 'underline' : ''}`}
          >
            Services
          </Link>
          <Link 
            to="/aboutus" 
            onClick={() => handleLinkClick('/aboutus')}
            className={`text-sm font-raleway text-[#F6E8FB] border-b border-[#952981] ${activeLink === '/aboutus' ? 'underline' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/prices" 
            onClick={() => handleLinkClick('/prices')}
            className={`text-sm font-raleway text-[#F6E8FB] border-b border-[#952981] ${activeLink === '/prices' ? 'underline' : ''}`}
          >
            Prices
          </Link>

          {/* Book Appointment Button */}
          <Link 
            to="/test/fillup" 
            onClick={() => handleLinkClick('/appointment')}
            className="w-[10rem] gap-2 rounded-full flex justify-center cursor-pointer items-center text-[#0D0C0A] h-[2.5rem] bg-white group hover:bg-[#B7407D] hover:text-white transition-colors duration-300 mt-4"
          >
            <span className="text-sm text-center">Book an appointment</span>
            <div className="w-[2rem] text-white group-hover:text-black text-lg flex justify-center items-center h-[2rem] rounded-full bg-[#B740A1] group-hover:bg-white mr-1">
              <GoArrowUpRight />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
