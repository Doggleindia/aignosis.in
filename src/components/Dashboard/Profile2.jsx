import React, { useEffect, useState } from "react";
import axios from "axios";
import baby from "./baby.png";
import {
  decryptPassword,
  decryptCalibrationData,
} from "../aignosisintegration/DecryptionUtils";

const API_BASE_URL = "http://localhost:8000/rest/";

const Profile2 = () => {
  // const userId = JSON.parse(localStorage.getItem("user"));
  const userId = {
    phoneNumber: "+919711155179", // Replace with actual phone number for testing
  };
  const [transactionsIds, setTransactionIds] = useState([]);
  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    if (!userId) {
      console.error("User ID not found in local storage");
      // TODO: return to home page in logged out state
      return;
    } else {
      console.log("user uid is " + userId.phoneNumber);
      fetchTransactions();
    }
  }, []);

  useEffect(() => {
    if (transactionsIds.length > 0) {
      console.log("Transaction IDs found...fetching assessments");
      // Clear existing assessments first to avoid duplications
      setAssessments([]);

      console.log("all tids" + transactionsIds);
      // Fetch assessments for each transaction ID
      transactionsIds.forEach((transactionId) => {
        console.log("passing tid " + transactionId);
        fetchAssessments(transactionId);
      });
    }
  }, [transactionsIds]); // This will run whenever transactionsIds changes

  useEffect(() => {}, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios
        .post(
          "http://localhost:8000/rest/get_transactions/",
          {
            patient_uid: userId.phoneNumber.toString(),
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          var transactions = JSON.parse(response.data.success)[
            "transaction_ids"
          ];
          console.log("Transactions fetched => " + transactions);
          setTransactionIds(transactions);
        })
        .catch((error) => {
          console.log("Error fetching transactions:", error);
        });
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const fetchAssessments = async (transaction_id) => {
    try {
      const payload = {
        patient_uid: userId.phoneNumber.toString(),
        transaction_id: transaction_id,
      };

      const [
        aiReportRes,
        psychologistReportRes,
        testCompletionRes,
        testTimestampRes,
        encryptedPatientInfoNKey,
      ] = await Promise.all([
        axios.post(`${API_BASE_URL}get_ai_report_available_status/`, payload),
        axios.post(
          `${API_BASE_URL}get_psychologist_report_available_status/`,
          payload
        ),
        axios.post(`${API_BASE_URL}get_test_completion_status/`, payload),
        axios.post(`${API_BASE_URL}get_test_timestamp/`, payload),
        axios.post(
          `${API_BASE_URL}get_encrypted_patient_firestore_info/`,
          payload
        ),
      ]).catch((error) => {
        console.log("Error fetching assessments:", error);
      });

      console.log("Assessment data fetched:");
      console.log(testCompletionRes);
      console.log(aiReportRes);
      console.log(psychologistReportRes);
      console.log(testTimestampRes);
      console.log(encryptedPatientInfoNKey);

      const testCompleted = testCompletionRes.data.test_completion_status;
      const aiReportAvailable = aiReportRes.data.ai_report_available;
      const psychologistReportAvailable =
        psychologistReportRes.data.Psychologist_report_available;
      const timestamp = testTimestampRes.data.test_timestamp
        ? new Date(testTimestampRes.data.test_timestamp).toLocaleDateString()
        : "N/A";

      const encryptedPatientInfo =
        encryptedPatientInfoNKey.data.encrypted_patient_info;
      const encryptedPatientInfoEncAesKey =
        encryptedPatientInfoNKey.data.encrypted_patient_info_enc_aes_key;

      decryptPassword(encryptedPatientInfoEncAesKey).then(
        (calibrationAesKey) => {
          console.log("calibration aes key is " + calibrationAesKey);

          decryptCalibrationData(encryptedPatientInfo, calibrationAesKey).then(
            (patientInfo) => {
              console.log("Decrypted patient info:", patientInfo);


              setAssessments((prevAssessments) => [
                ...prevAssessments,
                {
                  name: patientInfo.patientName,
                  dob: patientInfo.patientDOB,
                  takenOn: timestamp,
                  status: testCompleted ? "Completed" : "Incomplete",
                  aiReport: aiReportAvailable ? "#" : null,
                  psychologistReport: psychologistReportAvailable ? "#" : null,
                },
              ]);
            }
          );
        }
      );

      console.log(
        `UID: ${userId.phoneNumber.toString()} | TID: ${transaction_id} | Test completed ${testCompleted} | Ai report available ${aiReportAvailable} | Psych report available ${psychologistReportAvailable} | Timestamp ${timestamp}`
      );

      
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
                  <th className="border border-[#FB7CE4] px-4 py-2">Name</th>
                  <th className="border border-[#FB7CE4] px-4 py-2">
                    Date of Birth
                  </th>
                  {/* <th className="border border-[#FB7CE4] px-4 py-2">
                    Assessment
                  </th> */}
                  <th className="border border-[#FB7CE4] px-4 py-2">
                    Taken On
                  </th>
                  <th className="border border-[#FB7CE4] px-4 py-2">Status</th>
                  <th className="border border-[#FB7CE4] px-4 py-2">
                    AI Report
                  </th>
                  <th className="border border-[#FB7CE4] px-4 py-2">
                    Psychologist Report
                  </th>
                </tr>
              </thead>
              <tbody>
                {assessments.length > 0 ? (
                  assessments.map((assessment, index) => (
                    <tr key={index}>
                      <td className="border border-[#FB7CE4] px-4 py-2">
                        {assessment.name}
                        {index}
                      </td>
                      <td className="border border-[#FB7CE4] px-4 py-2">
                        {assessment.dob}
                      </td>
                      {/* <td className="border border-[#FB7CE4] px-4 py-2">
                        {assessment.assessmentName}
                      </td> */}
                      <td className="border border-[#FB7CE4] px-4 py-2">
                        {assessment.takenOn}
                      </td>
                      <td
                        className={`border border-[#FB7CE4] px-4 py-2 ${
                          assessment.status === "Completed"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {assessment.status}
                      </td>
                      <td className="border border-[#FB7CE4] px-4 py-2">
                        {assessment.aiReport ? (
                          <a
                            href={assessment.aiReport}
                            className="text-blue-500 underline"
                          >
                            AI Report
                          </a>
                        ) : (
                          "No Report"
                        )}
                      </td>
                      <td className="border border-[#FB7CE4] px-4 py-2">
                        {assessment.psychologistReport ? (
                          <a
                            href={assessment.psychologistReport}
                            className="text-blue-500 underline"
                          >
                            Psychologist Report
                          </a>
                        ) : (
                          "No Report"
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      No Assessments Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile2;
