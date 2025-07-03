import React from 'react';

const Profile4 = () => {
  const sessions = [
    { subject: 'Special Education', class: 'Class 1', status: 'Completed', report: 'View/Download' },
    { subject: 'Special Education', class: 'Class 1', status: 'Completed', report: 'View/Download' },
    { subject: 'Special Education', class: 'Class 1', status: 'Completed', report: 'View/Download' },
    { subject: 'Speech & Language', class: 'Class 1', status: 'Incompleted', report: 'N/A' },
    { subject: 'Speech & Language', class: 'Class 1', status: 'Incompleted', report: 'N/A' },
  ];

  return (
    <div className="mt-6">
      <div className="mt-[2vw] rounded-lg border border-[#FB7CE4] p-4">
        <h2 className="mb-4 text-xl text-white">My Sessions</h2>
        {/* Scrollable Container */}
        <div className="overflow-x-auto">
          <div className="min-w-full rounded-lg border border-[#FB7CE4] bg-transparent">
            {/* Table Header */}
            <div className="mb-2 flex w-full border-b border-[#FB7CE4] pb-2">
              <div className="w-1/4 font-medium text-white">Subject</div>
              <div className="w-1/4 font-medium text-white">Class</div>
              <div className="w-1/4 font-medium text-white">Status</div>
              <div className="w-1/4 font-medium text-white">Report</div>
            </div>

            {/* Table Rows */}
            {sessions.map((session, index) => (
              <div key={index} className="flex w-full border-b border-[#FB7CE4] py-2 last:border-b-0">
                <div className="w-1/4 text-white">{session.subject}</div>
                <div className="w-1/4 text-white">{session.class}</div>
                <div
                  className={`w-1/4 font-medium ${session.status === 'Completed' ? 'text-green-500' : 'text-red-500'}`}
                >
                  {session.status}
                </div>
                <div className="w-1/4 text-blue-500 hover:underline">
                  {/* Split "View" and "Download" in max-sm screens */}
                  <span className="hidden sm:inline">{session.report}</span>
                  <span className="block sm:hidden">
                    {session.report.split('/')[0]}
                    <br />
                    {session.report.split('/')[1]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile4;
