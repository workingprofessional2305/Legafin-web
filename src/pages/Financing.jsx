import React from "react";
import { Link } from "react-router-dom";
import startImage7 from "../assets/Financing_image.jpg";
import ServiceLayout from "../components/ServiceLayout";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { RiContactsLine } from "react-icons/ri";

const FinancingTitle = [
  {
    title: "Fund Formation",
    desc: "Formulate investment funds.",
  },
  {
    title: "Strategic Planning",
    desc: "Develop strategic financial plans.",
  },
  {
    title: "Mobilization of Resources",
    desc: "Mobilize financial resources.",
  },
  {
    title: "Raising Funds",
    desc: "Raise funds for your business.",
  },
  {
    title: "Building Financial Models",
    desc: "Build robust financial models.",
  },
  {
    title: "Identifying the Finance Needs",
    desc: "Identify your finance needs.",
  },
  {
    title: "Project Report",
    desc: "Prepare detailed project reports.",
  },
];

const Financing = () => {
  return (
    // <ServiceLayout>
    <div>
      <div className="bg-blue-200 pt-14 mt-4 mb-4 animate-fadeIn">
        {/* --- HERO SECTION --- */}
        <div className="mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl font-light text-gray-800 animate-fadeInLeft">
              {/* Line 1 */}
              <div>
                Expert{" "}
                <span className="font-bold relative inline-block">
                  <span className="relative transition-colors duration-300 hover:bg-yellow-400">
                    Finance and
                  </span>
                  <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-400"></span>
                </span>
              </div>

              {/* Line 2 */}
              <div>
                <span className="font-bold relative inline-block mt-4">
                  <span className="relative transition-colors duration-300 hover:bg-yellow-400">
                    Corporate Compliance
                  </span>
                  <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-400 mt-4"></span>
                </span>
                </div>
                <div className="mt-4">Services for Business Success</div>  
            </h1>

            <p className="mt-6 text-gray-600 text-2xl"></p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                // to="/startyourbusiness"
                className="bg-black text-white px-6 py-3 rounded-md shadow hover:text-white hover:scale-105 transition animate-fadeInBottom"
              >
                Discover Our Finance Services
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
              src={startImage7}
              alt="Accountin & Audit image"
              className="rounded-xl shadow-lg w-full h-auto object-cover animate-fadeInRight"
            />
          </div>
        </div>

        {/* --- SERVICE GRID SECTION --- */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700">
            {FinancingTitle.map((item, index) => (
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

export default Financing;
