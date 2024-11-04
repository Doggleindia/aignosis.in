import React from 'react';
import { FaUser, FaCreditCard, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const PaymentScreen3 = ({ onNext }) => {
  const handleNext = (e) => {
    e.preventDefault();

    // Add any validation or data processing here
    try {
      // Navigate to the confirmation step
      onNext(); // Call the parent function to move to the next form
    } catch (error) {
      console.error('Error during navigation:', error); // Log the error
      // Optionally, display an error message to the user
    }
  };

  return (
    <div style={{
      backgroundColor: '#1A0C25',
      color: '#e2d6f9',
      fontFamily: 'Raleway, sans-serif',
      padding: '40px',
      minHeight: '100vh',
    }}>
      {/* Steps Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '150px',
        flexWrap: 'wrap', // Ensure steps wrap on smaller screens
      }}>
        {['Fill personal details', 'Payment details', 'Confirmation'].map((step, index) => (
          <div key={index} style={{ textAlign: 'center', margin: '0 20px' }}>
            <div style={{
              fontSize: '48px',
              color: '#ff79c6',
            }}>{index + 1}</div>
            <div style={{
              fontSize: '24px',
              color: '#ff79c6',
            }}>
              {index === 0 ? <FaUser /> : index === 1 ? <FaCreditCard /> : <FaCheckCircle />}
            </div>
            <div style={{ fontSize: '12px' }}>{step}</div>
          </div>
        ))}
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
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
      }}>
        <button onClick={handleNext} style={{
          padding: '10px 20px',
          backgroundColor: '#1A0C25',
          color: '#F6E8FB',
          border: 'none',
          borderRadius: '5px',
          borderColor: "#9C00AD",
          marginTop: "40px",
          fontFamily: 'Manrope, sans-serif', // Change button font to Manrope
        }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PaymentScreen3;
