// Updated Contact Page
import React, { useState } from 'react';
import Navbar from '../components/web/NavigationBar'; // NavigationBar component
import Footer from '../components/web/Footer';       // Footer component

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <Navbar />
      {/* Contact Us */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl lg:max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              Get in Touch
            </h1>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Let's discuss how AnyCopy can assist you.
            </p>
          </div>
          <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
            {/* Card */}
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
              <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
                Fill in the Form
              </h2>
              <form>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="sr-only">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="First Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="sr-only">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone-number" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <label htmlFor="details" className="sr-only">
                      Details
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Details"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="mt-4 grid">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Send Inquiry
                  </button>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-500">
                    We'll respond within 1-2 business days.
                  </p>
                </div>
              </form>
            </div>
            {/* End Card */}
            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              {/* Icon Block */}
              <div className="flex gap-x-7 py-6">
                <svg
                  className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200"
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
                  <circle cx={12} cy={12} r={10} />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                    Knowledgebase
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    We're here to help with any questions or code.
                  </p>
                  <a
                    className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Contact support
                    <svg
                      className="flex-shrink-0 w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* End Icon Block */}
              {/* ... (unchanged icon blocks) */}
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Us */}
      <Footer />
    </>
  );
};

export default ContactPage;
