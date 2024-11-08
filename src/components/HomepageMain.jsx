import React from 'react'
import Homepage from './Homepage'
import Laptop from './Laptop'
import Screen3 from './Screen3'
import Screen4 from './Screen4'
import Screen5 from './Screen5'
import MainComponent from './MainComponent'
import Footer from './Footer'
import PartnershipPage from './PartnershipPage'
import ContactPage from './ContactPage'
const HomepageMain = () => {
  return (
    <div className='bg-[#1A0C25]'>
    
      <Homepage />
      <Laptop />
      <Screen3 />
      <Screen4 />
      <Screen5 />
      <MainComponent />
      <PartnershipPage/>
      <ContactPage/>
      <Footer/>
      
    </div>
  )
}

export default HomepageMain