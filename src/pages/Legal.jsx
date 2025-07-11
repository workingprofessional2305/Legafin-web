import React from "react";
import { Link } from "react-router-dom";
import startImage22 from "../assets/Legal_Consultancy_images.jpg";
import ServiceLayout from "../components/ServiceLayout";
import { TbCircleDashedCheck } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";

const legalTitle = [
  {
    title: "Litigation and Arbitration",
    desc: "Expert legal representation and dispute resolution through litigation and arbitration services.",
  },
  {
    title: "Anti-Corruption, Fraud, and Investigations",
    desc: "Comprehensive legal support to address corruption, fraud, and conduct thorough investigations.",
  },
  {
    title: "Family Law",
    desc: "Compassionate and effective legal services for family-related matters, including divorce and child custody.",
  },
  {
    title: "Cyber Law",
    desc: "Specialized legal guidance on cyber law issues, including data protection and cybercrime.",
  },
  {
    title: "Property Law",
    desc: "Expert advice and representation in property-related legal matters, including disputes and transactions.",
  },
  {
    title: "Supreme Court Cases",
    desc: "Professional legal services for cases at the Supreme Court of India.",
  },
  {
    title: "Marriage Registration",
    desc: "Simplify the process of marriage registration with our expert assistance.",
  },
  {
    title: "Child Custody Law",
    desc: "Dedicated legal support for child custody cases, ensuring the best interests of the child.",
  },
  {
    title: "Divorce Lawyer",
    desc: "Experienced divorce lawyers to guide you through the legal process and protect your rights.",
  },
  {
    title: "Criminal Lawyer",
    desc: "Defend your rights with our experienced criminal lawyers in various criminal cases.",
  },
  {
    title: "Bail Lawyer",
    desc: "Expert legal services to assist with bail applications and related proceedings.",
  },
  {
    title: "Cheque Bounce",
    desc: "Professional legal assistance for matters related to cheque bounce cases.",
  },
  {
    title: "Civil Lawyer",
    desc: "Comprehensive legal services for civil disputes and legal matters.",
  },
  {
    title: "Corporate Lawyer",
    desc: "Expert legal advice and representation for corporate law matters, ensuring compliance and effective governance..",
  },
];

const Legal = () => {
  return (
    // <ServiceLayout>
    <div>
      <div className="bg-blue-200 pt-14 mt-4 mb-4 animate-fadeIn">
        {/* --- HERO SECTION --- */}
        <div className="mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl font-light text-gray-800 animate-fadeInLeft mt-4">
              {/* Line 1 */}
              <div>
                Explore Our{" "}
                <span className="font-bold relative inline-block">
                  {/* <span className="relative px-2 transition-colors duration-300 hover:bg-yellow-400"></span>
      <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-400"></span> */}
                </span>
              </div>
              {/* Line 2 */}
              <span className="font-bold relative inline-block mt-4">
                <span className="relative transition-colors duration-300 hover:bg-yellow-400">
                  Comprehensive
                </span>
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-400"></span>
              </span>{" "}
              <span className=""></span>
              {/* Line 3 */}
              <div className="mt-4">Range of Services</div>
            </h1>

            <p className="mt-6 text-gray-600 text-2xl animate-fadeInBottom">
              At Legafin Pvt. Ltd., we offer a diverse portfolio of
              services spanning IT, finance, legal, tax consultancy, accounting,
              audit, and more.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                // to="/startyourbusiness"
                className="bg-black text-white px-6 py-3 rounded-md shadow hover:text-white hover:scale-105 transition animate-fadeInBottom"
              >
                Discover all Services
              </Link>
              {
                <Link to="/contact">
                  <div className="bg-white text-black font-bold px-6 py-3 rounded-md shadow  hover:scale-105 transition animate-fadeInBottom">
                    Contact us
                  </div>
                </Link>
              }
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full">
            <img
              src={startImage22}
              alt="Legal Consultancy image"
              className="rounded-xl shadow-lg w-full h-auto object-cover animate-fadeInRight"
            />
          </div>
        </div>

        {/* --- SERVICE GRID SECTION --- */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700">
            {legalTitle.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-blue-100/60 min-h-[165px] p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
              >
                <span className="text-gray-800 text-4xl">
                  <TbCircleDashedCheck />
                </span>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* ✅ Centered Get in Touch Button */}
          <div className="w-full flex justify-center mt-10">
            <Link
              to="/contact"
              className="bg-gray-800 text-white px-6 py-2 text-xl rounded shadow hover:text-white hover:bg-black hover:scale-105 transition flex items-center justify-center space-x-2"
            >
              <RiContactsLine />
              <span>Get in Touch Today</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
{
  /* </ServiceLayout> */
}

export default Legal;
