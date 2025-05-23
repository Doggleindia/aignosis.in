import React from 'react';

const Page3 = () => {
  const tableData = [
    {
      subskill: 'Social Preference',
      description:
        'Indicates focus on social stimuli (people) over non-social elements, reflecting social interest levels.',
      percentage: 95,
      color: 'bg-[#4CAF50]',
      explain: 'Shows strong social preference, suggesting healthy social engagement.',
    },
    {
      subskill: 'Eye Contact',
      description: 'Tracks frequency and duration of eye contact, showing comfort with social interaction.',
      percentage: 75,
      color: 'bg-[#66BB6A]',
      explain: 'Maintains good eye contact, indicating responsiveness in social interactions.',
    },
    {
      subskill: 'Joint Attention',
      description:
        'Measures shared focus on an object or event with another person, a key skill for early communication.',
      percentage: 60,
      color: 'bg-[#FFC107]',
      explain: 'Easily engages in joint attention, suggesting strong foundational communication skills.',
    },
    {
      subskill: 'Gaze Hold',
      description: 'Indicates duration of gaze on an object, reflecting attentiveness and sustained focus.',
      percentage: 65,
      color: 'bg-[#66BB6A]',
      explain: 'Demonstrates sustained attention, indicating interest in surroundings.',
    },
    {
      subskill: 'Gaze Speed',
      description: 'Assesses the speed of gaze shifts, which is associated with attentiveness and visual processing.',
      percentage: 55,
      color: 'bg-[#FFC107]',
      explain: 'Displays typical gaze speed, reflecting balanced visual responsiveness.',
    },
    {
      subskill: 'Attention Shift Frequency',
      description: 'Frequency of attention shifts, suggesting cognitive flexibility and engagement.',
      percentage: 63,
      color: 'bg-[#66BB6A]',
      explain: 'Balanced shift frequency, suggesting natural curiosity and engagement.',
    },
    {
      subskill: 'Gaze Stability',
      description: 'Measures spread of gaze across different areas, showing exploration and focus distribution.',
      percentage: 78,
      color: 'bg-[#4CAF50]',
      explain: 'Distributes gaze well, indicating healthy exploration of surroundings.',
    },
    {
      subskill: 'Focal Points',
      description: 'Measures preference for gaze points, such as faces and social interactions.',
      percentage: 62,
      color: 'bg-[#66BB6A]',
      explain: 'Focuses on multiple points, showing curiosity and attention to detail.',
    },
    {
      subskill: 'Screen Focus',
      description: 'Measures screen fixation to typical engagement levels, assessing attentional stability.',
      percentage: 65,
      color: 'bg-[#66BB6A]',
      explain: 'Maintains attention on visual tasks, indicating good focus abilities.',
    },
    {
      subskill: 'Object Tracking',
      description: 'Observes ability to follow moving objects for visual-motor coordination.',
      percentage: 60,
      color: 'bg-[#FFC107]',
      explain: 'Tracks objects smoothly, indicating typical visual-motor coordination skills.',
    },
  ];

  return (
    <div className="pdf-image flex min-h-screen flex-col flex-wrap items-center bg-white p-8 font-raleway">
      <div className="pdf-page relative m-auto min-h-[210mm] w-[210mm] rounded-md bg-white p-6 sm:w-[210mm] sm:p-8">
        {/* Header */}
        <div className="mb-4 text-center">
          <h1 className="text-base font-bold md:text-lg">Feature Analysis Table</h1>
          <div className="mt-2 w-full border-t-2 border-[#9C00AD]"></div>
        </div>

        {/* Table Container with Scroll */}
        <div className="w-full overflow-x-auto rounded-lg border border-[#CDAAE0] p-4">
          <h3 className="mb-4 text-center text-sm font-semibold">Visual Interest Response</h3>
          <table className="w-full min-w-[600px] border-collapse">
            {/* Table Header */}
            <thead>
              <tr className="bg-gray-100 text-left text-[10px] md:text-sm">
                <th className="border-b border-r border-gray-300 p-2 text-center">Feature</th>
                <th className="border-b border-r border-gray-300 p-2 text-center">Percentile</th>
                <th className="border-b border-gray-300 p-2 text-center">Explanation</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="border-b border-gray-300 text-[10px] md:text-sm">
                  {/* Subskill */}
                  <td className="w-[35%] border-r border-gray-300 p-2 font-semibold text-gray-800 md:p-3">
                    {row.subskill}
                    <br />
                    <span className="text-[9px] font-normal text-gray-600 md:text-xs">{row.description}</span>
                  </td>

                  {/* Performance */}
                  <td className="w-[30%] border-r border-gray-300 p-2 text-center md:p-3">
                    <div className="relative mx-auto h-4 w-full max-w-[90px] rounded-full bg-gray-200 md:h-10">
                      <div
                        className={`absolute left-0 top-0 h-full rounded-full ${row.color}`}
                        style={{ width: `${row.percentage}%` }}
                      >
                        <div className="absolute right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[0.5rem] font-bold shadow">
                          {row.percentage}%
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Explanation */}
                  <td className="w-[35%] p-2 text-gray-800 md:p-3">{row.explain}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-between border-t-2 border-[#800080] pt-3 text-[10px] text-xs text-gray-600">
          <span>Sample</span>
          <div className="text-center">
            <span>Received Date: 2023-07-28 17:22:09</span>
            <br />
            <span>ID: Report Generation Date:</span>
          </div>
          <span>Page 08</span>
        </div>
      </div>
    </div>
  );
};

export default Page3;
