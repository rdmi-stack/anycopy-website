// pages/thank-you.js

import React from "react";
import Head from "next/head";

const ThankYou = ({ query }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Head>
        <title>Thank You | Anycopy</title>
        <meta
          name="description"
          content="Thank you for signing up for Anycopy"
        />
      </Head>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-32 w-auto"
          src="/anycopy-logo.png"
          alt="Anycopy Logo"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Thank you for signing up!
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          You have been added to the waitlist for Anycopy.
          <br />
          We'll notify you as soon as it's ready to launch.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <p className="text-gray-800 text-lg font-medium">
            In the meantime, follow us on social media for updates and insights:
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="https://twitter.com/anycopy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* Twitter SVG icon */}
              </svg>
            </a>
            <a
              href="https://www.facebook.com/anycopy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* Facebook SVG icon */}
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/anycopy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* LinkedIn SVG icon */}
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
export const getServerSideProps = ({ query }) => {
  return {
    props: {
      query,
    },
  };
};
