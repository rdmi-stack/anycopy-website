import React from 'react';
import Navbar from '../components/web/NavigationBar';
import Footer from '../components/web/Footer';

const Careers = () => {
  return (
    
    <>
    <>
  {/* Hero */}
  <div className="bg-slate-900">
    <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
        {/* Announcement Banner */}
        <div className="flex justify-center">
          <a
            className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 ps-4 rounded-full shadow-md"
            href="../figma.html"
          >
            <p className="me-2 inline-block text-white text-sm">
              We Are Hiring
            </p>
            <span className="group-hover:bg-white/[.1] py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
              <svg
                className="flex-shrink-0 w-4 h-4"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </a>
        </div>
        {/* End Announcement Banner */}
        {/* Title */}
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Build A Career not A Job
          </h1>
        </div>
        {/* End Title */}
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-400">
            Preline is a large open-source project, crafted with Tailwind CSS
            framework by Hmlstream.
          </p>
        </div>
        {/* Buttons */}
        <div className="text-center">
          <a
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
            href="#"
          >
            Get started
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>
        {/* End Buttons */}
      </div>
    </div>
  </div>
  {/* End Hero */}
</>

      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-20">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-16">Join Our Team</h1>

        {/* Vision and Mission Section */}
        <section className="mb-24 text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-md text-gray-700">
              To revolutionize the way businesses interact with technology, driving innovation and excellence.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-md text-gray-700">
              Empowering our clients with cutting-edge solutions, we commit to excellence in all aspects of our operations.
            </p>
          </div>
        </section>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* Grid */}
  <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
    {/* Node.js Developer */}
    <a href="#" className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition">
      <div className="p-4 md:p-5">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="group-hover:text-blue-600 font-semibold text-gray-800">Node.js Developer</h3>
            <p className="text-sm text-gray-500">Open Position</p>
          </div>
        </div>
      </div>
    </a>

    {/* Python Developer */}
    <a href="#" className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition">
      <div className="p-4 md:p-5">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="group-hover:text-blue-600 font-semibold text-gray-800">Python Developer</h3>
            <p className="text-sm text-gray-500">Open Position</p>
          </div>
        </div>
      </div>
    </a>

    {/* Front End Developer */}
    <a href="#" className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition">
      <div className="p-4 md:p-5">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="group-hover:text-blue-600 font-semibold text-gray-800">Front End Developer</h3>
            <p className="text-sm text-gray-500">Open Position</p>
          </div>
        </div>
      </div>
    </a>

    {/* UI/UX Designer */}
    <a href="#" className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition">
      <div className="p-4 md:p-5">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="group-hover:text-blue-600 font-semibold text-gray-800">UI/UX Designer</h3>
            <p className="text-sm text-gray-500">Open Position</p>
          </div>
        </div>
      </div>
    </a>

    {/* Content Developer */}
    <a href="#" className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition">
      <div className="p-4 md:p-5">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="group-hover:text-blue-600 font-semibold text-gray-800">Content Developer</h3>
            <p className="text-sm text-gray-500">Open Position</p>
          </div>
        </div>
      </div>
    </a>
  </div>
</div>

      </div>
      <Footer/ >
    </>
  );
}

export default Careers;
