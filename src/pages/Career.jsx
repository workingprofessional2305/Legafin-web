import React from "react";
import { FaWpforms, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Career = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select an option");

  const options = ["Training/Internship", "Employment"];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  

  return (
    <section className="bg-gradient-to-br from-white to-blue-300 py-20 px-4 sm:px-8 md:px-12 lg:px-20 text-center">
      <div className="w-full mx-auto space-y-12">
      
        {/* Header */}
        {
          <div className="text-center space-y-6 animate-fadeIn">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight mt-12 animate-fadeInBottom">
              Careers
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-m hover:text-blue-600 animate-fadeInBottom">
              At Legafin, we believe exceptional work begins with hiring and
              nurturing the best people from all walks of life. Explore
              Opportunities, Join our team.
            </p>
          </div>
        }

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 animate-fadeInTop">
          {/* Training/Internship Card */}
          <div
            className="bg-gradient-to-br from-blue-50 via-green-10 to-blue-100 bg-opacity-80 shadow-md rounded-lg p-8 w-full md:w-1/2 hover:shadow-lg transition hover:shadow-lg' hover:-translate-y-1 hover:scale-[1.02] 
              border-2 border-blue-200 
              text-center 'transition' duration-300 hover:border-blue-600 hover:border-dotted"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Training/Internship
            </h3>
            <p className="text-gray-600 mb-6 text-justify">
              Kickstart your career with Legafin Pvt. Ltd. by joining our
              training and internship programs. Gain hands-on experience and
              work with industry experts to build a strong foundation for your
              professional journey.
            </p>
            <Link
              to="/career"
              className="font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-2"
            >
              Application Form <FaWpforms />
            </Link>
          </div>

          {/* Employment Card */}
          <div
            className="bg-gradient-to-br from-blue-50 via-green-10 to-blue-100 shadow-md rounded-lg p-8 w-full md:w-1/2 hover:shadow-lg' transition hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] 
              border-2 border-blue-200 
              text-center transition' duration-300 hover:border-blue-600 hover:border-dotted"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Employment
            </h3>
            <p className="text-gray-600 mb-6 text-justify">
              Join our dynamic team at Legafin Pvt. Ltd. and contribute to
              delivering high-quality consultancy services across various
              sectors. We are always on the lookout for talented professionals
              who are passionate about making a difference.
            </p>
            <Link
              to="/career"
              className="font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-2"
            >
              Application Form <FaWpforms />
            </Link>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="max-w-9xl mx-auto bg-white shadow-md rounded-lg p-8 md:w-3/4 lg:w-2/3 animate-fadeInBottom">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-2">
            Join Our Team Today!
          </h2>
          <p className="text-blue-700 text-center mb-8">
            We're always looking for passionate people. Submit your application
            below.
          </p>

          <div className="">
            <form className="space-y-6 text-left">
              {/* Grid Fields */}
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  ["Name*", "John Doe", "text"],
                  ["Email*", "email@example.com", "email"],
                  ["Phone*", "123-456-7890", "tel"],
                  ["Qualification*", "Your Qualification", "text"],
                  ["Address*", "Your Address", "textarea"],
                  [
                    "Description of Job Profile*",
                    "Description of Job Profile",
                    "textarea",
                  ],
                ].map(([label, placeholder, type]) => (
                  <div key={label}>
                    <label className="block text-sm font-medium text-blue-800 mb-1">
                      {label}
                    </label>

                    {type === "textarea" ? (
                      <textarea
                        rows="3"
                        placeholder={placeholder}
                        required
                        className="w-full p-3 border border-blue-100 text-gray-600 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 transition duration-200"
                      />
                    ) : (
                      <input
                        type={type}
                        placeholder={placeholder}
                        required
                        className="w-full p-3 border border-blue-100 text-gray-600 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 transition duration-200"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Current Experience - Full width */}
              <div>
                <label className="block text-sm font-medium text-blue-800 mb-1">
                  Current Experience*
                </label>
                <textarea
                  rows="3"
                  placeholder="Your Current Experience"
                  required
                  className="w-full p-3 border border-blue-100 text-gray-600 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 transition duration-200"
                />
              </div>

              {/* Applying For - Full width */}
              <div className="sm:w-1/2">
                <label className="block text-sm font-medium text-blue-800 mb-1">
                  Applying For*
                </label>
                <div className="relative w-full max-w-xs">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="border border-blue-100 text-blue-900 rounded-md px-3 py-2 bg-white cursor-pointer flex justify-between items-center focus:outline-none focus:ring-1 focus:ring-blue-400 transition duration-200"
                  >
                    <span>{selected}</span>
                    <FaChevronDown className="text-blue-900" />
                  </div>
                  {isOpen && (
                    <ul className="absolute w-full border border-blue-400 rounded-md bg-white mt-1 shadow-lg z-10">
                      {options.map((option) => (
                        <li
                          key={option}
                          onClick={() => {
                            setSelected(option);
                            setIsOpen(false);
                          }}
                          className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-blue-900"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-blue-900 focus:outline-none focus:ring-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Career;
