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
import Homefirst from "./Homefirst";

const HeroSection = () => {
  return (
    <>
      <Homefirst/>
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
