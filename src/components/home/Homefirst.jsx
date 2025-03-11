import React, { useState, useEffect, useRef } from "react";
import HomePageCard from "./HomePageCard";
import { Link } from "react-router-dom";
import m1 from "../../assets/h1.png";
import m2 from "../../assets/h2.png";
import star from "./star.png";
import p2 from "../../assets/PopUps/p2.png";
import p1 from "../../assets/PopUps/p1.png";
import hipaa from "../../assets/members/hipaa logo.jpg";
import iso from "../../assets/members/iso logo.png";
import axios from "axios";
import { toast } from "react-toastify";

const images = [
  "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/carousel1.png",
  "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/carousel4.png",
  "https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/carousel3.jpeg",
];

const Homefirst = () => {
  const [bgImage, setBgImage] = useState(images[0]);
  const [fade, setFade] = useState(true);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const API_BASE_URL = import.meta.env.VITE_MAIN_BACKEND;
  const fullNameRef = useRef(null);
  const phoneNumberRef = useRef(null);

  const isValid = () => {
    const fullName = fullNameRef.current?.value.replace(/\s/g, "") || "";
    const phoneNumber = phoneNumberRef.current?.value || "";

    return fullName.length >= 5 && /^\d{10}$/.test(phoneNumber);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out effect

      setTimeout(() => {
        setBgImage((prevImage) => {
          const currentIndex = images.indexOf(prevImage);
          const nextIndex = (currentIndex + 1) % images.length;
          return images[nextIndex];
        });
        setFade(true); // Start fade-in effect
      }, 500); // Wait for fade-out before changing the image
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, []);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    if (!isValid()) {
      return toast.error("Enter valid name & phone number");
    }


    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/api/flyer/submit`,
       {name: fullNameRef.current.value,
        phone: phoneNumberRef.current.value,}
      );
      toast.success(data.message);
      fullNameRef.current.value = "";
      phoneNumberRef.current.value = "";
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };


  return (
    <>
      <>
        <div
          className="absolute h-full inset-0 bg-cover  mt-16 bg-no-repeat transition-opacity duration-1000 hidden md:flex"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "cover",
            backgroundRepeat: "no-repeat",
            opacity: fade ? 0.2 : 0, // Fade-in and fade-out effect
            transition: "opacity .2s ease-in-out",
          }}
        ></div>

        <div
          className={`relative z-10 body w-[90%] h-full pt-[12vw] flex-col m-auto justify-center align-center items-center hidden md:flex`}
        >
          <span className="flex justify-center items-center tracking-[.3vw] text-sm font-bold font-raleway text-[#9C00AD]">
            <img
              src={star}
              className="scale-[.3] mr-[-1vw] max-sm:scale-[.4]"
              alt="star"
            />
            WELCOME TO AIGNOSIS
          </span>

          <span className="text-white font-bold text-5xl pt-[20px] font-manrope">
            Your journey with Aignosis!
          </span>
          <span className="text-[#811f67] font-bold text-5xl font-manrope">
            Helping you understand your child better
          </span>
          <div className="flex items-center justify-center px-[20vw] ">
            <p className="text-white font-raleway font-md text-center p-[10px]">
              Discover your child's developmental score in just 5 mins. The
              child watches a video and we are able to identify biomarkers which
              tell us subtle signs about his development.
            </p>
            <img
              src={p2}
              alt="Development Score"
              className="w-[100px] h-[100px]"
            />
          </div>

          {/* home page Card */}
          <div className="flex flex-row items-center space-x-6">
            <img src={p1} alt="Description" className="w-[100px] h-[100px]" />

            <div className="flex flex-row">
              <HomePageCard
                urlredirect="/prices"
                imageSrc={m1}
                title="For Parents"
                description="Early awareness opens doors to timely support and brighter possibilities"
              />
              <HomePageCard
                urlredirect="/clinic"
                imageSrc={m2}
                title="For doctors"
                description="Empowering clinics with advanced early detection tools"
              />
            </div>
          </div>
        </div>

        <div className="body w-[90%] h-full py-[8vh] flex-col m-auto justify-center align-center items-center flex md:hidden">
          {/* Welcome Text */}
          <span className="flex justify-center items-center font-manrope text-sm font-medium text-[#9C00AD] text-center tracking-widest uppercase mb-4">
            <img
              src={star}
              className="scale-[.3] max-sm:mr-[-2vw] max-sm:scale-[.4]"
              alt="star"
            />
            Welcome to Aignosis
          </span>

          {/* Main Heading */}
          <h1 className="text-white font-bold text-2xl font-manrope text-center mt-2 ">
            Your journey with Aignosis!
          </h1>
          <h2 className="text-[#811f67] font-extrabold text-3xl font-manrope text-center mb-6">
            Helping you understand your child better
          </h2>

          {/* Description */}
          <p className="text-white font-raleway font-normal text-center text-sm leading-relaxed mb-8">
            Discover your child's developmental score in just 5 mins. The child
            watches a video and we are able to identify biomarkers which tell us
            subtle signs about his development.
          </p>

          {/* Buttons for Cards */}
          <div className="flex flex-col space-y-4 w-full">
            <button className="flex items-center justify-between w-full bg-[#1A0C25] text-white border border-[#9C00AD] px-4 py-3 rounded-3xl hover:bg-[#9C00AD] hover:text-[#2A013E] transition-all">
              <Link to={"/prices"}>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full">
                    <img
                      className="w-full h-full object-contain"
                      src={m1}
                      alt="Icon for prices"
                    />
                  </div>
                  <span className="text-left">
                    <strong className="block font-bold">
                      Get your child tested now
                    </strong>
                    <span className="text-sm">
                      Empowering Clinics with Advanced Autism Detection Tools
                    </span>
                  </span>
                </div>
              </Link>
            </button>

            <button className="flex items-center justify-between w-full bg-[#1A0C25] text-white border border-[#9C00AD] px-4 py-3 rounded-3xl hover:bg-[#9C00AD] hover:text-[#2A013E] transition-all">
              <Link to={"/clinic"}>
                <div className="flex items-center space-x-4">
                  <div className="w-16 cursor-pointer h-16 rounded-full">
                    <img
                      className="w-full h-full object-contain"
                      src={m2}
                      alt=""
                      srcset=""
                    />
                  </div>
                  <span className="text-left">
                    <strong className="block font-bold">For doctors</strong>
                    <span className="text-sm">
                      Empowering Clinics with Advanced Autism Detection Tools
                    </span>
                  </span>
                </div>
              </Link>
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-4 flex items-center space-x-4 z-50 max-sm:hidden">
            <img
              className="w-32 h-16 max-sm:w-12 object-contain"
              src={hipaa}
              alt="Logo 1"
            />
            <img
              className="w-32 h-16 max-sm:w-12 object-contain"
              src={iso}
              alt="Logo 2"
            />
          </div>

          <div className="w-full 2xl:py-[10vw] md:py-[5vw] relative">
            <div className="absolute top-[30vw] right-0 w-[15%] h-full bg-[#B740A1A6] opacity-45 blur-[120px] rounded-xl"></div>
            <img
              className="w-full h-full hidden sm:block"
              src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/banner.png"
              alt="Sharks Images"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-6 p-6">
          {/* Container for inputs (Ensures proper alignment on desktop) */}
          <div className="w-full max-w-[700px] flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Full Name"
              ref={fullNameRef}
              
              className="w-full sm:w-[48%] p-3 border border-[#9C00AD] text-white bg-transparent rounded-md focus:border-[#9C00AD] focus:ring-0 focus:outline-none"
              onInput={() => isValid()}
            />
            <div className="w-full sm:w-[48%] flex items-center border border-[#9C00AD] rounded-md p-3 bg-transparent">
              <span className="pr-2 text-white text-xs whitespace-nowrap">
                🇮🇳 +91
              </span>
              <input
                type="text"
                placeholder="WhatsApp Preferred"
                ref={phoneNumberRef}
                className="w-full text-white bg-transparent focus:outline-none placeholder-white/60"
                onInput={() => isValid()}
              />
            </div>
          </div>

          {/* Button Container (Always below inputs) */}
          <div className="w-full max-w-[700px] flex justify-center">
            <Link
              to={
                isValid() ? "https://calendly.com/aignosis-support/30min" : "#"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
               onClick={handleSubmit}
                className={`w-full sm:w-auto px-6 py-3 border border-[#9C00AD] text-white rounded-md transition-all ${
                  isValid()
                    ? "hover:bg-white/20 opacity-100 cursor-pointer"
                    : "opacity-50 cursor-not-allowed"
                }`}
                
                disabled={!isValid()}
              >
                Book a Free Demo
              </button>
            </Link>
          </div>
        </div>
      </>
    </>
  );
};

export default Homefirst;
