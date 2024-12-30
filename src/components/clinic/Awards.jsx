import React from 'react'
import img7 from "../../assets/clinic/img7.png";
import AwardCard from './AwardCard';
const Awards = () => {
  return (
    <div className='bg-[#1A0C25]  p-[5vw] '>
             <div className="flex flex-row  justify-center  max-sm:mt-[15vw] items-center space-x-4 ">
        <span
          className="h-[10px] w-[100px] rounded-full max-sm:w-[60px]"
          style={{
            background:
              "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
          }}
        ></span>
        <span className="text-[24px] text-[#F1C6FE] font-medium max-sm:text-sm">
        Awards & Recognisation
        </span>
        <span
          className="h-[10px] w-[100px] rounded-full max-sm:w-[60px]"
          style={{
            background:
              "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
          }}
        ></span>
      </div>

       <div className='flex flex-col'>
        <div className='flex justify-center items-center' >
                     <img src={img7} className='w-[100px]' alt="" />
                     <h1 className='text-[#F6E8FB] font-raleway text-[48px] max-sm:text-[24px] md:mr-[20px]'>Celebrating Excellence and Innovation</h1>
                   </div>
                   <div className='flex justify-center items-center mx-auto md:w-[800px]'>
        
                   <p className='text-[#F6E8FB] text-center'>AI.Gnosis has been recognized globally for its groundbreaking contributions to early autism detection, earning accolades from industry leaders, medical communities, and innovation platforms.</p>
                   </div>

       </div>
       <div  className='flex max-sm:flex-col justify-center items-center gap-6 p-10'>
       <AwardCard />
       <AwardCard />
       <AwardCard />
       
       </div>
          

    </div>
  )
}

export default Awards
