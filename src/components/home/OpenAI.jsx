import React, { useEffect, useRef } from 'react';
import Divider from '../../components/aboutus/Divider';
import AiCard from './AiCard';
import member from '../../assets/images/aboutUs/member.png';
import img1 from '../../assets/homefirst/image1.png';
import img2 from '../../assets/homefirst/image2.png';
import img3 from '../../assets/homefirst/image3.png';
import img4 from '../../assets/homefirst/image4.png';
import img5 from '../../assets/homefirst/image5.png';
import p3 from '../../assets/PopUps/p3.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from 'react-icons/go';
import flag from './redflag.png';
import p4 from '../../assets/PopUps/p3.png';

gsap.registerPlugin(ScrollTrigger);

const OpenAI = () => {
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
  return (
    <>
      <div className="relative">
        <Divider
          title="Did you know?"
          titleImg={p4}
          desc="*Source: A Review Of Developmental Delay And Its Determinants In Under Five Children (National Journal of Medical and Allied Sciences, 2017)"
          subtitle="1 in 5 children experience developmental delay !"
        />
        {/* Desktop view */}
        <div className="wrap m-auto mx-8 hidden flex-row items-center justify-center lg:flex">
          <AiCard
            imageSrc={img1}
            date="3 month old"
            title={flag}
            description="Does NOT follow moving objects with eyes"
          />
          <AiCard
            imageSrc={img2}
            date="1 year old"
            title=""
            description="Does NOT use gestures like waving or shaking head"
          />
          <AiCard imageSrc={img3} date="2 year old" title="" description="Does NOT speak two-word sentences" />
          <AiCard imageSrc={img4} date="3 year old" title="" description="Has DIFFICULTY manipulating small objects" />
          <AiCard imageSrc={img5} date="4 year old" title="" description="Has DIFFICULTY scribbling or drawing" />
        </div>
        <div className="-top-[1vw] right-[13vw] hidden md:absolute" ref={p3Ref}>
          {' '}
          {/* Apply the ref to p3 image */}
          <img src={p3} alt="Popup Image" />
        </div>
      </div>

      {/* Mobile view */}
      <div className="m-auto mx-8 my-2 flex items-center justify-start space-x-2 overflow-x-auto lg:hidden">
        <div className="flex-shrink-0">
          <AiCard
            imageSrc={img1}
            date="3 month old"
            title=""
            description="Does NOT follow moving objects with eyes"
          />{' '}
        </div>
        <div className="flex-shrink-0">
          <AiCard
            imageSrc={img2}
            date="1 year old"
            title=""
            description="Does NOT use gestures like waving or shaking head"
          />{' '}
        </div>
        <div className="flex-shrink-0">
          <AiCard imageSrc={img3} date="2 year old" title="" description="Does NOT speak two-word sentences" />{' '}
        </div>
        <div className="flex-shrink-0">
          <AiCard
            imageSrc={img4}
            date="3 year old"
            title=""
            description="Has DIFFICULTY manipulating small objects"
          />{' '}
        </div>
        <div className="flex-shrink-0">
          <AiCard imageSrc={img5} date="4 year old" title="" description="Has DIFFICULTY scribbling or drawing" />{' '}
        </div>
      </div>
      {/* <p className='text-center text-[12px] p-3 text-white font-montserrat'>*Source: A Review Of Developmental Delay And Its Determinants In Under Five Children (National Journal of Medical and Allied Sciences, 2017)</p> */}
      <Link
        to="/prices"
        className="group m-auto my-4 flex w-[20%] items-center justify-center rounded-full border border-[#B740A1] p-4 font-manrope text-white hover:bg-pink-500 max-sm:w-[60%] max-sm:text-[3vw] xl:text-sm"
      >
        Start Your Child’s Assessment
        <div className="2xl:w-[2.5rem] 2xl:h-[2.5rem] ml-[2vw] flex items-center justify-center rounded-full bg-[#B740A1] text-xl text-white transition-colors duration-300 group-hover:bg-white group-hover:text-black md:h-[2rem] md:w-[2rem]">
          <GoArrowUpRight />
        </div>
      </Link>
    </>
  );
};

export default OpenAI;
