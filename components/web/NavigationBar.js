import React, { useState } from 'react';
import Link from 'next/link';
const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    {/* ========== HEADER ========== */}
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm py-3 md:py-0 dark:bg-gray-800">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="relative md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
          <a
  className="flex items-center text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
  href="/"
  aria-label="Brand"
>
  <img src="/logo.png" alt="AnyCopy" className="logo"/> 
  AnyCopy    <span className="beta-chip">BETA</span> 

</a>

            <div className="md:hidden">
            <button
  type="button"
  className="hamburger-button md:hidden" // Add className for styling 
  data-hs-collapse="#navbar-collapse-with-animation"
  aria-controls="navbar-collapse-with-animation"
  aria-label="Toggle navigation"
>
  <span className="hamburger-line"></span>
  <span className="hamburger-line"></span>
</button>

            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
              <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
              <Link href="/features">
                  <a className="font-medium text-blue-600 py-3 md:py-6 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-current="page">
                    Features
                  </a>
                </Link>
                <Link href="/Pricing">
                  <a className="font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    Pricing
                  </a>
                </Link>
               
                
                <div className="pt-3 md:pt-0">
                  <a
                    className="py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/waitlist"
                  >
                    Join the Waitlist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    {/* ========== END HEADER ========== */}
  </>
  

  );
};

export default Modal;
