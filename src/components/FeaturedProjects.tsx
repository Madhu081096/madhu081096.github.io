import React from 'react';
import { ExternalLink, Github, Calendar, Tag, Star, TrendingUp } from 'lucide-react';

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      title: "PDF Reader using LangChain & GPT-OSS",
      description: "Built an intelligent PDF reader leveraging LangChain and GPT-OSS to enable context-aware querying and summarization of documents. Utilized FAISS as a vector database to store chunked PDF embeddings generated using Sentence-Transformer (all-mpnet-base-v2). Implemented a retrieval-based pipeline where user queries are matched with the most relevant PDF chunks, and GPT-OSS is used to generate accurate answers and concise summaries.",
      technologies: ["LangChain", "GPT-OSS", "FAISS", "Sentence-Transformers", "all-mpnet-base-v2", "Python"],
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2024",
      impact: "Intelligent Document Processing",
      accuracy: "Context-Aware Responses",
      featured: true
    },
    {
      title: "Reference-Based Texture Transfer for MRI Super-Resolution (IEEE ISBI 2021)",
      description: "Developed a reference-based, unpaired multi-contrast texture transfer strategy for deep learning-based in-plane and across-plane super-resolution of MRI spine images. Achieved significant improvements over baseline architectures and published the work in IEEE ISBI 2021.",
      technologies: ["Deep Learning", "CNNs", "MRI Super-Resolution", "Texture Transfer", "Python", "PyTorch"],
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2021",
      impact: "Published Research",
      accuracy: "Significant Improvements",
      featured: true
    },
    {
      title: "Simulation and Automatic Detection of Artifacts in MRI Images",
      description: "Collaborated with GE Healthcare data scientists and researchers to simulate artifacts in MRI images and developed algorithms to automatically classify images based on the severity of artifacts.",
      technologies: ["MRI", "Artifact Simulation", "Classification", "GE Healthcare", "Python", "Quality Control"],
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2021",
      impact: "GE Healthcare Collaboration",
      accuracy: "Artifact Classification",
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Star className="text-yellow-500" size={32} />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Featured Projects</h2>
            <Star className="text-yellow-500" size={32} />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcase of impactful AI/ML projects that have made a real difference in production environments, 
            serving millions of users and driving business value.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-1 gap-12">
          {featuredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="lg:flex">
                <div className="lg:w-2/5 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <Star size={14} />
                      Featured
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a 
                      href={project.liveUrl}
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
                      title="View Live"
                    >
                      <ExternalLink size={18} className="text-gray-700" />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
                      title="View Code"
                    >
                      <Github size={18} className="text-gray-700" />
                    </a>
                  </div>
                </div>
                
                <div className="lg:w-3/5 p-8 lg:p-12">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{project.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {project.date}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="text-green-600" size={20} />
                        <span className="font-semibold text-green-800">Impact</span>
                      </div>
                      <p className="text-green-700 font-medium">{project.impact}</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="text-blue-600" size={20} />
                        <span className="font-semibold text-blue-800">Accuracy</span>
                      </div>
                      <p className="text-blue-700 font-medium">{project.accuracy}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 text-sm font-medium rounded-full flex items-center gap-1"
                      >
                        <Tag size={12} />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;