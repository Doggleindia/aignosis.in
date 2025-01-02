import React from 'react';
import Divider from '../../components/aboutus/Divider';
import AiCard from './AiCard';

const OpenAI = () => {
    return (
        <>
            <Divider
                title='text'
                desc='Virtul AI is a decentralized AI platform built on the OneChain blockchain. It allows users to run AI learning models on the blockchain in a secure, transparent, and accessible way.'
                subtitle='Decentralized, Open Artificial Intelligence'
            />

            {/* Desktop view */}
            <div className='hidden lg:flex flex-row mx-8 wrap justify-center items-center m-auto'>
                <AiCard />
                <AiCard />
                <AiCard />
                <AiCard />
                <AiCard />
            </div>

            {/* Mobile view */}
            <div className='lg:hidden flex overflow-x-auto mx-8 justify-start items-center m-auto space-x-4'>
                <div className='flex-shrink-0'>
                    <AiCard />
                </div>
                <div className='flex-shrink-0'>
                    <AiCard />
                </div>
                <div className='flex-shrink-0'>
                    <AiCard />
                </div>
                <div className='flex-shrink-0'>
                    <AiCard />
                </div>
                <div className='flex-shrink-0'>
                    <AiCard />
                </div>
            </div>

            <button className='flex justify-center items-center border-[#B740A1] p-6 my-4 border rounded-full m-auto font-manrope text-sm md:text-2xl text-white'>
                Start Your Child’s Assessment
            </button>
        </>
    );
};

export default OpenAI;
