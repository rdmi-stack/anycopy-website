import React from 'react';

const GenAIEbook = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-indigo-700 to-purple-700 py-24 text-white min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-xl">  
            <h1 className="text-5xl font-extrabold mb-4">Generate Breakthrough Sales & Marketing Results with AI</h1> 
            <p className="text-xl mb-10">Discover cutting-edge AI strategies to streamline your workflows and elevate your campaigns.</p>

            <form netlify name="ebook-download" data-netlify="true"> 
              <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
                <input type="text" name="name" placeholder="Your Name" className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full md:w-1/2" />
                <input type="email" name="email" placeholder="Your Email" className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full md:w-1/2" />
              </div>
              <button type="submit" className="bg-white text-indigo-700 font-bold py-4 px-10 rounded-md hover:bg-indigo-100 transition-colors">Download Now</button>
            </form>
          </div>
         
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          {/* Add your eBook benefits section here */}
        </div>
      </section>
    </div>
  );
};

export default GenAIEbook;

