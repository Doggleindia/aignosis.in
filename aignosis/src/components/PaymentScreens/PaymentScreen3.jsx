import React, { useState } from 'react';
import { FaCcVisa, FaCcMastercard, FaSpinner  , FaCcApplePay, FaCcPaypal, FaGooglePay } from 'react-icons/fa';
import { RiDeleteBin5Line } from "react-icons/ri";
import { SiAmericanexpress } from "react-icons/si";
import logo1 from "../../assets/images/payment/1.png";
import logo2 from "../../assets/images/payment/2.png";
import logo3 from "../../assets/images/payment/3.png";
import snip1 from "../../assets/images/payment/logo1.png";
import { Link } from 'react-router-dom';

const PaymentScreen3 = ({ onNext, onBack }) => {
  const [selectedMethod, setSelectedMethod] = useState("");

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
    <div className="w-full px-[5vw] pb-[2vw] text-white font-montserrat min-h-screen bg-[#1A0C25]">
      <div className="navsection pt-[2vw] w-full h-[15vw] px-[5vw] gap-[15vw] flex justify-center items-center py-[1vw]">
        {/* Steps */}
        <div className='flex flex-col justify-center items-center'>
          <div className="w-[7vw] h-[7vw] relative text-[#B7407DB2] border border-[#B7407D80] flex justify-center items-center rounded-2xl">
            <h1 className='font-montserrat top-[1vw] left-[1.2vw] font-bold text-6xl absolute'>1</h1>
            <img className='absolute scale-[.7] left-[2vw] bottom-0' src={logo1} alt="" />
          </div>
          <h1 className='w-full text-center mt-[1vw] text-white font-montserrat'>Fill personal details</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className="w-[7vw] h-[7vw] relative text-[#B7407DB2] border border-[#B7407D80] flex justify-center items-center rounded-2xl">
            <h1 className='font-montserrat top-[1vw] left-[1.2vw] font-bold text-6xl absolute'>2</h1>
            <img className='absolute scale-[.7] left-[2vw] bottom-0' src={logo2} alt="" />
          </div>
          <h1 className='w-full text-center mt-[1vw] text-white font-montserrat'>Payment details</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className="w-[7vw] h-[7vw] relative text-[#B7407DB2] border border-[#B7407D80] flex justify-center items-center rounded-2xl">
            <h1 className='font-montserrat top-[1vw] left-[1.2vw] font-bold text-6xl absolute'>3</h1>
            <img className='absolute scale-[.7] left-[2vw] bottom-0' src={logo3} alt="" />
          </div>
          <h1 className='w-full text-center mt-[1vw] text-white font-montserrat'>Confirmation</h1>
        </div>
      </div>

      {/* Loading Spinner for Payment Confirmation */}
      <div style={{
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
      }}>
        <FaSpinner style={{
          fontSize: '48px',
          color: '#ff79c6',
          animation: 'spin 2s linear infinite',
        }} />
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

      {/* Next Button */}
      <div className="w-full mt-[3vw] flex gap-[5vw] justify-center items-center">
            <button onClick={onBack} className='py-3 px-7 border rounded-3xl border-[#9C00AD]'>Back</button>
            <Link to="/test/fillup" className='py-3 px-7 border rounded-3xl border-[#9C00AD] bg-[#9C00AD]'>Next</Link>
          </div>
    </div>
  );
};

export default PaymentScreen3;