import React from 'react';
import family from '../assets/family.png';
import { AiOutlineArrowRight } from 'react-icons/ai';
import mind_img2 from '../assets/mind_img2.png';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';
import pic5 from '../assets/pic5.png';
import { Link } from 'react-router-dom';

// Reusable ServiceCard Component
const ServiceCard = ({ image, title, description }) => (
  <div className="bg-custom-gradient p-6 rounded-xl flex items-center shadow-3xl hover:shadow-2xl transition-shadow">
    {/* Image Section */}
    <div className="w-16 h-16 bg-purple-950 rounded-full flex items-center justify-center">
      <img src={image} alt="Service Icon" className="w-12 h-12" />
    </div>

    {/* Text Section */}
    <div className="ml-4 flex-grow">
      <h3 className="text-lg font-semibold text-[#F6E8FB">{title}</h3>
      <p className="text-sm text-[#F6E8FB] mt-1">{description}</p>
    </div>

    {/* Arrow Icon */}
    <div className="ml-4">
      <button className="bg-[#B7408069] w-8 h-8 flex items-center justify-center rounded-full hover:bg-pink-600 transition-colors">
        <AiOutlineArrowRight className="text-white text-xl" />
      </button>
    </div>
  </div>
);

// Main Component
const BookScreening = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-800 text-white p-10 flex flex-col items-center"
      style={{ background: 'rgba(26, 12, 37, 1)' }}
    >
      {/* Top Navigation */}
      <div className="flex justify-center items-center space-x-2 mb-8">
        <span
          className="h-[10px] w-[118px] rounded-full"
          style={{
            background:
              'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
          }}
        ></span>
        <p
          className="text-lg font-medium"
          style={{ color: '#F1C6FE', fontSize: '20px' }}
        >
          For Parents
        </p>
        <span
          className="h-[10px] w-[118px] rounded-full"
          style={{
            background:
              'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
          }}
        ></span>
      </div>

      {/* Title Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-semibold mb-2">
          Book a Screening:
        </h1>
        <p className="text-2xl  italic font-light">
          Take the First Step Towards Early Intervention
        </p>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col">
          {/* Why Screening Matters Section */}
          <div className="mt-12 max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">
              Why Early Screening Matters
            </h2>
            <p className="text-lg leading-relaxed">
              Our screening process provides parents with vital insights for
              early autism detection, helping you take proactive steps in
              supporting your child’s development. Easily book an appointment
              through our form to connect with experts for personalized
              guidance.
            </p>
          </div>

          {/* How It Helps You Section */}
          <div className="mt-10 max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">How it Helps You:</h2>
            <p className="text-lg leading-relaxed">
              Screening identifies early signs of autism, empowering parents
              with knowledge to make informed decisions. Scheduling today helps
              create a foundation of support for your child’s growth.
            </p>
          </div>

          {/* Proceed Button */}
          

<div className='mt-7'>
  <button className="px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 hover:bg-[#B7407D] transition-colors border border-[#9C00AD]">
    <span>Click to proceed</span>
    <div className="bg-[#B7408069] w-6 h-6 flex items-center justify-center rounded-full">
      <AiOutlineArrowRight className="text-white text-xl" />
    </div>
  </button>
</div>


        </div>

        {/* Image Section */}
        <div className="mt-16 ml-8">
          <img src={family} alt="Family Illustration" className="w-64 h-auto" />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col mt-20">
          <img src={mind_img2} alt="Service Icon" className="h-auto" />

          {/* Our Services Heading */}
          <h2 className="text-2xl font-semibold text-[#FFFFFF] font-manrope text-center">
            Our Services:
          </h2>

          {/* Subtext */}
          <p className="text-lg text-[#FFFFFF] text-center font-raleway">
            Comprehensive Support for Your Child’s <br /> Growth
          </p>
        </div>

        <div className="ml-[200px] flex flex-col gap-10">
          {/* Render Service Cards with Individual Margins */}
          <div className="ml-0">
           <Link to='/test/fillup'> <ServiceCard 
              image={pic1}
              title="Assessments & Evaluation"
              description="Educational, Psychological & Social Skills Assessment"
            /></Link>
          </div>

          <div className="ml-20">
            <ServiceCard
              image={pic2}
              title="Speech & Language"
              description="Support for Speech Delays & Communication Needs"
            />
          </div>

          <div className="ml-[150px]">
            <ServiceCard
              image={pic3}
              title="Behaviour Therapy"
              description="Guidance for Anxiety & Behavioral Health"
            />
          </div>

          <div className="ml-20">
            <ServiceCard
              image={pic4}
              title="Occupational Therapy"
              description="Motor Skills Independence & Confidence Building"
            />
          </div>

          <div className="ml-0">
            <ServiceCard
              image={pic5}
              title="Special Education"
              description="Academic Support in Core Subjects"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookScreening;
