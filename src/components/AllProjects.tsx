import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag, Filter, Search, Star, TrendingUp, Users, Zap } from 'lucide-react';

const AllProjects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: "Reference-Based Texture Transfer for MRI Super-Resolution",
      description: "Developed a reference-based, unpaired multi-contrast texture-transfer strategy for deep learning based in-plane and across-plane super-resolution of MRI spine images. Published in IEEE ISBI 2021.",
      technologies: ["PyTorch", "Deep Learning", "Medical Imaging", "Super-Resolution", "MRI"],
      category: "Computer Vision",
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2021",
      impact: "Published Research",
      accuracy: "Improved Quality",
      featured: true
    },
    {
      title: "Vertebrae Level Fracture Classification",
      description: "Collaborated with Eindhoven Medical Robotics to classify vertebrae level fractures in CT images. Constructed Digitally Reconstructed Radiograph (DRR) of CT volumes for fracture classification.",
      technologies: ["CT Imaging", "DRR", "Classification", "Medical Robotics", "Python"],
      category: "Machine Learning",
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2021",
      impact: "Medical Collaboration",
      accuracy: "Clinical Grade",
      featured: true
    },
    {
      title: "MRI Artifact Detection and Simulation",
      description: "Collaborated with GE Healthcare data scientists to develop algorithms for simulating artifacts in MRI and classifying images based on artifact severity.",
      technologies: ["MRI", "Artifact Simulation", "Classification", "GE Healthcare", "Python"],
      category: "Medical Imaging",
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2021",
      impact: "Industry Collaboration",
      accuracy: "Automated Detection",
      featured: true
    },
    {
      title: "Obstacle Detection Near Car Doors",
      description: "Experimented with multiple object detection and depth estimation techniques using single camera for detecting obstacles near car doors.",
      technologies: ["Object Detection", "Depth Estimation", "Single Camera", "OpenCV", "Python"],
      category: "Computer Vision",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2021",
      impact: "Automotive Safety",
      accuracy: "Real-time Detection",
      featured: false
    },
    {
      title: "Machine Vision System for Dimension Analysis",
      description: "Developed a flexible machine vision system for critical dimension analysis of industrial components using Canny edge detection algorithm, realized in real-time using Raspberry Pi.",
      technologies: ["Machine Vision", "Canny Edge Detection", "Raspberry Pi", "Industrial Components", "Real-time"],
      category: "Machine Vision",
      image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2020",
      impact: "Industrial Application",
      accuracy: "Precise Measurement",
      featured: false
    },
    {
      title: "MediSinGAN - Medical Data Generation",
      description: "Collaborated with 6 participants from EEML '21 summer school in Budapest to simulate synthetic medical data by training GAN on single training image.",
      technologies: ["GAN", "Medical Data", "Single Image", "Synthetic Data", "PyTorch"],
      category: "Generative AI",
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2021",
      impact: "International Collaboration",
      accuracy: "Synthetic Generation",
      featured: false
    },
    {
      title: "ML Workflow for Alloy Design in Additive Manufacturing",
      description: "Developed a workflow based on machine learning and physical simulation for alloy design. Worked on ML model for predicting alloy properties based on composition for physical simulation.",
      technologies: ["Machine Learning", "Physical Simulation", "Alloy Design", "Property Prediction", "Python"],
      category: "Materials Science",
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2020",
      impact: "Manufacturing Innovation",
      accuracy: "Property Prediction",
      featured: false
    }
  ];

  const categories = ['All', 'Computer Vision', 'Machine Learning', 'Medical Imaging', 'Machine Vision', 'Generative AI', 'Materials Science'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">All Projects</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Complete portfolio of AI/ML projects spanning computer vision, NLP, time series analysis, 
            and production systems deployed at scale.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects, technologies, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div className="flex items-center gap-3">
              <Filter className="text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white min-w-[200px]"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <Star size={14} />
                      Featured
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4 flex gap-2">
                  <a 
                    href={project.liveUrl}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-md"
                    title="View Live"
                  >
                    <ExternalLink size={16} className="text-gray-700" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-md"
                    title="View Code"
                  >
                    <Github size={16} className="text-gray-700" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="text-green-600" size={14} />
                      <span className="text-green-800 text-xs font-medium">Impact</span>
                    </div>
                    <p className="text-green-700 text-xs font-medium">{project.impact}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="text-blue-600" size={14} />
                      <span className="text-blue-800 text-xs font-medium">Accuracy</span>
                    </div>
                    <p className="text-blue-700 text-xs font-medium">{project.accuracy}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="text-gray-400" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No projects found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;