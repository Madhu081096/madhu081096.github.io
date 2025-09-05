import React from 'react';
import { GraduationCap, Award, Calendar, ExternalLink } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "Pattern Recognition and Machine Learning",
      provider: "Academic Coursework",
      instructor: "Graduate Level",
      date: "Academic",
      duration: "Semester",
      skills: ["Pattern Recognition", "Statistical Learning", "Classification", "Regression"],
      certificate: "#",
      grade: "A"
    },
    {
      title: "Computer Vision",
      provider: "Academic Coursework",
      instructor: "Graduate Level",
      date: "Academic",
      duration: "Semester",
      skills: ["Image Processing", "Feature Detection", "Object Recognition", "Deep Learning"],
      certificate: "#",
      grade: "A"
    },
    {
      title: "Geometry & Photometry based Computer Vision",
      provider: "Academic Coursework",
      instructor: "Graduate Level",
      date: "Academic",
      duration: "Semester",
      skills: ["3D Geometry", "Photometry", "Structure from Motion", "Stereo Vision"],
      certificate: "#",
      grade: "A+"
    },
    {
      title: "Advanced Digital Signal Processing",
      provider: "Academic Coursework",
      instructor: "Graduate Level",
      date: "Academic",
      duration: "Semester",
      skills: ["Signal Processing", "Fourier Analysis", "Filter Design", "Spectral Analysis"],
      certificate: "#",
      grade: "A"
    },
    {
      title: "Probability Foundations for Electrical Engineers",
      provider: "Academic Coursework",
      instructor: "Graduate Level",
      date: "Academic",
      duration: "Semester",
      skills: ["Probability Theory", "Random Processes", "Statistical Inference", "Estimation"],
      certificate: "#",
      grade: "A"
    },
    {
      title: "Mathematical Methods in System Engineering",
      provider: "Academic Coursework",
      instructor: "Graduate Level",
      date: "Academic",
      duration: "Semester",
      skills: ["Linear Algebra", "Optimization", "Control Theory", "System Analysis"],
      certificate: "#",
      grade: "A"
    },
    {
      title: "Convex Optimization",
      provider: "Academic Coursework",
      instructor: "Graduate Level",
      date: "Academic",
      duration: "Semester",
      skills: ["Convex Analysis", "Optimization Algorithms", "Duality", "Applications"],
      certificate: "#",
      grade: "A"
    },
    {
      title: "Medical Image Analysis",
      provider: "Academic Coursework",
      instructor: "Graduate Level",
      date: "Academic",
      duration: "Semester",
      skills: ["Medical Imaging", "Image Segmentation", "Registration", "Quantitative Analysis"],
      certificate: "#",
      grade: "A"
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
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{course.title}</h3>
                    <p className="text-purple-600 font-medium">{course.provider}</p>
                  </div>
                </div>
                <a 
                  href={course.certificate}
                  className="p-2 bg-purple-100 hover:bg-purple-200 rounded-lg transition-colors"
                  title="View Certificate"
                >
                  <ExternalLink size={16} className="text-purple-600" />
                </a>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Instructor:</span> {course.instructor}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{course.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} />
                    <span>Grade: {course.grade}</span>
                  </div>
                  <span>Duration: {course.duration}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;