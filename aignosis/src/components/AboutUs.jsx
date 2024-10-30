import React from 'react'
import img from '../assets/images/SectionL.png';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='bg-[#1A0C25] font-montserrat text-white'>
            <div className='h-screen w-full '>
                <div className="navbar text-center w-full h-[7rem] flex justify-between items-center px-[12rem]">
                    <div class="relative justify-center items-center inline-block">
                        <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg"></div>
                        <Link to="/" class="relative text-3xl font-semibold tracking-wide text-white z-10">Ai.gnosis</Link>
                    </div>
                    <div className='flex justify-center font-medium items-center gap-[8rem]'>
                        <Link to="/servicepage1">Services</Link>
                        <Link to="/aboutus">About</Link>
                        <Link to="/prices">Prices</Link>
                        <div className='w-[18rem] gap-4 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3.5rem] bg-white'>
                            <Link to="">Book an appointment</Link>
                            <div className='w-[2.5rem] h-[2.5rem] rounded-full bg-[#B740A1]'></div>
                        </div>
                    </div>
                </div>
                <div className='w-full justify-center items-center flex h-[48vw]'>
                    <div className='w-full flex-col h-[35vw] justify-center flex items-center'>
                        <div className="flex justify-center gap-5 items-center">
                            <div className='w-[8rem] h-[1rem] rounded-3xl bg-[#FFCADF21]'></div>
                            <h1 className='text-[#F1C6FE]'>Understanding the Numbers</h1>
                            <div className='w-[8rem] h-[1rem] rounded-3xl bg-[#FFCADF21]'></div>
                        </div>
                        <div className=" justify-center w-full items-center flex flex-col">
                            <h1 className='text-5xl mt-5 font-medium'>Ai.gnosis – Empowering Early Detection</h1>
                            <h1 className='mt-3'>Working together for a brighter future.</h1>
                        </div>
                        <div className='w-[40vw] mt-[2vw] h-[20vw] bg-[#D9D9D9]'>

                        </div>
                        <div className='w-full text-center px-[18vw] mt-[2vw]'>
                            <p>At Ai.gnosis, we are committed to making a positive impact on the lives of children and families through early autism screening and support. Our team harnesses the power of advanced AI to enable early, accessible diagnoses and provide parents with the resources they need for timely intervention. With a focus on compassionate care and innovation, we’re dedicated to guiding families on the path to better understanding and support.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[125vw] px-[10vw] py-[2vw] font-montserrat bg-[#1A0C25] text-white'>
                <div className="w-full h-[95%] rounded-3xl border border-[#dfcbed26]">
                    <div className='w-full justify-center items-center flex h-[16vw]'>
                        <div className='w-full flex-col h-[15vw] justify-center flex items-center'>
                            <div className="flex justify-center gap-5 items-center">
                                <div className='w-[8rem] h-[1rem] rounded-3xl bg-[#FFCADF21]'></div>
                                <h1 className='text-[#F1C6FE]'>Our Project team</h1>
                                <div className='w-[8rem] h-[1rem] rounded-3xl bg-[#FFCADF21]'></div>
                            </div>
                            <div className=" justify-center w-full items-center flex flex-col">
                                <h1 className='text-5xl mt-5 font-medium'>The Minds Behind Ai.gnosis</h1>
                                <h1 className='mt-3'> Working together for a brighter future.</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[25vw] gap-[7vw] flex justify-center items-center'>
                        <div className="w-[12vw]">
                            <div className='w-[12vw] h-[14vw] bg-[#D9D9D947]'>

                            </div>
                            <div className='w-full mt-4'>
                                <h1 className='text-2xl'>Dr.Aboobacker</h1>
                                <h1 className='mt-3'>Neurosurgeon</h1>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                            </div>
                        </div>
                        <div className="w-[12vw]">
                            <div className='w-[12vw] h-[14vw] bg-[#D9D9D947]'>

                            </div>
                            <div className='w-full mt-4'>
                                <h1 className='text-2xl'>Dr.Aboobacker</h1>
                                <h1 className='mt-3'>Neurosurgeon</h1>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                            </div>
                        </div>
                        <div className="w-[12vw]">
                            <div className='w-[12vw] h-[14vw] bg-[#D9D9D947]'>

                            </div>
                            <div className='w-full mt-4'>
                                <h1 className='text-2xl'>Dr.Aboobacker</h1>
                                <h1 className='mt-3'>Neurosurgeon</h1>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-full justify-center items-center flex h-[8vw]'>
                        <div className='w-full flex-col h-[15vw] justify-center flex items-center'>
                            <div className=" justify-center w-full items-center flex flex-col">
                                <h1 className='text-5xl mt-5 font-medium'>Advisors</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[25vw] gap-[7vw] flex justify-center items-center'>
                        <div className="w-[12vw]">
                            <div className='w-[12vw] h-[14vw] bg-[#D9D9D947]'>

                            </div>
                            <div className='w-full mt-4'>
                                <h1 className='text-2xl'>Dr.Aboobacker</h1>
                                <h1 className='mt-3'>Neurosurgeon</h1>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                            </div>
                        </div>
                        <div className="w-[12vw]">
                            <div className='w-[12vw] h-[14vw] bg-[#D9D9D947]'>

                            </div>
                            <div className='w-full mt-4'>
                                <h1 className='text-2xl'>Dr.Aboobacker</h1>
                                <h1 className='mt-3'>Neurosurgeon</h1>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                            </div>
                        </div>
                        <div className="w-[12vw]">
                            <div className='w-[12vw] h-[14vw] bg-[#D9D9D947]'>

                            </div>
                            <div className='w-full mt-4'>
                                <h1 className='text-2xl'>Dr.Aboobacker</h1>
                                <h1 className='mt-3'>Neurosurgeon</h1>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[25vw] mt-[5vw] gap-[7vw] flex justify-center items-center'>
                        <div className="w-[12vw]">
                            <div className='w-[12vw] h-[14vw] bg-[#D9D9D947]'>

                            </div>
                            <div className='w-full mt-4'>
                                <h1 className='text-2xl'>Dr.Aboobacker</h1>
                                <h1 className='mt-3'>Neurosurgeon</h1>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                            </div>
                        </div>
                        <div className="w-[12vw]">
                            <div className='w-[12vw] h-[14vw] bg-[#D9D9D947]'>

                            </div>
                            <div className='w-full mt-4'>
                                <h1 className='text-2xl'>Dr.Aboobacker</h1>
                                <h1 className='mt-3'>Neurosurgeon</h1>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                            </div>
                        </div>
                        <div className="w-[12vw]">
                            <div className='w-[12vw] h-[14vw] bg-[#D9D9D947]'>

                            </div>
                            <div className='w-full mt-4'>
                                <h1 className='text-2xl'>Dr.Aboobacker</h1>
                                <h1 className='mt-3'>Neurosurgeon</h1>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                            </div>
                        </div>
                        <div className="w-[12vw]">
                            <div className='w-[12vw] h-[14vw] bg-[#D9D9D947]'>

                            </div>
                            <div className='w-full mt-4'>
                                <h1 className='text-2xl'>Dr.Aboobacker</h1>
                                <h1 className='mt-3'>Neurosurgeon</h1>
                                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[20vw] flex-col flex justify-start items-center">
                <div className="font-medium  text-3xl">Our Partners</div>
                <img className='mt-[4vw]' src={img} alt="" />
            </div>
            <div className='h-[60vw] text-white flex justify-center items-center w-full font-montserrat bg-[#1A0C25]'>
                <div className="w-full h-[100%] flex justify-center items-center flex-col border-t rounded-full border-[#B874B580]">
                    <div className='w-full flex-col h-[15vw] justify-center flex items-center'>
                        <div className=" mt-[2rem]">
                            <h1 className='text-center text-7xl tracking-tight font-semibold leading-[3rem]'>Get in Touch with Ai.gnosis</h1>
                        </div>
                        <div className='px-[25rem] mt-[2rem]'>
                            <p className='text-center'>We’d love to hear from you! Whether you have questions, feedback, or would like to schedule a visit, our contact form makes it easy to reach out.</p>
                        </div>
                    </div>
                    <div className="w-full h-[30vw] px-[10vw] gap-5 flex justify-center items-center">
                        <div className="left w-[40%] h-[85%]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509819!2d144.95592751531588!3d-37.81720997975168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d25f7fa0a5d!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1632822903308!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div className="right w-[40%] px-[2vw] h-[85%]">
                            <h1>
                                Simply fill in your details below, and we’ll get back to you as soon as possible. You can also find us on the map, showcasing our headquarters and partner locations. For immediate assistance, feel free to call or email us directly!
                            </h1>

                            <form className="mt-4 space-y-4">
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
                                <div className='w-[14rem] mt-[5rem] border-2 border-[#B740A1] gap-4 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3.5rem] bg-transparent'>
                                    <a href="" className='text-white'>Learn more</a>
                                    <div className='w-[2.5rem] h-[2.5rem] rounded-full bg-[#B740A1]'></div>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
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
    )
}

export default AboutUs