import React from 'react';
import Navbar from '../../components/web/NavigationBar';
import Footer from '../../components/web/Footer';
import BlogList from '../../components/web/home-blog-list';


const Careers = () => {
  return (
    
    <>
          <Navbar />

    <>
  {/* Hero */}
  <div className="bg-slate-900">
    <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
    
        {/* End Announcement Banner */}
        {/* Title */}
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
Anycopy BLOG          </h1>
        </div>
        {/* End Title */}
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-400">
           
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
<BlogList />
      
      <Footer/ >
    </>
  );
}

export default Careers;
