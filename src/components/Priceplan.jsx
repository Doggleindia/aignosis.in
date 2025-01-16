import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import PriceBody from './Priceplan/PriceBody'
import PricepageBanefits from './Priceplan/PricepageBanefits'
import HowitWorks from './Priceplan/HowitWorks'
import ContactPage from './ContactPage'
import BlogFooter from './BlogPages/BlogFooter'
import HowtoUseOptically from './Priceplan/HowtoUseOptically'
import CustomerLove from './Priceplan/CustomerLove'
import CustomerLove2 from './Priceplan/CustomerLove2'
import Features from './homeBrain/Features'

const Priceplan = () => {
  return (
   <>
   <Header/>  
     <div className='bg-[#1A0C25] p-2 overflow-x-hidden text-white w-full h-full'>
      <div className="w-full mt-[5vw] hidden md:block h-full">
        <div className="w-full p-10 flex ml-6 gap-10">
          <button className='border-b border-[#811F67]'>Assesments</button>
          <button>Therapy</button>
        </div>
      </div>
      <div className="w-full mt-10 md:hidden h-full">
        <div className="w-full p-4 flex justify-around gap-4">
          <button className="border-b-2 border-[#811F67] text-white font-bold">Assessments</button>
          <button className="text-gray-600 font-semibold">Therapy</button>
        </div>
      </div>
      <PriceBody />
      <PricepageBanefits />
      <HowitWorks/>
      <HowtoUseOptically/>
      <CustomerLove/>
      <Features />
      <ContactPage/>
    </div>
    <BlogFooter/>
   </>
  )
}

export default Priceplan