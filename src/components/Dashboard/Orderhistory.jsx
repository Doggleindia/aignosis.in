import { useEffect, useState, useRef, useMemo } from 'react';
import { FaSearch, FaFilter, FaChevronDown } from 'react-icons/fa';
import axios from 'axios';
import Header from '../Header';
import BlogFooter from '../BlogPages/BlogFooter';
import { formatIndianCurrency } from '../../utils/currencyUtils';
import { decryptPassword, decryptCalibrationData } from '../aignosisintegration/DecryptionUtils';

const Orderhistory = () => {
  const [testRecords, setTestRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showDoctorFilter, setShowDoctorFilter] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const [licensedUserInfo, setLicensedUserInfo] = useState(null);
  const [isLicensedUser, setIsLicensedUser] = useState(null);
  const filterRef = useRef(null);

  const API_BASE_URL = 'https://de.aignosismdw.in/rest/';
  const MAIN_BACKEND_URL = import.meta.env.VITE_MAIN_BACKEND;
  const userId = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('authToken');

  const TESTS_PER_PAGE = 10;

  const fetchLicensedUserInfo = async () => {
    if (!userId) {
      setError('User not found. Please log in again.');
      return;
    }

    try {
      const response = await axios.post(
        `${API_BASE_URL}get_licensed_user_info/`,
        {
          patient_uid: userId.phoneNumber.toString(),
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.licensed_user) {
        setIsLicensedUser(true);
        setLicensedUserInfo({
          testCost: response.data.test_cost,
          clinicSharePercentage: response.data.clinic_share_percentage,
          clinicShare: (response.data.test_cost * response.data.clinic_share_percentage) / 100,
        });
        console.log('Licensed user info fetched:', response.data);
      } else {
        setIsLicensedUser(false);
        setError('You are not a licensed user. Please contact support for assistance.');
      }
    } catch (error) {
      console.error('Error fetching licensed user info:', error);
      if (error.response?.status === 400) {
        setIsLicensedUser(false);
        setError('You are not a licensed user. Please contact support for assistance.');
      } else {
        setError('Failed to verify licensed user status. Please try again later.');
      }
    }
  };

  // Fetch profiles (doctors)
  const fetchProfiles = async () => {
    try {
      const response = await axios.get(`${MAIN_BACKEND_URL}/api/profiles`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfiles(response.data.profiles || []);
      console.log('Profiles fetched:', response.data.profiles);
    } catch (error) {
      console.error('Error fetching profiles:', error);
      setProfiles([]);
    }
  };

  // Fetch assessments/test records
  const fetchAssessments = async () => {
    if (!userId || !licensedUserInfo) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${API_BASE_URL}get_patient_assessments/`,
        {
          patient_uid: userId.phoneNumber.toString(),
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const assessmentsData = response.data.success.assessments;
      console.log('Assessments data fetched:', assessmentsData);

      // Process each assessment
      const processedRecords = await Promise.all(
        assessmentsData.map(async (assessment) => {
          try {
            const timestamp = assessment.test_timestamp
              ? new Date(assessment.test_timestamp).toLocaleDateString('en-GB')
              : 'N/A';

            // Decrypt patient information
            const calibrationAesKey = await decryptPassword(assessment.encrypted_patient_info_enc_aes_key);
            const patientInfo = await decryptCalibrationData(assessment.encrypted_patient_info, calibrationAesKey);

            return {
              patientName: patientInfo.patientName || 'Unknown Patient',
              supervisingDoctor: patientInfo.clinicOrReferrerName || patientInfo.doctorName || 'Unknown Doctor',
              testDate: timestamp,
              testCost: licensedUserInfo.testCost,
              clinicShare: licensedUserInfo.clinicShare,
              status: assessment.test_completion_status ? 'completed' : 'pending',
              transactionId: assessment.transaction_id,
            };
          } catch (error) {
            console.error('Error processing assessment:', error);
            // Return a fallback record with available data
            return {
              patientName: 'Processing Error',
              supervisingDoctor: 'Unknown Doctor',
              testDate: assessment.test_timestamp
                ? new Date(assessment.test_timestamp).toLocaleDateString('en-GB')
                : 'N/A',
              testCost: licensedUserInfo.testCost,
              clinicShare: licensedUserInfo.clinicShare,
              status: assessment.test_completion_status ? 'completed' : 'pending',
              transactionId: assessment.transaction_id,
            };
          }
        })
      );

      setTestRecords(processedRecords);
    } catch (error) {
      console.error('Error fetching assessments:', error);
      setError('Failed to fetch test records. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Memoized clinic metrics calculation
  const clinicMetrics = useMemo(() => {
    const activeDoctors = profiles.length;
    const totalTests = testRecords.length;
    const amountPayable = licensedUserInfo
      ? ((100 - licensedUserInfo.clinicSharePercentage) / 100) * licensedUserInfo.testCost * totalTests
      : 0;

    const currentDate = new Date();
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const formattedDueDate = `Due on ${lastDayOfMonth.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })}`;

    return {
      activeDoctors,
      totalTests,
      amountPayable,
      growth: {
        doctors: 'Across all specializations',
        tests: totalTests > 0 ? (totalTests == 1 ? 'test conducted' : 'tests conducted') : 'No tests yet',
        amount: formattedDueDate,
      },
    };
  }, [profiles.length, testRecords.length, licensedUserInfo]);

  // Memoized available doctors list
  const availableDoctors = useMemo(() => {
    return profiles.map((profile) => profile.name);
  }, [profiles]);

  // Memoized doctor statistics
  const doctorStats = useMemo(() => {
    return availableDoctors.map((doctorName) => {
      const doctorTests = testRecords.filter((record) => record.supervisingDoctor === doctorName);
      const testCount = doctorTests.length;
      const totalTests = testRecords.length;
      return {
        name: doctorName,
        tests: testCount,
        percentage: totalTests > 0 ? Math.round((testCount / totalTests) * 100) : 0,
      };
    });
  }, [availableDoctors, testRecords]);

  // Memoized filtered records
  const filteredRecords = useMemo(() => {
    return testRecords.filter((record) => {
      const matchesSearch =
        record.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.supervisingDoctor.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDoctor = selectedDoctor ? record.supervisingDoctor === selectedDoctor : true;
      return matchesSearch && matchesDoctor;
    });
  }, [testRecords, searchTerm, selectedDoctor]);

  // Memoized pagination calculations
  const paginationData = useMemo(() => {
    const totalPages = Math.ceil(filteredRecords.length / TESTS_PER_PAGE);
    const startIndex = (currentPage - 1) * TESTS_PER_PAGE;
    const endIndex = startIndex + TESTS_PER_PAGE;
    const paginatedRecords = filteredRecords.slice(startIndex, endIndex);

    return {
      totalPages,
      startIndex,
      endIndex,
      paginatedRecords,
    };
  }, [filteredRecords, currentPage]);

  // Memoized total doctor tests for chart calculations
  const totalDoctorTests = useMemo(() => {
    return doctorStats.reduce((sum, doc) => sum + doc.tests, 0);
  }, [doctorStats]);

  useEffect(() => {
    fetchLicensedUserInfo();
    fetchProfiles();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (licensedUserInfo && isLicensedUser) {
      fetchAssessments();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [licensedUserInfo, isLicensedUser]);

  useEffect(() => {
    if (!showDoctorFilter) return;
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowDoctorFilter(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDoctorFilter]);

  // Reset to page 1 when search term or filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedDoctor]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= paginationData.totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPagination = () => {
    if (paginationData.totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(paginationData.totalPages, startPage + maxVisiblePages - 1);

    // Adjust start page if end page is at the limit
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Previous button
    pages.push(
      <button
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        className="mx-1 rounded bg-purple-600 px-3 py-1 text-white hover:bg-purple-700 disabled:opacity-50"
        disabled={currentPage === 1}
      >
        ‹
      </button>
    );

    // First page and ellipsis
    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="mx-1 rounded bg-gray-700 px-3 py-1 text-gray-300 hover:bg-gray-600"
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(
          <span key="ellipsis-start" className="mx-1 px-3 py-1 text-gray-400">
            ...
          </span>
        );
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-1 rounded px-3 py-1 ${
            currentPage === i ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {i}
        </button>
      );
    }

    // Last page and ellipsis
    if (endPage < paginationData.totalPages) {
      if (endPage < paginationData.totalPages - 1) {
        pages.push(
          <span key="ellipsis-end" className="mx-1 px-3 py-1 text-gray-400">
            ...
          </span>
        );
      }
      pages.push(
        <button
          key={paginationData.totalPages}
          onClick={() => handlePageChange(paginationData.totalPages)}
          className="mx-1 rounded bg-gray-700 px-3 py-1 text-gray-300 hover:bg-gray-600"
        >
          {paginationData.totalPages}
        </button>
      );
    }

    // Next button
    pages.push(
      <button
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        className="mx-1 rounded bg-purple-600 px-3 py-1 text-white hover:bg-purple-700 disabled:opacity-50"
        disabled={currentPage === paginationData.totalPages}
      >
        ›
      </button>
    );

    return pages;
  };

  // Early return if not a licensed user
  if (isLicensedUser === false) {
    return (
      <>
        <Header />
        <div className="w-full bg-[#1A0C25] font-montserrat text-[#F6E8FB]">
          <div className="mx-auto max-w-7xl px-4 pb-10 pt-[8vh] md:px-10 md:pt-[12vh]">
            <div className="flex min-h-[60vh] items-center justify-center">
              <div className="rounded-2xl border border-[#B740A1] bg-[#43284C4D] p-8 text-center">
                <div className="mb-4 text-6xl">⚠️</div>
                <h1 className="mb-4 text-2xl font-bold text-[#F6E8FB]">Access Restricted</h1>
                <p className="mb-6 text-[#CACED9]">
                  You are not a licensed user. Please contact support for assistance.
                </p>
                <div className="text-sm text-[#CACED9]">
                  <p>Email: support@aignosis.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BlogFooter />
      </>
    );
  }

  // Show loading state while checking license status
  if (isLicensedUser === null || !licensedUserInfo) {
    return (
      <>
        <Header />
        <div className="min-h-screen w-full bg-[#1A0C25] font-montserrat text-[#F6E8FB]">
          <div className="mx-auto max-w-7xl px-4 pb-10 pt-[8vh] md:px-10 md:pt-[12vh]">
            <div className="flex min-h-[60vh] items-center justify-center">
              <div className="text-center">
                <div className="mb-4 text-4xl">🔄</div>
                <h1 className="text-xl font-semibold">Verifying License Status...</h1>
                <p className="text-[#CACED9]">Please wait while we check your access permissions.</p>
              </div>
            </div>
          </div>
        </div>
        <BlogFooter />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen w-full bg-[#1A0C25] font-montserrat text-[#F6E8FB]">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-[8vh] md:px-10 md:pt-[12vh]">
          <h1 className="mb-8 text-center text-2xl font-bold md:text-3xl">Clinic Dashboard</h1>

          {/* Metrics Cards */}
          <div className="mb-8 flex flex-col justify-center gap-6 md:flex-row md:gap-8">
            {/* Active Doctors */}
            <div className="min-w-[220px] flex-1 rounded-2xl border border-[#B740A1] bg-[#43284C4D] p-6 shadow-lg">
              <h3 className="mb-2 text-sm font-semibold text-[#B740A1]">Active Doctors</h3>
              <div className="mb-1 text-3xl font-bold text-[#F6E8FB]">{clinicMetrics.activeDoctors}</div>
              <p className="text-xs text-[#CACED9]">{clinicMetrics.growth.doctors}</p>
            </div>
            {/* Total Tests */}
            <div className="min-w-[220px] flex-1 rounded-2xl border border-[#B740A1] bg-[#43284C4D] p-6 shadow-lg">
              <h3 className="mb-2 text-sm font-semibold text-[#B740A1]">Total Tests Conducted</h3>
              <div className="mb-1 text-3xl font-bold text-[#F6E8FB]">{clinicMetrics.totalTests}</div>
              <p className="text-xs text-[#CACED9]">{clinicMetrics.growth.tests}</p>
            </div>
            {/* Amount Payable */}
            <div className="min-w-[220px] flex-1 rounded-2xl border border-[#B740A1] bg-[#43284C4D] p-6 shadow-lg">
              <h3 className="mb-2 text-sm font-semibold text-[#B740A1]">Amount Payable (Month End)</h3>
              <div className="mb-1 text-3xl font-bold text-[#F6E8FB]">
                {formatIndianCurrency(clinicMetrics.amountPayable)}
              </div>
              <p className="text-xs text-[#CACED9]">{clinicMetrics.growth.amount}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center justify-center">
            <span className="h-[10px] w-[118px] rounded-full bg-gradient-to-r from-[#FB7CE4] to-[#B740A1] opacity-60"></span>
          </div>

          {/* Patient Test Records Section */}
          <div className="mb-8">
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <h2 className="text-lg font-semibold text-[#F6E8FB] md:text-xl">Patient Test Records</h2>
              <div className="flex w-full flex-col gap-2 md:w-auto md:flex-row md:items-center md:justify-end md:gap-2">
                <div className="relative w-full md:w-[17rem]">
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#CACED9]" />
                  <input
                    type="text"
                    placeholder="Search patient or doctor"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full rounded-lg border border-[#B740A1] bg-[#2B1B2D] py-2 pl-10 pr-6 text-[#F6E8FB] placeholder-[#CACED9] focus:border-[#FB7CE4] focus:outline-none"
                  />
                </div>
                <div className="relative" ref={filterRef}>
                  <button
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#B740A1] bg-transparent px-4 py-2 text-[#F6E8FB] transition hover:bg-[#43284C] md:w-auto"
                    onClick={() => setShowDoctorFilter((prev) => !prev)}
                    type="button"
                  >
                    <FaFilter />
                    <span>Filter</span>
                    <FaChevronDown className={`transition-transform ${showDoctorFilter ? 'rotate-180' : ''}`} />
                  </button>
                  {showDoctorFilter && (
                    <div className="absolute right-0 z-10 mt-2 w-48 rounded-lg border border-[#B740A1] bg-[#2B1B2D] shadow-lg">
                      <div className="p-2">
                        <div className="mb-2 text-xs text-[#CACED9]">Filter by Doctor</div>
                        <select
                          className="w-full max-w-xs truncate rounded border border-[#B740A1] bg-[#43284C] p-2 text-[#F6E8FB] focus:outline-none"
                          value={selectedDoctor}
                          onChange={(e) => {
                            setSelectedDoctor(e.target.value);
                            setShowDoctorFilter(false);
                          }}
                        >
                          <option value="">All Doctors</option>
                          {availableDoctors.map((doc) => (
                            <option key={doc} value={doc} className="truncate">
                              {doc}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Test Records Table */}
            <div className="overflow-x-auto rounded-2xl border border-[#B740A1] bg-[#43284C4D]">
              <table className="min-w-full text-sm">
                <thead className="bg-[#2B1B2D]">
                  <tr className="text-left text-[#B740A1]">
                    <th className="px-4 py-3 font-semibold">PATIENT NAME</th>
                    <th className="px-4 py-3 font-semibold">SUPERVISING DOCTOR</th>
                    <th className="px-4 py-3 font-semibold">TEST DATE</th>
                    <th className="px-4 py-3 font-semibold">TEST COST</th>
                    <th className="px-4 py-3 font-semibold">CLINIC SHARE</th>
                    <th className="px-4 py-3 font-semibold">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="6" className="px-4 py-8 text-center text-[#CACED9]">
                        Loading test records...
                      </td>
                    </tr>
                  ) : error ? (
                    <tr>
                      <td colSpan="6" className="px-4 py-8 text-center text-red-400">
                        {error}
                      </td>
                    </tr>
                  ) : paginationData.paginatedRecords.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="px-4 py-8 text-center text-[#CACED9]">
                        No test records found
                      </td>
                    </tr>
                  ) : (
                    paginationData.paginatedRecords.map((record) => (
                      <tr
                        key={record.transactionId}
                        className="border-t border-[#B740A1] transition hover:bg-[#2B1B2D]"
                      >
                        <td className="px-4 py-3">{record.patientName}</td>
                        <td className="px-4 py-3">{record.supervisingDoctor}</td>
                        <td className="px-4 py-3">{record.testDate}</td>
                        <td className="px-4 py-3">{formatIndianCurrency(record.testCost)}</td>
                        <td className="px-4 py-3 text-green-400">{formatIndianCurrency(record.clinicShare)}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                              record.status === 'completed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {record.status === 'completed' ? 'Completed' : 'Pending'}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <p className="text-xs text-[#CACED9]">
                Showing {filteredRecords.length > 0 ? paginationData.startIndex + 1 : 0} to{' '}
                {Math.min(paginationData.endIndex, filteredRecords.length)} of {filteredRecords.length} entries
              </p>
              <div className="flex items-center">{renderPagination()}</div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center justify-center">
            <span className="h-[10px] w-[118px] rounded-full bg-gradient-to-r from-[#FB7CE4] to-[#B740A1] opacity-60"></span>
          </div>

          {/* Tests by Supervising Doctor */}
          <div className="mb-8 rounded-2xl border border-[#B740A1] bg-[#43284C4D] p-6 shadow-lg">
            <h2 className="mb-2 text-lg font-semibold text-[#F6E8FB] md:text-xl">Tests by Supervising Doctor</h2>
            <div className="space-y-4">
              {doctorStats.map((doctor, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#F6E8FB]">{doctor.name}</span>
                    <span className="text-xs font-semibold text-[#F6E8FB]">{doctor.tests} Tests</span>
                  </div>
                  <div className="mt-1 h-2 w-full rounded-full bg-[#432547]">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-[#B740A1] to-[#FB7CE4]"
                      style={{ width: `${totalDoctorTests ? (doctor.tests / totalDoctorTests) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <BlogFooter />
      </div>
    </>
  );
};

export default Orderhistory;
