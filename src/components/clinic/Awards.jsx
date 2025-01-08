import React from 'react'
import img7 from "../../assets/clinic/img7.png";
import img1 from "../../assets/homepage/image a1.png";
import img2 from "../../assets/homepage/image a2.png";
import img3 from "../../assets/homepage/image a3.png";
import img4 from "../../assets/homepage/image a4.png";
import img5 from "../../assets/homepage/image a5.png";

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
          Endorsed
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
          <h1 className='text-[#F6E8FB] font-raleway text-[48px] max-sm:text-[24px] md:mr-[20px]'>Supported by Leaders in Innovation and Care</h1>
        </div>
        <div className='flex justify-center items-center mx-auto md:w-[800px]'>

          <p className='text-[#F6E8FB] leading-[1.2vw] font-light text-base text-center'>AI.Gnosis is backed by renowned organizations, medical experts, and technology pioneers committed to advancing early autism detection and intervention worldwide."</p>
        </div>

      </div>
      <div className='flex max-sm:flex-col justify-center items-center gap-6 p-10'>
        <AwardCard imageSrc={img1} altText="First Award" />
        <AwardCard imageSrc={img2} altText="Second Award" />
        <AwardCard imageSrc={img3} altText="Third Award" />
        <AwardCard imageSrc={img4} altText="Fourth Award" />
        <AwardCard imageSrc={img5} altText="Fifth Award" />

      </div>


    </div>
  )
}

export default Awards
