import React from 'react';
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-custom-gray1 text-black py-10">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Section - Other Info */}
        <div className="flex-1 mb-8 md:mb-0 md:w-1/2 md:pr-8">
          <div className="mb-4">
            <img 
              src="./Sid-Logo.png"
              alt="Other Info"
              className="w-24 h-auto" // Adjust the width and height as needed
            />
          </div>
          <p>
            Join us on this extraordinary journey as we redefine the limits of
            human potential. Together, we are forging a brighter future—one innovation at a time.
          </p>
        </div>

        {/* Right Section - Address, Email, and Chat */}
        <div className="flex-1 md:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <div>
              <h2 className="text-lg font-bold mb-4">Address</h2>
              <address className="not-italic">
                SidLabs, Asaf Ali<br/>Road, New Delhi-<br/>110002
              </address>
            </div>

            {/* Email */}
            <div>
              <h2 className="text-lg font-bold mb-4">Email</h2>
              <p>info@example.com</p>
              <p>support@example.com</p>
            </div>

            {/* Chat with Us */}
            <div>
              <h2 className="text-lg font-bold mb-4">Chat with Us</h2>
              <p>We are available 24/7.</p>
              <div className='text-4xl mt-1 text-green-500'>
                <FaSquareWhatsapp /> 
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="my-8 border-gray-700" />

      {/* Bottom Section - Copyright and Social Media */}
      <div className='flex flex-col md:flex-row justify-between items-center px-4'>
        <p className="text-center md:text-left mb-4 md:mb-0">
          Copyright © 2023 Sidlabs. All rights reserved. Terms of Use & Privacy Policy
        </p>
        <div className="text-3xl flex gap-6 md:gap-8">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
