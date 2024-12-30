import React from 'react'
import img10 from "../../assets/clinic/img10.png";
const Reports = () => {
  return (
    <div className='bg-gradient-to-b flex max-sm:flex-col  justify-center items-center gap-[10vw] from-[#241E22] to-[#43284C] h-[60vh] p-[5vw] '>
      <div className='flex '>
           <div className='flex'>
               <p className='text-[#F6E8FB] font-raleway text-[55px] max-sm:text-[27px]'>Sample reports</p>
               
           </div>
      </div>
      <div className='w-[40vw]'>
      <div className="flex  justify-center items-center relative h-[300px]">
  {/* Left Image */}
  <img 
    src={img10} 
    alt="Left Image" 
    className="w-[300px] h-[300px] max-sm:w-[300px] max-sm:h-[250px] object-cover  shadow-lg"
  />

  {/* Right Image */}
  <img 
    src={img10}
    alt="Right Image" 
    className="w-[300px] h-[300px] max-sm:w-[300px] max-sm:h-[250px] object-cover  shadow-lg ml-[60px]"
  />

  {/* Middle Image */}
  <div className="absolute top-[50%] transform -translate-y-1/2 z-10">
    <img 
      src={img10} 
      alt="Middle Image" 
      className="w-[300px] h-[300px] max-sm:w-[300px] max-sm:h-[250px] object-cover mt-[4vw] max-sm:mt-[8vw]   shadow-lg"
    />
  </div>
</div>

      </div>
    </div>
  )
}

export default Reports;
