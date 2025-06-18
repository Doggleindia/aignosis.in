import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../aignosisintegration/AppContext';
import Protectedpage from './Protectedpage';
import { v4 as uuidv4 } from 'uuid';
import PhoneInput from 'react-phone-number-input';
import { getPhoneUID } from '../../utils/phoneUtils';
import PageUnavailable from './PageUnavailable';
import axios from 'axios';
import { toast } from 'react-toastify';

export const FillupPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [dob, setDob] = useState('');
  const [consent, setConsent] = useState(true);
  const [guardianPhone, setGuardianPhone] = useState('');
  const [profiles, setProfiles] = useState([]);
  const [patientName, setPatientName] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const navigate = useNavigate();
  const dobInputRef = useRef(null);
  const { testData, setTestData } = useContext(AppContext);
  const [pageUnavailable, setPageUnavailable] = useState(true);

  const API_BASE_URL = import.meta.env.VITE_MAIN_BACKEND;
  const token = localStorage.getItem('authToken');

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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/profiles`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfiles(response.data.profiles || []);
      } catch (err) {
        console.error('Error fetching profiles:', err);
      }
    };

    if (token) {
      fetchProfiles();
    }
  }, [token, API_BASE_URL]);

  const handleNextClick = async () => {
    if (patientName === '' || !dob || !guardianPhone || selectedDoctor === '') {
      toast.error('Please fill all fields');
    } else {
      const formattedPhoneNumber = getPhoneUID(guardianPhone);

      setTestData({
        ...testData,
        patientName: patientName,
        patientDOB: dob,
        guardianPno: formattedPhoneNumber,
        doctorName: selectedDoctor,
        consentGiven: consent,
      });

      navigate('/autismtest');
    }
  };

  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    setSelectedDate(dateValue);

    if (dateValue) {
      // Convert from YYYY-MM-DD to DD/MM/YYYY
      const [year, month, day] = dateValue.split('-');
      const formattedDate = `${day}/${month}/${year}`;
      setDob(formattedDate);
      console.log('DOB set to:', formattedDate);
    } else {
      setDob('');
    }
  };

  return (
    <>
      {pageUnavailable ? (
        <PageUnavailable />
      ) : (
        <Protectedpage>
          <div className="flex h-full min-h-screen flex-col justify-between bg-[#1A0C25]">
            <div className="flex flex-grow flex-col items-center justify-center py-8">
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
                  <h2 className="mb-4 text-center font-manrope text-2xl font-semibold text-white">
                    Welcome to Aignosis early detection screener
                  </h2>
                  <p className="mb-8 text-center font-raleway text-sm text-gray-400">
                    Aignosis is an online platform that helps you detect early signs of developmental disorder in
                    children.
                  </p>

                  <form className="space-y-4" autoComplete="off">
                    <input
                      id="patient-name-input"
                      type="text"
                      placeholder="Patient Name"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full rounded-lg border border-[#B7407D4D] bg-[#1A0C25] px-4 py-2.5 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <div className="flex" onClick={() => dobInputRef.current?.showPicker()}>
                      <input
                        type="date"
                        id="dob-input"
                        name="dob"
                        ref={dobInputRef}
                        value={selectedDate}
                        onChange={handleDateChange}
                        className="pointer-events-none w-full rounded-lg border border-[#B7407D4D] bg-[#1A0C25] px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                        style={{ colorScheme: 'dark' }}
                      />
                    </div>
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
                          'w-full rounded-lg border-0 bg-transparent px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-pink-500',
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
                    <select
                      id="referrer-name-select"
                      value={selectedDoctor}
                      required
                      onChange={(e) => setSelectedDoctor(e.target.value)}
                      className="w-full rounded-lg border border-[#B7407D4D] bg-[#1A0C25] px-4 py-2.5 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      <option value="" disabled className="bg-[#1A0C25] text-gray-500">
                        Select Doctor
                      </option>
                      {profiles.map((profile) => (
                        <option key={profile._id} value={profile.name} className="bg-[#1A0C25] text-white">
                          {profile.name}
                        </option>
                      ))}
                      <option value="Other" className="bg-[#1A0C25] text-white">
                        Other
                      </option>
                    </select>
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
