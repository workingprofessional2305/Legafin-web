// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FloatingContactIcons from './components/FloatingContactIcons';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import AdvertisementLine from './components/AdvertisementLine';
import ScrollToTop from "./components/ScrollToTop";

// General Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Services from "./pages/Services";

// Service Detail Pages
import StartYourBusiness from './pages/StartYourBusiness';
import BusinessRegistration from './pages/BusinessRegistration';
import Licenses from './pages/Licenses';
import IntellectualPropertyRights from './pages/IntellectualPropertyRights';
import CompanySecretarialServices from './pages/CompanySecretarialServices';
import AccountingAndAudit from './pages/AccountingAndAudit';
import Financing from './pages/Financing';
import TaxAndGSTCompliance from './pages/TaxAndGSTCompliance';
import FEMAAndRBICompliances from './pages/FEMAAndRBICompliances';
import SEBICompliances from './pages/SEBICompliances';
import RDNCLTNCLATMatters from './pages/RDNCLTNCLATMatters';
import SecretarialAuditAndDueDiligence from './pages/SecretarialAuditAndDueDiligence';
import LabourLawCompliance from './pages/LabourLawCompliance';
import CorporateGovernanceAdvice from './pages/CorporateGovernanceAdvice';
import ManagementConsultation from './pages/ManagementConsultation';
import GeneralAdministration from './pages/GeneralAdministration';
import VentureFunding from './pages/VentureFunding';
import Merger from './pages/Merger';
import Liaisoning from './pages/Liaisoning';
import InsolvencyAndBankruptcy from './pages/InsolvencyAndBankruptcy';
import IT from './pages/IT';
import Legal from './pages/Legal';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">

        {/* ✅ Advertisement Line (Visible on every page) */}
        {/* <AdvertisementLine /> */}

        {/* Navbar on top */}
        <Navbar />
        <ScrollToTop />

        {/* Main Page Content */}
        <main className="flex flex-col min-h-screen">
          <Routes>
            {/* General Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/services" element={<Services />} />

            {/* Service Detail Pages */}
            <Route path="/startyourbusiness" element={<StartYourBusiness />} />
            <Route path="/businessregistration" element={<BusinessRegistration />} />
            <Route path="/licenses" element={<Licenses />} />
            <Route path="/intellectualpropertyrights" element={<IntellectualPropertyRights />} />
            <Route path="/companysecretarialservices" element={<CompanySecretarialServices />} />
            <Route path="/accountingandaudit" element={<AccountingAndAudit />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/taxandgstcompliance" element={<TaxAndGSTCompliance />} />
            <Route path="/femaandrbicompliances" element={<FEMAAndRBICompliances />} />
            <Route path="/sebicompliances" element={<SEBICompliances />} />
            <Route path="/rdncltnclatmatters" element={<RDNCLTNCLATMatters />} />
            <Route path="/secretarialauditandduediligence" element={<SecretarialAuditAndDueDiligence />} />
            <Route path="/labourlawcompliance" element={<LabourLawCompliance />} />
            <Route path="/corporategovernanceadvice" element={<CorporateGovernanceAdvice />} />
            <Route path="/managementconsultation" element={<ManagementConsultation />} />
            <Route path="/generaladministration" element={<GeneralAdministration />} />
            <Route path="/venturefunding" element={<VentureFunding />} />
            <Route path="/merger" element={<Merger />} />
            <Route path="/liaisoning" element={<Liaisoning />} />
            <Route path="/insolvencyandbankruptcy" element={<InsolvencyAndBankruptcy />} />
            <Route path="/it" element={<IT />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </main>

        {/* Common Bottom Elements */}
        <Footer />
        <FloatingContactIcons />
      </div>
    </Router>
  );
};

export default App;



// {
//   "name": "os-consulting-website",
//   "private": true,
//   "version": "0.0.0",
//   "type": "module",
//   "scripts": {
//     "dev": "vite",
//     "build": "vite build",
//     "preview": "vite preview"
//   },
//   "dependencies": {
//     "emailjs-com": "^3.2.0",
//     "framer-motion": "^12.18.1",
//     "lucide-react": "^0.513.0",
//     "react": "^19.1.0",
//     "react-countup": "^6.5.3",
//     "react-dom": "^19.1.0",
//     "react-icons": "^5.5.0",
//     "react-intersection-observer": "^9.16.0",
//     "react-router-dom": "^7.6.2",
//     "sonner": "^2.0.6"
//   },
//   "devDependencies": {
//     "@eslint/js": "^9.25.0",
//     "@tailwindcss/aspect-ratio": "^0.4.2",
//     "@tailwindcss/postcss": "^4.1.8",
//     "@types/react": "^19.1.2",
//     "@types/react-dom": "^19.1.2",
//     "@vitejs/plugin-react": "^4.5.2",
//     "autoprefixer": "^10.4.21",
//     "eslint": "^9.25.0",
//     "eslint-plugin-react-hooks": "^5.2.0",
//     "eslint-plugin-react-refresh": "^0.4.19",
//     "globals": "^16.0.0",
//     "postcss": "^8.5.4",
//     "tailwindcss": "^3.4.17",
//     "vite": "^6.3.5"
//   }
// }
