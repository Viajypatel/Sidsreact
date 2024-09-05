import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

function Hero() {
  return (
    <div className='bg-white relative w-full px-4 md:px-8 lg:px-16'>
      <div className='flex justify-center'>
        <FaArrowDown className='text-3xl text-gray-700 animate-bounce' />
      </div>
      <div className='flex justify-center'>
        <p className='text-custom-blue text-xl md:text-2xl mt-1 font-serif'>Explore</p>
      </div>
      <div className='flex flex-col md:flex-row w-full pt-8 md:pt-12'>
        <div className='w-full md:w-1/2 p-4'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-custom-blue'>
            Our Mission
          </h2>
          <h3 className='text-black text-xl md:text-2xl lg:text-3xl font-semibold mt-6 md:mt-8 uppercase'>
            Elevating humanity through innovation and technology is our mission.
          </h3>
          <p className='text-black text-base md:text-lg lg:text-xl mt-6 md:mt-8'>
            Our vision is to reduce the gap in harnessing technology towards human evolution! We believe that every technological solution should be purposeful and aligned with the unique needs of the user. One-size-fits-all approaches are outdated; instead, we advocate for solutions that are tailored, intuitive, and genuinely enhance the human experience.
          </p>
        </div>
        <div className='w-full md:w-1/2 p-4 mt-8 md:mt-0'>
          <img src="./mission.png" alt="Our Mission" className='w-full h-auto object-cover rounded-lg' />
        </div>
      </div>
    </div>
  )
}

export default Hero;
