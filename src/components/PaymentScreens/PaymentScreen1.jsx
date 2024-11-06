import React from 'react';
import { FaUser, FaCreditCard, FaCheckCircle, FaCcVisa, FaCcMastercard, FaCcApplePay, FaCcPaypal, FaGooglePay } from 'react-icons/fa';
import logo1 from "../../assets/images/payment/1.png"
import logo2 from "../../assets/images/payment/2.png"
import logo3 from "../../assets/images/payment/3.png"
import snip1 from "../../assets/images/payment/logo1.png"
import { RiDeleteBin5Line } from "react-icons/ri";


const PaymentScreen1 = ({ onNext, onBack }) => {
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

  return (
    <div className="w-full px-[5vw] text-white font-montserrat min-h-screen bg-[#1A0C25]">
      <div className="navsection pt-[6vw] w-full h-[15vw] px-[5vw] gap-[15vw] flex justify-center items-center py-[1vw]">
        <div className='flex flex-col justify-center items-center'>
          <div className="w-[8vw] h-[8vw] relative text-[#B7407DB2] border border-[#B7407D80] flex justify-center items-center rounded-2xl">
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
          <div className="w-[8vw] h-[8vw] relative text-[#B7407DB2] border border-[#B7407D80] flex justify-center items-center rounded-2xl">
            <h1 className='font-montserrat top-[1vw] left-[1.2vw] font-bold text-6xl absolute'>3</h1>
            <img className='absolute scale-[.7] left-[2vw] bottom-0' src={logo3} alt="" />
          </div>
          <h1 className='w-full text-center mt-[1vw] text-white font-montserrat'>Confirmation</h1>
        </div>
      </div>
      <div className="w-full text-base text-[#F6E8FB] mt-[5vw]">Home  - Assessment / therapy  - <span className='underline text-[#FB7CE4]'>Payment</span> </div>
      <div className="w-full mt-[5vw] min-h-[38vw] flex justify-center gap-[5vw]">
        <div className="left w-[30%] h-full">
          <h1 className='font-medium'>Order Summary</h1>
          <div className="flex mt-[2vw] justify-end"><RiDeleteBin5Line /></div>
          <div className='flex justify-center mt-[1vw] items-center gap-[1vw] pl-10'>
            <img src={snip1} alt="" />
            <div className='flex w-full justify-between items-center'>
              <h1>behavioral therapy</h1>
              <h1>$450.00</h1>
            </div>
          </div>
          <div className="mt-[4vw] text-base pl-10">
            <h1>Gift Card / Discount code</h1>
            <div className="flex justify-between gap-5 mt-2">
              <textarea className='rounded-xl bg-[#9C00AD63]' name="" id=""></textarea>
              <button className='px-10 py-3 border border-[#B740A1] rounded-xl'>Apply</button>
            </div>
            <div className="flex mt-6 justify-between items-center gap-5 border-b border-[#763e6c] pb-2">
              <h1>Subtotal:</h1>
              <h1>$160.00</h1>
            </div>
            <div className="flex mt-6 justify-between items-center gap-5 border-b border-[#763e6c] pb-2">
              <h1>Sales tax (6.5%):</h1>
              <h1>$4.23</h1>
            </div>
            <div className="flex mt-6 justify-between items-center gap-5 pb-2">
              <h1>Total due:</h1>
              <h1 className='font-semibold text-[#B740A1]'>$164.23</h1>
            </div>
          </div>
        </div>
        <div className="right w-[60%] h-full bg-[#564A5957] rounded-2xl p-[5vw]">
          <h1 className='text-xl font-semibold'>Complete registration payment</h1>
          <h1 className='mt-3 font-semibold'>Personal details</h1>
          <input className='bg-transparent mt-5 border border-[#9C00AD75] text-sm p-[.8vw] w-full' type="text" placeholder='Your Name' />
          <input className='bg-transparent mt-5 border border-[#9C00AD75] text-sm p-[.8vw] w-full' type="text" placeholder='Your Email' />
          <input className='bg-transparent mt-5 border border-[#9C00AD75] text-sm p-[.8vw] w-full' type="text" placeholder='Phone Number' />
          <div className="flex gap-[2vw]">
            <select
              className="bg-transparent pr-[2vw] mt-5 border border-[#9C00AD75] text-sm p-[.8vw] w-full"
              defaultValue=""
            > 
              <option className='text-black bg-[#564A5957]'  value="" disabled>Select State</option>
              <option className='text-black bg-[#564A5957]'  value="maharashtra">Maharashtra</option>
              <option className='text-black bg-[#564A5957]'  value="karnataka">Karnataka</option>
              <option className='text-black bg-[#564A5957]'  value="gujarat">Gujarat</option>
              {/* Add  more options as needed */}
            </select>

            {/* Area/City dropdown */}
            <select
              className="bg-transparent mt-5 border border-[#9C00AD75] text-sm p-[.8vw] w-full"
              defaultValue=""
            >
              <option className='text-black bg-[#564A5957]' value="" disabled>Select Area/City</option>
              <option className='text-black bg-[#564A5957]' value="mumbai">Mumbai</option>
              <option className='text-black bg-[#564A5957]' value="pune">Pune</option>
              <option className='text-black bg-[#564A5957]' value="bangalore">Bangalore</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="w-full mt-[3vw] flex gap-[5vw] justify-center items-center">
          <button onClick={onBack} className='py-3 px-7 border rounded-3xl border-[#9C00AD]'>Back</button>
            <button onClick={handleNext} className='py-3 px-7 border rounded-3xl border-[#9C00AD]'>Next</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PaymentScreen1;
