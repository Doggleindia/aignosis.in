import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      backgroundColor: '#1d0e28' // Dark purple background color
    }}>
      <div style={{ fontSize: '24px', color: '#f0e7ff', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
        Ai.gnosis
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '16px',
          width: '24px',
          marginRight: '20px',
          cursor: 'pointer'
        }}>
          <div style={{ width: '100%', height: '3px', backgroundColor: '#f0e7ff', borderRadius: '2px' }}></div>
          <div style={{ width: '100%', height: '3px', backgroundColor: '#f0e7ff', borderRadius: '2px' }}></div>
          <div style={{ width: '100%', height: '3px', backgroundColor: '#f0e7ff', borderRadius: '2px' }}></div>
        </div>
        <button style={{
          backgroundColor: '#f0e7ff',
          color: '#af2bc8', // Purple color for text
          fontWeight: 'bold',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          fontFamily: 'Arial, sans-serif',
          cursor: 'pointer'
        }}>
          Book an appointment 
          <span style={{
            backgroundColor: '#af2bc8', // Pink-purple background for question mark
            color: '#f0e7ff',
            borderRadius: '50%',
            padding: '2px 6px',
            marginLeft: '6px'
          }}>?</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
