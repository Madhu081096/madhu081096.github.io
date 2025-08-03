import React from 'react';
import { GraduationCap, Award, Calendar, ExternalLink } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "Deep Learning Specialization",
      provider: "Stanford University / Coursera",
      instructor: "Andrew Ng",
      date: "2023",
      duration: "4 months",
      skills: ["Neural Networks", "CNNs", "RNNs", "Deep Learning"],
      certificate: "#",
      grade: "98%"
    },
    {
      title: "Machine Learning Engineering for Production (MLOps)",
      provider: "DeepLearning.AI",
      instructor: "Andrew Ng, Laurence Moroney",
      date: "2023",
      duration: "3 months",
      skills: ["MLOps", "Model Deployment", "Data Pipelines", "Monitoring"],
      certificate: "#",
      grade: "96%"
    },
    {
      title: "Advanced Computer Vision",
      provider: "MIT OpenCourseWare",
      instructor: "Prof. Antonio Torralba",
      date: "2022",
      duration: "6 months",
      skills: ["Computer Vision", "Object Detection", "Image Segmentation", "GANs"],
      certificate: "#",
      grade: "A+"
    },
    {
      title: "Natural Language Processing with Transformers",
      provider: "Hugging Face / Coursera",
      instructor: "Lewis Tunstall, Leandro von Werra",
      date: "2022",
      duration: "2 months",
      skills: ["NLP", "BERT", "GPT", "Transformers", "Fine-tuning"],
      certificate: "#",
      grade: "95%"
    },
    {
      title: "Reinforcement Learning",
      provider: "University of Alberta / Coursera",
      instructor: "Martha White, Adam White",
      date: "2021",
      duration: "4 months",
      skills: ["Q-Learning", "Policy Gradients", "Actor-Critic", "Multi-Agent RL"],
      certificate: "#",
      grade: "94%"
    },
    {
      title: "AI for Healthcare",
      provider: "Stanford University",
      instructor: "Prof. Pranav Rajpurkar",
      date: "2021",
      duration: "3 months",
      skills: ["Medical AI", "Diagnostic Models", "Healthcare Data", "Ethics in AI"],
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