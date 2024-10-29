/** @format */

import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer.js";
import FooterBottom from "./components/footer/FooterBottom.js";
import HomePage from "./components/pages/HomePage"; // Import HomePage component
import AboutPage from "./components/pages/AboutPage";
import ServicesPage from "./components/pages/ServicesPage";
import SolutionsPage from "./components/pages/SolutionsPage";
import NavbarNew from "./components/navbar/NavbarNew"; //
import CustomSoftwarePage from "./components/pages/CustomSoftwarePage";
import WebAppDevPage from "./components/pages/WebAppDevPage";
import MobileAppDevPage from "./components/pages/MobileAppDevPage";
import IndustriesPage from "./components/pages/IndustriesPage.js";
import GetInTouchPage from "./components/pages/GetInTouchPage.js";
import FinTechPage from "./components/pages/FinTechPage.js";
import HealthcarePage from "./components/pages/HealthcarePage.js";
import EcommercePage from "./components/pages/EcommercePage.js";
import EducationPage from "./components/pages/EducationPage.js";
import HospitalityPage from "./components/pages/HospitalityPage";
import PharmacyPage from "./components/pages/PharmacyPage.js";
import FoodTechPage from "./components/pages/FoodTechPage.js";
import RealEsatatePage from "./components/pages/RealEsatatePage.js";
import JavaPage from "./components/pages/technologiespages/JavaPage.js";
import NodeJsPage from "./components/pages/technologiespages/nodejs/NodeJsPage.js";
import JavaScriptPage from "./components/pages/technologiespages/JavaScript/JavaScriptPage.js";
import IotPage from "./components/pages/technologiespages/iot/IotPage.js";
import CasePage from "./components/pages/CaseStudy/CasePage.js";
import ScrollToTop from "./components/ScrollToTop.js";
import CareerPage from "./components/careers/CareerPage.js";
import PrivacyPolicyPage from "./components/pages/policy_link/PrivacyPolicyPage";
import PrivacyPolicyNodexPos from "./components/pages/policy_link/PrivacyPolicyNodexPos";
import TermsConditions from "./components/pages/policy_link/TermsNodexPos.js";
import RefundNodexPos from "./components/pages/policy_link/RefundNodexPos.js";



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Routes with header and footer */}
        <Route
          path="*"
          element={
            <div className="w-full h-auto bg-bodyColor text-lightText">
              <NavbarNew />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/case" element={<CasePage />} />
                <Route path="/industries" element={<IndustriesPage />} />
                <Route path="/contact" element={<GetInTouchPage />} />
                {/* Sub Pages */}
                <Route path="/customsoftwarepage" element={<CustomSoftwarePage />} />
                <Route path="/webappdevpage" element={<WebAppDevPage />} />
                <Route path="/mobileppdevpage" element={<MobileAppDevPage />} />
                {/* Industries */}
                <Route path="/fintech" element={<FinTechPage />} />
                <Route path="/healthcare" element={<HealthcarePage />} />
                <Route path="/ecommerce" element={<EcommercePage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/hospitality" element={<HospitalityPage />} />
                <Route path="/pharmacy" element={<PharmacyPage />} />
                <Route path="/foodtech" element={<FoodTechPage />} />
                <Route path="/realestate" element={<RealEsatatePage />} />
                {/* Technologies */}
                <Route path="/java" element={<JavaPage />} />
                <Route path="/nodejs" element={<NodeJsPage />} />
                <Route path="/javascript" element={<JavaScriptPage />} />
                <Route path="/iot" element={<IotPage />} />
                {/* Career Page */}
                <Route path="/careerpage" element={<CareerPage />} />
              </Routes>
              <Footer />
              <FooterBottom />
            </div>
          }
        />

        {/* Privacy Policy Page without header and footer */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/privacy-policy-nodex-pos" element={<PrivacyPolicyNodexPos />} />
        <Route path="/terms-condition-nodex-pos" element={<TermsConditions/>} />
        <Route path="/refund-policy-nodex-pos" element={<RefundNodexPos/>} />

      </Routes>
    </Router>
  );
}

export default App;