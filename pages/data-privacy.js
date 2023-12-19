import React from 'react';
import Navbar from '../components/web/NavigationBar';
import Footer from '../components/web/Footer';

const DataPrivacy = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-20 bg-white shadow-sm rounded-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 border-b pb-4">Data Privacy Policy</h1>

        <p className="text-md mb-6 text-gray-600">
          Last updated: December 20, 2023
        </p>

        {/* Introduction and Overview */}
        <section className="mb-12">
          <p className="text-md text-gray-700 mb-6">
            At AnyCopy.ai, we are committed to protecting the privacy and security of our users' data. This Data Privacy Policy outlines the types of data we collect, how it is used, and the measures we take to ensure its protection.
          </p>
        </section>

        {/* Data Collection */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Data Collection</h2>
          <p className="text-md text-gray-700 mb-6">
            We collect various types of information for various purposes to provide and improve our Service to you.
          </p>
        </section>

        {/* Data Usage */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Data Usage</h2>
          <p className="text-md text-gray-700 mb-6">
            The data we collect is used in various ways, including to provide and maintain our Service, notify you about changes to our Service, and provide customer care and support.
          </p>
        </section>

        {/* Data Protection */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Data Protection</h2>
          <p className="text-md text-gray-700 mb-6">
            We use a variety of security measures to ensure the safety of your personal information when you enter, submit, or access your personal information.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
          <p className="text-md text-gray-700 mb-6">
            If you have any questions about this Data Privacy Policy, please contact us at support@anycopy.ai.
          </p>
        </section>
      </div>
       <Footer/ >
    </>
  );
}

export default DataPrivacy;
