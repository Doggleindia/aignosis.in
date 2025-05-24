import React from 'react';

const Page5 = () => {
  const tableData = [
    {
      subskill: 'Eye Area Expressivity',
      description: 'Observes expressiveness in eye area, showing interest and emotional engagement.',
      percentage: 83,
      color: 'bg-[#4CAF50]',
      explain: 'Clear eye expressivity, indicating strong emotional engagement.',
    },
    {
      subskill: 'Lower Face Expressivity',
      description: 'Measures mouth expressiveness, reflecting emotional responsiveness.',
      percentage: 75,
      color: 'bg-[#66BB6A]',
      explain: 'Good lower facial expressivity, showing responsiveness to social interactions.',
    },
  ];
  const tableData1 = [
    {
      subskill: 'Emotional Range',
      description: 'Shows variety in emotions displayed, indicating emotional adaptability and health',
      percentage: 80,
      color: 'bg-[#4CAF50]',
      explain: 'Displays a broad range of emotions, reflecting healthy emotional adaptability.',
    },
    {
      subskill: 'Emotion Mirroring',
      description: "Measures ability to reflect others' emotions, showing empathy and social awareness.",
      percentage: 78,
      color: 'bg-[#66BB6A]',
      explain: 'Mirrors emotions effectively, indicating social awareness and empathy.',
    },
  ];

  return (
    <div className="pdf-image flex min-h-screen flex-col flex-wrap items-center bg-white p-8 font-raleway">
      <div className="pdf-page relative flex h-[297mm] w-[210mm] items-center justify-center rounded-md bg-white p-8 shadow-md">
        {/* Header */}
        <div className="absolute left-0 top-0 w-full p-8">
          <h1 className="text-center text-base font-bold">Feature Analysis Table</h1>
          <div className="mt-2 w-full border-t-2 border-[#9C00AD]"></div>
        </div>

        <div className="flex flex-col gap-4">
          {/* Table */}
          <div className="w-full rounded-3xl border border-[#CDAAE0] p-4 font-raleway">
            <h3 className="mb-5 text-center text-sm font-bold">Facial Muscular Response</h3>
            <table className="w-full border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="text-left">
                  <th className="font-lg border-b border-r border-gray-300 p-2 text-center text-[12px]">Feature</th>
                  <th className="font-lg border-b border-r border-gray-300 p-2 text-center text-[12px]">Percentile</th>
                  <th className="font-lg border-b border-gray-300 p-2 text-center text-[12px]">Explanation</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    {/* Subskill */}
                    <td className="w-[35%] border-r border-gray-300 p-4 text-[10px] font-semibold text-gray-800">
                      {row.subskill}
                      <br />
                      <span className="text-[12px] font-normal text-gray-600">{row.description}</span>
                    </td>
                    {/* Performance */}
                    <td className="w-[30%] border-r border-gray-300 px-6 py-6 text-center">
                      <div className="mx-auto h-10 w-[80%] rounded-full bg-gray-200">
                        <div
                          className={`flex h-full items-center justify-end rounded-full ${row.color}`}
                          style={{ width: `${row.percentage}%` }}
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[0.5rem] font-bold shadow-md">
                            {row.percentage}%
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* Results */}
                    <td className="w-[35%] px-4 py-4 text-[12px] text-gray-800">{row.explain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full rounded-3xl border border-[#CDAAE0] p-4 font-raleway">
            <h3 className="mb-5 text-center text-sm font-bold">Emotional and Mirroring Response</h3>
            <table className="w-full border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="text-left">
                  <th className="font-lg border-b border-r border-gray-300 p-2 text-center text-[12px]">Feature</th>
                  <th className="font-lg border-b border-r border-gray-300 p-2 text-center text-[12px]">Percentile</th>
                  <th className="font-lg border-b border-gray-300 p-2 text-center text-[12px]">Explanation</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {tableData1.map((row, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    {/* Subskill */}
                    <td className="w-[35%] border-r border-gray-300 p-4 text-[10px] font-semibold text-gray-800">
                      {row.subskill}
                      <br />
                      <span className="text-[12px] font-normal text-gray-600">{row.description}</span>
                    </td>
                    {/* Performance */}
                    <td className="w-[30%] border-r border-gray-300 px-6 py-6 text-center">
                      <div className="mx-auto h-10 w-[80%] rounded-full bg-gray-200">
                        <div
                          className={`flex h-full items-center justify-end rounded-full ${row.color}`}
                          style={{ width: `${row.percentage}%` }}
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[0.5rem] font-bold shadow-md">
                            {row.percentage}%
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* Results */}
                    <td className="w-[35%] px-4 py-4 text-[12px] text-gray-800">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full p-8">
          <div className="mt-10 flex w-full items-center justify-between border-t-2 border-[#800080] pt-2 font-manrope text-xs">
            <span className="text-[10px]">Sample</span>
            <div className="text-center text-[10px]">
              <span>Received Date: 2023-07-28 17:22:09</span>
              <br />
              <span>ID: Report Generation Date:</span>
            </div>
            <span className="text-[10px]">Page 10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
