import React from 'react';

function Contact() {
  return (
    <div className="bg-white h-120vh flex flex-col md:flex-row mt-24">
      {/* Left Section with Image */}
      <div className="md:w-1/2 w-full h-1/2 md:h-full overflow-hidden rounded-md ml-8">
  <div className='w-[90vh] h-[90vh] rounded-lg ml-12 mt-2'>
    <img
      src="./formg.png"
      alt="Description"
      className="w-full h-full object-contain"
    />
  </div>
</div>


      {/* Right Section with Form */}
      <div className="md:w-1/2 w-full h-1/2 md:h-full p-8 flex  justify-center">
        <form className="w-full max-w-lg">
          <h2 className="text-3xl font-bold text-black mb-2 uppercase">Stay In Touch With Us</h2>

          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              className="bg-white w-full px-3 py-2 border border-gray-500 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="name"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Subject Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              type="text"
              id="subject"
              placeholder="Subject"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="bg-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="message"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-left">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
