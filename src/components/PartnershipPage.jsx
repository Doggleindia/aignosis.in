import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GoArrowUpRight } from 'react-icons/go';
import brain from '../assets/images/brain.png';
import fetchData from './config/fetchData';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import teddy from '../assets/PopUps/teddy.png';
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PartnershipPage = () => {
  const [data, setData] = useState({
    name: '',
    age: '',
    city: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const form = useRef();
  const imageRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Define mobile breakpoint
    const yPosition = isMobile ? 720 : 300;
    // Animate image on scroll
    const imageAnimation = gsap.to(imageRef.current, {
      y: yPosition, // The final position when fully scrolled
      autoAlpha: 5, // Fade in the image
      ease: 'none', // No easing, for a direct scroll correlation
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 35%', // Animation starts when the top of the image reaches 25% of the viewport
        end: 'top 60%',
        scrub: 4, // Smooth scrubbing for responsive movement
      },
    });

    // Animate cards on scroll with better timing and effects
    cardsRef.current.forEach((card, index) => {
      const delay = index * 0.1; // Reduced delay for quicker animations
      gsap.fromTo(
        card,
        { y: 50, autoAlpha: 0 }, // Start cards slightly lower and fully transparent
        {
          y: 0, // Move to original position
          autoAlpha: 1,
          duration: 0.8, // Shorter duration for a snappier feel
          ease: 'back.out(1.7)', // Add a bounce effect for smoother entry
          delay: delay, // Delay between card animations
          scrollTrigger: {
            trigger: card,
            start: 'top 60%', // Start animating when the card is 60% from the top of the viewport
            toggleActions: 'play none none none', // Play animation when entering viewport
          },
        }
      );
    });

    return () => {
      // Clean up the scroll triggers when the component unmounts
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Allow only digits and limit to 10 characters
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setData((prevData) => ({
        ...prevData,
        phone: numericValue,
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: name === 'age' ? Number(value) : value, // Ensure age is a number
      }));
    }
  };

  // Function to send data to the API
  const contact = async (e) => {
    e.preventDefault();
    // Check if phone number is exactly 10 digits
    if (data.phone.length !== 10) {
      toast.error('Phone number must be exactly 10 digits!');
      return;
    }

    try {
      setLoading(true);
      const { response } = await fetchData({
        url: '/api/otp/contact-us',
        method: 'POST',
        data,
      });
      console.log('API response:', response);
      if (response.status == 200) {
        toast.success('Message sent successfully!');
      }
      setLoading(false);
      // alert('Message sent successfully!');

      // Reset the form after successful submission
      setData({
        name: '',
        age: '',
        city: '',
        phone: '',
        message: '',
      });
    } catch (err) {
      console.error('Error sending message:', err.message);
      toast.error('Failed to send the message. Please try again.');
      setData({
        name: '',
        age: '',
        city: '',
        phone: '',
        message: '',
      });
      // alert('Failed to send the message. Please try again.');
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="2xl:px-[8rem] mt-14 flex min-h-screen w-full flex-col flex-wrap bg-[#1A0C25] font-montserrat text-white max-sm:p-[2vw] md:px-[4rem]">
        <div className="2xl:px-[2rem] flex w-full flex-col flex-wrap items-center justify-center rounded-[10rem] border-t border-[#B874B580] py-[3rem] max-sm:rounded-[5rem] md:mb-10">
          <div className="flex flex-col items-center justify-center px-4 md:mb-10">
            <div className="mb-4 flex items-center justify-center gap-5">
              <span
                className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                style={{
                  background: 'linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                }}
              ></span>
              <spam className="text-[#EDD0E7]">Connect with Sales</spam>
              <span
                className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
                style={{
                  background: 'linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)',
                }}
              ></span>
            </div>
            <div className="mb-4 px-4 text-center md:px-[8vw]">
              <span className="2xl:text-5xl font-semibold tracking-tight md:text-3xl md:leading-[3rem]">
                If you are a healthcare provider, payor, or caregiver <br /> and want to partner with Aignosis, let’s
                talk!
              </span>
            </div>
            <div className="2xl:text-lg mt-4 px-4 text-center md:px-[20vw] md:text-xs">
              <p>Emphasis on partnerships within India, focusing on integration with local healthcare.</p>
            </div>
          </div>

          {/* Partnership Benefits Boxes in 2x2 Grid */}
          <div className="relative mb-10 mt-10 grid w-full max-w-[60vw] grid-cols-1 items-center justify-center gap-[10vw] px-4 max-sm:max-w-[83vw] md:grid-cols-2 md:px-0">
            {[
              {
                title: 'Early Identification of Developmental Disorders',
                description:
                  'The solution enables you to identify developmental delays like autism at an early stage, providing you with the opportunity to begin interventions when they are most effective.',
              },
              {
                title: 'Evidence-Based and Clinically Validated',
                description:
                  'Our system is backed by clinical research and expert validation, ensuring that the results you receive are scientifically sound and can be trusted for accurate diagnosis.',
              },
              {
                title: 'Streamlined Workflow for Pediatric Practices',
                description:
                  "Designed for simplicity, our tool integrates seamlessly into your existing workflow, offering fast and accurate results without disrupting your practice's operations.",
              },
              {
                title: 'Improved Patient Outcomes with Early Intervention',
                description:
                  'By using our early detection tool, you can ensure that children receive timely intervention, which can lead to improved cognitive, social, and emotional development, enhancing their overall quality of life.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="2xl:p-6 2xl:h-[18vw] mb-6 w-auto rounded-3xl p-4 shadow-lg md:h-[16vw] md:p-[2rem]"
                ref={(el) => (cardsRef.current[index] = el)} // Store reference to each card
                style={{
                  background: 'radial-gradient(circle, #43284C 0%, #1A0C25 100%)',
                }} // Apply radial gradient 43284C 1A0C25 here
              >
                <h3 className="2xl:text-2xl border-l-2 border-[#811F67] pl-6 text-lg font-semibold text-white md:text-lg">
                  {item.title}
                </h3>
                <p className="test-sm 2xl:text-lg mt-2 p-2 text-white md:text-xs">{item.description}</p>
                <div className="mt-5 h-1 w-full border-b-2 border-[#811F67]"></div>
              </div>
            ))}
          </div>

          {/* Center Image between Boxes */}
          <div className="absolute hidden items-center justify-center md:flex" ref={imageRef}>
            <img
              src={brain}
              alt="Brain Icon"
              className="2xl:w-[10rem] 2xl:h-[10rem] 2xl:scale-[2] w-[10rem] md:h-[6rem] md:w-[6rem] md:scale-[2.5]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mb-10 flex w-full flex-col items-center justify-center md:px-4">
          <div className="w-full px-[10vw] text-center md:px-[25vw]">
            <h3 className="2xl:text-xl mb-10 font-medium max-sm:text-center md:text-2xl">
              Fill up the form, and our team will respond promptly to assist you.
            </h3>

            <form
              onSubmit={contact}
              className="2xl:text-lg flex w-full flex-col items-center justify-center space-y-4 md:px-5 md:text-sm"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={data.name}
                onChange={handleInputChange}
                required
                className="w-full rounded-md bg-[#2521276B] px-4 py-2"
              />
              <input
                type="age"
                name="age"
                placeholder="Your Age"
                value={data.age}
                onChange={handleInputChange}
                required
                className="w-full rounded-md bg-[#2521276B] px-4 py-2"
              />
              {/* <input
              type="email"
              placeholder="Your Email*"
              className="w-full px-4 py-2 bg-[#2521276B]  rounded-md"
            /> */}
              <input
                type="text"
                name="city"
                placeholder="Your City"
                value={data.city}
                onChange={handleInputChange}
                required
                className="w-full rounded-md bg-[#2521276B] px-4 py-2"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={data.phone}
                required
                onChange={handleInputChange}
                className="w-full rounded-md bg-[#2521276B] px-4 py-2"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={data.message}
                onChange={handleInputChange}
                required
                className="h-32 w-full resize-none rounded-md bg-[#2521276B] px-4 py-2"
              ></textarea>
              <div className="2xl:w-[14rem] group mt-[1.5rem] flex h-[3rem] w-[8rem] cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-[#B740A1] bg-transparent text-[#0D0C0A] transition-colors duration-300 hover:bg-[#B740A1] max-sm:mx-auto md:h-[3rem] md:w-[9rem]">
                <button disabled={loading} type="submit" className="text-sm text-white md:text-sm">
                  Submit
                </button>
                <div className="2xl:w-[2.5rem] 2xl:h-[2.5rem] flex h-[1.8rem] w-[1.8rem] items-center justify-center rounded-full bg-[#B740A1] text-lg text-white group-hover:bg-white group-hover:text-black md:h-[1.8rem] md:w-[1.8rem] md:text-base">
                  <GoArrowUpRight />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnershipPage;
