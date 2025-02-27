import React from 'react';
import img1 from "../../assets/report/img4.png";
import img2 from "../../assets/report/img5.png";
import img3 from "../../assets/report/img6.png";

const ProgressBar = ({ label, value, color, bgColor }) => (
  <div className="w-full h-6 bg-opacity-50 rounded-full mb-2" style={{ backgroundColor: bgColor }}>
    <div
      className="h-full rounded-full flex justify-between items-center p-1"
      style={{ width: `${value}%`, backgroundColor: color }}
    >
      <span className="text-xs text-white ml-3">{label}</span>
      <span className="w-6 h-6 bg-white rounded-full flex justify-center items-center text-[10px] text-black">
        {value}%
      </span>
    </div>
  </div>
);

const Page2 = () => {
  const progressData = [
    { label: 'Name Call Response', value: 82, color: '#EC9D14', bgColor: '#F3CB2C6B' },
    { label: 'Developmental Skills Summary', value: 76, color: '#EC9D14', bgColor: '#F3CB2C6B' },
  ];

  const progressData2 = [
    { label: 'Eye Area Expressivity', value: 82, color: '#6B88FB', bgColor: '#A8ADB3' },
    { label: 'Lower Face Expressivity', value: 76, color: '#6B88FB', bgColor: '#A8ADB3' },
  ];

  const progressData3 = [
    { label: 'Emotional Range', value: 80, color: '#19C18C', bgColor: '#19C18C5E' },
    { label: 'Emotion Mirroring Score', value: 78, color: '#19C18C', bgColor: '#19C18C5E' },
  ];

  return (
    <div className="pdf-image flex flex-col font-manrope items-center p-4 sm:p-8 bg-white min-h-screen">
      <div className="pdf-page bg-white p-6 sm:p-8 rounded-md w-[210mm] sm:w-[210mm] m-auto min-h-[297mm] relative">
        {/* Header */}
        <div className="absolute p-4 sm:p-8 top-0 left-0 w-full">
          <h1 className='text-left text-sm'>Detailed Featured Report</h1>
          <div className="w-full border-t-2 mt-2 border-[#9C00AD]"></div>
        </div>

        <h3 className='text-center font-playfair mt-16 font-semibold text-lg sm:text-xl'>Developmental Skills Summary</h3>

        {/* Sections */}
        {[{ img: img2, text: "Audio and Speech Response", score: "77.6%", data: progressData, color: "#EC9D14" },
          { img: img3, text: "Facial Muscular Response", score: "79%", data: progressData2, color: "#6B88FB" },
          { img: img3, text: "Emotional and Mirroring Response", score: "79%", data: progressData3, color: "#19C18C" }]
          .map(({ img, text, score, data, color }, index) => (
            <div key={index} className="w-full flex flex-wrap max-sm:flex-col justify-center items-center gap-5 mt-8">
              <div className="w-full sm:w-[40%] flex flex-col justify-center items-center">
                <img src={img} alt={text} className="w-24 sm:w-32" />
                <div className="w-[10rem] max-sm:w-40 p-4 h-auto bg-opacity-80 flex flex-col items-center justify-center rounded-3xl" style={{ backgroundColor: color }}>
                  <h4 className='text-center text-white text-xs sm:text-sm'>{text}</h4>
                  <h4 className="text-white font-bold text-sm sm:text-base">{score}</h4>
                </div>
              </div>
              <div className="w-full p-4 h-6 sm:w-[50%] flex flex-col rounded-full mb-2" >
                {data.map((item, idx) => (
                  <ProgressBar key={idx} {...item} />
                ))}
              </div>
            </div>
          ))}

        {/* Footer */}
        <div className="absolute p-4 sm:p-8 bottom-0 left-0 w-full">
          <div className="w-full flex justify-between items-center text-xs font-manrope border-t-2 border-[#800080] pt-2">
            <span className='text-[10px]'>Sample</span>
            <div className="text-center text-[10px]">
              <span>Received Date: 2023-07-28 17:22:09</span>
              <br />
              <span>ID: Report Generation Date:</span>
            </div>
            <span className='text-[10px]'>Page 07</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;