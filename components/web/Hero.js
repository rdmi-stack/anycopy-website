import React, { useState } from 'react';
import Link from 'next/link';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-white py-12 flex items-center justify-center min-h-screen">  {/* Reduced padding */}
        <div className="container mx-auto text-center md:flex md:space-x-8 md:items-center md:text-left">
          <div className="md:w-1/2 mb-6 md:mb-0 md:order-1">
            <h1 className="text-3xl font-bold mb-6 md:text-left text-gray-800 sm:text-5xl md:text-5xl lg:text-6xl text-center">
              <span className="text-indigo-600">Write Smarter,</span> Faster, Better
            </h1>
            <p className="text-lg mb-10 md:text-left text-gray-600 text-center">
              Effortlessly create compelling copy for websites, ads, and more with
              AI-powered tools.
            </p>
            <a
              href="#"
              className="bg-indigo-600 text-white hover:bg-indigo-700 font-bold py-4 px-10 rounded-full inline-block"
            >
              Start Your Free Trial
            </a>
          </div>
          <div className="md:w-1/2 md:order-2">
            <img
              src="/images/anycopy-hero.png"
              alt="AI Writing Interface"
             
            />
          </div>
        </div>
      </section>
      {/* End Hero */}

      {/* Your modal component's logic would go here */} 
    </>  
  );
};

export default Modal;

// **Reminder: CSS Reset**
// If you're still encountering extra space due to default browser styles,
// consider adding a CSS reset like Normalize.css at the beginning of your project. 
