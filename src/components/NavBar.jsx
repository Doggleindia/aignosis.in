import React from 'react';
import { FiAlignRight } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar 2xl:py-[10px] flex w-full items-center justify-between px-[5vw] text-center md:py-[14px]">
      <div className="relative inline-block">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-60 blur-lg"></div>
        <Link
          to="/"
          onClick={() => handleLinkClick('/')}
          className="2xl:text-3xl relative z-10 font-semibold tracking-wide text-white md:text-xl"
        >
          Aignosis
        </Link>
      </div>
      <div className="text-white">
        <FiAlignRight size={30} />
      </div>
    </div>
  );
};

export default NavBar;
