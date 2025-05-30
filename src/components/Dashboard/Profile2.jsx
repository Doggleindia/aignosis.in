import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baby from './baby.png';
import { decryptPassword, decryptCalibrationData } from '../aignosisintegration/DecryptionUtils';

const API_BASE_URL = 'https://de.aignosismdw.in/rest/';

const Profile2 = () => {
  const userId = JSON.parse(localStorage.getItem('user'));
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) {
      console.error('User ID not found in local storage');
      // TODO: return to home page in logged out state
      return;
    } else {
      console.log('user uid is ' + userId.phoneNumber);
      fetchAssessments();
    }
  }, []);

  const fetchAssessments = async () => {
    setLoading(true);
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
      const processedAssessments = await Promise.all(
        assessmentsData.map(async (assessment) => {
          try {
            const timestamp = assessment.test_timestamp
              ? new Date(assessment.test_timestamp).toLocaleDateString()
              : 'N/A';

            // Decrypt patient information
            const calibrationAesKey = await decryptPassword(assessment.encrypted_patient_info_enc_aes_key);
            console.log('calibration aes key is ' + calibrationAesKey);

            const patientInfo = await decryptCalibrationData(assessment.encrypted_patient_info, calibrationAesKey);
            console.log('Decrypted patient info:', patientInfo);

            return {
              transactionId: assessment.transaction_id,
              name: patientInfo.patientName,
              dob: patientInfo.patientDOB,
              takenOn: timestamp,
              status: assessment.test_completion_status ? 'Completed' : 'Retake',
              aiReport: assessment.ai_report_available ? '#' : null,
              psychologistReport: assessment.psychologist_report_available ? '#' : null,
            };
          } catch (error) {
            console.error('Error processing assessment:', error);
            return null; // Skip this assessment if processing fails
          }
        })
      );

      // Filter out null assessments (failed to process)
      const validAssessments = processedAssessments.filter((assessment) => assessment !== null);
      setAssessments(validAssessments);
    } catch (error) {
      console.error('Error fetching assessments:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mt-[2vw] rounded-lg border border-[#FB7CE4] p-2">
        <div className="mt-6">
          <h2 className="mb-4 text-xl text-white">My Assessments</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-[#FB7CE4] bg-transparent text-white">
              <thead>
                <tr>
                  <th className="border border-[#FB7CE4] px-4 py-2">Name</th>
                  <th className="border border-[#FB7CE4] px-4 py-2">Date of Birth</th>
                  <th className="border border-[#FB7CE4] px-4 py-2">Taken On</th>
                  <th className="border border-[#FB7CE4] px-4 py-2">Status</th>
                  <th className="border border-[#FB7CE4] px-4 py-2">AI Report</th>
                  <th className="border border-[#FB7CE4] px-4 py-2">Psychologist Report</th>
                </tr>
              </thead>
              <tbody>
                {assessments.length > 0 ? (
                  assessments.map((assessment, index) => (
                    <tr key={assessment.transactionId || index}>
                      <td className="border border-[#FB7CE4] px-4 py-2">{assessment.name}</td>
                      <td className="border border-[#FB7CE4] px-4 py-2">{assessment.dob}</td>
                      <td className="border border-[#FB7CE4] px-4 py-2">{assessment.takenOn}</td>
                      <td
                        className={`border border-[#FB7CE4] px-4 py-2 ${
                          assessment.status === 'Completed' ? 'text-green-500' : 'text-red-500'
                        }`}
                      >
                        {assessment.status}
                      </td>
                      <td className="border border-[#FB7CE4] px-4 py-2">
                        {assessment.aiReport ? (
                          <a href={assessment.aiReport} className="text-blue-500 underline">
                            AI Report
                          </a>
                        ) : (
                          'No Report'
                        )}
                      </td>
                      <td className="border border-[#FB7CE4] px-4 py-2">
                        {assessment.psychologistReport ? (
                          <a href={assessment.psychologistReport} className="text-blue-500 underline">
                            Psychologist Report
                          </a>
                        ) : (
                          'No Report'
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-4 text-center">
                      {loading ? 'Loading...' : 'No Assessments Found'}
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
