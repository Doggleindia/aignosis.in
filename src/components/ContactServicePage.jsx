import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { FaMapMarkerAlt, FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const ContactServicePage = () => {
  return (
    <>
      {/* Contact Form Section */}
      <div className="2xl:h-[50vw] flex w-full items-center justify-center bg-[#1A0C25] font-montserrat text-white max-sm:mt-[60px] md:h-[70vw]">
        <div className="flex h-[90%] w-full flex-col items-center justify-center rounded-[14rem] border-t border-[#B874B580]">
          <div className="flex h-[15vw] w-full flex-col items-center justify-center">
            <div className="bg-[#1A0C25]">
              <span className="2xl:text-7xl text-center text-3xl font-semibold leading-[3rem] max-sm:pb-[76px] md:text-5xl">
                Get in Touch with Aignosis
              </span>
            </div>
            <div className="px-[5vw]">
              <p className="2xl:text-base mt-[2vw] text-center text-xs md:text-sm">
                We’d love to hear from you! Whether you have questions, feedback, or would like to schedule a visit, our
                contact form makes it easy to reach out.
              </p>
            </div>
          </div>
          <div className="flex h-[45vw] w-full flex-col items-center justify-center gap-5 bg-[#1A0C25] px-[5vw] md:flex-row">
            <div className="h-[90%] w-[100%] md:w-[40%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1634778192933!2d75.8266295!3d26.8983064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6958f6f2e59%3A0xe378dd988aba33b0!2sBabylon%20Children&#39;s%20Hospital%20%7C%20BEST%20CHILD%20HOSPITAL%20IN%20JAIPUR%20%7C%20CHILD%20DOCTOR%20IN%20JAIPUR!5e0!3m2!1sen!2sin!4v1731096209878!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="h-[70%] w-[100%] px-[4vw] md:w-[40%]">
              <span className="2xl:text-base text-xs md:text-sm">
                Simply fill in your details below, and we’ll get back to you as soon as possible. You can also find us
                on the map, showcasing our headquarters and partner locations. For immediate assistance, feel free to
                call or email us directly!
              </span>
              <div className="max-sm:hidden">
                <form className="2xl:text-base mt-4 space-y-4 max-sm:hidden md:text-sm">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-md border-2 border-[#B740A1] bg-[#2521276B] px-4 py-2"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-md border-2 border-[#B740A1] bg-[#2521276B] px-4 py-2"
                  />
                  <input
                    type="phone"
                    placeholder="Your Phone Number"
                    className="w-full rounded-md border-2 border-[#B740A1] bg-[#2521276B] px-4 py-2"
                  />
                  <textarea
                    placeholder="Your Message"
                    className="h-32 w-full resize-none rounded-md border-2 border-[#B740A1] bg-[#2521276B] px-4 py-2"
                  ></textarea>
                  <div className="group mt-[5rem] flex h-[3.5rem] w-[60vw] cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-[#B740A1] bg-transparent text-[#0D0C0A] transition-colors duration-300 hover:bg-pink-500 max-sm:m-auto max-sm:mt-[11px] md:w-[14rem]">
                    <a href="" className="text-white">
                      Send Message
                    </a>
                    <div className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-[#B740A1] text-xl text-white group-hover:bg-white group-hover:text-black">
                      <GoArrowUpRight />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1A0C25] max-md:hidden max-sm:w-full max-sm:px-[18px] max-sm:pt-[52px]">
        <form className="2xl:text-base mt-4 space-y-4 md:hidden md:text-sm">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-md border-2 border-[#B740A1] bg-[#2521276B] px-4 py-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-md border-2 border-[#B740A1] bg-[#2521276B] px-4 py-2"
          />
          <input
            type="phone"
            placeholder="Your Phone Number"
            className="w-full rounded-md border-2 border-[#B740A1] bg-[#2521276B] px-4 py-2"
          />
          <textarea
            placeholder="Your Message"
            className="h-32 w-full resize-none rounded-md border-2 border-[#B740A1] bg-[#2521276B] px-4 py-2"
          ></textarea>
          <div className="group mt-[5rem] flex h-[3.5rem] w-[60vw] cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-[#B740A1] bg-transparent text-[#0D0C0A] transition-colors duration-300 hover:bg-pink-500 max-sm:m-auto max-sm:mt-[11px] md:w-[14rem]">
            <a href="" className="text-white">
              Send Message
            </a>
            <div className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-[#B740A1] text-xl text-white group-hover:bg-white group-hover:text-black">
              <GoArrowUpRight />
            </div>
          </div>
        </form>
      </div>

      {/* Contact Info Section */}
      {/* <div className='w-full max-sm:w-[100%] max-sm:pt-[60px]  max-sm:p-[25px]  gap-[7vw] md:mt-[0vw] bg-[#1A0C25] md:h-[20vw] 2xl:h-[25vw] flex justify-center items-center flex-col md:flex-row'>
                <div className="2xl:w-[10vw] md:w-[12vw] h-[8vh] max-sm:h-[14vh] md:h-[10vw] text-2xl text-[#731762] bg-[#2d153f] rounded-3xl justify-center items-center flex flex-col mb-5">
                    <FaMapMarkerAlt />
                    <h1 className='2xl:text-sm md:text-xs text-center mt-4 text-white px-2'>311, Adarsh Nagar ​Jaipur, Rajasthan ​302004</h1>
                </div>
                <div className="2xl:w-[10vw] md:w-[12vw] h-[8vw] md:h-[10vw] max-sm:h-[14vh] text-2xl text-[#731762] bg-[#2d153f] rounded-3xl justify-center items-center flex flex-col mb-5">
                    <IoIosMail />
                    <h1 className='2xl:text-sm md:text-xs text-center mt-4 text-white px-10'>aignosis7@gmail.com</h1>
                </div>
                <div className="2xl:w-[10vw] md:w-[12vw] h-[8vw] max-sm:h-[14vh] md:h-[10vw] text-2xl text-[#731762] bg-[#2d153f] rounded-3xl justify-center items-center flex flex-col mb-5">
                    <FaPhoneAlt />
                    <h1 className='2xl:text-sm md:text-xs text-center mt-4 text-white px-4'>+91 94140 47644 +91 88900 47777</h1>
                </div>
                <div className="2xl:w-[10vw] md:w-[12vw] max-sm:h-[14vh] h-[8vw] md:h-[10vw] text-2xl text-[#731762] bg-[#2d153f] rounded-3xl justify-center items-center flex flex-col mb-5">
                    <FaCalendarAlt />
                    <h1 className='2xl:text-sm md:text-xs text-center mt-4 text-white px-10'>Schedule an appointment</h1>
                </div>
            </div> */}
    </>
  );
};

export default ContactServicePage;
