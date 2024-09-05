import React from 'react';

function Card2() {
  return (
    <div className='mt-20 px-4 '>
      <h1 className='text-5xl ml-4 font-semibold text-custom-blue mb-2'>AI Insights</h1>
      <h2 className='text-3xl ml-4 font-semibold text-black mb-8 uppercase'>Stay Updated with the Latest News and Developments</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="border border-2 border-gray-300 hover:border-custom-blue card bg-white w-full sm:w-64 md:w-80 lg:w-[20rem] shadow-xl transform transition-transform duration-300 hover:scale-105">
          <figure className="px-6 pt-6">
            <img
              src="./card2img1.png"
              alt="Shoes"
              className="rounded-xl w-full h-auto object-cover"
            />
          </figure>
          <div className="card-body p-4">
            <h1 className="text-black uppercase card-title text-lg font-bold">Industry Update</h1>
            <p className="text-gray-600 text-md">There has been significant progress in using AI for medical diagnostics, personalized medicine, drug discovery, and improving patient care.</p>
            <p className="text-gray-600 text-md">Increased attention on the ethical implications of AI, including fairness, transparency, bias mitigation, and responsible deployment of AI systems.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border border-2 border-gray-300 hover:border-custom-blue card bg-white w-full sm:w-64 md:w-80 lg:w-[20rem] shadow-xl transform transition-transform duration-300 hover:scale-105">
          <figure className="px-6 pt-6">
            <img
              src="./card2img2.png"
              alt="Shoes"
              className="rounded-xl w-full h-auto object-cover"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="text-black uppercase card-title text-lg font-bold">Modern Age Parenting</h2>
            <p className="text-gray-600 text-md">With the rise of technology, there's a surge in digital tools aiding parents—from apps monitoring child activities to educational platforms offering interactive learning experiences.</p>
            <p className="text-gray-600 text-md">Emphasis on skill-based learning has grown, with platforms offering specialized courses in emerging tech fields such as AI, cybersecurity and data science.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border border-2 border-gray-300 hover:border-custom-blue card bg-white w-full sm:w-64 md:w-80 lg:w-[20rem] shadow-xl transform transition-transform duration-300 hover:scale-105">
          <figure className="px-6 pt-6">
            <img
              src="./card2img3.png"
              alt="Shoes"
              className="rounded-xl w-full h-auto object-cover"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="text-black uppercase card-title text-lg font-bold">Tech Education</h2>
            <p className="text-gray-600 text-md">Online tech education has witnessed a surge in accessibility, with platforms offering diverse courses in various languages, catering to global audiences.</p>
            <p className="text-gray-600 text-md">Online forums, social media groups, and virtual communities are thriving, offering a space for learning and collaboration.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
