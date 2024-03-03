import React from 'react';

const Feature5 = ({ title, description, imageUrl }) => {
  return (
    <div className="flex flex-col md:flex-row bg-yellow-500">
  <div className="md:w-1/2 px-6 py-12 md:py-24 md:px-12">
    <h1 className="text-5xl font-bold text-black px-4 py-2 mb-6">
      AI Content Generation
    </h1>
    <p className="text-gray-900 mb-6">
      Harness the power of cutting-edge AI models (GPT-3.5, GPT-4, Claude) for
      intelligent content creation, rewriting, remixing, and more. Your AI
      assistant understands your needs and tailors content to your exact
      specifications.
    </p>
    <a href="/waitlist">
          <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-900">
            Join the Waitlist
          </button></a>
  </div>
  <div className="md:w-1/2">
    <img
      src="/homepage/fbads.png"
    />
  </div>
</div>

  );
}

export default Feature5;
