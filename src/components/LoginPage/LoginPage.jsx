import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useState, useEffect, useRef } from 'react';
import { auth } from '../config/firebaseconfig'; // Import the auth instance from your firebase.js file
import LoginOtp from './LoginOtp';
import fetchData from '../config/fetchData';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PhoneInput, { parsePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './LoginPageStyles.css';

const LoginPage = () => {
  const [showOtpPage, setShowOtpPage] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  // // // // // // // // // // // // // //  firebase otp defn // // // // // // // // // // // // // //
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const recaptchaVerifierRef = useRef(null);
  const recaptchaContainerRef = useRef(null);

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
    setIsButtonEnabled(!!value && value.length >= 10);
  };

  // Generate UID in format: countryCode_PhoneNumber (without + symbol)
  const getPhoneUID = () => {
    if (!phoneNumber) return '';
    const cleanNumber = phoneNumber.replace('+', '');
    const countryCode = parsePhoneNumber(phoneNumber).countryCallingCode;
    const number = cleanNumber.replace(countryCode, '').replace(/\D/g, ''); // Remove non-digit characters
    return `${countryCode}_${number}`;
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();

    if (!recaptchaVerifierRef.current) {
      console.log('reCAPTCHA not initialized. Please refresh the page and try again.');
      return;
    }

    setLoading(true);
    try {
      // Use the phoneNumber directly as it's already in international format
      const formattedPhoneNumber = phoneNumber;
      // Use the UID format as phoneNumber for backend API
      const phoneUID = getPhoneUID();
      console.log('Sending OTP to Firebase:', formattedPhoneNumber);
      console.log('Phone UID for backend:', phoneUID);
      console.log('Using reCAPTCHA verifier:', recaptchaVerifierRef.current);

      const payload = { phoneNumber: phoneUID }; // Backend uses countryCode_phoneNumber format
      const { response, error } = await fetchData({
        url: '/api/otp/sendOtp',
        method: 'POST',
        data: payload,
        storedToken: null, // No token needed for OTP sending
      });

      if (error) {
        console.log('Doggle sendOtp Error:', error);
        toast.error('Failed to send OTP. Please try again.');
      } else if (response) {
        // Send OTP using the ref verifier with full international format
        console.log('Doggle sendOtp Response:', response);
        const result = await signInWithPhoneNumber(auth, formattedPhoneNumber, recaptchaVerifierRef.current);
        console.log('OTP sent successfully please check your phone: ', result);
        setShowOtpPage(true); // Show the OTP page after sending OTP
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      toast.error(`Error sending OTP: ${error.message}`);

      // Reset reCAPTCHA on error
      if (recaptchaVerifierRef.current) {
        try {
          recaptchaVerifierRef.current.clear();
          recaptchaVerifierRef.current = null;

          // Recreate the reCAPTCHA
          if (recaptchaContainerRef.current) {
            recaptchaVerifierRef.current = new RecaptchaVerifier(auth, recaptchaContainerRef.current, {
              size: 'normal',
              callback: () => console.log('reCAPTCHA reset after error'),
            });
            recaptchaVerifierRef.current.render();
          }
        } catch (resetError) {
          console.error('Error resetting reCAPTCHA:', resetError);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Only create the reCAPTCHA verifier if it doesn't exist and container is available
    if (!recaptchaVerifierRef.current && recaptchaContainerRef.current) {
      try {
        // Create a new RecaptchaVerifier
        recaptchaVerifierRef.current = new RecaptchaVerifier(auth, recaptchaContainerRef.current, {
          size: 'normal', // Changed from invisible to normal for better troubleshooting
          callback: (response) => {
            setIsCaptchaVerified(true);
            console.log('reCAPTCHA solved', response);
          },
          'expired-callback': () => {
            console.log('reCAPTCHA expired');
            // Reset the reCAPTCHA when it expires
            if (recaptchaVerifierRef.current) {
              recaptchaVerifierRef.current.clear();
              recaptchaVerifierRef.current = null;

              // Recreate the reCAPTCHA
              recaptchaVerifierRef.current = new RecaptchaVerifier(auth, recaptchaContainerRef.current, {
                size: 'normal',
                callback: (response) => {
                  setIsCaptchaVerified(true);
                  console.log('reCAPTCHA solved after expiry reset', response);
                },
              });
              recaptchaVerifierRef.current.render();
            }
          },
        });

        // Render the reCAPTCHA
        recaptchaVerifierRef.current
          .render()
          .then(() => console.log('reCAPTCHA rendered successfully'))
          .catch((error) => console.error('Error rendering reCAPTCHA:', error));
      } catch (error) {
        console.error('Error creating reCAPTCHA verifier:', error);
      }
    }

    // Clean up when component unmounts
    return () => {
      if (recaptchaVerifierRef.current) {
        try {
          recaptchaVerifierRef.current.clear();
          recaptchaVerifierRef.current = null;
        } catch (error) {
          console.error('Error clearing reCAPTCHA:', error);
        }
      }
    };
  }, [showOtpPage]);

  return (
    <>
      <ToastContainer />
      {!showOtpPage ? (
        <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#1A0C25] lg:flex-row">
          {/* Pink Gradient Radiant Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl"></div>

          {/* Left Section */}
          <div className="xl:pl-38 lg:pt-42 2xl:ml-[10vw] 2xl: relative z-10 flex flex-col items-center justify-start px-4 pt-8 text-center text-white max-sm:px-2 max-sm:pb-4 max-sm:pt-4 sm:pl-8 sm:pt-16 md:px-6 lg:flex-[4] lg:items-start lg:pl-[10vw] lg:text-left xl:pt-[10vw]">
            <div className="relative">
              <h1 className="text-3xl font-bold max-sm:text-2xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-4xl">
                Aignosis
              </h1>
              <h2 className="mt-4 text-lg max-sm:text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl">
                Early Autism Detection Made
                <br /> Easy & Accurate
              </h2>

              {/* Round Gradient behind the text */}
              <div className="absolute bottom-[60px] left-[50%] h-[60px] w-[90px] translate-x-[-50%] transform rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-lg max-sm:h-[40px] max-sm:w-[70px] sm:h-[80px] sm:w-[120px] lg:left-[.1rem] lg:h-[90px] lg:w-[110px] lg:translate-x-0 xl:left-[1rem] xl:h-[100px] xl:w-[100px]"></div>

              {/* Intersecting Lines */}
              <div className="absolute hidden h-full w-full lg:block">
                <div className="2xl:border-t-[2px] 2xl:left-[-160%] absolute left-[-120%] top-[34vh] h-[700px] w-[700px] rounded-full border-t-[2px] border-[#811F67] xl:left-[-128%] xl:top-[32vh] xl:h-[800px] xl:w-[800px]"></div>
                <div className="2xl:border-t-[2px] 2xl:left-[-170%] absolute left-[-130%] top-[29vh] h-[600px] w-[600px] rounded-full border-t-[2px] border-[#811F67] xl:left-[-130%] xl:top-[26vh] xl:h-[700px] xl:w-[700px]"></div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative z-20 flex items-center justify-center bg-white p-4 max-sm:ml-[15vw] max-sm:mt-[10vw] max-sm:w-[70vw] max-sm:rounded-[4vw] max-sm:p-2 md:ml-0 md:mt-0 md:pr-8 lg:flex-[2] lg:p-0 xl:pr-[10vw]">
            <div className="w-full max-w-md sm:w-3/4">
              <h2 className="mb-2 text-lg font-bold max-sm:text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl">
                Welcome
              </h2>
              <p className="mb-4 text-sm max-sm:text-sm sm:text-base md:text-xl lg:text-xl xl:text-2xl">
                Please enter your details
              </p>

              <div className="mb-6">
                <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  placeholder="Enter your phone number"
                  defaultCountry="IN"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                />
              </div>

              <div ref={recaptchaContainerRef} className="recaptcha-container" style={{ marginBottom: '20px' }}></div>

              <button
                className={`w-full py-2 text-sm max-sm:mb-[2vw] max-sm:py-1 max-sm:text-xs sm:w-[17vw] md:w-[20vw] md:text-base xl:w-[15vw] xl:text-base ${
                  isButtonEnabled && isCaptchaVerified
                    ? 'bg-[#811F67] text-white hover:cursor-pointer'
                    : 'cursor-not-allowed bg-gray-300 text-gray-500'
                } rounded-full font-semibold`}
                disabled={!isButtonEnabled || !isCaptchaVerified}
                onClick={handleSendOTP}
              >
                {loading ? 'Sending...' : 'Send OTP'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <LoginOtp
          uid={getPhoneUID()}
          firebasePhoneNumber={phoneNumber}
          goBack={() => setShowOtpPage(false)}
          recaptchaVerifierRefCurrent={recaptchaVerifierRef.current}
        />
      )}
    </>
  );
};

export default LoginPage;
