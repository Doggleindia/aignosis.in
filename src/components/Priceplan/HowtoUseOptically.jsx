import React from 'react';

const HowToUseOptically = () => {
    const Divider = ({ title }) => (
        <div className="flex flex-row justify-center items-center space-x-4 mb-3 mt-10">
            <span
                className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                style={{
                    background:
                        'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                }}
            ></span>
            <h1 className="text-[18px] text-[#F1C6FE] font-medium max-sm:text-sm">
                {title}
            </h1>
            <span
                className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                style={{
                    background:
                        'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                }}
            ></span>
        </div>
    );

    const cards = [
        { title: 'Child health', description: 'Explore educational trends, teaching strategies, and edtech innovations that are shaping' },
        { title: 'Child health', description: 'Explore educational trends, teaching strategies, and edtech innovations that are shaping' },
        { title: 'Child health', description: 'Explore educational trends, teaching strategies, and edtech innovations that are shaping' },
        { title: 'Child health', description: 'Explore educational trends, teaching strategies, and edtech innovations that are shaping' },
    ];

    return (
        <div className="py-4 px-6">
            {/* Divider Section */}
            <Divider title="Advantages" />
            <h1 className="text-2xl 2xl:text-5xl font-montserrat w-full text-center md:text-3xl tracking-tight font-semibold text-[#F6E8FB] max-sm:text-center">
                How to use optically
            </h1>

            {/* Cards Section */}
            <div className="flex flex-wrap justify-center gap-8 mt-10">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center w-[20vw] gap-4"
                    >
                        {/* Box */}
                        <div className="bg-[#43284C4D] rounded-lg w-full h-[20vw]"></div>

                        {/* Title and Description */}
                        <div className="text-left">
                            <h1 className="text-base font-semibold text-white">{card.title}</h1>
                            <p className="text-sm text-[#CACED9] mt-2">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default HowToUseOptically;
