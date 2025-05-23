import React, { useState } from 'react';
import { FaCcVisa, FaCcMastercard, FaCcApplePay, FaCcPaypal, FaGooglePay } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { SiAmericanexpress } from 'react-icons/si';
import logo1 from '../../assets/images/payment/1.png';
import logo2 from '../../assets/images/payment/2.png';
import logo3 from '../../assets/images/payment/3.png';
import snip1 from '../../assets/images/payment/logo1.png';

const PaymentScreen2 = ({ onNext, onBack }) => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleNext = (e) => {
    e.preventDefault();
    if (selectedMethod) {
      onNext();
    } else {
      alert('Please select a payment method.');
    }
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="min-h-screen w-full bg-[#1A0C25] px-[5vw] font-montserrat text-white max-sm:px-[3vw] max-sm:py-[3vw]">
      <div className="navsection flex h-[15vw] w-full items-center justify-center gap-[15vw] px-[5vw] py-[1vw] pt-[6vw] max-sm:flex-row max-sm:gap-[3vw]">
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
          <div className="relative flex h-[7vw] w-[7vw] items-center justify-center rounded-2xl border-transparent bg-[#B7407D] text-white max-sm:h-[15vw] max-sm:w-[15vw]">
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
        Home - Assessment / therapy - <span className="text-[#FB7CE4] underline">Payment</span>
      </div>

      <div className="mt-[5vw] flex min-h-[38vw] w-full justify-center gap-[5vw] max-sm:flex-col">
        <div className="left h-full w-[30%] max-sm:w-full">
          <h1 className="font-medium max-sm:text-base">Order Summary</h1>
          <div className="mt-[2vw] flex justify-end">
            <RiDeleteBin5Line />
          </div>
          <div className="mt-[1vw] flex items-center justify-center gap-[1vw] pl-10 max-sm:pl-0">
            <img src={snip1} alt="" className="max-sm:w-[15vw]" loading="lazy" />
            <div className="flex w-full items-center justify-between">
              <h1>behavioral therapy</h1>
              <h1>₹46000</h1>
            </div>
          </div>
          <div className="mt-[4vw] pl-10 text-base max-sm:pl-0 max-sm:text-sm">
            <h1>Gift Card / Discount code</h1>
            <div className="mt-2 flex justify-between gap-5 max-sm:flex-col">
              <textarea className="rounded-xl bg-[#9C00AD63] max-sm:w-full" name="" id=""></textarea>
              <button className="rounded-xl border border-[#B740A1] px-10 py-3 max-sm:w-full">Apply</button>
            </div>
            <div className="mt-6 flex items-center justify-between gap-5 border-b border-[#763e6c] pb-2 max-sm:text-sm">
              <h1>Subtotal:</h1>
              <h1>₹46000</h1>
            </div>
            <div className="mt-6 flex items-center justify-between gap-5 border-b border-[#763e6c] pb-2 max-sm:text-sm">
              <h1>Sales tax (6.5%):</h1>
              <h1>₹200</h1>
            </div>
            <div className="mt-6 flex items-center justify-between gap-5 pb-2 max-sm:text-sm">
              <h1>Total due:</h1>
              <h1 className="font-semibold text-[#B740A1]">₹46200</h1>
            </div>
          </div>
        </div>

        <div className="right h-full w-[60%] rounded-2xl bg-[#564A5957] p-[5vw] max-sm:w-full max-sm:p-[3vw]">
          <h1 className="text-xl font-semibold max-sm:text-lg">Payment Methods</h1>
          <div className="mt-5 pl-[3vw] max-sm:pl-0">
            <div className="mt-2 flex gap-5">
              <input
                type="radio"
                value="creditDebitCard"
                checked={selectedMethod === 'creditDebitCard'}
                onChange={() => handlePaymentMethodChange('creditDebitCard')}
              />
              <div className="flex h-[3vw] w-full items-center justify-between max-sm:h-auto max-sm:text-sm">
                <div>
                  <h1>Credit/Debit Cards</h1>
                  <h1 className="text-xs max-sm:text-[0.75rem]">Pay with your Credit / Debit Card</h1>
                </div>
                <div className="flex gap-[1vw] text-3xl max-sm:text-xl">
                  <FaCcVisa />
                  <FaCcMastercard />
                  <SiAmericanexpress />
                </div>
              </div>
            </div>
            <div className="mt-2 flex gap-5">
              <input
                type="radio"
                value="bankTransfer"
                checked={selectedMethod === 'bankTransfer'}
                onChange={() => handlePaymentMethodChange('bankTransfer')}
              />
              <div className="max-sm:text-sm">
                <h1>Direct Bank Transfer</h1>
                <h1 className="text-xs max-sm:text-[0.75rem]">Make payment directly through bank account.</h1>
              </div>
            </div>
            <div className="mt-2 flex gap-5">
              <input
                type="radio"
                value="otherMethods"
                checked={selectedMethod === 'otherMethods'}
                onChange={() => handlePaymentMethodChange('otherMethods')}
              />
              <div className="flex h-[3vw] w-full items-center justify-between max-sm:h-auto max-sm:text-sm">
                <div>
                  <h1>Other Payment Methods</h1>
                  <h1 className="text-xs max-sm:text-[0.75rem]">Pay with Apple Pay, Paypal or Google Pay.</h1>
                </div>
                <div className="flex gap-[1vw] text-3xl max-sm:text-xl">
                  <FaCcApplePay />
                  <FaCcPaypal />
                  <FaGooglePay />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[3vw] flex w-full items-center justify-center gap-[5vw]">
            <button onClick={onBack} className="rounded-3xl border border-[#9C00AD] px-7 py-3">
              Back
            </button>
            <button onClick={handleNext} className="rounded-3xl border border-[#9C00AD] bg-[#9C00AD] px-7 py-3">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentScreen2;
