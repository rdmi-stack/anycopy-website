import React from 'react';

const Feature = ({ title, description, imageUrl }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16 px-4">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold leading-tight mb-4 text-indigo-600">{title}</h1>
        <p className="text-xl text-gray-700">{description}</p>
      </div>
      <div className="flex justify-center md:justify-end">
        <img 
          src="/homepage/writer2.png" // Sample Image
          alt={title} 
          className="w-full md:w-auto h-auto rounded-lg shadow-lg" 
        />
      </div>
    </section>
  );
}

export default Feature;
