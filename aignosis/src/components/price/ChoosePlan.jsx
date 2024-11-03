import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import popularImage from "../../assets/popular.png"; // Adjust the path if needed
import { Link } from "react-router-dom";

const ChoosePlan = () => {
  const [active, setActive] = useState("session");

  return (
    <div className="bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center p-6">
      {/* Header Section */}
      <div className="flex flex-row items-center space-x-4 mb-8">
        <span
          className="h-[10px] w-[118px] rounded-full"
          style={{
            background:
              "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
          }}
        ></span>
        <span className="text-[24px] text-[#F1C6FE] font-medium">Choose A Plan</span>
        <span
          className="h-[10px] w-[118px] rounded-full"
          style={{
            background:
              "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
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
          onClick={() => setActive("session")}
          className={`w-1/2 py-2 m-1 rounded-3xl text-[#F6E8FB] font-semibold ${
            active === "session" ? "bg-[#5D1661] border-[#B740A1]" : ""
          }`}
        >
          Session
        </button>
        <button
          onClick={() => setActive("assessment")}
          className={`w-1/2 py-2 m-1 rounded-3xl text-[#F6E8FB] font-semibold ${
            active === "assessment" ? "bg-[#5D1661] border-[#B740A1]" : ""
          }`}
        >
          Assessment
        </button>
      </div>

      {/* Pricing Cards Container */}
      <div className="flex flex-row gap-10">
        {/* Cards for "Session" */}
        {active === "session" && (
          <>
            {/* Pricing Card 1 */}
            <div className="w-[320px] h-[400px] rounded-3xl p-8 flex flex-col justify-between items-center text-white relative"
                 style={{
                   background: "radial-gradient(101.54% 60.98% at 50% 39.02%, #070B0E 0%, rgba(94, 40, 100, 0.3) 100%)",
                 }}>
              <div className="self-start px-4 py-2 rounded-2xl bg-[#B7407D54] text-xs font-semibold border border-[#B740A1]">
                10% Off!
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">₹666</h2>
                <span className="text-sm font-normal text-gray-400">(originally $499)</span>
              </div>
              <div className="space-y-2 text-center text-md">
                <p>6-Month Validity</p>
                <p>24 Sessions at $19/session</p>
                <p className="text-green-400 font-semibold">Save ₹50 overall!</p>
              </div>
              <button className="mt-6 px-6 py-3 rounded-full flex items-center justify-center space-x-2 border border-[#9C00AD] text-[#F6E8FB] font-semibold hover:bg-[#B7407D]  transition-colors duration-200">
                
                <Link to='/test/fillup'> <span>Click to proceed</span> </Link>
                <FiArrowRight className="text-lg" />
              </button>
            </div>
     

        {/* Pricing Card 2 */}
        <div className="w-[320px] h-[400px] rounded-3xl p-8 flex flex-col justify-between items-center text-white relative"
                 style={{
                   background: "radial-gradient(101.54% 60.98% at 50% 39.02%, #070B0E 0%, rgba(94, 40, 100, 0.3) 100%)",
                 }}>
                     <img
                src={popularImage}
                alt="Popular"
                className="absolute top-0 left-0 w-17 h-16" // Adjust size as needed
              />
              <div className="self-start px-4 py-2 rounded-2xl bg-[#B7407D54] text-xs font-semibold border border-[#B740A1]">
                30% Off!
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">₹899</h2>
                <span className="text-sm font-normal text-gray-400">(originally $999)</span>
              </div>
              <div className="space-y-2 text-center text-md">
                <p>6-Month Validity</p>
                <p>24 Sessions at $19/session</p>
                <p className="text-green-400 font-semibold">Save ₹240 overall!</p>
              </div>
              <button className="mt-6 px-6 py-3 rounded-full flex items-center justify-center space-x-2 border border-[#9C00AD] text-[#292738] bg-[#F6E8FB]  font-semibold hover:bg-[#B7407D]  transition-colors duration-200">
                <span>Click to proceed</span>
                <FiArrowRight className="text-lg" />
              </button>
            </div>



            {/* Pricing Card 3 */}
            <div className="w-[320px] h-[400px] rounded-3xl p-8 flex flex-col justify-between items-center text-white relative"
                 style={{
                   background: "radial-gradient(101.54% 60.98% at 50% 39.02%, #070B0E 0%, rgba(94, 40, 100, 0.3) 100%)",
                 }}>
             
              <div className="self-start px-4 py-2 rounded-2xl bg-[#B7407D54] text-xs font-semibold border border-[#B740A1]">
                20% Off!
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">₹749</h2>
                <span className="text-sm font-normal text-gray-400">(originally $499)</span>
              </div>
              <div className="space-y-2 text-center text-md">
                <p>6-Month Validity</p>
                <p>24 Sessions at $19/session</p>
                <p className="text-green-400 font-semibold">Save ₹150 overall!</p>
              </div>
              <button className="mt-6 px-6 py-3 rounded-full flex items-center justify-center space-x-2 border border-[#9C00AD]  font-semibold hover:bg-[#B7407D] transition-colors duration-200">
                <span>Click to proceed</span>
                <FiArrowRight className="text-lg" />
              </button>
            </div>

            
          </>
        )}

        {/* Cards for "Assessment" */}
        {active === "assessment" && (
           <div className=" w-[800px] p-6 rounded-lg shadow-lg flex justify-center" style={{
            background: "radial-gradient(101.54% 60.98% at 50% 39.02%, #070B0E 0%, rgba(94, 40, 100, 0.3) 100%)",
          }}>
          {/* Left Side Content */}
          <div className="w-[45%] pr-6 relative text-[#F6E8FB]">
            <div className="p-6 text-gray-800">
              {/* Discount Label at Top Left Corner */}
              <div className="absolute top-4 left-4 px-4 py-2 w-[90px] rounded-2xl bg-[#B7407D54] text-xs font-semibold border border-[#B740A1] text-[#F6E8FB]">
                20% Off!
              </div>
              <div className="text-center mt-10">
                <h2 className="text-3xl font-bold text-[#F6E8FB] mb-2">₹74</h2>
                <span className="text-sm font-normal text-[#F6E8FB] ">(Starting price)</span>
              </div>
              <div className="space-y-2 text-center text-md font-raleway text-white mt-4">
                <p>Comprehensive Evaluation</p>
                <p>Includes Formal Report</p>
                <p>Detailed Explanation</p>
                <p>Conducted by Licensed Psychologist</p>
              </div>
              <button className="mt-6 px-6 py-3 rounded-full flex items-center justify-center space-x-2 border border-[#9C00AD] text-[#F6E8FB] font-semibold hover:bg-[#B7407D] transition-colors duration-200">
                <span>Click to proceed</span>
                <FiArrowRight className="text-lg" />
              </button>
            </div>
          </div>
    
          {/* Right Side Content */}
          <div className="w-[45%] pl-6 border-l text-[#F6E8FB] border  border-[#B7407D80] rounded-md mx-auto my-auto ">
            
            <p className="mb-4 mt-[50px] font-[328px] font-raleway">Evaluations for
              Intelligence Quotient (IQ), Speech Development, Autism Spectrum Disorder, Attention Deficit Hyperactivity Disorder (ADHD), Dyslexia, and other Learning Disabilities.
            </p>
            
            <p className=" text-[#F6E8FB] font-[328px] mb-[50px]">Psychometric Evaluations for Cognitive Abilities and Social Functioning.</p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default ChoosePlan;
