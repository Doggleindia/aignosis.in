import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import bg from '../assets/images/bg3.png';

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
      className="h-screen text-white flex justify-center items-center w-full font-montserrat bg-[#1A0C25]">
      <div className="h-[90%] w-[90%] flex justify-center items-center flex-col">
        <div className="w-[50vw] h-[35vw] bg-[#322040] shadow-xl rounded-xl p-4">
          <div className="w-full flex-col h-[30vw] justify-center flex items-center">
            <div className="flex justify-center gap-5 items-center">
              <div className="w-[8rem] h-[1rem]  rounded-3xl bg-[#FFCADF21]"></div>
              <h1 className="text-[#EDD0E7]">Development stages</h1>
              <div className="w-[8rem] h-[1rem] rounded-3xl bg-[#FFCADF21]"></div>
            </div>
            <div className="mt-[2rem] flex justify-center items-center flex-col h-[20vw] w-full">
              <h1 className="text-center text-3xl mt-5 text-[#EDD0E7] tracking-tight font-semibold">
                90% of your baby’s brain develops before the age of 5
              </h1>
              <div className="mt-[6rem] flex justify-center items-center w-[40vw] h-full">
                <Line data={data} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen4;
