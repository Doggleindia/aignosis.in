import React from 'react';
import img from '../assets/images/doctor.png';
import img1 from '../assets/images/doctor img.png';
import Divider from './aboutus/Divider';
import img2 from '../assets/dr_expertphoto.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo1 from '../assets/homepage/log1.png';
import current from '../assets/PopUps/current.png';
import star from '../assets/PopUps/star.png';

const FromDoctor = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Show next/prev arrows
    dots: true, // Show navigation dots
    autoplay: true,
    autoplaySpeed: 3000, // Slide every 3 seconds
  };

  return (
    <>
      <div className="hidden h-full w-full bg-[#1A0C25] text-white md:block">
        <div
          className="h-16 w-full"
          style={{
            background: 'linear-gradient(to bottom, #09121A 0%, #09121A00 100%)',
          }}
        ></div>
        <div className="">
          <div className="mt-[3vw] flex h-[25vw] w-full gap-14 px-[5vw] py-[0vw]">
            <div className="w-[50%]">
              <img
                className="h-[120%] w-[85%] rounded-xl object-fill"
                src="https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/dr+dhananjay.png"
                alt=""
                srcSet=""
              />
            </div>
            <div className="h-full w-[50%]">
              <div className="flex flex-row items-center justify-start space-x-4">
                <span
                  className="h-[6px] w-[100px] rounded-full max-sm:w-[60px]"
                  style={{
                    background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                  }}
                ></span>

                <span className="text-[16px] font-medium text-[#F1C6FE] max-sm:text-sm">From Doctors</span>

                <span
                  className="h-[6px] w-[100px] rounded-full max-sm:w-[60px]"
                  style={{
                    background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                  }}
                ></span>

                <img
                  src={current}
                  alt="Doctor"
                  className="h-[80px] w-[80px] object-cover max-sm:h-[30px] max-sm:w-[30px]"
                />
              </div>

              <span className="mt-5 font-raleway text-4xl">Expert Voices </span>
              <p className="mt-5 leading-[1.2vw]">
                Hear from healthcare professionals who've experienced how our tool supports <br /> early understanding
                and better outcomes.
              </p>

              <div className="w-full">
                <div className="mt-10 w-[60%]">
                  <Slider
                    className="gap-10 rounded-3xl"
                    {...settings}
                    style={{
                      background: 'radial-gradient(circle, #1A0C25 20%, #43284C 100%)',
                    }}
                  >
                    {/* Testimonial Card 1 */}
                    <div className="mx-auto flex h-[12vw] w-[80%] rounded-3xl p-8 text-white">
                      <div className="flex h-full flex-col justify-between">
                        {/* Testimonial Text */}
                        <p className="text-xs">
                          "As a pediatrician with over 40 years of experience, I believe early detection of autism and
                          developmental disorders is critical. This test is a groundbreaking tool that allows us to
                          detect early signs with high accuracy. It empowers parents to take action sooner, improving
                          outcomes for children."
                        </p>
                        {/* Divider */}
                        <div className="mt-4 h-[10px] w-full bg-pink-400"></div>
                        {/* Doctor Info */}
                        <div className="flex items-center justify-between">
                          {/* Left Side */}
                          <div className="flex flex-col">
                            <h3 className="text-base font-semibold text-[#CACED9]">Dr.Dhananajay Mangal,</h3>
                            <span className="text-xs text-[#CACED9]">Pediatrician & Developmental Expert</span>
                          </div>

                          {/* Right Side (Stethoscope Icon) */}
                          <div>
                            <img src={logo1} alt="Stethoscope Icon" className="h-10 w-10" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Card 2 */}
                    <div
                      className="mx-auto flex h-[11vw] w-[80%] rounded-3xl p-8 text-white"
                      style={{
                        background: 'radial-gradient(circle, #1A0C25 20%, #43284C 100%)',
                      }}
                    >
                      <div className="flex h-full flex-col justify-between">
                        {/* Testimonial Text */}
                        <p className="text-xs">
                          "The early autism detection test is a significant step forward in pediatric care. It offers a
                          non-invasive, cost-effective, and efficient way to screen children for neurodevelopmental
                          disorders. I wholeheartedly support this initiative, as it provides essential data for timely
                          intervention."
                        </p>
                        {/* Divider */}
                        <div className="mt-4 h-[.5px] w-full bg-pink-400"></div>
                        {/* Doctor Info */}
                        <div className="flex items-center justify-between">
                          {/* Left Side */}
                          <div className="flex flex-col">
                            <h2 className="text-base font-semibold text-[#CACED9]">Dr. Ramesh Agarwal,</h2>
                            <span className="text-xs text-[#CACED9]">Head of Child Development, AIIMS Delhi</span>
                          </div>
                          {/* Placeholder */}
                          <div>
                            <img src={logo1} alt="Stethoscope Icon" className="h-10 w-10" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-[90vw] top-[835vw] h-full w-[15%] rounded-xl bg-[#B740A1A6] opacity-55 blur-[120px]"></div>
          <div className="py-[5vw]">
            <div className="mt-[5vw] flex h-[30vw] w-full gap-14 px-[10vw]">
              <div className="h-full w-full overflow-x-auto">
                <div className="flex flex-row items-center justify-start space-x-4">
                  <img
                    src={star}
                    alt="star"
                    className="h-[60px] w-[80px] object-cover max-sm:h-[30px] max-sm:w-[30px]"
                  />
                  <span
                    className="h-[6px] w-[100px] rounded-full max-sm:w-[60px]"
                    style={{
                      background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                    }}
                  ></span>
                  <span className="text-[16px] font-medium text-[#F1C6FE] max-sm:text-sm">From Parents</span>
                  <span
                    className="h-[6px] w-[100px] rounded-full max-sm:w-[60px]"
                    style={{
                      background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                    }}
                  ></span>
                </div>
                <span className="mt-5 font-raleway text-4xl">Real Families, Real Stories </span>
                <p className="mt-5 leading-[1.2vw]">
                  Every milestone matters in a child's development. Here's what families like yours have to say about
                  their experience with us...
                </p>

                <div className="w-full pl-7">
                  <div className="mt-10 w-[60%]">
                    <Slider
                      className="gap-10 rounded-3xl"
                      {...settings}
                      style={{
                        background: 'radial-gradient(circle, #1A0C25 20%, #43284C 100%)',
                      }}
                    >
                      {/* Testimonial Card 1 */}
                      <div className="mx-auto flex h-[11vw] w-[80%] rounded-3xl p-8 text-white">
                        <div className="flex h-full flex-col justify-between">
                          {/* Testimonial Text */}
                          <p className="text-xs">
                            "I was so unsure about my child’s development, but this test was so easy and quick. We got
                            the answers we needed right at home, which made everything so much easier."
                          </p>
                          {/* Divider */}
                          {/* <div className="w-full h-[.5px] mt-4 bg-pink-400"></div> */}
                          {/* Doctor Info */}
                          <div className="flex items-center justify-between">
                            {/* Left Side */}
                            <div className="flex flex-col">
                              <h3 className="text-base font-semibold text-[#CACED9]">Neha Sharma,</h3>
                              <span className="text-xs text-[#CACED9]">Mother of 4 year old</span>
                            </div>
                            {/* Placeholder */}
                          </div>
                        </div>
                      </div>

                      {/* Testimonial Card 2 */}
                      <div
                        className="mx-auto flex h-[11vw] w-[80%] rounded-3xl p-8 text-white"
                        style={{
                          background: 'radial-gradient(circle, #1A0C25 20%, #43284C 100%)',
                        }}
                      >
                        <div className="flex h-full flex-col justify-between">
                          {/* Testimonial Text */}
                          <p className="text-xs">
                            "We weren’t sure what to expect, but the test was straightforward, and the results gave us
                            the clarity we needed. It helped us take the next steps without any guesswork."
                          </p>
                          {/* Divider */}
                          <div className="mt-4 h-[.5px] w-full bg-pink-400"></div>
                          {/* Doctor Info */}
                          <div className="flex items-center justify-between">
                            {/* Left Side */}
                            <div className="flex flex-col">
                              <h3 className="text-base font-semibold text-[#CACED9]">Sunil Verma,</h3>
                              <span className="text-xs text-[#CACED9]">Father of 4 yr old</span>
                            </div>
                            {/* Placeholder */}
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
              <div className="h-full w-[75%] overflow-hidden rounded-3xl">
                <img
                  className="h-full w-full object-cover"
                  src="https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/image+145.png"
                  alt=""
                  srcSet=""
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-16 w-full"
          style={{
            background: 'linear-gradient(to top, #09121A 0%, #09121A00 100%)',
          }}
        ></div>
      </div>
      <div className="block h-full w-full bg-[#1A0C25] text-white md:hidden">
        <div
          className="h-16 w-full"
          style={{
            background: 'linear-gradient(to bottom, #09121A 0%, #09121A00 100%)',
          }}
        ></div>
        <div className="w-full">
          <div className="flex h-auto w-full flex-col space-y-6 px-4 py-6">
            <div className="flex w-full flex-col space-y-4">
              <div className="flex flex-row items-center justify-start space-x-2">
                <span
                  className="h-[4px] w-[50px] rounded-full"
                  style={{
                    background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                  }}
                ></span>
                <h3 className="text-sm font-medium text-[#F1C6FE]">From Doctors</h3>
                <span
                  className="h-[4px] w-[50px] rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                  }}
                ></span>
              </div>
              <h3 className="text-start font-raleway text-xl">Expert Voices</h3>
              <p className="text-start text-xs">
                Hear from healthcare professionals who've experienced how our tool supports early understanding and
                better outcomes.
              </p>
              <div className="w-full">
                <img
                  src="https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/dr+dhananjay.png"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="scrollbar-hide flex space-x-4 overflow-x-auto py-10">
                <div
                  className="flex min-w-full flex-col rounded-3xl p-4 py-10 text-white"
                  style={{
                    background: 'radial-gradient(circle, #1A0C25 20%, #43284C 100%)',
                  }}
                >
                  <p className="text-xs">
                    "As a pediatrician with over 40 years of experience, I believe early detection of autism and
                    developmental disorders is critical. This test is a groundbreaking tool that allows us to detect
                    early signs with high accuracy. It empowers parents to take action sooner, improving outcomes for
                    children."
                  </p>
                  <div className="my-2 mt-10 h-[.5px] w-full bg-pink-400"></div>
                  <div className="flex items-center justify-between">
                    {/* Left Side */}
                    <div className="flex flex-col">
                      <h3 className="text-base font-semibold text-[#CACED9]">Dr. Dhananajay Mangal,</h3>
                      <span className="text-xs text-[#CACED9]">Pediatrician & Developmental Expert</span>
                    </div>

                    {/* Right Side (Stethoscope Icon) */}
                    <div>
                      <img src={logo1} alt="Stethoscope Icon" className="h-10 w-10" />
                    </div>
                  </div>
                </div>
                <div
                  className="flex min-w-full flex-col rounded-3xl p-4 py-10 text-white"
                  style={{
                    background: 'radial-gradient(circle, #1A0C25 20%, #43284C 100%)',
                  }}
                >
                  <p className="text-xs">
                    "The early autism detection test is a significant step forward in pediatric care. It offers a
                    non-invasive, cost-effective, and efficient way to screen children for neurodevelopmental disorders.
                    I wholeheartedly support this initiative, as it provides essential data for timely intervention."
                  </p>
                  <div className="my-2 mt-10 h-[.5px] w-full bg-pink-400"></div>
                  <div className="flex items-center justify-between">
                    {/* Left Side */}
                    <div className="flex flex-col">
                      <h3 className="text-base font-semibold text-[#CACED9]">Dr. Ramesh Aggarwal,</h3>
                      <span className="text-xs text-[#CACED9]">Head of child Department , AIIMS Delhi</span>
                    </div>

                    {/* Right Side (Stethoscope Icon) */}
                    <div>
                      <img src={logo1} alt="Stethoscope Icon" className="h-10 w-10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-auto w-full flex-col space-y-2 px-4">
            <div className="flex w-full flex-col space-y-4">
              <div className="mr-2 flex flex-row items-center justify-end space-x-2">
                <span
                  className="h-[4px] w-[50px] rounded-full"
                  style={{
                    background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                  }}
                ></span>
                <span className="text-sm font-medium text-[#F1C6FE]">From Parents</span>
                <span
                  className="h-[4px] w-[50px] rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                  }}
                ></span>
              </div>
              <h3 className="text-right font-raleway text-xl">Real Families, Real Stories </h3>
              <p className="text-center text-xs">
                Every milestone matters in a child's development. Here's what families like yours have to say about
                their experience with us.
              </p>
              <div className="w-full">
                <img
                  src="https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/image+145.png"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="scrollbar-hide flex space-x-4 overflow-x-auto py-10">
                <div
                  className="flex min-w-full flex-col rounded-3xl p-4 py-10 text-white"
                  style={{
                    background: 'radial-gradient(circle, #1A0C25 20%, #43284C 100%)',
                  }}
                >
                  <p className="text-xs">
                    "As a pediatrician with over 40 years of experience, I believe early detection of autism and
                    developmental disorders is critical. This test is a groundbreaking tool that allows us to detect
                    early signs with high accuracy. It empowers parents to take action sooner, improving outcomes for
                    children."
                  </p>
                  <div className="my-2 mt-10 h-[.5px] w-full bg-pink-400"></div>
                  <div className="flex flex-col">
                    <h3 className="text-sm font-semibold text-[#CACED9]">Neha Sharma,</h3>
                    <span className="text-xs text-[#CACED9]">Mother of 4 year old</span>
                  </div>
                </div>
                <div
                  className="flex min-w-full flex-col rounded-3xl p-4 py-10 text-white"
                  style={{
                    background: 'radial-gradient(circle, #1A0C25 20%, #43284C 100%)',
                  }}
                >
                  <p className="text-xs">
                    "The early autism detection test is a significant step forward in pediatric care. It offers a
                    non-invasive, cost-effective, and efficient way to screen children for neurodevelopmental disorders.
                    I wholeheartedly support this initiative, as it provides essential data for timely intervention."
                  </p>
                  <div className="my-2 mt-10 h-[.5px] w-full bg-pink-400"></div>
                  <div className="flex flex-col">
                    <h3 className="text-sm font-semibold text-[#CACED9]">Priya patil, </h3>
                    <span className="text-xs text-[#CACED9]">Mother of 3 yr old</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-16 w-full"
          style={{
            background: 'linear-gradient(to top, #09121A 0%, #09121A00 100%)',
          }}
        ></div>
      </div>
    </>
  );
};

export default FromDoctor;
