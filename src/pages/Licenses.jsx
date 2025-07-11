import React from "react";
import { Link } from "react-router-dom";
import startImage3 from "../assets/Licenses_image.jpeg";
import ServiceLayout from "../components/ServiceLayout";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { RiContactsLine } from "react-icons/ri";

const LicensesTitle = [
  { title: "Trade License", desc: "Acquire a trade license." },
  { title: "IEC", desc: "Get an Import Export Code." },
  { title: "Liquor License", desc: "Obtain a liquor license." },
  {
    title: "Environmental Clearances",
    desc: "Secure necessary environmental clearances.",
  },
  {
    title: "Industry/Factory License",
    desc: "Get an industry or factory license.",
  },
  {
    title: "License from Local Authorities",
    desc: "Obtain licenses from local authorities.",
  },
  {
    title: "Hospital Registration",
    desc: "Register your hospital.",
  },
  { title: "OSP", desc: "Other Service Provider license." },
  {
    title: "FSSAI License",
    desc: "Obtain a food safety license.",
  },
  { title: "ISO Certification", desc: "Get ISO certified." },
  {
    title: "PSARA License",
    desc: "Acquire a Private Security Agency Regulation Act license.",
  },
  {
    title: "RBI License for Forex Company",
    desc: "Obtain an RBI license for a forex company.",
  },
  {
    title: "Money Changer Company",
    desc: "Set up a money changer company.",
  },
  {
    title: "Co-Operative Company",
    desc: "Register a co-operative company.",
  },
  { title: "NBFC License", desc: "Obtain an NBFC license." },
];

const Licenses = () => {
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
                Secure Your{" "}
                <span className="font-bold relative inline-block">
                  <span className="relative transition-colors duration-300 hover:bg-yellow-400">
                    Business
                  </span>
                  <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-400"></span>
                </span>
              </div>

              {/* Line 2 */}
              <div>
                <span className="font-bold relative inline-block mt-4">
                  <span className="relative transition-colors duration-300 hover:bg-yellow-400">
                    Future
                  </span>
                  <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-400"></span>
                </span>{" "}
                <span className="">with Essential</span>
              </div>

              {/* Line 3 */}
              <div className="mt-4">Licenses</div>
            </h1>

            <p className="mt-6 text-gray-600 text-2xl animate-fadeInBottom">
              From trade licenses to environmental clearances, we provide expert
              assistance in obtaining all necessary permits and approvals for
              your business.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                // to="/startyourbusiness"
                className="bg-black text-white px-6 py-3 rounded-md shadow hover:text-white hover:scale-105 transition animate-fadeInBottom"
              >
                Essential Licenses
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
              src={startImage3}
              alt="Licenses image"
              className="rounded-xl shadow-lg w-full h-auto object-cover animate-fadeInRight"
            />
          </div>
        </div>

        {/* --- SERVICE GRID SECTION --- */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700">
            {LicensesTitle.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-blue-100/60  min-h-[120px] p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
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

export default Licenses;
