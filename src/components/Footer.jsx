import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
 } from "react-icons/fa";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="font-serif bg-gray-50 text-white pt-12 pb-8 px-4 md:px-8 shadow-inner">
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {/* Company Info */}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-extrabold text-blue-900 tracking-wide drop-shadow mb-3">
            Legafin
          </h1>
          <img src={logo} alt="Legafin Logo" className="h-20 w-22 object-contain" />
          

        </div>

        {/* Quick Links */}
        <div className="ml-2 md:ml-6 font-serif">
          <h2 className="text-xl font-serif mb-4 text-blue-900 border-b border-blue-800 pb-2 inline-block">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm text-white">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Contact Us", path: "/contact" },
              { label: "Careers", path: "/career" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "auto" });
                  }}
                  className="text-blue-700 font-medium transition-all duration-200 hover:text-blue-900 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div className="ml-1 md:ml-6">
          <h2 className="text-xl mb-4 text-blue-900 border-b border-blue-800 pb-2 inline-block">
            Our Services
          </h2>
          <ul className="space-y-2 text-sm text-white">
            {[
              { label: "Finance Related Services", path: "/financing" },
              { label: "Legal Related Services", path: "/legal" },
              { label: "IT Related Services", path: "/it" },
              { label: "Tax Consultancy Related Services", path: "/taxandgstcompliance" },
              { label: "Accounting, Audit Related Services", path: "/accountingandaudit" },
            ].map((service, idx) => (
              <li key={idx}>
                <Link
                  to={service.path}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "auto" });
                  }}
                  className="text-blue-700 font-medium transition-all duration-200 hover:text-blue-900 hover:underline"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + CTA Buttons */}
        <div className="ml-1 md:ml-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-900 border-b border-blue-800 pb-2 inline-block">
            Follow Us
          </h2>
          <div className="flex gap-3 mb-5">
            {[
              { icon: <FaFacebookF />, color: "text-blue-800" },
              { icon: <FaInstagram />, color: "text-pink-600" },
              { icon: <FaTwitter />, color: "text-sky-500" },
              { icon: <FaLinkedinIn />, color: "text-blue-900" },
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className={`inline-block bg-white ${item.color} p-2 rounded-full shadow-md hover:scale-125 transition duration-200`}
                aria-label="social"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <div className="flex gap-3 mt-4">
            <a
              href="tel:+919468600867"
              className="flex-1 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm py-1 px-2 rounded-md transition shadow-sm"
            >
              Call Now!
            </a>
            <a
              href="https://wa.me/919468600867"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center text-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold text-sm py-1 px-2 rounded-md transition shadow-sm"
            >
              WhatsApp Now!
            </a>  

          </div>


        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-blue-800/30 mt-8 pt-4 text-center text-sm text-blue-900 font-medium">
        © {new Date().getFullYear()} <strong>Legafin</strong>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
