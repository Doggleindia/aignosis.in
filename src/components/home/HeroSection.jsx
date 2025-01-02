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
      <div className="body w-[90%] h-screen flex-col m-auto flex justify-center align-center items-center">
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
          AI.Gnosis offers AI-powered tools for early autism detection,
          providing actionable insights for parents and caregivers. Backed by
          clinical research and cutting-edge technology to ensure reliability,
          accuracy, and peace of mind—accessible from the comfort of your home
          or with professional guidance.
        </p>

        {/* home page Card */}

        <div className="flex flex-row">
          <HomePageCard />
          <HomePageCard />
        </div>

      </div>
        <OpenAI />
        <BrainMain/>
        <Endrosed/>
        <FromDoctor/>
        <Awards/>
        <Endrosed/>
        <Reports/>
        <BookScreening/>
        <PartnershipPage/>

    </>
  );
};

export default HeroSection;
