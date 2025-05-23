import React from 'react';

const Profile3 = () => {
  const sessions = [
    { subject: 'Special Education', class: 'Class 1', status: 'Completed' },
    { subject: 'Special Education', class: 'Class 1', status: 'Completed' },
    { subject: 'Special Education', class: 'Class 1', status: 'Completed' },
    { subject: 'Speech & Language', class: 'Class 1', status: 'Incompleted' },
    { subject: 'Speech & Language', class: 'Class 1', status: 'Incompleted' },
  ];

  return (
    <div className="mt-6">
      <div className="mt-[2vw] rounded-lg border border-[#FB7CE4] p-2">
        <h2 className="mb-4 text-xl text-white">My Sessions</h2>
        <div className="flex flex-wrap rounded-lg border border-[#FB7CE4] bg-transparent p-4">
          {/* Table Header */}
          <div className="mb-2 flex w-full border-b border-[#FB7CE4] pb-2">
            <div className="w-1/3 font-medium text-white">Subject</div>
            <div className="w-1/3 font-medium text-white">Class</div>
            <div className="w-1/3 font-medium text-white">Status</div>
          </div>

          {/* Table Rows */}
          {sessions.map((session, index) => (
            <div key={index} className="flex w-full border-b border-[#FB7CE4] py-2 last:border-b-0">
              <div className="w-1/3 text-white">{session.subject}</div>
              <div className="w-1/3 text-white">{session.class}</div>
              <div
                className={`w-1/3 font-medium ${session.status === 'Completed' ? 'text-green-500' : 'text-red-500'}`}
              >
                {session.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile3;
