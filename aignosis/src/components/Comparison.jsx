import React from "react";
import table from '../assets/ctable.png';

const Comparison = () => {
  return (
    <div
      className="flex items-center flex-col justify-center min-h-screen p-8"
      style={{ background: "rgba(26, 12, 37, 1)" }}
    >

<div className="flex items-center space-x-2 text-pink-400 md:hidden max-sm:mb-5">
            <span
              className="h-[10px] w-[118px] rounded-full"
              style={{
                background:
                  "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
              }}
            ></span>

            <span>Comparison</span>
            <span
              className="h-[10px] w-[118px] rounded-full"
              style={{
                background:
                  "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
              }}
            ></span>
          </div>






      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-[150px]">
        {/* Left Side - Medical Report Image */}
        <div className="flex justify-center items-center">
        
         





          <div
            className="p-9 rounded-lg w-[410px]"
            style={{ background: "rgba(245, 215, 255, 0.34)" }}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/dadf/063e/34bacaaa286b2c283290ad56847c112f?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=adxlWhNvuvSb7QDogQ-QL8on7nJSR0qB~t~ZqQi35e35OahdQ2TNroHtdnWo6u5kc6sEQ6CNQc1wIhnA9ElHisbnLAXhe1oZ2~FZGdl05Ki-C7zqPMqyXB-6Ljj5MbCFGwIqlccN4sNqkwQRrbRGD1VDuoZOnlVJ45z1jQlQ7hV358xhEwXGe~8H68oeyjZU9kGdi7hCImJSEJzi1VuQRWsXQ-1RLb-xzwbyMFuB7fzWq1lvSbcQpxxr-y9UDnYNeIcAuNxxy~piSmqbHh4HWyq3Yk~v8ZXbcllAusNaxXQpWClvegME-EkCY7LL462Z8xkWustpNPc1BL3rnYcVlQ__"
              alt="Medical Report"
              className="rounded-lg w-full h-auto" // Adjusting width
            />
          </div>
        </div>

        {/* Right Side - Comparison Content */}
        {/* Mobile View - Show table image */}
        <div className="block md:hidden">
          <img src={table} alt="Comparison Table" className="w-full h-auto" />
        </div>

        {/* Desktop View - Show comparison table code */}
        <div className="hidden md:block text-white space-y-8 w-[410px]">
          <div className="flex items-center space-x-2 text-pink-400">
            <span
              className="h-[10px] w-[118px] rounded-full"
              style={{
                background:
                  "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
              }}
            ></span>

            <span>Comparison</span>
            <span
              className="h-[10px] w-[118px] rounded-full"
              style={{
                background:
                  "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
              }}
            ></span>
          </div>
          <h2 className="text-4xl font-semibold leading-snug">
            Ai.gnosis vs. Traditional Screening <br />
            <span className="font-light italic">A Better Way Forward</span>
          </h2>
          <div
            className="p-8 rounded-lg space-y-6 shadow-xl"
            style={{ background: "rgba(26, 10, 38, 1)" }}
          >
            <div className="flex justify-between items-center text-gray-300 mb-4">
              <div className="w-1/3 text-left relative">
                <div
                  className="absolute top-0 bottom-0 right-0 w-[5px] h-full"
                  style={{
                    background:
                      "radial-gradient(130.08% 35.6% at 100% 48.48%, #B740A1 0%, #150A1C 100%)",
                  }}
                ></div>
              </div>

              <div className="w-1/3 text-center relative">
                Traditional
                <div
                  className="absolute top-0 bottom-0 right-0 w-[5px] h-full"
                  style={{
                    background:
                      "radial-gradient(130.08% 35.6% at 100% 48.48%, #B740A1 0%, #150A1C 100%)",
                  }}
                ></div>
              </div>

              <div className="w-1/3 text-center">Ai.gnosis</div>
            </div>

            {/** Comparison Rows */}
            {[
              { label: "Cost", left: "Expensive", center: "Affordable" },
              { label: "Time", left: "Weeks", center: "5 Minutes" },
              { label: "Accessibility", left: "Limited Location", center: "Remote Friendly" },
            ].map((item, index) => (
              <div className="flex justify-between items-center text-gray-100 mb-4" key={index}>
                <div className="w-1/3 text-left relative">
                  {item.label}
                  <div
                    className="absolute top-0 bottom-0 right-0 w-[5px] h-full"
                    style={{
                      background:
                        "radial-gradient(130.08% 35.6% at 100% 48.48%, #B740A1 0%, #150A1C 100%)",
                    }}
                  ></div>
                </div>

                <div className="w-1/3 text-center relative">
                  {item.left}
                  <div
                    className="absolute top-0 bottom-0 right-0 w-[5px] h-full"
                    style={{
                      background:
                        "radial-gradient(130.08% 35.6% at 100% 48.48%, #B740A1 0%, #150A1C 100%)",
                    }}
                  ></div>
                </div>

                <div className="w-1/3 text-center">{item.center}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;