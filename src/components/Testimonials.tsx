import React from 'react';

const TestimonialCard: React.FC<{ name: string; role: string; quote: string }> = ({ name, role, quote }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-600 mb-4">{quote}</p>
    <div className="font-semibold">{name}</div>
    <div className="text-sm text-gray-500">{role}</div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Sarah Johnson"
            role="Marketing Manager"
            quote="SoftSkillsAI helped me ace my job interview. The AI-powered practice sessions were incredibly realistic and boosted my confidence."
          />
          <TestimonialCard
            name="Michael Chen"
            role="Software Engineer"
            quote="The group discussion simulator is fantastic. It's helped me become more assertive and articulate in team meetings."
          />
          <TestimonialCard
            name="Emily Rodriguez"
            role="Sales Representative"
            quote="My public speaking skills have improved dramatically thanks to SoftSkillsAI. The real-time feedback is invaluable."
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;