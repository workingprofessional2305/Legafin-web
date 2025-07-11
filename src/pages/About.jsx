import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaBriefcase, FaUsers, FaClipboardCheck, FaShoppingBag,
  FaGlobe, FaLock, FaIdCard, FaBullseye, FaEye, FaCompass
} from "react-icons/fa";
import businessImage from "../assets/client.jpg";
import StartImage23 from "../assets/Business_potential_image.jpg";
import StartImage24 from "../assets/about_1.jpeg";

const stats = [
  { icon: <FaBriefcase size={36} />, label: "Clients Served", value: 46 },
  { icon: <FaClipboardCheck size={36} />, label: "Projects Completed", value: 65 },
  { icon: <FaGlobe size={36} />, label: "Industries Covered", value: 10 },
  { icon: <FaUsers size={36} />, label: "Expert Consultants", value: 14 },
];

const About = () => {
  // 👉 Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [activeTab, setActiveTab] = useState("mission");

  const data = [
    {
      id: "mission",
      icon: <FaBullseye className="text-3xl text-blue-800" />,
      title: "Our Mission",
      description:
        "At Legafin Pvt. Ltd., our mission is to empower businesses with unparalleled expertise and innovative solutions. We are dedicated to providing comprehensive advisory services across IT, finance, legal, tax consultancy, accounting, and audit, ensuring our clients achieve their goals with efficiency and excellence.",
    },
    {
      id: "vision",
      icon: <FaEye className="text-3xl text-blue-800" />,
      title: "Our Vision",
      description:
        "Our vision is to be the leading consultancy firm recognized for our exceptional service quality and commitment to client success. We strive to foster long-lasting relationships built on trust, professionalism, and outstanding results.",
    },
    {
      id: "values",
      icon: <FaCompass className="text-3xl text-blue-800" />,
      title: "Our Values",
      description: (
        <ul className="list-disc pl-6 space-y-2 text-left">
          <li><strong>Integrity:</strong> Upholding honesty and transparency in all our dealings.</li>
          <li><strong>Excellence:</strong> Delivering top-notch services that exceed expectations.</li>
          <li><strong>Innovation:</strong> Embracing creativity and modern solutions.</li>
          <li><strong>Collaboration:</strong> Building strong partnerships for mutual growth.</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <section>
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-blue-100 via-blue-300 to-white py-16 mt-6 px-4 md:px-10">
          <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-4">
            <div className="flex-1 space-y-6 ml-6 animate-fadeInLeft">
              <h1 className="text-5xl md:text-5xl font-bold text-blue-900 leading-tight">
                About Legafin Privated Limited
              </h1>
              <p className="text-gray-800 text-xl hover:text-gray-900 mb-2">
                Discover the story behind Legafin Pvt. Ltd. and our commitment to delivering exceptional IT, finance, legal, tax consultancy, accounting, and audit services.
              </p>
              <button className="mt-6 bg-blue-800 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-blue-900 focus:outline-none focus:ring-blue-600">
                Learn More About Us
              </button>
              <div className="flex space-x-6 text-blue-800 text-3xl">
                <FaBriefcase />
                <FaUsers />
                <FaClipboardCheck />
                <FaShoppingBag />
              </div>
            </div>
            <div className="flex-1 mt-10 flex justify-center items-center animate-fadeInRight">
              <img src={StartImage24} alt="About 1 image" className="rounded-xl shadow-2xl object-cover w-full h-auto" />
            </div>
          </div>

          {/* Company Overview */}
          <div className="w-full text-center bg-white/80 mx-auto px-4 py-20 space-y-8 mt-4 animate-fadeInBottom">
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900">Meet Legafin Pvt. Ltd.</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Legafin Private Limited, incorporated under the Companies Act 2013, boasts a dedicated team of experts and professionals who provide a wide range of services...
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our company operates with fully computerized systems, ensuring quick, high-quality, and reliable services...
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Legafin Private Limited, we are always open to rapid technological changes and embrace them with an open mind...
            </p>
          </div>

          {/* Stats */}
          <div ref={ref} className="w-full flex flex-wrap justify-center gap-8 pt-12 px-4 md:px-8 lg:px-12 xl:px-16 mt-2 animate-fadeInBottom">
            {stats.map((stat, index) => (
              <div key={index} className="w-[200px] h-[160px] p-6 bg-gradient-to-br from-blue-200 via-green-100 to-blue-300 rounded-xl shadow border-2 border-blue-300 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-blue-600 hover:border-dotted">
                <div className="mb-3 flex justify-center text-blue-600">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-blue-900">
                  {inView ? <CountUp end={stat.value} duration={2} /> : "0"}+
                </h3>
                <p className="text-blue-600 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Unlock Potential */}
          <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between mt-28 mb-4 gap-10">
            <div className="flex-1 space-y-6 ml-6 animate-fadeInLeft">
              <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mt-10">
                Unlock Your Business <br /> Potential with Our Expertise
              </h1>
              <p className="text-gray-800 text-lg hover:text-gray-900">
                Discover how Legafin Pvt. Ltd. can drive your business forward with our comprehensive range of services.
              </p>
              <button className="mt-6 bg-blue-800 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-blue-900 focus:outline-none focus:ring-blue-600">
                ➤ Discover all services
              </button>
              <div className="flex space-x-6 text-blue-800 text-3xl">
                <FaGlobe />
                <FaLock />
                <FaIdCard />
              </div>
            </div>
            <div className="flex-1 mt-10 flex justify-center items-center animate-fadeInRight">
              <img src={StartImage23} alt="Business potential image" className="rounded-xl shadow-xl object-cover w-full h-auto" />
            </div>
          </div>
        </section>
      </section>

      {/* Mission / Vision / Values */}
      <section className="w-full py-20 bg-white text-center animate-fadeInBottom">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-blue-900 mb-16">Our Mission, Vision & Values</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {data.map((item) => (
              <div key={item.id} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-blue-200 hover:border-blue-600 text-gray-700 text-left">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">{item.title}</h3>
                <div className="text-gray-600/90 text-base leading-relaxed">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
