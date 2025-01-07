import React from 'react'
import Divider from '../aboutus/Divider'
import img5 from "../../assets/clinic/img5.png";
import animal from "../../assets/animal.png";
import img1 from "../../assets/homepage/image i1.png";
import img2 from "../../assets/homepage/image i2.png";
import img3 from "../../assets/homepage/image i3.png";
import img4 from "../../assets/homepage/image i4.png";

const Features = () => {
  return (
    <div className='bg-[#1A0C25]  min-h-screen font-raleway  p-[4vw] '>

      <div >

        {/* <img src={animal} className='w-[00px]' alt="" /> */}
        <Divider title="Feature" desc='' subtitle='' />
        <div className='flex justify-center items-center' >

          <h1 className='text-[#F6E8FB] font-raleway -mt-10  max-sm:text-center text-[40px] md:mr-[20px] max-sm:text-[24px]'>Our Approach to Key Features and Solutions</h1>
          <img src={img5} className='w-[100px] max-sm:w-[50px] -mt-10' alt="" />
        </div>

      </div>
      <div className="flex flex-col justify-center items-center  gap-4 p-4">
        {/* Blank Divs */}
        <div className='flex max-sm:flex-col gap-4'>
          <div className="w-[40vw] h-[25vw] max-sm:w-[300px] max-sm:h-[300px] bg-[#43284C4D] rounded-lg border border-[#5455694D]">
            <div className="h-[60%] w-full flex justify-center items-center p-2 pt-5">
              <img className='object-contain w-full h-full' src={img1} alt="" />
            </div>
            <div className="flex flex-col text-white w-full justify-center items-center px-[8vw]">
              <h1 className='font-bold text-lg mt-4'>Privacy and Comfort at Home</h1>
              <p className='text-[#C4C4C4] text-xs mt-4'>Complete the test from the comfort of your own home, ensuring privacy for both you and your child.
              </p>
              <p className='text-[#C4C4C4] text-xs mt-2'>No need to visit a clinic—conduct the entire process in a relaxed environment, making it stress-free.
              </p>
            </div>
          </div>
          <div className="w-[30vw] h-[25vw] max-sm:w-[300px] max-sm:h-[300px] bg-[#43284C4D] rounded-lg border border-[#5455694D]">
            <div className="h-[60%] w-full flex justify-center items-center p-2 pt-5">
              <img className='object-contain w-full h-full' src={img2} alt="" />
            </div>
            <div className="flex flex-col text-white w-full justify-center items-center px-[5vw]">
              <h1 className='font-bold text-lg mt-4'>Accurate diagnosis</h1>
              <p className='text-[#C4C4C4] text-xs mt-4'>Our AI-driven system provides precise, reliable results to ensure accurate early diagnosis.

              </p>
              <p className='text-[#C4C4C4] text-xs mt-2'>Backed by experts, you can trust the system for accurate insights into your child’s development.
              </p>
            </div>
          </div>
        </div>
        <div className='flex max-sm:flex-col gap-4'>
          <div className="w-[30vw] h-[25vw] max-sm:w-[300px] max-sm:h-[300px] bg-[#43284C4D] rounded-lg border border-[#5455694D]">
            
            <div className="flex flex-col text-white w-full justify-center items-center px-[4vw]">
              <h1 className='font-bold text-lg mt-4'>Fast & easy test</h1>
              <p className='text-[#C4C4C4] text-xs mt-4'>Get results in minutes, with an easy-to-follow process that anyone can complete.

              </p>
              <p className='text-[#C4C4C4] text-xs mt-2'>Simple instructions make the test quick and hassle-free, ensuring a smooth experience.

              </p>
            </div>
            <div className="h-[60%] w-full flex justify-center items-center p-2 pt-5">
              <img className='object-contain w-full h-full' src={img3} alt="" />
            </div>
          </div>
          <div className="w-[40vw] h-[25vw] max-sm:w-[300px] max-sm:h-[300px] bg-[#43284C4D] rounded-lg border border-[#5455694D]">
            <div className="h-[60%] w-full flex justify-center items-center p-2 pt-5">
              <img className='object-contain w-full h-full' src={img4} alt="" />
            </div>
            <div className="flex flex-col text-white w-full justify-center items-center px-[7vw]">
              <h1 className='font-bold text-lg mt-4'>Non-Invasive Testing with Just Your Webcam</h1>
              <p className='text-[#C4C4C4] text-xs px-[1vw] mt-4'>The test is non-invasive, requiring only a standard webcam—no needles or complex equipment.

              </p>
              <p className='text-[#C4C4C4] text-xs px-[1vw] mt-2'>The child remains comfortable, simply interacting with the screen during the test for an easy experience.

              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Features
