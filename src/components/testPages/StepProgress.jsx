import React from 'react';

const StepProgress = () => {
  const steps = [
    { id: 1, label: "Fill up the details" },
    { id: 2, label: "Calibration" },
    { id: 3, label: "Webcam & Microphone test" },
  ];

  return (
    <div className="flex justify-between h-[20%] bg-[#1A0C25] mb-[0px] mt-[30px]">
      {steps.map((step, index) => (
        <div key={step.id}  className={`flex items-center relative ${
            index === steps.length - 1 ? 'mr-[100px]' : 'ml-[100px]'
          }`}>

<span className={`absolute -top-6 text-[#B7407D] text-6xl font-manrope font-bold ${index==1?' -left-2':'left-2'}`}>
            {step.id}
          </span>
          {/* Step Number and Square */}
          <div className="flex flex-col items-center space-y-2">
           
            <div className="w-16 h-16 bg-[#D9D9D9]"></div>
            <span className="text-[#FFFFFF] font-manrope text-center">{step.label}</span>
          </div>

          {/* Arrow Icon */}
          {index < steps.length - 1 && (
            <div className="flex items-center ">
              <span className="text-gray-400 text-xl ml-[200px] ">...</span>
              <span className="text-gray-400 mt-3 text-xl">&gt;</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepProgress;
