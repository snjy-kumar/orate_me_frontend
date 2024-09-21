import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-blue-600 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Enhance Your Soft Skills?</h2>
        <p className="text-xl text-white mb-8">
          Start your journey to better communication and professional success today.
        </p>
        <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">
          Try SoftSkillsAI for Free
        </button>
      </div>
    </section>
  );
};

export default CTA;