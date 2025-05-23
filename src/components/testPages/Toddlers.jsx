import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CalibrationPage from './CalibrationPage';

const Toddlers = () => {
  const [isCalVisible, setIsCalVisible] = useState(false);

  const handleNextClick = async () => {
    setIsCalVisible(true);
  };

  const [currentStep, setCurrentStep] = useState(3); // Example: Starting with step 3 highlighted

  return (
    <>
      {!isCalVisible ? (
        <div className="h-full w-full bg-[#1A0C25]">
          <div className="h-[50vw] w-full bg-[#1A0C25] px-[10vw]">
            <div className="flex h-full w-full items-center justify-center gap-[5vw]">
              <div className="left relative -top-[2vw] flex h-full w-[30%] flex-col items-center justify-center">
                <div className="absolute">
                  <div className="relative ml-[40%] inline-block items-center justify-center">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-60 blur-lg"></div>
                    <Link to="/" className="relative z-10 text-3xl font-semibold tracking-wide text-white">
                      Ai.gnosis
                    </Link>
                  </div>
                  <div className="px-[1vw]">
                    <h1 className="mt-[4vw] font-montserrat text-white">Patient History</h1>
                    <p className="mt-[2vw] font-montserrat text-white">
                      Our Patient History form gathers essential information to better understand each individual's
                      unique background and health journey.
                    </p>
                    <p className="mt-[2vw] font-montserrat text-white">
                      This information is critical for our AI-powered tools at Ai.gnosis to generate accurate insights
                      and recommend personalized next steps for supporting your child. Rest assured, all data is handled
                      with the utmost confidentiality and care, enabling us to create a comprehensive support plan
                      tailored to your needs
                    </p>
                  </div>
                </div>
              </div>
              <div className="right max-m-[60vh] w-[60%] flex-col rounded-3xl bg-[#564A5957] pb-[3vw]">
                <div className="flex max-h-[2vw] w-full items-center justify-center text-white">
                  <h1 className="mt-[5vw] font-montserrat text-xl font-medium">
                    Modified checklist for toddlers (M - Chat)
                  </h1>
                </div>
                <div className="mt-[5vw] w-full px-[5vw]">
                  <table className="w-full border-separate border-spacing-y-2 text-left font-montserrat text-white">
                    <thead>
                      <tr>
                        <th className="rounded-3xl border border-[#796B80] p-2 px-[10px]">Questions</th>
                        <th className="rounded-3xl border border-[#796B80] p-2 px-[10px] text-center">Yes</th>
                        <th className="rounded-3xl border border-[#796B80] p-2 px-[10px] text-center">No</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        'Experienced and Licensed Specialists',
                        'Weekday and Evening Appointments Available',
                        'Resources Provided After Sessions',
                        'Regular Progress Updates',
                        'Group Art & Story Sessions for Skill Building',
                        'Direct Messaging with Specialists',
                        'Convenient Scheduling Through Our Portal',
                        'Access to Tips and Activities on Our App',
                        'No Travel or Waiting Time',
                        'EMI Payment Options (for Indian Residents Only)*',
                      ].map((question, index) => (
                        <tr key={index}>
                          <td className="border-b border-[#796B80] p-2">{question}</td>
                          <td className="border-b border-l border-[#796B80] p-2 text-center">
                            <input type="radio" name={`question-${index}`} value="yes" className="cursor-pointer" />
                          </td>
                          <td className="border-b border-l border-[#796B80] p-2 text-center">
                            <input type="radio" name={`question-${index}`} value="no" className="cursor-pointer" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-[2vw] flex h-[5vw] w-full items-center justify-center font-montserrat text-white">
                  <button
                    onClick={handleNextClick}
                    className="flex h-[3vw] w-[10vw] items-center justify-center gap-[1vw] rounded-full border border-[#9C00AD] px-[1vw] py-3"
                  >
                    continue <span className="h-[2vw] w-[2vw] rounded-full bg-[#9C00AD]"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <CalibrationPage />
      )}
    </>
  );
};

export default Toddlers;
