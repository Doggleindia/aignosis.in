import React from 'react';

const AiCard = ({ imageSrc, date, title, description = '' }) => {
    const descriptionWords = description.split(' ');

    return (
        <>
            {/* Desktop view */}
            <div className="hidden md:flex flex-col w-[24%] mt-[4vw]  bg-[#43284C4D] border rounded-[16px] border-[#5455694D] mx-4 my-4">
                <img src={imageSrc} className='h-[200px] object-contain pt-4' alt="AI related content" />
                <div className='flex flex-col gap-1 p-4'>
                    <span className='text-xs underline text-[#D7DAE3] font-raleway'>{date}</span>
                    <span className='text-base font-semibold text-[#D7DAE3] font-raleway'>{title}</span>
                    <p className='pt-2 font-bold text-sm text-[#CACED9] font-montserrat block'>
                        {descriptionWords.map((word, index) => (
                            <span
                                key={index}
                                style={{ color: index === 1 ? '#B740A1' : 'inherit' }}
                            >
                                {word}{' '}
                            </span>
                        ))}
                    </p>
                </div>
            </div>

            {/* Mobile view */}
            <div className="md:hidden flex flex-col w-full overflow-hidden bg-[#43284C] border rounded-[16px] border-[#5455694D] mx-4 my-4">
                <img src={imageSrc} className='w-full h-[200px] object-cover' alt="AI related content" />
                <div className='flex flex-col gap-2 p-4'>
                    <span className='text-xs sm:text-sm text-[#D7DAE3] font-raleway'>{date}</span>
                    <span className='text-lg sm:text-xl text-[#D7DAE3] font-raleway'>{title}</span>
                    <p className='pt-2 text-xs sm:text-sm text-[#CACED9] font-raleway'>
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
};

export default AiCard;
