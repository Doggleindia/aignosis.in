import React from 'react';
import img1 from '../../assets/report/img4.png';
import img2 from '../../assets/report/img5.png';
import img3 from '../../assets/report/img6.png';

const ProgressBar = ({ label, value, color, bgColor }) => (
  <div className="mb-2 h-10 w-full rounded-full bg-opacity-50" style={{ backgroundColor: bgColor }}>
    <div
      className="flex h-full items-center justify-between rounded-full p-1"
      style={{ width: `${value}%`, backgroundColor: color }}
    >
      <span className="ml-3 text-xs text-white">{label}</span>
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[10px] text-black">
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
    <div className="pdf-image flex min-h-screen flex-col items-center bg-white p-4 font-manrope sm:p-8">
      <div className="pdf-page relative m-auto min-h-[297mm] w-[210mm] rounded-md bg-white p-6 sm:w-[210mm] sm:p-8">
        {/* Header */}
        <div className="absolute left-0 top-0 w-full p-4 sm:p-8">
          <h1 className="text-left text-sm">Detailed Featured Report</h1>
          <div className="mt-2 w-full border-t-2 border-[#9C00AD]"></div>
        </div>

        <h3 className="mt-16 text-center font-playfair text-lg font-semibold sm:text-xl">
          Developmental Skills Summary
        </h3>

        {/* Sections */}
        {[
          { img: img2, text: 'Audio and Speech Response', score: '77.6%', data: progressData, color: '#EC9D14' },
          { img: img3, text: 'Facial Muscular Response', score: '79%', data: progressData2, color: '#6B88FB' },
          { img: img3, text: 'Emotional and Mirroring Response', score: '79%', data: progressData3, color: '#19C18C' },
        ].map(({ img, text, score, data, color }, index) => (
          <div key={index} className="mt-8 flex w-full flex-wrap items-center justify-center gap-5 max-sm:flex-col">
            <div className="flex w-full flex-col items-center justify-center sm:w-[40%]">
              <img src={img} alt={text} className="w-24 sm:w-32" />
              <div
                className="flex h-auto w-[10rem] flex-col items-center justify-center rounded-3xl bg-opacity-80 p-4 max-sm:w-40"
                style={{ backgroundColor: color }}
              >
                <h4 className="text-center text-xs text-white sm:text-sm">{text}</h4>
                <h4 className="text-sm font-bold text-white sm:text-base">{score}</h4>
              </div>
            </div>
            <div className="mb-2 flex h-10 w-full flex-col rounded-full p-4 sm:w-[50%]">
              {data.map((item, idx) => (
                <ProgressBar key={idx} {...item} />
              ))}
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-8">
          <div className="flex w-full items-center justify-between border-t-2 border-[#800080] pt-2 font-manrope text-xs">
            <span className="text-[10px]">Sample</span>
            <div className="text-center text-[10px]">
              <span>Received Date: 2023-07-28 17:22:09</span>
              <br />
              <span>ID: Report Generation Date:</span>
            </div>
            <span className="text-[10px]">Page 07</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
