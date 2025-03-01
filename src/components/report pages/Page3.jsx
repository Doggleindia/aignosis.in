import React from "react";

const Page3 = () => {
    const tableData = [
        { subskill: "Social Preference", description: "Indicates focus on social stimuli (people) over non-social elements, reflecting social interest levels.", percentage: 95, color: "bg-[#4CAF50]", explain: "Shows strong social preference, suggesting healthy social engagement." },
        { subskill: "Eye Contact", description: "Tracks frequency and duration of eye contact, showing comfort with social interaction.", percentage: 75, color: "bg-[#66BB6A]", explain: "Maintains good eye contact, indicating responsiveness in social interactions." },
        { subskill: "Joint Attention", description: "Measures shared focus on an object or event with another person, a key skill for early communication.", percentage: 60, color: "bg-[#FFC107]", explain: "Easily engages in joint attention, suggesting strong foundational communication skills." },
        { subskill: "Gaze Hold", description: "Indicates duration of gaze on an object, reflecting attentiveness and sustained focus.", percentage: 65, color: "bg-[#66BB6A]", explain: "Demonstrates sustained attention, indicating interest in surroundings." },
        { subskill: "Gaze Speed", description: "Assesses the speed of gaze shifts, which is associated with attentiveness and visual processing.", percentage: 55, color: "bg-[#FFC107]", explain: "Displays typical gaze speed, reflecting balanced visual responsiveness." },
        { subskill: "Attention Shift Frequency", description: "Frequency of attention shifts, suggesting cognitive flexibility and engagement.", percentage: 63, color: "bg-[#66BB6A]", explain: "Balanced shift frequency, suggesting natural curiosity and engagement." },
        { subskill: "Gaze Stability", description: "Measures spread of gaze across different areas, showing exploration and focus distribution.", percentage: 78, color: "bg-[#4CAF50]", explain: "Distributes gaze well, indicating healthy exploration of surroundings." },
        { subskill: "Focal Points", description: "Measures preference for gaze points, such as faces and social interactions.", percentage: 62, color: "bg-[#66BB6A]", explain: "Focuses on multiple points, showing curiosity and attention to detail." },
        { subskill: "Screen Focus", description: "Measures screen fixation to typical engagement levels, assessing attentional stability.", percentage: 65, color: "bg-[#66BB6A]", explain: "Maintains attention on visual tasks, indicating good focus abilities." },
        { subskill: "Object Tracking", description: "Observes ability to follow moving objects for visual-motor coordination.", percentage: 60, color: "bg-[#FFC107]", explain: "Tracks objects smoothly, indicating typical visual-motor coordination skills." }
    ];

    return (
        <div className="pdf-image flex flex-wrap flex-col font-raleway items-center p-8 bg-white min-h-screen">
            <div className="pdf-page bg-white p-6 sm:p-8 rounded-md w-[210mm] sm:w-[210mm] m-auto min-h-[210mm] relative">
                
                {/* Header */}
                <div className="text-center mb-4">
                    <h1 className="text-base md:text-lg font-bold">Feature Analysis Table</h1>
                    <div className="w-full border-t-2 mt-2 border-[#9C00AD]"></div>
                </div>

                {/* Table Container with Scroll */}
                <div className="w-full border rounded-lg p-4 border-[#CDAAE0] overflow-x-auto">
                    <h3 className="text-center text-sm font-semibold mb-4">Visual Interest Response</h3>
                    <table className="w-full border-collapse min-w-[600px]">
                        {/* Table Header */}
                        <thead>
                            <tr className="text-left bg-gray-100 text-[10px] md:text-sm">
                                <th className="p-2 border-r border-b border-gray-300 text-center">Feature</th>
                                <th className="p-2 border-r border-b border-gray-300 text-center">Percentile</th>
                                <th className="p-2 border-b border-gray-300 text-center">Explanation</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {tableData.map((row, index) => (
                                <tr key={index} className="border-b border-gray-300 text-[10px] md:text-sm">
                                    {/* Subskill */}
                                    <td className="p-2 md:p-3 text-gray-800 font-semibold border-r border-gray-300 w-[35%]">
                                        {row.subskill}
                                        <br />
                                        <span className="font-normal text-gray-600 text-[9px] md:text-xs">{row.description}</span>
                                    </td>

                                    {/* Performance */}
                                    <td className="p-2 md:p-3 text-center w-[30%] border-r border-gray-300">
                                        <div className="w-full max-w-[90px] h-4 md:h-10 mx-auto rounded-full bg-gray-200 relative">
                                            <div className={`absolute top-0 left-0 h-full rounded-full ${row.color}`} style={{ width: `${row.percentage}%` }}>
                                                <div className="absolute right-0 w-10 h-10  bg-white rounded-full flex items-center justify-center text-[0.5rem] font-bold shadow">
                                                    {row.percentage}%
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Explanation */}
                                    <td className="p-2 md:p-3 text-gray-800 w-[35%]">{row.explain}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="mt-6 border-t-2 border-[#800080] pt-3 text-xs text-gray-600 flex justify-between text-[10px]">
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
