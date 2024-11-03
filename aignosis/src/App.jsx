import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, and Routes
import HomepageMain from './components/HomepageMain'; // Import the HomepageMain component
import AboutUs from './components/AboutUs';
import PartnershipPage from './components/PartnershipPage';
import PatientHistory from './components/PatientHistory'; // Import the combined PatientHistory component
import ServicePage1 from './components/ServicePage1';
import TestMain from './components/testPages/TestMain';
import CalibrationPage from './components/testPages/CalibrationPage';
import WebcamMicTest from './components/testPages/WebcamMicTest';
import PriceMain from './components/price/PriceMain';
import ReportComLast from './components/ReportComLast';
import ScrollToTop from "./components/ScrollToTop";
import BlogPage from './components/BlogPages/BlogPage';
import PaymentScreensMain from './components/PaymentScreensMain';

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Optional: if you want to scroll to the top on route change */}
      <Routes> {/* Use Routes to define all your routes */}
        <Route path="/" element={<HomepageMain />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/partnership" element={<PartnershipPage />} />
        <Route path="/patienthistory" element={<PatientHistory />} /> {/* Updated route for PatientHistory */}
        <Route path="/servicepage1" element={<ServicePage1 />} />
        <Route path="/patienthistory" element={<PatientHistory />} /> {/* Updated route for PatientHistory */}

        <Route path="/prices" element={<PriceMain />} />
        <Route path="/report" element={<ReportComLast />} />
        
        <Route path="/test/fillup" element={<TestMain />} />
        <Route path="/BlogPages/BlogPage" element={<BlogPage />} />
        <Route path="/payment" element={<PaymentScreensMain />} />
      </Routes>
    </Router>
  );
}

export default App;
