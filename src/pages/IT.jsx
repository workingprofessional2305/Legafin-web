import React from "react";
import { Link } from "react-router-dom";
import startImage21 from "../assets/IT_Consultancy_image.png";
import ServiceLayout from "../components/ServiceLayout";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { RiContactsLine } from "react-icons/ri";

const ItTitle = [
  {
    title: "Consulting",
    desc: "Leverage our expert IT consulting services to align your technology strategy with your business goals.",
  },
  {
    title: "Software Development",
    desc: "Get custom software solutions tailored to your specific business needs, enhancing efficiency and performance.",
  },
  {
    title: "Cognitive Business Operations",
    desc: "Transform your business operations with AI and machine learning to improve efficiency and innovation.",
  },
  {
    title: "Data and Analytics",
    desc: "Unlock the power of your data with our advanced analytics solutions, driving informed decision-making and strategic insights.",
  },
  {
    title: "Digital Process Automation",
    desc: "Streamline and automate your business processes with our cutting-edge digital automation services.",
  },
  {
    title: "Enterprise Solution",
    desc: "Implement robust and scalable enterprise solutions to support your business growth and operational needs.",
  },
];

const IT = () => {
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
              <div className="mb-4">
                Explore Our Business
                <span className="font-bold relative inline-block mt-4">
                  {/* <span className="relative px-2 transition-colors duration-300 hover:bg-yellow-400">Expert</span>
      <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-400"></span> */}
                </span>
              </div>

              {/* Line 2 */}
              <span className="">with Expert</span>
              <br></br>

              {/* Line 3 */}
              <span className="font-bold relative inline-block mt-4">
                <span className="relative transition-colors duration-300 hover:bg-yellow-400">
                  IT Consultancy
                </span>
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-yellow-400"></span>
              </span>
            </h1>

            <p className="mt-6 text-gray-600 text-2xl animate-fadeInBottom">
              Transform your IT infrastructure with Legafin Pvt. Ltd. Our
              tailored solutions and strategic advice empower businesses to
              innovate and thrive in a digital world.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link
                // to="/startyourbusiness"
                className="bg-black text-white px-6 py-3 rounded-md shadow hover:text-white hover:scale-105 transition animate-fadeInBottom"
              >
                Discover Our IT Solutions
              </Link>
              {
                <Link to="/contact">
                  <div className="bg-white text-black font-bold px-6 py-3 rounded-md shadow  hover:scale-105 transition animate-fadeInBottom">
                    Contact us{" "}
                  </div>
                </Link>
              }
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full">
            <img
              src={startImage21}
              alt="IT Consultancy image"
              className="rounded-xl shadow-lg w-full h-auto object-cover animate-fadeInRight"
            />
          </div>
        </div>

        {/* --- SERVICE GRID SECTION --- */}
        <div className="bg-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700">
            {ItTitle.map((item, index) => (
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

export default IT;
