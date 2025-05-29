import React, { useState, useEffect, useRef } from 'react';
import HomePageCard from './HomePageCard';
import { Link } from 'react-router-dom';
import m1 from '../../assets/h1.png';
import m2 from '../../assets/h2.png';
import star from './star.png';
import p2 from '../../assets/PopUps/p2.png';
import p1 from '../../assets/PopUps/p1.png';
import hipaa from '../../assets/members/hipaa logo.jpg';
import iso from '../../assets/members/iso logo.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const images = [
  'https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/carousel1.png',
  'https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/carousel4.png',
  'https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/carousel3.jpeg',
];

const Homefirst = () => {
  const [bgImage, setBgImage] = useState(images[0]);
  const [fade, setFade] = useState(true);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [phoneNumber, setPhoneNumber] = useState('');
  const API_BASE_URL = import.meta.env.VITE_MAIN_BACKEND;
  const fullNameRef = useRef(null);

  const isValid = () => {
    const fullName = fullNameRef.current?.value.replace(/\s/g, '') || '';
    // For phone validation, we check if phoneNumber has at least 10 digits
    const cleanPhone = phoneNumber?.replace(/\D/g, '') || '';

    return fullName.length >= 5 && cleanPhone.length >= 10;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    if (!isValid()) {
      return toast.error('Enter valid name & phone number');
    }

    try {
      const { data } = await axios.post(`${API_BASE_URL}/api/flyer/submit`, {
        name: fullNameRef.current.value,
        phone: phoneNumber,
      });
      toast.success(data.message);
      fullNameRef.current.value = '';
      setPhoneNumber('');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <>
      <>
        <div
          className="absolute inset-0 mt-16 hidden h-full bg-cover bg-no-repeat transition-opacity duration-1000 md:flex"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: fade ? 0.2 : 0, // Fade-in and fade-out effect
            transition: 'opacity .2s ease-in-out',
          }}
        ></div>

        <div
          className={`body align-center relative z-10 m-auto hidden h-full w-[90%] flex-col items-center justify-center pt-[12vw] md:flex`}
        >
          <span className="flex items-center justify-center font-raleway text-sm font-bold tracking-[.3vw] text-[#9C00AD]">
            <img src={star} className="mr-[-1vw] scale-[.3] max-sm:scale-[.4]" alt="star" />
            WELCOME TO AIGNOSIS
          </span>

          <span className="pt-[20px] font-manrope text-5xl font-bold text-white">Your journey with Aignosis!</span>
          <span className="font-manrope text-5xl font-bold text-[#811f67]">
            Helping you understand your child better
          </span>
          <div className="flex items-center justify-center px-[20vw]">
            <p className="font-md p-[10px] text-center font-raleway text-white">
              Discover your child's developmental score in just 5 mins. The child watches a video and we are able to
              identify biomarkers which tell us subtle signs about his development.
            </p>
            <img src={p2} alt="Development Score" className="h-[100px] w-[100px]" />
          </div>

          {/* home page Card */}
          <div className="flex flex-row items-center space-x-6">
            <img src={p1} alt="Description" className="h-[100px] w-[100px]" />

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

        <div className="body align-center m-auto flex h-full w-[90%] flex-col items-center justify-center py-[8vh] md:hidden">
          {/* Welcome Text */}
          <span className="mb-4 flex items-center justify-center text-center font-manrope text-sm font-medium uppercase tracking-widest text-[#9C00AD]">
            <img src={star} className="scale-[.3] max-sm:mr-[-2vw] max-sm:scale-[.4]" alt="star" />
            Welcome to Aignosis
          </span>

          {/* Main Heading */}
          <h1 className="mt-2 text-center font-manrope text-2xl font-bold text-white">Your journey with Aignosis!</h1>
          <h2 className="mb-6 text-center font-manrope text-3xl font-extrabold text-[#811f67]">
            Helping you understand your child better
          </h2>

          {/* Description */}
          <p className="mb-8 text-center font-raleway text-sm font-normal leading-relaxed text-white">
            Discover your child's developmental score in just 5 mins. The child watches a video and we are able to
            identify biomarkers which tell us subtle signs about his development.
          </p>

          {/* Buttons for Cards */}
          <div className="flex w-full flex-col space-y-4">
            <button className="flex w-full items-center justify-between rounded-3xl border border-[#9C00AD] bg-[#1A0C25] px-4 py-3 text-white transition-all hover:bg-[#9C00AD] hover:text-[#2A013E]">
              <Link to={'/prices'}>
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full">
                    <img className="h-full w-full object-contain" src={m1} alt="Icon for prices" />
                  </div>
                  <span className="text-left">
                    <strong className="block font-bold">Get your child tested now</strong>
                    <span className="text-sm">Empowering Clinics with Advanced Autism Detection Tools</span>
                  </span>
                </div>
              </Link>
            </button>

            <button className="flex w-full items-center justify-between rounded-3xl border border-[#9C00AD] bg-[#1A0C25] px-4 py-3 text-white transition-all hover:bg-[#9C00AD] hover:text-[#2A013E]">
              <Link to={'/clinic'}>
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 cursor-pointer rounded-full">
                    <img className="h-full w-full object-contain" src={m2} alt="" srcSet="" />
                  </div>
                  <span className="text-left">
                    <strong className="block font-bold">For doctors</strong>
                    <span className="text-sm">Empowering Clinics with Advanced Autism Detection Tools</span>
                  </span>
                </div>
              </Link>
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 z-50 flex items-center space-x-4 max-sm:hidden">
            <img className="h-16 w-32 object-contain max-sm:w-12" src={hipaa} alt="Logo 1" />
            <img className="h-16 w-32 object-contain max-sm:w-12" src={iso} alt="Logo 2" />
          </div>

          <div className="2xl:py-[10vw] relative w-full md:py-[5vw]">
            <div className="absolute right-0 top-[30vw] h-full w-[15%] rounded-xl bg-[#B740A1A6] opacity-45 blur-[120px]"></div>
            <img
              className="hidden h-full w-full sm:block"
              src="https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/banner.png"
              alt="Sharks Images"
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-6 p-6">
          {/* Container for inputs (Ensures proper alignment on desktop) */}
          <div className="flex w-full max-w-[700px] flex-col items-center gap-4 sm:flex-row">
            <input
              type="text"
              placeholder="Full Name"
              ref={fullNameRef}
              className="w-full rounded-md border border-[#9C00AD] bg-transparent p-3 text-white focus:border-[#9C00AD] focus:outline-none focus:ring-0 sm:w-[48%]"
              onInput={() => isValid()}
            />
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="IN"
              placeholder="WhatsApp Preferred"
              value={phoneNumber}
              onChange={setPhoneNumber}
              limitMaxLength={true}
              containerComponentProps={{
                className: 'w-full sm:w-[48%] flex items-center justify-center',
                style: {
                  backgroundColor: 'transparent',
                },
              }}
              numberInputProps={{
                className: 'bg-transparent text-white focus:outline-none focus:ring-0 w-full',
                onInput: () => isValid(),
                style: {
                  border: '1px solid #9C00AD',
                  borderRadius: '0',
                },
              }}
            />
          </div>

          {/* Button Container (Always below inputs) */}
          <div className="flex w-full max-w-[700px] justify-center">
            <Link
              to={isValid() ? 'https://calendly.com/aignosis-support/30min' : '#'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                onClick={handleSubmit}
                className={`w-full rounded-md border border-[#9C00AD] px-6 py-3 text-white transition-all sm:w-auto ${
                  isValid() ? 'cursor-pointer opacity-100 hover:bg-white/20' : 'cursor-not-allowed opacity-50'
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
