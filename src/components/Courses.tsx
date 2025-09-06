import React from 'react';
import { GraduationCap, Award, Calendar, ExternalLink } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "Pattern Recognition and Machine Learning",
    },
    {
      title: "Computer Vision",
    },
    {
      title: "Geometry & Photometry based Computer Vision",
    },
    {
      title: "Advanced Digital Signal Processing",
    },
    {
      title: "Probability Foundations for Electrical Engineers",
    },
    {
      title: "Mathematical Methods in System Engineering",
    },
    {
      title: "Convex Optimization",
    },
    {
      title: "Medical Image Analysis",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Courses & Certifications</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Continuous learning through world-class courses and certifications from leading institutions 
            and industry experts in AI and machine learning.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{course.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;