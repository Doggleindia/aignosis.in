import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router, Route, and Routes
import HomepageMain from "./components/HomepageMain"; // Import the HomepageMain component
import AboutUs from "./components/AboutUs";
import PartnershipPage from "./components/PartnershipPage";
import PatientHistory from "./components/PatientHistory"; // Import the combined PatientHistory component

import TestMain from "./components/testPages/TestMain";
import VideoPlayback from "./components/testPages/VideoPlayback";
import CalibrationPage from "./components/testPages/CalibrationPage";
import WebcamMicTest from "./components/testPages/WebcamMicTest";
import PriceMain from "./components/price/PriceMain";
import ReportComLast from "./components/ReportComLast";
import ScrollToTop from "./components/ScrollToTop";
import BlogPage from "./components/BlogPages/BlogPage";
import PaymentScreensMain from "./components/PaymentScreensMain";
import Toddlers from "./components/testPages/Toddlers";
import ContactPage from "./components/ContactPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ServicePage2 from "./components/servicePages/ServicePage2";
import ServicePage3 from "./components/servicePages/ServicePage3";
import ServicePage4 from "./components/servicePages/ServicePage4";
import ServicePage5 from "./components/servicePages/ServicePage5";
import ServicePage1 from "./components/servicePages/ServicePage1";
import TAndC from "./components/TAndC";
import RefundAndReschedule from "./components/RefundAndReschedule";
import LoginPage from "./components/LoginPage/LoginPage";
import BlogView from "./components/BlogPages/BlogView";
import WeWork from "./components/BlogPages/WeWork";
import ClinicMain from "./components/clinic/ClinicMain";
import Priceplan from "./components/Priceplan";

import BrainMain from "./components/homeBrain/BrainMain";

import FromDoctor from "./components/FromDoctor";
import CareerPage from "./components/Career/CareerPage";
// import AutismTest from "./components/AutismTest";
import DogCalibration from "./components/aignosisintegration/DogCalibration";
import Error from "./components/aignosisintegration/Error";
import DataCollectionPage from "./components/aignosisintegration/DataCollectionPage";
import Report from "./components/ReportPages/page1";
import Dashboard from './components/Dashboard/Dashboard';

// import AuthRoute from './components/config/AuthRoute';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {" "}
        {/* Use Routes to define all your routes */}
        <Route path="/" element={<HomepageMain />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/partnership" element={<PartnershipPage />} />
        <Route path="/patienthistory" element={<PatientHistory />} />{" "}
        {/* Updated route for PatientHistory */}
        <Route path="/assessments-evaluation" element={<ServicePage1 />} />
        <Route path="/speech-language" element={<ServicePage2 />} />
        <Route path="/behaviour-therapy" element={<ServicePage3 />} />
        <Route path="/occupational-therapy" element={<ServicePage4 />} />
        <Route path="/special-education" element={<ServicePage5 />} />
        <Route path="/patienthistory" element={<PatientHistory />} />{" "}
        {/* Updated route for PatientHistory */}
        <Route path="/priceplan" element={<PriceMain />} />
        <Route path="/fromdoctor" element={<FromDoctor />} />
        <Route path="/prices" element={<Priceplan />} />
        <Route path="/report" element={<ReportComLast />} />
        <Route path="/test/fillup" element={<TestMain />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<WeWork />} />
        <Route path="/clinic" element={<ClinicMain />} />
        <Route path="/test/fillup/tod" element={<Toddlers />} />
        <Route path="/payment" element={<PaymentScreensMain />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TAndC />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/refund-reschedule" element={<RefundAndReschedule />} />
        <Route path="/brain" element={<BrainMain />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/AutismTest" element={<CalibrationPage />} />
        <Route path="/dogcalibration" element={<DogCalibration />} />
        <Route path="/video" element={<VideoPlayback />} />
        <Route path="/test/fillup" element={<TestMain />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/dataCollection" element={<DataCollectionPage />} />
        <Route path="/download" element={<Report />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        
      </Routes>
    </Router>
  );
};

export default App;
