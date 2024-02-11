import React, { useState } from 'react';

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    {/* Announcement Banner */}
    <div
      id="ab-full-width-with-dismiss-button-on-blue-bg"
      className="hs-removing:-translate-y-full bg-blue-600"
    >
      <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex">
          <p className="text-white">
          Generative AI for Marketing and Sales.{" "}
            <a
              className="decoration-2 underline font-medium hover:text-white/[.8] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="../figma.html"
            >
Download E-Book            </a>
          </p>
          <div className="ps-3 ms-auto">
            <button
              type="button"
              className="inline-flex rounded-lg p-1.5 text-white/[.8] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
              data-hs-remove-element="#ab-full-width-with-dismiss-button-on-blue-bg"
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="flex-shrink-0 h-4 w-4"
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* End Announcement Banner */}
  </>
  
  
  
  
  
  );
};

export default Notification;
