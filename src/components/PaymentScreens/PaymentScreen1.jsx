import React from 'react';
import { FaUser, FaCreditCard, FaCheckCircle, FaCcVisa, FaCcMastercard, FaCcApplePay, FaCcPaypal, FaGooglePay } from 'react-icons/fa';

const PaymentScreen1 = ({ onNext }) => {
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
    <div style={{ backgroundColor: '#1A0C25', color: '#e2d6f9', fontFamily: 'Arial, sans-serif', padding: '40px', minHeight: '100vh' }}>
      {/* Steps Section */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '150px' }}>
        <div style={{ textAlign: 'center', margin: '0 40px' }}>
          <div style={{ fontSize: '48px', color: '#ff79c6' }}>1</div>
          <FaUser style={{ fontSize: '24px', color: '#ff79c6' }} />
          <div style={{ fontSize: '12px' }}>Fill personal details</div>
        </div>
        <div style={{ fontSize: '24px', color: '#ff79c6', margin: '0 20px' }}>→</div>
        <div style={{ textAlign: 'center', margin: '0 40px' }}>
          <div style={{ fontSize: '48px', color: '#ff79c6' }}>2</div>
          <FaCreditCard style={{ fontSize: '24px', color: '#ff79c6' }} />
          <div style={{ fontSize: '12px' }}>Payment details</div>
        </div>
        <div style={{ fontSize: '24px', color: '#ff79c6', margin: '0 20px' }}>→</div>
        <div style={{ textAlign: 'center', margin: '0 40px' }}>
          <div style={{ fontSize: '48px', color: '#ff79c6' }}>3</div>
          <FaCheckCircle style={{ fontSize: '24px', color: '#ff79c6' }} />
          <div style={{ fontSize: '12px' }}>Confirmation</div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
        {/* Order Summary */}
        <div style={{ width: '30%', backgroundColor: '#1A0C25', padding: '20px', borderRadius: '10px' }}>
          <h1 style={{ color: '#ff79c6', marginBottom: "30px" }}>Order Summary</h1>
          <p style={{ fontSize: '15px', marginBottom: "40px" }}>Behavioral Therapy : $480.00</p>
          
          <div style={{ marginBottom: '20px' }}>
            <input type="text" placeholder="Gift Card / Discount code" style={{ padding: '10px', borderRadius: '5px', width: '70%', marginRight: '10px', border: '1px solid #e2d6f9' }} />
            <button style={{ padding: '10px 20px', backgroundColor: '#1A0C25', color: '#B740A1', border: 'none', borderRadius: '5px' }}>Apply</button>
          </div>
          <div style={{ fontSize: '15px', marginBottom: '10px' }}>Subtotal: $460.00</div>
          <div style={{ fontSize: '15px', marginBottom: '10px' }}>Sales tax (5.2%): $6.23</div>
          <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#ff79c6' }}>Total Due: $466.23</div>
        </div>

        {/* Payment Methods */}
        <div style={{ width: '45%', backgroundColor: '#564A5957', padding: '40px', borderRadius: '10px', height: "auto" }}>
          <h1 style={{ color: '#F6E8FB', marginBottom: "30px", fontSize: "20px" }}>Payment Methods</h1>
          <form>
            <div style={{ marginBottom: '10px', fontSize: "15px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <label>
                  <input type="radio" name="payment" style={{ marginRight: '10px' }} />
                  Pay on Delivery
                </label>
                <p style={{ fontSize: "13px", marginLeft: '25px' }}>(Pay with cash on delivery)</p>
              </div>
            </div>
            <div style={{ marginBottom: '10px', fontSize: "15px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <label>
                  <input type="radio" name="payment" style={{ marginRight: '10px' }} />
                  Credit/Debit Card
                </label>
                <p style={{ fontSize: "13px", marginLeft: '25px' }}>(Pay with your Credit / Debit Card)</p>
              </div>
              <div>
                <FaCcVisa style={{ color: '#e2d6f9', marginRight: '5px' }} />
                <FaCcMastercard style={{ color: '#e2d6f9', marginRight: '5px' }} />
              </div>
            </div>
            <div style={{ marginBottom: '10px', fontSize: "15px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <label>
                  <input type="radio" name="payment" style={{ marginRight: '10px' }} />
                  Direct Bank Transfer
                </label>
                <p style={{ fontSize: "13px", marginLeft: '25px' }}>(Make payment directly through bank account.)</p>
              </div>
            </div>
            <div style={{ marginBottom: '10px', fontSize: "15px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <label>
                  <input type="radio" name="payment" style={{ marginRight: '10px' }} />
                  Other Payment Methods
                </label>
                <p style={{ fontSize: "13px", marginLeft: '25px' }}>(Make payment through Gpay, Paypal, Paytm etc)</p>
              </div>
              <div>
                <FaGooglePay style={{ color: '#e2d6f9', marginRight: '5px' }} />
                <FaCcApplePay style={{ color: '#e2d6f9', marginRight: '5px' }} />
                <FaCcPaypal style={{ color: '#e2d6f9', marginRight: '5px' }} />
              </div>
            </div>

           
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <button style={{ padding: '10px 20px', backgroundColor: '#1A0C25', color: '#F6E8FB', border: 'none', borderRadius: '5px', borderColor: "#9C00AD", marginTop: "40px" }}>Back</button>
              <button onClick={handleNext} style={{ padding: '10px 20px', backgroundColor: '#1A0C25', color: '#F6E8FB', border: 'none', borderRadius: '5px', borderColor: "#9C00AD", marginTop: "40px" }}>Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentScreen1;
