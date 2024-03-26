import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-blue-600">
    <div className="max-w-3xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
      Stop wasting time and money on content and copywriting
      </h2>
      <p className="mt-4 text-lg leading-6 text-blue-200">
        Start Your Free Trial today and Create Content At Scale in Seconds
      </p>
      <div className="mt-8">
        <div className="inline-flex rounded-md shadow">
          <a
            href="https://app.anycopy.co/signup"
            className="inline-flex items-center justify-center w-full px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 sm:w-auto"
          >
            Get Started - It's Free
          </a>
        </div>
      </div>
    </div>
  </div>
  
  
  );
};

export default Modal;
