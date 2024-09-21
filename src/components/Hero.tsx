import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">
          Enhance Your Soft Skills with AI-Powered Training
        </h1>
        <p className="text-xl mb-8">
          Improve your group discussion skills, ace your interviews, and boost your speaking abilities with real-time AI feedback and monitoring.
        </p>
        <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-blue-100 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;