import React from 'react';

function Card1() {
  return (
    <div className='bg-white relative flex flex-col md:flex-row items-center justify-between gap-8 p-8 mt-10'>
      {/* Card 1 */}
      <div className='border border-2 border-custom-blue relative w-full md:w-1/3 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 h-[74vh]'>
        <div className='m-2 h-[72vh] bg-custom-blue1 relative'>
          <div className='absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-custom-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold'>
            1
          </div>
          <div className='p-6 text-center pt-20'>
            <h2 className='text-3xl font-semibold mb-4 text-center text-black'>A comprehensive suite of AI-driven techniques.</h2>
            <p className='text-gray-800 overflow-hidden'>
              A comprehensive suite of AI-driven techniques and methodologies designed to enhance the performance, efficiency, and effectiveness of artificial intelligence.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className='border border-2 border-custom-blue relative w-full md:w-1/3 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 h-[60vh] mt-[10vh]'>
        <div className='m-2 h-[58vh] bg-custom-blue1 relative'>
          <div className='absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-custom-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold'>
            2
          </div>
          <div className='p-6 text-center pt-20'>
            <h2 className='text-3xl font-semibold mb-4 text-center text-black'>AI Software Development and AI consulting</h2>
            <p className='text-gray-800 overflow-hidden'>
              The development process involves a combination of expertise in programming languages, understanding algorithms and models.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className='border border-2 border-custom-blue relative w-full md:w-1/3 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 h-[60vh]'>
        <div className='m-2 h-[58vh] bg-custom-blue1 relative'>
          <div className='absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-custom-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold'>
            3
          </div>
          <div className='p-6 text-center pt-20'>
            <h2 className='text-3xl text-black font-semibold mb-4 text-center'>We specialize in tailored AI.</h2>
            <p className='text-gray-800 overflow-hidden'>
              Our commitment is to elevate your business with precise AI strategies, empowering smarter decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
