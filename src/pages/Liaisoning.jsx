import React from "react";
import { Link } from "react-router-dom";
import startImage20 from "../assets/Laisoning _image.jpg";
import ServiceLayout from "../components/ServiceLayout";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { RiContactsLine } from "react-icons/ri";

const LiaisoningTitle = [
  {
    title: "ROC",
    desc: "Liaison with the Registrar of Companies.",
  },
  { title: "CLB", desc: "Liaison with the Company Law Board." },
  {
    title: "NCLT",
    desc: "Represent before the National Company Law Tribunal.",
  },
  {
    title: "NCLAT",
    desc: "Represent before the National Company Law Appellate Tribunal.",
  },
  {
    title: "RBI",
    desc: "Liaison with the Reserve Bank of India.",
  },
  {
    title: "CBDT",
    desc: "Liaison with the Central Board of Direct Taxes.",
  },
  {
    title: "CBDIT",
    desc: "Liaison with the Central Board of Indirect Taxes and Customs.",
  },
  {
    title: "DPIIt",
    desc: "Liaison with the Department for Promotion of Industry and Internal Trade.",
  },
  {
    title: "Ministry of Industry & Commerce",
    desc: "Liaison with the Ministry of Industry and Commerce.",
  },
];

const Liaisoning = () => {
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
                Reliable{" "}
                <span className="font-bold relative inline-block"></span>
              </div>
              {/* Line 2 */}
              <span className="font-bold relative inline-block mt-4">
                <span className="relative transition-colors duration-300 hover:bg-yellow-400">
                  Laisoning and
                </span>
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-400"></span>
              </span>{" "}
              <span className=""></span>
              {/* Line 3 */}
              <div className="mt-4">Representation</div>
            </h1>

            <p className="mt-6 text-gray-600 text-2xl animate-fadeInBottom">
              Ensure smooth interactions with regulatory authorities and
              seamless compliance with our expert liaisoning and representation
              services. From ROC to RBI, we handle it all for you.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4 flex-wrap">
              {/* <Link
              to="/startyourbusiness"
              className="bg-black text-white px-6 py-3 rounded-md shadow hover:text-white hover:scale-105 transition"
            >
           Schedule a Consultation 
            </Link> */}
              {
                <Link
                  to="/contact"
                  className="bg-white text-blue-700 font-bold border border-gray-300 px-6 py-3 rounded-md shadow  hover:scale-105 transition animate-fadeInBottom"
                >
                  Contact us Now
                </Link>
              }
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full">
            <img
              src={startImage20}
              alt="Liaisoning image"
              className="rounded-xl shadow-lg w-full h-auto object-cover animate-fadeInRight"
            />
          </div>
        </div>

        {/* --- SERVICE GRID SECTION --- */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700">
            {LiaisoningTitle.map((item, index) => (
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

export default Liaisoning;
