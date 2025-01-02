import React from 'react'
import Divider from '../aboutus/Divider'
import img5 from "../../assets/clinic/img5.png";
import animal from "../../assets/animal.png";
const Features = () => {
  return (
    <div className='bg-[#1A0C25]  min-h-screen font-raleway  p-[4vw] '>
         
        <div >
           
        {/* <img src={animal} className='w-[00px]' alt="" /> */}
        <Divider title="Text" desc='' subtitle = ''   />
        <div className='flex justify-center items-center' >
                     
                     <h1 className='text-[#F6E8FB] font-raleway  max-sm:text-center text-[48px] md:mr-[20px] max-sm:text-[24px]'>Features and how we are solving it </h1>
                     <img src={img5} className='w-[100px] max-sm:w-[50px]' alt="" />
                   </div>
        
        </div>
        <div className="flex flex-col justify-center items-center  gap-4 p-4">
        {/* Blank Divs */}
        <div className='flex max-sm:flex-col  gap-2'>
        <div className="w-[25vw] h-[25vw] max-sm:w-[300px] max-sm:h-[300px]    bg-[#43284C4D] rounded-lg border border-[#5455694D]"></div>
        <div className="w-[20vw] h-[25vw] max-sm:w-[300px] max-sm:h-[300px]     bg-[#43284C4D] rounded-lg border border-[#5455694D]"></div>
        </div>
            <div className='flex max-sm:flex-col  gap-2'>
            <div className="w-[20vw] h-[25vw] max-sm:w-[300px] max-sm:h-[300px]     bg-[#43284C4D] rounded-lg border border-[#5455694D]"></div>
            <div className="w-[25vw] h-[25vw] max-sm:w-[300px] max-sm:h-[300px]      bg-[#43284C4D] rounded-lg border border-[#5455694D]"></div>
            </div>
        
      </div>
   
    </div>
  )
}

export default Features
