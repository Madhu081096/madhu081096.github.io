import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, full-featured e-commerce platform built with React and Node.js. Features include user authentication, payment processing, inventory management, and real-time order tracking.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2024"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team communication features. Built with modern web technologies for optimal performance.",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Express"],
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2023"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "A comprehensive weather analytics platform that visualizes climate data through interactive charts and maps. Integrates with multiple weather APIs for accurate forecasting.",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "Docker"],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2023"
    },
    {
      title: "AI Content Generator",
      description: "An intelligent content creation tool powered by machine learning algorithms. Helps users generate high-quality written content for various use cases with customizable parameters.",
      technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "Vercel"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "#",
      date: "2024"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on recently. Each one represents a unique challenge 
            and showcases different aspects of my technical expertise.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <a 
                    href={project.liveUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors shadow-md"
                    title="View Live"
                  >
                    <ExternalLink size={16} className="text-gray-700" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors shadow-md"
                    title="View Code"
                  >
                    <Github size={16} className="text-gray-700" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 text-sm rounded-full flex items-center gap-1"
                    >
                      <Tag size={12} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;