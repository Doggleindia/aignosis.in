import React, { useState, useEffect } from "react";
import HomePageCard from "./HomePageCard";
import { motion } from "framer-motion";

const Homefirst = () => {
  const [showContent, setShowContent] = useState(false);

  // useEffect(() => {
  //   // Delay showing content until the video animation is complete
  //   const timeout = setTimeout(() => {
  //     setShowContent(true);
  //   }, 10000); // Adjust timing based on the video duration

  //   return () => clearTimeout(timeout);
  // }, []);
  useEffect(() => {
    // Disable scrolling while the video is playing
    document.body.style.overflow = "hidden";

    // Delay showing content until the video animation is complete
    const timeout = setTimeout(() => {
      setShowContent(true);
      document.body.style.overflow = "auto";
    }, 4000); // Adjust timing based on the video duration

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = "auto";
    };
  }, []);

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.2 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay },
    }),
  };


  if (!showContent) {
    return (
      <motion.div 
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 1, ease: "easeInOut", delay: 3 }}
      className="w-full h-screen bg-black z-30 relative flex justify-center items-center">
        {/* This will render a blank screen */}
        <video
              src="https://firebasestorage.googleapis.com/v0/b/wedmonkey-d6e0e.appspot.com/o/hero%20section.mp4?alt=media&token=06672c0e-6f06-4f5f-b3bf-94d221392c97"
              className="absolute  w-full h-full object-cover"
              autoPlay
              muted
            />
      </motion.div>
    );
  }
  return (
    <>
    
        {/* Video animation section */}
        {/* {!showContent && (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 10 }}
            className="absolute  inset-0 w-full h-full z-20 pointer-events-none"
          >
            <video
              src="https://firebasestorage.googleapis.com/v0/b/wedmonkey-d6e0e.appspot.com/o/hero%20section.mp4?alt=media&token=06672c0e-6f06-4f5f-b3bf-94d221392c97"
              className="absolute  w-full h-full object-cover"
              autoPlay
              muted
            />
          </motion.div>
        )} */}

        {showContent && (
          <>
            <motion.div
              initial="hidden"
              animate="visible"
              className={` relative z-0 body w-[90%] h-screen flex-col m-auto justify-center align-center items-center hidden md:flex`}
            >
              <motion.span
                custom={0.2}
                variants={textVariants}
                className="justify-center block font-manrope font-md text-[#9C00AD]"
              >
                WELCOME TO AIGNOSIS
              </motion.span>
              <motion.span
                custom={0.4}
                variants={textVariants}
                className="text-white font-xl text-5xl py-[10px] font-manrope"
              >
                Early Autism Detection Made
              </motion.span>
              <motion.span
                custom={0.6}
                variants={textVariants}
                className="text-[#811f67] font-bold text-5xl font-manrope"
              >
                Easy & Accurate
              </motion.span>
              <motion.p
                custom={0.8}
                variants={textVariants}
                p
                className="text-white font-raleway font-md text-center p-[10px]"
              >
                AI.Gnosis offers AI-powered tools for early autism detection,
                providing actionable insights for parents and caregivers. Backed
                by clinical research and cutting-edge technology to ensure
                reliability, accuracy, and peace of mind—accessible from the
                comfort of your home or with professional guidance.
              </motion.p>

              {/* home page Card */}
              <motion.div
                custom={1}
                variants={cardVariants}
                className="flex flex-row"
              >
                <HomePageCard />
                <HomePageCard />
              </motion.div>
            </motion.div>

            <motion.div 
            
            className="body w-[90%] h-screen flex-col m-auto justify-center align-center items-center flex md:hidden">
              {/* Welcome Text */}
              <motion.span
              custom={0.2}
              variants={textVariants}
               className="justify-center block font-manrope font-medium text-[#9C00AD] text-center tracking-widest uppercase mb-4">
                Welcome to Aignosis
              </motion.span>

              {/* Main Heading */}
              <motion.h1
              custom={0.4}
              variants={textVariants}
               className="text-white font-bold text-3xl font-manrope text-center mb-2">
                Early Autism Detection Made
              </motion.h1>
              <motion.h2
              custom={0.6}
              variants={textVariants} className="text-[#811f67] font-extrabold text-3xl font-manrope text-center mb-6">
                Easy & Accurate
              </motion.h2>

              {/* Description */}
              <motion.p
              custom={0.8}
              variants={textVariants}
              className="text-white font-raleway font-normal text-center text-sm px-4 leading-relaxed mb-8">
                AI.Gnosis offers AI-powered tools for early autism detection,
                providing actionable insights for parents and caregivers. Backed
                by clinical research and cutting-edge technology to ensure
                reliability, accuracy, and peace of mind—accessible from the
                comfort of your home or with professional guidance.
              </motion.p>

              {/* Buttons for Cards */}
              <motion.div
              custom={1}
              variants={cardVariants}
              className="flex flex-col space-y-4 w-full">
                <button className="flex items-center justify-between w-full bg-[#2A013E] text-white border border-[#9C00AD] px-4 py-3 rounded-lg hover:bg-[#9C00AD] hover:text-[#2A013E] transition-all">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
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

                <button className="flex items-center justify-between w-full bg-[#2A013E] text-white border border-[#9C00AD] px-4 py-3 rounded-lg hover:bg-[#9C00AD] hover:text-[#2A013E] transition-all">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                    <span className="text-left">
                      <strong className="block font-bold">For doctors</strong>
                      <span className="text-sm">
                        Empowering Clinics with Advanced Autism Detection Tools
                      </span>
                    </span>
                  </div>
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
     
    </>
  );
};

export default Homefirst;
