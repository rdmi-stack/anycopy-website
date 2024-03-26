import React, { useState, useEffect } from "react";
import Link from "next/link";
const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset; // Get the current scroll position
      setIsScrolled(scrollPosition > 0); // Set isScrolled to true if the scroll position is greater than 0
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* ========== HEADER ========== */}
      <header
        className={`flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm py-3 md:py-0 dark:bg-gray-800 transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 shadow-lg"
            : ""
        }`}
      >
        {" "}
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
                <img src="/logo.png" alt="AnyCopy" className="logo" />
                ANYCOPY 
              </a>

              <div className="md:hidden">
              <Link href="https://app.anycopy.co/login">
    <a className="font-medium text-blue-600 py-3 md:py-6 flex items-center dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 mr-4">
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
      </svg>
      Login
    </a>
  </Link>
                <button
                  type="button"
                  className="hamburger-button md:hidden"
                  onClick={toggleDropdown}
                  aria-label="Toggle navigation"
                >
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                </button>
              </div>
            </div>
            <div
              id="navbar-collapse-with-animation"
              className={`hs-collapse ${
                isOpen ? "block" : "hidden"
              } overflow-hidden transition-all duration-300 basis-full grow md:block`}
            >
              <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
                <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
                  <Link href="/features">
                    <a
                      className="font-medium text-blue-600 py-3 md:py-6 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      aria-current="page"
                    >
                      Features
                    </a>
                  </Link>
                  <Link href="/Pricing">
                    <a className="font-medium text-gray-800 hover:text-gray-600 py-3 md:py-6 dark:text-gray-200 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                      Pricing
                    </a>
                  </Link>
                  <Link href="https://app.anycopy.co/login">
  <a className="font-medium text-blue-600 py-3 md:py-6 flex items-center dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
    </svg>
    Login
  </a>
</Link>
                  <div className="pt-3 md:pt-0">
                    <a
                      className="py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-black text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="https://app.anycopy.co/signup"
                    >
                      Start For Free
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
