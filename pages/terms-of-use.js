import React from 'react';
import Navbar from '../components/web/NavigationBar';
import Footer from '../components/web/Footer';


const TermsOfUse = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-20 bg-white shadow-sm rounded-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 border-b pb-4">Terms of Use</h1>

        <p className="text-md mb-6 text-gray-600">
          Last updated: December 20, 2023
        </p>

        {/* Introduction and Overview */}
        <section className="mb-12">
          <p className="text-md text-gray-700 mb-6">
            Welcome to AnyCopy.ai. These terms of use ("Terms") govern your use of our website and services ("Service"). By accessing or using our Service, you agree to be bound by these Terms.
          </p>
        </section>

        {/* Use of the Service */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Use of the Service</h2>
          <p className="text-md text-gray-700 mb-6">
            Our Service allows you to access and use various features and functionalities. You agree to use the Service in compliance with all applicable laws and regulations.
          </p>
        </section>

        {/* User Responsibilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">User Responsibilities</h2>
          <p className="text-md text-gray-700 mb-6">
            You are responsible for your use of the Service and any content you provide, including compliance with applicable laws, rules, and regulations.
          </p>
        </section>

        {/* Intellectual Property */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Intellectual Property</h2>
          <p className="text-md text-gray-700 mb-6">
            The Service and its original content, features, and functionality are and will remain the exclusive property of AnyCopy.ai and its licensors.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
          <p className="text-md text-gray-700 mb-6">
            If you have any questions about these Terms, please contact us at support@anycopy.ai.
          </p>
        </section>
      </div>
      <Footer/ >

    </>
  );
}

export default TermsOfUse;
