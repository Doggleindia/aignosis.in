import React, { useState, useEffect } from "react";
import HomePageCard from "./HomePageCard";
import { Link } from "react-router-dom";
import m1 from "../../assets/h1.png";
import m2 from "../../assets/h2.png";
import sharks from "../../assets/7.png"
import star from './star.png'


const Homefirst = () => {

  return (
    <>
      <>
      <div
        className="relative w-full h-full">
      
        <div className={`relative z-0 body w-[90%] h-full pt-[12vw] flex-col m-auto justify-center align-center items-center hidden md:flex`}>
          <span
            className="flex justify-center items-center tracking-[.3vw] text-sm font-bold font-raleway text-[#9C00AD]"
          >
            <img
              src={star}
              className="scale-[.3] mr-[-1vw] max-sm:scale-[.4]"
              alt="star"
            />
            WELCOME TO AIGNOSIS
          </span>


          <span

            className="text-white font-bold text-5xl pt-[20px] font-manrope"
          >
            Your journey with Aignosis!
          </span>
          <span

            className="text-[#811f67] font-bold text-5xl font-manrope"
          >
            Helping you understand your child better

          </span>
          <p

            className="text-white px-[20vw] font-raleway font-md text-center p-[10px]"
          >
            AI.gnosis is here to offer AI-powered tools that help you understand your child’s unique way of experiencing the world. This will help you identify the signs of autism and other neurodevelopmental concerns from the comfort of your own home, giving you insights when they matter most.
            Keeping your family’s needs in mind, we have created a tool that ensures accuracy and reliability without being invasive.

          </p>

          {/* home page Card */}
          <div

            className="flex flex-row"
          >
            <HomePageCard
              urlredirect='/prices'
              imageSrc={m1}
              title="For Parents"
              description="Early awareness opens doors to timely support and brighter possibilities"
            />
            <HomePageCard
              urlredirect={'/clinic'}
              imageSrc={m2}
              title="For doctors"
              description="Empowering clinics with advanced early detection tools"
            />            </div>
        </div>
        </div>

        

        <div
          className="body w-[90%] h-full py-[8vh] flex-col m-auto justify-center align-center items-center flex md:hidden">
          {/* Welcome Text */}
          <span
            className="flex justify-center items-center font-manrope text-sm font-medium text-[#9C00AD] text-center tracking-widest uppercase mb-4"
          >
            <img
              src={star}
              className="scale-[.3] max-sm:mr-[-2vw] max-sm:scale-[.4]"
              alt="star"
            />
            Welcome to Aignosis
          </span>


          {/* Main Heading */}
          <h1

            className="text-white font-bold text-2xl font-manrope text-center mt-2 ">
            Your journey with Aignosis!
          </h1>
          <h2
            className="text-[#811f67] font-extrabold text-3xl font-manrope text-center mb-6">
            Helping you understand your child better
          </h2>

          {/* Description */}
          <p

            className="text-white font-raleway font-normal text-center text-sm leading-relaxed mb-8">
            AI.gnosis is here to offer AI-powered tools that help you understand your child’s unique way of experiencing the world. This will help you identify the signs of autism and other neurodevelopmental concerns from the comfort of your own home, giving you insights when they matter most.
            Keeping your family’s needs in mind, we have created a tool that ensures accuracy and reliability without being invasive.

          </p>

          {/* Buttons for Cards */}
          <div

            className="flex flex-col space-y-4 w-full">
            <button className="flex items-center justify-between w-full bg-[#1A0C25] text-white border border-[#9C00AD] px-4 py-3 rounded-3xl hover:bg-[#9C00AD] hover:text-[#2A013E] transition-all">
              <Link to={'/prices'}>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full">
                    <img className="w-full h-full object-contain" src={m1} alt="Icon for prices" />
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
              </Link>

            </button>

            <button className="flex items-center justify-between w-full bg-[#1A0C25] text-white border border-[#9C00AD] px-4 py-3 rounded-3xl hover:bg-[#9C00AD] hover:text-[#2A013E] transition-all">
              <Link to={'/clinic'}>

                <div className="flex items-center space-x-4">
                  <div className="w-16 cursor-pointer h-16 rounded-full">
                    <img className="w-full h-full object-contain" src={m2} alt="" srcset="" />
                  </div>
                  <span className="text-left">
                    <strong className="block font-bold">For doctors</strong>
                    <span className="text-sm">
                      Empowering Clinics with Advanced Autism Detection Tools
                    </span>
                  </span>
                </div>
              </Link>
            </button>
          </div>
        </div>

        <div className="w-full 2xl:py-[10vw] md:py-[5vw]">
          <div className="absolute top-[30vw] right-0 w-[15%] h-full bg-[#B740A1A6] opacity-45 blur-[120px] rounded-xl"></div>
          <img className="w-full h-full max-sm:h-[14vh]" src={sharks} alt="" srcset="" />
        </div>
      </>


    </>
  );
};

export default Homefirst;