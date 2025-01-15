import React, { useEffect } from 'react'
import Homepage from './Homepage'
import Laptop from './Laptop'
import Screen3 from './Screen3'
import Screen4 from './Screen4'
import Screen5 from './Screen5'
import MainComponent from './MainComponent'
import Footer from './Footer'
import PartnershipPage from './PartnershipPage'
import ContactPage from './ContactPage'
import WhatsAppButton from './WhatsAppButton'
import { useLocation } from 'react-router-dom'
import BlogFooter from './BlogPages/BlogFooter'
import AnimatedIntro from './home/AnimatedIntro'
const HomepageMain = () => {
  

  return (
    // <AnimatedIntro videoSrc="https://firebasestorage.googleapis.com/v0/b/wedmonkey-d6e0e.appspot.com/o/hero%20section.mp4?alt=media&token=06672c0e-6f06-4f5f-b3bf-94d221392c97" >
    <div className='bg-[#1A0C25] overflow-x-hidden'>
      <Homepage />
      <WhatsAppButton />
      <Laptop />
     
      <ContactPage/>
      <BlogFooter/>
    </div>
      // </AnimatedIntro>
  )
}

export default HomepageMain