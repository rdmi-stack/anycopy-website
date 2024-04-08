import React from "react";
import Navbar from "../../components/web/NavigationBar";
import Footer from "../../components/web/Footer";
import BlogList from "../../components/web/home-blog-list";
import Head from "next/head"; // Import Head from Next.js

const Careers = () => {
  return (
    <>
      <Head>
        {/* Set meta title */}
        <title>Careers - Explore Job Opportunities</title>
        {/* Set meta description */}
        <meta
          name="description"
          content="Discover exciting job opportunities and career paths at our company. Explore our current job openings and find the perfect fit for your skills and aspirations."
        />
      </Head>{" "}
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
                  BLOG{" "}
                </h1>
              </div>
              {/* End Title */}
              <div className="max-w-3xl text-center mx-auto">
                <p className="text-lg text-gray-400"></p>
              </div>
            </div>
          </div>
        </div>
        {/* End Hero */}
      </>
      <BlogList />
      <Footer />
    </>
  );
};

export default Careers;
