import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Tech", "Travel", "Life", "Blog", "Login"];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-[#272727]/90 backdrop-blur-md shadow-md rounded-lg px-6 py-4"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold text-orange-500">Source Thread</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-[#E2E2E2] font-medium">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group cursor-pointer">
              <span className="hover:text-orange-500 transition-colors duration-300">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </li>
          ))}
          <li>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
              Sign up
            </button>
          </li>
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <div
          className="md:hidden text-[#E2E2E2] text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="md:hidden flex flex-col items-center space-y-4 mt-4 text-[#E2E2E2] font-medium bg-[#272727]/95 rounded-lg py-6"
          >
            {menuItems.map((item, index) => (
              <li key={index} className="relative group cursor-pointer">
                <span className="hover:text-orange-500 transition-colors duration-300">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </li>
            ))}
            <li>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Sign up
              </button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
