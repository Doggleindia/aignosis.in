import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState, useEffect, useRef } from "react";
import { auth } from "./firebaseconfig"; // Import the auth instance from your firebase.js file

const OTPAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const recaptchaVerifierRef = useRef(null);
  const recaptchaContainerRef = useRef(null);

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

      // Send OTP using the ref verifier
      const result = await signInWithPhoneNumber(
        auth,
        formattedPhoneNumber,
        recaptchaVerifierRef.current
      );
      setConfirmationResult(result);
      setMessage("OTP sent successfully! Please check your phone.");
      console.log("OTP sent successfully please check your phone: ", result);
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

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    if (!confirmationResult) {
      setMessage("Please send OTP first");
      return;
    }

    setLoading(true);
    setMessage("");
    try {
      // Verify OTP
      const result = await confirmationResult.confirm(verificationCode);
      const user = result.user;
      setMessage(`Phone number verified successfully! User ID: ${user.uid}`);
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setMessage(`Error verifying OTP: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp-auth-container">
      <h2>Phone Authentication</h2>

      {/* Form to send OTP */}
      <form onSubmit={handleSendOTP}>
        <div className="form-group">
          <label htmlFor="phone">Phone Number (with country code):</label>
          <input
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+1234567890"
            required
          />
        </div>

        {/* reCAPTCHA container */}
        <div
          ref={recaptchaContainerRef}
          className="recaptcha-container"
          style={{ marginBottom: "20px" }}
        ></div>

        <button type="submit" disabled={loading || !phoneNumber}>
          {loading ? "Sending..." : "Send OTP"}
        </button>
      </form>

      {/* Form to verify OTP */}
      {confirmationResult && (
        <form onSubmit={handleVerifyOTP}>
          <div className="form-group">
            <label htmlFor="otp">Verification Code:</label>
            <input
              type="text"
              id="otp"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Enter OTP"
              required
            />
          </div>
          <button type="submit" disabled={loading || !verificationCode}>
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      )}

      {/* Display messages */}
      {message && (
        <div
          className={
            message.includes("Error") ? "error-message" : "success-message"
          }
        >
          {message}
        </div>
      )}

      {/* Add some styling for better UI */}
      <style jsx>{`
        .otp-auth-container {
          max-width: 500px;
          margin: 0 auto;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .form-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        button {
          padding: 10px 15px;
          background-color: #4285f4;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        button:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
        }

        .error-message {
          color: #d32f2f;
          margin-top: 15px;
          padding: 10px;
          background-color: #ffebee;
          border-radius: 4px;
        }

        .success-message {
          color: #388e3c;
          margin-top: 15px;
          padding: 10px;
          background-color: #e8f5e9;
          border-radius: 4px;
        }

        .recaptcha-container {
          margin: 15px 0;
        }
      `}</style>
    </div>
  );
};

export default OTPAuth;
