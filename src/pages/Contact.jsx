import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock,
  FaHeadset, FaLock, FaUserTie
} from 'react-icons/fa';

const Contact = () => {
  // ✅ Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-gradient-to-br from-white to-blue-300 py-20 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="w-full mx-auto animate-fadeInBottom">

        {/* Header */}
        <div className="text-center space-y-6 animate-fadeInBottom">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight mt-14">
            Get in Touch with Legafin
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-m hover:text-blue-600">
            Let us help you grow <br />
            <span className="text-gray-500">Whether you have questions, feedback, or a project in mind, we're all ears!</span>
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 grid md:grid-cols-2 gap-16 items-start mt-6">
          {/* Left: Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for contacting Legafin!');
            }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-blue-900">Send Us a Message</h2>
            <p className="text-sm text-blue-500">We usually reply within 1 business day.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ['Full Name', 'Your Name', 'text'],
                ['Email Address*', 'name@example.com', 'email'],
                ['Contact Number*', '123-456-7890', 'tel'],
                ['Service Interested In', 'e.g. IT, Legal, Finance...', 'text'],
              ].map(([label, placeholder, type]) => (
                <div key={label}>
                  <label className="block text-sm font-medium text-blue-800 mb-1">{label}</label>
                  <input
                    type={type}
                    required={label.includes('*')}
                    placeholder={placeholder}
                    className="w-full p-3 border border-blue-100 text-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-800 mb-1">Your Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full p-3 border border-blue-100 text-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-blue-900 focus:outline-none focus:ring-blue-600"
            >
              Submit
            </button>
          </form>

          {/* Right: Address + Map */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-blue-900">Our Corporate Office</h3>
              <ul className="space-y-3 text-gray-700 text-[1rem] leading-relaxed">
                <li className="flex items-start gap-5">
                  <FaMapMarkerAlt className="text-blue-800 mt-1" />
                  <span className="text-gray-500">D3‑29, 2nd Floor, Pocket 8, Dwarka Sector 23B, Delhi 110077</span>
                </li>
                <li className="flex items-start gap-5">
                  <FaPhoneAlt className="text-blue-800 mt-1" />
                  <span className="text-gray-500">+91 7906439816</span>
                </li>
                <li className="flex items-start gap-5">
                  <FaEnvelope className="text-blue-800 mt-1" />
                  <span className="text-gray-500">info@osconsultingprivatelimited.in</span>
                </li>
                <li className="flex items-start gap-5">
                  <FaClock className="text-blue-800 mt-1" />
                  <span className="text-gray-500">Mon – Sat: 10 AM – 6 PM</span>
                </li>
              </ul>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-xl overflow-hidden border border-gray-200 w-full h-[250px] md:h-[300px]">
              <iframe
                title="Legafin Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.135708631655!2d77.0114568!3d28.6096739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04f501ad50e1%3A0x7f8610f87d0300b5!2sSmile%20Dentistry%20and%20Implants!5e0!3m2!1sen!2sin!4v1718269907411!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 pt-12 px-4 md:px-8 lg:px-12 xl:px-16 mt-4">
          {[
            { icon: <FaHeadset />, label: '24/7 Support' },
            { icon: <FaLock />, label: '100% Confidential' },
            { icon: <FaMapMarkerAlt />, label: 'PAN India Presence' },
            { icon: <FaUserTie />, label: 'Expert Team' },
          ].map((item, i) => (
            <div
              key={i}
              className="w-[200px] h-[120px] bg-blue-100 p-4 rounded-2xl border-2 border-blue-300 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center space-y-3"
            >
              <div className="text-blue-800/80 text-4xl">{item.icon}</div>
              <p className="text-blue-900 text-base">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-500 pt-2 mt-2">
          Thank you for choosing <span className="text-blue-800 font-semibold">Legafin Pvt. Ltd.</span> — Your trusted partner in success.
        </p>
      </div>
    </section>
  );
};

export default Contact;
