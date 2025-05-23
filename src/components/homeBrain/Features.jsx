import React, { useEffect, useRef } from 'react';
import Divider from '../aboutus/Divider';
import img5 from '../../assets/clinic/img5.png';
import animal from '../../assets/animal.png';
import img1 from '../../assets/homepage/image i1.png';
import img2 from '../../assets/ZenBook Duo 15.png';
import img3 from '../../assets/homepage/image i3.png';
import img4 from '../../assets/image69.png';
import gsap from 'gsap';
import p4 from '../../assets/PopUps/p.png';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import p3 from '../../assets/PopUps/p3.png';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const p3Ref = useRef(null); // Create a reference for p3 image

  useEffect(() => {
    // GSAP animation for p3 image
    gsap.fromTo(
      p3Ref.current,
      { opacity: 0, x: 200 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: p3Ref.current,
          start: 'top 80%', // Animation starts when p3 image top reaches 80% of the viewport height
          end: 'top center', // Animation ends when p3 image top reaches the center of the viewport
          scrub: true,
        },
      }
    );
  }, []);
  const cardRefs = useRef([]);
  const lightRefs = useRef([]);

  const addToRefs = (el, refArray) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  const handleMouseMove = (event, card, light) => {
    if (!card || !light) return;

    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to the card
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Move light to follow the cursor
    gsap.to(light, {
      x: mouseX - 100,
      y: mouseY - 100,
      duration: 0.1,
    });

    // Calculate normalized position for card rotation
    const normalizedX = (mouseX / rect.width) * 2 - 1; // Range: -1 to 1
    const normalizedY = (mouseY / rect.height) * 2 - 1; // Range: -1 to 1

    // Limit rotation to -60 to 60 degrees
    const rotationX = normalizedY * 10;
    const rotationY = normalizedX * -10;

    // Animate the specific card
    gsap.to(card, {
      rotationX,
      rotationY,
      transformPerspective: 1000,
      ease: 'power2.out',
      duration: 0.5,
    });
  };

  const resetCard = (card, light) => {
    if (!card || !light) return;

    // Reset card and light to original positions
    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      transformPerspective: 10000,
      ease: 'power2.out',
      duration: 0.5,
    });

    gsap.to(light, {
      opacity: 0,
      duration: 0.1,
    });
  };

  const showLight = (light) => {
    gsap.to(light, {
      opacity: 0.2,
      duration: 0.1,
    });
  };

  return (
    <div className="min-h-screen bg-[#1A0C25] p-[4vw] font-raleway">
      <div>
        {/* <img src={animal} className='w-[00px]' alt="" /> */}
        <Divider title="Feature" desc="" titleImg={p3} subtitle="" />
        <div className="flex items-center justify-center">
          <h3 className="text-center font-raleway text-[40px] font-bold text-[#F6E8FB] max-sm:text-center max-sm:text-[24px]">
            Our Approach to Key Features and Solutions
          </h3>
          <img src={p4} className="-mt-10 hidden w-[100px] max-sm:w-[50px] md:block" alt="" ref={p3Ref} />
        </div>
      </div>
      <div className="mt-[3vw] flex flex-col items-center justify-center gap-[1.5vw] p-4">
        {/* Blank Divs */}
        <div className="flex gap-[1.5vw] max-sm:flex-col">
          <div
            className="h-[35vw] w-[40vw] rounded-lg border border-[#5455694D] bg-[#43284C4D] p-4 max-sm:h-full max-sm:w-[300px] md:h-[25vw]"
            ref={(el) => addToRefs(el, cardRefs)}
            onMouseMove={(e) => handleMouseMove(e, cardRefs.current[0], lightRefs.current[0])}
            onMouseLeave={() => resetCard(cardRefs.current[0], lightRefs.current[0])}
            onMouseEnter={() => showLight(lightRefs.current[0])}
          >
            {/* Light effect */}
            <div
              className="pointer-events-none absolute left-0 top-0 h-[200px] w-[200px] rounded-full bg-white opacity-0"
              ref={(el) => addToRefs(el, lightRefs)}
              style={{
                filter: 'blur(50px)',
                transform: 'translate(-50%, -50%)',
              }}
            ></div>

            <div className="flex h-[60%] w-full items-center justify-center p-2 pt-5">
              <img className="h-full w-[300px] object-contain" src={img1} alt="" />
            </div>
            <div className="flex w-full flex-col items-center justify-center px-[8vw] text-white">
              <h4 className="mt-4 text-lg font-bold">Comfort and Privacy of Home </h4>
              <p className="mt-4 text-center text-sm text-[#C4C4C4]">
                Complete the test from the comfort of your own home, ensuring privacy for both you and your child. 
              </p>
            </div>
          </div>
          <div
            className="w-[30vw] rounded-lg border border-[#5455694D] bg-[#43284C4D] p-4 max-sm:h-full max-sm:w-[300px] md:h-[25vw]"
            ref={(el) => addToRefs(el, cardRefs)}
            onMouseMove={(e) => handleMouseMove(e, cardRefs.current[1], lightRefs.current[1])}
            onMouseLeave={() => resetCard(cardRefs.current[1], lightRefs.current[1])}
            onMouseEnter={() => showLight(lightRefs.current[1])}
          >
            {/* Light effect */}
            <div
              className="pointer-events-none absolute left-0 top-0 h-[200px] w-[200px] rounded-full bg-white opacity-0"
              ref={(el) => addToRefs(el, lightRefs)}
              style={{
                filter: 'blur(50px)',
                transform: 'translate(-50%, -50%)',
              }}
            ></div>
            <div className="flex h-[60%] w-full items-center justify-center p-2 pt-5">
              <img className="h-full w-[300px] object-contain" src={img2} alt="" />
            </div>
            <div className="flex w-full flex-col items-center justify-center px-[5vw] text-white">
              <h4 className="mt-4 text-lg font-bold">Accurate Screening</h4>
              <p className="mt-2 text-center text-sm text-[#C4C4C4]">
                Backed by experts, you can trust the system for accurate insights into your child’s development 
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-[1.5vw] max-sm:flex-col">
          <div
            className="w-[30vw] rounded-lg border border-[#5455694D] bg-[#43284C4D] p-4 max-sm:h-full max-sm:w-[300px] md:h-[25vw]"
            ref={(el) => addToRefs(el, cardRefs)}
            onMouseMove={(e) => handleMouseMove(e, cardRefs.current[2], lightRefs.current[2])}
            onMouseLeave={() => resetCard(cardRefs.current[2], lightRefs.current[2])}
            onMouseEnter={() => showLight(lightRefs.current[2])}
          >
            {/* Light effect */}
            <div
              className="pointer-events-none absolute left-0 top-0 h-[200px] w-[200px] rounded-full bg-white opacity-0"
              ref={(el) => addToRefs(el, lightRefs)}
              style={{
                filter: 'blur(50px)',
                transform: 'translate(-50%, -50%)',
              }}
            ></div>
            <div className="flex w-full flex-col items-center justify-center px-[4vw] text-white">
              <h4 className="mt-4 text-lg font-bold">Easy Journey</h4>
              <p className="mt-4 text-center text-sm text-[#C4C4C4]">
                Get results in minutes, with an easy-to-follow process that anyone can complete.
              </p>
            </div>
            <div className="flex h-[60%] w-full items-center justify-center p-2 pt-5">
              <img className="h-full w-[300px] object-contain" src={img3} alt="" />
            </div>
          </div>
          <div
            className="h-[35vw] w-[40vw] rounded-lg border border-[#5455694D] bg-[#43284C4D] p-4 max-sm:h-full max-sm:w-[300px] md:h-[25vw]"
            ref={(el) => addToRefs(el, cardRefs)}
            onMouseMove={(e) => handleMouseMove(e, cardRefs.current[3], lightRefs.current[3])}
            onMouseLeave={() => resetCard(cardRefs.current[3], lightRefs.current[3])}
            onMouseEnter={() => showLight(lightRefs.current[3])}
          >
            {/* Light effect */}
            <div
              className="pointer-events-none absolute left-0 top-0 h-[200px] w-[200px] rounded-full bg-white opacity-0"
              ref={(el) => addToRefs(el, lightRefs)}
              style={{
                filter: 'blur(50px)',
                transform: 'translate(-50%, -50%)',
              }}
            ></div>
            <div className="flex h-[60%] w-full items-center justify-center p-2 pt-5">
              <img className="h-full w-[300px] object-contain" src={img4} alt="" />
            </div>
            <div className="flex w-full flex-col items-center justify-center px-[7vw] text-white">
              <h4 className="mt-4 text-center text-lg font-bold">Non-Invasive Testing with Just Your Webcam</h4>
              <p className="mt-4 px-[1vw] text-center text-sm text-[#C4C4C4]">
                The test is non-invasive, requiring only a standard webcam—no needles or complex equipment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
