// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import fetchData from "../config/fetchData";  // Assuming you have this function to make API calls
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// const LoginOtp = ({ goBack, phoneNumber }) => {
//   const navigate = useNavigate()
//   const [otp, setOtp] = useState(["", "", "", "","", ""]); // For OTP input
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showOtpPage, setShowOtpPage] = useState(false);

//   const otpInputs = useRef([]);  // Ref to track OTP input fields

//   const handleOtpChange = (e, index) => {
//     const value = e.target.value;

//     if (/^\d{0,1}$/.test(value)) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);

//       // Focus the next input field automatically when a digit is entered
//       if (value !== "" && index < otp.length - 1) {
//         otpInputs.current[index + 1].focus(); // Focus next input
//       }
//     }
//   };
//   const handleKeyDown = (e, index) => {
//     // Handle backspace for focusing the previous input
//     if (e.key === "Backspace" && otp[index] === "") {
//       if (index > 0) {
//         otpInputs.current[index - 1].focus(); // Focus previous input
//       }
//     }
//   };
//   const handleSubmit = async () => {
//     const otpValue = otp.join("");

//     if (otpValue.length !== 6) {
//       setErrorMessage("Please enter a valid 6-digit OTP");
//       return;
//     }

//     try {
//       setLoading(true);
//       setErrorMessage("");

//       const payload = { phoneNumber, otp: otpValue };
//       const { response, error } = await fetchData({
//         url: "/api/otp/verifyOtp",
//         method: "POST",
//         data: payload,
//       });

//       setLoading(false);

//       if (response) {
//         localStorage.setItem("authToken", response.token);
//         localStorage.setItem("user", JSON.stringify(response.user));

//         console.log('token is ', JSON.stringify(response.token))

//         toast.success("OTP verified successfully! Redirecting...");

//         const preOrderData = JSON.parse(localStorage.getItem("preOrderData"));
//         if (preOrderData) {
//           toast.success("Redirecting to payment...");

//           // ✅ Redirect first, DO NOT REMOVE preOrderData immediately
//           navigate(preOrderData.fromPage);

//           // ✅ Use a delay to remove preOrderData AFTER the page loads
//           setTimeout(() => {
//             console.log("Clearing preOrderData after redirection...");
//             localStorage.removeItem("preOrderData");
//           }, 3000); // Give 3 seconds for the payment page to read it

//           return;
//         }

//         // ✅ Normal login goes to dashboard
//         navigate("/dashboard");
//       } else if (error) {
//         setErrorMessage(error.message || "OTP verification failed.");
//         toast.error(error.message || "OTP verification failed.");
//       }
//     } catch (error) {
//       setLoading(false);
//       setErrorMessage("An error occurred during OTP verification.");
//       toast.error("An error occurred during OTP verification.");
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row min-h-screen bg-[#1A0C25] overflow-hidden relative">
//       {/* Pink Gradient Radiant Effect */}
//       <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-20"></div>

//       {/* Left Section */}
//       <div className="lg:flex-[2] flex flex-col justify-start items-center lg:items-start text-white relative px-4 sm:pl-8 lg:pl-56 xl:pl-38 pt-8 sm:pt-16 lg:pt-42 xl:pt-[10vw] 2xl:ml-[10vw] 2xl: z-10 max-sm:pt-4 max-sm:pb-4 max-sm:px-2 text-center lg:text-left md:px-60">
//         <div className="relative">
//           <h1 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold max-sm:text-2xl md:text-3xl">
//             Aignosis
//           </h1>
//           <h2 className="mt-4 text-lg sm:text-xl lg:text-2xl xl:text-3xl max-sm:text-base md:text-2xl">
//             Early Autism Detection Made<br /> Easy & Accurate
//           </h2>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="lg:flex-[2] flex justify-center items-center bg-white relative z-20 p-4 lg:p-0 xl:pr-[10vw] max-sm:w-[70vw] max-sm:h-[100vw] max-sm:ml-[15vw] max-sm:rounded-[4vw] md:ml-0 md:mt-0 md:pr-8">
//         <button
//           onClick={goBack}
//           className="absolute top-[12vw] left-[5.5vw] text-2xl max-sm:ml-[8vw] max-sm:top-[8vw] text-[#811F67] font-bold"
//         >
//           &lt;
//         </button>
//         <div className="w-3/4 max-w-md ml-[6vw] mt-[4vw] relative">
//           <h2 className="text-2xl font-bold mb-2 max-sm:text-lg">Enter your OTP</h2>
//           <p className="mb-2 text-sm text-gray-500">
//             OTP has been sent to {phoneNumber}
//           </p>
//           <p className="mb-4 text-sm text-red-500 max-sm:sm">{errorMessage}</p>

//           <div className="mb-2 flex space-x-2 max-sm:space-x-1">
//             {otp.map((digit, index) => (
//               <input
//                 key={index}
//                 type="text"
//                 maxLength="1"
//                 value={digit}
//                 onChange={(e) => handleOtpChange(e, index)}
//                 onKeyDown={(e) => handleKeyDown(e, index)}
//                 ref={(el) => (otpInputs.current[index] = el)}  // Set the ref
//                 className="w-12 h-12 text-center max-sm:w-[8vw] max-sm:h-[8vw] text-lg border border-gray-300 rounded-md shadow-sm focus:ring-[#811F67] focus:border-[#811F67]"
//               />
//             ))}
//           </div>

//           <button className="block text-[#811F67] font-semibold mb-4 max-sm:ml-[9vw] mt-4">
//             Resend
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="border border-[#B740A1] bg-[#811F67] p-2 px-11 rounded-[30px]"
//           >
//             <span className="text-sm max-sm:w-[35vw] text-white p-auto font-semibold rounded-full">
//               Log In
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginOtp;

import React, { useState, useRef } from 'react';
import fetchData from '../config/fetchData'; // Assuming you have this function to make API calls
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const LoginOtp = ({ goBack, phoneNumber, confirmationResult }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // For OTP input
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOtpPage, setShowOtpPage] = useState(false);

  const otpInputs = useRef([]); // Ref to track OTP input fields

  // const handleVerifyOTP = async (e) => {
  //   e.preventDefault();
  //   if (!confirmationResult) {
  //     console.log("Please send OTP first");
  //     return;
  //   }

  //   setLoading(true);
  //   var otpValue = otp.join(""); // Join the OTP digits
  //   console.log("OTP Value:", typeof otpValue); // Log the OTP value
  //   try {
  //     // Verify OTP
  //     const result = await confirmationResult.confirm(otpValue);
  //     const user = result.user;
  //     console.log(`Phone number verified successfully! User ID: ${user.uid}`);

  //     user['_id'] = user.uid; // Add _id property to user object

  //     console.log("User in local storage:", user);

  //     const payload = { phoneNumber, otp: otpValue };
  //     const { response, error } = await fetchData({
  //       url: "/api/otp/verifyOtp",
  //       method: "POST",
  //       data: payload,
  //     });

  //     console.log("Response from doggle user data server:", response);
  //     // Doggle code for user data fetching operations after verification done
  //     localStorage.setItem("authToken", response.token);
  //     // localStorage.setItem("user", JSON.stringify(response.user));

  //     toast.success("OTP verified successfully! Redirecting...");

  //     const preOrderData = JSON.parse(localStorage.getItem("preOrderData"));
  //     if (preOrderData) {
  //       toast.success("Redirecting to payment...");

  //       // ✅ Redirect first, DO NOT REMOVE preOrderData immediately
  //       navigate(preOrderData.fromPage);

  //       // ✅ Use a delay to remove preOrderData AFTER the page loads
  //       setTimeout(() => {
  //         console.log("Clearing preOrderData after redirection...");
  //         localStorage.removeItem("preOrderData");
  //       }, 3000); // Give 3 seconds for the payment page to read it
  //     }

  //     navigate("/dashboard");

  //     // doggle code for user data fetching operations after verification done
  //   } catch (error) {
  //     // doggle toast code
  //     setErrorMessage("OTP verification failed.");
  //     toast.error("OTP verification failed.");
  //     // doggle toast code done
  //     console.error("Error verifying OTP:", error);
  //     console.log(`Error verifying OTP: ${error.message}`);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    if (/^\d{0,1}$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus the next input field automatically when a digit is entered
      if (value !== '' && index < otp.length - 1) {
        otpInputs.current[index + 1].focus(); // Focus next input
      }
    }
  };
  const handleKeyDown = (e, index) => {
    // Handle backspace for focusing the previous input
    if (e.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        otpInputs.current[index - 1].focus(); // Focus previous input
      }
    }
  };
  const handleSubmit = async () => {
    const otpValue = otp.join('');

    if (otpValue.length !== 6) {
      setErrorMessage('Please enter a valid 6-digit OTP');
      return;
    }

    try {
      setLoading(true);
      setErrorMessage('');

      const payload = { phoneNumber, otp: otpValue };
      const { response, error } = await fetchData({
        url: '/api/otp/verifyOtp',
        method: 'POST',
        data: payload,
      });

      console.log('Response from doggle user data server:', response);
      console.error('Error from doggle user data server:', error);

      setLoading(false);

      if (response) {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        // console.log("user in local storage:", response.user);
        // console.log("auth token in local storage:", response.token);

        toast.success('OTP verified successfully! Redirecting...');

        const preOrderData = JSON.parse(localStorage.getItem('preOrderData'));
        if (preOrderData) {
          toast.success('Redirecting to payment...');

          // ✅ Redirect first, DO NOT REMOVE preOrderData immediately
          navigate(preOrderData.fromPage);

          // ✅ Use a delay to remove preOrderData AFTER the page loads
          setTimeout(() => {
            console.log('Clearing preOrderData after redirection...');
            localStorage.removeItem('preOrderData');
          }, 3000); // Give 3 seconds for the payment page to read it

          return;
        }

        // ✅ Normal login goes to dashboard
        navigate('/dashboard');
      } else if (error) {
        setErrorMessage(error.message || 'OTP verification failed.');
        toast.error(error.message || 'OTP verification failed.');
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage('An error occurred during OTP verification.');
      toast.error('An error occurred during OTP verification.');
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#1A0C25] lg:flex-row">
      {/* Pink Gradient Radiant Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl"></div>

      {/* Left Section */}
      <div className="xl:pl-38 lg:pt-42 2xl:ml-[10vw] 2xl: relative z-10 flex flex-col items-center justify-start px-4 pt-8 text-center text-white max-sm:px-2 max-sm:pb-4 max-sm:pt-4 sm:pl-8 sm:pt-16 md:px-60 lg:flex-[2] lg:items-start lg:pl-56 lg:text-left xl:pt-[10vw]">
        <div className="relative">
          <h1 className="text-3xl font-bold max-sm:text-2xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-4xl">
            Aignosis
          </h1>
          <h2 className="mt-4 text-lg max-sm:text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl">
            Early Autism Detection Made
            <br /> Easy & Accurate
          </h2>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative z-20 flex items-center justify-center bg-white p-4 max-sm:ml-[15vw] max-sm:h-[100vw] max-sm:w-[70vw] max-sm:rounded-[4vw] md:ml-0 md:mt-0 md:pr-8 lg:flex-[2] lg:p-0 xl:pr-[10vw]">
        <button
          onClick={goBack}
          className="absolute left-[5.5vw] top-[12vw] text-2xl font-bold text-[#811F67] max-sm:top-[8vw] max-sm:ml-[8vw]"
        >
          &lt;
        </button>
        <div className="relative ml-[6vw] mt-[4vw] w-3/4 max-w-md">
          <h2 className="mb-2 text-2xl font-bold max-sm:text-lg">Enter your OTP</h2>
          <p className="mb-2 text-sm text-gray-500">OTP has been sent to {phoneNumber}</p>
          <p className="max-sm:sm mb-4 text-sm text-red-500">{errorMessage}</p>

          <div className="mb-2 flex space-x-2 max-sm:space-x-1">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (otpInputs.current[index] = el)} // Set the ref
                className="h-12 w-12 rounded-md border border-gray-300 text-center text-lg shadow-sm focus:border-[#811F67] focus:ring-[#811F67] max-sm:h-[8vw] max-sm:w-[8vw]"
              />
            ))}
          </div>

          <button className="mb-4 mt-4 block font-semibold text-[#811F67] max-sm:ml-[9vw]">Resend</button>
          <button onClick={handleSubmit} className="rounded-[30px] border border-[#B740A1] bg-[#811F67] p-2 px-11">
            <span className="p-auto rounded-full text-sm font-semibold text-white max-sm:w-[35vw]">Log In</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginOtp;
