import React from 'react';
import Navbar from '../components/web/NavigationBar';
import Footer from '../components/web/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-20 bg-white shadow-sm rounded-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 border-b pb-4">Privacy Policy</h1>

        <p className="text-md mb-6 text-gray-600">
          Last updated: December 20, 2023
        </p>

        {/* Introduction and Overview */}
        <section className="mb-12">
          <p className="text-md text-gray-700 mb-6">
            Welcome to AnyCopy.ai. This privacy policy outlines how we collect, use, disclose, and safeguard your information when you visit our website AnyCopy.ai.
          </p>
        </section>

        {/* Collection of Your Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Collection of Your Information</h2>
          <p className="text-md text-gray-700 mb-6">
            We may collect information about you in a variety of ways. The information we may collect on the site includes personal data, like your name, email address, and demographic information.
          </p>
        </section>

        {/* Use of Your Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Use of Your Information</h2>
          <p className="text-md text-gray-700 mb-6">
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
          </p>
          <ul className="list-disc pl-8 text-gray-700">
            <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
            {/* More list items */}
          </ul>
        </section>

        {/* Contact Us */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-md text-gray-700 mb-6">
            If you have questions or comments about this privacy policy, please contact us at: support@anycopy.ai
          </p>
        </section>
      </div>
      <Footer/ >

    </>
  );
}

export default PrivacyPolicy;
