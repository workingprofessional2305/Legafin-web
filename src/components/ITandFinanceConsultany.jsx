import React from "react";
import { Link } from "react-router-dom";
import { FaRocket, FaBullseye, FaLightbulb, FaUserCheck } from "react-icons/fa";
import transformbusinessimage from "../assets/Transform_your_business.jpeg";
import laptopimage from "../assets/laptop_work.jpeg";

const features = [
  {
    icon: <FaLightbulb className="text-blue-600 text-2xl mt-1" />,
    title: "Innovative Solutions",
    desc: "Cutting-edge technology to enhance your success.",
  },
  {
    icon: <FaUserCheck className="text-blue-600 text-2xl mt-1" />,
    title: "Reliable Support",
    desc: "Dedicated assistance for seamless management.",
  },
];

const featureCards = [
  {
    icon: <FaRocket className="text-blue-600 text-2xl mt-1" />,
    title: "Strategic Guidance",
    desc: "Expert advice to maximize financial performance.",
  },
  {
    icon: <FaBullseye className="text-blue-600 text-2xl mt-1" />,
    title: "Tailored Solutions",
    desc: "Custom financial strategies for your unique needs.",
  },
];



const ITandFinanceConsultancy = () => {
  return (
    <div className="w-full backdrop-blur-xl py-12 px-4 sm:px-6 md:px-8 lg:px-10">
      {/* Section 1: IT Consultancy */}
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div>
          <img
            src={transformbusinessimage}
            alt="IT Meeting"
            className="rounded-xl shadow-md w-full"
          />
        </div>

        {/* Content */}
        <div className="w-full ml-0 sm:ml-4 md:ml-6">
           <p className="text-blue-600 font-semibold mb-2 text-xl">
    IT Consultancy
  </p>

  <h2 className="text-3xl sm:text-3xl md:text-4xl text-gray-700 leading-snug">
    Transform Your <br />
    <span className="group relative inline-block cursor-pointer">
      <span className="font-bold text-black transition duration-300 group-hover:underline group-hover:decoration-blue-500">
        Business
      </span>
    </span>{" "}
    with Our IT <br /> Services
  </h2>

  <p className="text-gray-600 mt-3 text-md sm:text-base leading-relaxed">
    Expert IT solutions tailored to drive your business forward <br />
    with strategic planning, tech execution and ongoing guidance.
  </p>

  {/* 2 Short Highlights Below */}
  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm">
    <div className="flex items-start space-x-2">
      <span className="text-blue-600 font-bold">✓</span>
      <p>Cloud & Infrastructure Modernization</p>
    </div>
    <div className="flex items-start space-x-2">
      <span className="text-blue-600 font-bold">✓</span>
      <p>Robust Cybersecurity Implementation</p>
    </div>
  

       <Link to="/it#services">
  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition w-full sm:w-auto text-sm focus:outline-none focus:ring-blue-600">
    Learn More
  </button>
</Link>
        </div>
        </div>
      </div>

      {/* Features and Button Row */}
      <div className="mt-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 px-2 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-centre lg:w-[80%]">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow hover:shadow-md transition hover:bg-white/80"
            >
              <div className="flex items-start gap-3">
                {item.icon}
                <div>
                  <h4 className="font-semibold text-blue-900 text-base">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div>

      {/* Section 2: Finance Consultancy */}
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-14">
        {/* Image */}
        <div>
          <img
            src={laptopimage}
            alt="laptopimage"
            className="rounded-xl shadow-md w-full"
          />
        </div>

        {/* Content */}
       <div className="w-full ml-0 sm:ml-4 md:ml-6">
  <p className="text-blue-600 font-semibold mb-2 text-lg">
    Finance Consultancy
  </p>

  <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-700 leading-snug">
    Optimize Your <br />
    <span className="group relative inline-block cursor-pointer">
      <span className="font-bold text-black transition duration-300 group-hover:underline group-hover:decoration-blue-500">
        Financial Strategy
      </span>
    </span>{" "}
    <br /> with Our Expertise
  </h2>

  <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
    Comprehensive finance services to ensure your business thrives.
  </p>

  {/* 2 Key Highlights */}
  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm">
    <div className="flex items-start space-x-2">
      <span className="text-blue-600 font-bold">✓</span>
      <p>Strategic Budget Planning & Forecasting</p>
    </div>
    <div className="flex items-start space-x-2">
      <span className="text-blue-600 font-bold">✓</span>
      <p>Regulatory Compliance & Tax Efficiency</p>
    </div>
  </div>

  <div className="w-full sm:w-auto flex justify-center lg:justify-start mt-6">
    <Link to="/financing">
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition w-full sm:w-auto text-sm focus:outline-none focus:ring-blue-600">
        Discover More
      </button>
    </Link>
  </div>
        </div>
      </div>

      {/* Features and Button Row */}
      <div className="mt-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 px-2 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-centre lg:w-[80%]">
          {featureCards.map((item, index) => (
            <div
              key={index}
              className="bg-white backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow hover:shadow-md transition hover:bg-white/80"
            >
              <div className="flex items-start gap-3">
                {item.icon}
                <div>
                  <h4 className="font-semibold text-blue-900 text-base">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ITandFinanceConsultancy;
