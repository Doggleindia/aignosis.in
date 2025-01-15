import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import laptop from "../../assets/laptop l1.png";



gsap.registerPlugin(ScrollTrigger);

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
        start: "top top",
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
          {/* Step 1 */}
          <div className="flex-shrink-0 w-screen h-screen flex flex-col justify-center items-center bg-[#43284C4D]">
            <h1 className="text-[#B740A1] font-semibold font-raleway text-sm">Step 1</h1>
            <h1 className="font-manrope font-bold text-white text-5xl">Quick Screening Process</h1>
            <div className="w-full flex justify-center items-center relative h-[30vw] ">
              <img src={laptop} className="object-contain relative w-full h-full" alt="Laptop" />
              <div className="w-[35vw] top-[4vw] h-[21.5vw]  absolute">
                <img className="w-full h-full object-cover" src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/aboutus.png" alt="Screen Content" />
              </div>
            </div>

            <h1 className="text-white mt-2 text-center leading-6 font-manrope px-[10vw]">The Ai.gnosis Autism Test is designed to be swift and straightforward, allowing parents to complete the screening in just a few minutes. This quick process ensures minimal disruption while providing essential insights into your child’s developmental progress.</h1>
          </div>

          {/* Step 2 */}
          <div className="flex-shrink-0 w-screen h-screen flex flex-col justify-center items-center bg-[#5d15758c]">
            <h1 className="text-[#B740A1] font-semibold font-raleway text-sm">Step 2</h1>
            <h1 className="font-manrope font-bold text-white text-5xl">Detailed Assessment</h1>
            <div className="w-full flex justify-center items-center relative h-[30vw] ">
              <img src={laptop} className="object-contain relative w-full h-full" alt="Laptop" />
              <div className="w-[35vw] top-[4vw] h-[21.5vw] absolute">
                <img className="w-full h-full object-cover" src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/2.jpg" alt="Screen Content" />
              </div>
            </div>

            <h1 className="text-white mt-2 text-center leading-6 font-manrope px-[10vw]">Powered by advanced AI, the test delivers reliable results, giving parents confidence in the screening outcomes. Our technology analyzes key developmental indicators to provide an accurate understanding of potential autism traits.</h1>
          </div>

          {/* Step 3 */}
          <div className="flex-shrink-0 w-screen h-screen flex flex-col justify-center items-center bg-[#2e093a8c]">
            <h1 className="text-[#B740A1] font-semibold font-raleway text-sm">Step 3</h1>
            <h1 className="font-manrope font-bold text-white text-5xl">Final Insights</h1>
            <div className="w-full flex justify-center items-center relative h-[30vw] ">
              <img src={laptop} className="object-contain relative w-full h-full" alt="Laptop" />
              <div className="w-[35vw] top-[4vw] h-[21.5vw]  absolute">
                <img className="w-full h-full object-cover" src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/3.jpg" alt="Screen Content" />
              </div>
            </div>

            <h1 className="text-white text-center mt-2 leading-6 font-manrope px-[10vw]">The test is completely non-invasive, making it comfortable for children. With a simple approach, we ensure a stress-free experience that prioritizes your child’s well-being throughout the process.</h1>
          </div>
          <div className="flex-shrink-0 w-screen h-screen flex flex-col justify-center items-center bg-[#5E3C69]">
            <h1 className="text-[#B740A1] font-semibold font-raleway text-sm">Step 4</h1>
            <h1 className="font-manrope font-bold text-white text-5xl">Final Insights</h1>
            <div className="w-full flex justify-center items-center relative h-[30vw] ">
              <img src={laptop} className="object-contain relative w-full h-full" alt="Laptop" />
              <div className="w-[35vw] top-[4vw] h-[21.5vw]  absolute">
                <img className="w-full h-full object-cover" src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/4.jpg" alt="Screen Content" />
              </div>
            </div>

            <h1 className="text-white text-center mt-2 leading-6 font-manrope px-[10vw]">Early detection is crucial in supporting your child’s growth. By identifying developmental signs early, the Ai.gnosis Autism Test empowers parents to take proactive steps and seek guidance, fostering a supportive path for their child’s future.</h1>
          </div>
          <div className="flex-shrink-0 w-screen h-screen flex flex-col justify-center items-center bg-[#952981] ">
            <h1 className="text-[#B740A1] font-semibold font-raleway text-sm">Step 5</h1>
            <h1 className="font-manrope font-bold text-white text-5xl">Final Insights</h1>
            <div className="w-full flex justify-center items-center relative h-[30vw] ">
              <img src={laptop} className="object-contain relative w-full h-full" alt="Laptop" />
              <div className="w-[35vw] top-[4vw] h-[21.5vw] absolute">
                <img className="w-full h-full object-cover" src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/5.jpg" alt="Screen Content" />
              </div>
            </div>

            <h1 className="text-white text-center mt-2 leading-6 font-manrope px-[10vw]">The test is completely non-invasive, making it comfortable for children. With a simple approach, we ensure a stress-free experience that prioritizes your child’s well-being throughout the process.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Endrosed;
