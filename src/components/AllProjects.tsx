import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag, Filter, Search, Star, TrendingUp, Users, Zap } from 'lucide-react';

const AllProjects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: "Medical Image Diagnosis AI",
      description: "Deep learning system for automated medical image analysis using CNNs and Vision Transformers. Achieved 94.2% accuracy in detecting lung cancer from CT scans.",
      technologies: ["PyTorch", "OpenCV", "FastAPI", "Docker", "AWS", "React"],
      category: "Computer Vision",
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2024",
      impact: "15+ hospitals",
      accuracy: "94.2%",
      featured: true
    },
    {
      title: "Real-time Fraud Detection System",
      description: "ML-powered fraud detection system processing 1M+ transactions daily with ensemble methods and real-time feature engineering.",
      technologies: ["Python", "Apache Kafka", "Redis", "PostgreSQL", "Kubernetes", "MLflow"],
      category: "Machine Learning",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2024",
      impact: "1M+ transactions/day",
      accuracy: "99.1%",
      featured: true
    },
    {
      title: "Conversational AI Assistant",
      description: "Advanced chatbot using transformer models and RAG architecture for customer support with 85% resolution rate.",
      technologies: ["Transformers", "LangChain", "Vector DB", "FastAPI", "React", "Azure"],
      category: "Natural Language Processing",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2023",
      impact: "60% ticket reduction",
      accuracy: "85%",
      featured: true
    },
    {
      title: "Autonomous Vehicle Perception",
      description: "Computer vision system for self-driving cars using YOLO and semantic segmentation for real-time object detection and lane recognition.",
      technologies: ["TensorFlow", "YOLO", "OpenCV", "ROS", "C++", "CUDA"],
      category: "Computer Vision",
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2023",
      impact: "Real-time processing",
      accuracy: "96.8%",
      featured: false
    },
    {
      title: "Stock Price Prediction Model",
      description: "LSTM-based deep learning model for predicting stock prices using technical indicators and sentiment analysis from news data.",
      technologies: ["PyTorch", "LSTM", "Pandas", "Alpha Vantage API", "Streamlit"],
      category: "Time Series",
      image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2023",
      impact: "15% better returns",
      accuracy: "78.3%",
      featured: false
    },
    {
      title: "Recommendation Engine",
      description: "Collaborative filtering and content-based recommendation system for e-commerce platform serving personalized product suggestions.",
      technologies: ["Python", "Scikit-learn", "Apache Spark", "Redis", "PostgreSQL"],
      category: "Machine Learning",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2022",
      impact: "25% increase in sales",
      accuracy: "89.2%",
      featured: false
    },
    {
      title: "Sentiment Analysis API",
      description: "RESTful API for real-time sentiment analysis of social media posts using BERT and custom fine-tuned models.",
      technologies: ["BERT", "FastAPI", "Docker", "MongoDB", "Twitter API"],
      category: "Natural Language Processing",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2022",
      impact: "1000+ API calls/min",
      accuracy: "92.1%",
      featured: false
    },
    {
      title: "Energy Consumption Optimizer",
      description: "IoT-based machine learning system for optimizing building energy consumption using sensor data and weather forecasts.",
      technologies: ["Python", "IoT Sensors", "Time Series", "AWS IoT", "Grafana"],
      category: "IoT & ML",
      image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2022",
      impact: "30% energy savings",
      accuracy: "87.5%",
      featured: false
    },
    {
      title: "Face Recognition Security System",
      description: "Real-time face recognition system for access control using deep learning and edge computing for enhanced security.",
      technologies: ["OpenCV", "FaceNet", "Raspberry Pi", "TensorFlow Lite", "SQLite"],
      category: "Computer Vision",
      image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2021",
      impact: "99.9% uptime",
      accuracy: "95.7%",
      featured: false
    },
    {
      title: "Document Classification System",
      description: "Automated document classification and information extraction system using NLP and OCR for legal document processing.",
      technologies: ["spaCy", "Tesseract OCR", "scikit-learn", "Flask", "PostgreSQL"],
      category: "Natural Language Processing",
      image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2021",
      impact: "80% time savings",
      accuracy: "91.4%",
      featured: false
    },
    {
      title: "Supply Chain Optimization",
      description: "Machine learning model for optimizing supply chain logistics using reinforcement learning and demand forecasting.",
      technologies: ["Python", "Reinforcement Learning", "OR-Tools", "Apache Airflow"],
      category: "Optimization",
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2021",
      impact: "20% cost reduction",
      accuracy: "88.9%",
      featured: false
    },
    {
      title: "Anomaly Detection in Networks",
      description: "Unsupervised learning system for detecting network anomalies and potential security threats in real-time.",
      technologies: ["Python", "Isolation Forest", "Elasticsearch", "Kibana", "Docker"],
      category: "Cybersecurity",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2020",
      impact: "99.2% threat detection",
      accuracy: "93.8%",
      featured: false
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];

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