import React, { useState } from 'react'
import img from '../assets/images/SectionL.png';
import { GoArrowUpRight } from "react-icons/go";
import { CiPhone } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import crossIcon from '../assets/images/cross.png';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import Header from './Header';

import { Link } from 'react-router-dom';

import pos1 from '../assets/images/pos1.png';
import pos2 from '../assets/images/pos2.png';
import pos3 from '../assets/images/pos3.png';
import pos4 from '../assets/images/pos4.png';
import arrow1 from '../assets/images/Arrow 3.png';
import arrow2 from '../assets/images/Arrow 4.png';
import arrow3 from '../assets/images/Arrow 5.png';
import cloud1 from '../assets/images/cloud1.png';
import cloud2 from '../assets/images/cloud2.png';
import cloud3 from '../assets/images/cloud3.png';
import cloud4 from '../assets/images/cloud4.png';
import ScrollToTop from "./ScrollToTop";
import { useEffect } from "react";


const ServicePage1 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    const faqData = [
        {
            question: "How do I know if my child needs an assessment?",
            answer: "Signs that may indicate your child needs an assessment include difficulties in learning, consistent struggles with reading or writing, challenges in social interactions, behavioral issues, or delays in speech and language development. If you notice your child facing these challenges, it may be beneficial to seek an assessment.",
        },
        {
            question: "What is the appropriate age for an assessment?",
            answer: "Children can be assessed as early as 18 months for developmental milestones, but most comprehensive evaluations typically occur between the ages of 3 and 7. Early intervention is crucial, so if you have concerns, it’s best to seek guidance sooner rather than later.",
        },
        {
            question: "How long does the assessment process take?",
            answer: "The assessment process generally takes between 1 to 2 hours, depending on the specific evaluations being conducted. Additional time may be needed for follow-up discussions and to review the results with you.",
        },
        {
            question: "What can I expect during an assessment?",
            answer: "During the assessment, your child will participate in various activities and tasks designed to evaluate their cognitive, social, and emotional functioning. The process is interactive and child-friendly, ensuring your child feels comfortable. Afterward, you will receive a detailed report outlining the findings, along with recommendations for further support or intervention if needed.",
        }
    ];

    return (
        <div className='bg-[#1A0C25] font-montserrat text-white'>
            <Header />
            <div className='h-screen w-full '>
                <div className="w-full flex justify-center items-center h-auto px-4 sm:px-0">
                    <div className="w-full flex flex-col justify-center items-center md:mt-[12vw] 2xl:mt-[6vw] h-auto">

                        {/* Title and Gradient Bars */}
                        <div className="flex justify-center gap-5 items-center ">
                            <span
                                className="h-[5px] sm:h-[10px] w-[60px] sm:w-[118px] rounded-full"
                                style={{
                                    background: "linear-gradient(270deg, rgba(255, 202, 223, 0.13) 0%, #FB7CE4 100%)"
                                }}
                            ></span>
                            <h1 className="text-[#F1C6FE] text-sm sm:text-base">Services</h1>
                            <span
                                className="h-[5px] sm:h-[10px] w-[60px] sm:w-[118px] rounded-full"
                                style={{
                                    background: "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)"
                                }}
                            ></span>
                        </div>

                        {/* Headline and Subtitle */}
                        <div className="flex flex-col items-center text-center">
                            <h1 className="text-lg sm:text-4xl md:text-5xl mt-2 font-medium font-raleway">
                                Unlock Your Child’s Learning Potential
                            </h1>
                            <h1 className="text-xs sm:text-base mt-2 sm:mt-3">
                                Explore Online Assessments with 24/7 Support in 8 Languages!
                            </h1>
                        </div>
                        {/* Image Section */}
                        <div className="w-[90%] sm:w-[40vw]  sm:mt-[2vw] h-[200px] sm:h-[20vw] bg-[#D9D9D9] overflow-hidden rounded-lg">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/d91d/9efb/7dea1cf961e4446aef3c48d99e7f60ce?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lOhHRgm1J6W-vkRDggGCxLp9PIbGXKbOGd8LHQb-vcW1apeNTaG-zSP18WGb-l9g~kfgmj93nK3fm5egWFnPmlgHLCBFRo9E-av9AXcgOiFVmhklfPfNhC5K7HdmXtJIoxAqc50pnGrpfotUE7l~e4Ntz25yzaATOKWYJEahYf3bcyF5Ez2fkOV-e2ewUAJB0OyxjQkNKhxwjIBO6L72aEi5twwrrHKsJTvm14HEPbvnugE3C~pAKpDAJmZHUMbcSvmtwAVXYtYEu1Df5eV2Xyz5Z2QtVaXs1sCMUwVHcRj3Sz-VDhtkKMvumxQ8PHrL6CIT0Mf0bnkqpwxITmexwQ__"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* CTA and Rating */}
                        <div className="flex flex-col sm:flex-row p-4 items-center justify-center w-full bg-[#1A0C25] ">
                            <div className="w-full m-2 sm:w-[14rem] cursor-pointer border-2 border-[#B740A1] gap-2 sm: rounded-full flex justify-between items-center text-[#0D0C0A] h-[3rem] sm:h-[3.5rem] group bg-transparent hover:bg-[#B7407D] transition-colors duration-300 px-4">
                                <a href="#" className="text-white text-xs sm:text-base">Get In Touch</a>
                                <div className="w-[2rem] sm:w-[2.5rem] h-[2rem] sm:h-[2.5rem] flex items-center justify-center text-white text-lg group-hover:bg-white group-hover:text-black rounded-full bg-[#B740A1]">
                                    <GoArrowUpRight />
                                </div>
                            </div>
                            <h1 className="text-white text-xs sm:text-base font-semibold text-center">
                                Rated 4.5/5 by Parents
                            </h1>
                        </div>



                    </div>
                </div>
                <div className="w-full min-h-screen px-[10vw] gap-[3vw] bg-[#1A0C25] font-montserrat text-white flex justify-center items-start">
                    <div className="w-[50%] h-auto 2xl:pb-[0vw] md:pb-[15vw] p-[3vw]">
                        <div className="w-[100%] text-right flex-col mt-[3vw] h-auto flex font-raleway">
                            <div>
                                <h1 className='2xl:text-2xl md:text-xl text-left font-semibold'>What Are Assessments?</h1>
                                <h1 className='mt-6 2xl:text-base md:text-sm text-left mr-[1vw]'>Our comprehensive psycho-educational assessments help identify your child's unique learning needs.</h1>
                            </div>
                            <div className='mt-6'>
                                <h1 className='2xl:text-2xl md:text-xl text-left font-semibold'>Why is Early Diagnosis Important?</h1>
                                <h1 className='mt-6 2xl:text-base md:text-sm text-left mr-[1vw]'>It allows us to develop customized therapy solutions and ensure a smooth transition into school.</h1>
                            </div>
                            <div className='mt-6'>
                                <h1 className='2xl:text-2xl md:text-xl text-left font-medium'>Our Assessment Services:</h1>
                                <div className='pl-[2vw]mt-6 2xl:text-base md:text-sm text-left'>
                                    <h1 className='mt-6 mr-[1vw]'>ADHD Screening</h1>
                                    <h1 className='mt-6 mr-[1vw]'>Autism Evaluation</h1>
                                    <h1 className='mt-6 mr-[1vw]'>Speech and Language Assessments</h1>
                                    <h1 className='mt-6 mr-[1vw]'>Cognitive and Social Functioning Tests</h1>
                                    <h1 className='mt-6 mr-[1vw]'>Intellectual, Social, and Developmental Quotients</h1>
                                    <h1 className='mt-6 mr-[1vw]'>Learning Styles, Aptitude, and Interests</h1>
                                    <h1 className='mt-6 mr-[1vw]'>Learning Disabilities (Dyslexia, Dyscalculia, Dysgraphia)</h1>
                                    <h1 className='mt-6 mr-[1vw]'>Depression & Anxiety Evaluations</h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-[100%] flex-col mt-[4vw] h-[auto] py-[2vw] rounded-3xl bg-[#564A5952] px-[2vw] border border-[#B7407D80]">
                            <h1 className='mt-10 2xl:text-xl md:text-lg font-semibold uppercase text-center font-raleway'>“The Best Time to Start is NOW”</h1>
                            <h1 className=' mt-3 pl-[1vw] 2xl:text-base md:text-sm text-center'>Support for Every Age Group</h1>
                            <div className='mt-6 flex flex-col justify-center items-center pl-[2vw]'>
                                <h1 className='2xl:text-xl md:text-lg text-left pr-[14vw] font-medium font-raleway'>We Specialize In:</h1>
                                <div className='pl-[1vw] 2xl:text-base md:text-sm mt-6'>
                                    <h1>Sensory Processing Disorder</h1>
                                    <h1 className='mt-6'>Autism</h1>
                                    <h1 className='mt-6'>ADHD</h1>
                                    <h1 className='mt-6'>Speech and Language Challenge</h1>
                                    <h1 className='mt-6'>Learning Disabilities</h1>
                                    <h1 className='mt-6'>Anxiety Disorders</h1>
                                    <h1 className='mt-6'>Slow Learners</h1>
                                    <h1 className='mt-6'>Down Syndromes</h1>
                                    <h1 className='mt-6'>Intellectual Disabilities</h1>
                                    <h1 className='mt-6 mb-[2v]'>Giftedness</h1>
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%] mt-[4vw] flex-col h-[35vw] justify-center flex items-center'>
                            <div className="flex justify-center gap-5 items-center">
                                <span
                                    className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                                    style={{
                                        background: "linear-gradient(270deg, rgba(255, 202, 223, 0.13) 0%, #FB7CE4 100%)"
                                    }}
                                ></span>
                                <h1 className='text-[#F1C6FE] 2xl:text-base md:text-sm'>Advantages</h1>
                                <span
                                    className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                                    style={{
                                        background: "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)"
                                    }}
                                ></span>
                            </div>
                            <div className=" justify-center w-full items-center flex flex-col">
                                <h1 className='mt-5 2xl:text-5xl md:text-3xl font-medium'>Why choose us</h1>
                                <h1 className='mt-3 2xl:text-base md:text-sm'>Early Intervention + Consistent Practice </h1>
                                <h1 className='font-semibold italic 2xl:text-xl md:text-lg text-[#9C00AD]'>= Enhanced Progress!</h1>
                            </div>
                            <div className='w-full pt-[3vw] pl-[2.5vw] h-[25vw] justify-center flex items-center'>
                                <div className="w-full flex h-[22vw] relative">
                                    {/* Group for pos1 */}
                                    <div className="group ">
                                        {/* First Image */}
                                        <img
                                            className="absolute cursor-pointer scale-[.9] top-5 left-[2vw]"
                                            src={pos1}
                                            alt=""
                                        />

                                        {/* Cloud Image - Visible on hover */}
                                        <img
                                            className="absolute scale-[.6] -top-[5vw] left-[3vw] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            src={cloud1}
                                            alt=""
                                        />

                                        {/* Heading Content - Visible on hover */}
                                        <h1
                                            className="text-black absolute text-[10px] font-medium left-[9vw] -top-[2vw] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            Expertise from <br /> Licensed <br /> Psychologists
                                        </h1>
                                    </div>

                                    {/* Group for pos2 */}
                                    <div className="group ">
                                        <img
                                            className="absolute cursor-pointer scale-[.9] top-[4vw] left-[15vw]"
                                            src={pos2}
                                            alt=""
                                        />
                                        <img
                                            className="absolute scale-[.6] -top-[4vw] left-[16vw] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            src={cloud1}
                                            alt=""
                                        />
                                        <h1
                                            className="text-black absolute text-[10px] font-medium left-[22vw] -top-[1vw] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            Personalized <br /> Therapy <br /> Sessions for You
                                        </h1>
                                    </div>

                                    {/* Group for pos3 */}
                                    <div className="group ">
                                        <img
                                            className="absolute cursor-pointer scale-[.9] top-[13vw] left-[4vw]"
                                            src={pos3}
                                            alt=""
                                        />
                                        <img
                                            className="absolute scale-[.6] top-[4vw] z-10 left-[3vw] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            src={cloud1}
                                            alt=""
                                        />
                                        <h1
                                            className="text-black z-20 absolute text-[10px] font-medium left-[8.6vw] top-[7.5vw] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            24/7 Support and <br /> Guidance Available
                                        </h1>
                                    </div>

                                    {/* Group for pos4 */}
                                    <div className="group ">
                                        <img
                                            className="absolute cursor-pointer scale-[.9] top-[15vw] left-[16vw]"
                                            src={pos4}
                                            alt=""
                                        />
                                        <img
                                            className="absolute scale-[.6] z-10 top-[6vw] left-[15vw] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            src={cloud1}
                                            alt=""
                                        />
                                        <h1
                                            className="text-black absolute z-20 text-[10px] font-medium left-[21vw] top-[9vw] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            Confidential <br /> and Secure <br /> Environment
                                        </h1>
                                    </div>

                                    {/* Other elements such as arrows */}
                                    <img className="absolute scale-[.7] top-[6vw] left-[9vw]" src={arrow1} alt="" />
                                    <img className="absolute scale-[.7] top-[10vw] left-[10vw]" src={arrow2} alt="" />
                                    <img className="absolute scale-[.7] top-[16vw] left-[10.5vw]" src={arrow3} alt="" />
                                </div>

                            </div>

                        </div>
                        <div className='w-[100%] flex-col md:mt-[20vw] 2xl:mt-[10vw] h-[45vw] justify-center flex items-center'>
                            <div className="flex justify-center gap-5 items-center">
                                <span
                                    className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                                    style={{
                                        background: "linear-gradient(270deg, rgba(255, 202, 223, 0.13) 0%, #FB7CE4 100%)"
                                    }}
                                ></span>
                                <h1 className='text-[#F1C6FE] 2xl:text-base md:text-sm'>Advantages</h1>
                                <span
                                    className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                                    style={{
                                        background: "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)"
                                    }}
                                ></span>
                            </div>
                            <div className=" justify-center w-full items-center flex flex-col">
                                <h1 className='2xl:text-5xl md:text-3xl mt-5 font-manrope text-center font-medium'>Benefits of Our Service:</h1>
                            </div>
                            <div className=" w-[42vw] mt-[4vw] rounded-3xl h-auto bg-[#564A5957]">
                                <table className="w-full text-left text-gray-200">
                                    <thead>
                                        <tr>
                                            <th className="pb-4 text-center text-lg border-r border-[#F6E8FB80]"> </th>
                                            <th className="pb-4 p-[2vw] 2xl:text-sm md:text-xs text-center">Ai.gnosis</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-center 2xl:text-base md:text-sm'>
                                        {[
                                            "Affordable Compared to Traditional Centers",
                                            "Access to Qualified Specialists",
                                            "Flexible Scheduling (Weekdays and Evenings)",
                                            "Resources Provided After Sessions",
                                            "Regular Progress Updates",
                                            "Engaging Group Art & Story Sessions",
                                            "Direct Messaging with Specialists.",
                                            "Easy Online Scheduling",
                                            "Convenient App for Tips and Activities",
                                            "No Travel or Waiting Time",
                                            "EMI Options for Indian Residents*",

                                        ].map((feature, index) => (
                                            <tr key={index} className="border-t border-[#F6E8FB80]">
                                                <td className="py-3 border-r border-[#F6E8FB80]">{feature}</td>
                                                <td className="py-3 text-center">
                                                    ✅
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='w-auto flex-col md:mt-[18vw] 2xl:mt-[1vw] h-[44vw] justify-center flex items-center'>

                            <div className='bg-[#1A0C25] min-h-screen flex flex-col justify-center items-center p-6'>
                                <h2 className="text-[#F6E8FB] text-[40px] 2xl:text-5xl md:text-3xl text-center font-bold font-manrope">Frequently Asked Questions</h2>
                                <div className=" w-auto bg-[#564A5957] rounded-3xl p-8 px-[5vw] mx-auto mt-10">
                                    <div className="space-y-4">
                                        {faqData.map((item, index) => (
                                            <div key={index} className="border-b border-gray-400">
                                                <div
                                                    onClick={() => toggleQuestion(index)}
                                                    className="flex items-center justify-between py-4 cursor-pointer"
                                                >
                                                    <p className="2xl:text-lg md:text-base text-[#F6E8FB] font-raleway">{index + 1}. {item.question}</p>
                                                    <button className="2xl:text-xl md:text-lg font-semibold text-gray-300">
                                                        {openQuestion === index ? "−" : "+"}
                                                    </button>
                                                </div>
                                                {openQuestion === index && (
                                                    <p className="text-gray-300 font-montserrat text-sm mt-2 mb-4">{item.answer}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-center mt-8 2xl:text-base md:text-sm text-gray-400 cursor-pointer">View All</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%]  hidden sm:block h-auto p-[3vw] sticky top-10">
                        <div className="w-auto flex-col h-[auto] py-[2vw] rounded-3xl bg-[#564A5957] flex items-center justify-center">
                            <h1 className='2xl:text-xl md:text-lg mt-10 font-semibold font-manrope '>Book an online consultation </h1>
                            <h1 className='2xl:text-xl md:text-lg font-semibold font-manrope'>Today</h1>
                            <form className="mt-[2vw] 2xl:text-base md:text-sm px-[2vw] flex flex-col justify-center items-center space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-[16vw] px-4 py-2 r bg-[#2521276B]  border border-[#B7407D80]  rounded-md"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-2   bg-[#2521276B]   border border-[#B7407D80] rounded-md"
                                />
                                <input
                                    type="phone"
                                    placeholder="Your Phone Number"
                                    className="w-full px-4 py-2 r bg-[#2521276B]  border border-[#B7407D80]  rounded-md"
                                />
                                <textarea
                                    placeholder="Your Message"
                                    className="w-full h-32 px-4 py-2 r bg-[#2521276B]  border border-[#B7407D80]  rounded-md resize-none"
                                ></textarea>
                                <Link to="" className='w-[50%] sm:w-[12rem] cursor-pointer mt-[5rem] border-2 border-[#B740A1] gap-4 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3.5rem] group bg-transparent hover:bg-[#B7407D] transition-colors duration-300'>
                                    <span className='text-white 2xl:text-base md:text-sm flex-grow text-center'>submit</span>
                                    <div className='w-[2.5rem] h-[2.5rem] flex justify-center items-center text-white text-xl ml-2 group-hover:bg-white group-hover:text-black rounded-full bg-[#B740A1] mr-1'>
                                        <GoArrowUpRight />
                                    </div>
                                </Link>
                            </form>
                            <h1 className='mt-[3vw] 2xl:text-base md:text-sm font-medium'>Reach us at </h1>
                            <div className='w-full mt-[1vw] flex justify-center items-center gap-[1vw] text-[#811F67] text-xl'>
                                <FaPhoneAlt />
                                <h1 className='text-white 2xl:text-sm md:text-xs font-medium'>+98876654334</h1>
                            </div>
                            <div className='w-full mt-[1vw] flex justify-center items-center gap-[1vw] text-[#811F67] text-xl'>
                                <IoIosMail />
                                <h1 className='text-white 2xl:text-sm md:text-xs  font-medium'>email@gamil.com</h1>
                            </div>
                            <div className='w-full mt-[1vw] flex justify-center items-center gap-[1vw] text-[#3ad345] text-xl'>
                                <FaWhatsapp />
                                <h1 className='text-white 2xl:text-sm md:text-xs  font-medium'>+98876654334</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='2xl:h-[40vw] md:h-[70vw] text-white flex justify-center items-center w-full font-montserrat bg-[#1A0C25]'>
                    <div className="w-full h-[90%] flex justify-center items-center flex-col border-t rounded-[14rem] border-[#B874B580]">
                        <div className='w-full flex-col h-[15vw] justify-center flex items-center'>
                            <div className="">
                                <h1 className='text-center 2xl:text-7xl md:text-5xl text-3xl font-semibold leading-[3rem]'>Get in Touch with Ai.gnosis</h1>
                            </div>
                            <div className='px-[5vw]'>
                                <p className='text-center mt-[2vw] 2xl:text-base md:text-sm text-xs'>We’d love to hear from you! Whether you have questions, feedback, or would like to schedule a visit, our contact form makes it easy to reach out.</p>
                            </div>
                        </div>
                        <div className="w-full h-[45vw] px-[5vw] gap-5 flex flex-col md:flex-row justify-center items-center">
                            <div className="w-[100%] md:w-[40%] h-[90%]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509819!2d144.95592751531588!3d-37.81720997975168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d25f7fa0a5d!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1632822903308!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div className="w-[100%] md:w-[40%] px-[4vw] h-[70%]">
                                <h1 className='2xl:text-base md:text-sm text-xs'>
                                    Simply fill in your details below, and we’ll get back to you as soon as possible. You can also find us on the map, showcasing our headquarters and partner locations. For immediate assistance, feel free to call or email us directly!
                                </h1>

                                <form className="mt-4 2xl:text-base md:text-sm space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-2 border bg-[#2521276B] border-gray-300 rounded-md"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-2 border bg-[#2521276B] border-gray-300 rounded-md"
                                    />
                                    <input
                                        type="phone"
                                        placeholder="Your Phone Number"
                                        className="w-full px-4 py-2 border bg-[#2521276B] border-gray-300 rounded-md"
                                    />
                                    <textarea
                                        placeholder="Your Message"
                                        className="w-full h-32 px-4 py-2 border bg-[#2521276B] border-gray-300 rounded-md resize-none"
                                    ></textarea>
                                    <div className='w-[60vw] md:w-[14rem] cursor-pointer mt-[5rem] border-2 border-[#B740A1] gap-4 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3.5rem] group bg-transparent hover:bg-[#B740A1] transition-colors duration-300'>
                                        <a href="" className='text-white'>Send Message</a>
                                        <div className='w-[2.5rem] h-[2.5rem] justify-center flex items-center text-white text-xl group-hover:bg-white group-hover:text-black rounded-full bg-[#B740A1]'>
                                            <GoArrowUpRight />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Info Section */}
                <div className='w-full gap-[7vw] md:mt-[0vw] bg-[#1A0C25] md:h-[20vw] 2xl:h-[25vw] flex justify-center items-center flex-col md:flex-row'>
                    <div className="2xl:w-[10vw] md:w-[12vw] h-[8vw] md:h-[10vw] text-3xl text-[#731762] bg-[#2d153f] rounded-3xl justify-center items-center flex flex-col mb-5">
                        <FaLocationDot />
                        <h1 className='2xl:text-sm md:text-xs text-center mt-4 text-white px-2'>311, Adarsh Nagar ​Jaipur, Rajasthan ​302004</h1>
                    </div>
                    <div className="2xl:w-[10vw] md:w-[12vw] h-[8vw] md:h-[10vw] text-3xl text-[#731762] bg-[#2d153f] rounded-3xl justify-center items-center flex flex-col mb-5">
                        <IoIosMail />
                        <h1 className='2xl:text-sm md:text-xs text-center mt-4 text-white px-10'>aignosis7@gmail.com</h1>
                    </div>
                    <div className="2xl:w-[10vw] md:w-[12vw] h-[8vw] md:h-[10vw] text-2xl text-[#731762] bg-[#2d153f] rounded-3xl justify-center items-center flex flex-col mb-5">
                        <FaPhoneAlt />
                        <h1 className='2xl:text-sm md:text-xs text-center mt-4 text-white px-4'>+91 94140 47644 +91 88900 47777</h1>
                    </div>
                    <div className="2xl:w-[10vw] md:w-[12vw] h-[8vw] md:h-[10vw] text-3xl text-[#731762] bg-[#2d153f] rounded-3xl justify-center items-center flex flex-col mb-5">
                        <FaCalendarAlt />
                        <h1 className='2xl:text-sm md:text-xs text-center mt-4 text-white px-10'>Schedule an appointment</h1>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="footer">
                    <div className='w-full flex-col md:h-[25vw] 2x:h-[20vw] bg-[#731762] flex justify-start items-center'>
                        <h1 className='tracking-[.5vw] uppercase font-montserrat mt-[5vw] text-xs md:text-base'>Get in Touch or Visit Us</h1>
                        <h1 className='mt-4 tracking-wider text-xs md:text-sm'>Stay connected with us! Follow us for the latest updates, news, and insights. We’d love to engage with you online!</h1>
                        <div className='flex justify-center gap-[4vw] mt-10 items-center'>
                            <div className="w-[5vw] h-[5vw] text-3xl rounded-3xl text-[#731762] bg-[#2d153f] flex justify-center items-center">
                                <FaTwitter />
                            </div>
                            <div className="w-[5vw] h-[5vw] text-3xl rounded-3xl text-[#731762] bg-[#2d153f] flex justify-center items-center">
                                <FaDiscord />
                            </div>
                            <div className="w-[5vw] h-[5vw] text-3xl rounded-3xl text-[#731762] bg-[#2d153f] flex justify-center items-center">
                                <FaMedium />
                            </div>
                        </div>
                        <div className='flex text-center justify-center font-raleway gap-[5vw] mt-4 items-center'>
                            <h1 className='text-xs md:text-sm'>Twitter</h1>
                            <h1 className='ml-5 text-xs md:text-sm'>Discord</h1>
                            <h1 className='ml-5 text-xs md:text-sm'>Medium</h1>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default ServicePage1