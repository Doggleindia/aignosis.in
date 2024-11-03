import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import bg from '../assets/images/bg3.png';
import graph_img from '../assets/graph.png';
import belongs from '../assets/belongs.png'
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
          color: 'white',  // Make x-axis labels white
        },
        grid: {
          display: false,       // Hide x-axis inner grid lines
          borderColor: 'white', // Show x-axis line in white
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: 'white',  // Make y-axis labels white
          stepSize: 20,    // Add gap of 20 units on y-axis
        },
        grid: {
          display: false,       // Hide y-axis inner grid lines
          borderColor: 'white', // Show y-axis line in white
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white',  // Make legend text white
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
      
  

  return (
    <div
      className="h-screen max-sm:h-[60vh] text-white flex justify-center items-center w-full font-montserrat bg-[#1A0C25]">
      <div className="h-[90%] w-auto flex justify-center items-center flex-col">
        <div className="w-[55vw] h-[35vw] max-sm:h-[300px] max-sm:w-[90vw] bg-[#322040] relative shadow-xl rounded-xl p-4">
          <div className="w-full flex-col h-[30vw] justify-center flex items-center">
            <div className="flex justify-center gap-5 items-center">
            <span
                            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                            style={{
                                background: "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)"
                            }}
                        ></span>
                        <h1 className='text-[#F1C6FE] text-sm md:text-3xl'>Recognize the Signs</h1>
                        <span
                            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                            style={{
                                background: "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)"
                            }}
                        ></span>
            </div>
            <div className="mt-[2rem] flex justify-center items-center flex-col h-[20vw]  w-full">
              <h1 className="text-center max-sm:text-lg text-3xl mt-[20%] text-[#EDD0E7] tracking-tight font-semibold">
                90% of your baby’s brain develops before the age of 5
              </h1>
              <img src={belongs} className='w-[200px] max-sm:hidden absolute right-[80px]' alt="" />
              <div className="mt-[6rem] max-sm:mt-7  flex justify-center items-center w-[40vw] max-sm:w-[300px]  h-full">
                <img src={graph_img} alt="" />
              </div>


              <div className="relative -left-[12%] -top-[18%] max-sm:hidden">
  <p className="font-manrope text-[#F6E8FB] text-md">Brain development</p>
  <p className="font-manrope text-[#F6E8FB] text-md">With First 5 Years</p>
</div>
<div className="m-5">
  <p className="absolute bottom-0 left-[20%] max-sm:hidden">Birth</p>
  <p className="absolute bottom-0 left-[54%] max-sm:hidden">5 Years</p>
  <p className="absolute bottom-0 left-[75%] max-sm:hidden">18 Years</p>
</div>

          

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen4;
