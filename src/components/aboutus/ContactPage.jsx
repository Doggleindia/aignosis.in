import { useRef } from 'react';
import emailjs from 'emailjs-com';
const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3jcjhyy', // this is  EmailJS service ID
        'template_rp28x4l', // this is  EmailJS template ID
        form.current,
        'yD9ETjl2HMt2wVVJC' // this is public key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Failed to send the message. Please try again.');
        }
      );

    // Reset the form after submission
    e.target.reset();
  };

  return (
    <>
      {/* Contact Form Section */}
      <div
        id="contact"
        className="2xl:h-[50vw] flex h-full w-full items-center justify-center bg-[#1A0C25] font-montserrat text-white max-sm:mt-[60px] md:h-[70vw]"
      >
        <div className="flex h-[90%] w-full flex-col items-center justify-center rounded-[14rem] border-t border-[#B874B580] max-sm:rounded-[7rem]">
          <div className="flex h-[15vw] w-full flex-col items-center justify-center max-sm:h-[50vw]">
            <div className=""></div>
            <div className="px-[5vw]">
              <p className="2xl:text-base mt-[2vw] text-center text-xs md:text-sm">
                We’d love to hear from you! Whether you have questions, feedback, or would like to schedule a visit,{' '}
                <br /> our contact form makes it easy to reach out.
              </p>
            </div>
          </div>
          <div className="flex-start flex h-full w-full flex-col items-center justify-center gap-5 px-[5vw] pb-10 md:h-[45vw] md:flex-row">
            <div className="h-[90%] w-[100%] md:w-[40%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1632856469087!2d75.8265625!3d26.898312500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b17869bccecd663%3A0xda5f864a40498db5!2sAignosis!5e0!3m2!1sen!2sin!4v1738730292539!5m2!1sen!2sin"
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
              <form ref={form} onSubmit={sendEmail} className="2xl:text-base mt-4 space-y-4 md:text-sm">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-md bg-[#2521276B] px-4 py-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="w-full rounded-md bg-[#2521276B] px-4 py-2"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone Number"
                  required
                  className="w-full rounded-md bg-[#2521276B] px-4 py-2"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="h-32 w-full resize-none rounded-md bg-[#2521276B] px-4 py-2"
                ></textarea>
                <button
                  type="submit"
                  className="group mt-[5rem] flex h-[3.5rem] w-[60vw] cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-[#B740A1] bg-transparent text-[#0D0C0A] transition-colors duration-300 hover:bg-pink-500 max-sm:m-auto max-sm:mt-[11px] md:w-[14rem]"
                >
                  <span className="text-white">Submit</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      {/* <div className='w-full max-sm:w-[73%] max-sm:mt-[431px] max-sm:mx-auto gap-[7vw] md:mt-[0vw] bg-[#1A0C25] md:h-[20vw] 2xl:h-[25vw] flex justify-center items-center flex-col md:flex-row'>
        <div className="2xl:w-[10vw] md:w-[12vw] h-[8vh] max-sm:h-[14vh] md:h-[10vw] text-2xl text-[#731762] bg-[#2d153f] rounded-3xl justify-center items-center flex flex-col mb-5">
          <FaMapMarkerAlt />
          <h1 className='2xl:text-sm md:text-xs text-center mt-4 text-white px-2 max-sm:text-sm'>311, Adarsh Nagar ​Jaipur, Rajasthan ​302004</h1>
        </div>
        <div className="2xl:w-[10vw] md:w-[12vw] h-[8vw] md:h-[10vw] max-sm:h-[14vh] text-2xl text-[#731762] bg-[#2d153f] rounded-3xl justify-center items-center flex flex-col mb-5">
          <IoIosMail />
          <h1 className='2xl:text-sm md:text-xs text-center mt-4 text-white px-10 max-sm:text-sm'>aignosis7@gmail.com</h1>
        </div>
        <div className="2xl:w-[10vw] md:w-[12vw] h-[8vw] max-sm:h-[14vh] md:h-[10vw] text-2xl text-[#731762] bg-[#2d153f] rounded-3xl justify-center items-center flex flex-col mb-5">
          <FaPhoneAlt />
          <h1 className='2xl:text-sm md:text-xs text-center mt-4 text-white px-4 max-sm:text-sm'>+91 94140 47644 +91 88900 47777</h1>
        </div>
        <div className="2xl:w-[10vw] md:w-[12vw] max-sm:h-[14vh] h-[8vw] md:h-[10vw] text-2xl text-[#731762] bg-[#2d153f] rounded-3xl justify-center items-center flex flex-col mb-5 ">
          <FaCalendarAlt />
          <h1 className='2xl:text-sm md:text-xs text-center mt-4 text-white px-10 max-sm:text-sm'>Schedule an appointment</h1>
        </div>
      </div> */}
    </>
  );
};

export default ContactPage;
