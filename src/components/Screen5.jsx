import React, { useState } from 'react';
import bg from '../assets/images/poster4.png';
import bg2 from '../assets/images/poster5.png';
import bg3 from '../assets/images/poster6.png';
import bg4 from '../assets/images/poster7.png';
import bg5 from '../assets/images/poster8.png';
import { useSwipeable } from 'react-swipeable';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';

const Screen5 = () => {
  const slides = [
    {
      subTitle: '3 months old',
      title: 'Does NOT follow moving objects with eyes',
      description:
        'Prolonged screen time can impact social interaction and communication skills, which are crucial in early autism detection. Monitor your child’s screen habits closely.',
      img: bg,
    },
    {
      subTitle: '1 year old',
      title: 'Does NOT use gestures like waving or shaking head',
      description:
        'Prolonged screen time can impact social interaction and communication skills, which are crucial in early autism detection. Monitor your child’s screen habits closely.',
      img: bg2,
    },
    {
      subTitle: '2 Year old',
      title: 'Does NOT speak two-word sentences',
      description:
        'Prolonged screen time can impact social interaction and communication skills, which are crucial in early autism detection. Monitor your child’s screen habits closely.',
      img: bg3,
    },
    {
      subTitle: '3 Year old',
      title: 'Has DIFFICULTY manipulating small objects',
      description:
        'Prolonged screen time can impact social interaction and communication skills, which are crucial in early autism detection. Monitor your child’s screen habits closely.',
      img: bg4,
    },
    {
      subTitle: '4 Year old',
      title: 'Has DIFFICULTY scribbling or drawing',
      description:
        'Prolonged screen time can impact social interaction and communication skills, which are crucial in early autism detection. Monitor your child’s screen habits closely.',
      img: bg5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Swipe Handlers for Mobile
  const handlers = useSwipeable({
    onSwipedLeft: goToNextSlide,
    onSwipedRight: goToPreviousSlide,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  const Divider = ({ title }) => (
    <div className="mb-8 mt-10 flex flex-row items-center justify-center space-x-4 max-sm:mb-2 max-sm:mt-2">
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
        }}
      ></span>
      <h1 className="2xl:text-[20px] font-medium text-[#F1C6FE] max-sm:text-sm md:text-sm">{title}</h1>
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
        }}
      ></span>
    </div>
  );

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#1A0C25] font-montserrat text-white max-sm:mt-[220px] max-sm:h-auto">
      <div className="flex h-full w-full flex-col items-center justify-center px-4 md:px-0">
        {/* Header Section */}
        <div className="mb-10 flex w-full flex-col items-center justify-center md:h-[20vw]">
          <Divider title="Recognize the Signs " />

          <div className="mx-sm:[mt-0] mt-4 font-manrope md:mt-[0rem]">
            <h1 className="2xl:text-5xl w-full text-center text-2xl font-semibold leading-[3rem] tracking-tight text-[#F6E8FB] max-sm:text-center md:text-4xl">
              Upto 1 in 5 children are at risk of developmental delays*
            </h1>
            <h1 className="2xl:text-5xl 2xl:leading-[3rem] mt-5 text-center text-2xl font-semibold italic tracking-tight text-[#F6E8FB] max-sm:mr-[20px] max-sm:mt-0 md:text-4xl md:leading-[.1rem]">
              Is Your Child at Risk?
            </h1>
          </div>
          <div className="mt-4 px-4 text-sm md:mt-[2rem] md:px-[10rem] md:text-base">
            <p className="2xl:text-xl text-center text-sm text-[#ECECEC] md:text-base">
              Gain insight into the prevalence of developmental challenges and autism among children. Each data point
              highlights the urgency of early detection, supporting parents with reliable information to act quickly.
              Learn more about the numbers that drive our mission.
            </p>
          </div>
        </div>

        {/* Slide Section */}
        <div
          className="2xl:w-[80%] flex h-auto w-full flex-col items-center justify-center gap-6 md:h-[25vw] md:w-[80%] md:flex-row md:gap-[5rem]"
          {...handlers}
        >
          <div
            onClick={goToPreviousSlide}
            className="flex h-[2rem] w-[2rem] cursor-pointer items-center justify-center rounded-full bg-[#382C3E] text-base md:h-[3rem] md:w-[3rem] md:text-xl"
          >
            <GoArrowLeft />
          </div>

          <div className="flex h-auto w-[350px] overflow-hidden rounded-3xl border border-[#B874B540] md:h-[25vw] md:w-[80%]">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="flex w-full flex-shrink-0 flex-col max-sm:w-[100%] md:flex-row">
                  <div className="2xl:w-[28vw] 2xl:h-full flex w-full items-center justify-center max-sm:w-[68%] md:h-full md:w-[20vw]">
                    <img
                      className="object-fit h-full w-full scale-[.7] max-sm:w-[79%]"
                      src={slide.img}
                      alt={slide.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="2xl:w-[20vw] mt-4 flex w-full flex-col items-start justify-center text-base max-sm:w-[60%] md:ml-[5rem] md:mt-0 md:w-[28vw] md:py-[2rem] md:text-4xl">
                    <span className="text-sm text-[#B7407D] max-sm:ml-[4vw]">{slide.subTitle}</span>
                    <h1 className="2xl:text-2xl w-[full] text-left font-medium max-sm:text-center md:text-lg">
                      {slide.title}
                    </h1>
                    <p className="2xl:text-lg mt-2 text-sm max-sm:text-center md:text-base">{slide.description}</p>
                    <div className="group mt-4 flex h-[2.5rem] w-full cursor-pointer items-center justify-center rounded-full border-2 border-[#B740A1] bg-transparent text-[#0D0C0A] transition-colors duration-300 hover:bg-pink-500 max-sm:m-[auto] max-sm:mb-[15px] max-sm:mt-[21px] max-sm:w-[50%] md:mt-[2rem] md:h-[3rem] md:w-[10rem]">
                      <a href="#" className="text-sm text-white md:text-base">
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            onClick={goToNextSlide}
            className="flex h-[2rem] w-[2rem] cursor-pointer items-center justify-center rounded-full bg-[#382C3E] text-base md:h-[3rem] md:w-[3rem] md:text-xl"
          >
            <GoArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen5;
