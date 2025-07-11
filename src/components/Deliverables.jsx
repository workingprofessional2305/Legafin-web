import React, { useRef } from "react";
import {
  FaIdCard,
  FaCertificate,
  FaFileAlt,
  FaBuilding,
  FaUniversity,
  FaFolderOpen,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const deliverables = [
  {
    icon: <FaIdCard className="text-3xl" />,
    title: "2 DIN & DSC",
    desc: "For Two Directors",
  },
  {
    icon: <FaCertificate className="text-3xl" />,
    title: "Incorporation Certificate",
    desc: "Legal Entity Registration",
  },
  {
    icon: <FaFileAlt className="text-3xl" />,
    title: "PAN + TAN / TDS",
    desc: "Issued by Govt. of India",
  },
  {
    icon: <FaBuilding className="text-3xl" />,
    title: "PF + ESIC + Prof. Tax",
    desc: "All Govt. Compliances",
  },
  {
    icon: <FaUniversity className="text-3xl" />,
    title: "Bank Account Support",
    desc: "Guidance for Opening",
  },
  {
    icon: <FaFolderOpen className="text-3xl" />,
    title: "MOA + AOA",
    desc: "Foundational Documents",
  },
];

// Animation variants
const bounceIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.17, 0.67, 0.83, 0.67] }, // Slower & smoother
  },
};

const DeliverablesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={bounceIn}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full mx-auto text-center"
      >
        <h2 className="text-blue-900 text-3xl md:text-4xl font-extrabold mb-4">
          Get your Private Limited{" "}
          <span className="text-blue-500 relative group hover:cursor-pointer">
            Company
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
          </span>
          <span className="text-blue-900 text-3xl md:text-4xl font-extrabold mb-4">
            {" "}
            Registration{" "}
          </span>
          ?
        </h2>
        <p className="text-base sm:text-lg text-blue-900 mb-6">
          in just 14 Days at{" "}
          <span className="text-blue-500 font-bold text-xl sm:text-3xl">
            ₹4999/-*
          </span>{" "}
          only
        </p>
      </motion.div>

      <div className="w-full mx-auto grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 mt-10 items-center justify-center">
        {deliverables.map((item, index) => (
          <motion.div
            key={index}
            variants={bounceIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 + index * 0.2 }}
            className="group p-6 bg-gradient-to-br from-[blue-300 via-green-100 to-blue-400] hover:bg-blue-100 rounded-xl py-6 px-4 shadow 
                   hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 text-center 
                    border-2 border-blue-300 hover:border-blue-500 hover:border-dotted"
          >
            <div className="mb-3 flex justify-center text-blue-600 group-hover:text-blue-900">
              {item.icon}
            </div>
            <h3 className="text-blue-900 font-semibold text-lg">{item.title}</h3>
            <p className="text-blue-600 text-sm mt-1 group-hover:text-blue-600">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        variants={bounceIn}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 1 }}
        className="text-xs text-gray-500 italic mt-6 text-center"
      >
        *Professional fee only. Government charges are additional as applicable.
      </motion.p>
    </div>
  );
};

export default DeliverablesSection;
