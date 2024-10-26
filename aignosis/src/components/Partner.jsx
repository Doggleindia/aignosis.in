import React from 'react'
import  logo1 from '../assets/logo1.png'
import  logo2 from '../assets/logo2.png'
import  logo3 from '../assets/logo3.png'
import  logo4 from '../assets/logo4.png'
import  logo5 from '../assets/logo5.png'
const Partner = () => {
  return (
    <>
    
    <div className="bg-[#0e0b16] text-white py-8 px-4 text-center">
  <h2 className="text-2xl font-semibold mb-6">Our Partners</h2>
  <div className="flex flex-wrap justify-center items-center gap-8">
    {/* Replace the src attributes with the actual logo URLs */}
    <div className="flex items-center space-x-2">
      <span className="text-sm opacity-70">Backed By</span>
      <img src={logo1}alt="Finance" className="h-6" />
    </div>
    <img src={logo2} alt="Findr" className="h-6" />
    <img src={logo3} alt="Cosmic" className="h-6" />
    <img src={logo4}  alt="Athexa" className="h-6" />
    <img src={logo5} alt="Growing" className="h-6" />
  </div>
</div>



    </>
  )
}

export default Partner;
