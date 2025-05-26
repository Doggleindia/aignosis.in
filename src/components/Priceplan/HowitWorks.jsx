import React from 'react';
import img1 from '../../assets/image.png';
import img2 from '../../assets/Featured.png';
import forward from '../../assets/forward.png';

const HowitWorks = () => {
  const Divider = ({ title }) => (
    <div className="mb-3 mt-10 flex flex-row items-center justify-center space-x-4">
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
        }}
      ></span>
      <h4 className="text-[18px] font-medium text-[#F1C6FE] max-sm:text-sm">{title}</h4>
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
        }}
      ></span>
    </div>
  );

  return (
    <div>
      <div className="hidden pt-8 md:block">
        {/* Divider Section */}
        <Divider title="Advantages" />
        <h5 className="2xl:text-5xl w-full text-center font-montserrat text-2xl font-semibold tracking-tight text-[#F6E8FB] max-sm:text-center md:text-3xl">
          How it works
        </h5>
        <div className="relative h-full w-full p-5 px-[5vw] font-montserrat">
          <div className="flex h-[20vw] w-full items-center justify-start">
            <div className="h-auto w-[13vw] p-2">
              <span className="text-[20px]">Step 1</span>
              <p className="text-[12px] text-[#CACED9]">Book Your Test Schedule the screening online or at a center.</p>
            </div>
            <div className="relative h-[15vw] w-[16vw] rounded-r-2xl bg-[#D9D9D947]">
              <img
                src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/aboutus.png"
                className="relative h-full w-full rounded-r-2xl object-cover"
                alt=""
                srcSet=""
                loading="lazy"
              />
              <div className="absolute -left-16 -top-4">
                <img src={forward} className="scale-[.6] object-contain" alt="" srcSet="" loading="lazy" />
              </div>
            </div>
            <div className="ml-5 h-auto w-[13vw] p-2">
              <span className="text-[20px]"> Step 2</span>
              <p className="text-[12px] text-[#CACED9]">
                Set Up the Environment Create a calm, distraction-free space.
              </p>
            </div>
            <div className="relative h-[15vw] w-[16vw] rounded-r-2xl bg-[#D9D9D947]">
              <img
                src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/2.jpg"
                className="relative h-full w-full rounded-r-2xl object-cover"
                alt=""
                srcSet=""
                loading="lazy"
              />
              <div className="absolute -left-16 -top-4">
                <img src={forward} className="scale-[.6] object-contain" alt="" srcSet="" />
              </div>
            </div>
          </div>
          <div className="flex h-[15vw] w-full items-center justify-start">
            <div className="relative h-[15vw] w-[16vw] rounded-r-2xl bg-[#D9D9D947]">
              <img
                src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/5.jpg"
                loading="lazy"
                className="relative h-full w-full rounded-r-2xl object-cover"
                alt=""
                srcSet=""
              />
              <div className="absolute -bottom-4 -right-16 rotate-180">
                <img src={forward} className="scale-[.6] object-contain" alt="" srcSet="" loading="lazy" />
              </div>
            </div>
            <div className="ml-5 h-auto w-[13vw] p-2">
              <span className="text-[20px]">Step 5</span>
              <p className="text-[12px] text-[#CACED9]">
                Receive Insights Get a detailed report with recommendations and free consultation.
              </p>
            </div>
            <div className="relative h-[15vw] w-[16vw] rounded-r-2xl bg-[#D9D9D947]">
              <img
                src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/4.jpg"
                className="relative h-full w-full rounded-r-2xl object-cover"
                alt=""
                srcSet=""
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-16 rotate-180">
                <img src={forward} className="scale-[.6] object-contain" alt="" srcSet="" loading="lazy" />
              </div>
            </div>
            <div className="ml-5 h-auto w-[13vw] p-2">
              <span className="text-[20px]">Step 4 </span>
              <p className="text-[12px] text-[#CACED9]">AI Analysis Let our AI analyze your child’s responses.</p>
            </div>
          </div>
          <div className="absolute right-12 top-[10vw] flex h-[20vw] w-full items-center justify-end">
            <div className="h-auto w-[13vw] p-2">
              <span className="text-[20px]"> Step 3</span>
              <p className="text-[12px] text-[#CACED9]">Run the Screening Follow simple steps to start the test.</p>
            </div>
            <div className="relative h-[20vw] w-[16vw] rounded-r-2xl bg-[#D9D9D947]">
              <img
                src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/3.jpg"
                loading="lazy"
                className="relative h-full w-full rounded-r-2xl object-cover"
                alt=""
                srcSet=""
              />
              <div className="absolute -left-16 -top-4">
                <img src={forward} loading="lazy" className="scale-[.6] object-contain" alt="" srcSet="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 md:hidden">
        {/* Divider Section */}
        <Divider title="Advantages" />
        <h5 className="text-center font-montserrat text-xl font-semibold tracking-tight text-[#F6E8FB]">
          How it works
        </h5>
        <div className="relative h-full w-full p-5 font-montserrat">
          <div className="flex w-full flex-col items-center space-y-6">
            {/* Step 1 */}
            <div className="flex w-full flex-col items-center space-y-2">
              <div className="w-full text-center">
                <span className="text-[16px]">Step 1</span>
                <p className="text-[12px] text-[#CACED9]">
                  Book Your Test Schedule the screening online or at a center.
                </p>
              </div>
              <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-[#D9D9D947]">
                <img
                  className="absolute inset-0 z-0"
                  src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/aboutus.png"
                  alt=""
                  srcSet=""
                />
                <div className="absolute -left-4 -top-4 z-10">
                  <img src={forward} className="scale-[.6] object-contain" alt="" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex w-full flex-col items-center space-y-2">
              <div className="w-full text-center">
                <span className="text-[16px]">Step 2</span>
                <p className="text-[12px] text-[#CACED9]">
                  Set Up the Environment Create a calm, distraction-free space.
                </p>
              </div>
              <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-[#D9D9D947]">
                <img
                  className="absolute inset-0 z-0"
                  src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/2.jpg"
                  alt=""
                  srcSet=""
                />
                <div className="absolute -bottom-4 -right-4 rotate-180">
                  <img src={forward} className="scale-[.6] object-contain" alt="" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex w-full flex-col items-center space-y-2">
              <div className="w-full text-center">
                <span className="text-[16px]">Step 3</span>
                <p className="text-[12px] text-[#CACED9]">Run the Screening Follow simple steps to start the test.</p>
              </div>
              <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-[#D9D9D947]">
                <img
                  className="absolute inset-0 z-0"
                  src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/3.jpg"
                  alt=""
                  srcSet=""
                />

                <div className="absolute -left-4 -top-4">
                  <img src={forward} className="scale-[.6] object-contain" alt="" />
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex w-full flex-col items-center space-y-2">
              <div className="w-full text-center">
                <span className="text-[16px]">Step 4</span>
                <p className="text-[12px] text-[#CACED9]">AI Analysis Let our AI analyze your child’s responses.</p>
              </div>
              <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-[#D9D9D947]">
                <img
                  className="absolute inset-0 z-0"
                  src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/4.jpg"
                  alt=""
                  srcSet=""
                />

                <div className="absolute -bottom-4 -right-4 rotate-180">
                  <img src={forward} className="scale-[.6] object-contain" alt="" />
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex w-full flex-col items-center space-y-2">
              <div className="w-full text-center">
                <span className="text-[16px]">Step 5</span>
                <p className="text-[12px] text-[#CACED9]">
                  Receive Insights Get a detailed report with recommendations and free consultation.
                </p>
              </div>
              <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-[#D9D9D947]">
                <img
                  className="absolute inset-0 z-0"
                  src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/5.jpg"
                  alt=""
                  srcSet=""
                />

                <div className="absolute -left-4 -top-4">
                  <img src={forward} className="scale-[.6] object-contain" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
