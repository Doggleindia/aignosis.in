import React from "react";

const AutismTest = () => {
  return (
    <>
      <div
        className="flex justify-between min-h-screen p-8 "
        style={{ background: "rgba(26, 12, 37, 1)" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left Side Content */}
          <div className="flex flex-col justify-center text-white space-y-4">
            <div className="flex items-center space-x-2 ">
              <span
                className="h-[10px] w-[118px]  rounded-full"
                style={{
                  background:
                    "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                }}
              ></span>
              <span style={{ color: "rgba(241, 198, 254, 1)" }}>
                Recognize the Signs
              </span>
              <span
                className="h-[10px] w-[118px]  rounded-full"
                style={{
                  background:
                    "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
                }}
              ></span>
            </div>
            <h2 className="text-4xl font-semibold leading-snug">
              The Ai.gnosis Autism Test: <br />
              <span className="font-light italic">
                A quick, accurate, and non-invasive way to screen your child.
              </span>
            </h2>
            <p className="text-gray-300">
              This enables early detection and helps parents take proactive
              steps for their child's development.
            </p>
            <button className="px-6 py-2 bg-transparent border border-pink-400  rounded-full hover:bg-pink-400 hover:text-white transition w-[206px]">
              Take Assignment
            </button>
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
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div key={item} className="flex flex-col items-center">
                  <div
                    className={`h-10 w-10 flex items-center justify-center rounded-full text-white font-semibold text-sm ${
                      index === 0
                        ? "bg-pink-500"
                        : "bg-transparent border border-pink-500"
                    }`}
                  >
                    {item}
                  </div>
                  {index === 4 && (
                    <div
                      className="h-16 w-1 m-6 "
                      style={{ background: "rgba(149, 41, 129, 1)" }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default AutismTest;
