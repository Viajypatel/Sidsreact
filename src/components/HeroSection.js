// src/components/HeroSection.js
import React from 'react';

function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center">
      <img
        src="./sidb.png" // Replace with the path to your image
        alt="Company"
        className="object-cover w-full h-full absolute top-0 left-0"
      />  
      <div className="font-serif absolute inset-0 flex justify-end items-center p-8">
        <div className=" bg-opacity-60 text-blue-400 p-6 rounded-lg max-w-md">
          <h2 className="text-7xl font-bold mb-4">A Venture Studio</h2>
          <p className="text-3xl mb-4">Advancing Human Intelligence</p>
          <p className="text-lg">Through Innovation</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
