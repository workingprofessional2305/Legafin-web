import {
  FiFileText, FiGlobe, FiCheckCircle, FiLayers,
  FiSearch, FiUserCheck, FiActivity, FiBarChart2, FiTarget,
  FiTrendingUp, FiShuffle, FiUser, FiAlertTriangle, FiCpu, FiBookOpen,
  FiBriefcase, FiClipboard, FiShield, FiKey, FiUsers
} from "react-icons/fi";
import { LuIndianRupee } from "react-icons/lu"; // ✅ Correct import

export const serviceDropdown = [
  { title: "Start Your Business", path: "/startyourbusiness", icon: <FiBriefcase /> },
  { title: "Business Registration", path: "/businessregistration", icon: <FiClipboard /> },
  { title: "Licenses", path: "/licenses", icon: <FiShield /> },
  { title: "Intellectual Property Rights", path: "/intellectualpropertyrights", icon: <FiKey /> },
  { title: "Company Secretarial Services", path: "/companysecretarialservices", icon: <FiUsers /> },
  { title: "Accounting & Audit", path: "/accountingandaudit", icon: <FiBookOpen /> },
  { title: "Financing", path: "/financing", icon: <LuIndianRupee /> },
  { title: "Tax & GST Compliance", path: "/taxandgstcompliance", icon: <FiFileText /> },
  { title: "FEMA and RBI Compliances", path: "/femaandrbicompliances", icon: <FiGlobe /> },
  { title: "SEBI Compliances", path: "/sebicompliances", icon: <FiCheckCircle /> },
  { title: "RD NCLT & NCLAT Matters", path: "/rdncltnclatmatters", icon: <FiLayers /> },
  { title: "Secretarial Audit and Due Diligence", path: "/secretarialauditandduediligence", icon: <FiSearch /> },
  { title: "Labour Law and Compliance", path: "/labourlawcompliance", icon: <FiUserCheck /> },
  { title: "Corporate Governance Advice & Support", path: "/corporategovernanceadvice", icon: <FiActivity /> },
  { title: "Management Consultation", path: "/managementconsultation", icon: <FiBarChart2 /> },
  { title: "General Administration", path: "/generaladministration", icon: <FiTarget /> },
  { title: "Venture Funding", path: "/venturefunding", icon: <FiTrendingUp /> },
  { title: "Merger Amalgamation & Cross Border", path: "/merger", icon: <FiShuffle /> },
  { title: "Liaisoning & Representing Services", path: "/liaisoning", icon: <FiUser /> },
  { title: "Insolvency and Bankruptcy", path: "/insolvencyandbankruptcy", icon: <FiAlertTriangle /> },
  { title: "IT", path: "/it", icon: <FiCpu /> },
  { title: "Legal", path: "/legal", icon: <FiBookOpen /> }
];
