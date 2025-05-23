import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import bg from '../assets/images/bg3.png';
import graph_img from '../assets/graph.png';
import belongs from '../assets/belongs.png';
const Screen4 = () => {
  const data = {
    datasets: [
      {
        label: 'Language Development',
        borderColor: 'yellow',
        backgroundColor: 'yellow',
        data: [
          { x: 0, y: 0 },
          { x: 1, y: 20 },
          { x: 2, y: 80 },
          { x: 3, y: 60 },
          { x: 4, y: 30 },
          { x: 5, y: 10 },
          { x: 6, y: 5 },
        ],
        fill: false,
      },
      {
        label: 'Sensory Pathway (Vision, Hearing)',
        borderColor: 'blue',
        backgroundColor: 'blue',
        data: [
          { x: 0, y: 0 },
          { x: 1, y: 10 },
          { x: 2, y: 50 },
          { x: 3, y: 90 },
          { x: 4, y: 70 },
          { x: 5, y: 20 },
          { x: 6, y: 10 },
        ],
        fill: false,
      },
      {
        label: 'Higher Cognitive Function',
        borderColor: 'pink',
        backgroundColor: 'pink',
        data: [
          { x: 0, y: 0 },
          { x: 1, y: 5 },
          { x: 2, y: 30 },
          { x: 3, y: 70 },
          { x: 4, y: 90 },
          { x: 5, y: 50 },
          { x: 6, y: 15 },
        ],
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        ticks: {
          stepSize: 1,
          color: 'white', // Make x-axis labels white
        },
        grid: {
          display: false, // Hide x-axis inner grid lines
          borderColor: 'white', // Show x-axis line in white
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: 'white', // Make y-axis labels white
          stepSize: 20, // Add gap of 20 units on y-axis
        },
        grid: {
          display: false, // Hide y-axis inner grid lines
          borderColor: 'white', // Show y-axis line in white
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white', // Make legend text white
        },
        display: true, // Show the legend
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 4,
      },
    },
  };
  const Divider = ({ title }) => (
    <div className="mb-8 mt-10 flex flex-row items-center justify-center space-x-4">
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
        }}
      ></span>
      <h1 className="2xl:text-[20px] font-medium text-[#F1C6FE] max-sm:text-sm md:text-sm">{title}</h1>
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
        }}
      ></span>
    </div>
  );

  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-[#1A0C25] p-5 font-montserrat text-white max-sm:h-[35vh]">
      <div className="flex w-auto flex-col items-center justify-center">
        <div className="2xl:p-10 relative rounded-xl bg-[#1A0C254D] shadow-2xl md:px-[5rem] md:py-[3rem]">
          <div className="flex flex-col items-center justify-center">
            <Divider title="Development stages" />

            <div className="mt-[1rem] flex w-full flex-col items-center justify-center">
              <h1 className="2xl:text-2xl text-center font-semibold tracking-tight text-[#EDD0E7] max-sm:text-lg md:text-xl">
                90% of your baby’s brain develops before the age of 5
              </h1>
              <img src={belongs} className="absolute right-[80px] w-[200px] max-sm:hidden" alt="" loading="lazy" />
              <div className="m-[1rem] flex h-full w-[40vw] items-center justify-center max-sm:mt-7 max-sm:w-[300px]">
                <img src={graph_img} alt="" loading="lazy" />
              </div>
              <div className="mb-4">
                <p className="2xl:text-lg absolute left-[20%] md:text-xs">Birth</p>
                <p className="2xl:text-lg absolute left-[55%] md:text-xs">5 Years</p>
                <p className="2xl:text-lg absolute left-[76%] md:text-xs">18 Years</p>
              </div>
            </div>
          </div>

          <div className="justify- relative -left-[12%] -top-[80%] max-sm:hidden">
            {/* <p className="font-manrope md:text-xs 2xl:text-lg text-[#F6E8FB] text-md"></p> */}
            {/* <p className=" mt-2 font-manrope md:text-xs 2xl:text-lg text-[#F6E8FB] text-md max-sm:text-sm">Brain development With First 5 Yearsdddd</p> */}
          </div>
          <p className="align-center 2xl:text-lg text-md mt-2 flex justify-center font-manrope text-[#F6E8FB] max-sm:text-sm md:text-xs">
            Brain development With First 5 Years
          </p>

          <p className="p-4 text-center text-sm text-[#F6E8FB]">Source: Harvard center for developing child</p>
        </div>

        <div className="absolute inset-0 left-0 h-[30vw] w-[10vw] rounded-xl bg-[#B740A1] opacity-65 blur-[200px]"></div>
        <div className="absolute inset-0 left-[85%] top-[50%] h-[30vw] w-auto rounded-xl bg-[#B740A1] opacity-65 blur-[200px]"></div>
      </div>
    </div>
  );
};

export default Screen4;
