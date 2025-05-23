import React from 'react';
import img1 from '../../assets/report/img1.png';
import img2 from '../../assets/report/img2.png';
import img3 from '../../assets/report/img3.png';
import './pdf.css';

const Page1 = () => {
  const progressData = [
    { label: 'Social Preference', value: 85 },
    { label: 'Eye Contact', value: 75 },
    { label: 'Joint Attention', value: 80 },
    { label: 'Gaze Hold', value: 70 },
    { label: 'Gaze Speed', value: 65 },
    { label: 'Attention Shift', value: 60 },
    { label: 'Gaze Dispersion', value: 78 },
    { label: 'Focal Points', value: 82 },
    { label: 'Screen Focus', value: 72 },
    { label: 'Object Tracking', value: 80 },
  ];

  const progressData2 = [{ label: 'Head Control', value: 78 }];

  return (
    <div className="pdf-image flex min-h-screen flex-col flex-wrap items-center bg-white p-8 font-raleway">
      <div className="pdf-page h-auto w-[210mm] rounded-md bg-white p-4 shadow-md sm:max-w-[210mm] sm:p-8">
        {/* Header */}
        <div>
          <h1 className="text-left text-sm">Detailed Featured Report</h1>
          <div className="mt-2 w-full border-t-2 border-[#9C00AD]"></div>
        </div>

        {/* Patient Info */}
        <div className="mt-4 flex w-full flex-wrap items-center justify-start max-sm:justify-center">
          <div className="w-1/2 max-sm:w-1/4">
            <img src={img1} alt="Patient Image" className="w-full" />
          </div>
          <div className="mt-3 text-left font-playfair text-xs max-sm:text-center sm:ml-5 sm:mt-0">
            <h3>Patient Details:</h3>
            <h3>Name: Jinaya Sagar Kothari</h3>
            <h3>Age: 3 years</h3>
            <h3>Date of Birth: 20/08/2021</h3>
            <h3>Gender: Female</h3>
          </div>
        </div>

        {/* Section Title */}
        <h3 className="mt-4 text-center font-playfair text-lg font-semibold sm:text-xl">
          Developmental Skills Summary
        </h3>

        {/* First Skill Section */}
        <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-5 px-3 font-playfair font-semibold sm:px-5">
          <div className="flex w-full flex-col items-center sm:w-[45%]">
            <img src={img2} alt="Visual Interest" className="w-[8rem] sm:w-[10vw]" />
            <div className="flex h-auto w-[10rem] flex-col items-center justify-center rounded-3xl bg-[#BD35E5] p-4 sm:w-[12vw]">
              <h4 className="text-center text-sm">Visual Interest Response</h4>
              <h4 className="text-base font-bold">74%</h4>
            </div>
          </div>
          <div className="flex w-full flex-col sm:w-[50%]">
            {progressData.map((item, index) => (
              <div key={index} className="mb-2 h-10 w-full rounded-full bg-[#BD35E54D]">
                <div
                  className="flex h-full items-center justify-between rounded-full bg-[#BD35E5] p-1"
                  style={{ width: `${item.value}%` }}
                >
                  <h4 className="ml-3 text-xs text-white">{item.label}</h4>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <h5 className="font-raleway text-[10px] text-[#BD35E5]">{item.value}%</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Skill Section */}
        <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-5 px-3 font-playfair font-semibold sm:px-5">
          <div className="flex w-full flex-col items-center sm:w-[45%]">
            <img src={img3} alt="Movement and Posture" className="w-[8rem] sm:w-[10vw]" />
            <div className="flex h-auto w-[10rem] flex-col items-center justify-center rounded-3xl bg-[#EC378E] p-4 sm:w-[12vw]">
              <h4 className="text-center text-sm">Movement and Posture</h4>
              <h4 className="text-base font-bold">78%</h4>
            </div>
          </div>
          <div className="flex w-full flex-col sm:w-[50%]">
            {progressData2.map((item, index) => (
              <div key={index} className="mb-2 h-10 w-full rounded-full bg-[#B985A070]">
                <div
                  className="flex h-full items-center justify-between rounded-full bg-[#EC378E] p-1"
                  style={{ width: `${item.value}%` }}
                >
                  <h4 className="ml-3 text-xs text-white">{item.label}</h4>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                    <h5 className="font-raleway text-[10px] text-[#EC378E]">{item.value}%</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 flex w-full items-center justify-between border-t-2 border-[#800080] pt-2 font-manrope text-xs">
          <span className="text-[10px]">Sample</span>
          <div className="text-center text-[10px]">
            <span>Received Date: 2023-07-28 17:22:09</span>
            <br />
            <span>ID: Report Generation Date:</span>
          </div>
          <span className="text-[10px]">Page 06</span>
        </div>
      </div>
    </div>
  );
};

export default Page1;
