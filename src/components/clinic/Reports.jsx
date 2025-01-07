import React from 'react'
import img10 from "../../assets/clinic/img10.png";
const Reports = () => {
  return (
    <div className='bg-gradient-to-b flex max-sm:flex-col  justify-center items-center gap-[10vw] from-[#241E22] to-[#43284C] h-[60vh] p-[5vw] '>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row justify-start mr-2 items-center space-x-2">
          <span
            className="h-[4px] w-[50px] rounded-full"
            style={{
              background:
                "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
            }}
          ></span>
          <h1 className="text-sm text-[#F1C6FE] font-medium">Sample reports</h1>
          <span
            className="h-[4px] w-[50px] rounded-full"
            style={{
              background:
                "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
            }}
          ></span>
        </div>
        <h1 className="font-bold text-white font-manrope text-4xl text-left">
          View Our <br /> Comprehensive  Reports</h1>
        <p className="text-left text-sm text-white">
          Download in-depth reports on autism research, strategies, and resources. <br /> Gain valuable insights to better understand the condition and explore effective <br /> approaches for support and development.
        </p>
        <button className='text-center rounded-full text-white text-sm w-[12vw] border p-2 border-[#B740A1]'>Download sample report</button>
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
