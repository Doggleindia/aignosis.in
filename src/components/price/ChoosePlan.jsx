import React, { useEffect, useState } from 'react';
import { FiArrowRight, FiChevronsRight } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { GoArrowUpRight, GoShare } from 'react-icons/go';
import { FaShareAlt } from 'react-icons/fa';
import img1 from '../../assets/assessments/as1.png';
import img2 from '../../assets/assessments/as2.png';
import img3 from '../../assets/assessments/as3.png';
import img4 from '../../assets/assessments/as4.png';
import GiftAssessment from './GiftAssessment';
import PricingCard from './PricingCard';
import popularImage from '../../assets/popular.png';
import PlanHeading from './PlanHeading';
import GiftHeading from './GiftHeading';

const ChoosePlan = () => {
  const [active, setActive] = useState('assessment');
  const [isGiftVisible, setIsGiftVisible] = useState(false);

  const navigate = useNavigate();

  const handleCardClick = (price) => {
    navigate('/payment', { state: { selectedPrice: price } }); // Pass price to Payment page
  };

  useEffect(() => {
    setIsGiftVisible(false);
  }, [active]);

  const handleGift = () => {
    setIsGiftVisible(true);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1A0C25] p-6">
      {/* Header, Title, Description, and Gift Section */}
      {isGiftVisible ? <GiftHeading /> : <PlanHeading />}

      {/* Toggle Buttons */}
      <div className="mb-10 flex w-[210px] rounded-3xl border border-[#B740A1] bg-[#9C00AD4A]">
        <button
          onClick={() => setActive('assessment')}
          className={`m-1 w-1/2 rounded-3xl py-2 font-semibold text-[#F6E8FB] ${active === 'assessment' ? 'border-[#B740A1] bg-[#5D1661]' : ''}`}
        >
          Assessment
        </button>
        <button
          onClick={() => setActive('therapy')}
          className={`m-1 w-1/2 rounded-3xl py-2 font-semibold text-[#F6E8FB] ${active === 'therapy' ? 'border-[#B740A1] bg-[#5D1661]' : ''}`}
        >
          Therapy
        </button>
      </div>

      {/* Render GiftAssessment component conditionally */}
      {isGiftVisible ? (
        <GiftAssessment />
      ) : (
        <div className="flex flex-row gap-10 font-raleway max-sm:flex-col">
          {active === 'therapy' && (
            <>
              <PricingCard
                discount="10% Off!"
                price="24000"
                originalPrice="27000"
                validity="3-Month Validity"
                sessions="15 Sessions at ₹600/session"
                savings="Save ₹3000 overall!"
                background="bg-[#564A5957]"
              />
              <PricingCard
                discount="30% Off!"
                price="46000"
                originalPrice="54000"
                validity="6-Month Validity"
                sessions="30 Sessions at ₹600/session"
                savings="Save ₹8000 overall!"
                background="bg-[#564A5957]"
                isPopular
              />
              <PricingCard
                discount="20% Off!"
                price="90000"
                originalPrice="108000"
                validity="One Year Validity"
                sessions="60 Sessions at ₹600/session"
                savings="Save ₹18000 overall!"
                background="bg-[#564A5957]"
              />
            </>
          )}

          {/* Add Assessment cards here */}
          {active === 'assessment' && (
            <div
              className="flex min-h-screen items-center justify-center rounded-md p-4 md:w-[80vw] md:p-6 lg:p-8"
              style={{
                background: 'radial-gradient(83.36% 50.06% at 50.04% 49.94%, #070B0E 0%, rgba(94, 40, 100, 0.3) 100%)',
              }}
            >
              <div className="flex w-full flex-col items-center space-y-14 p-4 max-sm:w-[300px] md:w-[80vw] md:p-6 lg:w-[60vw] lg:p-8">
                {/* Top Content: Discount and Price */}
                <div className="flex h-auto w-full flex-col items-center gap-5 rounded-xl border border-[#B740A180] bg-[#564A5957] p-4 text-center font-raleway text-[#F6E8FB] md:w-[40vw] lg:w-[20vw]">
                  <div className="w-[100px] rounded-2xl border border-[#B740A1] bg-[#B7407D54] px-4 py-2 text-left text-xs font-semibold">
                    64% Off!
                  </div>
                  <h2 className="mt-4 text-2xl font-bold md:text-3xl lg:text-4xl">₹700</h2>
                  <span className="text-sm font-normal text-gray-400">(originally ₹2000)</span>
                  <p className="lg:text-md text-xs font-normal md:text-sm">(Comprehensive Evaluation)</p>
                  <div className="lg:text-md mt-4 space-y-2 text-center text-xs md:text-sm">
                    <p>Includes Formal Report</p>
                    <p>Detailed Explanation</p>
                    <p>Easy & fast procedure</p>
                  </div>
                </div>

                <h2 className="font-raleway text-xl font-bold italic text-[#F6E8FB] md:m-[10vw] md:text-2xl lg:text-3xl">
                  Autism screening test
                </h2>

                {/* Main Content: Screening Steps */}
                <div className="flex w-full flex-col space-y-4 font-raleway text-[#F6E8FB] md:w-[70vw] md:flex-row md:flex-wrap md:justify-center md:space-x-4 md:space-y-6 lg:flex-nowrap lg:justify-around lg:space-y-0">
                  {/* Step 1 */}
                  <div className="flex flex-col items-center text-center md:w-[40%] lg:w-auto">
                    <div className="mb-4">
                      <div className="h-[80px] w-[80px] rounded-md bg-[#382C3E73] md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px]">
                        <img src={img1} className="h-full w-full" alt="Step 1" loading="lazy" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold md:text-lg">In-Depth Assessment</h3>
                    <p className="lg:text-md text-center text-xs md:text-sm">
                      Specialized evaluations that uncover your child’s unique abilities and areas for growth, providing
                      clear insights into their developmental journey.
                    </p>
                  </div>

                  {/* Arrow between Step 1 and Step 2 */}
                  <div className="hidden h-[7vw] items-center justify-center md:flex">
                    <FiChevronsRight size={24} />
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-center text-center md:w-[40%] lg:w-auto">
                    <div className="mb-4">
                      <div className="h-[80px] w-[80px] rounded-md bg-[#382C3E73] md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px]">
                        <img src={img2} className="h-full w-full" alt="Step 2" loading="lazy" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold md:text-lg">Personalized Therapy</h3>
                    <p className="lg:text-md text-xs md:text-sm">
                      Individualized sessions focused on building essential skills, designed to support your child’s
                      specific developmental needs in a nurturing environment.
                    </p>
                  </div>

                  {/* Arrow between Step 2 and Step 3 */}
                  <div className="hidden h-[7vw] items-center justify-center md:flex">
                    <FiChevronsRight size={24} />
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center text-center md:w-[40%] lg:w-auto">
                    <div className="mb-4">
                      <div className="h-[80px] w-[80px] rounded-md bg-[#382C3E73] md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px]">
                        <img src={img3} className="h-full w-full" alt="Step 3" loading="lazy" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold md:text-lg">Adaptive Learning Support</h3>
                    <p className="lg:text-md text-xs md:text-sm">
                      Resources and guidance tailored to promote learning success and help your child confidently engage
                      with educational goals.
                    </p>
                  </div>

                  {/* Arrow between Step 3 and Step 4 */}
                  <div className="hidden h-[7vw] items-center justify-center md:flex">
                    <FiChevronsRight size={24} />
                  </div>

                  {/* Step 4 */}
                  <div className="flex flex-col items-center text-center md:w-[40%] lg:w-auto">
                    <div className="mb-4">
                      <div className="h-[80px] w-[80px] rounded-md bg-[#382C3E73] md:h-[100px] md:w-[100px] lg:h-[110px] lg:w-[110px]">
                        <img src={img4} className="h-full w-full" alt="Step 4" loading="lazy" />
                      </div>
                    </div>
                    <h3 className="text-base font-bold md:text-lg">Continuous Feedback</h3>
                    <p className="lg:text-md text-xs md:text-sm">
                      Ongoing updates and strategies to help you track progress, refine approaches, and celebrate
                      milestones with your child’s development.
                    </p>
                  </div>
                </div>

                {/* Buttons Container */}
                <div className="mt-8 flex flex-col justify-center space-y-4 md:flex-row md:space-x-[80px] md:space-y-0">
                  <div
                    onClick={() => handleCardClick(700)}
                    className="flex w-full items-center justify-center space-x-2 rounded-full border border-[#9C00AD] px-4 py-2 text-sm font-semibold text-[#F6E8FB] transition-colors hover:bg-[#B7407D] md:w-auto md:text-base lg:text-lg"
                  >
                    <span>Take the assessment</span>
                    <div className="flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full bg-[#B740A1] text-white sm:h-[2rem] sm:w-[2rem]">
                      <GoArrowUpRight />
                    </div>
                  </div>

                  <button
                    onClick={handleGift}
                    className="flex w-full items-center justify-center space-x-2 rounded-full border border-[#9C00AD] px-4 py-2 text-sm font-semibold text-[#F6E8FB] transition-colors hover:bg-[#B7407D] md:w-auto md:text-base lg:text-lg"
                  >
                    <span>Share the assessment</span>
                    <div className="flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full bg-[#B740A1] text-white sm:h-[2rem] sm:w-[2rem]">
                      <FaShareAlt />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChoosePlan;
