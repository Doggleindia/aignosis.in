import React, { useRef, useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { FaMapMarkerAlt, FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import fetchData from './config/fetchData';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import tiger from './aboutus/tiger.png';
const ContactPage = () => {
  const [data, setData] = useState({
    name: '',
    age: '',
    city: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const form = useRef();

  // Function to handle input changes
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
      {/* Contact Form Section */}
      <div
        id="contact"
        className="2xl:h-[50vw] flex h-full w-full items-center justify-center bg-[#1A0C25] font-montserrat text-white max-sm:mt-[60px] md:h-[70vw]"
      >
        <div className="flex h-[90%] w-full flex-col items-center justify-center rounded-[14rem] border-t border-[#B874B580] max-sm:m-[1.5rem] max-sm:rounded-[7rem]">
          <div className="flex h-[15vw] w-full flex-col items-center justify-center max-sm:h-[50vw]">
            <div>
              <span className="2xl:text-7xl text-center font-semibold leading-[3rem] max-sm:text-2xl md:text-5xl">
                Get in Touch with Ai.gnosis
              </span>
            </div>
            <div className="px-[5vw]">
              <p className="2xl:text-base mt-[2vw] text-center text-xs md:text-sm">
                We’d love to hear from you! Whether you have questions, feedback, or would like to schedule a visit, our
                contact form makes it easy to reach out.
              </p>
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center gap-5 px-[5vw] pb-10 md:h-[45vw] md:flex-row">
            <img src={tiger} className="mt-[45vw] hidden scale-[.5] md:block" />
            <div className="h-[90%] w-[100%] md:w-[40%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1632856469087!2d75.8265625!3d26.898312500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b17869bccecd663%3A0xda5f864a40498db5!2sAignosis!5e0!3m2!1sen!2sin!4v1738730292539!5m2!1sen!2sin"
                referrerpolicy="no-referrer-when-downgrade"
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
              <form ref={form} onSubmit={contact} className="2xl:text-base mt-4 space-y-4 md:text-sm">
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
                  type="text"
                  name="age"
                  placeholder="Your Age"
                  value={data.age}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md bg-[#2521276B] px-4 py-2"
                />
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
                  type="text"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={data.phone}
                  onChange={handleInputChange}
                  required
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
                <button
                  type="submit"
                  disabled={loading}
                  className="group mt-[5rem] flex h-[3.5rem] w-[60vw] cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-[#B740A1] bg-transparent text-[#0D0C0A] transition-colors duration-300 hover:bg-[#B740A1] max-sm:m-auto max-sm:mt-[11px] md:w-[14rem]"
                >
                  <span className="text-white">Send Message</span>
                  <div className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-[#B740A1] text-xl text-white group-hover:bg-white group-hover:text-black">
                    <GoArrowUpRight />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
