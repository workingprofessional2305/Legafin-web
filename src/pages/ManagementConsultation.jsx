import React from "react";
import { Link } from "react-router-dom";
import startImage15 from "../assets/Management_consulting_image.jpg";
import ServiceLayout from "../components/ServiceLayout";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { RiContactsLine } from "react-icons/ri";

const ManagementConsultationTitle = [
  { title: "Building Strategy", desc: "Develop business strategies." },
  {
    title: "Operations & Process Improvement",
    desc: "Improve operations and processes.",
  },
  { title: "Business Model", desc: "Create effective business models." },
  { title: "Product Development", desc: "Assist with product development." },
  {
    title: "Advising Solutions to Clients' Complex Issues",
    desc: "Provide solutions for complex business issues.",
  },
];

const ManagementConsultation = () => {
  return (
    // <ServiceLayout>
    <div>
      <div className="bg-blue-200 pt-14 mt-4 mb-4 animate-fadeIn">
        {/* --- HERO SECTION --- */}
        <div className="mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl font-light text-gray-800 animate-fadeInLeft mt-2">
              {/* Line 1 */}
              <div>
                <span className="font-bold relative inline-block ">
                  <span className="relative px-2 transition-colors duration-300 hover:bg-yellow-400">
                    Expert
                  </span>
                  <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-400"></span>
                </span>
              </div>
              {/* Line 2 */}
              <span className="font-bold relative inline-block mt-4">
                <span className="relative px-2 transition-colors duration-300 hover:bg-yellow-400">
                  Management
                </span>
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-400"></span>
              </span>{" "}
              <span className="">Consultation</span>
              {/* Line 3 */}
              {/* <div></div> */}
            </h1>

            <p className="mt-6 text-gray-600 text-2xl animate-fadeInBottom">
              From strategic planning to process improvement, our experts
              provide tailored solutions to drive your business forward.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                // to="/startyourbusiness"
                className="bg-black text-white px-6 py-3 rounded-md shadow hover:text-white hover:scale-105 transition animate-fadeInBottom"
              >
                Schedule a Consultation
              </Link>
              {/* <Link
              to="/contact"
              className="bg-white text-blue-700 font-bold border border-gray-300 px-6 py-3 rounded-md shadow  hover:scale-105"
            >
            </Link> */}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full">
            <img
              src={startImage15}
              alt="Management Consultation image"
              className="rounded-xl shadow-lg w-full h-auto object-cover animate-fadeInRights"
            />
          </div>
        </div>

        {/* --- SERVICE GRID SECTION --- */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700">
            {ManagementConsultationTitle.map((item, index) => (
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

export default ManagementConsultation;
