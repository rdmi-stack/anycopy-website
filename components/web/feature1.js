import React from 'react';
import { FaBullhorn, FaMailBulk, FaChartBar, FaUsers, FaBrain, FaBolt, FaSearchDollar } from 'react-icons/fa'; // Import the new icons

const FeatureCard = ({ Icon, title, description }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
      <div className="flex flex-col h-full p-6 shadow-lg rounded-lg bg-white hover:bg-blue-50 transition-colors duration-300">
        <div className="icon mb-4 text-blue-500 flex-grow-0">
          <Icon className="text-3xl" />
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-4 text-center">
        <FeatureCard
          Icon={FaBullhorn}
          title="Engaging Ad Copy"
          description="Generate captivating ad copies that drive customer engagement and increase conversions."
        />
        <FeatureCard
          Icon={FaMailBulk}
          title="Effective Email Campaigns"
          description="Craft personalized email campaigns that resonate with your audience and boost open rates."
        />
        <FeatureCard
          Icon={FaChartBar}
          title="Data-Driven Insights"
          description="Leverage analytics to create targeted content that aligns with market trends and customer preferences."
        />
        <FeatureCard
          Icon={FaUsers}
          title="Audience Segmentation"
          description="Segment your audience for tailored messaging, ensuring higher relevance and engagement."
        />
        <FeatureCard
          Icon={FaBrain}
          title="AI-Powered Content"
          description="Utilize AI algorithms to generate creative and optimized content for various platforms."
        />
        <FeatureCard
          Icon={FaBolt}
          title="Rapid Content Creation"
          description="Speed up your content creation process with our efficient and intuitive tools."
        />
        <FeatureCard
          Icon={FaSearchDollar}
          title="SEO-Optimized Copy"
          description="Enhance your online visibility with SEO-friendly copy that ranks higher in search results."
        />
        {/* Add more FeatureCard components as needed */}
      </div>
    </div>
  );
};

export default FeaturesSection;
