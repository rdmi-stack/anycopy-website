import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center">
      {/* Glassmorphism background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-0 w-1/2 h-1/2 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 md:mr-8 text-center md:text-left">
            <Link href="/" title="PromptBetter Home" className="inline-block mb-6">
              <Image src="/logo.png" alt="PromptBetter Logo" width={80} height={80} priority />
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Write Smarter, Not Harder With{" "}
              <span className="relative inline-block whitespace-nowrap">
                Generative AI
                <span className="absolute -bottom-0 left-0 w-full h-2 bg-yellow-300 transform -skew-x-12"></span>
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Streamline your writing with our AI Writer, equipped with a rich
              library of over 50 templates designed for blogs, ads, and emails.
              Effortlessly integrate our versatile, multi-model AI chat using
              our intuitive Chrome extension and desktop app, optimizing your
              productivity and creativity seamlessly.
            </p>
            <div className="flex flex-col md:flex-row md:items-start">
              <div>
                
                  <a href="https://app.anycopy.co/signup"
                  className="inline-block bg-indigo-600 text-white text-lg md:text-xl font-semibold py-4 px-8 rounded-md hover:bg-indigo-700 shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Get Started - It's Free
                </a>
                <p className="mt-4 text-sm text-gray-600 font-medium">No credit card required</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-full max-w-6xl mx-auto mt-16">
              <div className="relative z-10 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-[2rem] shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl opacity-10"></div>
                <div className="relative rounded-[1.75rem] overflow-hidden border-[12px] border-white">
                  <Image
                    src="/images/anycopy-hero.png"
                    alt="AI Assistant"
                    width={2048}
                    height={1536}
                    className="w-full"
                  />
                </div>
                <div className="absolute top-3 right-3 w-2 h-10 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;