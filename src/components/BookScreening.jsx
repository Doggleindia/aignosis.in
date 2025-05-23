import React from 'react';
import family from '../assets/family.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
import mind_img2 from '../assets/mind_img2.png';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';
import pic5 from '../assets/pic5.png';
import { useNavigate, Link } from 'react-router-dom';
import { GoArrowUpRight } from 'react-icons/go';
import star from '../assets/PopUps/star.png';

// Reusable ServiceCard Component
const ServiceCard = ({ image, title, description, onClick }) => (
  <div
    className="shadow-3xl flex cursor-pointer items-center rounded-xl bg-custom-gradient p-6 transition-shadow hover:shadow-2xl"
    onClick={onClick}
  >
    {/* Image Section */}
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-950 max-sm:h-[50px]">
      <img src={image} alt="Service Icon" className="h-12 w-12" loading="lazy" />
    </div>

    {/* Text Section */}
    <div className="ml-4 flex-grow">
      <h3 className="2xl:text-lg font-semibold text-[#F6E8FB] md:text-base">{title}</h3>
      <p className="2xl:text-sm mt-1 text-[#F6E8FB] md:text-xs">{description}</p>
    </div>

    {/* Arrow Icon */}
    <div className="ml-4">
      <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B7408069] transition-colors hover:bg-pink-600">
        <AiOutlineArrowRight className="text-xl text-white" />
      </button>
    </div>
  </div>
);

// Main Component
const BookScreening = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div
      className="2xl:px-[10rem] 2xl:py-[6rem] m-2 flex items-center justify-center max-sm:m-[2rem] max-sm:mt-[10vw] md:px-[5rem] md:py-[5rem]"
      style={{ background: 'rgba(26, 12, 37, 1)' }}
    >
      <div
        className="flex min-h-screen w-[95vw] flex-col items-center rounded-[6rem] border border-[#B740A16B] bg-gradient-to-b from-purple-900 to-purple-800 p-10 py-[5rem] text-white md:px-[5rem]"
        style={{ background: 'rgba(26, 12, 37, 1)' }}
      >
        {/* Top Navigation */}
        <div className="mb-8 flex items-center justify-center space-x-4 max-sm:ml-[-8vw] md:space-x-2">
          <img src={star} className="h-[70px] w-[70px] self-center max-sm:h-[30px] max-sm:w-[30px]" alt="star" />
          <span
            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
            style={{
              background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
            }}
          ></span>
          <p className="2xl:text-xl font-medium md:text-sm" style={{ color: '#F1C6FE' }}>
            For Parents
          </p>
          <span
            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
            style={{
              background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
            }}
          ></span>
        </div>

        {/* Title Section */}
        <div className="max-w-2xl text-center">
          <h2 className="2xl:text-5xl mb-2 font-semibold md:text-3xl">Book a Screening:</h2>
          <p className="font-[Raleway] text-2xl font-bold">Take the First Step Towards Early Intervention</p>
        </div>

        <div className="mt-[2rem] flex justify-between">
          <div className="flex flex-col">
            {/* Why Screening Matters Section */}
            <div className="2xl:pr-[15rem] mt-12 max-w-3xl md:pr-[5rem]">
              <h2 className="mb-4 text-2xl font-semibold max-sm:text-xl">Why Early Screening Matters</h2>
              <p className="text-md leading-relaxed max-sm:text-sm">
                We understand how important your child’s development is to you, and our screening process is designed to
                provide parents with meaningful insights for early autism detection. Early screening can empower you to
                take proactive steps in supporting your child’s unique journey. We’re here to guide you every step of
                the way. Simply book a test to connect with caring experts for personalized support and a free
                consultation. 
              </p>
            </div>

            {/* How It Helps You Section */}
            <div className="2xl:pr-[15rem] mt-10 max-w-3xl md:pr-[5rem]">
              <h2 className="mb-4 text-2xl font-semibold max-sm:text-xl">How it Helps You:</h2>
              <p className="text-md leading-relaxed max-sm:text-sm">
                Early screening plays a crucial role in identifying the first signs of autism, giving you the knowledge
                and clarity to make informed decisions about your child’s care. Taking action today helps build a strong
                foundation of understanding and support, fostering your child’s growth and future development. We’re
                here to walk alongside you on this important journey.
              </p>
            </div>

            {/* Proceed Button */}

            <div className="mt-7">
              <button className="flex w-auto items-center space-x-2 rounded-full border border-[#9C00AD] px-2 py-4 text-lg font-semibold transition-colors hover:bg-[#B7407D] max-sm:px-1 max-sm:py-0 max-sm:text-sm md:h-[2.5rem]">
                <span>Click to proceed</span>
                <div className="flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-[#B740A1] text-lg text-white group-hover:bg-white group-hover:text-black">
                  <GoArrowUpRight />
                </div>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mt-[3rem] md:pr-[6rem]">
            <div className="absolute inset-0 rounded-lg bg-[#B740A1] opacity-65 blur-[200px]"></div>
            <img
              src={family}
              alt="Family Illustration"
              className="2xl:w-64 relative z-10 h-auto max-sm:w-[400px] md:w-72"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex justify-between max-sm:flex-col">
          <div className="flex flex-col md:mt-20">
            <div className="relative mt-[10rem] sm:ml-[8rem]">
              <div className="absolute inset-0 rounded-lg bg-[#B740A1] opacity-65 blur-[130px]"></div>
              <img
                src={mind_img2}
                alt="Family Illustration"
                className="relative h-auto w-64 max-sm:w-[400px]"
                loading="lazy"
              />
            </div>

            {/* Our Services Heading */}
            <h2 className="2xl:text-2xl text-center font-manrope font-semibold text-[#FFFFFF] md:ml-[8rem] md:text-lg">
              Our Services:
            </h2>

            {/* Subtext */}
            <p className="2xl:text-lg text-center font-raleway text-[#FFFFFF] md:ml-[7rem] md:text-sm">
              Comprehensive Support for Your Child’s <br /> Growth
            </p>
          </div>

          <div className="2xl:ml-[200px] flex flex-col gap-10">
            {/* Render Service Cards with Individual Margins */}
            <div className="ml-0">
              <ServiceCard
                image={pic1}
                title="Assessments & Evaluation"
                description="Educational, Psychological & Social Skills Assessment"
                onClick={() => handleNavigation('/assessments-evaluation')}
              />
            </div>

            <div className="sm:ml-20">
              <ServiceCard
                image={pic2}
                title="Speech & Language"
                description="Support for Speech Delays & Communication Needs"
                onClick={() => handleNavigation('/speech-language')}
              />
            </div>

            <div className="sm:ml-[150px]">
              <ServiceCard
                image={pic3}
                title="Behaviour Therapy"
                description="Guidance for Anxiety & Behavioral Health"
                onClick={() => handleNavigation('/behaviour-therapy')}
              />
            </div>

            <div className="sm:ml-20">
              <ServiceCard
                image={pic4}
                title="Occupational Therapy"
                description="Motor Skills Independence & Confidence Building"
                onClick={() => handleNavigation('/occupational-therapy')}
              />
            </div>

            <div className="sm:ml-0">
              <ServiceCard
                image={pic5}
                title="Special Education"
                description="Academic Support in Core Subjects"
                onClick={() => handleNavigation('/special-education')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookScreening;
