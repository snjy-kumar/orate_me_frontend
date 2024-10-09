import Image from 'next/image';
import React from 'react';

const About: React.FC = () => {
    const interview = '/interview.jpg';
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src={interview} alt="AI-powered training" width={500} height={500} className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">About SoftSkillsAI</h2>
            <p className="text-gray-600 mb-4">
              SoftSkillsAI is a cutting-edge platform that leverages artificial intelligence to help you improve your soft skills. Our AI-powered tools provide real-time monitoring and feedback, allowing you to enhance your communication abilities in various scenarios.
            </p>
            <p className="text-gray-600 mb-4">
              Whether you&apos;re preparing for a job interview, honing your group discussion techniques, or working on your public speaking skills, our platform offers personalized training tailored to your needs.
            </p>
            <p className="text-gray-600">
              With SoftSkillsAI, you&apos;ll gain the confidence and expertise needed to excel in your professional and personal interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;