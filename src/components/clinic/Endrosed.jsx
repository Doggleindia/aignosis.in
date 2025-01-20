import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import laptop from "../../assets/laptop l1.png";

gsap.registerPlugin(ScrollTrigger);

const stepData = [
  {
    bgColor: "#43284C4D",
    step: "Step 1",
    title: "Quick Screening Process",
    description: "The Ai.gnosis Autism Test is designed to be swift and straightforward, allowing parents to complete the screening in just a few minutes. This quick process ensures minimal disruption while providing essential insights into your child’s developmental progress.",
    image1: laptop,
    image2: "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/aboutus.png",
  },
  {
    bgColor: "#5d15758c",
    step: "Step 2",
    title: "Detailed Assessment",
    description: "Powered by advanced AI, the test delivers reliable results, giving parents confidence in the screening outcomes. Our technology analyzes key developmental indicators to provide an accurate understanding of potential autism traits.",
    image1: laptop,
    image2: "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/2.jpg",
  },
  {
    bgColor: "#2e093a8c",
    step: "Step 3",
    title: "Final Insights",
    description: "The test is completely non-invasive, making it comfortable for children. With a simple approach, we ensure a stress-free experience that prioritizes your child’s well-being throughout the process.",
    image1: laptop,
    image2: "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/3.jpg",
  },
  {
    bgColor: "#5E3C69",
    step: "Step 4",
    title: "Final Insights",
    description: "Early detection is crucial in supporting your child’s growth. By identifying developmental signs early, the Ai.gnosis Autism Test empowers parents to take proactive steps and seek guidance, fostering a supportive path for their child’s future.",
    image1: laptop,
    image2: "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/4.jpg",
  },
  {
    bgColor: "#952981",
    step: "Step 5",
    title: "Final Insights",
    description: "The test is completely non-invasive, making it comfortable for children. With a simple approach, we ensure a stress-free experience that prioritizes your child’s well-being throughout the process.",
    image1: laptop,
    image2: "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/5.jpg",
  },
];

const Endrosed = () => {
  const horizontalScrollRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const horizontalScroll = horizontalScrollRef.current;

    // Ensure horizontalScroll's width matches child widths
    gsap.set(horizontalScroll, {
      width: () => `${horizontalScroll.children.length * 100}vw`,
    });

    // Set up GSAP ScrollTrigger
    gsap.to(horizontalScroll, {
      x: () => -(horizontalScroll.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top end",
        end: () => `+=${horizontalScroll.scrollWidth}`, // Length of horizontal scroll
        pin: true, // Pin the container during the animation
        scrub: true, // Smooth transition while scrolling
        anticipatePin: 1,
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      {/* Horizontal Scroll Section */}
      <div ref={containerRef} className="w-full h-screen">
        <div
          ref={horizontalScrollRef}
          className="flex h-screen overflow-hidden"
        >
          {stepData.map((step, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-screen h-screen flex flex-col justify-center items-center"
              style={{ backgroundColor: step.bgColor }}
            >
              <span className="text-[#B740A1] font-semibold font-raleway text-sm">{step.step}</span>
              <h2 className="font-manrope font-bold text-white text-3xl md:text-5xl text-center">{step.title}</h2>
              <div className="w-full flex justify-center items-center relative h-[50vw] md:h-[30vw]">
                <img src={step.image1} className="object-contain relative w-full h-full" alt="Laptop" />
                <div className="w-[60vw] md:w-[35vw] top-[4vw] h-[41vw] md:h-[21.5vw] absolute">
                  <img className="w-full h-full object-cover" src={step.image2} alt="Screen Content" />
                </div>
              </div>
              <h4 className="text-white mt-2 text-center text-sm md:text-base leading-6 font-manrope px-[10vw]">{step.description}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Endrosed;
