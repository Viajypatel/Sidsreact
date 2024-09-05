import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
function Hero2() {
  return (
    <div className='h-[80vh] flex mt-20 bg-custom-blue1 '>
     
      {/* Left Half (Testimonial Content) */}
      <div className='w-1/2 p-4 flex flex-col justify-center ml-8'>
        <h1 className='text-2xl font-semibold text-custom-blue mb-2'>Testimonial</h1>
        <h2 className='uppercase text-4xl font-bold text-gray-800 mb-8'>
          See What Our Clients Say’s About Us
        </h2>
        <p className='text-2xl text-gray-600 '>
          Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit. Nunc <br/>vulputate libero et velit
          interdum, ac <br/>aliquet odio mattis.
        </p>
      </div>
      
     
      <div className='w-1/2 overflow-x-auto whitespace-nowrap p-4 flex items-center scroll-hidden'>
        <div className='flex space-x-8'>
         
          <div className='overflow-hidden rounded-md border border-2 border-gray-300 hover:border-custom-blue bg-white w-[24rem] h-[22rem] shadow-xl transform transition-transform duration-300 hover:scale-105 inline-block'>
            <div className='m-4  text-custom-blue font-bold text-4xl'><FaQuoteLeft /></div>
            <div className='p-4 text-wrap'>
              
              <p className='text-gray-600 text-md'>Partnering with SidLabs has been a game-changer for our business. Their innovative AI solutions and exceptional support have streamlined our operations,
               boosted efficiency, and driven remarkable growth. Highly recommend 
               their expertise and cutting-edge technology!"</p>
               <div className='flex justify-between'>
              <h2 className='text-black  text-2xl font-semibold mt-4 font-sans'>David L.</h2>
              <div className='mt-10 left-10 flex gap-2'><div className='text-2xl text-yellow-400'><FaStar/></div><p className='text-custom-blue'>5.0</p></div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='overflow-hidden rounded-md border border-2 border-gray-300 hover:border-custom-blue  bg-white w-[24rem] h-[22rem] shadow-xl transform transition-transform duration-300 hover:scale-105 inline-block'>
          <div className='m-4 text-custom-blue font-bold text-4xl'><FaQuoteLeft /></div>
            <div className='p-4 text-wrap'>
              
              <p className='text-gray-600 text-md'>The AI solutions provided by SidLabs have revolutionized our workflow. Their technology is both powerful and user-friendly, and their team is incredibly responsive and knowledgeable. We're thrilled
               with the results and couldn't ask for a better partner in innovation.</p>
               <div className='flex justify-between'>
              <h2 className='text-black  text-2xl font-semibold mt-4 font-sans'>Jessica M..</h2>
              <div className='mt-10 left-10 flex gap-2'><div className='text-2xl text-yellow-400'><FaStar/></div><p className='text-custom-blue'>4.6</p></div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className='overflow-hidden rounded-md border border-2 border-gray-300 hover:border-custom-blue  bg-white w-[24rem] h-[22rem] shadow-xl transform transition-transform duration-300 hover:scale-105 inline-block'>
          <div className='m-4 text-custom-blue font-bold text-4xl'><FaQuoteLeft /></div>
            <div className='p-4 text-wrap'>
              
              <p className='text-gray-600 text-md'>Highly recommend 
              their expertise and cutting-edge technology The AI solutions provided . Their technology is both powerful and user-friendly, and their team is incredibly responsive and knowledgeable. We're thrilled
               with the results  innovation.</p>
               <div className='flex justify-between'>
              <h2 className='text-black  text-2xl font-semibold mt-4 font-sans'>Warner J..</h2>
              <div className='mt-10 left-10 flex gap-2'><div className='text-2xl text-yellow-400'><FaStar/></div><p className='text-custom-blue'>4.7</p></div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Hero2;
