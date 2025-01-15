import React, { useEffect, useRef } from 'react';
import Divider from '../../components/aboutus/Divider';
import AiCard from './AiCard';
import member from "../../assets/images/aboutUs/member.png";
import img1 from "../../assets/homepage/image 128.png";
import img2 from "../../assets/homepage/image.png";
import img3 from "../../assets/homepage/image2.png";
import img4 from "../../assets/homepage/image3.png";
import img5 from "../../assets/homepage/image4.png";
import p3 from "../../assets/PopUps/p3.png";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const OpenAI = () => {
    const p3Ref = useRef(null);  // Create a reference for p3 image

    useEffect(() => {
        // GSAP animation for p3 image
        gsap.fromTo(p3Ref.current,
            { opacity: 0, x: 200 },
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
        <>
            <div className="relative">
                <Divider
                    title='Act now'
                    desc='Virtue AI is a decentralized AI platform built on the OneChain blockchain. It allows users to run AI learning models on the blockchain in a secure, transparent, and accessible way.'
                    subtitle='Upto 1 in 5 children are at risk of developmental delays'
                />
                {/* Desktop view */}
                <div className='hidden lg:flex flex-row mx-8 wrap justify-center items-center m-auto'>
                    <AiCard
                        imageSrc={img1}
                        date="3 month old"
                        title=""
                        description="Does NOT follow moving objects with eyes"
                    />
                    <AiCard
                        imageSrc={img2}
                        date="1 year old"
                        title=""
                        description="Does NOT use gestures like waving or shaking head"
                    />
                    <AiCard
                        imageSrc={img3}
                        date="2 year old"
                        title=""
                        description="Does NOT speak two-word sentences"
                    />
                    <AiCard
                        imageSrc={img4}
                        date="3 year old"
                        title=""
                        description="Has DIFFICULTY manipulating small objects"
                    />
                    <AiCard
                        imageSrc={img5}
                        date="4 year old"
                        title=""
                        description="Has DIFFICULTY scribbling or drawing"
                    />
                </div>
                <div className="absolute -top-[1vw] right-[13vw]" ref={p3Ref}> {/* Apply the ref to p3 image */}
                    <img src={p3} alt="Popup Image" />
                </div>
            </div>



            {/* Mobile view */}
            <div className='lg:hidden flex overflow-x-auto mx-8 justify-start items-center m-auto space-x-4'>
                <div className='flex-shrink-0'>
                    <AiCard />
                </div>
                <div className='flex-shrink-0'>
                    <AiCard />
                </div>
                <div className='flex-shrink-0'>
                    <AiCard />
                </div>
                <div className='flex-shrink-0'>
                    <AiCard />
                </div>
                <div className='flex-shrink-0'>
                    <AiCard />
                </div>
            </div>
            <p className='text-center text-[9px] p-3 text-white font-montserrat'>*Source: A Review Of Developmental Delay And Its Determinants In Under Five Children (National Journal of Medical and Allied Sciences, 2017)</p>
            <button className='flex justify-center items-center border-[#B740A1] p-4 my-4 border rounded-full m-auto font-manrope text-sm md:text-2xl xl:text-lg text-white'>
                Start Your Child’s Assessment
            </button>
        </>
    );
};

export default OpenAI;
