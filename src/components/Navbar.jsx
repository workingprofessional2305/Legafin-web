import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ServicesDropdown from "./ServicesDropdown";
import AdvertisementLine from "./AdvertisementLine"; // ✅ NEW IMPORT

const EMAIL = "legafin121@gmail.com";
const EMAIL_HREF = "mailto:legafin121@gmail.com";

const smoothNavigate = (navigate, path) => {
  document.body.style.transition = "opacity 0.3s ease-out";
  document.body.style.opacity = "0.7";

  setTimeout(() => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      document.body.style.opacity = "1";
    }, 100);
  }, 150);
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimer = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleHover = (open) => {
    clearTimeout(dropdownTimer.current);
    if (open) setDropdownOpen(true);
    else dropdownTimer.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  const handleNavClick = (path) => {
    smoothNavigate(navigate, path);
  };

  const handleMobileNavClick = (path) => {
    closeMenu();
    smoothNavigate(navigate, path);
  };

  const linkClass =
    "relative group text-blue-800 transition-all duration-300 font-serif cursor-pointer transform hover:scale-105";

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div
            onClick={() => handleNavClick("/")}
            className="text-2xl font-extrabold text-blue-700 cursor-pointer hover:text-blue-700 transition-colors duration-300 transform hover:scale-105"
          >
            LEGAFIN
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-blue-700 focus:outline-none focus:ring-0"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8 font-medium">
            <li>
              <div onClick={() => handleNavClick("/")} className={linkClass}>
                Home
                <span className="block h-[2px] w-0 bg-blue-700 group-hover:w-full transition-all duration-300" />
              </div>
            </li>
            <li>
              <div
                onClick={() => handleNavClick("/about")}
                className={linkClass}
              >
                About
                <span className="block h-[2px] w-0 bg-blue-700 group-hover:w-full transition-all duration-300" />
              </div>
            </li>
            <li
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
              className="relative group font-serif cursor-pointer"
            >
              <div className="text-blue-800 hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
                All Services ▾
                <span className="block h-[2px] w-0 bg-blue-700 group-hover:w-full transition-all duration-300" />
              </div>
              {dropdownOpen && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 mt-4 w-[950px] bg-white border border-blue-200 rounded-2xl shadow-2xl z-50 animate-fadeIn">
                  <ServicesDropdown />
                </div>
              )}
            </li>
            <li>
              <div
                onClick={() => handleNavClick("/career")}
                className={linkClass}
              >
                Careers
                <span className="block h-[2px] w-0 bg-blue-700 group-hover:w-full transition-all duration-300" />
              </div>
            </li>
            <li>
              <div
                onClick={() => handleNavClick("/contact")}
                className={linkClass}
              >
                Contact
                <span className="block h-[2px] w-0 bg-blue-700 group-hover:w-full transition-all duration-300" />
              </div>
            </li>
            {/* ✅ Styled Email Button with Icon */}
            <li>
              <a
                href={EMAIL_HREF}
                onClick={closeMenu}
                className="bg-blue-700  px-4 py-2 rounded-full flex items-center gap-2 font-sans shadow-md text-white"
              >
                <span role="img" aria-label="email">
                  📧
                </span>
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col justify-between min-h-screen px-4 py-6">
          <ul className="flex flex-col space-y-4 font-serif">

     

            <li>
              <div
                onClick={() => handleMobileNavClick("/")}
                className="text-blue-800 semi-bold cursor-pointer"
              >
                Home
              </div>
            </li>
            <li>
              <div
                onClick={() => handleMobileNavClick("/about")}
                className="text-blue-800 semi-bold cursor-pointer"
              >
                About
              </div>
            </li>
            <li>
              <div
                onClick={toggleDropdown}
                className="text-blue-800 semi-bold cursor-pointer"
              >
                All Services
              </div>
              {dropdownOpen && (
                <div className="mt-2 bg-white border border-blue-200 rounded-xl shadow-lg max-h-[320px] overflow-y-auto animate-fadeIn">
                  <ServicesDropdown />
                </div>
              )}
            </li>
            <li>
              <div
                onClick={() => handleMobileNavClick("/career")}
                className="text-blue-800 semi-bold cursor-pointer"
              >
                Careers
              </div>
            </li>
            <li>
              <div
                onClick={() => handleMobileNavClick("/contact")}
                className="text-blue-800 semi-boldcursor-pointer"
              >
                Contact
              </div>
            </li>
            {/* ✅ Styled Email Button for Mobile */}
            <li>
              <a
                href={EMAIL_HREF}
                onClick={closeMenu}
                className="flex justify-center items-center gap-2 bg-blue-700  text-white px-5 py-2 rounded-full semi-bold"
              >
                <span role="img" aria-label="email">
                  📧
                </span>
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      )}
              <AdvertisementLine />
      
    </nav>
  );
}

export default Navbar;
