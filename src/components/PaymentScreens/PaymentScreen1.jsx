import React from 'react';
import {
  FaUser,
  FaCreditCard,
  FaCheckCircle,
  FaCcVisa,
  FaCcMastercard,
  FaCcApplePay,
  FaCcPaypal,
  FaGooglePay,
} from 'react-icons/fa';
import logo1 from '../../assets/images/payment/1.png';
import logo2 from '../../assets/images/payment/2.png';
import logo3 from '../../assets/images/payment/3.png';
import snip1 from '../../assets/images/payment/logo1.png';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const PaymentScreen1 = ({ onNext, onBack }) => {
  const handleNext = (e) => {
    e.preventDefault();

    try {
      onNext();
    } catch (error) {
      console.error('Error during navigation:', error);
    }
  };

  const location = useLocation();
  const { selectedPrice } = location.state || { selectedPrice: 0 };

  return (
    <div className="min-h-screen w-full bg-[#1A0C25] px-[5vw] font-montserrat text-white max-sm:px-[3vw] max-sm:pt-[5vw]">
      <div className="navsection flex h-[15vw] w-full items-center justify-center gap-[15vw] px-[5vw] py-[1vw] pt-[6vw] max-sm:flex-row max-sm:gap-[5vw]">
        <div className="flex flex-col items-center justify-center">
          <div className="relative flex h-[8vw] w-[8vw] items-center justify-center rounded-2xl border-transparent bg-[#B7407D] text-white max-sm:h-[15vw] max-sm:w-[15vw]">
            <h1 className="absolute left-[1.2vw] top-[1vw] font-montserrat text-6xl font-bold max-sm:text-4xl">1</h1>
            <img
              className="absolute bottom-0 left-[2vw] scale-[.7] max-sm:scale-[0.5]"
              src={logo1}
              alt=""
              loading="lazy"
            />
          </div>
          <h1 className="mt-[1vw] w-full text-center font-montserrat text-white max-sm:text-sm">
            Fill personal details
          </h1>
        </div>
        <span className="mx-[2vw]">
          <svg
            className="h-6 w-6 text-[#B7407DB2] max-sm:h-4 max-sm:w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
        <div className="flex flex-col items-center justify-center">
          <div className="relative flex h-[7vw] w-[7vw] items-center justify-center rounded-2xl border border-[#B7407D80] text-[#B7407DB2] max-sm:h-[15vw] max-sm:w-[15vw]">
            <h1 className="absolute left-[1.2vw] top-[1vw] font-montserrat text-6xl font-bold max-sm:text-4xl">2</h1>
            <img
              className="absolute bottom-0 left-[2vw] scale-[.7] max-sm:scale-[0.5]"
              src={logo2}
              alt=""
              loading="lazy"
            />
          </div>
          <h1 className="mt-[1vw] w-full text-center font-montserrat text-white max-sm:text-sm">Payment details</h1>
        </div>
        <span className="mx-[2vw]">
          <svg
            className="h-6 w-6 text-[#B7407DB2] max-sm:h-4 max-sm:w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
        <div className="flex flex-col items-center justify-center">
          <div className="relative flex h-[8vw] w-[8vw] items-center justify-center rounded-2xl border border-[#B7407D80] text-[#B7407DB2] max-sm:h-[15vw] max-sm:w-[15vw]">
            <h1 className="absolute left-[1.2vw] top-[1vw] font-montserrat text-6xl font-bold max-sm:text-4xl">3</h1>
            <img
              className="absolute bottom-0 left-[2vw] scale-[.7] max-sm:scale-[0.5]"
              src={logo3}
              alt=""
              loading="lazy"
            />
          </div>
          <h1 className="w-full text-center font-montserrat text-white max-sm:mb-[4vw] max-sm:text-sm md:mt-[1vw]">
            Confirmation
          </h1>
        </div>
      </div>

      <div className="mt-[5vw] w-full text-base text-[#F6E8FB] max-sm:mt-[12vw] max-sm:text-sm">
        Home - Assessment / therapy - <span className="text-[#FB7CE4] underline">Payment</span>{' '}
      </div>
      <div className="mt-[5vw] flex min-h-[38vw] w-full justify-center gap-[5vw] max-sm:flex-col max-sm:gap-[3vw]">
        <div className="left h-full w-[30%] max-sm:w-full">
          <h1 className="font-medium max-sm:text-sm">Order Summary</h1>
          <div className="mt-[2vw] flex justify-end">
            <RiDeleteBin5Line />
          </div>
          <div className="mt-[1vw] flex flex-col justify-start gap-[1vw] rounded-xl border border-[#9C00AD63] bg-[#564A5957] pl-2 max-sm:pl-5">
            <div className="flex flex-row">
              <img src={snip1} alt="" loading="lazy" />
              <div className="flex w-full items-center justify-between max-sm:text-sm">
                <h1 className="m-auto">behavioral therapy</h1>
                <h1 className="m-auto">₹{selectedPrice}</h1>
              </div>
            </div>
            <span className="flex font-raleway text-sm">6-Month Validity </span>
            <span className="flex font-raleway text-sm">30 Sessions at ₹600/session </span>
            <span className="flex font-raleway text-sm">Save ₹8000 overall!</span>
          </div>

          <div className="mt-[4vw] pl-10 text-base max-sm:pl-5 max-sm:text-sm">
            <h1>Gift Card / Discount code</h1>
            <div className="mt-2 flex justify-between gap-5">
              <textarea className="w-[70%] rounded-xl bg-[#9C00AD63] max-sm:w-full" name="" id=""></textarea>
              <button className="rounded-xl border border-[#B740A1] px-5 py-2 max-sm:px-3 max-sm:py-1">Apply</button>
            </div>
            <div className="mt-6 flex items-center justify-between gap-5 border-b border-[#763e6c] pb-2 max-sm:text-sm">
              <h1>Subtotal:</h1>
              <h1>₹{selectedPrice}</h1>
            </div>
            <div className="mt-6 flex items-center justify-between gap-5 border-b border-[#763e6c] pb-2 max-sm:text-sm">
              <h1>Sales tax (6.5%):</h1>
              <h1>₹200</h1>
            </div>
            <div className="mt-6 flex items-center justify-between gap-5 pb-2 max-sm:text-sm">
              <h1>Total due:</h1>
              <h1 className="font-semibold text-[#B740A1]">₹{selectedPrice + 200}</h1>
            </div>
          </div>
        </div>
        <div className="right h-full w-[60%] rounded-2xl bg-[#564A5957] p-[5vw] max-sm:w-full max-sm:p-[4vw]">
          <h1 className="text-xl font-semibold max-sm:text-lg">Complete registration payment</h1>
          <h1 className="mt-3 font-semibold max-sm:text-sm">Personal details</h1>
          <input
            className="mt-5 w-full border border-[#9C00AD75] bg-transparent p-[.8vw] text-sm max-sm:p-2"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="mt-5 w-full border border-[#9C00AD75] bg-transparent p-[.8vw] text-sm max-sm:p-2"
            type="text"
            placeholder="Your Email"
          />
          <input
            className="mt-5 w-full border border-[#9C00AD75] bg-transparent p-[.8vw] text-sm max-sm:p-2"
            type="text"
            placeholder="Phone Number"
          />
          <div className="flex gap-[2vw] max-sm:flex-col">
            <select
              className="mt-5 w-full border border-[#9C00AD75] bg-transparent p-[.8vw] pr-[2vw] text-sm max-sm:p-2"
              defaultValue=""
            >
              <option className="bg-[#564A5957] text-black" value="" disabled>
                Select State
              </option>
              <option className="bg-[#564A5957] text-black" value="maharashtra">
                Maharashtra
              </option>
              <option className="bg-[#564A5957] text-black" value="karnataka">
                Karnataka
              </option>
              <option className="bg-[#564A5957] text-black" value="gujarat">
                Gujarat
              </option>
            </select>
            <select
              className="mt-5 w-full border border-[#9C00AD75] bg-transparent p-[.8vw] text-sm max-sm:p-2"
              defaultValue=""
            >
              <option className="bg-[#564A5957] text-black" value="" disabled>
                Select Area/City
              </option>
              <option className="bg-[#564A5957] text-black" value="mumbai">
                Mumbai
              </option>
              <option className="bg-[#564A5957] text-black" value="pune">
                Pune
              </option>
              <option className="bg-[#564A5957] text-black" value="ahmedabad">
                Ahmedabad
              </option>
            </select>
          </div>
          <div className="mt-[3vw] flex w-full items-center justify-center gap-[5vw]">
            <Link to="/prices">
              {' '}
              <button onClick={onBack} className="rounded-3xl border border-[#9C00AD] px-7 py-3">
                Back
              </button>
            </Link>
            <button onClick={handleNext} className="rounded-3xl border border-[#9C00AD] px-7 py-3">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentScreen1;
