import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import laptop from "../../assets/homepage/laptop.png";

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
            <div className="w-full h-[30vw]">
              <img src={laptop} className="object-contain w-full h-full" alt="" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex-shrink-0 w-screen h-screen flex flex-col justify-center items-center bg-[#5d15758c]">
            <h1 className="text-[#B740A1] font-semibold font-raleway text-sm">Step 2</h1>
            <h1 className="font-manrope font-bold text-white text-5xl">Detailed Assessment</h1>
            <div className="w-full h-[30vw]">
              <img src={laptop} className="object-contain w-full h-full" alt="" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex-shrink-0 w-screen h-screen flex flex-col justify-center items-center bg-[#2e093a8c]">
            <h1 className="text-[#B740A1] font-semibold font-raleway text-sm">Step 3</h1>
            <h1 className="font-manrope font-bold text-white text-5xl">Final Insights</h1>
            <div className="w-full h-[30vw]">
              <img src={laptop} className="object-contain w-full h-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Endrosed;
