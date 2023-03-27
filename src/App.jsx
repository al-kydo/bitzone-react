import React from "react";
import { Route, Routes } from "react-router-dom";
import SolutionLayout from "./components/layout/SolutionLayout";
import BeautyCenter from "./components/solutions/BeautyCenter";
import Footer from "./components/layout/Footer";
import LandingPage from "./components/layout/LandingPage";
import PageContainer from "./components/layout/PageContainer";
import ClinicZone from "./components/solutions/ClinicZone";
import PharmacyZone from "./components/solutions/PharmacyZone";
import LearnZone from "./components/solutions/LearnZone";
import About from "./components/landing_page_components/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/container" element={<PageContainer />}>
          <Route path="solutionlayout">
            <Route index element={<SolutionLayout />} />
            <Route path="beautycenter" element={<BeautyCenter />} />
            <Route path="cliniczone" element={<ClinicZone />} />
            <Route path="pharmacyzone" element={<PharmacyZone />} />
            <Route path="learnzone" element={<LearnZone />} />
          </Route>
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
