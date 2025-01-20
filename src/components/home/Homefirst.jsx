import React, { useState, useEffect } from "react";
import HomePageCard from "./HomePageCard";

import m1 from "../../assets/mock1.png";
import m2 from "../../assets/mock2.png";
import sharks from "../../assets/Sharks.png"


const Homefirst = () => {

 
  // useEffect(() => {
  //   // Disable scrolling while the video is playing
  //   document.body.style.overflow = "hidden";

  //   // Delay showing content until the video animation is complete
  //   const timeout = setTimeout(() => {
  //     setShowContent(true);
  //     document.body.style.overflow = "auto";
  //   }, 4000); // Adjust timing based on the video duration

  //   return () => {
  //     clearTimeout(timeout);
  //     document.body.style.overflow = "auto";
  //   };
  // }, []);

  // // Animation variants
  // const textVariants = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: (delay) => ({
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 1, delay },
  //   }),
  // };

  // const cardVariants = {
  //   hidden: { opacity: 0, scale: 0.2 },
  //   visible: (delay) => ({
  //     opacity: 1,
  //     scale: 1,
  //     transition: { duration: 1, delay },
  //   }),
  // };


  // if (!showContent) {
  //   return (
  //     <motion.div
  //       initial={{ y: 0 }}
  //       animate={{ y: "-100%" }}
  //       transition={{ duration: 1, ease: "easeInOut", delay: 3 }}
  //       className="w-full h-screen bg-black z-30 relative flex justify-center items-center">
  //       <motion.div
  //         className="absolute z-40 flex justify-center items-center"
  //         initial="hidden"
  //         animate="visible"
  //         variants={{
  //           hidden: { opacity: 0, y: 20 },
  //           visible: {
  //             opacity: 1,
  //             y: 0,
  //             transition: {
  //               staggerChildren: 1,
  //               ease: [0.42, 0, 0.58, 1],
  //             },
  //           },
  //         }}
  //       >
  //         <div className="flex flex-col md:flex-row">
  //           <motion.h1
  //             className="text-white font-montserrat font-semibold tracking- text-3xl mt-2 md:text-5xl text-center"
  //             variants={{
  //               hidden: { opacity: 0, y: 20 },
  //               visible: { opacity: 1, y: 0 },
  //             }}
  //           >
  //             Frontier AI
  //           </motion.h1>
  //           <motion.h1
  //             className="text-white ml-2 font-montserrat  font-semibold tracking- text-3xl mt-2 md:text-5xl text-center"
  //             variants={{
  //               hidden: { opacity: 0, y: 20 },
  //               visible: { opacity: 1, y: 0 },
  //             }}
  //           >
  //             For Your Child’s
  //           </motion.h1>
  //           <motion.h1
  //             className="text-white ml-2 font-montserrat  font-semibold tracking- mt-2 text-3xl md:text-5xl text-center"
  //             variants={{
  //               hidden: { opacity: 0, y: 20 },
  //               visible: { opacity: 1, y: 0 },
  //             }}
  //           >
  //             {" "}Best Development
  //           </motion.h1>
  //         </div>
  //       </motion.div>
  //       <video
  //         src={firstanimation}
  //         className="absolute w-full h-full object-cover"
  //         autoPlay
  //         muted
  //       />
  //     </motion.div>
  //   );
  // }
  return (
    <>

   

        <>
          <div className={`relative z-0 body w-[90%] h-full pt-[12vw] flex-col m-auto justify-center align-center items-center hidden md:flex`}>
            <span
             
              className="justify-center block tracking-[.3vw] text-sm font-bold font-raleway text-[#9C00AD]"
            >
              WELCOME TO AIGNOSIS
            </span>
            <span
             
              className="text-white font-bold text-5xl pt-[20px] font-manrope"
            >
              Early Autism Detection Made
            </span>
            <span
              
              className="text-[#811f67] font-bold text-5xl font-manrope"
            >
              Easy & Accurate
            </span>
            <p
           
              className="text-white px-[20vw] font-raleway font-md text-center p-[10px]"
            >
              AI.Gnosis offers AI-powered tools for early autism detection,
              providing actionable insights for parents and caregivers. Backed
              by clinical research and cutting-edge technology to ensure
              reliability, accuracy, and peace of mind—accessible from the
              comfort of your home or with professional guidance.
            </p>

            {/* home page Card */}
            <div
             
              className="flex flex-row"
            >
              <HomePageCard
              urlredirect ='/prices'
                imageSrc={m1}
                title="Get your child tested now"
                description="Empowering Clinics with Advanced Autism Detection Tools"
              />
              <HomePageCard
              urlredirect={'/clinic'}
                imageSrc={m2}
                title="For doctors"
                description="Empowering Clinics with Advanced Autism Detection Tools"
              />            </div>
          </div>

          <div

            className="body w-[90%] h-full py-[20vh] flex-col m-auto justify-center align-center items-center flex md:hidden">
            {/* Welcome Text */}
            <span
             
              className="justify-center block font-manrope text-sm font-medium text-[#9C00AD] text-center tracking-widest uppercase mb-4">
              Welcome to Aignosis
            </span>

            {/* Main Heading */}
            <h1
             
              className="text-white font-bold text-2xl font-manrope text-center mt-2 ">
              Early Autism Detection Made
            </h1>
            <h2
               className="text-[#811f67] font-extrabold text-3xl font-manrope text-center mb-6">
              Easy & Accurate
            </h2>

            {/* Description */}
            <p
             
              className="text-white font-raleway font-normal text-center text-sm leading-relaxed mb-8">
              AI.Gnosis offers AI-powered tools for early autism detection,
              providing actionable insights for parents and caregivers. Backed
              by clinical research and cutting-edge technology to ensure
              reliability, accuracy, and peace of mind—accessible from the
              comfort of your home or with professional guidance.
            </p>

            {/* Buttons for Cards */}
            <div
              
              className="flex flex-col space-y-4 w-full">
              <button className="flex items-center justify-between w-full bg-[#1A0C25] text-white border border-[#9C00AD] px-4 py-3 rounded-3xl hover:bg-[#9C00AD] hover:text-[#2A013E] transition-all">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-full">
                    <img className="w-full h-full object-contain" src={m1} alt="" srcset="" />
                  </div>
                  <span className="text-left">
                    <strong className="block font-bold">
                      Get your child tested now
                    </strong>
                    <span className="text-sm">
                      Empowering Clinics with Advanced Autism Detection Tools
                    </span>
                  </span>
                </div>
              </button>

              <button className="flex items-center justify-between w-full bg-[#1A0C25] text-white border border-[#9C00AD] px-4 py-3 rounded-3xl hover:bg-[#9C00AD] hover:text-[#2A013E] transition-all">
                <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-full">
                    <img className="w-full h-full object-contain" src={m2} alt="" srcset="" />
                  </div>
                  <span className="text-left">
                    <strong className="block font-bold">For doctors</strong>
                    <span className="text-sm">
                      Empowering Clinics with Advanced Autism Detection Tools
                    </span>
                  </span>
                </div>
              </button>
            </div>
          </div>
          <div className="w-full 2xl:py-[10vw] md:py-[5vw]">
            <img className="w-full h-full" src={sharks} alt="" srcset="" />
          </div>
        </>
      

    </>
  );
};

export default Homefirst;
