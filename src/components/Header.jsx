import React, { useEffect, useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [isHovered, setIsHovered] = useState(false);
  const [selectedService, setSelectedService] = useState(''); // Renamed state variable

  

  const handleServiceClick = (link) => {
    setActiveLink(link);
  };
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
    <div className="text-white w-full bg-[#1A0C25] 2xl:h-[4vw] md:h-[6vw] font-montserrat fixed top-0 z-20 transition-transform duration-300 translate-y-0 backdrop-blur-md bg-opacity-60">
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
         
        <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to=""
        onClick={() => handleServiceClick('/service1')} // Updated function name
        className={`text-sm md:text-base font-raleway text-[#F6E8FB] ${selectedService === '/service1' ? 'border-b-2 border-white' : ''}`} // Updated condition
      >
        Services
      </Link>

      {/* Dropdown menu */}
      {isHovered && (
  <div className="absolute bg-[#1A0C25] text-white p-2 rounded-lg shadow-lg top-[70%] left-0 w-56 z-10 mt-2 transition-all duration-200 ease-in-out">
    <ul className="space-y-2">
      <li>
        <Link 
          to="/service1" 
          onClick={() => handleServiceClick('/service1')}
          className="block p-3 rounded-md hover:bg-[#F6E8FB] hover:text-[#1A0C25] transition duration-200"
          aria-label="Service 1"
        >
          Service 1
        </Link>
      </li>
      <li>
        <Link 
          to="/service2" 
          onClick={() => handleServiceClick('/service2')}
          className="block p-3 rounded-md hover:bg-[#F6E8FB] hover:text-[#1A0C25] transition duration-200"
          aria-label="Service 2"
        >
          Service 2
        </Link>
      </li>
      <li>
        <Link 
          to="/service3" 
          onClick={() => handleServiceClick('/service3')}
          className="block p-3 rounded-md hover:bg-[#F6E8FB] hover:text-[#1A0C25] transition duration-200"
          aria-label="Service 3"
        >
          Service 3
        </Link>
      </li>
      <li>
        <Link 
          to="/service4" 
          onClick={() => handleServiceClick('/service4')}
          className="block p-3 rounded-md hover:bg-[#F6E8FB] hover:text-[#1A0C25] transition duration-200"
          aria-label="Service 4"
        >
          Service 4
        </Link>
      </li>
      <li>
        <Link 
          to="/service5" 
          onClick={() => handleServiceClick('/service5')}
          className="block p-3 rounded-md hover:bg-[#F6E8FB] hover:text-[#1A0C25] transition duration-200"
          aria-label="Service 5"
        >
          Service 5
        </Link>
      </li>
    </ul>
  </div>
)}

    </div>



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
            to="/BlogPages" 
            onClick={() => handleLinkClick('/prices')}
            className={`text-sm md:text-base font-raleway text-[#F6E8FB] ${activeLink === '/BlogPages' ? 'border-b-2 border-white' : ''}`}
          >
            Blogs
          </Link>
          <a
            href='#contact' 
            onClick={() => handleLinkClick('/appointment')}
            className="2xl:w-[17rem] md:w-[14rem] gap-3 rounded-full flex justify-center cursor-pointer items-center text-[#0D0C0A] md:h-[3rem] 2xl:h-[3.5rem] bg-white group hover:bg-[#B7407D] hover:text-white transition-colors duration-300"
          >
            <span className="2xl:text-base md:text-sm">Book an appointment</span>
            <div className="2xl:w-[2.5rem] md:w-[2rem] md:h-[2rem] text-white group-hover:text-black text-xl flex justify-center items-center 2xl:h-[2.5rem] rounded-full bg-[#B740A1] group-hover:bg-white">
              <GoArrowUpRight />
            </div>
          </a>
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
            to="/service1" 
            onClick={() => handleLinkClick('/service1')}
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
          <Link 
            to="/BlogPages" 
            onClick={() => handleLinkClick('/prices')}
            className={`text-sm font-raleway text-[#F6E8FB] border-b border-[#952981] ${activeLink === '/BlogPages' ? 'underline' : ''}`}
          >
            Blogs
          </Link>
          {/* Book Appointment Button */}
          <a
           href='#contact' 
            onClick={() => handleLinkClick('/appointment')}
            className="w-[10rem] gap-2 rounded-full flex justify-center cursor-pointer items-center text-[#0D0C0A] h-[2.5rem] bg-white group hover:bg-[#B7407D] hover:text-white transition-colors duration-300 mt-4"
          >
            <span className="text-sm text-center">Book an appointment</span>
            <div className="w-[2rem] text-white group-hover:text-black text-lg flex justify-center items-center h-[2rem] rounded-full bg-[#B740A1] group-hover:bg-white mr-1">
              <GoArrowUpRight />
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
