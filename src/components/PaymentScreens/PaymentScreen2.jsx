import React, { useState } from 'react';
import { FaCcVisa, FaCcMastercard, FaCcApplePay, FaCcPaypal, FaGooglePay } from 'react-icons/fa';
import { RiDeleteBin5Line } from "react-icons/ri";
import { SiAmericanexpress } from "react-icons/si";
import logo1 from "../../assets/images/payment/1.png";
import logo2 from "../../assets/images/payment/2.png";
import logo3 from "../../assets/images/payment/3.png";
import snip1 from "../../assets/images/payment/logo1.png";
import { Link } from 'react-router-dom';

const PaymentScreen2 = ({ onNext, onBack }) => {
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    if (selectedMethod) {
      onNext();
    } else {
      alert("Please select a payment method.");
    }
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="w-full px-[5vw] text-white font-montserrat min-h-screen bg-[#1A0C25] max-sm:px-[3vw] max-sm:py-[3vw]">

      
      <div className="navsection max-sm:mt-[33px] pt-[6vw] w-full h-[15vw] px-[5vw] gap-[15vw] flex justify-center items-center py-[1vw] max-sm:flex-row max-sm:gap-[3vw]">
        <div className='flex flex-col justify-center items-center'>
          <div className="w-[8vw] h-[8vw] relative text-[#B7407DB2] border border-[#B7407D80] flex justify-center items-center rounded-2xl max-sm:w-[15vw] max-sm:h-[15vw]">
            <h1 className='font-montserrat top-[1vw] left-[1.2vw] font-bold text-6xl absolute max-sm:text-4xl'>1</h1>
            <img className='absolute scale-[.7] left-[2vw] bottom-0 max-sm:scale-[0.5]' src={logo1} alt="" />
          </div>
          <h1 className='w-full text-center mt-[1vw] text-white font-montserrat max-sm:text-sm'>Fill personal details</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className="w-[7vw] h-[7vw] relative text-[#B7407DB2] border border-[#B7407D80] flex justify-center items-center rounded-2xl max-sm:w-[15vw] max-sm:h-[15vw]">
            <h1 className='font-montserrat top-[1vw] left-[1.2vw] font-bold text-6xl absolute max-sm:text-4xl'>2</h1>
            <img className='absolute scale-[.7] left-[2vw] bottom-0 max-sm:scale-[0.5]' src={logo2} alt="" />
          </div>
          <h1 className='w-full text-center mt-[1vw] text-white font-montserrat max-sm:text-sm'>Payment details</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className="w-[8vw] h-[8vw] relative text-[#B7407DB2] border border-[#B7407D80] flex justify-center items-center rounded-2xl max-sm:w-[15vw] max-sm:h-[15vw]">
            <h1 className='font-montserrat top-[1vw] left-[1.2vw] font-bold text-6xl absolute max-sm:text-4xl'>3</h1>
            <img className='absolute scale-[.7] left-[2vw] bottom-0 max-sm:scale-[0.5]' src={logo3} alt="" />
          </div>
          <h1 className='w-full text-center md:mt-[1vw] max-sm:mb-[4vw] text-white font-montserrat max-sm:text-sm'>Confirmation</h1>
        </div>
      </div>
      
     
      
      <div className="w-full mt-[5vw] min-h-[38vw] flex max-sm:flex-col justify-center gap-[5vw]">
      <div className="left w-[30%] h-full max-sm:w-full">
          <h1 className='flex justify-center font-medium max-sm:text-sm max-sm:mt-[23px]'>Order Summary</h1>
          <div className="flex mt-[2vw] justify-end"><RiDeleteBin5Line /></div>
          <div className='flex  flex-col justify-start mt-[1vw] bg-[#564A5957] border border-[#9C00AD63] rounded-xl   gap-[1vw] pl-2 max-sm:pl-5'>
            <div className='flex flex-row'>
            <img src={snip1} alt="" />
            <div className='flex w-full justify-between items-center max-sm:text-sm'>
              <h1 className='m-auto'>behavioral therapy</h1>
              <h1 className='m-auto'>₹450.00</h1>
            </div>
            </div>
            <span className="flex font-raleway text-sm ">6-Month Validity </span>
            <span className="flex font-raleway text-sm">30 Sessions at ₹600/session </span>
            <span className="flex font-raleway text-sm">Save ₹8000 overall!</span>
          </div>
          <div className="mt-[4vw] text-base pl-2 max-sm:pl-5 max-sm:text-sm">
            <h1>Gift Card / Discount code</h1>
            <div className="flex justify-between gap-5 mt-2">
              <textarea className='rounded-xl bg-[#9C00AD63] w-[70%] max-sm:w-full' name="" id=""></textarea>
              <button className='px-5 py-2 max-sm:px-3 max-sm:py-1 border border-[#B740A1] rounded-xl'>Apply</button>
            </div>
            <div className="flex mt-6 justify-between items-center gap-5 border-b border-[#763e6c] pb-2 max-sm:text-sm">
              <h1>Subtotal:</h1>
              <h1>₹160.00</h1>
            </div>
            <div className="flex mt-6 justify-between items-center gap-5 border-b border-[#763e6c] pb-2 max-sm:text-sm">
              <h1>Sales tax (6.5%):</h1>
              <h1>₹4.23</h1>
            </div>
            <div className="flex mt-6 justify-between items-center gap-5 pb-2 max-sm:text-sm">
              <h1>Total due:</h1>
              <h1 className='font-semibold text-[#B740A1]'>₹164.23</h1>
            </div>
          </div>
        </div>
        
        <div className="right w-[60%] h-full bg-[#564A5957] rounded-2xl p-[5vw] max-sm:w-full max-sm:p-[3vw]">
          <h1 className='text-xl font-semibold max-sm:text-lg'>Payment Methods</h1>
          <div className='mt-5 pl-[3vw] max-sm:pl-0'>
            <div className='flex mt-2 gap-5 '>
              <input 
                type="radio" 
                value="creditDebitCard" 
                checked={selectedMethod === "creditDebitCard"} 
                onChange={() => handlePaymentMethodChange("creditDebitCard")} 
              />
              <div className="w-full h-[3vw] flex justify-between items-center max-sm:h-auto max-sm:text-sm">
                <div>
                  <h1>Credit/Debit Cards</h1>
                  <h1 className='text-xs max-sm:text-[0.75rem]'>Pay with your Credit / Debit Card</h1>
                </div>
                <div className='text-3xl flex gap-[1vw] max-sm:text-xl'>
                  <FaCcVisa />
                  <FaCcMastercard />
                  <SiAmericanexpress />
                </div>
              </div>
            </div>
            <div className='flex mt-2 gap-5 '>
              <input 
                type="radio" 
                value="bankTransfer" 
                checked={selectedMethod === "bankTransfer"} 
                onChange={() => handlePaymentMethodChange("bankTransfer")} 
              />
              <div className="max-sm:text-sm">
                <h1>Direct Bank Transfer</h1>
                <h1 className='text-xs max-sm:text-[0.75rem]'>Make payment directly through bank account.</h1>
              </div>
            </div>
            <div className='flex mt-2 gap-5 '>
              <input 
                type="radio" 
                value="otherMethods" 
                checked={selectedMethod === "otherMethods"} 
                onChange={() => handlePaymentMethodChange("otherMethods")} 
              />
              <div className="w-full h-[3vw] flex justify-between items-center max-sm:h-auto max-sm:text-sm">
                <div>
                  <h1>Other Payment Methods</h1>
                  <h1 className='text-xs max-sm:text-[0.75rem]'>Pay with Apple Pay, Paypal or Google Pay.</h1>
                </div>
                <div className='text-3xl flex gap-[1vw] max-sm:text-xl'>
                  <FaCcApplePay />
                  <FaCcPaypal />
                  <FaGooglePay />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-[3vw] flex gap-[5vw] justify-center items-center">
            <Link to='/prices'> <button  className='py-3 px-7 border rounded-3xl border-[#9C00AD]'>Back</button></Link>
            <button onClick={handleNext} className='py-3 px-7 border rounded-3xl border-[#9C00AD] bg-[#9C00AD]'>Next</button>
          </div>


        </div>
      </div>

      
    </div>
  );
}

export default PaymentScreen2;
