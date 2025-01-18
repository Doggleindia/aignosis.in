import React, { useState, useEffect } from "react";
import HomePageCard from "./HomePageCard";
import { motion } from "framer-motion";
import firstanimation from "../../assets/homepage/neuron.mp4";
import m1 from "../../assets/mock1.png";
import m2 from "../../assets/mock2.png";



const Homefirst = () => {
  const [showContent, setShowContent] = useState(false);

 
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
        <motion.div
          className="absolute z-40 flex justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 1,
                ease: [0.42, 0, 0.58, 1],
              },
            },
          }}
        >
          <div className="flex flex-col md:flex-row">
            <motion.h1
              className="text-white font-montserrat font-semibold tracking- text-3xl mt-2 md:text-5xl text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Frontier AI
            </motion.h1>
            <motion.h1
              className="text-white ml-2 font-montserrat  font-semibold tracking- text-3xl mt-2 md:text-5xl text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              For Your Child’s
            </motion.h1>
            <motion.h1
              className="text-white ml-2 font-montserrat  font-semibold tracking- mt-2 text-3xl md:text-5xl text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {" "}Best Development
            </motion.h1>
          </div>
        </motion.div>
        <video
          src={firstanimation}
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
        />
      </motion.div>
    );
  }
  return (
    <>

   
      {showContent && (
        <>
          <motion.div
            initial="hidden"
            animate="visible"
            className={`relative z-0 body w-[90%] h-screen flex-col m-auto justify-center align-center items-center hidden md:flex`}
          >
            <motion.span
              custom={0.2}
              variants={textVariants}
              className="justify-center block tracking-[.3vw] text-sm font-bold font-raleway text-[#9C00AD]"
            >
              WELCOME TO AIGNOSIS
            </motion.span>
            <motion.span
              custom={0.4}
              variants={textVariants}
              className="text-white font-bold text-5xl pt-[20px] font-manrope"
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
              className="text-white px-[20vw] font-raleway font-md text-center p-[10px]"
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
              />            </motion.div>
          </motion.div>

          <motion.div

            className="body w-[90%] h-screen flex-col m-auto justify-center align-center items-center flex md:hidden">
            {/* Welcome Text */}
            <motion.span
              custom={0.2}
              variants={textVariants}
              className="justify-center block font-manrope text-sm font-medium text-[#9C00AD] text-center tracking-widest uppercase mb-4">
              Welcome to Aignosis
            </motion.span>

            {/* Main Heading */}
            <motion.h1
              custom={0.4}
              variants={textVariants}
              className="text-white font-bold text-2xl font-manrope text-center mt-2 ">
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
              className="text-white font-raleway font-normal text-center text-sm leading-relaxed mb-8">
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
            </motion.div>
          </motion.div>
        </>
      )}

    </>
  );
};

export default Homefirst;
