import React from "react";
import { Link } from "react-router-dom";
import startImage2 from "../assets/Registration_image.jpg";
import { TbCircleDashedCheck } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";

// Services List
const servicesList = [
  { title: "PAN", desc: "Get your Permanent Account Number." },
  { title: "TAN", desc: "Obtain a Tax Deduction and Collection Account Number." },
  { title: "GST", desc: "Register for Goods and Services Tax." },
  { title: "Professional Tax", desc: "Get registered for professional tax." },
  { title: "ESI", desc: "Employee State Insurance registration." },
  { title: "EPF", desc: "Employee Provident Fund registration." },
  { title: "SSI/MSME", desc: "Register as a Small Scale Industry or Micro, Small, and Medium Enterprise." },
  { title: "Gratuity Trust", desc: "Set up a gratuity trust." },
  { title: "Start-up", desc: "Register your start-up." },
  { title: "SEZ", desc: "Special Economic Zone registration." },
  { title: "WEP", desc: "Women Entrepreneurship Platform registration." },
  { title: "GEM Registration", desc: "Government e-Marketplace registration." },
  { title: "Food Safety (FSSAI License)", desc: "Obtain a food safety license." },
  { title: "Bar Code", desc: "Obtain a barcode for your products." },
  { title: "ISO Certification", desc: "Get ISO certified." },
];

const BusinessRegistration = () => {
  return (
    <div>
      <div className="bg-blue-200 pt-14 mt-4 mb-4 animate-fadeIn">
        {/* --- HERO SECTION --- */}
        <div className="mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10">
          {/* LEFT CONTENT */}
          <div>
            
            <h1 className="text-6xl font-light text-gray-800 animate-fadeInLeft mt-4">
              {/* Line 1 */} 
              <div>
                Gateway to a{" "}
                <span className="font-bold relative inline-block">
                  <span className="relative transition-colors duration-300 hover:bg-yellow-400">
                    Legally
                  </span>
                  <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-400"></span>
                </span>
              </div>

              {/* Line 2 */}
              <div>
                <span className="font-bold relative inline-block mt-4">
                  <span className="relative transition-colors duration-300 hover:bg-yellow-400">
                    Compliant
                  </span>
                  <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-400"></span>
                </span>{" "}
                <span className="">and</span>
              </div>

              {/* Line 3 */}
              <div className="mt-4">Successful Business</div>
            </h1>

            <p className="mt-6 text-gray-600 text-2xl animate-fadeInBottom">
              With our comprehensive business registration services, we ensure
              that every step of your registration process is smooth, quick, and
              fully compliant with all legal requirements.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                className="bg-black text-white px-6 py-3 rounded-md shadow hover:text-white hover:scale-105 transition animate-fadeInBottom"
              >
                Business Registration
              </Link>
              <Link to="/Contact">
                <div className="bg-white text-black font-bold px-6 py-3 rounded-md shadow hover:scale-105 animate-fadeInBottom">
                  Contact us
                </div>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full">
            <img
              src={startImage2}
              alt="Registration image"
              className="rounded-xl shadow-lg w-full h-auto object-cover animate-fadeInRight"
            />
          </div>
        </div>

        {/* --- SERVICE GRID SECTION --- */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700">
            {servicesList.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-blue-100/60 min-h-[120px] p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
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
          <div className="w-full flex justify-center mt-10">
            <Link
              to="/Contact"
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

export default BusinessRegistration;
