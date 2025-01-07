import React, { useEffect, useRef } from "react";
import Divider from "../aboutus/Divider";
import img5 from "../../assets/clinic/img5.png";
import animal from "../../assets/animal.png";
import img1 from "../../assets/homepage/image i1.png";
import img2 from "../../assets/homepage/image i2.png";
import img3 from "../../assets/homepage/image i3.png";
import img4 from "../../assets/homepage/image i4.png";
import gsap from "gsap";

const Features = () => {
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
    const rotationX = normalizedY * 60;
    const rotationY = normalizedX * -60;

    // Animate the specific card
    gsap.to(card, {
      rotationX,
      rotationY,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.5,
    });
  };

  const resetCard = (card, light) => {
    if (!card || !light) return;

    // Reset card and light to original positions
    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.5,
    });

    gsap.to(light, {
      opacity: 0,
      duration: 0.1,
    });
  };

  const showLight = (light) => {
    gsap.to(light, {
      opacity: 0.7,
      duration: 0.1,
    });
  };

  return (
    <div className="bg-[#1A0C25]  min-h-screen font-raleway  p-[4vw] ">
      <div>
        {/* <img src={animal} className='w-[00px]' alt="" /> */}
        <Divider title="Feature" desc="" subtitle="" />
        <div className="flex justify-center items-center">
          <h1 className="text-[#F6E8FB] font-raleway -mt-10  max-sm:text-center text-[40px] md:mr-[20px] max-sm:text-[24px]">
            Our Approach to Key Features and Solutions
          </h1>
          <img src={img5} className="w-[100px] max-sm:w-[50px] -mt-10" alt="" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center  gap-4 p-4">
        {/* Blank Divs */}
        <div className="flex max-sm:flex-col gap-4">
          <div
            className="w-[40vw] h-[25vw] max-sm:w-[300px] max-sm:h-[300px] bg-[#43284C4D] rounded-lg border border-[#5455694D]"
            ref={(el) => addToRefs(el, cardRefs)}
            onMouseMove={(e) =>
              handleMouseMove(e, cardRefs.current[0], lightRefs.current[0])
            }
            onMouseLeave={() =>
              resetCard(cardRefs.current[0], lightRefs.current[0])
            }
            onMouseEnter={() => showLight(lightRefs.current[0])}
          >
            {/* Light effect */}
            <div
              className="absolute top-0 left-0 w-[200px] h-[200px] bg-white rounded-full opacity-0 pointer-events-none"
              ref={(el) => addToRefs(el, lightRefs)}
              style={{
                filter: "blur(50px)",
                transform: "translate(-50%, -50%)",
              }}
            ></div>

            <div className="h-[60%] w-full flex justify-center items-center p-2 pt-5">
              <img className="object-contain w-full h-full" src={img1} alt="" />
            </div>
            <div className="flex flex-col text-white w-full justify-center items-center px-[8vw]">
              <h1 className="font-bold text-lg mt-4">
                Privacy and Comfort at Home
              </h1>
              <p className="text-[#C4C4C4] text-xs mt-4">
                Complete the test from the comfort of your own home, ensuring
                privacy for both you and your child.
              </p>
              <p className="text-[#C4C4C4] text-xs mt-2">
                No need to visit a clinic—conduct the entire process in a
                relaxed environment, making it stress-free.
              </p>
            </div>
          </div>
          <div className="w-[30vw] h-[25vw] max-sm:w-[300px] max-sm:h-[300px] bg-[#43284C4D] rounded-lg border border-[#5455694D]"ref={(el) => addToRefs(el, cardRefs)}
            onMouseMove={(e) =>
              handleMouseMove(e, cardRefs.current[1], lightRefs.current[1])
            }
            onMouseLeave={() =>
              resetCard(cardRefs.current[1], lightRefs.current[1])
            }
            onMouseEnter={() => showLight(lightRefs.current[1])}
          >
            {/* Light effect */}
            <div
              className="absolute top-0 left-0 w-[200px] h-[200px] bg-white rounded-full opacity-0 pointer-events-none"
              ref={(el) => addToRefs(el, lightRefs)}
              style={{
                filter: "blur(50px)",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
            <div className="h-[60%] w-full flex justify-center items-center p-2 pt-5">
              <img className="object-contain w-full h-full" src={img2} alt="" />
            </div>
            <div className="flex flex-col text-white w-full justify-center items-center px-[5vw]">
              <h1 className="font-bold text-lg mt-4">Accurate diagnosis</h1>
              <p className="text-[#C4C4C4] text-xs mt-4">
                Our AI-driven system provides precise, reliable results to
                ensure accurate early diagnosis.
              </p>
              <p className="text-[#C4C4C4] text-xs mt-2">
                Backed by experts, you can trust the system for accurate
                insights into your child’s development.
              </p>
            </div>
          </div>
        </div>
        <div className="flex max-sm:flex-col gap-4">
          <div className="w-[30vw] h-[25vw] max-sm:w-[300px] max-sm:h-[300px] bg-[#43284C4D] rounded-lg border border-[#5455694D]"ref={(el) => addToRefs(el, cardRefs)}
            onMouseMove={(e) =>
              handleMouseMove(e, cardRefs.current[2], lightRefs.current[2])
            }
            onMouseLeave={() =>
              resetCard(cardRefs.current[2], lightRefs.current[2])
            }
            onMouseEnter={() => showLight(lightRefs.current[2])}
          >
            {/* Light effect */}
            <div
              className="absolute top-0 left-0 w-[200px] h-[200px] bg-white rounded-full opacity-0 pointer-events-none"
              ref={(el) => addToRefs(el, lightRefs)}
              style={{
                filter: "blur(50px)",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
            <div className="flex flex-col text-white w-full justify-center items-center px-[4vw]">
              <h1 className="font-bold text-lg mt-4">Fast & easy test</h1>
              <p className="text-[#C4C4C4] text-xs mt-4">
                Get results in minutes, with an easy-to-follow process that
                anyone can complete.
              </p>
              <p className="text-[#C4C4C4] text-xs mt-2">
                Simple instructions make the test quick and hassle-free,
                ensuring a smooth experience.
              </p>
            </div>
            <div className="h-[60%] w-full flex justify-center items-center p-2 pt-5">
              <img className="object-contain w-full h-full" src={img3} alt="" />
            </div>
          </div>
          <div className="w-[40vw] h-[25vw] max-sm:w-[300px] max-sm:h-[300px] bg-[#43284C4D] rounded-lg border border-[#5455694D]"ref={(el) => addToRefs(el, cardRefs)}
            onMouseMove={(e) =>
              handleMouseMove(e, cardRefs.current[3], lightRefs.current[3])
            }
            onMouseLeave={() =>
              resetCard(cardRefs.current[3], lightRefs.current[3])
            }
            onMouseEnter={() => showLight(lightRefs.current[3])}
          >
            {/* Light effect */}
            <div
              className="absolute top-0 left-0 w-[200px] h-[200px] bg-white rounded-full opacity-0 pointer-events-none"
              ref={(el) => addToRefs(el, lightRefs)}
              style={{
                filter: "blur(50px)",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
            <div className="h-[60%] w-full flex justify-center items-center p-2 pt-5">
              <img className="object-contain w-full h-full" src={img4} alt="" />
            </div>
            <div className="flex flex-col text-white w-full justify-center items-center px-[7vw]">
              <h1 className="font-bold text-lg mt-4">
                Non-Invasive Testing with Just Your Webcam
              </h1>
              <p className="text-[#C4C4C4] text-xs px-[1vw] mt-4">
                The test is non-invasive, requiring only a standard webcam—no
                needles or complex equipment.
              </p>
              <p className="text-[#C4C4C4] text-xs px-[1vw] mt-2">
                The child remains comfortable, simply interacting with the
                screen during the test for an easy experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
