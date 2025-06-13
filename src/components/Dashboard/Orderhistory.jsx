import { useEffect, useState } from 'react';
import { FaSearch, FaFilter, FaEye } from 'react-icons/fa';
import Header from '../Header';
import BlogFooter from '../BlogPages/BlogFooter';
import { formatIndianCurrency } from '../../utils/currencyUtils';

const Orderhistory = () => {
  const [testRecords, setTestRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);

  // Mock data for clinic metrics
  const clinicMetrics = {
    activeDoctors: 4,
    totalTests: 325,
    amountPayable: 124507.5,
    growth: {
      doctors: 'Across all specializations',
      tests: '5.1% from last month',
      amount: 'Due on Oct 31, 2023',
    },
  };

  // Mock data for doctor statistics
  const doctorStats = [
    { name: 'Dr. Anika Sharma', tests: 120, percentage: 85 },
    { name: 'Dr. Vikram Singh', tests: 95, percentage: 68 },
    { name: 'Dr. Sameer Ali', tests: 65, percentage: 46 },
    { name: 'Dr. Priya Desai', tests: 45, percentage: 32 },
  ];

  useEffect(() => {
    // Mock data for test records
    const mockTestRecords = [
      {
        id: 'P00321',
        patientName: 'Rohan Joshi',
        testName: 'Autism Screening',
        supervisingDoctor: 'Dr. Anika Sharma',
        testDate: '2025-05-15',
        testCost: 1500,
        clinicShare: 450,
        status: 'completed',
      },
      {
        id: 'P00322',
        patientName: 'Siya Khanna',
        testName: 'Developmental Check',
        supervisingDoctor: 'Dr. Vikram Singh',
        testDate: '2025-05-28',
        testCost: 1200,
        clinicShare: 360,
        status: 'completed',
      },
      {
        id: 'P00323',
        patientName: 'Aarav Gupta',
        testName: 'Autism Screening',
        supervisingDoctor: 'Dr. Anika Sharma',
        testDate: '2025-06-02',
        testCost: 1500,
        clinicShare: 450,
        status: 'completed',
      },
      {
        id: 'P00324',
        patientName: 'Myra Reddy',
        testName: 'Behavioral Assessment',
        supervisingDoctor: 'Dr. Sameer Ali',
        testDate: '2025-06-10',
        testCost: 1800,
        clinicShare: 540,
        status: 'completed',
      },
      {
        id: 'P00325',
        patientName: 'Vivaan Mehra',
        testName: 'Autism Screening',
        supervisingDoctor: 'Dr. Priya Desai',
        testDate: '2025-06-12',
        testCost: 1500,
        clinicShare: 450,
        status: 'completed',
      },
    ];
    // In a real application, you would fetch data from your API
    setTestRecords(mockTestRecords);
  }, []);

  const filteredRecords = testRecords.filter(
    (record) =>
      record.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.supervisingDoctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.testName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];

    // Previous button
    pages.push(
      <button
        key="prev"
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        className="mx-1 rounded bg-purple-600 px-3 py-1 text-white hover:bg-purple-700 disabled:opacity-50"
        disabled={currentPage === 1}
      >
        ‹
      </button>
    );

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
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

    // Next button
    pages.push(
      <button
        key="next"
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        className="mx-1 rounded bg-purple-600 px-3 py-1 text-white hover:bg-purple-700 disabled:opacity-50"
        disabled={currentPage === totalPages}
      >
        ›
      </button>
    );

    return pages;
  };

  // Calculate total tests for dynamic bar width
  const totalDoctorTests = doctorStats.reduce((sum, doc) => sum + doc.tests, 0);

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
              <div className="flex items-center gap-2">
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#CACED9]" />
                  <input
                    type="text"
                    placeholder="Search patient or doctor..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-[17rem] rounded-lg border border-[#B740A1] bg-[#2B1B2D] py-2 pl-10 pr-6 text-[#F6E8FB] placeholder-[#CACED9] focus:border-[#FB7CE4] focus:outline-none"
                  />
                </div>
                <button className="flex items-center gap-2 rounded-lg border border-[#B740A1] bg-transparent px-4 py-2 text-[#F6E8FB] transition hover:bg-[#43284C]">
                  <FaFilter />
                  <span>Filter</span>
                </button>
              </div>
            </div>

            {/* Test Records Table */}
            <div className="overflow-x-auto rounded-2xl border border-[#B740A1] bg-[#43284C4D]">
              <table className="min-w-full text-sm">
                <thead className="bg-[#2B1B2D]">
                  <tr className="text-left text-[#B740A1]">
                    <th className="px-4 py-3 font-semibold">PATIENT ID</th>
                    <th className="px-4 py-3 font-semibold">PATIENT NAME</th>
                    <th className="px-4 py-3 font-semibold">TEST NAME</th>
                    <th className="px-4 py-3 font-semibold">SUPERVISING DOCTOR</th>
                    <th className="px-4 py-3 font-semibold">TEST DATE</th>
                    <th className="px-4 py-3 font-semibold">TEST COST</th>
                    <th className="px-4 py-3 font-semibold">CLINIC SHARE</th>
                    <th className="px-4 py-3 font-semibold">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecords.map((record) => (
                    <tr key={record.id} className="border-t border-[#B740A1] transition hover:bg-[#2B1B2D]">
                      <td className="px-4 py-3">{record.id}</td>
                      <td className="px-4 py-3">{record.patientName}</td>
                      <td className="px-4 py-3">{record.testName}</td>
                      <td className="px-4 py-3">{record.supervisingDoctor}</td>
                      <td className="px-4 py-3">{record.testDate}</td>
                      <td className="px-4 py-3">{formatIndianCurrency(record.testCost)}</td>
                      <td className="px-4 py-3 text-green-400">{formatIndianCurrency(record.clinicShare)}</td>
                      <td className="px-4 py-3">
                        <button className="text-[#FB7CE4] hover:text-[#B740A1]">
                          <FaEye />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <p className="text-xs text-[#CACED9]">Showing 1 to 5 of {filteredRecords.length} entries</p>
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
