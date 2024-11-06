import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import popularImage from "../../assets/popular.png"; // Adjust the path if needed
import { Link } from "react-router-dom";
import { GoArrowUpRight, GoShare } from "react-icons/go";
import { FaShareAlt } from "react-icons/fa";
import img1 from '../../assets/assessments/as1.png'
import img2 from '../../assets/assessments/as2.png'
import img3 from '../../assets/assessments/as3.png'
import img4 from '../../assets/assessments/as4.png'



const ChoosePlan = () => {
  const [active, setActive] = useState("assessment");

  return (
    <div className="bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center p-6">
      {/* Header Section */}
      <div className="flex flex-row  items-center space-x-4 mb-8">
        <span
          className="h-[10px] w-[118px] rounded-full"
          style={{
            background:
              "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
          }}
        ></span>
        <span className="text-[24px] text-[#F1C6FE] font-medium max-sm:text-sm">Choose A Plan</span>
        <span
  className="h-[10px] w-[118px] rounded-full"
  style={{
    background:
      "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
  }}
></span>

      </div>

      {/* Title and Description */}
      <div className="flex flex-col items-center gap-4 text-center mb-10 px-6">
        <h1 className="font-raleway text-[#F6E8FB] text-[40px] font-bold">
          Select Perfect Plan For Your Child's Needs
        </h1>
        <p className="text-[#ECECEC] text-md">
          Find the ideal support plan tailored to your child’s unique journey. Our options are designed to provide targeted guidance, <br />
          whether for developmental assessments, therapy, or academic support, ensuring a comprehensive
          approach to their growth <br />and success.
        </p>
      </div>

      {/* Session/Assessment Toggle */}
      <div className="flex w-[210px] bg-[#9C00AD4A] border border-[#B740A1] rounded-3xl mb-10">

      <button
          onClick={() => setActive("assessment")}
          className={`w-1/2 py-2 m-1 rounded-3xl text-[#F6E8FB] font-semibold ${
            active === "assessment" ? "bg-[#5D1661] border-[#B740A1]" : ""
          }`}
        >
          Assessment
        </button>
        <button
          onClick={() => setActive("therapy")}
          className={`w-1/2 py-2 m-1 rounded-3xl text-[#F6E8FB] font-semibold ${
            active === "therapy" ? "bg-[#5D1661] border-[#B740A1]" : ""
          }`}
        >
          Therapy
        </button>
        
      </div>

      {/* Pricing Cards Container */}
      <div className="flex flex-row max-sm:flex-col gap-10 font-raleway">
        {/* Cards for "Session" */}
        {active === "therapy" && (
          <>
            {/* Pricing Card 1 */}
            <div className="w-[320px] h-[400px] rounded-3xl p-8 flex flex-col justify-between items-center text-white relative bg-[#564A5957]"
                 
                 >
              <div className="self-start px-4 py-2 rounded-2xl bg-[#B7407D54] text-xs font-semibold border border-[#B740A1]">
                10% Off!
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">₹24000</h2>
                <span className="text-sm font-normal text-gray-400">(originally ₹27000)</span>
              </div>
              <div className="space-y-2 text-center text-md">
                <p>3-Month Validity</p>
                <p>15 Sessions at ₹600/session</p>
                <p className="text-green-400 font-semibold">Save ₹3000 overall!</p>
              </div>
              <Link to="/payment" className="mt-6 px-6 py-3 rounded-full flex items-center justify-center space-x-2 border border-[#9C00AD] text-[#F6E8FB] font-semibold hover:bg-[#B7407D]  transition-colors duration-200">
                
                 <span>Click to proceed</span> 
                <FiArrowRight className="text-lg" />
              </Link>
            </div>
     

        {/* Pricing Card 2 */}
        <div className="w-[320px] h-[400px] rounded-3xl p-8 flex flex-col justify-between items-center text-white relative bg-[#564A5957]"
                 >
                     <img
                src={popularImage}
                alt="Popular"
                className="absolute top-0 left-0 w-17 h-16" // Adjust size as needed
              />
              <div className="self-start px-4 py-2 rounded-2xl bg-[#B7407D54] text-xs font-semibold border border-[#B740A1]">
                30% Off!
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">₹46000</h2>
                <span className="text-sm font-normal text-gray-400">(originally ₹54000)</span>
              </div>
              <div className="space-y-2 text-center text-md">
                <p>6-Month Validity</p>
                <p>30 Sessions at ₹600/session</p>
                <p className="text-green-400 font-semibold">Save ₹8000 overall!</p>
              </div>
              <Link to="/payment" className="mt-6 px-6 py-3 rounded-full flex items-center justify-center space-x-2 border border-[#9C00AD] text-[#292738] bg-[#F6E8FB]  font-semibold hover:bg-[#B7407D]  transition-colors duration-200">
                <span>Click to proceed</span>
                <FiArrowRight className="text-lg" />
              </Link>
            </div>



            {/* Pricing Card 3 */}
            <div className="w-[320px] h-[400px] rounded-3xl p-8 flex flex-col justify-between items-center text-white relative bg-[#564A5957]"
                >
             
              <div className="self-start px-4 py-2 rounded-2xl bg-[#B7407D54] text-xs font-semibold border border-[#B740A1]">
                20% Off!
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">₹90000</h2>
                <span className="text-sm font-normal text-gray-400">(originally ₹108000)</span>
              </div>
              <div className="space-y-2 text-center text-md">
                <p>one year Validity</p>
                <p>60 Sessions at ₹600/session</p>
                <p className="text-green-400 font-semibold">Save ₹18000 overall!</p>
              </div>
              <Link to="/payment" className="mt-6 px-6 py-3 rounded-full flex items-center justify-center space-x-2 border border-[#9C00AD]  font-semibold hover:bg-[#B7407D] transition-colors duration-200">
                <span>Click to proceed</span>
                <FiArrowRight className="text-lg" />
              </Link>
            </div>

            
          </>
        )}

       {/* Parent container for "Assessment" card */}
       {active === "assessment" && ( <div
  className="flex justify-center items-center rounded-md min-h-screen p-8"
  style={{
    background: "radial-gradient(83.36% 50.06% at 50.04% 49.94%, #070B0E 0%, rgba(94, 40, 100, 0.3) 100%)",
  }}
>
  {/* Card for "Assessment" */}
 
    <div className="w-[60vw] max-sm:w-[400px] p-8 flex flex-col items-center space-y-8">
      
      {/* Top Content: Discount and Price */}
      <div className="w-[20vw] h-auto flex flex-col bg-[#564A5957] border p-4 border-[#B740A180] items-center gap-5 text-center text-[#F6E8FB] rounded-xl font-raleway">
        {/* Discount Label */}
        <div className="px-4 py-2 w-[100px] rounded-2xl bg-[#B7407D54] text-xs text-left font-semibold border border-[#B740A1]">
          20% Off!
        </div>
        {/* Price and Details */}
        <h2 className="text-4xl font-bold mt-4">₹1400</h2>
        <p className="text-sm font-normal">(Comprehensive Evaluation)</p>
        <div className="space-y-2 text-center text-md mt-4">
          <p>Includes Formal Report</p>
          <p>Detailed Explanation</p>
          <p>Easy & fast procedure</p>
        </div>
      </div>
       <h2 className=" text-3xl font-raleway text-[#F6E8FB] italic font-bold">Autism screening test</h2>
      {/* Main Content: Screening Steps */}
      <div className="w-full flex justify-around text-[#F6E8FB] space-x-4 font-raleway">
        
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            {/* Placeholder for Step 1 Image */}
            <div className="w-[110px] h-[110px]  bg-gray-500 rounded-md">
              <img src={img1} className="w-full h-full" alt="" />
            </div>
          </div>
          <h3 className="font-bold text-lg">In-Depth Assessment</h3>
          <p className="text-sm ">Specialized evaluations that uncover your child’s unique abilities and areas for growth, providing clear insights into their developmental journey.</p>
        </div>
          
        {/* Step 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            {/* Placeholder for Step 2 Image */}
            <div className="w-[110px] h-[110px] bg-gray-500 rounded-md">
            <img src={img2} className="w-full h-full" alt="" />
            </div>
          </div>
          <h3 className="font-bold text-lg">Personalized Therapy</h3>
          <p className="text-sm">Individualized sessions focused on building essential skills, designed to support your child’s specific developmental needs in a nurturing environment.</p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            {/* Placeholder for Step 3 Image */}
            <div className="w-[110px] h-[110px] bg-gray-500 rounded-md">
            <img src={img3} className="w-full h-full" alt="" />
            </div>
          </div>
          <h3 className="font-bold text-lg">Adaptive Learning Support</h3>
          <p className="text-sm">Resources and guidance tailored to promote learning success and help your child confidently engage with educational goals.</p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            {/* Placeholder for Step 4 Image */}
            <div className="w-[110px] h-[110px] bg-gray-500 rounded-md">
            <img src={img4} className="w-full h-full" alt="" />
            </div>
          </div>
          <h3 className="font-bold text-lg">A Brighter Tomorrow</h3>
          <p className="text-sm">Empowering your child to grow, thrive, and enjoy a happier life with improved self-confidence and adaptive skills.</p>
        </div>
      </div>

      {/* Buttons Container */}
      <div className="flex justify-center space-x-4 mt-8">
      <Link to="/payment" className="px-2 w-auto md:h-[2.5rem] text-[#F6E8FB]  py-4 max-sm:px-1 max-sm:py-0 rounded-full text-lg max-sm:text-sm  font-semibold flex items-center space-x-2 hover:bg-[#B7407D] transition-colors border border-[#9C00AD]">
              <span>Take the assesment</span>
              <div className="w-[2rem] text-white group-hover:text-black text-lg flex justify-center items-center h-[2rem] rounded-full bg-[#B740A1] group-hover:bg-white  ">
              <GoArrowUpRight />
            </div>
            </Link>
            <button className="px-2 w-auto md:h-[2.5rem] text-[#F6E8FB]  py-4 max-sm:px-1 max-sm:py-0 rounded-full text-lg max-sm:text-sm  font-semibold flex items-center space-x-2 hover:bg-[#B7407D] transition-colors border border-[#9C00AD]">
              <span>Share the assesment</span>
              <div className="w-[2rem] text-white group-hover:text-black text-lg flex justify-center items-center h-[2rem] rounded-full bg-[#B740A1] group-hover:bg-white  ">
              <FaShareAlt />
            </div>
            </button>
      </div>
      
    </div>
  
</div>

)}

      </div>
    </div>
  );
};

export default ChoosePlan;
