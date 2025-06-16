import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CalibrationPage from './CalibrationPage';
import { Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../aignosisintegration/AppContext';
import { format } from 'date-fns';
import Protectedpage from './Protectedpage';
import { v4 as uuidv4 } from 'uuid';
import PhoneInput from 'react-phone-number-input';
import { getPhoneUID } from '../../utils/phoneUtils';
import PageUnavailable from './PageUnavailable';

export const FillupPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isBackInfoVisible, setIsBackInfoVisible] = useState(false);
  const [dob, setDob] = useState(null);
  const [consent, setConsent] = useState(true);
  const [guardianPhone, setGuardianPhone] = useState('');
  const navigate = useNavigate();
  const { testData, setTestData } = useContext(AppContext);
  const [pageUnavailable, setPageUnavailable] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('isLicensedUser') === 'true') {
      setPageUnavailable(false);
    }
    if (localStorage.getItem('user') != null) {
      console.log('Existing UID found ' + JSON.parse(localStorage.getItem('user')).phoneNumber);
      const phoneNumber = JSON.parse(localStorage.getItem('user')).phoneNumber;

      setTestData({
        ...testData,
        PATIENT_UID: phoneNumber,
        TRANSACTION_ID: uuidv4(),
      });

      setDob(formatDate(selectedDate));
    }
  }, [navigate, selectedDate, consent, pageUnavailable]);

  const handleNextClick = async () => {
    if (document.getElementById('patient-name-input').value == '' || !dob || !guardianPhone) {
      alert('Please fill all fields');
    } else {
      const formattedPhoneNumber = getPhoneUID(guardianPhone);

      setTestData({
        ...testData,
        patientName: document.getElementById('patient-name-input').value,
        patientDOB: dob,
        guardianPno: formattedPhoneNumber,
        clinicOrReferrerName: document.getElementById('referrer-name-input').value,
        consentGiven: consent,
      });

      console.log(testData);
      navigate('/autismtest');
    }
  };

  function formatDate(date) {
    if (date && !isNaN(date)) {
      return format(new Date(date), 'dd/MM/yyyy');
    }
    return '';
  }

  return (
    <>
      {pageUnavailable ? (
        <PageUnavailable />
      ) : (
        <Protectedpage>
          <div className="flex h-full min-h-screen flex-col justify-between bg-[#1A0C25]">
            <div className="flex flex-grow flex-col items-center justify-center py-8">
              {!isBackInfoVisible ? (
                <div className="flex w-full max-w-7xl flex-row items-center justify-between px-4 max-sm:flex-col max-sm:justify-center">
                  <div className="flex flex-col items-start space-y-[80px] px-8 max-sm:mt-[50px]">
                    <div className="relative m-[auto] inline-block">
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-60 blur-lg"></div>
                      <span className="relative z-10 text-4xl font-semibold tracking-wide text-white">Aignosis</span>
                    </div>

                    <div className="flex max-w-sm flex-col space-y-4">
                      <p className="text-center font-manrope text-2xl text-white">
                        Please take the assessment to <span className="text-left">begin with screening</span>
                      </p>
                      <p className="px-4 py-2 text-center font-raleway text-sm text-[#FFFFFF]">
                        Assessment duration: 5 mins
                      </p>
                    </div>
                  </div>

                  <div className="mx-8 w-[50vw] rounded-2xl bg-[#564A5957] p-10 shadow-lg max-sm:w-auto">
                    <style>
                      {`
                        /* Style the date input's placeholder text */
                        input[type="date"]::-webkit-datetime-edit-text,
                        input[type="date"]::-webkit-datetime-edit-month-field,
                        input[type="date"]::-webkit-datetime-edit-day-field,
                        input[type="date"]::-webkit-datetime-edit-year-field {
                          color: #9CA3AF;
                        }
                        
                        /* For Firefox */
                        input[type="date"]:invalid {
                          color: #9CA3AF;
                        }
                        
                        /* When the date input is empty, make the text dimmer */
                        input[type="date"]:not(:focus):invalid {
                          color: #6B7280;
                        }
                      `}
                    </style>
                    <h2 className="mb-4 text-center font-manrope text-2xl font-semibold text-white">
                      Welcome to Aignosis early detection screener
                    </h2>
                    <p className="mb-8 text-center font-raleway text-sm text-gray-400">
                      Aignosis is an online platform that helps you detect early signs of developmental disorder in
                      children.
                    </p>

                    <form className="space-y-4">
                      <input
                        id="patient-name-input"
                        type="text"
                        placeholder="Patient Name"
                        className="w-full rounded-lg border border-[#B7407D4D] bg-[#1A0C25] px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />

                      {/* Native date input for DOB */}
                      <input
                        type="date"
                        id="dob-input"
                        name="dob"
                        value={selectedDate ? selectedDate : ''}
                        onChange={(e) => {
                          setSelectedDate(e.target.value);
                          // Format to dd/MM/yyyy for display/logic
                          const [year, month, day] = e.target.value.split('-');
                          setDob(e.target.value ? `${day}/${month}/${year}` : '');
                        }}
                        className="w-full rounded-lg border border-[#B7407D4D] bg-[#1A0C25] px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                        style={{ colorScheme: 'dark' }}
                      />

                      <PhoneInput
                        international
                        countryCallingCodeEditable={false}
                        defaultCountry="IN"
                        placeholder="Patient Guardian Phone"
                        value={guardianPhone}
                        onChange={setGuardianPhone}
                        limitMaxLength={true}
                        className="w-full rounded-lg border border-[#B7407D4D] bg-[#1A0C25]"
                        numberInputProps={{
                          className:
                            'w-full rounded-lg border-0 bg-transparent px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500',
                          style: {
                            backgroundColor: 'transparent',
                            border: 'none',
                            outline: 'none',
                          },
                        }}
                        countrySelectProps={{
                          className: 'bg-[#1A0C25] border-0 text-white',
                          style: {
                            backgroundColor: '#1A0C25',
                            border: 'none',
                            color: 'white',
                          },
                        }}
                      />

                      <input
                        id="referrer-name-input"
                        type="text"
                        placeholder="Clinic Name / Referred Doctor"
                        className="w-full rounded-lg border border-[#B7407D4D] bg-[#1A0C25] px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />

                      <div className="flex items-center justify-center gap-2 max-sm:flex-col">
                        <Link
                          to="/prices"
                          className="mt-4 flex w-[150px] items-center justify-center rounded-full border border-[#9C00AD] px-6 py-3 font-semibold text-white transition-all duration-300 ease-in-out hover:border-transparent hover:bg-[#9C00AD] hover:shadow-md"
                        >
                          Back
                        </Link>

                        <button
                          type="button"
                          onClick={handleNextClick}
                          className="mt-4 flex w-[150px] items-center justify-center rounded-full border border-[#9C00AD] px-6 py-3 font-semibold text-white hover:bg-pink-700"
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

            <div className="flex w-full items-center justify-center bg-[#5e235b] px-9 py-3">
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
                  style={{ color: 'white' }}
                />
                <div className="text-white" style={{ textAlign: 'center' }}>
                  I give my consent for my data to be used for research purposes. I understand that my data will be
                  securely stored, anonymized where necessary, and used to improve services and research outcomes.
                </div>
              </div>
            </div>
          </div>
        </Protectedpage>
      )}
    </>
  );
};

export default FillupPage;
