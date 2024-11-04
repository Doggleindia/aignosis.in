import React from 'react';
import img from '../assets/images/SectionL.png';
import { Link } from 'react-router-dom';
import Header from './Header';
import image1 from '../assets/members/image1.png'
import image2 from '../assets/members/image2.png'
import image3 from '../assets/members/image3.png'
import image4 from '../assets/members/image4.png'
import image5 from '../assets/members/image5.png'
import image6 from '../assets/members/image6.png'
import image7 from '../assets/members/image7.png'
import image9 from '../assets/members/image9.png'


const Divider = ({ title }) => (
    <div className="flex justify-center gap-5 items-center sm:mb-10 sm:mt-10">
        <div className="w-[8rem] h-[1rem] rounded-3xl bg-[#FFCADF21]"></div>
        <h1 className="text-[#F1C6FE]">{title}</h1>
        <div className="w-[8rem] h-[1rem] rounded-3xl bg-[#FFCADF21]"></div>
    </div>
);

const TeamMember = ({ name, img, description }) => (
    <div className="w-[80%] sm:w-[20vw] md:w-[15vw] text-center">
        <div className="w-full h-[40vw] sm:h-[20vw] md:h-[16vw] bg-[#D9D9D947]">
            <img src={img} className='w-full h-full' alt="" />
        </div>
        <div className="w-full mt-4">
            <h1 className="text-lg sm:text-xl md:text-2xl">{name}</h1>
            <h2 className="mt-3 text-sm sm:text-base">{""}</h2>
            <p className="text-xs sm:text-sm  uppercase">{description}</p>
        </div>
    </div>
);

const AboutUs = () => {
    return (
        <div className="bg-[#1A0C25] font-montserrat text-white">
            <div className="min-h-screen w-full">
                <Header />
                <section className="flex flex-col items-center h-auto md:h-[48vw] justify-center px-4 md:px-0">
                    <Divider title="Understanding the Numbers" />
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl mt-5 font-medium">
                            Ai.gnosis – Empowering Early Detection
                        </h1>
                        <p className="mt-3 text-sm sm:text-base">Working together for a brighter future.</p>
                    </div>
                    <div className="w-[90%] md:w-[40vw] mt-[2vw] h-[40vw] md:h-[20vw] bg-[#D9D9D9]"></div>
                    <p className="w-[90%] md:w-[60vw] text-center mt-[2vw] text-xs sm:text-sm md:text-base">
                        At Ai.gnosis, we are committed to making a positive impact on the lives of children and families 
                        through early autism screening and support. Our team harnesses the power of advanced AI to enable early, 
                        accessible diagnoses and provide parents with the resources they need for timely intervention. With a 
                        focus on compassionate care and innovation, we’re dedicated to guiding families on the path to better 
                        understanding and support.
                    </p>
                </section>
            </div>

            <section className="w-full h-auto px-[5vw] md:px-[10vw] py-[2vw] bg-[#1A0C25] ">
                <div className="w-full rounded-3xl border border-[#dfcbed26] p-4">
                    <Divider title="Our Project Team" />
                    <div className="text-center mb-10">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium">The Minds Behind Ai.gnosis</h1>
                        <p className="mt-3 text-sm sm:text-base">Working together for a brighter future.</p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-5 md:gap-[7vw]">
                        <TeamMember name="Dr. S. ​Sitaraman" img={image1} description="DIRECTOR & DEVELOPMENTAL NEUROLOGIST" />
                        <TeamMember name="Divyansh ​Mangal"  img={image2} description="CO FOUNDER." />
                        <TeamMember name="Raksheet ​Jain" img={image3} description="CO FOUNDER." />
                    </div>
                  <div className='flex justify-center items-center m-5'>
                  <h2 className='font-raleway text-[#FFFFFF]  text-5xl'>Advisors</h2>
                  </div>
                

                    <div className="flex flex-wrap justify-center items-center gap-5 md:gap-[7vw]">
                        <TeamMember name="Dr. Rajesh ​Jain" img={image4} description="Director, Consultant ​Pediatrician Raksheet ​Hospital." />
                        <TeamMember name="Dr. Dhananajay ​K Mangal" img={image5} description="Director, Consultant ​Pediatrician Babylon ​Hospital." />
                        <TeamMember name="Dr. Ramesh ​Agrawal" img={image6} description="Dr. Ramesh Agrawal ​HOD mother & child ​block, AIIMS Delhi."  />
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-5 md:gap-[5vw] mt-10 my-auto">
                        <TeamMember name="Dr. Anami ​Gour" img={image7} description="Consultant Paediatric ​Intensive Care, St George’s ​University of London." />
                        <TeamMember name="Mr. Shiv ​Kumar" title="Advisor" description="CEO, Kidaura Forbes ​30 under 30 (Social ​Impact)
." />
                        <TeamMember name="Mr. Rajneesh ​Bhandari" img={image9} description="Director, ​NeuroEquilibrium ​Diagnostics Pvt. LMT." />
                        <TeamMember name="Mr. Arcchit ​Jain" title="Advisor" description="Vice President ​Goldman Sachs." />
                    </div>

                    
                </div>
            </section>

            <section className="w-full flex flex-col items-center py-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium">Our Partners</h1>
                <img className="mt-10 w-[80%] md:w-[50%]" src={img} alt="Our Partners" />
            </section>

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
                                Simply fill in your details below, and we’ll get back to you as soon as possible. 
                                You can also find us on the map. For immediate assistance, feel free to call or email us directly!
                            </p>
                            <form className="mt-4 space-y-4">
                                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border bg-[#2521276B] border-gray-300 rounded-md text-sm" />
                                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border bg-[#2521276B] border-gray-300 rounded-md text-sm" />
                                <input type="phone" placeholder="Your Phone Number" className="w-full px-4 py-2 border bg-[#2521276B] border-gray-300 rounded-md text-sm" />
                                <textarea placeholder="Your Message" className="w-full h-32 px-4 py-2 border bg-[#2521276B] border-gray-300 rounded-md resize-none text-sm"></textarea>
                                <div className="w-[14rem] mt-[5rem] border-2 border-[#B740A1] rounded-full flex justify-center items-center gap-4 h-[3.5rem] bg-transparent">
                                    <Link to="#" className="text-white">Learn more</Link>
                                    <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-[#B740A1]"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer">
                <div className='w-full flex-col  h-[20vw] bg-[#731762] flex justify-start items-center'>
                    <h1 className='tracking-[.5vw] uppercase font-montserrat mt-[5vw]'>Get in Touch or Visit Us</h1>
                    <h1 className='mt-4 tracking-wider'>Stay connected with us! Follow us for the latest updates, news, and insights. We’d love to engage with you online!</h1>
                    <div className='flex justify-center gap-[4vw] mt-10 items-center'>
                        <div className="w-[5vw] h-[5vw] rounded-3xl bg-[#483253]"></div>
                        <div className="w-[5vw] h-[5vw] rounded-3xl bg-[#483253]"></div>
                        <div className="w-[5vw] h-[5vw] rounded-3xl bg-[#483253]"></div>
                    </div>
                    </div>
                    </div>

        </div>
    );
}

export default AboutUs;
