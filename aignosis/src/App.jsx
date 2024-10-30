import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, and Routes
import HomepageMain from './components/HomepageMain'; // Import the HomepageMain component
import AboutUs from './components/AboutUs';
import PartnershipPage from './components/PartnershipPage';
import PatientHistoryForm1 from './components/patient-history-form/PatientHistoryForm1';
import PatientHistoryForm2 from './components/patient-history-form/PatientHistoryForm2';
import PatientHistoryForm3 from './components/patient-history-form/PatientHistoryForm3';
import PatientHistoryForm4 from './components/patient-history-form/PatientHistoryForm4';
import ServicePage1 from './components/ServicePage1';
import TestMain  from './components/testPages/TestMain'
import CalibrationPage from './components/testPages/CalibrationPage';
import WebcamMicTest from './components/testPages/WebcamMicTest';
import PriceMain from './components/price/PriceMain';
import ReportComLast from './components/ReportComLast';
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
  return (
    <Router>
      <Routes> {/* Use Routes to define all your routes */}
        <Route path="/" element={<HomepageMain />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/partnership" element={<PartnershipPage />} />
        <Route path="/form1" element={<PatientHistoryForm1 />} />
        <Route path="/form2" element={<PatientHistoryForm2 />} />
        <Route path="/form3" element={<PatientHistoryForm3 />} />
        <Route path="/form4" element={<PatientHistoryForm4 />} />
        <Route path="/servicepage1" element={<ServicePage1 />} />
        <Route path="/prices" element={<PriceMain />} />
        <Route path="/report" element={<ReportComLast />} />

        <Route path="/test/fillup" element={<TestMain />} />
        <Route path="/test/callibration" element={<CalibrationPage />} />
        <Route path="/test/cammictest" element={<WebcamMicTest />} />
      </Routes>
    </Router>
  );
}

export default App;
