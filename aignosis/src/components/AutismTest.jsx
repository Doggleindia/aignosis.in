import React, { useState } from "react";
import { Link } from "react-router-dom";

const AutismTest = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const stepsContent = [
    {
      title: "The Ai.gnosis Autism Test:",
      subtitle: "A quick, accurate, and non-invasive way to screen your child.",
      description:
        "This enables early detection and helps parents take proactive steps for their child's development.",
      bgColor: "rgba(26, 12, 37, 1)",
      header: "Recognize the Signs",
    },
    {
      title: "Quick Screening Process",
      subtitle: "Step 1",
      description:
        "The Ai.gnosis Autism Test is designed to be swift and straightforward, allowing parents to complete the screening in just a few minutes. This quick process ensures minimal disruption while providing essential insights into your child's developmental progress.",
      bgColor: "#5E3C69",
      header: "Step 1",
    },
    {
      title: "Accurate Results with AI",
      subtitle: "Step 2",
      description:
        "Powered by advanced AI, the test delivers reliable results, giving parents confidence in the screening outcomes. Our technology analyzes key developmental indicators to provide an accurate understanding of potential autism traits.",
      bgColor: "#952981",
      header: "Step 2",
    },
    {
      title: "Non-Invasive and Child-Friendly",
      subtitle: "Step 3",
      description:
        "The test is completely non-invasive, making it comfortable for children. With a simple approach, we ensure a stress-free experience that prioritizes your child's well-being throughout the process.",
      bgColor: "#5E3C69",
      header: "Step 3",
    },
    {
      title: "Empowering Early Intervention",
      subtitle: "Step 4",
      description:
        "Early detection is crucial in supporting your child’s growth. By identifying developmental signs early, the Aignosis Autism Test empowers parents to take proactive steps and seek guidance, fostering a supportive path for their child's future.",
      bgColor: "#1A0C25",
      header: "Step 4",
    },
  ];

  const handleCircleClick = (step) => {
    setCurrentStep(step);
  };

  const currentContent = stepsContent[currentStep - 1];

  return (
    <div
      className="flex justify-between min-h-screen p-8"
      style={{ background: currentContent.bgColor }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left Side Content */}
        <div className="flex flex-col justify-center text-white space-y-4">
          <div className="flex items-center space-x-2 ">
            <span
              className="h-[10px] w-[118px] rounded-full"
              style={{
                background:
                  "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
              }}
            ></span>
            <span style={{ color: "rgba(241, 198, 254, 1)" }}>
              {currentContent.header}
            </span>
            <span
              className="h-[10px] w-[118px] rounded-full"
              style={{
                background:
                  "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
              }}
            ></span>
          </div>
          <h2 className="text-4xl font-semibold leading-snug">
            {currentContent.title}
            <br />
            <span className="font-light italic">{currentContent.subtitle!==currentContent.header?currentContent.subtitle:""}</span>
          </h2>
          <p className="text-gray-300">{currentContent.description}</p>
          <Link to='/test/fillup' className="px-6 py-2 bg-transparent border border-pink-400 rounded-full hover:bg-[#B7407D]   hover:text-white transition w-[206px]">
            Take Assignment
          </Link>
        </div>

        {/* Right Side - Laptop Image */}
        <div className="relative flex justify-center items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/b0fb/753d/dfc3c4b9943c4f0466e62c0a63abe1b1?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VZXT48eSAokoap2MoUHeGXE6IaDFWoIc4gF8PwKbwoxMWLa4NRZMR7lHUDScJ7i~oAmhwfs48ImBGi6phBYvR9JiBdq0kPE5Mn3lwD8VZtPhsj417zymd4F-rJkEb2wxuzrEoLWnqVM4LfkrCL705TjWm8C2~hnzkm39mdoIHmiNEzPNXlrY2YwNiwft4FVzEUbOfmnV12sAA0o9QuUZfo9fXZ10PM~tO4GnFBmPoKUqJXWj8qqPWyieXbvaj0SuA-XhPJ~YBGFr4zRaZQ5Gh~hb63wVfuAUOuGhq1x8G7eGkZ0iMS1dRTA8S3ww1WfbbUcQG3oG1GKtM83h9uMJZQ__"
            alt="Laptop Mockup"
            className="w-[1101px] h-auto scale-145"
          />

          {/* Circle Indicators */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-2 flex flex-col">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex flex-col items-center">
                <div
                  onClick={() => handleCircleClick(item)}
                  className={`h-10 w-10 flex items-center justify-center rounded-full text-white font-semibold text-sm cursor-pointer ${
                    currentStep === item
                      ? "bg-[#952981]"
                      : "bg-transparent border border-[#9C00AD]"
                  }`}
                >
                  {item}
                </div>
                {item === 5 && (
                  <div
                    className="w-1 h-24 bg-[#952981] mt-2"
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutismTest;
