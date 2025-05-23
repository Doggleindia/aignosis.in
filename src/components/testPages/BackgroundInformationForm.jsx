import React, { useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
// import { Link } from 'react-router-dom';
// import StepProgress from './StepProgresss';
import Toddlers from './Toddlers';

function BackgroundInformationForm() {
  const [isTodolersVisible, setisTodolersVisible] = useState(false);

  const handleNextClick = async () => {
    setisTodolersVisible(true);
  };

  return (
    <>
      {!isTodolersVisible ? (
        <div className="flex h-auto flex-col justify-center bg-[#1A0C25]">
          <div className="flex h-auto justify-center">
            {/* Left side content */}
            <div className="mt-[200px] flex flex-col items-start space-y-[80px] px-8">
              {/* Logo with Gradient Background */}
              <div className="relative ml-[60px] inline-block">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-60 blur-lg"></div>
                <span className="relative z-10 text-4xl font-semibold tracking-wide text-white">Ai.gnosis</span>
              </div>

              {/* Assessment Text */}
              <div className="mr-[100px] flex max-w-sm flex-col space-y-4">
                <p className="font-manrope text-2xl text-white">Patient History</p>
                <p className="py-2 text-left font-raleway text-sm text-[#FFFFFF]">
                  Our Patient History form gathers essential information to better understand each individual's unique
                  background and health journey. <br /> <br />
                  This information is critical for our AI-powered tools at Ai.gnosis to generate accurate insights and
                  recommend personalized next steps for supporting your child. Rest assured, all data is handled with
                  the utmost confidentiality and care, enabling us to create a comprehensive support plan tailored to
                  your needs
                </p>
              </div>
            </div>

            <div className="mt-5 w-full max-w-3xl rounded-lg bg-[#564A5957] p-8 text-white shadow-lg">
              <h2 className="mb-4 text-center font-manrope text-3xl font-semibold">
                Provide Additional Background Information
              </h2>
              <p className="mb-6 text-center font-raleway text-xl">
                Help us understand the patient’s history better. The information you provide here will support a more
                thorough assessment.
              </p>

              <div className="mb-4">
                <label className="mb-2 block">Choose language</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-[#B7407D4D] bg-[#2521270F] p-2 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  'School & class of the child',
                  'Mother name',
                  'Father name',
                  "Mother's occupation",
                  "Father's occupation",
                ].map((placeholder, index) => (
                  <input
                    key={index}
                    type="text"
                    placeholder={placeholder}
                    className="w-full rounded-md border border-[#B7407D4D] bg-[#2521270F] p-2 focus:outline-none"
                  />
                ))}
              </div>

              <div className="mt-6">
                <p className="font-raleway font-semibold text-[#F6E8FB]">1. Cried at time of birth?</p>
                {['Yes', 'May be', 'No'].map((option, index) => (
                  <label key={index} className="mr-4 inline-flex items-center">
                    <input
                      type="radio"
                      name="criedAtBirth"
                      className="form-radio border border-[#9C00AD] font-raleway text-[#F6E8FB]"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </div>

              <div className="mt-4">
                <p className="font-raleway font-semibold text-[#F6E8FB]">2. NICU care?</p>
                {['Yes', 'May be', 'No'].map((option, index) => (
                  <label key={index} className="mr-4 inline-flex items-center">
                    <input type="radio" name="nicuCare" className="form-radio text-purple-600" />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </div>

              <div className="mt-4">
                <p className="font-raleway font-semibold text-[#F6E8FB]">3. Hospitalized anytime in the past?</p>
                {['Yes', 'May be', 'No'].map((option, index) => (
                  <label key={index} className="mr-4 inline-flex items-center">
                    <input type="radio" name="hospitalizedPast" className="form-radio text-purple-600" />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </div>

              <div className="mt-4">
                <p className="font-raleway font-semibold text-[#F6E8FB]">4. Patient complaints</p>
                {[
                  'Speech delay',
                  'Delayed development',
                  'Seizures',
                  'Neurological complaints',
                  'School performance',
                  'Genetic disorder',
                  'Anxiety disorder',
                  'Physical disorder',
                  'other',
                ].map((complaint, index) => (
                  <label key={index} className="mt-1 block">
                    <input type="checkbox" className="form-checkbox mr-2 text-purple-600" />
                    <span>{complaint}</span>
                  </label>
                ))}
                <input
                  type="text"
                  placeholder="If any other specify"
                  className="mt-2 w-full rounded-md border border-[#B7407D4D] bg-[#2521270F] p-2 focus:outline-none"
                />
              </div>

              <div className="mt-4">
                <p className="font-raleway font-semibold text-[#F6E8FB]">5. Birth order</p>
                {[
                  'Birth order only child',
                  'Birth order first born',
                  'Birth order second born',
                  'Birth order third born',
                  ' Birth order Other',
                ].map((birthOrder, index) => (
                  <label key={index} className="mt-1 block">
                    <input type="radio" name="birthOrder" className="form-radio mr-2 text-purple-600" />
                    <span>{birthOrder}</span>
                  </label>
                ))}
              </div>

              {/* 6. Birth term */}
              <div className="mt-4">
                <p className="font-raleway font-semibold text-[#F6E8FB]">6. Birth term</p>
                {['Full term', 'Preterm'].map((term, index) => (
                  <label key={index} className="mr-4 inline-flex items-center">
                    <input type="radio" name="birthTerm" className="form-radio text-purple-600" />
                    <span className="ml-2">{term}</span>
                  </label>
                ))}
              </div>

              {/* 7. Same gotra */}
              <div className="mt-4">
                <p className="font-raleway font-semibold text-[#F6E8FB]">7. Same gotra</p>
                {['Yes', 'No'].map((option, index) => (
                  <label key={index} className="mr-4 inline-flex items-center">
                    <input type="radio" name="sameGotra" className="form-radio text-purple-600" />
                    <span className="ml-2">{option}</span>
                  </label>
                ))}
              </div>

              {/* 8. Relation */}
              <div className="mt-4">
                <label className="mb-2 block font-raleway font-semibold text-[#F6E8FB]">8. Relation</label>
                <input
                  type="text"
                  placeholder="Specify relationship"
                  className="w-full rounded-md border border-[#B7407D4D] bg-[#2521270F] p-2 focus:outline-none"
                />
              </div>

              {/* 9. Family type */}
              <div className="mt-4">
                <label className="mb-2 block font-raleway font-semibold text-[#F6E8FB]">9. Family type</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-[#B7407D4D] bg-[#2521270F] p-2 focus:outline-none"
                />
              </div>

              {/* 10. Language spoken at home */}
              <div className="mt-4">
                <p className="font-raleway font-semibold text-[#F6E8FB]">10. Which language is spoken at home</p>
                {['English', 'Hindi', 'Other (specify)'].map((lang, index) => (
                  <label key={index} className="mt-1 block">
                    <input type="radio" name="homeLanguage" className="form-radio mr-2 text-purple-600" />
                    <span>{lang}</span>
                  </label>
                ))}
                <input
                  type="text"
                  placeholder="Specify if other"
                  className="mt-2 w-full rounded-md border border-[#B7407D4D] bg-[#2521270F] p-2 focus:outline-none"
                />
              </div>

              {/* 11. Family medical history */}
              <div className="mt-4">
                <p className="font-raleway font-semibold text-[#F6E8FB]">11. Family medical history</p>
                {[
                  'History of convulsions',
                  'Neuro muscular disorder',
                  'Mental illness',
                  'Loss of understanding',
                  "Mother's antenatal weight / BMI",
                ].map((history, index) => (
                  <label key={index} className="mt-1 block">
                    <input type="checkbox" className="form-checkbox mr-2 text-purple-600" />
                    <span>{history}</span>
                  </label>
                ))}
                <label className="mt-1 block">
                  <input type="checkbox" className="form-checkbox mr-2 text-purple-600" />
                  <span>If other (Specify condition & family member)</span>
                </label>
                <input
                  type="text"
                  placeholder="Specify if any other medical history"
                  className="mt-2 w-full rounded-md border border-[#B7407D4D] bg-[#2521270F] p-2 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Specify to which family member"
                  className="mt-2 w-full rounded-md border border-[#B7407D4D] bg-[#2521270F] p-2 focus:outline-none"
                />
              </div>

              {/* Submit button */}
              <div className="mt-6 flex items-center justify-center">
                <button
                  onClick={handleNextClick}
                  className="group mt-[5rem] flex h-[3.5rem] w-[20%] cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-[#B740A1] bg-transparent text-[#0D0C0A] transition-colors duration-300 hover:bg-[#B7407D] sm:w-[12rem]"
                >
                  <span className="flex-grow text-center text-sm text-white sm:text-base">Next</span>
                  <div className="ml-2 mr-1 flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-[#B740A1] text-xl text-white group-hover:bg-white group-hover:text-black">
                    <GoArrowUpRight />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Toddlers />
      )}
    </>
  );
}

export default BackgroundInformationForm;
