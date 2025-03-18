import React, { useEffect, useState } from "react";
import axios from "axios";
import baby from "./baby.png";

const API_BASE_URL = "http://localhost:8000/rest/";

const Profile2 = () => {
  const userId = JSON.parse(localStorage.getItem("user"));
  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    if (!userId) {
      console.error("User ID not found in local storage");
      return;
    }
    fetchAssessments();
  }, []);

  const fetchAssessments = async () => {
    try {
      const transaction_id = "f71bd838-3e7f-4dd1-933b-e49d8a12d4e1"; // Replace with actual transaction_id

      const payload = { patient_uid: "e86c5126-1ef7-4741-902b-3d13d7482bb6", transaction_id };

      const [
        aiReportRes,
        psychologistReportRes,
        testCompletionRes,
        testTimestampRes,
      ] = await Promise.all([
        axios.post(`${API_BASE_URL}get_ai_report_available_status/`, payload),
        axios.post(`${API_BASE_URL}get_psychologist_report_available_status/`, payload),
        axios.post(`${API_BASE_URL}get_test_completion_status/`, payload),
        axios.post(`${API_BASE_URL}get_test_timestamp/`, payload),
      ]);

      const testCompleted = testCompletionRes.data.test_completion_status;
      const aiReportAvailable = aiReportRes.data.ai_report_available;
      const psychologistReportAvailable = psychologistReportRes.data.Psychologist_report_available;
      const timestamp = testTimestampRes.data.test_timestamp
        ? new Date(testTimestampRes.data.test_timestamp).toLocaleDateString()
        : "N/A";

      setAssessments([
        {
          name: "Assessment 1",
          takenOn: timestamp,
          status: testCompleted ? "Completed" : "Incomplete",
          aiReport: aiReportAvailable ? "#" : null,
          psychologistReport: psychologistReportAvailable ? "#" : null,
        },
      ]);
    } catch (error) {
      console.error("Error fetching assessments:", error);
    }
  };

  return (
    <div>
      <div className="border border-[#FB7CE4] mt-[2vw] rounded-lg p-2">
        <div className="mt-6">
          <h2 className="text-white text-xl mb-4">My Assessments</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-transparent text-white border-collapse border border-[#FB7CE4]">
              <thead>
                <tr>
                  <th className="border border-[#FB7CE4] px-4 py-2">Assessment</th>
                  <th className="border border-[#FB7CE4] px-4 py-2">Taken On</th>
                  <th className="border border-[#FB7CE4] px-4 py-2">Status</th>
                  <th className="border border-[#FB7CE4] px-4 py-2">Report</th>
                </tr>
              </thead>
              <tbody>
                {assessments.length > 0 ? (
                  assessments.map((assessment, index) => (
                    <tr key={index}>
                      <td className="border border-[#FB7CE4] px-4 py-2">{assessment.name}</td>
                      <td className="border border-[#FB7CE4] px-4 py-2">{assessment.takenOn}</td>
                      <td
                        className={`border border-[#FB7CE4] px-4 py-2 ${
                          assessment.status === "Completed" ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {assessment.status}
                      </td>
                      <td className="border border-[#FB7CE4] px-4 py-2">
                        {assessment.aiReport || assessment.psychologistReport ? (
                          <>
                            {assessment.aiReport && (
                              <a href={assessment.aiReport} className="text-blue-500 underline">AI Report</a>
                            )}
                            {assessment.psychologistReport && (
                              <>
                                {" | "}
                                <a href={assessment.psychologistReport} className="text-blue-500 underline">Psychologist Report</a>
                              </>
                            )}
                          </>
                        ) : (
                          "No Reports"
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-4">No Assessments Found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Assessment Banner */}
        {/* <div className="mt-[5vw]">
          <div
            className="w-full h-auto flex flex-wrap items-center justify-between px-4 py-4 mt-4 rounded-lg"
            style={{ background: "linear-gradient(to left, #4B1056, #280834)" }}
          >
            
            <div className="flex items-center space-x-4 w-full sm:w-3/4 mb-4 sm:mb-0">
              <div className="w-10 h-10 flex-shrink-0">
                <img src={baby} alt="Child Icon" className="w-full h-full" />
              </div>
              <div>
                <p className="text-white font-medium text-sm">
                  Upto 1 in 5 children are at risk of developmental delays**
                </p>
                <p className="text-white font-medium mt-1 text-xs">
                  Take 5 minutes to check if your child is achieving key milestones on time
                </p>
              </div>
            </div>


            <div className="flex w-full sm:w-auto justify-center sm:justify-end">
              <button className="text-white font-bold border-[2px] border-purple-500 rounded-full px-6 py-2 text-sm sm:text-lg">
                Take test now
              </button>
            </div>
          </div>
        </div>

        
        <div className="mt-6">
          <h2 className="text-white text-xl mb-4">Schedule</h2>
        </div> */}
      </div>
    </div>
  );
};

export default Profile2;
