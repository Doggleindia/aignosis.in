import React, { useState } from 'react';
import bg from '../assets/images/poster.png';
import bg2 from '../assets/images/poster2.png';
import bg3 from '../assets/images/poster3.png';
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const Screen5 = () => {
    const slides = [
        {
            title: "Does your child watch screens for more than 2 hours a day?",
            description: "Prolonged screen time can impact social interaction and communication skills, which are crucial in early autism detection. Monitor your child’s screen habits closely.",
            img: bg
        },
        {
            title: "Does your child show frequent tantrums and meltdowns?",
            description: "Frequent tantrums and meltdowns may signal challenges in emotional regulation, often linked to early signs of autism. Understanding these behaviors can aid in timely intervention.",
            img: bg2
        },
        {
            title: "Does your child have difficulty speaking and communicating needs?",
            description: "Difficulties in speaking and expressing needs are common indicators of developmental delays and autism. Early recognition of communication challenges is essential for support.",
            img: bg3
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle previous slide
    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    // Handle next slide
    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    return (
        <div className='h-screen text-white flex justify-center items-center w-full font-montserrat bg-[#1A0C25]'>
            <div className="w-full h-full flex justify-center items-center flex-col">
                
                {/* Header Section */}
                <div className='w-full flex-col h-[20vw] justify-center flex items-center'>
                    <div className="flex justify-center gap-5 items-center">
                        <div className='w-[8rem] h-[1rem] rounded-3xl bg-[#FFCADF21]'></div>
                        <h1 className='text-[#F1C6FE]'>Recognize the Signs</h1>
                        <div className='w-[8rem] h-[1rem] rounded-3xl bg-[#FFCADF21]'></div>
                    </div>
                    <div className="mt-[2rem]">
                        <h1 className='text-center text-7xl tracking-tight font-semibold leading-[3rem]'>Recognize the Signs</h1>
                        <h1 className='text-center text-6xl italic tracking-tight font-semibold mt-5 leading-[3rem]'>Is Your Child at Risk?</h1>
                    </div>
                    <div className='px-[25rem] mt-[2rem]'>
                        <p className='text-center'>
                            Gain insight into the prevalence of developmental challenges and autism among children. Each data point highlights the urgency of early detection, supporting parents with reliable information to act quickly. Learn more about the numbers that drive our mission.
                        </p>
                    </div>
                </div>

                {/* Slide Section */}
                <div className="w-full h-[25vw] flex justify-center items-center gap-[5rem]">
                    <div onClick={goToPreviousSlide} className="cursor-pointer w-[3rem] h-[3rem] flex justify-center items-center text-xl bg-[#382C3E] rounded-full">
                        <GoArrowLeft />
                    </div>
                    
                    <div className='w-[60%] h-[25vw] flex overflow-hidden border border-[#B874B540] rounded-3xl'>
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {slides.map((slide, index) => (
                                <div key={index} className="w-full flex-shrink-0 flex">
                                    <div className="w-[50%] h-full flex justify-center items-center">
                                        <img className='w-[100%] h-[100%] scale-[.8] object-cover' src={slide.img} alt={slide.title} />
                                    </div>
                                    <div className="w-[50%] ml-[5rem] pr-[4vw] text-4xl h-full flex flex-col justify-center items-start">
                                        <h1 className='font-medium text-left'>{slide.title}</h1>
                                        <p className='text-base mt-2'>{slide.description}</p>
                                        <div className='w-[10rem] cursor-pointer group hover:bg-[#B740A1] transition-colors duration-300 mt-[2rem] border-2 border-[#B740A1] gap-4 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3rem] bg-transparent'>
                                            <a href="" className='text-white text-base'>Learn more</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div onClick={goToNextSlide} className="cursor-pointer w-[3rem] h-[3rem] flex justify-center items-center text-xl bg-[#382C3E] rounded-full">
                        <GoArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Screen5;
