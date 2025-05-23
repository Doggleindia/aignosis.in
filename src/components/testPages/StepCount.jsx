import React from 'react';

const StepCount = ({ currentStep }) => {
  const steps = [
    { id: 1, label: 'Assessment Type Selection' },
    { id: 2, label: 'Patient History' },
    { id: 3, label: 'Assessments' },
    { id: 4, label: 'Calibration' },
    { id: 5, label: 'Results' },
  ];

  return (
    <div className="mb-[0px] flex h-[20%] justify-between bg-[#1A0C25] py-[4vh]">
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`relative flex items-center ${index === steps.length - 1 ? 'mr-[100px]' : 'ml-[100px]'}`}
        >
          <span
            className={`absolute -top-6 font-manrope text-6xl font-bold ${index === 1 ? '-left-2' : 'left-2'} ${
              currentStep === step.id ? 'text-[#e286b5]' : 'text-[#B7407D]'
            }`}
          >
            {step.id}
          </span>

          {/* Step Number and Square with Hover Effect */}
          <div className="flex flex-col items-center space-y-2">
            <div
              className={`h-16 w-16 ${currentStep === step.id ? 'bg-[#B7407D]' : 'bg-[#D9D9D9]'} flex cursor-pointer items-center justify-center rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#B7407D]`}
            >
              <span className="font-bold text-white">{step.id}</span>
            </div>
            <span className="text-center font-manrope text-[#FFFFFF]">{step.label}</span>
          </div>

          {/* Arrow Icon */}
          {index < steps.length - 1 && (
            <div className="flex items-center">
              <span className="ml-[200px] text-xl text-gray-400">...</span>
              <span className="mt-3 text-xl text-gray-400">&gt;</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepCount;
