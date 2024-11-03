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

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    return (
        <div className='h-screen max-sm:h-auto text-white flex justify-center items-center w-full font-montserrat bg-[#1A0C25]'>
            <div className="w-full h-full flex justify-center items-center flex-col px-4 md:px-0">
                
                {/* Header Section */}
                <div className='w-full flex-col md:h-[20vw] justify-center flex items-center mb-10'>
                    <div className="flex justify-center gap-5 items-center">
                        <span
                            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                            style={{
                                background: "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)"
                            }}
                        ></span>
                        <h1 className='text-[#F1C6FE] text-sm md:text-3xl'>Recognize the Signs</h1>
                        <span
                            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                            style={{
                                background: "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)"
                            }}
                        ></span>
                    </div>
                    <div className="mt-4 md:mt-[2rem]">
                        <h1 className='text-center text-2xl md:text-7xl tracking-tight font-semibold leading-[2rem] md:leading-[4rem]'>Upto 1 in 5 children are at risk of developmental delays*</h1>
                        <h1 className='text-center text-xl md:text-6xl italic tracking-tight font-semibold mt-4 md:mt-6 leading-[1.5rem] md:leading-[3rem]'>Is Your Child at Risk?</h1>
                    </div>
                    <div className='px-4 md:px-[25rem] mt-4 md:mt-[2rem] text-sm md:text-base'>
                        <p className='text-center'>
                            Gain insight into the prevalence of developmental challenges and autism among children. Each data point highlights the urgency of early detection, supporting parents with reliable information to act quickly. Learn more about the numbers that drive our mission.
                        </p>
                    </div>
                </div>

                {/* Slide Section */}
                <div className="w-full md:w-[80%] h-auto md:h-[25vw] flex flex-col md:flex-row justify-center items-center gap-6 md:gap-[5rem]">
                    <div onClick={goToPreviousSlide} className="cursor-pointer w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] flex justify-center items-center text-base md:text-xl bg-[#382C3E] rounded-full">
                        <GoArrowLeft />
                    </div>
                    
                    <div className='w-[350px] md:w-[80%] h-auto md:h-[25vw] flex overflow-hidden border border-[#B874B540] rounded-3xl'>
                        <div
                            className="flex transition-transform duration-500 ease-in-out "
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {slides.map((slide, index) => (
                                <div key={index} className="w-full flex-shrink-0 flex flex-col md:flex-row">
                                    <div className="w-full md:w-[50%] h-[15rem] md:h-full flex justify-center items-center">
                                        <img className='w-full h-full object-cover' src={slide.img} alt={slide.title} />
                                    </div>
                                    <div className="w-full md:w-[60%] mt-4 md:mt-0 md:ml-[5rem] md:pr-[4vw] text-base md:text-4xl flex flex-col justify-center items-start">
                                        <h1 className='font-medium text-left max-sm:text-center text-md md:text-2xl'>{slide.title}</h1>
                                        <p className='mt-2 text-sm max-sm:text-center md:text-base'>{slide.description}</p>
                                        <div className='w-full md:w-[10rem] cursor-pointer group hover:bg-[#B740A1] transition-colors duration-300 mt-4 md:mt-[2rem] border-2 border-[#B740A1] rounded-full flex justify-center items-center text-[#0D0C0A] h-[2.5rem] md:h-[3rem] bg-transparent '>
                                            <a href="#" className='text-white text-sm md:text-base'>Learn more</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div onClick={goToNextSlide} className="cursor-pointer w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] flex justify-center items-center text-base md:text-xl bg-[#382C3E] rounded-full">
                        <GoArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Screen5;
