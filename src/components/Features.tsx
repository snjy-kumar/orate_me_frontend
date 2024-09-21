import React from 'react';

const FeatureCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our AI-Powered Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Group Discussion Simulator"
            description="Practice group discussions with AI participants and receive real-time feedback on your performance."
          />
          <FeatureCard
            title="Interview Preparation"
            description="Prepare for interviews with our AI interviewer and get personalized tips to improve your responses."
          />
          <FeatureCard
            title="Speech Enhancement"
            description="Improve your public speaking skills with AI-powered analysis of your tone, pace, and clarity."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;