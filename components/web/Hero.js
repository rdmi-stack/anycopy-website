import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 md:mr-8 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              {" "}
              Create Marketing Copy At Scale With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600">
                {" "}
                Generative AI{" "}
              </span>{" "}
            </h1>{" "}
            <p className="text-lg text-gray-700 mb-8">
              {" "}
              Write smarter, not harder with AI. Generate copy in seconds for
              websites, ads, emails, and more{" "}
            </p>{" "}
            <div className="flex flex-col md:flex-row md:items-start">
              {" "}
              <div>
                {" "}
                <a
                  href="https://app.anycopy.co/signup"
                  className="inline-block bg-gray-900 text-white text-lg md:text-xl font-semibold py-4 px-8 rounded-md hover:bg-gray-800 transition-colors"
                >
                  {" "}
                  Get Started - It's Free{" "}
                </a>{" "}
                <div className="mt-4 md:mt-0 md:flex md:justify-center md:w-full">
                  {" "}
                  <p className="text-gray-500">No credit card required</p>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/anycopy-hero.png"
              alt="AI Assistant"
              className="rounded-lg shadow-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
