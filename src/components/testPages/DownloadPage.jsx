import React, { useContext, useEffect } from 'react';
import { AppContext } from '../aignosisintegration/AppContext';
import { Link } from 'react-router-dom';

const DownloadPage = () => {
  const { testData, setTestData } = useContext(AppContext);
  const { isaascore, mchatScore, carsscore } = testData || {};
  console.log(testData);
  console.log('MCHAT: ' + testData.mchatScore);
  console.log(isaascore);
  const getSeverityLevel = (score, type) => {
    if (type === 'isaa') {
      if (score >= 90) return 'High';
      if (score >= 60) return 'Moderate';
      return 'Low';
    } else if (type === 'mchat') {
      if (score >= 8) return 'High';
      if (score >= 3) return 'Moderate';
      return 'Low';
    } else if (type === 'cars') {
      if (score >= 37) return 'High';
      if (score >= 30) return 'Moderate';
      return 'Low';
    }
    return 'Unknown';
  };
  // Sending Data to Google Sheet
  useEffect(() => {
    const { PATIENT_UID, TRANSACTION_ID, patientName, patientDOB, hasSubmitted } = testData;

    if (hasSubmitted === 'true') return;

    // Ensure patientDOB is valid before sending data
    if (!patientDOB || patientDOB.includes('NaNNaNNaN')) {
      console.log('Waiting for patientDOB to load...');
      return;
    }

    if (typeof PATIENT_UID !== 'string' || PATIENT_UID.trim() === '') {
      alert('Invalid PATIENT_UID. Please enter a valid string.');
      return;
    }
    if (typeof TRANSACTION_ID !== 'string' || TRANSACTION_ID.trim() === '') {
      alert('Invalid TRANSACTION_ID. Please enter a valid string.');
      return;
    }

    // Sanitize data
    const patientuid = PATIENT_UID.trim();
    const transactionid = TRANSACTION_ID.trim();
    const patientname = patientName.trim();

    let patientdob = new Date(patientDOB);
    const day = patientdob.getDate().toString().padStart(2, '0');
    const month = (patientdob.getMonth() + 1).toString().padStart(2, '0');
    const year = patientdob.getFullYear();
    const formattedDate = `${year}${month}${day}`;

    console.log('Sanitized Data:', { patientuid, transactionid, patientname, patientdob: formattedDate });

    fetch(
      'https://script.google.com/macros/s/AKfycbyFQTZ-ly_ct8er6GATLj5KBkm2-c4163nKDx5DkUt5JfFNcL85NHNNc68TMPFO5bXh/exec',
      {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ patientuid, transactionid, patientname, patientdob: formattedDate }),
      }
    )
      .then((response) => {
        console.log('Data Submitted');
        setTestData({ ...testData, hasSubmitted: 'true' });
      })
      .catch((error) => {
        console.error('Error during fetch:', error);
      });
  }, [testData]); // Run only when testData updates

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1A0C25] text-center">
      {/* Step Progress Indicator */}
      {/* <StepProgress /> */}

      {/* Aignosis Title with Glow Effect */}
      <div className="relative">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-60 blur-lg"></div>
        <h1 className="relative z-10 font-montserrat text-5xl font-semibold text-[#E3E2E5]">Aignosis</h1>
      </div>

      {/* Big Thank You Message */}
      <div className="mt-2">
        <h2 className="font-manrope text-8xl font-bold text-[#FFFFFF]">Thank you</h2>
      </div>

      {/* Thank You Paragraph */}
      <div className="mt-6 max-w-2xl px-6 font-raleway text-[#F6E8FB]">
        <p className="text-center text-lg">
          Thank you for completing the assessment with Aignosis! Your responses bring us one step closer to
          understanding and supporting your child’s unique needs.
          <br />
          <br />
          <span className="font-manrope text-2xl font-bold text-[#FFFFFF]">Book Your Free Session Today</span>
        </p>
      </div>
      {/* Scores and Severity Display */}
      {/* <div className="mt-10 text-[#F6E8FB] text-lg font-montserrat font-medium">
        <div>
          INCLEN Score: {testData.inclenFullScore || 'N/A'} 
        </div>
        <div>
          ISAA Score: {isaascore || 'N/A'} 
        </div>
        <div>
          M-CHAT Score: {mchatScore || 'N/A'} 
        </div>
        <div>
          CARS Score: {carsscore || 'N/A'} 
        </div>
      </div> */}
      {/* Download Button */}
      {/* <div className="mt-10">
        <a href='https://firebasestorage.googleapis.com/v0/b/wedmonkey-d6e0e.appspot.com/o/Reports.pdf?alt=media&token=4b491bc6-5c98-490c-bd2c-a5909ed69d04' target='_blank' className=" text-[#F6E8FB] text-lg font-montserrat font-medium py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 border border-[#9C00AD]">
          Download your report
        </a>
      </div> */}
      <Link
        to="https://calendly.com/aignosis-support/30min"
        className="mt-4 flex w-[150px] items-center justify-center rounded-full border border-[#9C00AD] px-6 py-3 font-semibold text-white transition-all duration-300 ease-in-out hover:border-transparent hover:bg-[#9C00AD] hover:shadow-md"
      >
        Book Session
      </Link>
    </div>
  );
};

export default DownloadPage;
