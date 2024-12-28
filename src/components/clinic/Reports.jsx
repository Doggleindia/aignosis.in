import React from 'react'
import img6 from "../../assets/clinic/img6.png";
const Reports = () => {
  return (
    <div className='bg-gradient-to-b flex max-sm:flex-col  justify-center items-center gap-[40px] from-[#241E22] to-[#43284C] h-[60vh] p-[10vw] '>
      <div className='flex '>
           <div className='flex'>
               <p className='text-[#F6E8FB] font-raleway text-[55px] max-sm:text-[27px]'>Sample reports</p>
               
           </div>
      </div>
      <div className='w-[40vw]'>
      <div className="flex  justify-center items-center relative h-[300px]">
  {/* Left Image */}
  <img 
    src="left-image.jpg" 
    alt="Left Image" 
    className="w-[300px] h-[300px] object-cover  shadow-lg"
  />

  {/* Right Image */}
  <img 
    src="right-image.jpg" 
    alt="Right Image" 
    className="w-[300px] h-[300px] object-cover  shadow-lg ml-[-50px]"
  />

  {/* Middle Image */}
  <div className="absolute top-[50%] transform -translate-y-1/2 z-10">
    <img 
      src="middle-image.jpg" 
      alt="Middle Image" 
      className="w-[200px] h-[200px] object-cover  border-4 border-white shadow-lg"
    />
  </div>
</div>

      </div>
    </div>
  )
}

export default Reports;
