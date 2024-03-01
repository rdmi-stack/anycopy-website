import React from 'react';
import Navbar from '../components/web/NavigationBar';
import Footer from '../components/web/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
      At AnyCopy, we prioritize the privacy and security of our users. This Privacy Policy outlines the types of information we collect, how we use it, safeguard it,  and the choices you have regarding your data.
      </p>
      <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
      <p className="mb-4">This policy applies when you use our website (anycopy.co, anycopy.ai), our Chrome extension, desktop app, and any related services (collectively referred to as "the Services").:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Account Information: When you create an AnyCopy account, we may collect your name, email address, company information, billing details, and usage preferences.</li>
        <li>User Input: Text, content, and project details you enter while using the Services are stored and processed to provide our AI-powered content generation tools.</li>
        <li>Technical Information: We collect device information (browser type, IP address, operating system), as well as analytics data on how you interact with our Services.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">How We Use Your Information</h2>
     
      <ul className="list-disc list-inside mb-4">
        <li>Service Delivery: To provide, maintain, and improve our Services.</li>
        <li>Customization: To tailor your experience based on your usage and preferences.</li>
        <li>
        Communication: To contact you with important updates, offers, or support.
        </li>
        <li>
          From time to time, we may also use your information to contact you for
          market research purposes. We may contact you by email, phone, or mail.
          We may use the information to customize the website according to your
          interests.
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Security</h2>
      <p className="mb-4">
        We are committed to ensuring that your information is secure. In order to
        prevent unauthorized access or disclosure, we have put in place suitable
        physical, electronic, and managerial procedures to safeguard and secure
        the information we collect online.
      </p>
      <h2 className="text-2xl font-bold mb-2">Cookies</h2>
      <p className="mb-4">
        A cookie is a small file that asks permission to be placed on your
        computer's hard drive. Once you agree, the file is added, and the cookie
        helps analyze web traffic or lets you know when you visit a particular
        site. Cookies allow web applications to respond to you as an individual.
        The web application can tailor its operations to your needs, likes, and
        dislikes by gathering and remembering information about your preferences.
      </p>
      <p className="mb-4">
        Overall, cookies help us provide you with a better website by enabling us
        to monitor which pages you find useful and which you do not. A cookie in
        no way gives us access to your computer or any information about you,
        other than the data you choose to share with us.
      </p>
      <h2 className="text-2xl font-bold mb-2">Links to Other Websites</h2>
      <p className="mb-4">
        Our website may contain links to other websites of interest. However, once
        you have used these links to leave our site, you should note that we do
        not have any control over that other website. Therefore, we cannot be
        responsible for the protection and privacy of any information which you
        provide whilst visiting such sites and such sites are not governed by this
        privacy statement. You should exercise caution and look at the privacy
        statement applicable to the website in question.
      </p>
      <h2 className="text-2xl font-bold mb-2">
        Controlling Your Personal Information
      </h2>
      <p className="mb-4">
        You may choose to restrict the collection or use of your personal
        information in the following ways:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
        For any questions or concerns regarding your privacy, please reach out to us at hello@anycopy.co or hello@anycopy.ai
        </li>
        <li>
          We will not sell, distribute, or lease your personal information to
          third parties unless we have your permission or are required by law to
          do so. We may use your personal information to send you promotional
          information about third parties which we think you may find interesting
          if you tell us that you wish this to happen.
        </li>
        <li>
        Changes to This Policy

We may update this policy periodically.  We'll notify you via email or a prominent notice within the Services of significant changes.
        </li>
        <li>
          If you believe that any information we are holding on you is incorrect
          or incomplete, please write to or email us as soon as possible at the
          above address. We will promptly correct any information found to be
          incorrect.
        </li>
      </ul>
      <p className="mb-4">
        This privacy policy is subject to change without notice.
      </p>
    </div>
  </div>
  );
}

export default PrivacyPolicy;
