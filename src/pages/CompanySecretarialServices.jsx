import React from "react";
import { Link } from "react-router-dom";
import startImage5 from "../assets/Company_Secretarial_services_image.jpg";
import ServiceLayout from "../components/ServiceLayout";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { RiContactsLine } from "react-icons/ri";

const CompanysecretarialservicesTitle = [
  {
    title: "Annual Compliances",
    desc: "Ensure annual compliance.",
  },
  {
    title: "Increase in Share Capital",
    desc: "Increase your company's share capital.",
  },
  { title: "Rights Issue", desc: "Conduct a rights issue." },
  {
    title: "Private Placement",
    desc: "Execute private placements",
  },
  { title: "Buyback", desc: "Carry out a share buyback." },
  {
    title: "Reduction of Share Capital",
    desc: "Reduce share capital.",
  },
  {
    title: "Shift of Registered Office",
    desc: "Move your registered office.",
  },
  { title: "Name Change", desc: "Convert your business entity." },
  {
    title: "Conversion of Entities",
    desc: "Register your start-up.",
  },
  { title: "Capital Issue", desc: "Issue new capital." },
  {
    title: "Charge Compliances",
    desc: "Ensure compliance with charges.",
  },
  {
    title: "Alteration of MOA & AOA",
    desc: "Amend the Memorandum and Articles of Association.",
  },
  {
    title: "ESOP",
    desc: "Implement Employee Stock Ownership Plans.",
  },
  {
    title: "CSR",
    desc: "Comply with Corporate Social Responsibility requirements.",
  },
];

const CompanySecretarialServices = () => {
  return (
    // <ServiceLayout>
    <div>
      <div className="bg-blue-200 pt-14 mt-4 mb-4 animate-fadeIn">
        {/* --- HERO SECTION --- */}
        <div className="mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-6xl font-light text-gray-800 animate-fadeInLeft mt-4">
              {/* Line 1 */}
              <div>
                Streamlined{" "}
                <span className="font-bold relative inline-block">
                  <span className="relative transition-colors duration-300 hover:bg-yellow-400">
                    Company
                  </span>
                  <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-400"></span>
                </span>
              </div>

              {/* Line 2 */}
              <div>
                <span className="font-bold relative inline-block mt-4">
                  <span className="relative transition-colors duration-300 hover:bg-yellow-400">
                    Secretarial
                  </span>
                  <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-400"></span>
                </span>{" "}
                <span className="mt-4">Services</span>
              </div>
            </h1>

            <p className="mt-6 text-gray-600 text-2xl animate-fadeInBottom">
              Expertly manage your corporate compliance with our comprehensive
              company secretarial services. From annual filings to regulatory
              updates, we ensure your business adheres to all legal requirements
              efficiently and effectively.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                // to="/startyourbusiness"
                className="bg-black text-white px-6 py-3 rounded-md shadow hover:text-white hover:scale-105 transition animate-fadeInBottom"
              >
                Explore Our Services
              </Link>
              {
                <Link to="/contact">
                  <div className="bg-white text-black font-bold px-6 py-3 rounded-md shadow  hover:scale-105 animate-fadeInBottom">
                    Contact us{" "}
                  </div>
                </Link>
              }
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full">
            <img
              src={startImage5}
              alt="Company Secretarial Services image"
              className="rounded-xl shadow-lg w-full h-auto object-cover animate-fadeInRight"
            />
          </div>
        </div>

        {/* --- SERVICE GRID SECTION --- */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700">
            {CompanysecretarialservicesTitle.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-blue-100/60 min-h-[120px] p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
              >
                <span className="text-gray-800 text-4xl">
                  <HiOutlineCheckCircle />
                </span>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
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

export default CompanySecretarialServices;
