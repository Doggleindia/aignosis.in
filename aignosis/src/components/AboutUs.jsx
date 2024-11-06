import React from 'react';
import img from '../assets/images/SectionL.png';
import { Link } from 'react-router-dom';
import Header from './Header';
import image1 from '../assets/members/image1.jpg'
import image2 from '../assets/members/image2.png'
import image3 from '../assets/members/image3.png'
import image4 from '../assets/members/image4.png'
import image5 from '../assets/members/image5.png'
import image6 from '../assets/members/image6.png'
import image7 from '../assets/members/image7.png'
import image9 from '../assets/members/image9.png'
import about from '../assets/aboutus.png'

import archit_img from '../assets/members/archit_img.jpg'
import Partner from './Partner';

const Divider = ({ title }) => (
    <div className="flex 2xl:mt-[4vw] md:mt-[14vw] justify-center gap-5 items-center mb-10">
        <div className="w-[8rem] h-[1rem] rounded-3xl bg-[#FFCADF21]"></div>
        <h1 className="text-[#F1C6FE] 2xl:text-base md:text-sm">{title}</h1>
        <div className="w-[8rem] h-[1rem] rounded-3xl bg-[#FFCADF21]"></div>
    </div>
);

const TeamMember = ({ name, img, description, height }) => (
    <div className="w-[80%] sm:w-[20vw] md:w-[15vw] text-center flex flex-col items-center mx-auto">
        <div className="w-full h-[40vw] sm:h-[20vw] md:h-[16vw] bg-[#D9D9D947] flex justify-center items-center">
            <img src={img} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="w-full mt-2 flex flex-col items-center">
            <h1 className={`text-lg sm:text-xl md:text-2xl ${height || 'h-[3rem]'} flex items-center justify-center`}>
                {name}
            </h1>
            <p className="text-xs sm:text-sm uppercase h-[2rem] flex items-center justify-center">
                {description}
            </p>
        </div>
    </div>
);

const AboutUs = () => {
    return (
        <div className="bg-[#1A0C25] font-montserrat text-white">
            <div className="min-h-screen w-full">
                <Header />
                <section className="flex  flex-col items-center h-auto md:h-[48vw] justify-center px-4 md:px-0">
                    <Divider title="Understanding the Numbers" />
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl  font-medium">
                            Ai.gnosis – Empowering Early Detection
                        </h1>
                        <p className="mt-3 text-sm sm:text-base">Working together for a brighter future.</p>
                    </div>
                    <img src={about} alt="About Us" className="w-[90%] md:w-[40vw] h-[40vw] md:h-[20vw] object-cover mt-[2vw]" />
                    <p className="w-[90%] md:w-[60vw] text-center mt-[2vw] text-xxxs sm:text-xxs md:text-base">
                        At Ai.gnosis, we are committed to making a positive impact on the lives of children and families
                        through early autism screening and support. Our team harnesses the power of advanced AI to enable early,
                        accessible diagnoses and provide parents with the resources they need for timely intervention. With a
                        focus on compassionate care and innovation, we’re dedicated to guiding families on the path to better
                        understanding and support.
                    </p>
                </section>
            </div>

            <section className="w-full h-auto px-[5vw] md:px-[10vw] py-[2vw] bg-[#1A0C25]">
                <div className="w-full rounded-3xl border border-[#dfcbed26] p-4">
                    <Divider title="Our Project Team" />
                    <div className="text-center mb-10">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium">The Minds Behind Ai.gnosis</h1>
                        <p className="mt-3 text-sm sm:text-base">Working together for a brighter future.</p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-5 md:gap-[7vw]">
                        <TeamMember name="Divyansh Mangal" img={image2} description="CO FOUNDER" />
                        <TeamMember name="Raksheet Jain" img={image3} description="CO FOUNDER" />
                    </div>
                    <div className='flex justify-center items-center my-10'>
                        <h2 className='font-raleway text-[#FFFFFF] text-5xl'>Advisors</h2>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-5 md:gap-[7vw]">
                        <TeamMember name="Dr. S. Sitaraman" img={image1} description="DIRECTOR & DEVELOPMENTAL NEUROLOGIST" height="h-[6rem]" />
                        <TeamMember name="Dr. Ramesh Agrawal" img={image6} description="HOD mother & child block, AIIMS Delhi" height="h-[6rem]" />
                        <TeamMember name="Dr. Rajesh Jain" img={image4} description="Consultant Pediatrician Raksheet Hospital" height="h-[6rem]" />
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-5 md:gap-[5vw] mt-10 mb-5 pb-5 ">
                        <TeamMember name="Dr. Dhananajay Mangal" img={image5} description="Consultant Pediatrician Babylon Hospital" height="h-[6rem]" />
                        <TeamMember name="Dr. Anami Gour" img={image7} description="Consultant Paediatric Intensive Care, London" height="h-[6rem]" />
                        <TeamMember name="Mr. Rajneesh Bhandari" img={image9} description="NeuroEquilibrium Diagnostics Pvt. LMT." height="h-[6rem]" />
                        <TeamMember name="Mr. Arcchit Jain" img={archit_img} description="Vice President, Goldman Sachs" height="h-[6rem]" />
                    </div>

                </div>
            </section>

            <div className='mt-[3vw]'>
                <Partner />
            </div>

            <section className="w-full h-auto flex justify-center items-center bg-[#1A0C25] py-10 md:py-20 px-4">
                <div className="w-full md:w-[80%] text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight">
                        Get in Touch with Ai.gnosis
                    </h1>
                    <p className="mt-8 text-sm sm:text-base md:text-lg">
                        We’d love to hear from you! Whether you have questions, feedback, or would like to schedule a visit, our contact form makes it easy to reach out.
                    </p>

                    <div className="flex flex-wrap mt-10 gap-5">
                        <div className="w-full md:w-[45%] h-[40vw] md:h-[30vw]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509819!2d144.95592751531588!3d-37.81720997975168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d25f7fa0a5d!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1632822903308!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Map Location"
                            ></iframe>
                        </div>
                        <div className="w-full md:w-[45%] text-left">
                            <p className="text-sm md:text-base">
                                Simply fill in your details below, and we’ll get back to you as soon as possible. You can also find us on the map. For immediate assistance, feel free to call or email us directly!
                            </p>
                            <form className="mt-4 space-y-4">
                                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border bg-[#2521276B] border-gray-300 rounded-md text-sm" />
                                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border bg-[#2521276B] border-gray-300 rounded-md text-sm" />
                                <textarea placeholder="Your Message" className="w-full px-4 py-2 border bg-[#2521276B] border-gray-300 rounded-md text-sm h-32"></textarea>
                                <button type="submit" className="px-6 py-2 bg-[#FFE72E] text-[#1A0C25] font-semibold rounded-md">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
