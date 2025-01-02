import React from 'react';
import member from '../../assets/images/aboutUs/member.png';

const AiCard = () => {
    return (
        <>
            {/* Desktop view */}
            <div className="hidden md:flex flex-col w-[24%] bg-[#43284C] border rounded-[16px] border-[#5455694D] mx-4 my-4">
                <img src={member} className='h-[300px]' alt="this is ai images" />
                <div className='flex flex-col gap-1 p-4'>
                    <span className='text-xl text-[#D7DAE3] font-raleway'>12 January, 2021</span>
                    <span className='text-2xl text-[#D7DAE3] font-raleway'>Pixel Perfect</span>
                    <p className='pt-2 text-xl text-[#CACED9] font-raleway block'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae eros dui. Sed quis tincidunt purus, sit amet sodales arcu.
                    </p>
                </div>
            </div>

            {/* Mobile view */}
            <div className="md:hidden flex flex-col w-full bg-[#43284C] border rounded-[16px] border-[#5455694D] mx-4 my-4">
                <img src={member} className='w-full h-[200px] object-cover' alt="this is ai images" />
                <div className='flex flex-col gap-2 p-4'>
                    <span className='text-xs sm:text-sm text-[#D7DAE3] font-raleway'>12 January, 2021</span>
                    <span className='text-lg sm:text-xl text-[#D7DAE3] font-raleway'>Pixel Perfect</span>
                    <p className='pt-2 text-xs sm:text-sm text-[#CACED9] font-raleway'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae eros dui. Sed quis tincidunt purus, sit amet sodales arcu.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AiCard;
