import React from 'react';
import { Brain, Database, Cloud, Code, BarChart, Cpu } from 'lucide-react';

const AISkills = () => {
  const skillCategories = [
    {
      title: "Deep Learning",
      icon: <Brain className="text-purple-600" size={28} />,
      skills: ["CNNs", "RNNs", "Transformers", "Diffusion Models", "Generative Models"]
    },
    {
      title: "Classical Machine Learning",
      icon: <Cpu className="text-blue-600" size={28} />,
      skills: ["K-Means", "SVD", "GMM", "HMM", "Traditional Neural Networks"]
    },
    {
      title: "ML-Ops",
      icon: <Cloud className="text-teal-600" size={28} />,
      skills: ["Docker", "Dagster", "Cloud Service Platforms (Azure, GCP)"]
    },
    {
      title: "Languages",
      icon: <Code className="text-orange-600" size={28} />,
      skills: ["Python", "C++", "PostgreSQL", "HTML", "CSS"]
    },
    {
      title: "Framework",
      icon: <BarChart className="text-green-600" size={28} />,
      skills: ["PyTorch"]
    },
    {
      title: "Libraries & Toolkits",
      icon: <Database className="text-red-600" size={28} />,
      skills: ["OpenCV", "Pandas", "Hugging Face", "LangChain"]
    }
  ];

  const applications = [
    "Image Super-Resolution",
    "Image Classification", 
    "Object Detection",
    "Image Segmentation",
    "Depth Estimation",
    "Neural Network Design & Optimization"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise in machine learning, computer vision, and medical image analysis, 
            from research and experimentation to practical applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 text-sm font-medium rounded-full hover:from-purple-200 hover:to-blue-200 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Applications</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {applications.map((app, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 font-medium rounded-full hover:from-blue-200 hover:to-purple-200 transition-all duration-200 cursor-default"
              >
                {app}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISkills;