import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, and Routes
import HomepageMain from './components/HomepageMain'; // Import the HomepageMain component
import AboutUs from './components/AboutUs';
import PartnershipPage from './components/PartnershipPage';
import PatientHistoryForm1 from './components/patient-history-form/PatientHistoryForm1';
import PatientHistoryForm2 from './components/patient-history-form/PatientHistoryForm2';
import PatientHistoryForm3 from './components/patient-history-form/PatientHistoryForm3';
import PatientHistoryForm4 from './components/patient-history-form/PatientHistoryForm4';

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
      </Routes>
    </Router>
  );
}

export default App;
