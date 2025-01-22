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
    description: "The developmental screening test is designed to be swift and straightforward, allowing parents to complete the screening in just a few minutes. The process ensures minimal disruption and essential insights into your child’s developmental progress.",
    image1: laptop,
    image2: "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/aboutus.png",
  },
  {
    bgColor: "#5d15758c",
    step: "Step 2",
    title: "Detailed Assessment",
    description: "We blend state-of-the-art technology with real understanding of child development. While your little one enjoys playful moments on screen, our smart tools observe key milestones naturally - turning friendly interactions into meaningful guidance for your family's journey.",
    image1: laptop,
    image2: "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/2.jpg",
  },
  {
    bgColor: "#2e093a8c",
    step: "Step 3",
    title: "A Complete Picture",
    description: "We believe in combining the best of both worlds - our advanced screening tools and expert human insight. After the initial assessment, a qualified psychologist reviews your child's interactions and provides professional observations. This dual approach helps create a thorough understanding of your child's developmental path.",
    image1: laptop,
    image2: "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/3.jpg",
  },
  {
    bgColor: "#5E3C69",
    step: "Step 4",
    title: "Your Path Forward ",
    description: "Based on your child's unique assessment, our expert team designs a personalized blend of therapies and support strategies. From early intervention and behavioural guidance to occupational training, we create a comprehensive approach that grows with your child, ensuring they receive the right support at the right time.",
    image1: laptop,
    image2: "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/4.jpg",
  },
  {
    bgColor: "#952981",
    step: "Step 5",
    title: "Growth & Progress",
    description: "Our commitment doesn't end with the assessment. We provide continuous guidance, track progress milestones, and adjust support strategies as your child grows. Regular check-ins ensure the plan evolves with your child's changing needs.",
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
              <h4 className="text-white mt-2 text-center text-sm md:text-base leading-6 font-manrope px-[15vw]">{step.description}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Endrosed;
