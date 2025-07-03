import React from 'react';
import img1 from '../../assets/image.png';
import img2 from '../../assets/Featured.png';
import f1 from '../../assets/image (21).jpg';
import f2 from '../../assets/image (25).jpg';
import f3 from '../../assets/image (24).jpg';
import p1 from '../../assets/images/81.png';
import p2 from '../../assets/images/82.png';
import p3 from '../../assets/images/83.png';
import p4 from '../../assets/images/91.png';
import p5 from '../../assets/images/92.png';
import p6 from '../../assets/images/93.png';

const PricepageBenefits = () => {
  const cardData = [
    {
      image: f1,
      name: 'Anaya',
      age: '3.8 year',
      location: 'Bengaluru',
      image1: [p1, p2, p3],
      goals: ['Clearer Speech', 'Improved Social Interactions', 'Better Sensory Regulation'],
      insights: [
        'Speech and Vocalization Patterns',
        'Sensory Responses (e.g., sensitivity to noise)',
        'Eye Contact and Joint Attention',
        'Interaction with Peers',
      ],
      recommendations: [
        'Speech Therapy',
        'Occupational Therapy for Sensory Integration',
        'Parent-Child Interactive Activities',
        'Social Skills Training',
      ],
    },
    {
      image: f2,
      name: 'Aarav',
      age: '4.5 year',
      location: 'Mumbai',
      image1: [p4, p5, p6],
      goals: ['Improved Communication Skills', 'Reduced Screen Time', 'Enhanced Attention Span'],
      insights: [
        'Response to Name',
        'Speech Development',
        'Attention to Visual and Social Cues',
        'Repetitive Behaviors',
      ],
      recommendations: [
        'Speech Therapy',
        'Occupational Therapy',
        'Structured Play Sessions',
        'Screen Time Management Strategies',
      ],
    },
    {
      image: f3,
      name: 'Vivaan',
      age: '5.1 year',
      location: 'Delhi',
      image1: [p1, p2, p3],
      goals: ['Better Social Engagement', 'Improved Focus', 'Enhanced Emotional Understanding'],
      insights: ['Social Communication', 'Joint Attention', 'Emotional Response', 'Gaze Patterns'],
      recommendations: ['Social Skills Training', 'Behavioral Therapy', 'Structured Play Activities'],
    },
  ];
  const Divider = ({ title }) => (
    <div className="mb-3 mt-10 flex flex-row items-center justify-center space-x-4">
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
        }}
      ></span>
      <span className="text-[18px] font-medium text-[#F1C6FE] max-sm:text-sm">{title}</span>
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
        }}
      ></span>
    </div>
  );
  const data = [
    {
      imageUrl: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/image.png',
      title: 'Early Detection for Better Outcomes',
    },
    {
      imageUrl: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/image1.png',
      title: 'Personalized Therapy Recommendations',
    },
    {
      imageUrl: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/Card.png',
      title: 'Improved Social Skills & Communication',
    },

    // Add more items as needed
  ];
  return (
    <>
      <div className="hidden pt-8 md:block">
        {/* Divider Section */}
        <Divider title="Advantages" />
        <h5 className="2xl:text-5xl w-full text-center font-montserrat text-2xl font-semibold tracking-tight text-[#F6E8FB] max-sm:text-center md:text-3xl">
          Benefits of Aignosis
        </h5>

        {/* Carousel Section */}
        <div className="mt-10 flex h-full w-full items-center justify-center">
          {/* Left Arrow */}
          {/* <button className="flex justify-center items-center bg-pink-700 px-4 py-3 rounded-full shadow-md hover:scale-105 transition">
                        <span className="text-white text-xl">{'<'}</span>
                    </button> */}

          {/* Carousel Items */}
          <div className="flex w-[80%] items-center justify-center gap-[3vw] overflow-hidden px-4">
            {/* First Item */}
            <div className="flex w-[200px] flex-col items-center justify-center rounded-lg p-4 shadow-lg">
              <img
                src="https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/image.png"
                alt="Child health"
                className="h-[10vw] w-full scale-[1.2] rounded-lg object-cover"
              />
              <p className="mt-6 text-center text-sm text-white">Early Detection for Better Outcomes</p>
            </div>

            {/* Second Item */}
            <div className="flex w-[200px] flex-col items-center justify-center rounded-lg p-4">
              <img
                src="https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/image1.png"
                alt="Child health"
                className="h-[10vw] w-full scale-[1.2] rounded-lg object-cover"
              />
              <p className="mt-6 text-center text-sm text-white">Personalized Therapy Recommendations</p>
            </div>

            {/* Third Item */}
            <div className="flex w-[200px] flex-col items-center justify-center rounded-lg p-4">
              <img
                src="https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/Card.png"
                alt="Child health"
                className="h-[10vw] w-full scale-[1.2] rounded-lg object-cover"
              />
              <p className="mt-6 text-center text-sm text-white">Improved Social Skills & Communication</p>
            </div>
            {/* <div className="p-4 rounded-lg flex flex-col justify-center items-center w-[200px]">
                            <img
                                src={img1}
                                alt="Child health"
                                className="w-full h-[10vw] scale-[1.2] rounded-lg object-cover"
                            />
                            <p className="mt-6 text-center text-sm text-white">Child health</p>
                        </div> */}
          </div>
          {/* Right Arrow */}
          {/* <button className="flex justify-center items-center bg-pink-700 px-4 py-3 rounded-full shadow-md hover:scale-105 transition">
                        <span className="text-white text-xl">{'>'}</span>
                    </button> */}
        </div>
      </div>
      <div className="hidden pb-5 pt-5 md:block">
        {/* Divider Section */}
        <Divider title="Advantages" />
        <h5 className="2xl:text-5xl w-full text-center font-montserrat text-2xl font-semibold tracking-tight text-[#F6E8FB] max-sm:text-center md:text-3xl">
          Precision Solutions, Exclusively Designed for You
        </h5>

        {/* Cards Section */}
        <div className="mt-10 flex items-center justify-center gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative flex h-[auto] w-[full] flex-col items-center justify-center rounded-xl bg-[#43284C4D]"
            >
              <div className="mt-[15vw] w-full p-4 px-6">
                {/* Image Section */}
                <div className="absolute top-4 flex w-[100%] items-center justify-start">
                  <img src={card.image} alt={`Card ${index}`} className="h-[220px] w-[90%] rounded-lg shadow-md" />
                </div>
                <h4 className="text-[12px] text-[#CACED9]">
                  <span className="text-[18px] font-medium text-white">{card.name} </span>
                  {card.age}
                </h4>
                <span className="text-[10px] text-[#CACED9]">{card.location}</span>
                <div className="my-2 border-t border-[#B740A180]"></div>

                <span className="text-base font-semibold text-white">Development Goal:</span>

                <ul className="ml-4 mt-2 flex flex-row gap-4 text-center text-[8.9px] text-[#CACED9]">
                  {card.goals.map((goal, i) => (
                    <li key={i} className="flex items-center gap-2">
                      {card.image1[i] && <img src={card.image1[i]} alt="goal icon" className="h-6 w-6" />}
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>

                <div className="my-2 border-t border-[#B740A180]"></div>

                <h6 className="text-base font-semibold text-white">Personalized Screening Insights:</h6>
                <p className="mt-2 text-[10px] text-[#CACED9]">
                  Key Features Assessed:
                  <ul className="ml-4 list-disc">
                    {card.insights.map((insight, i) => (
                      <li key={i}>{insight}</li>
                    ))}
                  </ul>
                </p>

                <div className="my-2 border-t border-[#B740A180]"></div>

                <h5 className="text-base font-semibold text-white">Therapy Recommendations:</h5>
                <ul className="ml-4 mt-2 list-disc text-[10px] text-[#CACED9]">
                  {card.recommendations.map((recommendation, i) => (
                    <li key={i}>{recommendation}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="block p-4 md:hidden">
        {/* Divider Section */}
        <Divider title="Advantages" />
        <span className="w-full text-center text-xl font-semibold tracking-tight text-[#F6E8FB]">
          Benefits of Aignosis
        </span>

        {/* Mobile Carousel Section */}
        <div className="mt-6 flex flex-col items-center justify-center gap-4">
          {data.map((item, index) => (
            <div key={index} className="flex w-full flex-col items-center justify-center rounded-lg p-4 shadow-lg">
              <img src={item.imageUrl} alt={item.title} className="h-[40vw] w-full rounded-lg object-cover" />
              <p className="mt-4 text-center text-sm text-white">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="block p-4 md:hidden">
        {/* Divider Section */}
        <Divider title="Advantages" />
        <span className="w-full text-center font-montserrat text-2xl font-semibold tracking-tight text-[#F6E8FB] sm:text-3xl lg:text-5xl">
          Precision Solutions, Exclusively Designed for You
        </span>

        {/* Cards Section */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:flex lg:items-center lg:justify-center">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex h-auto w-full flex-col items-center justify-center rounded-xl bg-[#43284C4D] p-4 pl-5 sm:h-[45vw] sm:w-[40%] lg:w-[22vw]"
            >
              {/* Image Section */}
              <div className="flex h-[40%] w-full items-center justify-center sm:w-[90%]">
                <img src={card.image} alt={`Card ${index}`} className="rounded-lg shadow-md" />
              </div>

              {/* Badge */}
              <div className="absolute right-2 top-2 rounded-full bg-[#E87BFF] px-2 py-1 text-[10px] font-bold text-white">
                {card.age}
              </div>

              {/* Text Section */}
              <div className="mt-4 w-full">
                <span className="text-sm text-[#CACED9] sm:text-[12px]">
                  <span className="text-base font-medium text-white sm:text-[18px]">{card.name} </span>
                  {card.age}
                </span>
                <div className="text-xs text-[#CACED9] sm:text-[10px]">{card.location}</div>
                <div className="my-2 border-t border-[#B740A180]"></div>
                <span className="text-base font-semibold text-white">Development Goal:</span>

                <ul className="ml-4 mt-2 flex flex-row gap-4 text-center text-[8.9px] text-[#CACED9]">
                  {card.goals.map((goal, i) => (
                    <li key={i} className="flex items-center gap-2">
                      {card.image1[i] && <img src={card.image1[i]} alt="goal icon" className="h-6 w-6" />}
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>

                <div className="my-2 border-t border-[#B740A180]"></div>

                <span className="text-sm font-semibold text-white sm:text-base">Personalized Screening Insights:</span>
                <p className="mt-2 text-xs text-[#CACED9] sm:text-[10px]">
                  Key Features Assessed:
                  <ul className="ml-4 list-disc">
                    {card.insights.map((insight, i) => (
                      <li key={i}>{insight}</li>
                    ))}
                  </ul>
                </p>

                <div className="my-2 border-t border-[#B740A180]"></div>

                <span className="text-sm font-semibold text-white sm:text-base">Therapy Recommendations:</span>
                <ul className="ml-4 mt-2 list-disc text-xs text-[#CACED9] sm:text-[10px]">
                  {card.recommendations.map((recommendation, i) => (
                    <li key={i}>{recommendation}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PricepageBenefits;
