// src/components/Header.js
import React, { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg top-0 z-50 m-0 p-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-10" src="./Sid-Logo.png" alt="Logo" />
          </div>
          {/* Navigation Buttons */}
          <nav className="hidden md:flex space-x-4 font-serif text-blue-500">
            <button className="border-2 border-blue-500 hover:text-white hover:bg-blue-500 px-4 py-2 rounded-md text-md font-medium transition-colors duration-300 ease-in-out">
              About Us
            </button>
            <button className="border-2 border-blue-500 hover:text-white hover:bg-blue-500 px-4 py-2 rounded-md text-md font-medium transition-colors duration-300 ease-in-out">
              Flagship Project
            </button>
            <button className="border-2 border-blue-500 hover:text-white hover:bg-blue-500 px-4 py-2 rounded-md text-md font-medium transition-colors duration-300 ease-in-out">
              Contact Us
            </button>
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-blue-500" onClick={toggleMobileMenu}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-white shadow-lg z-50`}>
          <nav className="flex flex-col space-y-4 p-4">
            <button className="border-2 border-blue-500 hover:text-white hover:bg-blue-500 px-4 py-2 rounded-md text-md font-medium transition-colors duration-300 ease-in-out">
              About Us
            </button>
            <button className="border-2 border-blue-500 hover:text-white hover:bg-blue-500 px-4 py-2 rounded-md text-md font-medium transition-colors duration-300 ease-in-out">
              Flagship Project
            </button>
            <button className="border-2 border-blue-500 hover:text-white hover:bg-blue-500 px-4 py-2 rounded-md text-md font-medium transition-colors duration-300 ease-in-out">
              Contact Us
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
