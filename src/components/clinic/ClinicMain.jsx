import React from 'react';
import Header from '../Header';
import img2 from '../../assets/clinic/img2.png';
import img4 from '../../assets/clinic/img4.png';
import Comparison from '../Comparison';
import Trusted from './Trusted';
import Reports from './Reports';
import Awards from './Awards';
import Endrosed from './Endrosed';
import BlogFooter from '../BlogPages/BlogFooter';
import img23 from '../../assets/clinic/img 23.png';
import img24 from '../../assets/clinic/img24.png';
import img25 from '../../assets/clinic/img25.png';
import star from '../home/star.png';

import SEO from '../config/Seo';
import Newnavbar from '../Newnavbar';
const ClinicMain = () => {
  return (
    <>
      <SEO
        canonicalUrl={'https://aignosis.in/clinic'}
        metaDescription={
          'Visit Aignosis Autism Clinic for expert care and accurate diagnosis. Our specialists offer personalized solutions for autism treatment and support.'
        }
        pageTitle={'Aignosis Autism Clinic | Expert Care & Diagnosis'}
      />
      <div className="overflow-x-hidden">
        <Header />

        <div className="flex min-h-screen flex-col items-center bg-[#1A0C25] p-[5vw] font-raleway">
          <div className="mt-[2vw] flex flex-row items-center space-x-4 max-sm:mb-8 max-sm:mt-[15vw]">
            <span
              className="h-[10px] w-[100px] rounded-full max-sm:w-[60px]"
              style={{
                background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
              }}
            ></span>
            <span className="text-[24px] font-medium text-[#F1C6FE] max-sm:text-sm">Clinic</span>
            <span
              className="h-[10px] w-[100px] rounded-full max-sm:w-[60px]"
              style={{
                background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
              }}
            ></span>
          </div>
          <div className="flex w-full gap-8 max-sm:flex-col lg:flex-nowrap">
            {/* Left Side: Image */}
            <div className="flex items-center justify-center md:flex-1">
              <img
                src="https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/img1.png"
                alt="Descriptive Alt Text"
                className="max-h-[80vh] max-w-full rounded-lg object-cover shadow-lg"
              />
            </div>

            {/* Right Side: Text */}
            <div className="flex flex-1 flex-col justify-center space-y-6 text-[#F6E8FB]">
              <div className="flex items-center">
                <span className="flex items-center text-sm font-bold leading-tight text-[#9C00AD] md:text-[16px]">
                  <img src={star} className="mr-[-.8vw] scale-[.5]" alt="star" />{' '}
                  {/* Add margin to the right of the image */}
                  Welcome to AIGNOSIS
                </span>

                {/* <img
                src={img2}
                alt="Money Icon"
                className="w-6 h-6 md:w-[200px] md:h-[150px]"
              /> */}
              </div>
              <div>
                <h1 className="font-manrope text-[65px] leading-[4vw] text-[rgba(255,255,255,0.75)] max-sm:text-[20px]">
                  Enhance Your Care with Aignosis
                </h1>
                <p className="mt-5 font-raleway text-[20px]">
                  Leverage cutting-edge tools and data-driven insights to provide better care for your patients. Partner
                  with us to revolutionize your practice.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[5vw] flex h-full flex-col items-center justify-center bg-[#1A0C25] p-1 font-raleway text-white md:p-8">
            {/* Centered Heading */}
            <span className="mb-8 text-center text-[24px] text-[#F6E8FB] md:text-5xl">
              Key Features and Our Solutions
            </span>

            {/* Content Section */}
            <div className="flex w-full flex-col items-center justify-between space-y-8 md:flex-row md:space-x-[60px] md:space-y-0">
              {/* Left Image */}
              <div className="flex-shrink-0">
                <img src={img23} alt="Description of Image" className="max-h-[60vh] w-full shadow-lg" />
              </div>

              {/* Right Text */}
              <div className="flex max-w-lg flex-col gap-4 font-manrope text-[20px] text-lg text-[#ffff]">
                {/* <p>
                Embark on a journey through our narrative, where innovation meets purpose.
              </p> */}
                {/* <p>Lorem ipsum dolor sit amet consectetur. Sit non diam justo fames. Blandit et purus mollis convallis malesuada egestas risus quam enim. Semper lorem rhoncus et felis tristique tellus volutpat orci. Dui elementum a sed.</p> */}
                <h2 className="text-xl font-bold">Effortless Screening Setup</h2>
                <ul className="mt-4 list-disc pl-5 font-manrope">
                  <li>A plug-and-play developmental screening solution using webcams.</li>
                  <li>Quick integration into existing clinic/hospital systems without additional hardware costs.</li>
                  <li>Provides holistic, data-driven insights about each child's growth.</li>
                  <li>Allows digital connection with psychologists for detailed assessments.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#1A0C25] p-1 font-raleway text-white md:p-6">
            {/* Content Section */}
            <div className="flex w-full flex-col items-center justify-between space-y-8 md:flex-row md:space-x-[60px] md:space-y-0">
              <div className="flex max-w-lg flex-col gap-4 font-manrope text-[20px] text-lg text-[#ffff]">
                {/* <p>
                Embark on a journey through our narrative, where innovation meets purpose.
              </p>
              <p>Lorem ipsum dolor sit amet consectetur. Sit non diam justo fames. Blandit et purus mollis convallis malesuada egestas risus quam enim. Semper lorem rhoncus et felis tristique tellus volutpat orci. Dui elementum a sed.</p> */}
                <h2 className="text-xl font-bold">Accurate Screening at your Clinic.</h2>
                <ul className="mt-4 list-disc pl-5 font-manrope">
                  <li>
                    Proprietary AI algorithms analyze subtle biomarkers (e.g., gaze, attention, facial expressions) for
                    early detection of autism and other neurodevelopmental disorders.
                  </li>
                  <li>
                    Results provided within minutes, enabling swift clinical decision-making with therapeutic
                    intervention.
                  </li>
                </ul>
              </div>
              {/* Left Image */}
              <div className="flex-shrink-0">
                <img src={img24} alt="Description of Image" className="max-h-[60vh] w-full shadow-lg" />
              </div>
            </div>
          </div>
          {/* <div className='flex justify-center items-center'>
          <img src={img4} alt="" />
        </div> */}
          <div className="flex flex-col items-center justify-center bg-[#1A0C25] p-1 font-raleway text-white md:p-6">
            {/* Content Section */}
            <div className="flex w-full flex-col items-center justify-between space-y-8 md:flex-row md:space-x-[60px] md:space-y-0">
              {/* Left Image */}
              <div className="flex-shrink-0">
                <img src={img25} alt="Description of Image" className="max-h-[60vh] w-full shadow-lg" />
              </div>

              <div className="flex max-w-lg flex-col gap-4 font-manrope text-[20px] text-lg text-[#ffff]">
                {/* <p>
                Embark on a journey through our narrative, where innovation meets purpose.
              </p>
              <p>Lorem ipsum dolor sit amet consectetur. Sit non diam justo fames. Blandit et purus mollis convallis malesuada egestas risus quam enim. Semper lorem rhoncus et felis tristique tellus volutpat orci. Dui elementum a sed.</p> */}
                <h2 className="text-xl font-bold">Enhanced Patient Engagement</h2>
                <ul className="mt-4 list-disc pl-5 font-manrope">
                  <li>
                    Interactive and child-friendly screening videos ensure high cooperation rates with the child getting
                    screened without even knowing.
                  </li>
                  <li>Non-invasive, stress-free process for both children and parents.</li>
                  <li>No need for detailed, expensive screening.</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <Comparison />
          </div>
          <div>
            <Trusted />
          </div>
        </div>
        <div>
          <Reports />
        </div>
        <div>
          <Awards />
        </div>
        <div>{/* <Endrosed /> */}</div>
        <BlogFooter />
      </div>
    </>
  );
};

export default ClinicMain;
