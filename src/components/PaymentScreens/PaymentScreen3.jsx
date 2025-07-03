import React, { useState } from 'react';
import { FaCcVisa, FaCcMastercard, FaSpinner, FaCcApplePay, FaCcPaypal, FaGooglePay } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { SiAmericanexpress } from 'react-icons/si';
import logo1 from '../../assets/images/payment/1.png';
import logo2 from '../../assets/images/payment/2.png';
import logo3 from '../../assets/images/payment/3.png';
import snip1 from '../../assets/images/payment/logo1.png';
import { Link } from 'react-router-dom';

const PaymentScreen3 = ({ onNext, onBack }) => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleNext = (e) => {
    e.preventDefault();

    // Add any validation or data processing here
    try {
      // Navigate to PatientHistoryForm2
      onNext(); // Call the parent function to move to the next form
    } catch (error) {
      console.error('Error during navigation:', error); // Log the error
      // Optionally, display an error message to the user
    }
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="min-h-screen w-full bg-[#1A0C25] px-[5vw] pb-[2vw] font-montserrat text-white">
      <div className="navsection flex h-[15vw] w-full items-center justify-center gap-[15vw] px-[5vw] py-[1vw] pt-[2vw] max-sm:flex-row max-sm:gap-[3vw] max-sm:pt-[15vw]">
        <div className="flex flex-col items-center justify-center">
          <div className="relative flex h-[8vw] w-[8vw] items-center justify-center rounded-2xl border border-[#B7407D80] text-[#B7407DB2] max-sm:h-[15vw] max-sm:w-[15vw]">
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
          <div className="relative flex h-[8vw] w-[8vw] items-center justify-center rounded-2xl border-transparent bg-[#B7407D] text-white max-sm:h-[15vw] max-sm:w-[15vw]">
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
      {/* Loading Spinner for Payment Confirmation */}

      <div className="max-sm:mt-[20vw]">
        <div
          className=""
          style={{
            width: '90%', // Make it responsive
            maxWidth: '600px', // Limit max width
            backgroundColor: '#564A5957',
            padding: '40px',
            borderRadius: '10px',
            height: '500px',
            margin: '0 auto', // Center align
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '1vw',
          }}
        >
          <FaSpinner
            style={{
              fontSize: '48px',
              color: '#ff79c6',
              animation: 'spin 2s linear infinite',
            }}
          />
        </div>

        {/* CSS for Spinner Animation */}
        <style>
          {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
        </style>
      </div>
      {/* Next Button */}
      <div className="mt-[3vw] flex w-full items-center justify-center gap-[5vw]">
        <button onClick={onBack} className="rounded-3xl border border-[#9C00AD] px-7 py-3">
          Back
        </button>
        <Link to="/test/fillup" className="rounded-3xl border border-[#9C00AD] bg-[#9C00AD] px-7 py-3">
          Next
        </Link>
      </div>
    </div>
  );
};

export default PaymentScreen3;
