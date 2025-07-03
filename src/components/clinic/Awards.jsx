import React, { useEffect, useRef } from 'react';
import img1 from '../../assets/homepage/image a7.png'; // shark tank
import img5 from '../../assets/homepage/a20.png'; // car dekho
import img6 from '../../assets/homepage/image a6.png'; // Raksheet Hospital
// import img11 from '../../assets/homepage/a13.png'; //  fitt
import img8 from '../../assets/homepage/a12.png'; //  IIHMR Univ..
// import img9 from '../../assets/homepage/image a9.png'; //sk finance
import img12 from '../../assets/a23.png'; // Babylon Hospital
import img13 from '../../assets/a22.png'; // rajasthan fostering
// import img14 from '../../assets/a25.png'; // google-cloud
// import img15 from '../../assets/a29.png'; // DOITC
import img16 from '../../assets/a28.png'; // nvidia
import img17 from '../../assets/a27.png'; //aws start-up
import img18 from '../../assets/a26.png'; // seed-fund scheme
import img21 from '../../assets/homepage/a15.png'; //mphasis
import img22 from '../../assets/homepage/image a8.png'; //Schaeffler
import img23 from '../../assets/homepage/a16.png'; //virigina tech
import img24 from '../../assets/homepage/image a10.png'; // wadhwani foundation
import img26 from '../../assets/a26.png';
import img27 from '../../assets/homepage/a17.png'; // dainik vashkar
// import img28 from '../../assets/homepage/a11.png'; // patrika rajasthan
import img30 from '../../assets/a30.png'; //no number
import img33 from '../../assets/homepage/a19.png'; // News18
import img34 from '../../assets/homepage/a21.png'; // Bits
import img35 from '../../assets/homepage/image a1.png'; // IIMA
// import img36 from '../../assets/homepage/image a4.png'; //ICAD
import img37 from '../../assets/homepage/image90.avif'; // Neuro Equilibrium
import wtfund from '../../assets/members/wtfund logo.jpg'; // WTFund
import iac from '../../assets/IAC.jpg'; // IAC
import nmims from '../../assets/nmims.png'; // NMIMS

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import AwardCard from './AwardCard';
const Awards = () => {
  const p3Ref = useRef(null); // Create a reference for p3 image

  useEffect(() => {
    // GSAP animation for p3 image
    gsap.fromTo(
      p3Ref.current,
      { opacity: 0, x: -600 },
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
  return (
    <div className="relative w-full justify-center bg-[#1A0C25] p-[5vw]">
      <div className="mb-2 flex flex-row items-center justify-center space-x-4 max-sm:ml-[15vw] max-sm:mt-[15vw]">
        <span
          className="h-[10px] w-[100px] rounded-full max-sm:w-[60px]"
          style={{
            background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
          }}
        ></span>
        <span className="text-[24px] font-medium text-[#F1C6FE] max-sm:text-sm">Endorsed</span>
        <span
          className="h-[10px] w-[100px] rounded-full max-sm:w-[60px]"
          style={{
            background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
          }}
        ></span>
      </div>
      <div className="flex flex-col">
        <div className="mt-[1vw] flex items-center justify-center">
          <h4 className="mt-4 text-center font-raleway text-[48px] leading-7 text-[#F6E8FB] max-sm:text-[24px] md:mt-0 md:leading-[1.2vw]">
            Supported and featured by
          </h4>
        </div>
        <div className="mx-auto mt-[2vw] flex items-center justify-center md:w-[800px]">
          <p className="mt-4 text-center text-base font-light leading-5 text-[#F6E8FB] md:mt-8 md:leading-[1.2vw]">
            Aignosis is backed by renowned organizations, medical experts, and technology pioneers committed to
            advancing early autism detection and intervention worldwide.
          </p>
        </div>
      </div>
      <div className="relative mt-10 w-full overflow-hidden">
        <div className="marquee-container animate-marquee" style={{ animationDuration: '210s' }}>
          {[...Array(2)].map((_, index) => (
            <React.Fragment key={index}>
              {[
                // Image Groups
                [
                  img1,
                  img35,
                  nmims,
                  img30,
                  img5,
                  img37,
                  img8,
                  iac,
                  img6,
                  img12,
                  img13,
                  img16,
                  img17,
                  img18,
                  img34,
                  img33,
                  img21,
                  img22,
                  img23,
                  img24,
                  img26,
                  img27,
                  wtfund,
                  img1,
                  img35,
                  nmims,
                  img30,
                  img5,
                  img37,
                  img8,
                  iac,
                  img6,
                  img12,
                  img13,
                  img16,
                  img17,
                  img18,
                  img34,
                  img33,
                  img21,
                  img22,
                  img23,
                  img24,
                  img26,
                  img27,
                  wtfund,
                ],
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
  );
};

export default Awards;
