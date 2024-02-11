import React, { useState } from 'react';
import Link from 'next/link';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
<div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')]">
  <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
    <div className="mt-5 max-w-2xl text-center mx-auto">
      <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
        Generate <span className="text-blue-600">Amazing</span> Copy in Seconds
      </h1>
    </div>
    <div className="mt-5 max-w-3xl text-center mx-auto">
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Anycopy.ai leverages AI to supercharge your marketing and sales
        copywriting. Create compelling text for ads, emails, websites, and more.{" "}
      </p>
    </div>
    <div className="mt-8 flex justify-center">
      <a
        className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-lg font-medium rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600 py-4 px-8  dark:focus:ring-offset-gray-800"
        href="#"
      >
        Join the Waitlist
        <svg
          className="flex-shrink-0 w-5 h-5"
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
      </a>
    </div>
  </div>
</div>



    </>
  );
};

export default Modal;
