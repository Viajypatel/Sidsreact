import React from 'react';

function Destination() {
  return (
    <div className="bg-custom-blue h-[70vh] flex flex-col md:flex-row items-center justify-between p-8">
      {/* Left Side: Text */}
      <div className="w-full md:w-1/2 text-white flex flex-col justify-center h-full space-y-4">
        <h1 className="text-6xl font-bold">SIDLABS</h1>
        <h2 className="text-4xl font-semibold uppercase">Your Destination for Innovation</h2>
        <h4 className="text-2xl font-medium">SidLabs is not just a company; it's a destination for innovation.</h4>
        <p className="text-lg">
          Our suite of products represents three distinct stores in our innovation mall. Each store is a world in itself, driven by the relentless pursuit of excellence and global human upgradation.
        </p>
      </div>

      {/* Right Side: Image */}
      <div className="w-full md:w-1/2 h-full mt-8 md:mt-0 flex items-center justify-center">
        <img
          className="max-w-xs md:max-w-sm h-auto object-contain"
          src="./dest.png" // Replace with your image URL
          alt="Destination"
        />
      </div>
    </div>
  );
}

export default Destination;
