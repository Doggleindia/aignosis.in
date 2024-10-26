import React from 'react'
import bg from '../assets/images/bg3.png'


const Screen5 = () => {
    return (
        <div className='h-screen text-white flex justify-center items-center w-full font-montserrat bg-[#1A0C25]'>
            <div className="w-full h-[100%] flex justify-center items-center flex-col">
                <div className='w-full flex-col h-[20vw] justify-center flex items-center'>
                    <div className="flex justify-center gap-5 items-center">
                        <div className='w-[8rem] h-[1rem] rounded-3xl bg-[#FFCADF21]'></div>
                        <h1 className='text-[#F1C6FE]'>Recognize the Signs</h1>
                        <div className='w-[8rem] h-[1rem] rounded-3xl bg-[#FFCADF21]'></div>
                    </div>
                    <div className=" mt-[2rem]">
                        <h1 className='text-center text-7xl tracking-tight font-semibold leading-[3rem]'>Recognize the Signs</h1>
                        <h1 className='text-center text-6xl italic tracking-tight font-semibold mt-5 leading-[3rem]'>Is Your Child at Risk?</h1>
                    </div>
                    <div className='px-[25rem] mt-[2rem]'>
                        <p className='text-center'>Gain insight into the prevalence of developmental challenges and autism among children. Each data point highlights the urgency of early detection, supporting parents with reliable information to act quickly. Learn more about the numbers that drive our mission.</p>
                    </div>
                </div>
                <div className="w-full h-[25vw] gap-[5rem] justify-center items-center flex">
                    <div className="w-[3rem] h-[3rem] bg-[#382C3E] rounded-full"></div>
                    <div className='w-[60%] h-[25vw] flex border border-[#B874B540] rounded-3xl' >
                        <div className="w-[50%] h-full flex justify-center items-center">
                            <img className='w-[60%] h-[60%] object-cover' src={bg} alt="" srcset="" />
                        </div>
                        <div className="w-[50%] ml-[5rem] pr-[8rem] text-4xl h-full flex flex-col justify-center items-start">
                            <h1 className='font-medium text-left'>Does your child watch screens for more than 2 hours a day?</h1>
                            <h1 className='text-base mt-2 '>Prolonged screen time can impact social interaction and communication skills, which are crucial in early autism detection. Monitor your child’s screen habits closely</h1>
                            <div className='w-[10rem] mt-[2rem] border-2 border-[#B740A1] gap-4 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3rem] bg-transparent'>
                                <a href="" className='text-white text-base'>Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-[3rem] h-[3rem] bg-[#382C3E] rounded-full"></div>

                </div>
            </div>
        </div>
    )
}

export default Screen5