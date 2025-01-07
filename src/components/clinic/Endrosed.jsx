import React from 'react'
import EndroseCard from './EndroseCard'
import laptop from "../../assets/homepage/laptop.png"
const Endrosed = () => {
  return (
    <>
      <div className='bg-[#1A0C25] p-[2vw] pb-[vw] '>
      <div className="flex flex-row  justify-center  max-sm:mt-[15vw] items-center space-x-4 ">
        <span
          className="h-[10px] w-[100px] rounded-full max-sm:w-[60px]"
          style={{
            background:
              "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
          }}
        ></span>
        <span className="text-[16px] text-[#F1C6FE] font-medium max-sm:text-sm">
          The Ai.gnosis Autism Test
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
          <img src={""} className='w-[100px]' alt="" />
          <h1 className='text-[#F6E8FB] mt-2 font-raleway text-[48px] text-center leading-[3vw] max-sm:text-[24px] mr-[20px]'> A quick, accurate, and non-invasive way to <br /> screen your child.</h1>
        </div>
        <div className='flex justify-center items-center mx-auto md:w-[800px]'>

          <p className='text-[#F6E8FB] mt-4 text-center'>This enables early detection and helping parents take proactive steps for their child’s development.</p>
        </div>
      </div>
    </div>
    <div className="w-full h-[40vw] bg-[#43284C4D]">
      <div className="flex flex-col p-4 justify-center items-center">
        <h1 className='text-[#B740A1] font-semibold font-raleway text-sm'>Step 1</h1>
        <h1 className='font-manrope font-bold text-white text-5xl'>Quick Screening Process</h1>
        <div className="w-full h-[30vw] ">
          <img src={laptop} className='object-contain w-full h-full' alt="" />
        </div>
        <p className='text-center text-sm px-[20vw] text-white font-raleway leading-[1.2vw]'>The Ai.gnosis Autism Test is designed to be swift and straightforward, allowing parents to complete the screening in just a few minutes. This quick process ensures minimal disruption while providing essential insights into your child’s developmental progress.</p>
      </div>
    </div>
    </>
  )
}

export default Endrosed
