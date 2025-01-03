import React from "react";

import HomePageCard from "./HomePageCard";
import OpenAI from "./OpenAI";
import BrainMain from "../homeBrain/BrainMain";
import Endrosed from "../clinic/Endrosed";
import Awards from "../clinic/Awards";
import Reports from "../clinic/Reports";
import BookScreening from "../BookScreening";
import PartnershipPage from "../PartnershipPage";
import FromDoctor from "../FromDoctor";

const HeroSection = () => {
  return (
    <>
      <div className="body w-[90%] h-screen flex-col m-auto justify-center align-center items-center hidden md:flex">
        <span className="justify-center block font-manrope font-md text-[#9C00AD]">
          WELCOME TO AIGNOSIS
        </span>
        <span className="text-white font-xl text-5xl py-[10px] font-manrope">
          Early Autism Detection Made
        </span>
        <span className="text-[#811f67] font-bold text-5xl font-manrope">
          Easy & Accurate
        </span>
        <p className="text-white font-raleway font-md text-center p-[10px]">
          AI.Gnosis offers AI-powered tools for early autism detection, providing actionable insights for parents and caregivers. Backed by clinical research and cutting-edge technology to ensure reliability, accuracy, and peace of mind—accessible from the comfort of your home or with professional guidance.
        </p>

        {/* home page Card */}
        <div className="flex flex-row">
          <HomePageCard />
          <HomePageCard />
        </div>
      </div>
      <div className="body w-[90%] h-screen flex-col m-auto justify-center align-center items-center flex md:hidden">
        {/* Welcome Text */}
        <span className="justify-center block font-manrope font-medium text-[#9C00AD] text-center tracking-widest uppercase mb-4">
          Welcome to Aignosis
        </span>

        {/* Main Heading */}
        <h1 className="text-white font-bold text-3xl font-manrope text-center mb-2">
          Early Autism Detection Made
        </h1>
        <h2 className="text-[#811f67] font-extrabold text-3xl font-manrope text-center mb-6">
          Easy & Accurate
        </h2>

        {/* Description */}
        <p className="text-white font-raleway font-normal text-center text-sm px-4 leading-relaxed mb-8">
          AI.Gnosis offers AI-powered tools for early autism detection, providing actionable insights for parents and caregivers. Backed by clinical research and cutting-edge technology to ensure reliability, accuracy, and peace of mind—accessible from the comfort of your home or with professional guidance.
        </p>

        {/* Buttons for Cards */}
        <div className="flex flex-col space-y-4 w-full">
          <button className="flex items-center justify-between w-full bg-[#2A013E] text-white border border-[#9C00AD] px-4 py-3 rounded-lg hover:bg-[#9C00AD] hover:text-[#2A013E] transition-all">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <span className="text-left">
                <strong className="block font-bold">Get your child tested now</strong>
                <span className="text-sm">Empowering Clinics with Advanced Autism Detection Tools</span>
              </span>
            </div>
          </button>

          <button className="flex items-center justify-between w-full bg-[#2A013E] text-white border border-[#9C00AD] px-4 py-3 rounded-lg hover:bg-[#9C00AD] hover:text-[#2A013E] transition-all">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <span className="text-left">
                <strong className="block font-bold">For doctors</strong>
                <span className="text-sm">Empowering Clinics with Advanced Autism Detection Tools</span>
              </span>
            </div>
          </button>
        </div>
      </div>


      <OpenAI />
      <BrainMain />
      <Endrosed />
      <FromDoctor />
      <Awards />
      <Endrosed />
      <Reports />
      <BookScreening />
      <PartnershipPage />

    </>
  );
};

export default HeroSection;
