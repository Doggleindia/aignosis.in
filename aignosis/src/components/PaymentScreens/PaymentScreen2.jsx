import React from 'react';
import { FaUser, FaCreditCard, FaCheckCircle } from 'react-icons/fa';

const PaymentScreen2 = ({ onNext }) => {
  const handleNext = (e) => {
    e.preventDefault();

    try {
      onNext(); // Call the parent function to move to the next form
    } catch (error) {
      console.error('Error during navigation:', error);
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
      }}>
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
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '30px',
      }}>
        {/* Order Summary */}
        <div style={{
          width: '30%',
          backgroundColor: '#1A0C25',
          padding: '20px',
          borderRadius: '10px',
        }}>
          <h1 style={{
            color: '#ff79c6',
            marginBottom: '30px',
            fontFamily: 'Manrope, sans-serif',
          }}>Order Summary</h1>
          <p style={{ fontSize: '15px', marginBottom: '10px' }}>Behavioral Therapy: $480.00</p>
          <div style={{ marginBottom: '20px' }}>
            <input type="text" placeholder="Gift Card / Discount code" style={{
              padding: '10px',
              borderRadius: '5px',
              width: '70%',
              marginRight: '10px',
              border: '1px solid #e2d6f9',
            }} />
            <button style={{
              padding: '10px 20px',
              backgroundColor: '#1A0C25',
              color: '#B740A1',
              border: 'none',
              borderRadius: '5px',
            }}>Apply</button>
          </div>
          <div style={{ fontSize: '15px', marginBottom: '10px' }}>Subtotal: $460.00</div>
          <div style={{ fontSize: '15px', marginBottom: '10px' }}>Sales tax (5.2%): $6.23</div>
          <div style={{
            fontSize: '15px',
            fontWeight: 'bold',
            color: '#ff79c6',
          }}>Total Due: $466.23</div>
        </div>

        {/* Payment Methods */}
        <div style={{
          width: '45%',
          backgroundColor: 'rgba(86, 74, 89, 0.7)',
          padding: '40px',
          borderRadius: '10px',
        }}>
          <h1 style={{
            color: '#F6E8FB',
            marginBottom: '30px',
            fontSize: '20px',
            fontFamily: 'Manrope, sans-serif',
          }}>Payment Methods</h1>
          <form>
            {/* Payment Options */}
            {['Pay on Delivery', 'Credit/Debit Card', 'Direct Bank Transfer', 'Other Payment Methods'].map((method, index) => (
              <div key={index} style={{
                marginBottom: '10px',
                fontSize: '15px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <label>
                  <input type="radio" name="payment" style={{ marginRight: '10px' }} />
                  {method}
                </label>
                <p style={{
                  fontSize: '13px',
                  marginLeft: '25px',
                }}>({method === 'Pay on Delivery' ? 'Pay with cash on delivery' : method === 'Credit/Debit Card' ? 'Pay with your Credit / Debit Card' : method === 'Direct Bank Transfer' ? 'Make payment directly through bank account.' : 'Make payment through Gpay, Paypal, Paytm etc'})</p>
              </div>
            ))}

            {/* Bank Transfer Section */}
            <div style={{
              backgroundColor: 'rgba(86, 74, 89, 0.7)',
              color: '#E2D6F9',
              padding: '20px',
              borderRadius: '10px',
              textAlign: 'center',
              marginTop: '30px',
            }}>
              <p>Transfer ₹164.23 to:</p>
              <div style={{
                border: '1px solid #F6E8FB',
                borderRadius: '10px',
                padding: '10px',
                display: 'inline-block',
                marginTop: '10px',
                borderColor: '#9C00AD',
                width: '250px',
              }}>
                <p style={{ margin: 0, fontSize: '16px', color: '#BFA8D7' }}>Polaris Bank</p>
                <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#E2D6F9', marginBottom: '5px' }}>0123456781</p>
              </div>
              <p style={{ fontSize: '14px', color: '#FF6F61', marginTop: '10px' }}>
                Expires in <span style={{ fontWeight: 'bold' }}>10:00</span> minutes
              </p>
            </div>

            <button onClick={handleNext} style={{
              padding: '10px 20px',
              backgroundColor: '#1A0C25',
              color: '#F6E8FB',
              border: 'none',
              borderRadius: '5px',
              marginTop: '40px',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'block',
            }}>Next</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentScreen2;
