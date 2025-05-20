// import React, { useState } from "react";
// import LoginOtp from "./LoginOtp";
// import fetchData from "../config/fetchData";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const LoginPage = () => {
//   const [showOtpPage, setShowOtpPage] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   // const [email, setEmail] = useState("");
//   const [isButtonEnabled, setIsButtonEnabled] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // const handlePhoneChange = (e) => {
//   //   let value = e.target.value;

//   //   // Ensure the "+91" prefix is always present
//   //   if (!value.startsWith("+91")) {
//   //     value = "+91" + value.replace(/^\D+/g, ""); // Remove non-digit characters at the start
//   //   }

//   //   if (/^\+91\d{0,10}$/.test(value)) {
//   //     setPhoneNumber(value);
//   //     setIsButtonEnabled(value.length === 13);
//   //   }
//   // };

//   const handlePhoneChange = (e) => {
//     let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters

//     // Ensure "+91" is always present at the start
//     if (!value.startsWith("91")) {
//       value = "91" + value;
//     }

//     // Extract the last 10 digits (excluding "91" prefix)
//     if (value.length > 12) {
//       value = value.slice(0, 12); // Limit to "+91" + 10 digits
//     }

//     setPhoneNumber("+" + value);
//     setIsButtonEnabled(value.length === 12); // Enable button only when "+91" + 10 digits
//   };
//   console.log("phoneNumber", phoneNumber);

//   const handleEmailChange = (e) => {
//     const value = e.target.value;
//     setEmail(value);

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     setIsButtonEnabled(emailRegex.test(value)); // Enable button if valid
//   };
//   const SendOtp = async () => {
//     try {
//       setLoading(true);
//       setErrorMessage("");
//       const payload = { phoneNumber: phoneNumber };

//       const { response, error } = await fetchData({
//         url: "/api/otp/sendOtp",
//         method: "POST",
//         data: payload,
//       });

//       setLoading(false);

//       if (response) {
//         console.log("OTP Response:", response);
//         toast.success("OTP sent successfully!");
//         // Check for `status` and navigate to OTP page if true
//         if (response.status) {
//           setShowOtpPage(true);
//         } else {
//           toast.error(
//             response.message || "Failed to send OTP. Please try again."
//           );
//           setErrorMessage(
//             response.message || "Failed to send OTP. Please try again."
//           );
//         }
//       } else if (error) {
//         toast.error(
//           response.message || "Failed to send OTP. Please try again."
//         );
//         setErrorMessage(
//           error.message || "Failed to send OTP. Please try again."
//         );
//       }
//     } catch (error) {
//       setLoading(false);
//       toast.error("An error occurred while sending OTP. Please try again.");
//       console.error("Error in sending OTP:", error);
//       setErrorMessage("An error occurred while sending OTP. Please try again.");
//     }
//   };

//   return (

//       <>

//       <ToastContainer />
//       {!showOtpPage ? (
//         <div className="flex flex-col lg:flex-row min-h-screen bg-[#1A0C25] overflow-hidden relative">
//           {/* Pink Gradient Radiant Effect */}
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-20"></div>

//           {/* Left Section */}
//           <div className="lg:flex-[4] flex flex-col justify-start items-center lg:items-start text-white relative px-4 sm:pl-8 lg:pl-[10vw] xl:pl-38 pt-8 sm:pt-16 lg:pt-42 xl:pt-[10vw] 2xl:ml-[10vw] 2xl: z-10 max-sm:pt-4 max-sm:pb-4 max-sm:px-2 text-center lg:text-left md:px-6">
//             <div className="relative">
//               <h1 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold max-sm:text-2xl md:text-3xl">
//                 Ai.gnosis
//               </h1>
//               <h2 className="mt-4 text-lg sm:text-xl lg:text-2xl xl:text-3xl max-sm:text-base md:text-2xl">
//                 Early Autism Detection Made
//                 <br /> Easy & Accurate
//               </h2>

//               {/* Round Gradient behind the text */}
//               <div className="absolute left-[50%] transform translate-x-[-50%] lg:left-[.1rem] lg:translate-x-0 xl:left-[1rem]  bottom-[60px] bg-gradient-to-r from-purple-500 to-pink-500 blur-lg opacity-30 h-[60px] sm:h-[80px] lg:h-[90px] xl:h-[100px] w-[90px] sm:w-[120px] lg:w-[110px] xl:w-[100px] rounded-full max-sm:h-[40px] max-sm:w-[70px]"></div>

//               {/* Intersecting Lines */}
//               <div className="absolute w-full h-full hidden lg:block">
//                 <div className="absolute top-[34vh] 2xl:border-t-[2px] left-[-120%] xl:top-[32vh] xl:left-[-128%] 2xl:left-[-160%] w-[700px] xl:w-[800px] h-[700px] xl:h-[800px] border-t-[2px] border-[#811F67] rounded-full"></div>
//                 <div className="absolute top-[29vh] 2xl:border-t-[2px] left-[-130%] xl:top-[26vh] xl:left-[-130%] 2xl:left-[-170%] w-[600px] xl:w-[700px] h-[600px] xl:h-[700px] border-t-[2px] border-[#811F67] rounded-full"></div>
//               </div>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="lg:flex-[2] flex justify-center items-center bg-white relative z-20 p-4 lg:p-0 xl:pr-[10vw] max-sm:w-[70vw] max-sm:ml-[15vw] max-sm:mt-[10vw] max-sm:rounded-[4vw] max-sm:p-2 md:ml-0 md:mt-0 md:pr-8">
//             <div className="w-full sm:w-3/4 max-w-md">
//               <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 max-sm:text-base md:text-2xl">
//                 Welcome
//               </h2>
//               <p className="mb-4 text-sm sm:text-base lg:text-xl xl:text-2xl max-sm:text-sm md:text-xl">
//                 Please enter your details
//               </p>

//               <div className="mb-6">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     value={phoneNumber}
//                     onChange={handlePhoneChange}
//                     className="block w-full sm:w-[17vw] xl:w-[15vw] pl-10 pr-4 py-2 text-sm xl:text-base border border-gray-300 rounded-full shadow-sm focus:ring-[#811F67] focus:border-[#811F67] max-sm:text-xs max-sm:pl-8 max-sm:py-1 md:text-base md:w-[20vw]"
//                     placeholder="📞 Phone number"
//                   />
//                 </div>
//               </div>

//               <button
//                 className={`w-full sm:w-[17vw] xl:w-[15vw] py-2 text-sm xl:text-base max-sm:py-1 max-sm:mb-[2vw] max-sm:text-xs md:text-base md:w-[20vw] ${
//                   isButtonEnabled
//                     ? "bg-[#811F67] text-white hover:cursor-pointer"
//                     : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                 } font-semibold rounded-full`}
//                 disabled={!isButtonEnabled}
//                 onClick={SendOtp}
//               >
//                 {loading ? "Sending..." : "Send OTP"}
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <LoginOtp
//           phoneNumber={phoneNumber}
//           goBack={() => setShowOtpPage(false)}
//         />
//       )}
//     </>

//   );
// };

// export default LoginPage;

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState, useEffect, useRef } from "react";
import { auth } from "../config/firebaseconfig"; // Import the auth instance from your firebase.js file
import LoginOtp from "./LoginOtp";
import fetchData from "../config/fetchData";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [showOtpPage, setShowOtpPage] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [email, setEmail] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // // // // // // // // // // // // // //  firebase otp defn // // // // // // // // // // // // // //
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [message, setMessage] = useState("");
  const recaptchaVerifierRef = useRef(null);
  const recaptchaContainerRef = useRef(null);

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters

    // Ensure "+91" is always present at the start
    if (!value.startsWith("91")) {
      value = "91" + value;
    }

    // Extract the last 10 digits (excluding "91" prefix)
    if (value.length > 12) {
      value = value.slice(0, 12); // Limit to "+91" + 10 digits
    }

    setPhoneNumber("+" + value);
    setIsButtonEnabled(value.length === 12); // Enable button only when "+91" + 10 digits
  };
  console.log("phoneNumber", phoneNumber);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsButtonEnabled(emailRegex.test(value)); // Enable button if valid
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();

    if (!recaptchaVerifierRef.current) {
      setMessage(
        "reCAPTCHA not initialized. Please refresh the page and try again."
      );
      return;
    }

    setLoading(true);
    setMessage("");
    try {
      // Format phone number with country code if not already formatted
      const formattedPhoneNumber = phoneNumber.startsWith("+")
        ? phoneNumber
        : `+${phoneNumber}`;

      console.log("Sending OTP to:", formattedPhoneNumber);
      console.log("Using reCAPTCHA verifier:", recaptchaVerifierRef.current);

      const payload = { phoneNumber: formattedPhoneNumber };
      const { response, error } = await fetchData({
        url: "/api/otp/sendOtp",
        method: "POST",
        data: payload,
      });

      if (error) {
        console.log("Doggle sendOtp Error:", error);
        toast.error("Failed to send OTP. Please try again.");
      } else if (response) {
        // Send OTP using the ref verifier
        console.log("Doggle sendOtp Response:", response);
        const result = await signInWithPhoneNumber(
          auth,
          formattedPhoneNumber,
          recaptchaVerifierRef.current
        );
        setConfirmationResult(result);
        setMessage("OTP sent successfully! Please check your phone.");
        console.log("OTP sent successfully please check your phone: ", result);
        setShowOtpPage(true); // Show the OTP page after sending OTP
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setMessage(`Error sending OTP: ${error.message}`);

      // Reset reCAPTCHA on error
      if (recaptchaVerifierRef.current) {
        try {
          recaptchaVerifierRef.current.clear();
          recaptchaVerifierRef.current = null;

          // Recreate the reCAPTCHA
          if (recaptchaContainerRef.current) {
            recaptchaVerifierRef.current = new RecaptchaVerifier(
              auth,
              recaptchaContainerRef.current,
              {
                size: "normal",
                callback: () => console.log("reCAPTCHA reset after error"),
              }
            );
            recaptchaVerifierRef.current.render();
          }
        } catch (resetError) {
          console.error("Error resetting reCAPTCHA:", resetError);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  // // // // // // // // // // // // // //  firebase otp defn stop // // // // // // // // // // // // // //
  // const SendOtp = async () => {
  //   try {
  //     setLoading(true);
  //     setErrorMessage("");
  //     const payload = { phoneNumber: phoneNumber };

  //     const { response, error } = await fetchData({
  //       url: "/api/otp/sendOtp",
  //       method: "POST",
  //       data: payload,
  //     });

  //     setLoading(false);

  //     if (response) {
  //       console.log("OTP Response:", response);
  //       toast.success("OTP sent successfully!");
  //       console.log('OTP sent successfully!');
  //       // Check for `status` and navigate to OTP page if true
  //       if (response.status) {
  //         setShowOtpPage(true);
  //       } else {
  //         toast.error(
  //           response.message || "Failed to send OTP. Please try again."
  //         );
  //         setErrorMessage(
  //           response.message || "Failed to send OTP. Please try again."
  //         );
  //       }
  //     } else if (error) {
  //       toast.error(
  //         response.message || "Failed to send OTP. Please try again."
  //       );
  //       setErrorMessage(
  //         error.message || "Failed to send OTP. Please try again."
  //       );
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     toast.error("An error occurred while sending OTP. Please try again.");
  //     console.error("Error in sending OTP:", error);
  //     setErrorMessage("An error occurred while sending OTP. Please try again.");
  //   }
  // };

  useEffect(() => {
    // Only create the reCAPTCHA verifier if it doesn't exist and container is available
    if (!recaptchaVerifierRef.current && recaptchaContainerRef.current) {
      try {
        // Create a new RecaptchaVerifier
        recaptchaVerifierRef.current = new RecaptchaVerifier(
          auth,
          recaptchaContainerRef.current,
          {
            size: "normal", // Changed from invisible to normal for better troubleshooting
            callback: (response) => {
              console.log("reCAPTCHA solved", response);
            },
            "expired-callback": () => {
              console.log("reCAPTCHA expired");
              // Reset the reCAPTCHA when it expires
              if (recaptchaVerifierRef.current) {
                recaptchaVerifierRef.current.clear();
                recaptchaVerifierRef.current = null;

                // Recreate the reCAPTCHA
                recaptchaVerifierRef.current = new RecaptchaVerifier(
                  auth,
                  recaptchaContainerRef.current,
                  {
                    size: "normal",
                    callback: () => console.log("New reCAPTCHA solved"),
                  }
                );
                recaptchaVerifierRef.current.render();
              }
            },
          }
        );

        // Render the reCAPTCHA
        recaptchaVerifierRef.current
          .render()
          .then(() => console.log("reCAPTCHA rendered successfully"))
          .catch((error) => console.error("Error rendering reCAPTCHA:", error));
      } catch (error) {
        console.error("Error creating reCAPTCHA verifier:", error);
      }
    }

    // Clean up when component unmounts
    return () => {
      if (recaptchaVerifierRef.current) {
        try {
          recaptchaVerifierRef.current.clear();
          recaptchaVerifierRef.current = null;
        } catch (error) {
          console.error("Error clearing reCAPTCHA:", error);
        }
      }
    };
  }, []);

  return (
    <>
      <ToastContainer />
      {!showOtpPage ? (
        <div className="flex flex-col lg:flex-row min-h-screen bg-[#1A0C25] overflow-hidden relative">
          {/* Pink Gradient Radiant Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl opacity-20"></div>

          {/* Left Section */}
          <div className="lg:flex-[4] flex flex-col justify-start items-center lg:items-start text-white relative px-4 sm:pl-8 lg:pl-[10vw] xl:pl-38 pt-8 sm:pt-16 lg:pt-42 xl:pt-[10vw] 2xl:ml-[10vw] 2xl: z-10 max-sm:pt-4 max-sm:pb-4 max-sm:px-2 text-center lg:text-left md:px-6">
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold max-sm:text-2xl md:text-3xl">
                Ai.gnosis
              </h1>
              <h2 className="mt-4 text-lg sm:text-xl lg:text-2xl xl:text-3xl max-sm:text-base md:text-2xl">
                Early Autism Detection Made
                <br /> Easy & Accurate
              </h2>

              {/* Round Gradient behind the text */}
              <div className="absolute left-[50%] transform translate-x-[-50%] lg:left-[.1rem] lg:translate-x-0 xl:left-[1rem]  bottom-[60px] bg-gradient-to-r from-purple-500 to-pink-500 blur-lg opacity-30 h-[60px] sm:h-[80px] lg:h-[90px] xl:h-[100px] w-[90px] sm:w-[120px] lg:w-[110px] xl:w-[100px] rounded-full max-sm:h-[40px] max-sm:w-[70px]"></div>

              {/* Intersecting Lines */}
              <div className="absolute w-full h-full hidden lg:block">
                <div className="absolute top-[34vh] 2xl:border-t-[2px] left-[-120%] xl:top-[32vh] xl:left-[-128%] 2xl:left-[-160%] w-[700px] xl:w-[800px] h-[700px] xl:h-[800px] border-t-[2px] border-[#811F67] rounded-full"></div>
                <div className="absolute top-[29vh] 2xl:border-t-[2px] left-[-130%] xl:top-[26vh] xl:left-[-130%] 2xl:left-[-170%] w-[600px] xl:w-[700px] h-[600px] xl:h-[700px] border-t-[2px] border-[#811F67] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:flex-[2] flex justify-center items-center bg-white relative z-20 p-4 lg:p-0 xl:pr-[10vw] max-sm:w-[70vw] max-sm:ml-[15vw] max-sm:mt-[10vw] max-sm:rounded-[4vw] max-sm:p-2 md:ml-0 md:mt-0 md:pr-8">
            <div className="w-full sm:w-3/4 max-w-md">
              <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 max-sm:text-base md:text-2xl">
                Welcome
              </h2>
              <p className="mb-4 text-sm sm:text-base lg:text-xl xl:text-2xl max-sm:text-sm md:text-xl">
                Please enter your details
              </p>

              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    className="block w-full sm:w-[17vw] xl:w-[15vw] pl-10 pr-4 py-2 text-sm xl:text-base border border-gray-300 rounded-full shadow-sm focus:ring-[#811F67] focus:border-[#811F67] max-sm:text-xs max-sm:pl-8 max-sm:py-1 md:text-base md:w-[20vw]"
                    placeholder="📞 Phone number"
                  />
                </div>
              </div>

              <div
                ref={recaptchaContainerRef}
                className="recaptcha-container"
                style={{ marginBottom: "20px" }}
              ></div>

              <button
                className={`w-full sm:w-[17vw] xl:w-[15vw] py-2 text-sm xl:text-base max-sm:py-1 max-sm:mb-[2vw] max-sm:text-xs md:text-base md:w-[20vw] ${
                  isButtonEnabled
                    ? "bg-[#811F67] text-white hover:cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                } font-semibold rounded-full`}
                disabled={!isButtonEnabled}
                onClick={handleSendOTP}
              >
                {loading ? "Sending..." : "Send OTP"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <LoginOtp
          phoneNumber={phoneNumber}
          goBack={() => setShowOtpPage(false)}
          confirmationResult={confirmationResult}
        />
      )}
    </>
  );
};

export default LoginPage;
