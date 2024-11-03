import React from 'react'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'

const Partner = () => {
  return (
    <div className="bg-[#14081E] max-sm:h-[80vh] text-white py-10 px-6 text-center">
      <h2 className="text-3xl max-sm:text-5xl font-semibold mb-8 opacity-90">Our Partners</h2>
      <div className="flex flex-wrap  max-sm:flex-row justify-center items-center gap-10 flex-col md:flex-row">
        <div className="flex items-center space-x-3">
          <span className="text-sm opacity-70">Backed By</span>
          <img src={logo1} alt="Finance" className="h-8 md:h-10 opacity-90 max-sm:w-[100px]" />
        </div>
        <img src={logo2} alt="Findr" className="h-8  md:h-10 opacity-90 max-sm:w-[100px]" />
        <img src={logo3} alt="Cosmic" className="h-8 md:h-10 opacity-90 max-sm:w-[100px]" />
        <img src={logo4} alt="Athexa" className="h-8 md:h-10 opacity-90 max-sm:w-[100px]" />
        <img src={logo5} alt="Growing" className="h-8 md:h-10 opacity-90 max-sm:w-[100px]" />
      </div>
    </div>
  )
}

export default Partner;
