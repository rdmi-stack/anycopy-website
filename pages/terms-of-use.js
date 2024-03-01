import React from 'react';
import Navbar from '../components/web/NavigationBar';
import Footer from '../components/web/Footer';

const TermsOfUse = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
        <p className="mb-4">
          Welcome to AnyCopy! These Terms of Use outline the terms and conditions governing your use of our website (anycopy.co, anycopy.ai), our Chrome extension, desktop app, and any related services (collectively referred to as "the Services"). By using our Services, you agree to comply with these terms. If you do not agree with any part of these terms, please refrain from using our Services.
        </p>
        <h2 className="text-2xl font-bold mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4">By accessing or using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our Services.</p>
        <h2 className="text-2xl font-bold mb-2">2. User Responsibilities</h2>
        <p className="mb-4">You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>
        <h2 className="text-2xl font-bold mb-2">3. Prohibited Activities</h2>
        <p className="mb-4">You may not use the Services for any illegal or unauthorized purpose. You agree to comply with all applicable laws and regulations when using our Services. Any violation of these terms may result in the termination of your account and legal action if necessary.</p>
        <h2 className="text-2xl font-bold mb-2">4. Intellectual Property</h2>
        <p className="mb-4">The content, features, and functionality of the Services are the property of AnyCopy and are protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express consent.</p>
        <h2 className="text-2xl font-bold mb-2">5. Termination</h2>
        <p className="mb-4">We reserve the right to terminate or suspend your account and access to the Services at our sole discretion, without prior notice, for any reason, including a breach of these Terms of Use.</p>
        <h2 className="text-2xl font-bold mb-2">6. Changes to Terms</h2>
        <p className="mb-4">We may update these Terms of Use from time to time. We will notify you of any changes by posting the new terms on this page. It is your responsibility to check this page periodically for changes. Your continued use of the Services after the posting of changes constitutes your acceptance of the updated terms.</p>
        <h2 className="text-2xl font-bold mb-2">7. Contact Information</h2>
        <p className="mb-4">For any questions or concerns regarding these Terms of Use, please contact us at hello@anycopy.co or hello@anycopy.ai.</p>
        <p className="mb-4">These Terms of Use were last updated on 1st february 2024.</p>
      </div>
    </div>
  );
}

export default TermsOfUse;
