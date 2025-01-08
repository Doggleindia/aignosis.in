import React from 'react';
import Divider from '../aboutus/Divider';
import { Link, useNavigate } from "react-router-dom";

const Card = ({ title, subtitle, description, link }) => {
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        navigate(path);
    };

    return (
        <div className="bg-[#43284C4D] text-white relative font-raleway p-11 rounded-3xl shadow-2xl text-left w-[30vw] mx-4">
            <h3 className="text-xl justify-center items-center w-full">
                <span className='font-semibold italic text-3xl'>{title}</span>
                {" "} 
                <span className='ml-1 font-medium'>{subtitle}</span> 
                <span className="absolute right-10 bottom-10 bg-red-800 ml-2 text-white px-1 py-1 w-10 h-10 flex justify-center items-center rounded-full font-bold text-[11px]">SOS</span>
            </h3>
            <p className="mb-8 mt-4 text-sm">{description}</p>
            <button
                onClick={() => handleLinkClick(link)}
                className="border -ml-2 border-[#B740A1] p-2 px-5 rounded-[30px]"
            >
                <span className="2xl:text-base md:text-sm m-auto text-2xl text-white">
                    Learn More
                </span>
            </button>
        </div>
    );
};

const UnderStandingNumber = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full text-center px-[14vw] mt-[5vw]">
            <Divider
                title='Understanding the Numbers'
                desc='Gain insight into the prevalence of developmental challenges and autism among children. Each data point highlights the urgency of early detection, supporting parents with reliable information to act quickly. Learn more about the numbers that drive our mission.'
                subtitle='Developmental Delays & Autism'
            />
            <div className="flex justify-center mt-[6vw] mb-[4vw]">
                <Card
                    title="1 in 68"
                    subtitle="children experience developmental delays"
                    description="Early identification is crucial for support"
                    link="/blog/11"
                />
                <Card
                    title="1 in 10"
                    subtitle="children are autistic in India"
                    description="Autism awareness and early detection can make a difference."
                    link="/blog/12"
                />
            </div>
        </div>
    );
};

export default UnderStandingNumber;
