import React, { useState } from "react";

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            Join the Waitlist for Anycopy
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Be among the first to experience the power of Anycopy Sign up and
            we'll notify you when it's ready!
          </p>
        </div>
      </div>
      <div className="mt-12 max-w-lg mx-auto">
        <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
          <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
            Get Early Access
          </h2>
          <form
            name="waitlist"
            method="POST"
            data-netlify="true"
            action="/thank-you"
          >
            <input type="hidden" name="form-name" value="waitlist" />
            <div data-netlify-honeypot="bot-field" hidden>
              <input name="bot-field" />
            </div>
            <div className="grid gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="hs-name-waitlist"
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="hs-name-waitlist"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
              </div>
              <div>
                <label
                  htmlFor="hs-email-waitlist"
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="hs-email-waitlist"
                  autoComplete="email"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
              </div>
            </div>
            <div className="mt-6 grid">
              <button
                type="submit"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Join the Waitlist
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Notification;
