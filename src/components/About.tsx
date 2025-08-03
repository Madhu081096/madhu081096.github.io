import React from 'react';
import { Code, Users, Zap, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Technical Excellence",
      description: "Expert in modern web technologies and best practices"
    },
    {
      icon: <Users className="text-teal-600" size={24} />,
      title: "Team Collaboration",
      description: "Strong communication skills and experience leading cross-functional teams"
    },
    {
      icon: <Zap className="text-orange-600" size={24} />,
      title: "Performance Focus",
      description: "Optimizing applications for speed, scalability, and user experience"
    },
    {
      icon: <Award className="text-purple-600" size={24} />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and methodologies"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer who loves creating beautiful, functional, and user-centered digital experiences. 
            With a strong foundation in both frontend and backend technologies, I enjoy solving complex problems and 
            bringing innovative ideas to life through code.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;