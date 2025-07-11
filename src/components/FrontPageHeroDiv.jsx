import React from "react";
import { Link } from "react-router-dom";
import backgroundImg from "../assets/home_page_photo.jpg";
import { FaRocket, FaHandshake, FaUserTie } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from 'sonner';

// Cards Data
const cards = [
  {
    icon: <FaRocket size={30} />,
    title: "Pvt. Ltd.",
    desc: "Perfect for fast-growing businesses.",
  },
  {
    icon: <FaHandshake size={30} />,
    title: "LLP",
    desc: "Ideal for collaborative partnerships.",
  },
  {
    icon: <FaUserTie size={30} />,
    title: "OPC",
    desc: "Best for solo entrepreneurs.",
  },
];

const FrontPageHeroDiv = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eojnzzc", // 🔑 Your Service ID
        "template_f99neck", // 🔑 Your Template ID
        form.current,
        "aKNh4RIvbvtfynbXJ" // 🔑 Your Public Key
      )
      .then(
      (result) => {
        console.log(result.text);
        toast.success("Thank you for contacting Legafin!");
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        toast.error("Something went wrong. Please try again later.");
      }
    );
};
  return (
    <div
      className="w-full bg-cover bg-center text-white relative px-4 sm:px-6 lg:px-8 py-16"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-800/40 z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full mx-auto flex flex-col lg:flex-row items-start gap-10 p-6">
        {/* LEFT: Heading + Cards */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight animate-fadeInLeft">
            Start Your <span className="text-blue-400">Business</span> <br />
            with 3 Smart Options
          </h1>

          {/* Subtext */}
          <p className="text-white/90 text-lg max-w-2xl animate-fadeInLeft">
            Choose the right business type for your growth, book your FREE
            expert consultation today.
          </p>

          {/* Button */}
          <div className="animate-fadeInLeft">
            <Link to="/contact">
              <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-3xl font-bold shadow-lg transition focus:outline-none focus:ring-blue-600">
                Book Free Consultation
              </button>
            </Link>
          </div>

          {/* Business Type Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white/10 px-6 py-4 rounded-xl border border-white/10 backdrop-blur-md hover:shadow-lg transition flex flex-col justify-between min-h-[170px] animate-fadeInLeft"
              >
                <div>
                  <div className="flex items-center gap-3 text-white mb-1">
                    <span className="text-blue-300">{card.icon}</span>
                    <h3 className="text-xl font-bold">{card.title}</h3>
                  </div>
                  <p className="text-white/80 text-sm ml-9">{card.desc}</p>
                </div>
                <Link to="/contact">
                  <button className="mt-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-full font-semibold focus:outline-none focus:ring-blue-600">
                    Get Started
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <div className="w-full lg:w-1/3 mx-auto bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-2xl animate-fadeInRight">
          <h2 className="text-lg font-semibold mb-4 text-white">
            Get Started <span className="line-through text-red-500">₹99</span>{" "}
            <span className="text-blue-300">₹0.00</span> for Consultation
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="full_name"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-white/30 text-gray-600 rounded-lg placeholder-white focus:outline-none border border-white/10 focus:border-blue-400 transition duration-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-3 bg-white/30 text-gray-600 rounded-lg placeholder-white focus:outline-none border border-white/10 focus:border-blue-400 transition duration-200"
            />
            <input
              type="tel"
              name="contact_number"
              placeholder="Contact No."
              required
              className="w-full p-3 bg-white/30 text-gray-600 rounded-lg placeholder-white focus:outline-none border border-white/10 focus:border-blue-400 transition duration-200"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="3"
              className="w-full p-3 bg-white/30 text-gray-600 rounded-lg placeholder-white focus:outline-none border border-white/10 focus:border-blue-400 transition duration-200"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:ring-blue-600"
            >
              Get Started Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FrontPageHeroDiv;
