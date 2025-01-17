import React from 'react'
import img10 from "../../assets/prescription_img.png";
import img11 from "../../assets/prescription2_img.png";

const Reports = () => {
  return (
    <div className='bg-gradient-to-b md:flex max-sm:flex-col justify-center items-center gap-[10vw] from-[#241E22] to-[#43284C] h-full md:h-[60vh] p-[5vw] '>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row justify-center md:justify-start mr-2 items-center space-x-2">
          <span
            className="h-[4px] w-[50px] rounded-full"
            style={{
              background:
                "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
            }}
          ></span>
          <span className="text-sm text-center text-[#F1C6FE] font-medium">Sample reports</span>
          <span
            className="h-[4px] w-[50px] rounded-full"
            style={{
              background:
                "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
            }}
          ></span>
        </div>
        <span className="font-bold text-white font-manrope text-2xl md:text-4xl text-center md:text-left">
          View Our <br /> Comprehensive  Reports</span>
        <p className="md:text-left text-center text-sm text-white">
          Download in-depth reports on autism research, strategies, and resources. <br /> Gain valuable insights to better understand the condition and explore effective <br /> approaches for support and development.
        </p>
        <div className="w-full justify-center md:justify-start items-center flex">
          <button className='text-center rounded-full text-white text-sm w-[50vw] md:w-[12vw] border p-2 border-[#B740A1]'>Download sample report</button>
        </div>
      </div>
      <div className='md:w-[40vw] md:px-10 px-[26vw] w-full'>
        <div className="flex justify-center items-center relative h-[300px]">
          {/* Left Image */}
          <img
            src={img10}
            alt="Left Image"
            className="h-[300px] max-sm:w-[300px] max-sm:h-[250px] object-cover shadow-lg"
          />

          {/* Right Image */}
          <img
            src={img10}
            alt="Right Image"
            className="h-[300px] max-sm:w-[300px] max-sm:h-[250px] object-cover shadow-lg ml-[40px]"
          />

          {/* Middle Image */}
          <div className="absolute top-[50%] transform -translate-y-1/2 z-10">
            <img
              src={img11}
              alt="Middle Image"
              className="w-full h-[300px] max-sm:w-full max-sm:h-[250px] object-cover mt-[4vw] max-sm:mt-[8vw] shadow-lg"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Reports;
