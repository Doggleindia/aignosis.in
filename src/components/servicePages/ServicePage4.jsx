import React, { useState } from 'react';
import img from '../../assets/images/SectionL.png';
import { GoArrowUpRight } from 'react-icons/go';
import { CiPhone } from 'react-icons/ci';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { FaWhatsapp } from 'react-icons/fa';
import crossIcon from '../../assets/images/cross.png';
import { FaLocationDot } from 'react-icons/fa6';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa6';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import think_img from '../../assets/think_img.png';
import pos1 from '../../assets/images/pos1.png';
import pos2 from '../../assets/images/pos2.png';
import pos3 from '../../assets/images/pos3.png';
import pos4 from '../../assets/images/pos4.png';
import arrow1 from '../../assets/images/Arrow 3.png';
import arrow2 from '../../assets/images/Arrow 4.png';
import arrow3 from '../../assets/images/Arrow 5.png';
import cloud1 from '../../assets/images/cloud1.png';
import cloud2 from '../../assets/images/cloud2.png';
import cloud3 from '../../assets/images/cloud3.png';
import cloud4 from '../../assets/images/cloud4.png';
import ScrollToTop from '../ScrollToTop';
import { useEffect } from 'react';
import ContactServicePage from '../ContactServicePage';
import BlogFooter from '../BlogPages/BlogFooter';
import service4 from '../../assets/servicepage/occupation.jpg';
import ContactPage from '../ContactPage';
import SEO from '../config/Seo';
import Newnavbar from '../Newnavbar';
import WhatsAppButton from '../WhatsAppButton';

const ServicePage4 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: 'How do I know if my child needs behavior therapy?',
      answer:
        'If your child shows signs of frequent emotional distress, difficulty with concentration, anger, or struggles in social interactions, behavior therapy may help address these challenges.',
    },
    {
      question: 'At what age can my child begin therapy?',
      answer:
        'Children as young as 3 can benefit from behavior therapy, but it’s effective for any age group when emotional and social skills need support.',
    },
    {
      question: 'How soon will I see progress?',
      answer:
        'Results vary by child, but consistent practice between sessions often leads to noticeable improvements within a few weeks.',
    },
    {
      question: 'Will my child stay engaged during sessions?',
      answer:
        'Our specialists use age-appropriate techniques and engaging activities, ensuring sessions are interactive and enjoyable for children.',
    },
    {
      question: 'What happens in a typical speech therapy session?',
      answer:
        'Each session is tailored to your child’s needs, including conversational practice, sound modeling, vocabulary exercises, and interactive play to build communication skills.',
    },
  ];
  const Divider = ({ title }) => (
    <div className="mb-8 mt-10 flex flex-row items-center justify-center space-x-4">
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
        }}
      ></span>
      <h1 className="2xl:text-[20px] font-medium text-[#F1C6FE] max-sm:text-sm md:text-sm">{title}</h1>
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
        }}
      ></span>
    </div>
  );

  return (
    <>
      <SEO
        pageTitle={'Occupational Therapy for Autism | Aignosis'}
        canonicalUrl={'https://aignosis.in/occupational-therapy'}
        metaDescription={
          'Explore effective occupational therapy for autism at Aignosis. Enhance daily living skills and improve independence with expert therapy solutions.'
        }
      />

      <div className="bg-[#1A0C25] font-montserrat text-white">
        <Header />
        <WhatsAppButton />
        <div className="h-full w-full">
          <div className="flex h-auto w-full items-center justify-center bg-[#1A0C25] px-4 sm:px-0">
            <div className="2xl:mt-[6vw] relative z-10 flex h-auto w-full flex-col items-center justify-center md:mt-[12vh]">
              {/* Title and Gradient Bars */}
              <Divider title="Services" />

              {/* Headline and Subtitle */}
              <div className="flex flex-col items-center text-center">
                <h1 className="mt-2 font-raleway text-lg font-medium sm:text-4xl md:text-5xl">
                  Help Your Child Build Everyday Skills
                </h1>
                <h2 className="mt-2 text-xs max-sm:mb-2 sm:mt-3 sm:text-base">
                  Online Speech Therapy with 24/7 Support in 8 Languages!
                </h2>
              </div>
              {/* Image Section */}
              <div className="mb-20 mt-[2vw] h-[200px] w-[90%] overflow-hidden rounded-lg bg-[#D9D9D9] max-sm:mb-4 sm:mb-[50px] sm:h-[20vw] sm:w-[40vw]">
                <img src={service4} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
              {/* CTA and Rating */}
              <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
                <div className="group flex h-[3rem] w-full cursor-pointer items-center justify-between gap-2 rounded-full border-2 border-[#B740A1] bg-transparent px-4 text-[#0D0C0A] transition-colors duration-300 hover:bg-[#B7407D] max-sm:w-[50%] sm:h-[3.5rem] sm:w-[14rem] sm:gap-4">
                  <Link to="/test" className="text-xs text-white sm:text-base">
                    Get In Touch
                  </Link>
                  <div className="flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-[#B740A1] text-lg text-white group-hover:bg-white group-hover:text-black sm:h-[2.5rem] sm:w-[2.5rem]">
                    <GoArrowUpRight />
                  </div>
                </div>
                <h2 className="text-center text-xs font-semibold text-white sm:text-base">Rated 4.5/5 by Parents</h2>
              </div>
            </div>
            <div className="absolute inset-1 mt-[5vw] rounded-full bg-[#B740A1] opacity-20 blur-[200px]"></div>
          </div>

          <div className="flex min-h-screen w-full flex-wrap items-start justify-center gap-[3vw] bg-[#1A0C25] px-[10vw] font-montserrat text-white max-sm:h-auto md:flex-nowrap">
            <div className="h-auto w-full p-[3vw] md:w-[50%]">
              <div className="mt-[3vw] flex h-auto w-[100%] flex-col text-right font-raleway">
                <div>
                  <h2 className="2xl:text-2xl text-left text-lg font-semibold md:text-xl">
                    What is Occupational Therapy?
                  </h2>
                  <h2 className="2xl:text-base mr-[1vw] mt-6 text-left text-xs md:text-sm">
                    Occupational therapy helps children develop essential skills to handle daily tasks through motor
                    skill development, balance, and sensory management, addressing hyperactivity and coordination
                    challenges.
                  </h2>
                </div>
                <div className="mt-6">
                  <h2 className="2xl:text-2xl text-left text-lg font-semibold md:text-xl">
                    Why is Early Diagnosis Important?
                  </h2>
                  <h2 className="2xl:text-base mr-[1vw] mt-6 text-left text-xs md:text-sm">
                    It allows us to develop customized therapy solutions and ensure a smooth transition into school.
                  </h2>
                </div>
                <div className="mt-6">
                  <h2 className="2xl:text-2xl text-left text-lg font-medium md:text-xl">Our therapy activities:</h2>
                  <div className="2xl:text-base mt-6 pl-[2vw] text-left text-xs md:text-sm">
                    {[
                      'Interactive play with games and visuals',
                      'Gross motor exercises for balance and muscle control',
                      'Bilateral coordination exercises',
                      'Fine motor skills and grip strength activities',
                      'Techniques to reduce hyperactivity',
                      'Calming exercises and sensory integration activities',
                    ].map((service, index) => (
                      <h2 key={index} className="mr-[1vw] mt-6">
                        {service}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-[4vw] h-[auto] w-[100%] flex-col rounded-3xl border border-[#B7407D80] bg-[#564A5952] px-[2vw] py-[2vw]">
                <h2 className="2xl:text-xl mt-10 text-center font-raleway text-base font-semibold uppercase md:text-lg">
                  “The Best Time to Start is NOW”
                </h2>
                <h2 className="2xl:text-base mt-3 pl-[1vw] text-center text-xs md:text-sm">
                  Support for Every Age Group
                </h2>
                <div className="mt-6 flex flex-col items-center justify-center pl-[2vw]">
                  <h2 className="2xl:text-xl pr-[14vw] text-left font-raleway text-base font-medium md:text-lg">
                    We Address:
                  </h2>
                  <div className="2xl:text-base mt-6 pl-[1vw] text-xs md:text-sm">
                    {[
                      'Sensory Processing Disorder',
                      'Autism Spectrum Disorder',
                      'Delays in Walking',
                      'ADHD',
                      'Weak Grip & Handwriting Challenges',
                      'Balance & Coordination Issues',
                      'Focus & Attention Difficulties',
                      'Hyperactivity',
                    ].map((specialty, index) => (
                      <h2 key={index} className="mt-6">
                        {specialty}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-[4vw] h-[35vw] w-[100%] flex-col items-center justify-center max-sm:hidden md:flex">
                <div className="flex items-center justify-center gap-5">
                  <span
                    className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                    style={{
                      background: 'linear-gradient(270deg, rgba(255, 202, 223, 0.13) 0%, #FB7CE4 100%)',
                    }}
                  ></span>
                  <h2 className="2xl:text-base text-[#F1C6FE] md:text-sm">Advantages</h2>
                  <span
                    className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                    style={{
                      background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                    }}
                  ></span>
                </div>
                <div className="flex w-full flex-col items-center justify-center">
                  <h2 className="2xl:text-5xl mt-5 font-medium md:text-3xl">Why choose us</h2>
                  <h2 className="2xl:text-base mt-3 md:text-sm">Early Intervention + Consistent Practice </h2>
                  <h2 className="2xl:text-xl font-semibold italic text-[#9C00AD] md:text-lg"> = Enhanced Progress!</h2>
                </div>

                <div className="">
                  <img src={think_img} alt="" loading="lazy" />
                </div>

                <div className="hidden h-[25vw] w-full items-center justify-center pl-[2.5vw] pt-[3vw]">
                  <div className="relative flex h-[22vw] w-full">
                    {/* Group for pos1 */}
                    <div className="group">
                      {/* First Image */}
                      <img
                        className="absolute left-[2vw] top-5 scale-[.9] cursor-pointer"
                        src={pos1}
                        alt=""
                        loading="lazy"
                      />

                      {/* Cloud Image - Visible on hover */}
                      <img
                        className="absolute -top-[5vw] left-[3vw] scale-[.6] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        src={cloud1}
                        alt=""
                        loading="lazy"
                      />

                      {/* Heading Content - Visible on hover */}
                      <h2 className="absolute -top-[2vw] left-[9vw] text-[10px] font-medium text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Expertise from <br /> Licensed <br /> Psychologists
                      </h2>
                    </div>

                    {/* Group for pos2 */}
                    <div className="group">
                      <img
                        className="absolute left-[15vw] top-[4vw] scale-[.9] cursor-pointer"
                        src={pos2}
                        alt=""
                        loading="lazy"
                      />
                      <img
                        className="absolute -top-[4vw] left-[16vw] scale-[.6] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        src={cloud1}
                        alt=""
                        loading="lazy"
                      />
                      <h2 className="absolute -top-[1vw] left-[22vw] text-[10px] font-medium text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Personalized <br /> Therapy <br /> Sessions for You
                      </h2>
                    </div>

                    {/* Group for pos3 */}
                    <div className="group">
                      <img
                        className="absolute left-[4vw] top-[13vw] scale-[.9] cursor-pointer"
                        src={pos3}
                        alt=""
                        loading="lazy"
                      />
                      <img
                        className="absolute left-[3vw] top-[4vw] z-10 scale-[.6] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        src={cloud1}
                        alt=""
                        loading="lazy"
                      />
                      <h2 className="absolute left-[8.6vw] top-[7.5vw] z-20 text-[10px] font-medium text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        24/7 Support and <br /> Guidance Available
                      </h2>
                    </div>

                    {/* Group for pos4 */}
                    <div className="group">
                      <img
                        className="absolute left-[16vw] top-[15vw] scale-[.9] cursor-pointer"
                        src={pos4}
                        alt=""
                        loading="lazy"
                      />
                      <img
                        className="absolute left-[15vw] top-[6vw] z-10 scale-[.6] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        src={cloud1}
                        alt=""
                        loading="lazy"
                      />
                      <h2 className="absolute left-[21vw] top-[9vw] z-20 text-[10px] font-medium text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Confidential <br /> and Secure <br /> Environment
                      </h2>
                    </div>

                    {/* Other elements such as arrows */}
                    <img className="absolute left-[9vw] top-[6vw] scale-[.7]" src={arrow1} alt="" loading="lazy" />
                    <img className="absolute left-[10vw] top-[10vw] scale-[.7]" src={arrow2} alt="" loading="lazy" />
                    <img className="absolute left-[10.5vw] top-[16vw] scale-[.7]" src={arrow3} alt="" loading="lazy" />
                  </div>
                </div>
              </div>

              <div className="flex h-[45vw] w-[100%] flex-col items-center justify-center max-sm:mt-[10vw] max-sm:h-auto">
                <div className="flex items-center justify-center gap-5">
                  <span
                    className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                    style={{
                      background: 'linear-gradient(270deg, rgba(255, 202, 223, 0.13) 0%, #FB7CE4 100%)',
                    }}
                  ></span>
                  <h2 className="2xl:text-base text-[#F1C6FE] md:text-sm">Advantages</h2>
                  <span
                    className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                    style={{
                      background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                    }}
                  ></span>
                </div>
                <div className="flex w-full flex-col items-center justify-center">
                  <h2 className="2xl:text-5xl mt-5 text-center font-manrope font-medium md:text-3xl">
                    Benefits of Our Service:
                  </h2>
                </div>
                <div className="mt-[4vw] h-auto w-[42vw] rounded-3xl bg-[#564A5957] max-sm:w-[80vw]">
                  <table className="w-full text-left text-gray-200">
                    <thead>
                      <tr>
                        <th className="border-r border-[#F6E8FB80] pb-4 text-center text-lg"> </th>
                        <th className="2xl:text-sm p-[2vw] pb-4 text-center md:text-xs">Aignosis</th>
                      </tr>
                    </thead>
                    <tbody className="2xl:text-base text-center md:text-sm">
                      {[
                        'Highly Qualified Licensed Specialists',
                        'Weekday and Evening Availability',
                        'Resources and Practice Materials Provided After Sessions',
                        'Regular Progress Updates',
                        'Fun, Engaging Group Sessions in Art & Storytelling',
                        'Direct Messaging with Specialists for Support',
                        'Simple Scheduling Through Our Portal',
                        'Access to Tips and Activities on Our App',
                        'No Commute or Waiting Time',
                        'EMI Payment Options (for Indian Residents Only)*',
                      ].map((feature, index) => (
                        <tr key={index} className="border-t border-[#F6E8FB80] last:pb-[2rem]">
                          <td className="border-r border-[#F6E8FB80] py-3">{feature}</td>
                          <td className="py-3 text-center">✅</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex w-auto flex-col items-center justify-center max-sm:mt-[5vw] max-sm:w-full">
                <div className="b flex flex-col items-center justify-center p-6">
                  <h2 className="2xl:text-5xl text-center font-manrope text-[40px] font-bold text-[#F6E8FB] max-sm:text-[20px] md:text-3xl">
                    Frequently Asked Questions
                  </h2>
                  <div className="mx-auto mt-10 w-auto rounded-3xl bg-[#564A5957] p-8 px-[5vw] max-sm:w-[80vw]">
                    <div className="space-y-4">
                      {faqData.map((item, index) => (
                        <div key={index} className="border-b border-gray-400">
                          <div
                            onClick={() => toggleQuestion(index)}
                            className="flex cursor-pointer items-center justify-between py-4"
                          >
                            <p className="2xl:text-lg font-raleway text-[#F6E8FB] md:text-base">
                              {index + 1}. {item.question}
                            </p>
                            <button className="2xl:text-xl font-semibold text-gray-300 md:text-lg">
                              {openQuestion === index ? '−' : '+'}
                            </button>
                          </div>
                          {openQuestion === index && (
                            <p className="mb-4 mt-2 font-montserrat text-sm text-gray-300">{item.answer}</p>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="2xl:text-base mt-8 cursor-pointer text-center text-gray-400 md:text-sm">
                      View All
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-auto w-[50%] p-[3vw] max-sm:mr-[3vw] max-sm:mt-[5vw] max-sm:w-full sm:block md:sticky md:top-10">
              <div className="relative flex h-[auto] w-auto flex-col items-center justify-center rounded-3xl bg-[#564A5957] py-[2vw] max-sm:w-[80vw] md:z-10">
                <div className="absolute inset-1 bottom-0 ml-[10vw] mt-[20vw] h-[15vw] w-[15vw] rounded-full bg-[#B740A1] opacity-45 blur-[200px]"></div>

                <h2 className="2xl:text-xl mt-10 font-manrope font-semibold md:text-lg">
                  Book an online consultation{' '}
                </h2>
                <h2 className="2xl:text-xl font-manrope font-semibold md:text-lg">Today</h2>
                <form className="2xl:text-base mt-[2vw] flex flex-col items-center justify-center space-y-4 px-[2vw] md:text-sm">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="r w-[16vw] rounded-md border border-[#B7407D80] bg-[#2521276B] px-4 py-2 max-sm:w-full"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-md border border-[#B7407D80] bg-[#2521276B] px-4 py-2"
                  />
                  <input
                    type="phone"
                    placeholder="Your Phone Number"
                    className="r w-full rounded-md border border-[#B7407D80] bg-[#2521276B] px-4 py-2"
                  />
                  <textarea
                    placeholder="Your Message"
                    className="r h-32 w-full resize-none rounded-md border border-[#B7407D80] bg-[#2521276B] px-4 py-2"
                  ></textarea>
                  <Link
                    to=""
                    className="group mt-[5rem] flex h-[3.5rem] w-[60%] cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-[#B740A1] bg-transparent text-[#0D0C0A] transition-colors duration-300 hover:bg-[#B7407D] max-sm:w-[78%] sm:w-[12rem]"
                  >
                    <span className="2xl:text-base flex-grow text-center text-white md:text-sm">submit</span>
                    <div className="ml-2 mr-1 flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-[#B740A1] text-xl text-white group-hover:bg-white group-hover:text-black">
                      <GoArrowUpRight />
                    </div>
                  </Link>
                </form>
                <div className="flex flex-col items-start justify-start">
                  <h2 className="2xl:text-base mx-[auto] mt-[3vw] justify-center font-medium max-sm:py-[10px] md:text-sm">
                    Reach us at{' '}
                  </h2>
                  <div className="mt-[1vw] flex w-full items-center justify-start gap-[1vw] text-xs text-[#811F67]">
                    <FaPhoneAlt />
                    <h2 className="2xl:text-sm text-xs font-medium text-white md:text-xs">+91 8209860578</h2>
                  </div>
                  <div className="mt-[1vw] flex w-full items-center justify-start gap-[1vw] text-xs text-[#811F67]">
                    <IoIosMail />
                    <h2 className="2xl:text-sm text-xs font-medium text-white md:text-xs">support@aignosis.in</h2>
                  </div>
                  <div className="mb-10 mt-[1vw] flex w-full items-center justify-start gap-[1vw] text-xs text-[#3ad345]">
                    <FaWhatsapp />
                    <h2 className="2xl:text-sm text-xs font-medium text-white md:text-xs">+91 8209860578</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-sm:hidden">
            <ContactPage />
            {/* <Footer /> */}
            <BlogFooter />
          </div>
        </div>
        <div className="mt-[5vw] md:hidden">
          <ContactPage />
          <BlogFooter />
        </div>
      </div>
    </>
  );
};

export default ServicePage4;
