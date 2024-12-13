import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, and Routes
import HomepageMain from './components/HomepageMain'; // Import the HomepageMain component
import AboutUs from './components/AboutUs';
import PartnershipPage from './components/PartnershipPage';
import PatientHistory from './components/PatientHistory'; // Import the combined PatientHistory component

import TestMain from './components/testPages/TestMain';
import CalibrationPage from './components/testPages/CalibrationPage';
import WebcamMicTest from './components/testPages/WebcamMicTest';
import PriceMain from './components/price/PriceMain';
import ReportComLast from './components/ReportComLast';
import ScrollToTop from "./components/ScrollToTop";
import BlogPage from './components/BlogPages/BlogPage';
import PaymentScreensMain from './components/PaymentScreensMain';
import Toddlers from './components/testPages/Toddlers';
import ContactPage from './components/ContactPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import ServicePage2 from './components/servicePages/ServicePage2';
import ServicePage3 from './components/servicePages/ServicePage3';
import ServicePage4 from './components/servicePages/ServicePage4';
import ServicePage5 from './components/servicePages/ServicePage5';
import ServicePage1 from './components/servicePages/ServicePage1';

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Optional: if you want to scroll to the top on route change */}
      <Routes> {/* Use Routes to define all your routes */}
        <Route path="/" element={<HomepageMain />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/partnership" element={<PartnershipPage />} />
        <Route path="/patienthistory" element={<PatientHistory />} /> {/* Updated route for PatientHistory */}
        <Route path="/service1" element={<ServicePage1 />} />
        <Route path='/service2' element={<ServicePage2 />} />
        <Route path='/service3' element={<ServicePage3 />} />
        <Route path='/service4' element={<ServicePage4/>} />
        <Route path='/service5' element={<ServicePage5/>} />
        <Route path="/patienthistory" element={<PatientHistory />} /> {/* Updated route for PatientHistory */}

        <Route path="/prices" element={<PriceMain />} />
        <Route path="/report" element={<ReportComLast />} />
        
        <Route path="/test/fillup" element={<TestMain />} />
        <Route path="/BlogPages" element={<BlogPage />} />
        <Route path="/test/fillup/tod" element={<Toddlers />} />

        <Route path="/payment" element={<PaymentScreensMain />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
