import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import bg1 from '../assets/images/Autism/1.png';
import bg2 from '../assets/images/Autism/2.jpg';
import bg3 from '../assets/images/Autism/3.jpg';
import bg4 from '../assets/images/Autism/4.jpg';
import bg5 from '../assets/images/Autism/5.jpg';
import '../index.css';

const AutismTest = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const stepsContent = [
    {
      title: "The Ai.gnosis Autism Test:",
      subtitle: "A quick, accurate, and non-invasive way to screen your child.",
      description: "This enables early detection and helps parents take proactive steps for their child's development.",
      bgColor: "rgba(26, 12, 37, 1)",
      header: "Recognize the Signs",
      ScreenNumber: 1,
      image: bg1,
    },
    {
      title: "Quick Screening Process",
      subtitle: "Step 1",
      description: "The Ai.gnosis Autism Test is designed to be swift and straightforward, allowing parents to complete the screening in just a few minutes.",
      bgColor: "#5E3C69",
      header: "Step 1",
      ScreenNumber: 2,
      image: bg2,
    },
    {
      title: "Accurate Results with AI",
      subtitle: "Step 2",
      description: "Powered by advanced AI, the test delivers reliable results, giving parents confidence in the screening outcomes.",
      bgColor: "#952981",
      header: "Step 2",
      ScreenNumber: 3,
      image: bg3,
    },
    {
      title: "Non-Invasive and Child-Friendly",
      subtitle: "Step 3",
      description: "The test is completely non-invasive, making it comfortable for children. We ensure a stress-free experience throughout the process.",
      bgColor: "#5E3C69",
      header: "Step 3",
      ScreenNumber: 4,
      image: bg4,
    },
    {
      title: "Empowering Early Intervention",
      subtitle: "Step 4",
      description: "Early detection is crucial in supporting your child’s growth. The Aignosis Autism Test empowers parents to take proactive steps.",
      bgColor: "#1A0C25",
      header: "Step 4",
      ScreenNumber: 5,
      image: bg5,
    },
  ];

  const scrollContainerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const isInitialRender = useRef(true);

  useEffect(() => {
    const handleWheel = (event) => {
      if (!imageContainerRef.current.contains(event.target)) return;

      event.preventDefault();
      if (event.deltaY > 0) {
        setCurrentStep((prev) => Math.min(prev + 1, stepsContent.length));
      } else {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
      }
    };

    const container = scrollContainerRef.current;
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useLayoutEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    const section = scrollContainerRef.current.querySelector(`[data-step="${currentStep}"]`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentStep]);

  return (
    <div
      ref={scrollContainerRef}
      className="flex flex-col snap-y w-full snap-mandatory mt-8 h-screen overflow-hidden"
      style={{ scrollBehavior: 'smooth', overflowY: 'hidden' }}
    >
      {stepsContent.map((content, index) => (
        <div
          key={index}
          className={`scroll-section flex justify-between min-h-screen snap-start p-8 ${index + 1 === currentStep ? 'animate-slideUp' : ''}`}
          style={{ background: content.bgColor }}
          data-step={index + 1}
        >
          <div className="md:max-w-4xl 2xl:max-w-[7xl] mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left Side Content */}
            <div className="flex flex-col justify-center text-white space-y-4">
              <div className="flex items-center space-x-2">
                <span
                  className="h-[10px] w-[118px] rounded-full"
                  style={{
                    background: "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                  }}
                ></span>
                <span style={{ color: "rgba(241, 198, 254, 1)" }}>
                  {content.header}
                </span>
                <span
                  className="h-[10px] w-[118px] rounded-full"
                  style={{
                    background: "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                  }}
                ></span>
              </div>
              <h2 className="text-4xl font-semibold leading-snug">
                {content.title}
                <br />
                <span className="font-light italic">
                  {content.subtitle !== content.header ? content.subtitle : ""}
                </span>
              </h2>
              <p className="text-gray-300">{content.description}</p>
              <Link
                to="/test/fillup"
                className="px-6 py-2 bg-transparent border border-pink-400 rounded-full hover:bg-[#B7407D] hover:text-white transition w-[206px]"
              >
                Take Assignment
              </Link>
            </div>

            {/* Right Side - Image and Indicator Wrapper */}
            <div className="relative flex justify-center items-center">
              {/* Dynamic Image for Each Step */}
              <img
                src={content.image}
                alt={`Background for step ${content.ScreenNumber}`}
                className="md:w-[1101px] h-auto scale-145"
              />

              {/* Circle Indicators Container */}
              <div className="absolute top-1/2 transform -translate-y-1/2 right-[-70px] space-y-2 flex flex-col">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex flex-col items-center">
                    <div
                      onClick={() => setCurrentStep(item)}
                      className={`h-10 w-10 flex items-center justify-center rounded-full text-white font-semibold text-sm cursor-pointer ${currentStep === item
                        ? "bg-[#952981]"
                        : "bg-transparent border border-[#9C00AD]"
                        }`}
                    >
                      {item}
                    </div>
                    {item === content.ScreenNumber && (
                      <div className="w-1 h-24 bg-[#952981] mt-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default AutismTest;
