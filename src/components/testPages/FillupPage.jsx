// import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import CalibrationPage from "./CalibrationPage";
// import { DatePicker, Checkbox } from "antd";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../aignosisintegration/AppContext";
// import { format } from "date-fns";
// import Protectedpage from "./Protectedpage";
// import { v4 as uuidv4 } from "uuid";

// export const FillupPage = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [isBackInfoVisible, setIsBackInfoVisible] = useState(false);
//   const [dob, setDob] = useState(null);
//   const [consent, setConsent] = useState(false);
//   const [, setAgeYears] = useState("");
//   const [, setAgeMonths] = useState("");
//   const [, setAgeFullYear] = useState("");
//   const navigate = useNavigate();
//   const { testData, setTestData } = useContext(AppContext);

//   useEffect(() => {
//     if (localStorage.getItem("user") != null) {
//       console.log("Existing UID found "+ JSON.parse(localStorage.getItem("user")).phoneNumber)
//       setTestData({
//         ...testData,
//         PATIENT_UID: JSON.parse(localStorage.getItem("user")).phoneNumber,
//         TRANSACTION_ID: uuidv4(),
//       });
//     } else {
//       console.log("UID of current person is null...setting custom patient UID");
//       setTestData({
//         ...testData,
//         PATIENT_UID: uuidv4(),
//         TRANSACTION_ID: uuidv4(),
//       });

//     }
//     setDob(formatDate(selectedDate));

//     // Push initial state to prevent default navigation
//     window.history.pushState(null, null, window.location.href);

//     const handleBackButton = () => {
//       navigate("/dashboard");
//     };

//     window.addEventListener("popstate", handleBackButton);

//     return () => {
//       window.removeEventListener("popstate", handleBackButton);
//     };
//   }, [navigate, selectedDate]);

//   const handleNextClick = async () => {
//     if (
//       document.getElementById("patient-name-input").value == "" ||
//       !dob ||
//       document.getElementById("guardian-pno-input").value == ""
//     ) {
//       alert("Please fill all fields and agree to the consent");
//     } else {
//       checkGuardianPnoValidity();
//       setTestData({
//         ...testData,
//         patientName: document.getElementById("patient-name-input").value,
//         patientDOB: dob,
//         guardianPno: document.getElementById("guardian-pno-input").value,
//         clinicOrReferrerName: document.getElementById("referrer-name-input")
//           .value,
//         consentGiven: consent,
//       });

//       console.log(testData);
//       navigate("/autismtest");
//     }
//   };

//   function checkGuardianPnoValidity() {
//     console.log(document.getElementById("guardian-pno-input").value);
//   }

//   function formatDate(date) {
//     if (date && !isNaN(date)) {
//       return format(new Date(date), "dd/MM/yyyy");
//     }
//     return "";
//   }

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     const formattedDate = formatDate(date ? date.toDate() : null);
//     setDob(formattedDate);
//   };

//   return (
//     <Protectedpage>
//       <div className="bg-[#1A0C25] flex flex-col justify-between min-h-screen h-full">
//         <div className="flex-grow flex flex-col justify-center items-center py-8">
//           {!isBackInfoVisible ? (
//             <div className="flex flex-row max-sm:flex-col max-sm:justify-center items-center justify-between w-full max-w-7xl px-4">
//               <div className="flex flex-col items-start space-y-[80px] px-8 max-sm:mt-[50px]">
//                 <div className="relative inline-block m-[auto]">
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg"></div>
//                   <span className="relative text-4xl font-semibold tracking-wide text-white z-10">
//                     Ai.gnosis
//                   </span>
//                 </div>

//                 <div className="flex flex-col space-y-4 max-w-sm">
//                   <p className="text-white font-manrope text-center text-2xl">
//                     Please take the assessment to{" "}
//                     <span className="text-left">begin with diagnosis</span>
//                   </p>
//                   <p className="text-[#FFFFFF] font-raleway text-sm px-4 py-2 text-center">
//                     Assessment duration: 5 mins
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-[#564A5957] p-10 rounded-2xl shadow-lg w-[50vw] max-sm:w-auto mx-8">
//                 <h2 className="text-white text-2xl font-semibold mb-4 font-manrope text-center">
//                   Welcome to Ai.gnosis early detection screener
//                 </h2>
//                 <p className="text-gray-400 text-sm mb-8 font-raleway text-center">
//                   Ai.gnosis is an online platform that helps you detect early
//                   signs of developmental disorder in children.
//                 </p>

//                 <form className="space-y-4">
//                   <input
//                     id="patient-name-input"
//                     type="text"
//                     placeholder="Patient Name"
//                     className="bg-[#1A0C25] text-white px-4 py-2.5 rounded-lg w-full placeholder-gray-500 border border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500"
//                   />

//                   <DatePicker
//                     onChange={handleDateChange}
//                     format="DD/MM/YYYY"
//                     className="w-full text-white bg-[#1A0C25] border border-[#B7407D4D] focus:ring-2 focus:ring-pink-500"
//                     placeholder="Date of Birth"
//                     style={{
//                       color: "black",
//                       backgroundColor: "white",
//                       width: "100%",
//                       borderColor: "#B7407D4D",
//                     }}
//                   />

//                   <input
//                     id="guardian-pno-input"
//                     type="tel"
//                     placeholder="Patient Guardian Phone"
//                     className="bg-[#1A0C25] text-white px-4 py-2.5 rounded-lg w-full placeholder-gray-500 border border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500"
//                   />

//                   <input
//                     id="referrer-name-input"
//                     type="text"
//                     placeholder="Clinic Name / Referred Doctor"
//                     className="bg-[#1A0C25] text-white px-4 py-2.5 rounded-lg w-full placeholder-gray-500 border border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500"
//                   />

//                   <div className="flex justify-center items-center gap-2 max-sm:flex-col">
//                     <Link
//                       to="/prices"
//                       className="text-white border border-[#9C00AD] px-6 py-3 rounded-full font-semibold mt-4 w-[150px] flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#9C00AD] hover:border-transparent hover:shadow-md"
//                     >
//                       Back
//                     </Link>

//                     <button
//                       type="button"
//                       onClick={handleNextClick}
//                       className="hover:bg-pink-700 text-white border border-[#9C00AD] px-6 py-3 rounded-full font-semibold mt-4 w-[150px] flex justify-center items-center"
//                     >
//                       Next
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           ) : (
//             <CalibrationPage />
//           )}
//         </div>

//         <div className="w-full bg-[#5e235b] py-3 px-4 flex items-center justify-center">
//           <div className="flex items-center">
//             <Checkbox
//               checked={consent}
//               onChange={(e) => {
//                 setConsent(e.target.checked);
//                 setTestData({
//                   ...testData,
//                   data_usage_consent: e.target.checked,
//                 });
//               }}
//               className="mr-3"
//               style={{ color: "white" }}
//             />
//             <div className="text-white">
//               I give my consent for my data to be used for research purposes. I
//               understand that my data will be securely stored, anonymized where
//               necessary, and used to improve services and research outcomes.
//             </div>
//           </div>
//         </div>
//       </div>
//     </Protectedpage>
//   );
// };

// export default FillupPage;

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CalibrationPage from "./CalibrationPage";
import { DatePicker, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../aignosisintegration/AppContext";
import { format } from "date-fns";
import Protectedpage from "./Protectedpage";
import { v4 as uuidv4 } from "uuid";

export const FillupPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isBackInfoVisible, setIsBackInfoVisible] = useState(false);
  const [dob, setDob] = useState(null);
  const [consent, setConsent] = useState(false);
  const [, setAgeYears] = useState("");
  const [, setAgeMonths] = useState("");
  const [, setAgeFullYear] = useState("");
  const navigate = useNavigate();
  const { testData, setTestData } = useContext(AppContext);

  function cleanPhoneNumber(phone) {
    return phone.replace(/\D/g, ""); // Removes all non-digit characters
  }


  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      console.log(
        "Existing UID found " +
          JSON.parse(localStorage.getItem("user")).phoneNumber
      );

      var cleanedPhoneNumber = cleanPhoneNumber(
        JSON.parse(localStorage.getItem("user")).phoneNumber
      );

      setTestData({
        ...testData,
        PATIENT_UID: cleanedPhoneNumber,
        TRANSACTION_ID: uuidv4(),
      });
    } else {
      console.log("UID of current person is null...setting custom patient UID");
      setTestData({
        ...testData,
        PATIENT_UID: uuidv4(),
        TRANSACTION_ID: uuidv4(),
      });
    }
    setDob(formatDate(selectedDate));

    // Push initial state to prevent default navigation
    window.history.pushState(null, null, window.location.href);

    const handleBackButton = () => {
      navigate("/dashboard");
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [navigate, selectedDate, consent]);

  const handleNextClick = async () => {
    if (
      document.getElementById("patient-name-input").value == "" ||
      !dob ||
      document.getElementById("guardian-pno-input").value == ""
    ) {
      alert("Please fill all fields and agree to the consent");
    } else {
      checkGuardianPnoValidity();
      setTestData({
        ...testData,
        patientName: document.getElementById("patient-name-input").value,
        patientDOB: dob,
        guardianPno: document.getElementById("guardian-pno-input").value,
        clinicOrReferrerName: document.getElementById("referrer-name-input")
          .value,
        consentGiven: consent,
      });

      console.log(testData);
      navigate("/autismtest");
    }
  };

  function checkGuardianPnoValidity() {
    console.log(document.getElementById("guardian-pno-input").value);
  }

  function formatDate(date) {
    if (date && !isNaN(date)) {
      return format(new Date(date), "dd/MM/yyyy");
    }
    return "";
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = formatDate(date ? date.toDate() : null);
    setDob(formattedDate);
  };

  return (
    <Protectedpage>
      <div className="bg-[#1A0C25] flex flex-col justify-between min-h-screen h-full">
        <div className="flex-grow flex flex-col justify-center items-center py-8">
          {!isBackInfoVisible ? (
            <div className="flex flex-row max-sm:flex-col max-sm:justify-center items-center justify-between w-full max-w-7xl px-4">
              <div className="flex flex-col items-start space-y-[80px] px-8 max-sm:mt-[50px]">
                <div className="relative inline-block m-[auto]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-60 rounded-lg"></div>
                  <span className="relative text-4xl font-semibold tracking-wide text-white z-10">
                    Ai.gnosis
                  </span>
                </div>

                <div className="flex flex-col space-y-4 max-w-sm">
                  <p className="text-white font-manrope text-center text-2xl">
                    Please take the assessment to{" "}
                    <span className="text-left">begin with diagnosis</span>
                  </p>
                  <p className="text-[#FFFFFF] font-raleway text-sm px-4 py-2 text-center">
                    Assessment duration: 5 mins
                  </p>
                </div>
              </div>

              <div className="bg-[#564A5957] p-10 rounded-2xl shadow-lg w-[50vw] max-sm:w-auto mx-8">
                <h2 className="text-white text-2xl font-semibold mb-4 font-manrope text-center">
                  Welcome to Ai.gnosis early detection screener
                </h2>
                <p className="text-gray-400 text-sm mb-8 font-raleway text-center">
                  Ai.gnosis is an online platform that helps you detect early
                  signs of developmental disorder in children.
                </p>

                <form className="space-y-4">
                  <input
                    id="patient-name-input"
                    type="text"
                    placeholder="Patient Name"
                    className="bg-[#1A0C25] text-white px-4 py-2.5 rounded-lg w-full placeholder-gray-500 border border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />

                  <DatePicker
                    onChange={handleDateChange}
                    format="DD/MM/YYYY"
                    className="w-full text-white bg-[#1A0C25] border border-[#B7407D4D] focus:ring-2 focus:ring-pink-500"
                    placeholder="Date of Birth"
                    style={{
                      color: "black",
                      backgroundColor: "white",
                      width: "100%",
                      borderColor: "#B7407D4D",
                    }}
                  />

                  <input
                    id="guardian-pno-input"
                    type="tel"
                    placeholder="Patient Guardian Phone"
                    className="bg-[#1A0C25] text-white px-4 py-2.5 rounded-lg w-full placeholder-gray-500 border border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />

                  <input
                    id="referrer-name-input"
                    type="text"
                    placeholder="Clinic Name / Referred Doctor"
                    className="bg-[#1A0C25] text-white px-4 py-2.5 rounded-lg w-full placeholder-gray-500 border border-[#B7407D4D] focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />

                  <div className="flex justify-center items-center gap-2 max-sm:flex-col">
                    <Link
                      to="/prices"
                      className="text-white border border-[#9C00AD] px-6 py-3 rounded-full font-semibold mt-4 w-[150px] flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#9C00AD] hover:border-transparent hover:shadow-md"
                    >
                      Back
                    </Link>

                    <button
                      type="button"
                      onClick={handleNextClick}
                      className="hover:bg-pink-700 text-white border border-[#9C00AD] px-6 py-3 rounded-full font-semibold mt-4 w-[150px] flex justify-center items-center"
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <CalibrationPage />
          )}
        </div>

        <div className="w-full bg-[#5e235b] py-3 px-9 flex items-center justify-center">
          <div className="flex items-center">
            <Checkbox
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                setTestData({
                  ...testData,
                  data_usage_consent: e.target.checked,
                });
              }}
              className="mr-3"
              style={{ color: "white" }}
            />
            <div className="text-white" style={{textAlign: 'center'}}>
              I give my consent for my data to be used for research purposes. I
              understand that my data will be securely stored, anonymized where
              necessary, and used to improve services and research outcomes.
            </div>
          </div>
        </div>
      </div>
    </Protectedpage>
  );
};

export default FillupPage;
