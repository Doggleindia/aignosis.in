import React from 'react';

const HowToUseOptically = () => {
  const Divider = ({ title }) => (
    <div className="mb-3 mt-10 flex flex-row items-center justify-center space-x-4">
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
        }}
      ></span>
      <h4 className="text-[18px] font-medium text-[#F1C6FE] max-sm:text-sm">{title}</h4>
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
        }}
      ></span>
    </div>
  );

  const cards = [
    {
      title: 'Observe Natural Behaviors',
      description: 'A calm environment helps capture your child’s authentic responses.',
      image_url: 'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/Card1.png',
    },
    {
      title: 'Early Screening, Better Outcomes',
      description: 'Detecting early signs ensures timely intervention and improved development.',
      image_url: 'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/Card2.png',
    },
    {
      title: 'Keep it Relaxed',
      description: 'Ensure your child is comfortable and engaged for the best results.',
      image_url: 'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/Card3.png',
    },
    {
      title: 'One Step at a Time',
      description: 'One screening session is enough to provide valuable insights',
      image_url: 'https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/Card4.png',
    },
  ];

  return (
    <>
      <div className="hidden px-6 py-4 md:block">
        {/* Divider Section */}
        <Divider title="Advantages" />
        <h5 className="2xl:text-5xl w-full text-center font-montserrat text-2xl font-semibold tracking-tight text-[#F6E8FB] max-sm:text-center md:text-3xl">
          Why screening is important for your child{' '}
        </h5>

        {/* Cards Section */}
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {cards.map((card, index) => (
            <div key={index} className="flex w-[20vw] flex-col items-center gap-4">
              {/* Box */}
              <div className="h-[20vw] w-full overflow-hidden rounded-3xl bg-[#43284C4D]">
                <img className="h-full w-full object-cover" src={card.image_url} alt="" />
              </div>

              {/* Title and Description */}
              <div className="text-left">
                <h3 className="text-base font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm text-[#CACED9]">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="block px-4 py-4 md:hidden">
        {/* Divider Section */}
        <Divider title="Advantages" />
        <h5 className="w-full text-center font-montserrat text-xl font-semibold tracking-tight text-[#F6E8FB] sm:text-2xl">
          Why screening is important for your child
        </h5>

        {/* Cards Section */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {cards.map((card, index) => (
            <div key={index} className="flex w-[80vw] flex-col items-center gap-4">
              {/* Box */}
              <div className="h-[60vw] w-full overflow-hidden rounded-3xl bg-[#43284C4D]">
                <img className="h-full w-full object-cover" src={card.image_url} alt="" />
              </div>
              {/* Title and Description */}
              <div className="text-center">
                <span className="text-base font-semibold text-white">{card.title}</span>
                <p className="mt-2 text-sm text-[#CACED9]">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HowToUseOptically;
