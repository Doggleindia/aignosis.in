import React from 'react';

const PartnershipPage = () => {
    return (
        <div className='h-[120vw] text-white flex flex-col w-full font-montserrat bg-[#1A0C25]'>
            <div className="w-full h-[100%] flex justify-center items-center flex-col border-t rounded-[30rem] border-[#B874B580]">
                <div className='w-full flex-col h-[15vw] justify-center flex items-center'>
                    <div className="flex justify-center gap-5 items-center">
                        <div className="w-[8rem] h-[1rem]  rounded-3xl bg-[#FFCADF21]"></div>
                        <h1 className="text-[#EDD0E7]">Connect with Sales</h1>
                        <div className="w-[8rem] h-[1rem] rounded-3xl bg-[#FFCADF21]"></div>
                    </div>
                    <div className=" mt-[2rem] px-[8vw]">
                        <h1 className='text-center text-5xl tracking-tight font-semibold leading-[3rem]'>If you are a healthcare provider, payor, or caregiver and want to partner with Ai.gnosis, let’s talk!</h1>
                    </div>
                    <div className='px-[25rem] mt-[2rem]'>
                        <p className='text-center'>Emphasis on partnerships within India, focusing on integration with local healthcare.</p>
                    </div>
                </div>
                <div className='w-[60vw] relative justify-center items-center mt-10 gap-[2vw] flex flex-col h-[30vw]'>
                    <div className='w-full h-[50%] flex justify-between items-center'>
                        <div
                            className="w-[16vw] h-full p-[2vw] rounded-3xl"
                            style={{
                                background: "radial-gradient(circle, #070B0E, #300834)",
                            }}
                        >
                            <h1 className="text-xl font-semibold text-white">Partnership Benefits Overview</h1>
                            <h1 className="mt-2 text-white">
                                Discover the advantages of collaborating with Ai.gnosis, including enhanced patient care, access to cutting-edge tools, and opportunities for joint research initiatives.
                            </h1>
                        </div>
                        <div
                            className="w-[16vw] h-full p-[2vw] rounded-3xl"
                            style={{
                                background: "radial-gradient(circle, #070B0E, #300834)",
                            }}
                        >
                            <h1 className="text-xl font-semibold text-white">Scheduling Options</h1>
                            <h1 className="mt-2 text-white ">
                            Schedule a consultation with our sales team directly through our integrated calendar, making it convenient for you to discuss partnership opportunities.
                            </h1>
                        </div>
                    </div>
                    <div className='w-full h-[50%] flex justify-between items-center'>
                        <div
                            className="w-[16vw] h-full p-[2vw] rounded-3xl"
                            style={{
                                background: "radial-gradient(circle, #070B0E, #300834)",
                            }}
                        >
                            <h1 className="text-xl font-semibold text-white">Quick Contact Form</h1>
                            <h1 className="mt-2 text-white">
                            Discover the advantages of collaborating with Ai.gnosis, including enhanced patient care, access to cutting-edge tools, and opportunities for joint research initiatives.
                            </h1>
                        </div><div
                            className="w-[16vw] h-full p-[2vw] rounded-3xl"
                            style={{
                                background: "radial-gradient(circle, #070B0E, #300834)",
                            }}
                        >
                            <h1 className="text-xl font-semibold text-white">Resource Downloads</h1>
                            <h1 className="mt-2 text-white">
                            Access valuable resources, such as brochures and case studies, to learn more about our services and the impact of Ai.gnosis in autism detection.
                            </h1>
                        </div>
                    </div>
                    <div className='absolute w-[15vw] h-[15vw] bg-[#D9D9D9]'>
                    </div>
                </div>
            </div>
            <div>
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
            <div className="footer mt-[8vw]">
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
};

export default PartnershipPage;
