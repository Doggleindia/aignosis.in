import React, { useEffect, useRef } from "react";
import img7 from "../../assets/clinic/img7.png";
import img1 from "../../assets/homepage/image a1.png";
import img2 from "../../assets/homepage/image a2.png";
import img3 from "../../assets/homepage/image a3.png";
import img4 from "../../assets/homepage/image a4.png";
import img5 from "../../assets/homepage/image a5.png";
import img6 from "../../assets/homepage/image a6.png";
import img11 from "../../assets/homepage/image a7.png";
import img8 from "../../assets/homepage/image a8.png";
import img9 from "../../assets/homepage/image a9.png";
import img10 from "../../assets/homepage/image a10.png";
import img12 from "../../assets/homepage/a11.png";
import img13 from "../../assets/homepage/a12.png";
import img14 from "../../assets/homepage/a13.png";
import img15 from "../../assets/homepage/a14.png";
import img16 from "../../assets/homepage/a16.png";
import img17 from "../../assets/homepage/a17.png";
import img18 from "../../assets/homepage/a18.png";
import img19 from "../../assets/homepage/a19.png";
import img20 from "../../assets/homepage/a20.png";
import img21 from "../../assets/homepage/a21.png";
import img22 from "../../assets/a22.png";
import img23 from "../../assets/a23.png";
import img24 from "../../assets/a24.png";
import img25 from "../../assets/a25.png";
import img26 from "../../assets/a26.png";
import img27 from "../../assets/a27.png";
import img28 from "../../assets/a28.png";
import img29 from "../../assets/a29.png";
import img30 from "../../assets/a30.png";


import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import AwardCard from './AwardCard';
const Awards = () => {
  const p3Ref = useRef(null);  // Create a reference for p3 image

  useEffect(() => {
    // GSAP animation for p3 image
    gsap.fromTo(p3Ref.current,
      { opacity: 0, x: -600 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: p3Ref.current,
          start: "top 80%",  // Animation starts when p3 image top reaches 80% of the viewport height
          end: "top center", // Animation ends when p3 image top reaches the center of the viewport
          scrub: true,
        }
      }
    );
  }, []);
  return (
    <div className='bg-[#1A0C25] relative w-full p-[5vw] '>
      <div className="flex flex-row  justify-center  max-sm:mt-[15vw] items-center space-x-4 ">
        <span
          className="h-[10px] w-[100px] rounded-full max-sm:w-[60px]"
          style={{
            background:
              "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
          }}
        ></span>
        <span className="text-[24px] text-[#F1C6FE] font-medium max-sm:text-sm">
          Endorsed
        </span>
        <span
          className="h-[10px] w-[100px] rounded-full max-sm:w-[60px]"
          style={{
            background:
              "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
          }}
        ></span>
      </div>
      <div className='flex flex-col'>

        <div className='flex justify-center mt-[1vw] items-center' >

          <h4 className='text-[#F6E8FB] font-raleway mt-4 md:mt-0 text-center text-[48px] leading-7 md:leading-[1.2vw] max-sm:text-[24px] md:mr-[20px]'>Supported  and featured by</h4>

        </div>
        <div className='flex justify-center items-center mt-[2vw] mx-auto md:w-[800px]'>

          <p className='text-[#F6E8FB] leading-5 mt-4 md:mt-8 md:leading-[1.2vw] font-light text-base text-center'>AI.Gnosis is backed by renowned organizations, medical experts, and technology pioneers committed to advancing early autism detection and intervention worldwide."</p>
        </div>

      </div>
      <div className="relative mt-10 w-full">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, index) => (
            <React.Fragment key={index}>
              {[ // Array of image groups to avoid repetition
                [img1, img2, img3, img5],
                [img6, img8, img9, img10, img11],
                [img12, img13, img14, img15, img16],
                [img17, img18, img19, img21, img22],
                [img23, img24, img25, img26, img27],
                [img28, img29, img30]
              ].map((imageGroup, groupIndex) => (
                <div className="flex gap-6" key={`${index}-${groupIndex}`}>
                  {imageGroup.map((image, subIndex) => (
                    <AwardCard
                      key={`${index}-${groupIndex}-${subIndex}`}
                      imageSrc={image}
                      altText={`Award ${groupIndex * 5 + subIndex + 1}`}
                    />
                  ))}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Awards
