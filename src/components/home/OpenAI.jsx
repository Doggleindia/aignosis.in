import React from 'react';
import Divider from '../../components/aboutus/Divider';
import AiCard from './AiCard';
import member from "../../assets/images/aboutUs/member.png";
import img1 from "../../assets/homepage/image 128.png";
import img2 from "../../assets/homepage/image.png";
import img3 from "../../assets/homepage/image2.png";
import img4 from "../../assets/homepage/image3.png";
import img5 from "../../assets/homepage/image4.png";


const OpenAI = () => {
    return (
        <>
            <Divider
                title='Act now'
                desc='Virtue AI is a decentralized AI platform built on the OneChain blockchain. It allows users to run AI learning models on the blockchain in a secure, transparent, and accessible way.'
                subtitle='Upto 1 in 5 children are at risk of developmental delays'
            />

            {/* Desktop view */}
            <div className='hidden lg:flex flex-row mx-8 wrap justify-center items-center m-auto'>
                <AiCard
                    imageSrc={img1}
                    date="3 month old"
                    title=""
                    description="Does NOT follow moving objects with eyes"
                />
                <AiCard
                    imageSrc={img2}
                    date="1 year old"
                    title=""
                    description="Does NOT use gestures like waving or shaking head"
                />
                <AiCard
                    imageSrc={img3}
                    date="2 year old"
                    title=""
                    description="Does NOT speak two-word sentences"
                />
                <AiCard
                    imageSrc={img4}
                    date="3 year old"
                    title=""
                    description="Has DIFFICULTY manipulating small objects"
                />
                <AiCard
                    imageSrc={img5}
                    date="4 year old"
                    title=""
                    description="Has DIFFICULTY scribbling or drawing"
                />
                
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
            <p className='text-center text-[9px] p-3 text-white font-montserrat'>*Source: A Review Of Developmental Delay And Its Determinants In Under Five Children (National Journal of Medical and Allied Sciences, 2017)</p>
            <button className='flex justify-center items-center border-[#B740A1] p-4 my-4 border rounded-full m-auto font-manrope text-sm md:text-2xl xl:text-lg text-white'>
                Start Your Child’s Assessment
            </button>
        </>
    );
};

export default OpenAI;
