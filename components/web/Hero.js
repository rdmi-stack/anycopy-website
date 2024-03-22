import React, { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  const baseHeadline = "Write Marketing Copy in Seconds with AI: ";
  const changingWords = ["Email", "Website", "Landing Page", "Social Media"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState(
    baseHeadline + changingWords[0],
  );
  const typingDelay = 200; // Adjust for desired typing speed

  const headlineElementRef = useRef(null);

  useEffect(() => {
    let typingInterval;

    if (headlineElementRef.current) {
      const typeWord = () => {
        let currentText = headlineElementRef.current.textContent;
        // Erase last 2-3 characters
        const eraseStart = Math.max(0, currentText.length - 3);
        currentText = currentText.substring(0, eraseStart);

        // Append next character from the current word
        const word = changingWords[currentWordIndex];
        currentText += word.substring(
          0,
          currentText.length - baseHeadline.length + 1,
        ); // +1 to keep iterating

        setDisplayText(currentText);

        if (currentText === baseHeadline + word) {
          // Move to next word after brief pause (adjust 1000 for desired pause duration)
          setTimeout(() => {
            setCurrentWordIndex(
              (prevIndex) => (prevIndex + 1) % changingWords.length,
            );
          }, 1000);
        }
      };

      typingInterval = setInterval(typeWord, typingDelay);
    }

    return () => clearInterval(typingInterval);
  }, [currentWordIndex, baseHeadline, changingWords, typingDelay]); // Dependency array for useEffect
  return (
    <section className="bg-white py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:mr-8 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              AI Copy Assistant for Marketing and Sales
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Write smarter, not harder with AI. Generate copy in seconds for
              websites, ads, emails, and more
            </p>
            <a
              href="https://app.anycopy.co/signup"
              className="inline-block bg-gray-900 text-white text-lg md:text-xl font-semibold py-4 px-8 rounded-md hover:bg-gray-800 transition-colors"
            >
              Start Your Free 
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/anycopy-hero.png"
              alt="AI Assistant"
              className="rounded-lg shadow-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
