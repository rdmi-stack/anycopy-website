import React, { useState } from "react";
const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true); // State to track monthly/yearly

  const togglePricing = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <>
      {/* Pricing */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Pricing
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Whatever your status, our offers evolve according to your needs.
          </p>
        </div>
        {/* End Title */}
        {/* Switch */}
        <div className="flex justify-center items-center">
          <label className="min-w-[3.5rem] text-sm text-gray-500 me-3 dark:text-gray-400">
            Monthly
          </label>
          <input
            type="checkbox"
            id="hs-basic-with-description"
            className="relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600
  
      before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-white"
            defaultChecked=""
          />
          <label className="relative min-w-[3.5rem] text-sm text-gray-500 ms-3 dark:text-gray-400">
            Annual
          </label>
        </div>
        {/* End Switch */}
        {/* Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
          {/* Card */}
          <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
            <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
              Free Forever
            </h4>
            <span className="mt-7 font-bold text-5xl text-gray-800 dark:text-gray-200">
              Free
            </span>
            <p className="mt-2 text-sm text-gray-500">Forever free</p>
            <ul className="mt-7 space-y-2.5 text-sm">
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">
                  20 Credits Monthly
                </span>
              </li>
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">
                  30+ Templates
                </span>
              </li>
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">
                  1 Project{" "}
                </span>
              </li>
            </ul>
            <a
              className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="https://app.anycopy.co/signup"
            >
              Start For Free
            </a>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700">
            <p className="mb-3">
              <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">
                Most popular
              </span>
            </p>
            <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
              Startup
            </h4>
            <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
              <span className="font-bold text-2xl mr-1">$</span>49
              {isMonthly && <span className="text-2xl"> / month</span>}
            </span>
            <p className="mt-2 text-sm text-gray-500">
              Solo entrepreneurs and small teams
            </p>
            <ul className="mt-7 space-y-2.5 text-sm">
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">
                  Unlimited Credits
                </span>
              </li>
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">1 User</span>
              </li>{" "}
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">
                  100+ Templates
                </span>
              </li>
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">
                  3 Projects
                </span>
              </li>
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">
                  AI Writer
                </span>
              </li>{" "}
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">
                  Url to Ad
                </span>
              </li>
            </ul>
            <a
              className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="https://app.anycopy.co/signup"
            >
              Start Your Free Trial
            </a>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
            <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
              Team
            </h4>
            <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
              <span className="font-bold text-2xl mr-1">$</span>99
              {isMonthly && <span className="text-2xl"> / month</span>}
            </span>
            <p className="mt-2 text-sm text-gray-500">
              Everything you need for a growing business
            </p>
            <ul className="mt-7 space-y-2.5 text-sm">
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">
                  Unlimited Credits
                </span>
              </li>
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">2 User</span>
              </li>{" "}
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">
                  100+ Templates
                </span>
              </li>
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">
                  Unlimited Projects
                </span>
              </li>
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">
                  AI Writer
                </span>
              </li>{" "}
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">
                  Url to Ad
                </span>
              </li>
            </ul>
            <a
              className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="https://app.anycopy.co/signup"
            >
              Start Your Free Trial
            </a>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
            <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
              Enterprise
            </h4>
            <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
              Custom
            </span>
            <p className="mt-2 text-sm text-gray-500">
              Advanced features for scaling your business
            </p>
            <ul className="mt-7 space-y-2.5 text-sm">
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">
                  Unlimited Credits
                </span>
              </li>
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">
                  Unlimited Users
                </span>
              </li>{" "}
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">
                  100+ Templates
                </span>
              </li>
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">
                  Unlimited Projects
                </span>
              </li>
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">
                  AI Writer
                </span>
              </li>{" "}
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">
                  Url to Ad
                </span>
              </li>
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">
                  Single Sign-On (SSO)
                </span>
              </li>
              <li className="flex space-x-2">
                <svg
                  className="flex-shrink-0 mt-0.5 h-4 w-4 text-blue-600 dark:text-blue-500"
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 dark:text-gray-400">
                  Priority Support
                </span>
              </li>
            </ul>
            <a
              className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="/enterprise"
            >
              Contact Sales
            </a>
          </div>
          {/* End Card */}
        </div>

        {/* End Comparison table */}
      </div>
      {/* End Pricing */}
    </>
  );
};

export default Pricing;
