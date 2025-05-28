import React, { useState } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import PriceBody from './Priceplan/PriceBody';
import PricepageBanefits from './Priceplan/PricepageBanefits';
import HowitWorks from './Priceplan/HowitWorks';
import ContactPage from './ContactPage';
import BlogFooter from './BlogPages/BlogFooter';
import HowtoUseOptically from './Priceplan/HowtoUseOptically';
import CustomerLove from './Priceplan/CustomerLove';
import CustomerLove2 from './Priceplan/CustomerLove2';
import Features from './homeBrain/Features';
import FactorImpacting from './Priceplan/FactorImpacting';
import SEO from './config/Seo';
import Offer from './Offer';
import Newnavbar from './Newnavbar';
import WhatsAppButton from './WhatsAppButton';

const Priceplan = () => {
  const [selectedOption, setSelectedOption] = useState('Assessment');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      {/*<Newnavbar />*/}
      <SEO
        canonicalUrl={'https://aignosis.in/prices'}
        metaDescription={
          "Check out Aignosis' competitive pricing for autism assessments, psychological evaluations, and specialized care solutions. Affordable services for parents."
        }
        pageTitle={'Affordable Pricing for Autism Assessment & Care | Aignosis'}
      />
      <Header />
      <div className="h-full w-full overflow-x-hidden bg-[#1A0C25] p-2 text-white">
        {/* <div className="mt-[5vw] hidden h-full w-full md:block">
          <div className="ml-6 flex w-full gap-10 p-10"></div>
        </div> */}
        {/* <div className="mt-16 h-full w-full md:hidden">
          <div className="flex w-full justify-around gap-4 p-4"></div>
        </div> */}
        {/* <PriceBody selectedOption={selectedOption} /> */}
        <WhatsAppButton />
        <PricepageBanefits />
        <HowitWorks />
        <HowtoUseOptically />
        {/* <CustomerLove /> */}
        <Features />
        <FactorImpacting />
        <ContactPage />
      </div>
      <BlogFooter />
    </>
  );
};

export default Priceplan;
